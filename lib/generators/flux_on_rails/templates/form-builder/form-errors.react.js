/**
 * @jsx React.DOM
 */

//= require react
var FormErrors = React.createClass({displayName: 'FormErrors',
  render: function() {
    var errors = [];
    this.props.errors.forEach(function(err) {
      errors.push(React.DOM.li(null, err))
    })
    return (
      React.DOM.ul( {className:"form-errors"}, errors)
    );
  }
});
