var Reflux = require('reflux'),
    Actions = require('../Actions.jsx');

module.exports = Reflux.createStore({
    lines: [],

    listenables: Actions,
    onLineAdd: function(time, prefix, line) {
      this.lines.push({time: time, prefix: prefix, line: line});
      this.trigger(this.lines);
    }

});
