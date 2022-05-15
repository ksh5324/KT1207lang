import chalk from "chalk";
import Express from "express";
import cors from "cors";

const app = Express();

app.use(cors());

app.listen(3080, () => {
  console.log(chalk.magenta("project") + " - ktLang");
  console.log(
    chalk.green("ready") +
      " - started server on 127.0.0.1:3080 url: http://localhost:3080"
  );
});
