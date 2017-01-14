var React = require('react');

var WeatherForm = React.createClass({
  render: function () {
    return (
      <div>
        <form>
          <input type="text"/>
          <input type="submit" value="Get Weather"/>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
