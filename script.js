//script.js

document.addEventListener('DOMContentLoaded', function() {
    
    let currentDistrict = sharn.getDistrict("Terminus");
    let mapSrc = getMap(currentDistrict);
    
    //let currentOptionId = 100;
    //let currentOption = data.options.find(option => option.id === currentOptionId);

    document.getElementById('title').textContent = sharn.name;
    
    const nameDiv = document.getElementById('name');
    const descriptionDiv = document.getElementById('description');
    const navigationDiv = document.getElementById('navigation');
    const imagesDiv = document.getElementById('images');
    
    // Mapa em corte
    const slice_div = document.createElement('div');
    slice_div.style.position = 'relative';
    slice_div.style.display = 'inline-block';
    imagesDiv.appendChild(slice_div);

    const slice_img = document.createElement('img');
    slice_img.src = mapSrc;
    slice_img.alt = 'Sharn slice map';
    slice_div.appendChild(slice_img);

    const arrow_dimensions = 50
    const arrow_height = `${arrow_dimensions}px`
    const arrow_width = `${arrow_dimensions}px`

    const arrow_slice = document.createElement('img');
    arrow_slice.src = 'arrow2.png';
    arrow_slice.alt = 'You are here';
    arrow_slice.id = 'arrow_slice'; // Set an ID for the arrow
    arrow_slice.style.position = 'absolute';
    arrow_slice.style.width = arrow_width;
    arrow_slice.style.height = arrow_height;
    slice_div.appendChild(arrow_slice);
    
    // Mapa vertical
    const vert_div = document.createElement('div');
    vert_div.style.position = 'relative';
    vert_div.style.display = 'inline-block';
    imagesDiv.appendChild(vert_div);

    const vert_img = document.createElement('img');
    vert_img.src = 'Sharn2.jpg';
    vert_img.alt = 'Sharn vertical map';
    vert_div.appendChild(vert_img);
    
    const arrow_vert = document.createElement('img');
    arrow_vert.src = 'arrow.png';
    arrow_vert.alt = 'You are here';
    arrow_vert.id = 'arrow_vert'; // Set an ID for the arrow
    arrow_vert.style.position = 'absolute';
    arrow_vert.style.width = arrow_width;
    arrow_vert.style.height = arrow_height;
    vert_div.appendChild(arrow_vert);
    
    // Skycoach logic
    const toggleSkycoachButton = document.getElementById('skycoach-button');
    const skycoachModal = document.getElementById('skycoach-modal');
    const skycoachList = document.getElementById('skycoach-districts-select');
    populateSkycoachDistrictsList();
    skycoachList.value = currentDistrict.getName();

    skycoachList.onchange = function() {
        let selectedDistritcName = this.value;
        console.log(`Flew to ${this.value}`);
        travelToSkycoachDistrict(selectedDistritcName);
    }

    toggleSkycoachButton.classList.add('collapsible-button', 'visible', 'collapsed');
    toggleSkycoachButton.innerHTML = '<i class="arrow-down">◄</i><i class="arrow-up">►</i> Skycoach';
    toggleSkycoachButton.addEventListener('click', () => {
        skycoachModal.classList.toggle('collapsed');
        skycoachList.classList.toggle('collapsed');
        toggleSkycoachButton.classList.toggle('expanded');
        toggleSkycoachButton.classList.toggle('collapsed');
    });


    updateDistrictInfo()
    updateImages(getMap(currentDistrict));
    updateArrowPosition(currentDistrict.arrow_positions);

    function setArrowPosition(arrow, x,y) {
        x_calc = x - Math.floor(arrow_dimensions/2);
        y_calc = y - Math.floor(arrow_dimensions/2);
        arrow.style.left = `${x_calc}px`;
        arrow.style.top = `${y_calc}px`;
    };

    function updateImages(map) {
        mapSrc = map;
        slice_img.src = mapSrc;
    };
    
    function updateDistrictInfo() {
        //console.log(currentDistrict);
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
            locationDescription.textContent = ` - ${location.getDescription()}`;
            locationDescription.classList.add('collapsed');
            
            locationItem.appendChild(locationDescription);
            locationItem.id = `location-id-${index}`; // ID único para cada local
            locationDescription.id = `location-description-${index}`; // ID único para cada descrição
            locationItem.addEventListener('click', function() {
                // Verifica se a descrição está oculta
                locationDescription.classList.toggle('collapsed');
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
                if ((connectMap.includes("M_") && currentMap.includes("L_")) || (connectMap.includes("U_") && currentMap.includes("M_"))) {
                    connectionText  = "↑ Subir";
                } else if ((connectMap.includes("M_") && currentMap.includes("U_")) || (connectMap.includes("L_") && currentMap.includes("M_"))) {
                    connectionText  = "↓ Descer";
                }
            } else if (connectedDistrict.getWard() !== currentDistrict.getWard()) {
                connectionText2 = ` (${connectedDistrict.getWard().getName()})`;
                if (currentDistrict.getWard().getName().includes("The Cogs")) {
                    connectionText  = "↑ Subir";
                }
                else if (connectionText2.includes("The Cogs")) {
                    connectionText  = "↓ Descer";
                } else {
                    connectionText  = "↷ Atravessar";
                }
            } else if (connectedDistrict.getWard() == currentDistrict.getWard()) {
                connectionText = "→ Ir";
                connectionText2 = "";
            }

            //logText = `Atual: ${currentDistrict.getName()}; Conectado: ${connectedDistrict.getName()}; Comando: ${connectionText}`;
            //console.log(logText);

            button.textContent = `${connectionText} para ${connectedDistrict.getName()}${connectionText2}`;
            button.onclick = function() {
                currentDistrict = connectedDistrict;
                updateDistrictInfo();
                updateImages(getMap(currentDistrict));
                updateArrowPosition(currentDistrict.arrow_positions);
            };
            navigationDiv.appendChild(button);
        });

    }

    function getMap(district) {
        const wardName = district.getWard().getName();
        if (wardName.includes('Upper') || wardName.includes('Skyway') || wardName.includes('City of the Dead')) {
            return "U_Wards.jpg";
        } else if (wardName.includes('Middle')) {
            return "M_Wards.jpg";
        } 
        else /*if (wardName.includes('Lower'))*/ {
            return "L_Wards.jpg";
        }
    }

    function updateArrowPosition(arrowPosition) {
        //console.log(arrowPosition);
        let arrow_slice = document.getElementById('arrow_slice');
        setArrowPosition(arrow_slice, arrowPosition["slice_x"], arrowPosition["slice_y"])
        
        let arrow_vert = document.getElementById('arrow_vert');
        setArrowPosition(arrow_vert, arrowPosition["vert_x"], arrowPosition["vert_y"])
    }
    
    // Função para exibir o pop-up de Skycoach
    document.getElementById('skycoach-button').onclick = function() {
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
            
            // Atualizar a interface com as informações do novo distrito
            updateDistrictInfo();
            updateImages(getMap(currentDistrict));
            updateArrowPosition(currentDistrict.arrow_positions);
        }
    }
        
    // Função para carregar e exibir a lista que controla a viagem por skycoach 

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
});