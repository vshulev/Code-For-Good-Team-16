// Generated by CoffeeScript 1.6.3
var UI;

UI = (function() {
  function UI() {}

  UI.getTextInput = function(name, value) {
    if (value == null) {
      value = '';
    }
    return "<input type='text' name='" + name + "' id='" + name + "' value='" + value + "' />";
  };

  UI.getRadioButton = function(name, options, checked) {
    return _(_(options).map(function(display, value) {
      var selected;
      selected = value === checked ? "checked" : "";
      if (value == null) {
        value = '';
      }
      return ("<input type='radio' name='" + name + "' id='" + name + "_" + value + "' value='" + value + "' " + selected + "/>") + UI.getLabel(name + '_' + value, display);
    })).join('');
  };

  UI.getSelection = function(name, options, selected) {
    var ret;
    ret = "<select id='" + name + "' name='" + name + "'>";
    ret += _(_(options).map(function(display, value) {
      selected = value === selected ? "selected" : "";
      if (value == null) {
        value = '';
      }
      return "<option id='" + name + "_" + value + "' value='" + value + "' " + selected + ">" + display + "</option>";
    })).join('');
    ret += "</select>";
    return ret;
  };

  UI.getLabel = function(id, display) {
    return "<label for='" + id + "'>" + display + "</label>";
  };

  UI.getSubmit = function(name, functionName) {
    return "<input type='submit' value='" + name + "' onclick='" + functionName + "()' />";
  };

  UI.nl = function() {
    return '<br/>';
  };

  return UI;

})();