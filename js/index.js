let h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function(event) {
  event.target.style.color = 'gold';
});

let body = document.querySelector('body');
body.addEventListener('keydown', function(event) {
  if (event.keyCode == 66) {
    h1.innerHTML = 'The Crazy Train';
  }
});

