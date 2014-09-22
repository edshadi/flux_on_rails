/**
 * @jsx React.DOM
 */
//= require react
//= require react/form-builder/text-input.react
//= require react/form-builder/checkbox-input.react
//= require react/form-builder/number-input.react
//= require react/form-builder/hidden-input.react
//= require react/form-builder/select-input.react
//= require react/form-builder/password-input.react
//= require react/form-builder/textarea-input.react
var Input = React.createClass({displayName: 'Input',
  render: function() {
    var data = this.props.data;
    return (
      React.DOM.div(null, 
        this.input()
      )
    );
  },
  input: function() {
    var data = this.props.data;
    switch(this.type()) {
      case 'boolean':
        return(CheckboxInput( {ref:"input", data:{name: data.name, defaultChecked: data.value, placeholder: this.placeholder()}} ))
        break;
      case 'number':
        return(NumberInput( {ref:"input", data:{name: data.name, defaultValue: data.value, placeholder: this.placeholder()}} ))
        break;
      case 'hidden':
        return(HiddenInput( {ref:"input", data:{name: data.name, value: data.value, placeholder: this.placeholder()}} ))
        break;
      case 'select':
        return(SelectInput( {ref:"input", data:{name: data.name, value: data.value, values: this.props.options.values }} ))
        break;
      case 'password':
        return(PasswordInput( {ref:"input", data:{name: data.name, defaultChecked: data.value, placeholder: this.placeholder()}} ))
        break;
      case 'textarea':
        return(TextareaInput( {ref:"input", data:{name: data.name, defaultValue: data.value, placeholder: this.placeholder()}} ))
        break;
      default:
        return(TextInput( {ref:"input", data:{name: data.name, defaultValue: data.value, placeholder: this.placeholder()}} ))
    }

  },
  type: function() {
    var type = typeof(this.props.data.value);
    if(this.props.options.type) type = this.props.options.type;
    if(this.isId()) type = 'hidden';
    if(this.isPassword()) type = 'password';
    return type;
  },
  isId: function() {
    if(this.props.data.name === 'id') return true;
    return false;
  },
  isPassword: function() {
    if(this.props.data.name === 'password' || this.props.data.name === 'password_confirmation') return true;
    return false;
  },
  placeholder: function() {
    var name = this.props.options.placeholder || this.props.data.name;
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
});
