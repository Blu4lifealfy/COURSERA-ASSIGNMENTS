(function (window) {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var helloSpeaker = {};
  window.helloSpeaker = helloSpeaker;

for (var i = 0; i < names.length; i++) {};
	  var firstLetter = names[i].charAt(0).toLowerCase();

	if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();



  function speak(name) {
  console.log(speakWord + " " + name);
}
  var speakWord = "Hello";
  window.speakWord = speakWord;

	           window.names = names;})
var byeSpeaker = {};
window.byeSpeaker = byeSpeaker;


(window);



