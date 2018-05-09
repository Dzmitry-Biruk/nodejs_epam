import EventEmitter from 'eventemitter3';
import fs from 'fs';
import { differenceWith, isEqual } from 'lodash';

export default class DirWatcher extends EventEmitter {
  constructor() {
    super();
    this.filesData = [];
  }

  watch(path, delay) {
    const watchFiles = () => {
      fs.readdir(path, (error, checkedFiles) => {
        if (error) { console.log(error); }

        /** return array of objects with files data
        *   Example:
        * [{
        *    fileName: 'testData.SacramentocrimeJanuary2006.csv',
        *   lastTimeModified: 1525903739583.3691
        * }]
        */
        const newFilesData = checkedFiles.map((fileName) => {
          const lastTimeModified = fs.statSync(`${path}/${fileName}`).mtimeMs;
          return {
            fileName,
            lastTimeModified,
          };
        });

        // return array of modified files data
        const difference = differenceWith(newFilesData, this.filesData, isEqual);

        if (difference.length !== 0) {
          // triggers event on every changed file
          difference.map(obj => this.emit('dirwatcher:changed', obj.fileName));
          this.filesData = newFilesData;
          console.log(difference);
        }
      });
    };

    setInterval(watchFiles, delay);
  }
}
