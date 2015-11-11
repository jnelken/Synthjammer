(function (root) {

  var Track = root.Track = function (attributes) {
    this.name = attributes.name;
    this.roll = attributes.roll;
  };

  Track.prototype.startRecording = function () {
    this.startTime = Date.now();
    this.roll = [];

  };

  Track.prototype.play = function () {
    if (this.intervalId) { return; }

    var playbackStartTime = Date.now();

    var currentNote = 0;

    this.intervalId = setInterval(function () {

      if (currentNote < this.roll.length) {
        if (Date.now() - playbackStartTime > this.roll[currentNote].timeSlice) {
          console.log("hello");
          KeyActions.batchPress(this.roll[currentNote].notes);
          currentNote++;
        }
      }
      else {
        delete this.intervalId;
        clearInterval(this.intervalId);
      }
    }.bind(this), 1000);

  };

  Track.prototype.addNotes = function (notes) {
    this.roll.push({
      timeSlice: (Date.now() - this.startTime),
      notes: notes
    });
  };

  Track.prototype.stopRecording = function () {
    this.addNotes([]);
    console.log(this.roll);
  };


})(this);
