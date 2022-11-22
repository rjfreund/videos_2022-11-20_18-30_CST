const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const package_json = require("./package.json");
const homepage = package_json.homepage.split("/").reverse()[0];
const fs = require("fs");

let next_config = fs.readFileSync("./next.config.js", 'utf-8').split("\n");
const basePath_index = next_config.findIndex(function (config_line) {
    return config_line.indexOf("basePath") > -1;
});
let new_basePath = '';
switch (argv.env) {
    case 'dev':
        new_basePath = next_config[basePath_index].replace(/basePath: \".*\"/, "basePath: \"/\"");
        break;
    case 'prod': //for github pages
    default:
        new_basePath = next_config[basePath_index].replace(/basePath: \".*\"/, "basePath: \"/" + homepage + "\"");
        break;
}

let updated_next_config = [...next_config];
updated_next_config[basePath_index] = new_basePath;

fs.writeFileSync("./next.config.js", updated_next_config.join("\n"));