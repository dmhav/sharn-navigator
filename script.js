//script.js
document.addEventListener('DOMContentLoaded', function () {
    // Constantes
    const arrow_dimensions = 50;
    const arrow_height = `${arrow_dimensions}px`;
    const arrow_width = `${arrow_dimensions}px`;

    // Variáveis
    let currentDistrict;
    let clock;
    let calendar;
    let isDarkMode;
    let mapSrc;
    let arrowHistory;
    // Carregando estado
    loadState();

    // 
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    document.getElementById('title').textContent = sharn.name;
    // Seções da página
    //const mainDiv = document.getElementById('main-container');
    // Navegação
    const nameDiv = document.getElementById('name');
    const descriptionDiv = document.getElementById('description');
    const navigationDiv = document.getElementById('navigation');
    // Skycoach
    const skycoachModal = document.getElementById('skycoach-modal');
    const skycoachList = document.getElementById('skycoach-districts-select');
    // Imagens
    const slice_img = document.getElementById('slice-map-img');
    const vert_img = document.getElementById('vertical-map-img');
    const arrow_slice = document.getElementById("slice-arrow-img");
    const arrow_vert = document.getElementById("vertical-arrow-img");
    const canvas_slice = document.getElementById("slice-arrow-history-canvas");
    const canvas_vert = document.getElementById("vertical-arrow-history-canvas");

    
    // Botões
    // Skycoach
    const toggleSkycoachButton = document.getElementById('skycoach-button');
    // Clock/calendar
    const waitButton = document.getElementById('wait-button');
    const skipButton = document.getElementById('skip-button');
    // Configurações
    const darkButton = document.getElementById('dark-button');
    const resetButton = document.getElementById('reset-button');
    // Caminho
    const pathButton = document.getElementById('path-button');
    
    // Clock
    const clockDisplay = document.getElementById('clock');
    const events = document.getElementById('events');
    updateClockDisplay(clock);

    // Operações preliminares
    initializeImages();
    populateSkycoachDistrictsList();
    updateDistrictInfo();
    
    // Event listeners
    
    window.addEventListener('load', () => {
        updateArrowPosition(); // Precisa ficar aqui porque 
    });

    let pathDrawn = false;
    pathButton.addEventListener('click', () =>{
        if (pathDrawn) {
            location.reload();
            pathButton.textContent = "Draw path";
        } else {
            drawHistoryLines();
            pathButton.textContent = "Erase path";
        }
        pathDrawn = !pathDrawn;
    })

    waitButton.addEventListener('click', () => {
        const minutes = prompt('How many minutes do you want to wait?\n1h = 60\n1 dia = 1440');
        if (minutes !== null && !isNaN(minutes)) {
            clock.incrementClock(parseInt(minutes));
            updateClockDisplay(clock);
        }
    });

    skipButton.addEventListener('click', () => {
        const days = prompt('How many days do you want to skip?\n1 semana = 7\n1 mês = 28\n1 ano = 336');
        if (days !== null && !isNaN(days)) {
            const minutes = parseInt(days) * 1440;
            clock.incrementClock(minutes);
            updateClockDisplay(clock);
        }
    });

    // Lidando com configurações da página

    darkButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateTooltip();
    });

    resetButton.addEventListener('click', () => {
        //localStorage.removeItem('darkMode');
        localStorage.setItem('currentDistrict', "Terminus");
        localStorage.setItem('clock', JSON.stringify(new Clock(1, 8, 0)));
        localStorage.setItem('calendar', JSON.stringify(new Calendar(1, 1, 998)));
        localStorage.setItem('arrowHistory', "[]");
        location.reload(); // Recarrega a página para aplicar a mudança
        updateTooltip();
    });

    // FUNÇÕES
    function drawHistoryLines() {
        function getCanvasCoordinates(point, canvas, img, map) {
            const ratio = getSizeRatio(img);
            console.log(`Canvas: ${canvas.width}x${canvas.height}`);
            console.log(`Img ratio: ${JSON.stringify(ratio)}`);
            let x,y;
            if (map == "slice") {
                x = point.slice_x * ratio.widthRatio * (canvas.width/img.clientWidth);
                y = point.slice_y * ratio.heightRatio * (canvas.height/img.clientHeight);
            } else {
                x = point.vert_x * ratio.widthRatio * (canvas.width/img.clientWidth);
                y = point.vert_y * ratio.heightRatio * (canvas.height/img.clientHeight);
            }
            return [x,y];
        }

        // Draw the line passing through all points in arrowHistory
        let ctx_slice = canvas_slice.getContext('2d');
        const colors = ['red', 'green', 'blue'];
        ctx_slice.lineWidth = 2;
        for (let i = 0; i < arrowHistory.length - 1; i++) {
            [x1,y1] = getCanvasCoordinates(arrowHistory[i], canvas_slice, slice_img, "slice");
            [x2,y2] = getCanvasCoordinates(arrowHistory[i+1], canvas_slice, slice_img, "slice");
            ctx_slice.beginPath();
            ctx_slice.strokeStyle = colors[i%3];
            ctx_slice.moveTo(x1, y1);
            ctx_slice.lineTo(x2, y2);
            ctx_slice.stroke();
            ctx_slice.closePath();
        }
    }

    /* DEPRECADA - ESCOLHE UM ELEMENTO ALEATÓRIO DE UM ARRAY
    function getRandomElement(images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }*/
    function updateTooltip() {
        const darkModeStatus = localStorage.getItem('darkMode') === 'true' ? 'enabled' : 'disabled';
        resetButton.title = `Current settings:
        Dark Mode is ${darkModeStatus}
        District is ${currentDistrict.getName()}
        Clock is ${JSON.stringify(clock)}
        Calendar is ${JSON.stringify(calendar)}
        `;
    }

    function saveState() {
        //console.log(currentDistrict);
        localStorage.setItem('currentDistrict', currentDistrict.getName());
        localStorage.setItem('clock', JSON.stringify(clock));
        localStorage.setItem('calendar', JSON.stringify(calendar));
        localStorage.setItem('arrowHistory', JSON.stringify(arrowHistory));
        console.log("State saved")
    }

    // Função para carregar os dados do localStorage
    function loadState() {
        isDarkMode = localStorage.getItem('darkMode') === 'true'
        const savedDistrictName = localStorage.getItem('currentDistrict');
        const savedClock = localStorage.getItem('clock');
        const savedCalendar = localStorage.getItem('calendar');
        const savedHistory = localStorage.getItem('arrowHistory');
        // Logs
        console.log("Loading state");
        console.log(`${isDarkMode ? "Dark" : "Light"} mode`);
        console.log(`Stored district: ${savedDistrictName}`);
        console.log(`Stored clock: ${savedClock}`);
        console.log(`Stored calendar: ${savedCalendar}`);
        console.log(`Stored history: ${savedHistory}`);
    
        try {
            if (savedDistrictName) {
                currentDistrict = sharn.getDistrict(savedDistrictName);
            } else {
                currentDistrict = sharn.getDistrict("Terminus");
            }
            if (savedClock) {
                const parsedClock = JSON.parse(savedClock);
                clock = new Clock(parsedClock.day, parsedClock.hour, parsedClock.minute);
            }
            else{
                clock = new Clock(1, 8, 0);
            }
            if (savedCalendar) {
                const parsedCalendar = JSON.parse(savedCalendar);
                calendar = new Calendar(parsedCalendar.day, parsedCalendar.month, parsedCalendar.year);
            }
            else {
                calendar = new Calendar(1, 1, 998);
            }
            if (savedHistory) {
                arrowHistory = JSON.parse(savedHistory);
            } else {
                arrowHistory = []
            }
        } catch (error) {
            console.error("Falha ao carregar o estado", error);
        }
        console.log("State loaded");
    }

    function initializeImages() {
        // Mapa em corte
        mapSrc = getMap(currentDistrict);
        slice_img.onload = function () {
            storeOriginalDimensions(slice_img);
        };
        slice_img.src = mapSrc;
    
        // Seta do mapa em corte
        arrow_slice.style.width = arrow_width;
        arrow_slice.style.height = arrow_height;
    
        // Mapa vertical
        vert_img.onload = function () {
            storeOriginalDimensions(vert_img);
        };
        vert_img.src = 'Sharn2.jpg';
    
        arrow_vert.style.width = arrow_width;
        arrow_vert.style.height = arrow_height;
    }

    // Skycoach logic
    skycoachList.onchange = function () {
        let selectedDistrictName = this.value;
        console.log(`Flew to ${selectedDistrictName}`);
        console.log(`Map: ${getMap(sharn.getDistrict(selectedDistrictName))}`);
        travelToSkycoachDistrict(selectedDistrictName);
    }

    toggleSkycoachButton.addEventListener('click', () => {
        skycoachModal.classList.toggle('collapsed');
        skycoachList.classList.toggle('collapsed');
        toggleSkycoachButton.classList.toggle('expanded');
        toggleSkycoachButton.classList.toggle('collapsed');
    });

    window.addEventListener('resize', () => {
        updateArrowPosition();
    });

    function storeOriginalDimensions(img) {
        img.originalWidth = img.naturalWidth;
        img.originalHeight = img.naturalHeight;
    }

    function getSizeRatio(img) {
        const currentWidth = img.clientWidth;
        const currentHeight = img.clientHeight;

        const widthRatio = currentWidth / img.originalWidth;
        const heightRatio = currentHeight / img.originalHeight;

        return { widthRatio, heightRatio };
    }

    function setArrowPosition(arrow, x, y, size) {
        x_calc = x - Math.floor(size / 2);
        y_calc = y - Math.floor(size / 2);
        arrow.style.left = `${x_calc}px`;
        arrow.style.top = `${y_calc}px`;
        arrow.style.width = `${size}px`;
        arrow.style.height = `${size}px`;
    }

    function updateDistrictInfo() {
        updateTooltip();
        nameDiv.textContent = `${currentDistrict.getName()} - ${currentDistrict.getWard().getName()}`;
        
        clearChildren(descriptionDiv);
        clearChildren(navigationDiv);
    
        appendDescription(currentDistrict.getDescription(), descriptionDiv);
        updateLocationsList(currentDistrict.getLocationArray());
        updateConnections(currentDistrict.getConnectionArray());

        slice_img.src = getMap(currentDistrict);
        skycoachList.value = currentDistrict.getName();
    }
    
    function clearChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    
    function appendDescription(description, parentElement) {
        let descriptionPara = document.createElement('p');
        descriptionPara.textContent = description;
        parentElement.appendChild(descriptionPara);
    }
    
    function updateLocationsList(locationsArray) {
        let locationsHeader = document.getElementById('locations-header');
        let locationsList = document.getElementById('locations-list');
        clearChildren(locationsList);
        
        if (locationsArray.length == 0) {
            locationsHeader.classList.toggle('collapsed');
        }
    
        locationsArray.forEach((location, index) => {
            let locationItem = document.createElement('li');
            locationItem.textContent = location.getName();
            
            let locationDescription = document.createElement('span');
            locationDescription.textContent = ` - ${location.getDescription()}`;
            locationDescription.classList.add('collapsed');
            
            locationItem.appendChild(locationDescription);
            locationItem.id = `location-id-${index}`;
            locationDescription.id = `location-description-${index}`;
            locationItem.addEventListener('click', function () {
                locationDescription.classList.toggle('collapsed');
                clock.incrementClock(5);
                updateClockDisplay(clock);
            });
    
            locationsList.appendChild(locationItem);
        });
    }
    
    function updateConnections(connections) {
        connections.forEach(connectedDistrict => {
            const button = document.createElement('button');
            
            const { connectionText, connectionText2 } = getConnectionText(connectedDistrict);
            //console.log(JSON.stringify({connectionText, connectionText2}));
            button.textContent = `${connectionText} para ${connectedDistrict.getName()}${connectionText2}`;
            button.onclick = function () {
                travelToConnectedDistrict(connectedDistrict);
            };
    
            navigationDiv.appendChild(button);
        });
    }
    
    function getConnectionText(connectedDistrict) {
        let connectionText = "";
        let connectionText2 = "";
        
        let connectMap = getMap(connectedDistrict);
        let currentMap = getMap(currentDistrict);
    
        //console.log(JSON.stringify({currentMap, connectMap}));

        if (connectMap !== currentMap) {
            connectionText2 = ` (${connectedDistrict.getWard().getName()})`;
            if (currentMap.includes("The_Cogs") || connectMap.includes("Skyway")) {
                connectionText = "↑ Subir";
            } else if (
                (connectMap.includes("M_") && currentMap.includes("L_")) || 
                (connectMap.includes("U_") && currentMap.includes("M_"))) {
                connectionText = "↑ Subir";
            } else if (currentMap.includes("Skyway") || connectMap.includes("The_Cogs")) {
                connectionText = "↓ Descer";
            } else if (
                ((connectMap.includes("M_") && currentMap.includes("U_")) ||
                (connectMap.includes("L_") && currentMap.includes("M_")))) {
                    connectionText = "↓ Descer";
                }
        } else if (connectedDistrict.getWard() !== currentDistrict.getWard()) {
            connectionText2 = ` (${connectedDistrict.getWard().getName()})`;
            connectionText = "↷ Atravessar";
        } else {
            connectionText = "→ Ir";
            connectionText2 = "";
        }
        return { connectionText, connectionText2 };
    }
    
    function travelToConnectedDistrict(connectedDistrict) {
        currentDistrict = connectedDistrict;
        clock.incrementClock(15);
        updateClockDisplay(clock);
        updateDistrictInfo();
        updateArrowPosition();
    }
    

    function getMap(district) {
        const wardName = district.getWard().getName();
        if (wardName == 'Skyway') {
            return "Skyway.jpg";
        }
        else if (wardName.includes('Upper') || wardName.includes('City of the Dead')) {
            return "U_Wards.jpg";
        } else if (wardName.includes('Middle')) {
            return "M_Wards.jpg";
        }
        else if (wardName.includes('Lower') || wardName.includes('Cliffside')) {
            return "L_Wards.jpg";
        }
        else if (wardName == 'The Cogs') {
            return "The_Cogs.jpg";
        }
        else {
            console.error("Failed to fetch district map", district);
            return;
        }
    }

    function updateArrowPosition() {
        arrowPosition = currentDistrict.arrow_positions;
        if (typeof arrowPosition != "object") {
            console.error("Invalid arrowPosition:", arrowPosition);
            return;
        }
        const sliceRatio = getSizeRatio(slice_img);
        const slice_x = arrowPosition.slice_x * sliceRatio.widthRatio;
        const slice_y = arrowPosition.slice_y * sliceRatio.heightRatio;
        const sliceArrowSize = arrow_dimensions * sliceRatio.widthRatio; // Base size of arrow_dimensions pixels
        setArrowPosition(arrow_slice, slice_x, slice_y, sliceArrowSize);
        
        const vertRatio = getSizeRatio(vert_img);
        const vert_x = arrowPosition.vert_x * vertRatio.widthRatio;
        const vert_y = arrowPosition.vert_y * vertRatio.heightRatio;
        const vertArrowSize = arrow_dimensions * vertRatio.widthRatio; // Base size of arrow_dimensions pixels
        setArrowPosition(arrow_vert, vert_x, vert_y, vertArrowSize);
            
        if (JSON.stringify(arrowHistory.at(-1)) != JSON.stringify(arrowPosition)) {
            arrowHistory.push(arrowPosition);
            saveState();
        }
    }


    // Função para exibir a lista da de Skycoach
    document.getElementById('skycoach-button').onclick = function () {
        let modal = document.getElementById('skycoach-modal');
        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
        } else {
            modal.classList.add('hidden');
        }
    };

    // Função para viajar para o distrito selecionado
    function travelToSkycoachDistrict(districtName) {
        if (districtName !== currentDistrict.getName()) {
            // Obter o objeto District de destino
            currentDistrict = sharn.getDistrict(districtName);

            // Incrementando o relógio
            clock.incrementClock(30);
            updateClockDisplay(clock);

            // Atualizar a interface com as informações do novo distrito
            updateDistrictInfo();
            updateArrowPosition();
        }
    }

    // Funções para carregar e exibir a lista que controla a viagem por skycoach 

    // Função para criar e adicionar um option dinâmico
    function createOption(value, text) {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        return option;
    }

    // Função para criar a lista de opções de distritos
    function populateSkycoachDistrictsList() {
        for (let ward of sharn.wards) {
            //console.log(ward);
            for (let district of ward.districts) {
                let listItem = createOption(`${district.getName()}`, `${district.getName()} (${ward.getName()})`)
                skycoachList.appendChild(listItem);
            }
        }
        skycoachList.value = currentDistrict.getName();
    }

    // Funções para controlar o relógio
    function updateEvents() {
        let hasEvent = true;
        function updateTicker(text, tooltip) {
            events.textContent = text;
            if (tooltip) {
                events.title = tooltip
            } else {
                events.title = ""
            }
        }
        function isDay(num) {
            if (typeof num === "number") {
                return num == calendar.day;
            } else if (typeof num === "object") {
                return num.indexOf(calendar.day) >= 0;
            }
            else {
                console.log(`Tentei comparar o dia com algo que não é número nem array: ${num}`);
                return false;
            }
        }
        function isMonth(name) {
            return months[calendar.month - 1].name == name;
        }
        // Nenhum outro evento acontece num dia 6, mas esse IF não vai funcionar como está se algum for incluído.
        if (isDay(6)) {
            updateTicker("Ir Tain Gala - ", "The richest and most powerful family in Sharn throws this ball on the first Far of each month");
        } 
        else if (isMonth("Olarune")) {
            isDay(9) ? updateTicker("Crystalfall - ", "A day to remember to remember the fall of a tower in the district now known as Fallen. People celebrate by throwing ice sculptures into the Dagger River") : 
            isDay(20) ? updateTicker("Day of Mourning Anniversary - ", "This day is specially significant to Cyran refugees") : hasEvent = false;
        }
        else if (isMonth("Therendor")) {
            isDay(15) ? updateTicker("Sun's Blessing - ", "Festival to Dol Arrah, a (mostly) peaceful day dedicated to making ammends") : hasEvent = false;
        }
        else if (isMonth("Dravago")) {
            isDay(26) ? updateTicker("Aureon's Crown - ", "A day to celebrate knowledge. Graduation day at Morgrave University. Public lecutes are given at the Greath Hall of Aureon") : hasEvent = false;
        }
        else if (isMonth("Nymm")) {
            isDay(12) ? updateTicker("Brightblade - ", "Festival to Dol Dorn. Many contests (wrestling, archery, etc.) are held throughout Sharn, ending with a grand contest at the Cornerstone") : hasEvent = false;
        }
        else if (isMonth("Lharvion")) {
            isDay(23) ? updateTicker("The Race of Eight Winds - ", "The most anticapted day of the year for the denizens of Dura. Teams prepare during the whole year for this aerial race across the plateau.") : hasEvent = false;
        }
        else if (isMonth("Barrakas")) {
            isDay(4) ? updateTicker("The Hunt - ", "A ceremonial hunt occurs in the Depths to honor Balinor. Hunters must pay 5gp each, but the winning party gets 500gp!") : 
            isDay(25) ? updateTicker("Fathen's Fall - ", "Followers of the Silver Flame commemorate a priest martyred while exposing lycanthropes in Sharn. Tension with the shifter community often rises on this day.") : hasEvent = false;
        }
        else if (isMonth("Rhaan")) {
            isDay(9) ? updateTicker("Boldrei's Feast - ", "Parties are thrown across the city by the Vassals to celebrate community") : hasEvent = false;
        }
        else if (isMonth("Sypheros")) {
            isDay(1) ? updateTicker("The Ascension - ", "A celebration of the sacrifice of Tira Miron, who gave her life to serve as the Voice the Silver Flame") : hasEvent = false;
        }
        else if (isMonth("Sypheros")) {
            isDay([18, 19]) ? updateTicker("Wildnight - ", "People believe that the Fury (one of the Dark Six) is at the height of its power from sundown on the 18th to sunrise on the 19th. Most people keep inside during this night, but some embrace the celebratory revels or use it to cover crimes") : hasEvent = false;
        }
        else if (isMonth("Aryth")) {
            isDay(11) ? updateTicker("Thronehold - ", "The Lord Mayor of Sharn promised an epic festival to celebrate the anniversary of the day the signature of the Treaty of Thronehold.") : hasEvent = false;
        }
        else if (isMonth("Vult")) {
            isDay([26,27,28]) ? updateTicker("Long Shadows - ", "Most people keep inside during these days, as it is said that the Shadow (one of the Dark Six) is at the height of its power") : hasEvent = false;
        }
        else {
            hasEvent = false;
        }
        if (!hasEvent) {
            updateTicker("", "A regular day");
        }
    }

    function updateClockDisplay(updated_clock) {
        const formattedHours = String(updated_clock.hour).padStart(2, '0');
        const formattedMinutes = String(updated_clock.minute).padStart(2, '0');
        calendar.update(updated_clock.day);
        const formattedCalendar = calendar.getDate();
        clockDisplay.textContent = `${formattedCalendar} - ${formattedHours}h${formattedMinutes}`;
        updateEvents();
        saveState();
        updateTooltip();
    }

});