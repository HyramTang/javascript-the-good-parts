/**
 * 对象字面量
 * Object-Literals
 */
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

/**
 * 检索
 * Retrieval
 */
stooge["first-name"] //"Hyram"
flight.departure.IATA //"SYD"

stooge["middle-name"] //undefined
flight.status //undefined
stooge["FIRST-NAME"] //undefined

//use "||" to set default value
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

//use "&&" to avoid "TypeError"
flight.equipment //undefined
// flight.equipment.model//throw "TypeError"
flight.equipment && flight.equipment.model //undefined

/**
 * 更新
 * Update
 */
stooge['first-name'] = 'Jerome';

stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';

/**
 * 引用
 * Refernce
 */
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

var a = {},
    b = {},
    c = {};
a = b = c = {};
/**
 * Prototype
 * 原型
 */
if (typeof Object.beget !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}
var another_stooge=Object.create(stooge);
console.log(another_stooge['first-name']);//from stooge object
