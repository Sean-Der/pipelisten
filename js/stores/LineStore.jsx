var Reflux = require('reflux'),
    Actions = require('../Actions.jsx'),
    _ = require('lodash');

const MAX_LINES = 500;

module.exports = Reflux.createStore({
    lines: [],

    listenables: Actions,
    onLineAdd: function(line) {
      if (this.lines.length >= MAX_LINES) {
        this.lines.pop();
      }

      this.lines.unshift(line);
      this.trigger(this.lines);
   },
   onLinesSet: function(lines) {
      this.lines = lines;
      this.trigger(this.lines);
   }

});
