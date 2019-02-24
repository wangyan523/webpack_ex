import avater from './img/avatar.png';
import './index.scss';

var img = document.createElement('img');
img.src = avater;
img.classList.add('avatar')

document.getElementById('root').append(img)