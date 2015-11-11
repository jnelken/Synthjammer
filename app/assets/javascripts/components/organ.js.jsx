var Organ = React.createClass({

  render: function () {
    return (
      <div className="organ">
        <Recorder />
        <ul className="group">
          {Object.keys(TONES).map(function (key) {
            return <li>
                    <Key realNoteName={key} noteName={TONES[key] * 10 } />
                    <Key realNoteName={key} noteName={TONES[key] * 8 } />
                    <Key realNoteName={key} noteName={TONES[key] * 6 } />
                    <Key realNoteName={key} noteName={TONES[key] * 5 } />
                    <Key realNoteName={key} noteName={TONES[key] * 4 } />
                    <Key show={true} realNoteName={key} noteName={TONES[key] * 2 } />
                  </li>;
          })}
          </ul>
        </div>
    );
  }

});
