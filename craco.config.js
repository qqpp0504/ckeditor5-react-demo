const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Exclude CKEditor SVG from default loader
      const oneOfRule = webpackConfig.module.rules.find((rule) =>
        Array.isArray(rule.oneOf)
      );
      if (oneOfRule) {
        const svgRule = oneOfRule.oneOf.find(
          (rule) => rule.test && rule.test.toString().includes("svg")
        );
        if (svgRule) svgRule.exclude = /\.svg$/;
        oneOfRule.oneOf.unshift({
          test: /\.svg$/,
          use: ["raw-loader"],
        });
      }

      // 強制 zod 指向專案主目錄 node_modules 中的 zod
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.alias = {
        ...(webpackConfig.resolve.alias || {}),
        zod: path.resolve(__dirname, "node_modules", "zod"),
      };

      // CKEditor 專用 CSS loader
      // webpackConfig.module.rules.push({
      //   test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
      //   use: [
      //     {
      //       loader: "style-loader",
      //       options: {
      //         injectType: "singletonStyleTag",
      //         attributes: { "data-cke": true },
      //       },
      //     },
      //     "css-loader",
      //     {
      //       loader: "postcss-loader",
      //       options: {
      //         postcssOptions: styles.getPostCssConfig({
      //           themeImporter: {
      //             themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
      //           },
      //           minify: true,
      //         }),
      //       },
      //     },
      //   ],
      // });
      return webpackConfig;
    },
  },
};
