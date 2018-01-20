import big from '../assets/big_image.jpg';
import small from '../assets/small_image.jpg';
import '../styles/image_viewer.css'; // import css file to embed it

const image = document.createElement('img');
image.src = small
//'http://lorempixel.com/400/400'; // random 400*400 picture
document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);