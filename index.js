//we must try to be more specific since if we add more buttons later on we don't
//want it to cause any serious issues in the code later on so we use .set along with button
function makeSomeNoise(key) {
  switch (key) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    default:
      console.log("invalid entry");
  }
}
for (var i = 0; i < document.querySelectorAll(".set button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    makeSomeNoise(this.innerText);
    animations(this.innerText);
  });
  // we compare the innerText and use it to find the right letter to be played which is required
  //we can't directly use makeSomeNoise function since within the addEventListener function
  //can't have () so we won't be able to give it the arguments so we must use a new  function
  //which doesn't require any seperate arguments hence we declare a function within the
  //addEventListener itself since it is necessary at this stage
}
//document.addEventListener("keydown", makeSomeNoise(event.key));------invalid statement due to this reason only
document.addEventListener("keydown",function(){
  makeSomeNoise(event.key);
  animations(event.key);
});
// here we try to catch the key pressed on the keyboard and then use it to play the audio here event is
// actually an array but we make it event.key since it gives us the key that is pressed and we use it in
// future cases to get the ans
function animations(element){
  var activeButton=document.querySelector("."+element);
  activeButton.classList.toggle("pressed");
  setTimeout(function(){activeButton.classList.toggle("pressed");},100);
}
