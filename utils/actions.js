const fs = require('fs');
const through2 = require('through2');

const reverse = (str) => {
  console.log('reverse', str);
};

const transform = (str) => {
  console.log('transform', str);
};

const outputFile = (filePath) => {
  console.log('outputFile', filePath);
};

const convertFromFile = (filePath) => {
  console.log('convertFromFile', filePath);
};

const convertToFile = (filePath) => {
  console.log('convertToFile', filePath);
};

module.exports = {
  reverse,
  transform,
  outputFile,
  convertFromFile,
  convertToFile,
};
