const EventEmitter = require('events');
const fs = require('fs');

class MyEmitter extends EventEmitter {
    execute(taskFunc) {
        console.log('Before executing');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('After executing');
      }
}

const myEmitter = new MyEmitter();
myEmitter.on('begin', () => console.log('About to execute'))
myEmitter.on('end', () => console.log('done with execute'))
myEmitter.execute(() => console.log('executing task')) // synchronous way

console.log("-------------------------------------------------------------------------")
myEmitter.execute(() => { //async way, but result will go wrong
    setImmediate(() => {
      console.log('*** Executing task ***')
    });
  });

console.log("-------------------------------------------------------------------------")

//proper async way
class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    this.emit('begin');
    console.time('execute');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('error', (err) => {
    // do something with err, for example log it somewhere
    console.log(err)
  });
withTime.execute(fs.readFile, __filename);

//output
// About to execute
// execute: 0.677ms
// Done with execute