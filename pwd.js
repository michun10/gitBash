//Output a prompt
module.exports = function pwd(done) {
  done(process.cwd());
};
