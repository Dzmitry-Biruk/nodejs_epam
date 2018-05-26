const { printActionsTypes } = require('./helpMessages');
const {
  reverse,
  transform,
  outputFile,
  convertFromFile,
  convertToFile,
} = require('./actions');

const actionsController = (action, filePath, arrayOfStrings) => {
  switch (action) {
    case 'reverse':
      reverse(arrayOfStrings);
      break;
    case 'transform':
      transform(arrayOfStrings);
      break;
    case 'outputFile':
      outputFile(filePath);
      break;
    case 'convertFromFile':
      convertFromFile(filePath);
      break;
    case 'convertToFile':
      convertToFile(filePath);
      break;
    default:
      console.log('    Incorrect action name!');
      printActionsTypes();
  }
};

module.exports = {
  actionsController,
};
