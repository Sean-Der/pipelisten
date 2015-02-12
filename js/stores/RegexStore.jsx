var Reflux = require('reflux'),
    Actions = require('../Actions.jsx'),
    _ = require('lodash');

module.exports = Reflux.createStore({
    regexes: [],

    listenables: Actions,
    storeAndTrigger: function() {
      this.trigger(this.regexes);
      Actions.regexesStore(this.regexes);
    },

    onRegexAdd: function(regex) {
      this.regexes.push(regex);
      this.storeAndTrigger();
    },
    onRegexDelete: function(regex) {
      _.remove(this.regexes, regex);
      this.storeAndTrigger();
    },
    onRegexUpdate: function(regex) {
      this.regexes = _.map(this.regexes,function(storedRegex){
        return (storedRegex.id === regex.id) ? regex : storedRegex;
      });
      this.storeAndTrigger();
    }


});
