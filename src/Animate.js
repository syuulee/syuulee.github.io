import Cursor from "./Cursor";
import './Animate.css'


const cursor = new Cursor(document.querySelector('.cursor'));

[...document.querySelectorAll('a')].forEach(el => {
  el.addEventListener('mouseenter', () => cursor.emit('enter'));
  el.addEventListener('mouseleave', () => cursor.emit('leave'));
});


