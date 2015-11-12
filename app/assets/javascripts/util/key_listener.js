(function () {

var keyMap = {
  65: "A4",
  83: "B4",
  68: "C5",
  70: "D5",
  71: "E5",
  72: "F5",
  74: "G5",
  75: "A5",
  76: "B5"
};

var octaveMap = {
  88: 2,
  90: 0.5
};

  $(document).on("keydown", function (e) {
    if (e.which === 90 || e.which === 88) {
      var octaveX = octaveMap[e.which];
      KeyActions.octaveChange(octaveX);
    }
  });

  $(document).on("keydown", function (e) {
    var noteName = keyMap[e.which];
    KeyActions.keyPressed(noteName);
  });


  $(document).on("keyup", function (e) {
    var noteName = keyMap[e.which];
    KeyActions.keyUnPressed(noteName);
  });

})();
