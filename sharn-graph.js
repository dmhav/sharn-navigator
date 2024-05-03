//sharn-graph.js

// Classes

class Place {
    constructor(name) {
        this.name = name;
        this.description;
    }
    getName() {
        return this.name;
    }
    addDescription(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
}

class City extends Place {
    constructor(name) {
        super(name);
        this.wards = [];
    }

    addWard(ward) {
        if (!this.wards.includes(ward)) {
            this.wards.push(ward);
        }
    }

    getWard(name) {
        for (let ward of this.wards) {
            if (ward.name === name) {
                return ward;
            }
        }
        return null;
    }

    getDistrict(districtName) {
        for (let ward of this.wards) {
            let district = ward.getDistrict(districtName);
            if (district ?? false) {
                return district
            }
        }
        return null
    }
    getLocation(locationName) {
        for (let ward of this.wards) {
            let location = ward.getLocation(locationName);
            if (location ?? false) {
                return location
            }
        }
        return null
    }
}

class Ward extends Place {
    constructor(name, details) {
        super(name);
        this.districts = [];
        /*Cria os distritos da ward*/
        //console.log(details);
        let districtArray = Object.keys(details["districts"]);
        for (let districtName of districtArray) {
            let districtDetails = details["districts"][districtName];
            let district = new District(districtName, districtDetails);
            //console.log(district);
            district.arrow_positions["vert_x"] = details["arrow_positions"]["vert_x"];
            district.arrow_positions["vert_y"] = details["arrow_positions"]["vert_y"];
            this.addDistrict(district);
        }
        this.addDescription(details["description"]);
    }
    addDistrict(district) {
        district.ward = this;
        this.districts.push(district);
    }
    getDistrict(districtName) {
        for (let district of this.districts) {
            if (district.name === districtName) {
                return district;
            }
        }
        return null;
    }
    getLocation(locationName) {
        for (let district of this.districts) {
            let location = district.getLocation(locationName)
            if (location ?? false) {
                return location;
            }
        }
        return null
    }
}

class District extends Place {
    constructor(name, details) {
        super(name);
        this.ward;
        this.addDescription(details["description"]);
        this.arrow_positions = details["arrow_positions"];
        this.connections = [];        
        /*Cria os locais do distrito*/
        this.locations = [];
        //console.log(details["locations"]);
        if (details["locations"] !== undefined) {
            let locationArray = Object.keys(details["locations"]);
            for (let locationName of locationArray) {
                let locationDetails = details["locations"][locationName];
                let location = new Locale(locationName, locationDetails);
                this.addLocation(location);
            }
        }
    }

    getWard() {
        return this.ward;
    }

    addLocation(location) {
        location.district = this;
        this.locations.push(location);
    }
    getLocationArray() {
        return this.locations;
    }
    getLocation(locationName) {
        for (let location of this.locations) {
            if (location.name === locationName) {
                return location;
            }
        }
        return null;
    }

    addConnection(district) {
        if (!this.connections.includes(district)) {
            this.connections.push(district);
        }
        if (!district.connections.includes(this)) {
            district.connections.push(this);
        }
    }
    getConnectionArray() {
        return this.connections;
    }
    setArrowPositions(dict) {
        this.arrow_positions = dict;
    }
}

class Locale extends Place {
    constructor(name, details) {
        super(name);
        this.addDescription(details["description"]);
        this.district;
    }
}

// Operação
sharn = new City("Sharn");

// Criando wards, distritos e locais
wardsArray = Object.keys(wards_n_districts);
for (let wardName of wardsArray) {
    // Cria a ward
    wardDetails = wards_n_districts[wardName]
    //console.log(wardName);
    //console.log(wardDetails);
    let ward = new Ward(wardName, wardDetails);
    sharn.addWard(ward);
}

// Criando conexões

for (let wardName of wardsArray) {
    let ward = sharn.getWard(wardName);
    for (districtName in wards_n_districts[wardName]["districts"]) {
        let district = ward.getDistrict(districtName);
        let connections = wards_n_districts[wardName]["districts"][districtName]["connections"];
        if (connections !== undefined) {
            connections.forEach(connection => {
                let connectedDistrict = sharn.getDistrict(connection);
                if (connectedDistrict) {
                    district.addConnection(connectedDistrict);
                }
            });
        }
    }
}
