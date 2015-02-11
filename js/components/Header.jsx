var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
        <div className="header-container">
            <div>
                <a className="btn smooth btn-b btn-sm" href="#">Add Regex</a>
                <h1>pipelisten</h1>
            </div>

            <div>

              <div className="input-row">
                <input type="text" className="smooth" placeholder="prefix regex" />
                <input type="text" className="smooth" placeholder="line regex" />
                <a className="btn btn-c btn-sm smooth">Delete Regex</a>
              </div>

            </div>
        </div>


    );
  }
});
