var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function memfactorial(n){
    if(!memfactorial.cache){
        memfactorial.cache = {
            "0":1,
            "1":1
        }
    }
    if(memfactorial.cache.hasOwnProperty(n)){
        memfactorial.cache[n] = n * memfactorial(n - 1)
    }
    return memfactorial.cache[n]
}

// add tests
suite.add('factorial', function () {
        factorial(100000);
    })
    .add('memfactorial', function () {
        memfactorial(100000)
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