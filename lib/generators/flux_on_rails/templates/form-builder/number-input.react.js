/**
 * @jsx React.DOM
 */
//= require react

var NumberInput = React.createClass({displayName: 'NumberInput',
  render: function() {
    var data = this.props.data;
    return (
      React.DOM.input( {ref:data.name, type:"number", defaultValue:data.defaultValue, placeholder:data.placeholder})
    );
  }

});
