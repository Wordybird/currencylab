var React = require('react');

var CurrencySelector = React.createClass({
  getInitialState: function() {
    return {selectedIndex: undefined};
  },
  handleChange: function(event) {
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    this.props.selectCurrency(this.props.currencies[newIndex]);
  },
  render: function() {
    var options = this.props.currencies.map(function(currency, index) {
      return <option value={index} key={index}>{currency.currencyCode}</option>
    })
    return (
      <select id="currencies" value={this.state.selectedIndex} onChange = {this.handleChange}>
       {options}
      </select>
    );
  }
});

module.exports = CurrencySelector;