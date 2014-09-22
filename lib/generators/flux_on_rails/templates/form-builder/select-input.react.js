/**
 * @jsx React.DOM
 */
//= require react
//= require react/form-builder/options-for-select.react
var SelectInput = React.createClass({displayName: 'SelectInput',
  render: function() {
    var data = this.props.data;
    var options = [];
    var value = data.value || "";
    data.values.forEach(function(value) {
      options.push(OptionForSelect( {value:value}))
    }.bind(this))
    console.log(data.value)
    return (
      React.DOM.select( {ref:data.name, value:data.value}, 
        options
      )
    );
  }

});
