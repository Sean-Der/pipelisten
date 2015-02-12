var React = require('react'),
    Reflux = require('reflux'),
    RegexStore = require('../stores/RegexStore.jsx'),
    Actions = require('../Actions.jsx'),
    _ = require('lodash');

var PrefixLine = React.createClass({
  getInitialState: function() {
    return this.props.regex;
  },
  handlePrefixRegexChange: function(evt) {
    var newVal = _.defaults({prefixRegex: event.target.value}, this.state);
    Actions.regexUpdate(newVal);
    this.setState(newVal);
  },
  handleLineRegexChange: function(evt) {
    var newVal = _.defaults({lineRegex: event.target.value}, this.state);
    Actions.regexUpdate(newVal);
    this.setState(newVal);
  },
  handleDelete: function() {
    Actions.regexDelete(this.state);
  },
  render: function() {
    return (
      <div className="input-row">
        <input type="text" className="smooth" placeholder="prefix regex" value={this.state.prefixRegex} onChange={this.handlePrefixRegexChange} />
        <input type="text" className="smooth" placeholder="line regex"   value={this.state.lineRegex} onChange={this.handleLineRegexChange} />
        <a onClick={this.handleDelete} className="btn btn-c btn-sm smooth">Delete Regex</a>
      </div>
    );
  }
});


module.exports = React.createClass({
  mixins: [Reflux.listenTo(RegexStore,"onRegexStoreChange")],
  onRegexStoreChange: function(regexes) {
    this.setState({
      regexes: regexes
    });
  },
  handleRegexAdd: function() {
    Actions.regexAdd({
      prefixRegex: '.*',
      lineRegex: '.*',
      id: Math.random().toString(36).substring(7)
    });
  },
  getInitialState: function() {
    return {regexes: []};
  },
  render: function(){
    return (
        <div className="header-container">

            <div>
                <a className="btn smooth btn-b btn-sm" href="#" onClick={this.handleRegexAdd}>Add Regex</a>
                <h1>pipelisten</h1>
            </div>

            <div>
              {this.state.regexes.map(function(regex, i){
                return (
                  <PrefixLine key={regex.id} regex={regex}/>
                );
              })}
            </div>

        </div>
    );
  }
});
