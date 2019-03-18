/**
 * Function Objects
 * 函数对象
 */


/**
 * Function Literal
 * 函数字面量
 */
var add = function (a, b) {
    console.log(arguments);
    return a + b;
}

/**
 * The Method Invocation Pattern
 * 方法调用
 */
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
}
myObject.increment();
console.log(myObject.value); // 1

myObject.increment(2);
console.log(myObject.value); // 3

/**
 * The Function Invocation Pattern
 * 函数调用模式
 */
var sum = add(3, 4);
console.log(sum); // 7

myObject.double = function () {
    var that = this;

    var helper = function () {
        that.value = add(that.value, that.value);
    }

    helper();
};

myObject.double();
console.log(myObject.value); // 6

/**
 * The Constructor Invocation Pattern
 * 构造器调用模式
 */
var Quo = function (string) {
    this.status = string;
};

Quo.prototype.get_status = function () {
    return this.status;
};

var myQuo = new Quo("confused");
console.log(myQuo.get_status()); // confused

/**
 * The Apply Invocation Pattern
 * Apply 调用模式
 */
var array = [3, 4];
var sum = add.apply(null, array); // 7

var statusObject = {
    status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);