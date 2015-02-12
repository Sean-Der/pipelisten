var Reflux = require('reflux'),
    Actions = require('../Actions.jsx');

module.exports = Reflux.createStore({
    listenables: Actions,

    init: function() {
      this.conn = new WebSocket('ws://' + window.location.host + '/websocket');
      this.conn.onclose = function() {


      };
      this.conn.onmessage = function(evt) {
        var data = JSON.parse(evt.data);

        switch(data.event) {
        case 'addLine':
          return Actions.lineAdd.apply(this, data.args);
        case 'setLines':
          return Actions.linesSet.apply(this, data.args);
        default:
          throw 'unhandled websocket event';
        }
      };
    },

    onRegexesStore: function(regexes) {
      this.conn.send(JSON.stringify({event: 'setRegexes', args: [regexes]}));
    }
});
