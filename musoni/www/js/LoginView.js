// Generated by CoffeeScript 1.6.3
var LoginView;

LoginView = (function() {
  function LoginView() {
    var _this = this;
    window.userLogin = function() {
      return _this.login();
    };
  }

  LoginView.prototype.render = function() {
    var form;
    form = '<div class="form-page" id="page-1">';
    form += UI.getLabel('username', 'Username');
    form += UI.getTextInput('password', null);
    form += UI.nl();
    form += UI.getLabel('password', 'Password');
    form += UI.getPasswordInput('password', null);
    form += UI.nl();
    form += UI.getSubmit('Log In', 'userLogin');
    form += UI.nl();
    form += '</div>';
    return form;
  };

  LoginView.prototype.login = function() {
    return window.app.optionsView();
  };

  return LoginView;

})();
