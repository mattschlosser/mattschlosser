const Olso = require('oslo-events')
const Oslo = require('oslo-events')
const oslo = new Oslo();
oslo.on('event', () => {
    // do something
})

function add_something(a, b) {
    return a+b;
}

