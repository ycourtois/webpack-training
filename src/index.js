// const sum = require('./sum');
// import sum from './sum';
// import './image_viewer'; // we do not need to import it inside any var since there is no function or method to use
//
// const total = sum(10, 5);
// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default();
    });
    // System is a global var in JS.
    // System.import is a special function that is part of the ES2015 module spec.
    // It returns a promise. This function is not interpreted as it by the browser but by webpack on build.
};

document.body.appendChild(button);