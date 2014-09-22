/**
 * @jsx React.DOM
 */
//= require react

var TextareaInput = React.createClass({displayName: 'TextareaInput',
  render: function() {
    var data = this.props.data;
    return (
      React.DOM.textarea( {ref:data.name, defaultValue:data.defaultValue, placeholder:data.placeholder} )
    );
  }

});
