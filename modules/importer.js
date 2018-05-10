import fs from 'fs';
import csvjson from 'csvjson';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export default class Importer {
  static listen(watcher) {
    watcher.on('dirwatcher:changed', (dirPath, fileName) => {
      this.import(`${dirPath}/${fileName}`);
    });
  }

  static import(path) {
    readFileAsync(path, 'utf8')
      .then((file) => { console.log(path, csvjson.toObject(file)); });
  }

  static importSync(path) {
    const csvFile = fs.readFileSync(path, 'utf8');
    console.log(path, csvjson.toObject(csvFile));
  }
}
