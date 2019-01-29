function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //listens on window, for a keydown stroke, runs function with "e" (event) passed in, ES6 const used to define audio, use querySelector to select just one would use querySelectorAll if you want to select all, use ES6 back ticks `` to get dynamic values for the data-key value !important must have ""

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // listening for the keydown, when keydown an element with the class of key is choosen that has the assoiciated keyCode

  if (!audio) return; // stops the function

  audio.currentTime = 0; // must rewind to the start so you can repeat the audio over over as fast as you can hit the keys
  audio.play(); // plays the auido file

  // console.log(audio);
  // console.log(key);

  key.classList.add('playing'); // adds a class of "playing" to the key element div when the keydown is pressed ( in jquery one would say key.addClass('playing') )
}

function removeTransistion(e) {
  if (e.propertyName !== 'transform') return; // if it is not a transform then skip it
  this.classList.remove('playing'); //this (always equal to what got called against it), once this is selected we then remove the class "playing" once the transform has taken place
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransistion)); // ES6 const used to make keys, selecting all the elements with the class of key on the document, and for each key adding an event lisenter to listen for transitions in css, taking the longest occuring transition and selecting it to run the removeTransistion funciton on it

window.addEventListener('keydown', playSound); // here we take the event listener "keydown" and then we run the functional logic in a separate function

const toggleContent = function() {
  $(this)
    .closest('.collapse-group')
    .find('.collapse')
    .collapse('hide');
};

$('.toggleContentTest').click(toggleContent);
