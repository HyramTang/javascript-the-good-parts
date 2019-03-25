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

/**
 * Arguments
 * 参数
 */
var sum = function () {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(4, 8, 15, 16, 23, 42)); // 108

/**
 * Return
 * 返回
 */

/**
 * Exceptions
 * 异常
 */
var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}

var try_it = function () {
    try {
        add("seven");
    } catch (e) {
        console.log(e.name + ':' + e.message);
    }
}
try_it();

/**
 * Arguments Types
 * 扩充类型功能
 */
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

//console.log('"' + "  neat  ".trim() + '"');

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};

/**
 * Recursion
 * 递归
 */
var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        //console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
}
//console.log('\nHanoi：\n');
hanoi(3, 'Src', 'Aux', 'Dst');


/**
 * Scope
 * 作用域
 */
var foo = function () {
    var a = 3,
        b = 5;
    // a=3 b=5
    var bar = function () {
        var b = 7,
            c = 11;
        // b=7 c=11
        a += b + c;
        // 3+=7+11 a=21
    }
    // a=3 b=5
    bar();
    // a=21 b=5
}

/**
 * Closure
 * 闭包
 */
var myObject = (function () {
    var value = 0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    }
}());

/**
 * Callback
 * 回调
 */

/**
 * Module
 * 模块
 */
String.method('deentityify', function () {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };

    return function () {
        return this.replace(/&([^&;]+);/g,
            function (a,b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    }
}());