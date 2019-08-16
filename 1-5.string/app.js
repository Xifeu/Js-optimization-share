var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

// add tests
suite.add('+=', function () {
       var result1 = '';
       result1+='qwertyuiop'+'123'
    })
    .add(' =', function () {
        var result2 = '';
        result2= result2+'qwertyuiop'+'123'
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
