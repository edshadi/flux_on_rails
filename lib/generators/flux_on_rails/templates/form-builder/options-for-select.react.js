/**
 * @jsx React.DOM
 */
//= requrie 'react'

var OptionForSelect = React.createClass({displayName: 'OptionForSelect',

  render: function() {
    return (
      React.DOM.option( {value:this.props.value}, this.props.value)
    );
  }

});
