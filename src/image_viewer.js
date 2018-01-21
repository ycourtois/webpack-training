import small from '../assets/small_image.jpg';
import '../styles/image_viewer.css'; // import css file to embed it

export default () => {
    const image = document.createElement('img');
    image.src = small
    document.body.appendChild(image);
};



