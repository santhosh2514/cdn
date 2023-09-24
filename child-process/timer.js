const fs = require("fs");
const file = fs.createWriteStream("./bigtimer.file");

file.on("error", err => {
  console.error("An error occurred while creating the file:", err);
});

setTimeout(() => {
    for (let i = 0; i <= 100; i++) {
        file.write(
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
        );
      }
      
    file.end();
    console.log('child done')
  }, 120000); // increase timeout to 2 minutes