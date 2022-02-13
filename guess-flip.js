
   
import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2));
const callArg = args["call"];

if (callArg === "") {
    console.log("Error: no input.");
} else {
    console.log(flipACoin(callArg));
}