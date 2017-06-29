var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Compnent</h3>
//     );
//   }
// });

// stateless presentational component refactored code
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This weather app is built with ReactJS</p>
      <p>here are some of the tools I used:</p>
      <ul>
        <li><a href="https://openweathermap.org/">Open Weather Map</a></li>
        <li><a href="https://heroku.com">Heroku</a></li>
      </ul>
      <p>view on <a href="https://github.com/melmar12/Udemy-React-WeatherApp">github</a></p>
    </div>
  )
};

module.exports = About;
