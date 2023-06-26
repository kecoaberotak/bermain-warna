// Klik mengubah warna background

const buttonBg = document.querySelector('.button-warna');
const body = document.querySelector('body');

buttonBg.addEventListener('click', function(){
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  body.style.backgroundColor = 'rgb'+ '(' + red + ',' + green + ',' + blue + ')'
});