const { fork } = require('child_process');

const forked = fork('child.js');

process.on('message', (msg) => {
    console.log('parent sent ', msg)
})

let counter = 0

setInterval(()=> {
    process.send({counter: counter++})
}, 1000)