var Reflux = require('reflux'),
    Actions = require('../Actions.jsx');

module.exports = Reflux.createStore({

    init: function() {
      var conn = new WebSocket('ws://' + window.location.host + '/websocket');
      conn.onclose = this.onclose;
      conn.onmessage = this.onmessage;
    },

    onclose: function() {
    },

    onmessage: function(evt) {
      var data = JSON.parse(evt.data);

      switch(data.event) {
      case 'addLine':
        return Actions.lineAdd.apply(this, data.args);
      default:
        throw 'unhandled websocket event';
      }
    },



});
