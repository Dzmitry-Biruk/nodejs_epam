#!/usr/bin/env node

const program = require('commander');
const {
  reverse,
  transform,
  outputFile,
  convertFromFile,
  convertToFile,
} = require('./actions');

const actionController = (mode) => {
  switch (mode) {
    case 'reverse':
      reverse();
      break;
    case 'transform':
      transform();
      break;
    case 'outputFile':
      outputFile();
      break;
    case 'convertFromFile':
      convertFromFile();
      break;
    case 'convertToFile':
      convertToFile();
      break;
    default:
      console.log('incorrect action identifier!');
  }
};

program
  .option('-a, --action <mode>', 'action mame', actionController)
  .option('-f, --file <mode>", "path to file');

program.parse(process.argv);
