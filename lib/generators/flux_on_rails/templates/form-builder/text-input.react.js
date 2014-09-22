/**
 * @jsx React.DOM
 */
//= require react

var TextInput = React.createClass({displayName: 'TextInput',
  render: function() {
    var data = this.props.data;
    return (
      React.DOM.input( {ref:data.name, type:"text", defaultValue:data.defaultValue, placeholder:data.placeholder} )
    );
  }

});
