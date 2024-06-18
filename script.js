//script.js

document.addEventListener('DOMContentLoaded', function () {
    const lightImages = [
        'cover.jpg'
    ];
    const darkImages = [
        'cover1.jpg',
        'cover2.jpg',
        'cover3.jpg',
        'cover4.jpg',
        'cover5.jpg'
    ];
    // Variáveis
    let currentDistrict;
    let clock;
    let calendar;
    let isDarkMode;
    let mapSrc;
    // Carregando estado
    loadState();

    // 
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    document.getElementById('title').textContent = sharn.name;
    // Loading
    const loadingScreen = document.getElementById("loading-screen");
    const loadingImage = document.getElementById('loading-img');
    loadingImage.src = isDarkMode ? getRandomElement(darkImages) : getRandomElement(lightImages);
    // Seções da página
    const mainDiv = document.getElementById('main-container');
    // Navegação
    const nameDiv = document.getElementById('name');
    const descriptionDiv = document.getElementById('description');
    const navigationDiv = document.getElementById('navigation');
    // Skycoach
    const skycoachModal = document.getElementById('skycoach-modal');
    const skycoachList = document.getElementById('skycoach-districts-select');
    // Imagens
    const imagesDiv = document.getElementById('images');
    const slice_div = document.createElement('div');
    const vert_div = document.createElement('div');
    
    // Botões
    // Skycoach
    const toggleSkycoachButton = document.getElementById('skycoach-button');
    // Clock/calendar
    const waitButton = document.getElementById('wait-button');
    const skipButton = document.getElementById('skip-button');
    // Configurações
    const darkButton = document.getElementById('dark-button');
    const resetButton = document.getElementById('reset-button');

    // Clock
    const clockDisplay = document.getElementById('clock');
    const events = document.getElementById('events');
    updateClockDisplay(clock);

    // Operações preliminares
    initializeImages();
    updateTooltip();
    populateSkycoachDistrictsList();
    skycoachList.value = currentDistrict.getName();

  
    // Event listeners

    waitButton.addEventListener('click', () => {
        const minutes = prompt('How many minutes do you want to wait?');
        if (minutes !== null && !isNaN(minutes)) {
            clock.incrementClock(parseInt(minutes));
            updateClockDisplay(clock);
        }
    });

    skipButton.addEventListener('click', () => {
        const days = prompt('How many days do you want to skip?');
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
        localStorage.removeItem('darkMode'); // Remove apenas a preferência de dark mode
        localStorage.setItem('currentDistrict', "Terminus");
        localStorage.setItem('clock', JSON.stringify(new Clock(1, 8, 0)));
        localStorage.setItem('calendar', JSON.stringify(new Calendar(1, 1, 998)));
        location.reload(); // Recarrega a página para aplicar a mudança
        updateTooltip();
    });

    // FUNÇÕES
    function getRandomElement(images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }
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
        console.log("State saved")
    }

    // Função para carregar os dados do localStorage
    function loadState() {
        console.log("Loading state");
        isDarkMode = localStorage.getItem('darkMode') === 'true'
        console.log(`${isDarkMode ? "Dark" : "Light"} mode`);
        const savedDistrictName = localStorage.getItem('currentDistrict');
        console.log(`Stored district: ${savedDistrictName}`);
        const savedClock = localStorage.getItem('clock');
        console.log(`Stored clock: ${savedClock}`);
        const savedCalendar = localStorage.getItem('calendar');
        console.log(`Stored calendar: ${savedCalendar}`);
    
        try {
            if (savedDistrictName) {
                currentDistrict = sharn.getDistrict(savedDistrictName);
            } else {
                currentDistrict = sharn.getDistrict("Terminus");
            }
        } catch (error) {
            console.log("Falha ao carregar o distrito");
        }
        try {
            if (savedClock) {
                const parsedClock = JSON.parse(savedClock);
                clock = new Clock(parsedClock.day, parsedClock.hour, parsedClock.minute);
            }
            else{
                clock = new Clock(1, 8, 0);
            }

        } catch (error) {
            console.log("Falha ao carregar o relógio");
        }
        try {
            if (savedCalendar) {
                const parsedCalendar = JSON.parse(savedCalendar);
                calendar = new Calendar(parsedCalendar.day, parsedCalendar.month, parsedCalendar.year);
            }
            else {
                calendar = new Calendar(1, 1, 998);
            }
        } catch (error) {
            console.log("Falha ao carregar o calendário");
        }
        console.log("State loaded");
        //console.log(currentDistrict);
        //console.log(clock);
        //console.log(calendar);
    }

    // Mapa em corte
    function initializeImages() {
        mapSrc = getMap(currentDistrict);
        const arrow_dimensions = 50;
        const arrow_height = `${arrow_dimensions}px`;
        const arrow_width = `${arrow_dimensions}px`;
        slice_div.style.position = 'relative';
        slice_div.style.display = 'inline-block';
        imagesDiv.appendChild(slice_div);
    
        const slice_img = document.createElement('img');
        slice_img.src = mapSrc;
        slice_img.alt = 'Sharn slice map';
        slice_img.id = 'slice_img';
        slice_img.onload = function () {
            storeOriginalDimensions(slice_img);
            updateArrowPosition(currentDistrict.arrow_positions);
        };
        slice_div.appendChild(slice_img);
    
        const arrow_slice = document.createElement('img');
        arrow_slice.src = 'arrow2.png';
        arrow_slice.alt = 'You are here';
        arrow_slice.id = 'arrow_slice'; // Set an ID for the arrow
        arrow_slice.style.position = 'absolute';
        arrow_slice.style.width = arrow_width;
        arrow_slice.style.height = arrow_height;
        slice_div.appendChild(arrow_slice);
    
        // Mapa vertical
        vert_div.style.position = 'relative';
        vert_div.style.display = 'inline-block';
        imagesDiv.appendChild(vert_div);
    
        const vert_img = document.createElement('img');
        vert_img.src = 'Sharn2.jpg';
        vert_img.alt = 'Sharn vertical map';
        vert_img.id = 'vert_img';
        vert_img.onload = function () {
            storeOriginalDimensions(vert_img);
            updateArrowPosition(currentDistrict.arrow_positions);
        };
        vert_div.appendChild(vert_img);
    
        const arrow_vert = document.createElement('img');
        arrow_vert.src = 'arrow.png';
        arrow_vert.alt = 'You are here';
        arrow_vert.id = 'arrow_vert'; // Set an ID for the arrow
        arrow_vert.style.position = 'absolute';
        arrow_vert.style.width = arrow_width;
        arrow_vert.style.height = arrow_height;
        vert_div.appendChild(arrow_vert);
    }

    // Skycoach logic
    skycoachList.onchange = function () {
        let selectedDistrictName = this.value;
        console.log(`Flew to ${this.value}`);
        console.log(`Map: ${getMap(sharn.getDistrict(this.value))}`);
        travelToSkycoachDistrict(selectedDistrictName);
    }

    toggleSkycoachButton.addEventListener('click', () => {
        skycoachModal.classList.toggle('collapsed');
        skycoachList.classList.toggle('collapsed');
        toggleSkycoachButton.classList.toggle('expanded');
        toggleSkycoachButton.classList.toggle('collapsed');
    });


    window.addEventListener('resize', () => {
        updateArrowPosition(currentDistrict.arrow_positions);
    });

    window.addEventListener('load', function () {
        setTimeout(function () {
            loadingScreen.style.display = 'none';
            mainDiv.style.display = 'block';
        }, 1500);
        updateDistrictInfo();
        updateSliceMap(getMap(currentDistrict));
        updateArrowPosition(currentDistrict.arrow_positions);
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

    function updateSliceMap(map) {
        slice_img.src = map;
        //console.log(getSizeRatio(slice_img));
    };

    function updateDistrictInfo() {
        //console.log(currentDistrict);
        updateTooltip();
        nameDiv.textContent = `${currentDistrict.getName()} - ${currentDistrict.getWard().getName()}`;
        while (descriptionDiv.firstChild) {
            descriptionDiv.removeChild(descriptionDiv.firstChild);
        }
        while (navigationDiv.firstChild) {
            navigationDiv.removeChild(navigationDiv.firstChild);
        }

        let descriptionPara = document.createElement('p');
        descriptionPara.textContent = currentDistrict.getDescription();
        descriptionDiv.appendChild(descriptionPara);

        let locationsHeader = document.getElementById('locations-header');
        let locationsList = document.getElementById('locations-list');
        while (locationsList.firstChild) {
            locationsList.removeChild(locationsList.firstChild);
        }
        let locationsArray = currentDistrict.getLocationArray();
        if (locationsArray.length == 0) {
            locationsHeader.classList.toggle('collapsed');
        }
        locationsArray.forEach((location, index) => {
            let locationItem = document.createElement('li');
            locationItem.textContent = location.getName();

            let locationDescription = document.createElement(`span`);
            //console.log(location);
            locationDescription.textContent = ` - ${location.getDescription()}`;
            locationDescription.classList.add('collapsed');

            locationItem.appendChild(locationDescription);
            locationItem.id = `location-id-${index}`; // ID único para cada local
            locationDescription.id = `location-description-${index}`; // ID único para cada descrição
            locationItem.addEventListener('click', function () {
                // Verifica se a descrição está oculta
                locationDescription.classList.toggle('collapsed');
                clock.incrementClock(5);
                updateClockDisplay(clock);
            });
            locationsList.appendChild(locationItem);
        });

        connections = currentDistrict.getConnectionArray();
        connections.forEach(connectedDistrict => {
            const button = document.createElement('button');

            let connectMap = getMap(connectedDistrict);
            let currentMap = getMap(currentDistrict);

            if (connectMap !== currentMap) {
                connectionText2 = ` (${connectedDistrict.getWard().getName()})`;
                if (currentMap.includes("The_Cogs") || connectMap.includes("Skyway") || (connectMap.includes("M_") && currentMap.includes("L_")) || (connectMap.includes("U_") && currentMap.includes("M_"))) {
                    connectionText = "↑ Subir";
                } else if (currentMap.includes("Skyway") || connectMap.includes("The_Cogs") || (connectMap.includes("M_") && currentMap.includes("U_")) || (connectMap.includes("L_") && currentMap.includes("M_"))) {
                    connectionText = "↓ Descer";
                }
            } else if (connectedDistrict.getWard() !== currentDistrict.getWard()) {
                connectionText2 = ` (${connectedDistrict.getWard().getName()})`;
                if (currentDistrict.getWard().getName().includes("The Cogs")) {
                    connectionText = "↑ Subir";
                }
                else if (connectionText2.includes("The Cogs")) {
                    connectionText = "↓ Descer";
                } else {
                    connectionText = "↷ Atravessar";
                }
            } else if (connectedDistrict.getWard() == currentDistrict.getWard()) {
                connectionText = "→ Ir";
                connectionText2 = "";
            }

            //logText = `Atual: ${currentDistrict.getName()}; Conectado: ${connectedDistrict.getName()}; Comando: ${connectionText}`;
            //console.log(logText);

            button.textContent = `${connectionText} para ${connectedDistrict.getName()}${connectionText2}`;
            button.onclick = function () {
                currentDistrict = connectedDistrict;
                clock.incrementClock(15);
                updateClockDisplay(clock);
                updateDistrictInfo();
                updateSliceMap(getMap(currentDistrict));
                updateArrowPosition(currentDistrict.arrow_positions);
            };
            navigationDiv.appendChild(button);
        });
    }

    function getMap(district) {
        const wardName = district.getWard().getName();
        if (wardName.includes('Upper') || wardName.includes('City of the Dead')) {
            return "U_Wards.jpg";
        } else if (wardName.includes('Middle')) {
            return "M_Wards.jpg";
        }
        else if (wardName == 'The Cogs') {
            return "The_Cogs.jpg";
        }
        else if (wardName == 'Skyway') {
            return "Skyway.jpg";
        }
        else /*if (wardName.includes('Lower'))*/ {
            return "L_Wards.jpg";
        }
    }

    function updateArrowPosition(arrowPosition) {
        const slice_img = document.getElementById('slice_img');
        const sliceRatio = getSizeRatio(slice_img);
        const slice_x = arrowPosition.slice_x * sliceRatio.widthRatio;
        const slice_y = arrowPosition.slice_y * sliceRatio.heightRatio;
        const sliceArrowSize = 50 * sliceRatio.widthRatio; // Base size of 50 pixels
        let arrow_slice = document.getElementById('arrow_slice');
        setArrowPosition(arrow_slice, slice_x, slice_y, sliceArrowSize);

        const vert_img = document.getElementById('vert_img');
        const vertRatio = getSizeRatio(vert_img);
        const vert_x = arrowPosition.vert_x * vertRatio.widthRatio;
        const vert_y = arrowPosition.vert_y * vertRatio.heightRatio;
        const vertArrowSize = 50 * vertRatio.widthRatio; // Base size of 50 pixels
        let arrow_vert = document.getElementById('arrow_vert');
        setArrowPosition(arrow_vert, vert_x, vert_y, vertArrowSize);
    }


    // Função para exibir o pop-up de Skycoach
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
            updateSliceMap(getMap(currentDistrict));
            updateArrowPosition(currentDistrict.arrow_positions);
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