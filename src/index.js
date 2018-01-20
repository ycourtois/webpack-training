// const sum = require('./sum');
import sum from './sum';
import './image_viewer'; // we do not need to import it inside any var since there is no function or method to use

const total = sum(10, 5);
console.log(total);