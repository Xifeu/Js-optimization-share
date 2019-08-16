var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

function asc() {
    var result = 0;
    for (var i = 0; i < 10000; i++) {
        result += i;
    }
}

function desc() {
    var result = 0;
    for (var i = 10000; i >= 0; i--) {
        result += i;
    }
}

// add tests
suite.add('asc', function () {
        asc();
    })
    .add('desc', function () {
        desc();
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