var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

// add tests
suite.add('direct  ', function () {
        var obj = {
            x: 1,
            y: 2
        }
    })
    .add('undirect', function () {
        var obj = {}
        obj.x = 3
        obj.y = 4
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