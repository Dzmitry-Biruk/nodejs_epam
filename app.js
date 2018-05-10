import DirWatcher from './modules/dirwatcher';
import Importer from './modules/importer';

const dirWatcher = new DirWatcher();
dirWatcher.watch(`${process.cwd()}/data`, 5000);
Importer.listen(dirWatcher);
