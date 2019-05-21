const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  target: "serverless"
});
