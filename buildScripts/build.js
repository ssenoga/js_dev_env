import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import chalk from "chalk";

process.env.NODE_ENV = "production";

webpack(webpackConfig).run((err) => {
  if (err) {
    console.log(chalk.red(err));
  }
  return 0;
});
