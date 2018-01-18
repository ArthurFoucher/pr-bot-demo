const prbot = require("pr-bot");

module.exports = {
  botUsername: `Fouchman`,
  plugins: [
    new prbot.plugins.Size({
      globPattern: "**/*.js",
      globOptions: {
        ignore: ["**/node_modules/**/*"]
      }
    }),
    {
      name: "Example Plugin",
      run: () => {
        return Promise.resolve({
          failPR: false,
          prettyLog: "Hello from example plugin.",
          markdownLog: "## Hello from example plugin."
        });
      }
    }
  ]
};
