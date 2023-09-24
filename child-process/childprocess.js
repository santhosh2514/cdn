const { spawn } = require('child_process');

// const child = spawn("find", [".", "-type", "f"]);

// child.on("exit", function(code, signal) {
//     console.log(
//       "child process exited with " + `code ${code} and signal ${signal}`
//     );
//   });

//   child.stdout.on("data", data => {
//     console.log(`child stdout:\n${data}`);
//   });
  
//   child.stderr.on("data", data => {
//     console.error(`child stderr:\n${data}`);
//   });

// const find = spawn("find", [".", "-type", "f"]);
// const wc = spawn("wc", ["-l"]);

// find.stdout.pipe(wc.stdin);

// wc.stdout.on("data", data => {
//   console.log(`child stdout:\n${data}`);
// });

// const { exec } = require("child_process");

// exec("find . -type f | wc -l", (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   console.log(`Number of files ${stdout}`);
// });


// const child = spawn("echo $ANSWER", {
//     stdio: "inherit",
//     shell: true,
//     env: { ANSWER: 42 }
//   });



const child = spawn("node",["timer.js"], {
  detached: true,
  stdio: "ignore"
});

child.unref();


// const child1 = spawn("node", ["timer.js"]);
// console.log(child1)

// child1.stdout.on('data', (data) => {
//     console.log('da', data)
// })
  
// console.log('parent done')
