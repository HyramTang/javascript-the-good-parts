stooge["first-name"] //"Hyram"
flight.departure.IATA //"SYD"

stooge["middle-name"] //undefined
flight.status //undefined
stooge["FIRST-NAME"] //undefined

//use "||" to set default value
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

//use "&&" to avoid "TypeError"
flight.equipment//undefined
flight.equipment.model//throw "TypeError"
flight.equipment&&flight.equipment.model//undefined
