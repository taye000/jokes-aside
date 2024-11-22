const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // Map "@" to the "src" directory
      },
    },
  },
  pluginOptions: {
    htmlWebpackPlugin: {
      options: {
        title: "Jokes Aside", // Set the title here
      },
    },
  },
});
