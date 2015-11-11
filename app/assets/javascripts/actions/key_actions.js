window.KeyActions = {

  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      eventType: 'KEY_PRESSED',
      noteName: noteName
    });
  },

  keyUnPressed: function (noteName) {
    AppDispatcher.dispatch({
      eventType: 'KEY_UNPRESSED',
      noteName: noteName
    });
  },

  batchPress: function (notes) {
    KeyActions.keyUnPressed(KeyStore.all());
    KeyActions.keyPressed(notes);
  }

};
