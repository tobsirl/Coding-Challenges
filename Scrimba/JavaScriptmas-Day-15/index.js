// javascript
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const gallery = document.querySelector('.gallery');
const images = document.querySelector('.gallery img');

let counter = 0;
const gallerySize = 220;

prev.addEventListener('click', () => {
  if (counter <= 0) return;
  next.style.opacity = '1';
  gallery.style.transition = 'transform .7s ease-in-out';
  counter--;

  if (counter <= 0) prev.style.opacity = '0.3';

  gallery.style.transform = 'translateX(' + -gallerySize * counter + 'px)';
});

next.addEventListener('click', () => {
  if (counter >= images.length - 1) return;
  prev.style.opacity = '1';
  gallery.style.transition = 'transform .7s ease-in-out';
  counter++;
  
  if (counter >= images.length - 1) next.style.opacity = '0.3';
  gallery.style.transform = 'translateX(' + -gallerySize * counter + 'px)';
});
