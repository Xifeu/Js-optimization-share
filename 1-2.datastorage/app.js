var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;
var obj1 = {
    str: "1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm",
}
var obj2 = {
    str: "1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm",
}
var obj3 = {
    str2: {
        str: obj1.str
    }
}
var obj4 = {
    str2: {
        str: obj2.str
    }
}
/*缓存对象成员值*/
function toggle1() {
    var _str1 = ''
    for (var i = 0; i < obj1.str.length; i++) {
        _str1 += i;
    }
}

function toggle2() {
    var _str2 = ''
    for (var i = 0, j = obj2.str.length; i < j; i++) {
        _str2 += i;
    }
}

function toggle3() {
    var _str3 = ''
    for (var i = 0; i < obj3.str2.str.length; i++) {
        _str3 += obj3.str2.str.length;
    }
}

function toggle4() {
    var _str4 = ''
    for (var i = 0, j = obj4.str2.str.length; i < j; i++) {
        _str4 += j;
    }
}
// add tests
suite.add('toggle1', function () {
        // toggle1();
        toggle3();
    })
    .add('toggle2', function () {
        // toggle2();
        toggle4();
    })

    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({
        'async': true
    });
