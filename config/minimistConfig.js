
const minimistConfig = {
  alias: {
    a: 'action',
    f: 'file',
    h: 'help',
  },
  // unknown: (command) => {
  //   console.log(`    Incorrect command!:  ${command}`);
  //   helpMessage();
  // },
};

module.exports = {
  minimistConfig,
};
