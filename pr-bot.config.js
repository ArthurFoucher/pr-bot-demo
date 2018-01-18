const prbot = require("pr-bot");

module.exports = {
  botUsername: `Fouchman`,
  plugins: [
    new prbot.plugins.Size({
      globPattern: "**/*.js",
      globOptions: {
        ignore: ["**/node_modules/**/*"]
      }
    })
  ]
};
