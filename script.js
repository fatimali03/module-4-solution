var globalScope = this || window;

(function (globalScope) {
  var hello = {};
  hello.speaker = "Hello";

  hello.speak = function (name) {
    console.log(this.speaker + " " + name);
  }

  globalScope.hello = hello;

  var bye = {};
  bye.speaker = "Good Bye";

  bye.speak = function (name) {
    console.log(this.speaker + " " + name);
  }

  globalScope.bye = bye;

  var names = ["Fatima", "Ali", "Jen", "Sara", "Paul", "Syed", "Lara", "Ahsan", "Jawwad", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var letter = names[i].charAt(0).toLowerCase();
    if (letter === 'j') {
      bye.speak(names[i]);
    } else {
      hello.speak(names[i]);
    }
  }
})(globalScope);
