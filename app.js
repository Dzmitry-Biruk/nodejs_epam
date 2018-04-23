import config from './config/config.json';
import { Product, User } from './models';

console.log(config.name);

const firstUser = new User();
const firstProduct = new Product();
