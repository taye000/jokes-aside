const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    htmlWebpackPlugin: {
      options: {
        title: "Jokes Aside", // Set the title here
      },
    },
  },
});
