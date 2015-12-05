var Key = React.createClass({

  getInitialState: function () {
    return {
      pressed: false,
      note: new Note(this.props.noteName),
      octave: KeyStore.octaveX()
    };
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(this.toggleNote);
    KeyStore.addChangeHandler(this.changeOctave);
  },

  changeOctave: function () {
    if (this.state.octave !== KeyStore.octaveX()) {
      this.setState({ octave: KeyStore.octaveX() });
      this.setState({ note: new Note(this.props.noteName * this.props.octave) });
    }
  },

  toggleNote: function () {
    if (KeyStore.all().indexOf(this.props.realNoteName) !== -1) {
      this.state.note.start(this.props.gain);
      this.setState({pressed: true});
    } else {
      this.state.note.stop();
      this.setState({pressed: false});
    }
  },



  render: function () {
    var pressedClass = "unpressed";
    var overtoneClass = 'overtone';

    if (this.props.show) {
      overtoneClass = "root";
    }
    if (this.state.pressed) {
      pressedClass = 'pressed';
    }
    return (
      <div className={overtoneClass + " " + pressedClass}>
    </div>
    );
  }

});
