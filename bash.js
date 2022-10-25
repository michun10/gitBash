const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");

process.stdout.write("prompt > ");
// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const input = data.toString().trim().split(" "); //remove the newline
  const cmd = input[0];
  const arg = input[1];

  if (cmd === "pwd") {
    pwd(done);
  }
  if (cmd === "ls") {
    ls(done);
  }
  if (cmd.includes("cat")) {
    cat(done, arg);
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};
