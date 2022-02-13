import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const flipCount = args["number"] || 1;
const flipList = coinFlips(flipCount);
console.log(flipList);
console.log(countFlips(flipList));