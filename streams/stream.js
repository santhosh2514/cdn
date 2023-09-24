// const fs = require("fs");
// // const file = fs.createWriteStream("./big.file");

// // for (let i = 0; i <= 1e6; i++) {
// //   file.write(
// //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
// //   );
// // }

// // file.end();

// const server = require("http").createServer();

// // server.on("request", (req, res) => {
// //   fs.readFile("./big.file", (err, data) => {
// //     if (err) throw err;

// //     res.end(data);
// //   });
//   server.on("request", (req, res) => {
//     const src = fs.createReadStream("./big.file");
//     src.pipe(res);
//   });
// // });

// server.listen(8000);


//writable stream eg

// const { Writable } = require("stream");

// const outStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// });

// process.stdin.pipe(outStream);

//readable stream eg

// const { Readable } = require("stream");

// const inStream = new Readable({
//     read(size) {
//       this.push(String.fromCharCode(this.currentCharCode++));
//       if (this.currentCharCode > 90) {
//         this.push(null);
//       }
//     }
//   });
  
//   inStream.currentCharCode = 65;
  
//   inStream.pipe(process.stdout);

//duplex stream eg
// const { Duplex } = require('stream');

// const inoutStream  = new Duplex({
//     write(chunk, encoding, callback) {
//         console.log(chunk.toString());
//         callback();
//     },

//     read(size) {
//       this.push(String.fromCharCode(this.currentCharCode++));
//       if (this.currentCharCode > 90) {
//         this.push(null);
//       }
//     }
// })

// inoutStream.currentCharCode = 65;

// process.stdin.pipe(inoutStream).pipe(process.stdout);


//transform stream eg

// const { stdin } = require("process");
// const { Transform } = require("stream");

// const upperCaseTr = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   }
// });

// process.stdin.pipe(upperCaseTr).pipe(process.stdout);

// const commaSplitter = new Transform({
//     readableObjectMode: true,
  
//     transform(chunk, encoding, callback) {
//       this.push(
//         chunk
//           .toString()
//           .trim()
//           .split(",")
//       );
//       callback();
//     }
//   });

//   const arrayToObject = new Transform({
//     readableObjectMode: true,
//     writableObjectMode: true,
//     transform(chunk, encoding, callback) {
//       const obj = {};
//       for (let i = 0; i < chunk.length; i += 2) {
//         obj[chunk[i]] = chunk[i + 1];
//       }
//       this.push(obj);
//       callback();
//     }
//   });


//   const objectToString = new Transform({
//     writableObjectMode: true,
//     transform(chunk, encoding, callback) {
//       this.push(JSON.stringify(chunk) + "\n");
//       callback();
//     }
//   });

// process.stdin.pipe(commaSplitter).pipe(arrayToObject).pipe(objectToString).pipe(process.stdout)


const fs = require("fs");
const zlib = require("zlib");
const file = process.argv[2];
const crypto = require("crypto");
const { Transform } = require("stream");


const reportProgress = new Transform({
    transform(chunk, encoding, callback) {
      process.stdout.write(".");
      callback(null, chunk);
    }
  });

// fs.createReadStream(file)
//   .pipe(zlib.createGzip())
//   .pipe(crypto.createCipher("aes192", "a_secret" ))
//   .pipe(reportProgress)
//   .pipe(fs.createWriteStream(file + ".zz"))
//   .on('finish', () => process.stdout.write('done'))

fs.createReadStream(file)
  .pipe(crypto.createDecipher("aes192", "a_secret"))
  .pipe(zlib.createGunzip())
  .pipe(reportProgress)
  .pipe(fs.createWriteStream(file.slice(0, -3)))
  .on("finish", () => console.log("Done"));