/**
 * @jsx React.DOM
 */
//= require react

var HiddenInput = React.createClass({displayName: 'HiddenInput',
  render: function() {
    var data = this.props.data;
    return (
      React.DOM.input( {ref:data.name, type:"hidden", value:data.value} )
    );
  }

});
