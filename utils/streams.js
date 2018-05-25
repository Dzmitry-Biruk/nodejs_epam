#!/usr/bin/env node

const program = require('commander');

program
  .version('1.0.0')
  .option('-p, --peppers', 'Add peppers');

program.parse(process.argv);
