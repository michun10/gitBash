module.exports = (done) => {
  const fs = require("fs");
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join("\n"));
    }
  });
};
