var React = require ("react");
var CurrencySelector = require('./CurrencySelector');
var CurrencyDetails = require('./CurrencyDetails');

var CurrencyBox = React.createClass({
  getInitialState: function() {
    return {currencies: [], focusCurrency: null};
  },
  componentDidMount: function(){
    var url = "https://api.fixer.io/latest";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if (request.status ===200){
        var currencyArray = [];
        var data = JSON.parse(request.responseText);
        //Returns an array of keys as strings.
        var currencyKeys = Object.keys(data.rates);
        for (var currencyCode of currencyKeys) {
          var rate = data.rates[currencyCode];
          var currency = {
          currencyCode: currencyCode,
          currencyRate: rate 
        };
          currencyArray.push(currency);
        }
        this.setState({currencies: currencyArray, focusCurrency: currencyArray[0]});
      }
    }.bind(this);
  request.send();
  },
  setFocusCurrency: function(currency){
    this.setState({focusCurrency: currency});
  },
  render: function() {
    return (
        <div>
        <h2>Currency Exchange Rates For The Euro</h2>
          <CurrencySelector currencies={this.state.currencies} selectCurrency = {this.setFocusCurrency}/>
          <CurrencyDetails currency={this.state.focusCurrency} />
        </div>
      )
  }
});


module.exports = CurrencyBox;