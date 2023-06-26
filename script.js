// Klik Toggle
const buttonToggle = document.querySelector('.button-warna-toggle');
const h1 = document.getElementsByTagName('h1')[0];

buttonToggle.addEventListener('click', function(){
  h1.classList.toggle('bg-toggle');
});




// Warna Random
const buttonRandom = document.createElement('button');
const butonRandomText = document.createTextNode('Warna Random');

buttonRandom.appendChild(butonRandomText);
buttonToggle.after(buttonRandom);

buttonRandom.addEventListener('click', function(){
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);

  document.body.style.background = 'radial-gradient(circle, rgba('+ red +','+ green +','+ blue +',1) 0%, rgba('+ blue +','+ red +','+ green +',1) 100%)';
});




// Slider Random
const sliderMerah = document.querySelector('.slider-merah');
const sliderHijau = document.querySelector('.slider-hijau');
const sliderBiru = document.querySelector('.slider-biru');

sliderMerah.addEventListener('input', function(){
  document.body.style.background = 'radial-gradient(circle, rgba('+ sliderMerah.value +','+ sliderHijau.value +','+ sliderBiru.value +',1) 0%, rgba('+ sliderBiru.value +','+ sliderMerah.value +','+ sliderHijau.value +',1) 100%)';
})

sliderHijau.addEventListener('input', function(){
  document.body.style.background = 'radial-gradient(circle, rgba('+ sliderMerah.value +','+ sliderHijau.value +','+ sliderBiru.value +',1) 0%, rgba('+ sliderBiru.value +','+ sliderMerah.value +','+ sliderHijau.value +',1) 100%)';
})

sliderBiru.addEventListener('input', function(){
  document.body.style.background = 'radial-gradient(circle, rgba('+ sliderMerah.value +','+ sliderHijau.value +','+ sliderBiru.value +',1) 0%, rgba('+ sliderBiru.value +','+ sliderMerah.value +','+ sliderHijau.value +',1) 100%)';
})




// Kursor Random
document.body.addEventListener('mousemove', function(event){
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.background = 'radial-gradient(circle, rgba('+ xPos +','+ 100 +','+ yPos +',1) 0%, rgba('+ yPos +','+ xPos +','+ 100 +',1) 100%)';
})