var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
  console.log('hello');
  modal.classList.add('modal_activ');
});
close.addEventListener('click', function(){
  modal.classList.remove('modal_activ');
});