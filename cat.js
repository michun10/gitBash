module.exports = function cat(done, fileName) {
  const fs = require("fs");

  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data);
    }
  });
};
