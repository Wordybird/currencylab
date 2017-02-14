var React = require('react');

var CurrencyDetail = function(props) {
  if (!props.currency) {
    return <h4>No currency selected.</h4>
  }
  return (<div>
    <h4>Currency Code: {props.currency.currencyCode}</h4>
    <h4>Currency Exchange Rate: {props.currency.currencyRate}</h4>
    </div>)
};

module.exports = CurrencyDetail;