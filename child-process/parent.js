const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
    console.log('child sent ', msg)
})

forked.send('hello world')