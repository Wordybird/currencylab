var React = require('react');
var ReactDOM = require('react-dom');

var CurrencyBox = require('./components/CurrencyBox.jsx');

window.onload = function () {
  ReactDOM.render(
    <CurrencyBox />,
    document.getElementById('app')
  );
}
