(function (root) {
  var AudioContext = root.AudioContext || root.webkitAudioContext;
  var ctx = new AudioContext();

  var Note = root.Note = function (frequency) {
    this.oscNode = root.createOscillator(frequency);
    this.gainNode = root.createGainNode();
    this.oscNode.connect(this.gainNode);
  };

  root.createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  root.createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

  Note.prototype.start = function () {
    this.gainNode.gain.value = 10;
  };

  Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };


})(this);
