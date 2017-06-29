var React = require('react');
var {Link} = require('react-router');

// stateless presentational component refactored code
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples Compnent</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to='/?location=Houston'>Houston, TX</Link></li>
        <li><Link to="/?location=Rio">Rio, Brazil</Link></li>
      </ol>
    </div>
  );
};

module.exports = Examples;
