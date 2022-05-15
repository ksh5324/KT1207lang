import chalk from "chalk";
import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { codeRun } from "./KTinterpreter2/dist/src/index";

const app = Express();

app.use(cors());
app.use(bodyParser.json());

export let code = "";

app.post("/run", (req, res) => {
  code = String(req.body.code);
  const out = codeRun(code);
  return res.send(out);
});

app.listen(3080, () => {
  console.log(chalk.magenta("project") + " - ktLang");
  console.log(
    chalk.green("ready") +
      " - started server on 127.0.0.1:3080 url: http://localhost:3080"
  );
});
