#! /usr/bin/env node
import chalk from "chalk";
import { prompt } from "inquirer";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

console.log(chalk.blue(figlet.textSync("Huakun Zui Shuai!!!")));
console.log(chalk.blue(figlet.textSync("Huakun Zui Shuai!!!")));

async function entrypoint() {
  const rainbow = chalkAnimation.rainbow("Huakun Zui Shuai!!!");
  rainbow.start();
  await sleep();
  rainbow.stop();
}

(async function () {
  await entrypoint();

  prompt([
    {
      type: "list",
      name: "handsomeCoder",
      message: "Who is the most handsome coder in the world?",
      choices: ["Huakun", "Huakun Shen"],
    },
  ]).then((answers) => {
    const rainbow = chalkAnimation.rainbow(
      `Congrats! You are right, ${answers.handsomeCoder} Is The Most Handsome Coder.`
    );
    rainbow.start();
    rainbow.stop();
  });
})();
