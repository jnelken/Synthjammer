var Recorder = React.createClass({
  getInitialState: function () {
    return { isRecording: false, track: new Track({name: "", roll: []}) };
  },

  pushedRecord: function () {
    this.state.track.startRecording();
    KeyStore.addChangeHandler(this.recordNotes);
    this.setState({isRecording: true});
  },

  pushedStop: function () {
    this.state.track.stopRecording();
    KeyStore.removeChangeHandler(this.recordNotes);
    this.setState({isRecording: false});
  },

  pushedPlay: function () {
    this.state.track.play();
  },

  recordNotes: function () {
    var keysPressed = KeyStore.all();
    this.state.track.addNotes(keysPressed);
  },

  render: function () {
    return (
      <div>
        <button onClick={this.pushedRecord}>⦿</button>
        <button onClick={this.pushedStop}>￭</button>
        <button onClick={this.pushedPlay}>►</button>
      </div>
    );
  }

});
