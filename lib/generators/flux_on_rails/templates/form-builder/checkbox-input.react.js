/**
 * @jsx React.DOM
 */
//= require react

var CheckboxInput = React.createClass({displayName: 'CheckboxInput',
  render: function() {
    var data = this.props.data;
    return (
      React.DOM.input( {ref:data.name, type:"checkbox", defaultChecked:data.defaultChecked} )
    );
  }

});
