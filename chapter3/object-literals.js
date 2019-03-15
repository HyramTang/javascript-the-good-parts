var empty_object = {};

var stooge = {
    "first-name": "Hyram", //属性名称因为有 “-“ 所以需要用引号括住
    "last-name": "Tang"
};

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2014-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2014-09-23 10:42",
        city: "Los Angeles"
    }
};

console.log(flight.arrival.time);