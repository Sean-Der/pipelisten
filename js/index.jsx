require('../css/index.css');
require('./stores/WebsocketConnection.jsx');

var React     = require('react'),
    Header    = require('./components/Header.jsx'),
    LineTable = require('./components/LineTable.jsx');


var Body = React.createClass({
  render: function(){
    return (
      <div>
        <Header/>
        <LineTable/>
      </div>
    );
  }
});

window.React = React;
React.render(<Body/>, document.getElementById('content'));
