var React = require('react'),
    Reflux = require('reflux'),
    LineStore = require('../stores/LineStore.jsx');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(LineStore,"onLineStoreChange")],

  onLineStoreChange: function(lines) {
    this.setState({
      lines: lines.reverse()
    });
  },

  getInitialState: function() {
    return {lines: []};
  },

  render: function(){
    return (
      <table className="table line-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Prefix</th>
            <th>Line</th>
          </tr>
        </thead>
        <tbody>
          {this.state.lines.map(function(line){
            return (
                <tr>
                    <td> {line.start}   </td>
                    <td> {line.prefix} </td>
                    <td> {line.line}   </td>
                </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
});
