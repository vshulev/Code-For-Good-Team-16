// Generated by CoffeeScript 1.6.3
var ClientRegistrationView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ClientRegistrationView = (function() {
  function ClientRegistrationView(client) {
    var _this = this;
    this.client = client;
    this.render = __bind(this.render, this);
    this.client = {};
    window.ClientRegistrationSubmit = function() {
      return _this.submission();
    };
  }

  ClientRegistrationView.prototype.submission = function() {
    this.extractData();
    return this.client.submit();
  };

  ClientRegistrationView.prototype.render = function() {
    var form, options;
    form = UI.getLabel('firstName', 'First Name');
    form += UI.getTextInput('firstName', this.client.firstName);
    form += UI.nl();
    form += UI.getLabel('middleName', 'Middle Name');
    form += UI.getTextInput('middleName', this.client.middleName);
    form += UI.nl();
    form += UI.getLabel('lastName', 'Last Name');
    form += UI.getTextInput('lastName', this.client.lastName);
    form += UI.nl();
    form += UI.getLabel('branchName', 'Branch');
    form += UI.getTextInput('branchName', this.client.branchName);
    form += UI.nl();
    form += UI.getLabel('gender', 'Gender');
    options = {
      'm': 'Male',
      'f': 'Female'
    };
    form += UI.getRadioButton('gender', options, this.client.gender);
    form += UI.nl();
    form += UI.getLabel('dateOfBirth', 'Date of Birth');
    form += UI.getTextInput('dateOfBirth', this.client.dateOfBirth);
    form += UI.nl();
    form += UI.getLabel('maritalStatus', 'Marital Status');
    options = {
      's': 'Single',
      'm': 'Married',
      'd': 'divorced'
    };
    form += UI.getSelection('maritalStatus', options, this.client.maritalStatus);
    form += UI.nl();
    form += UI.getLabel('phoneNumber', 'Phone Number');
    form += UI.getTextInput('phoneNumber', this.client.phoneNumber);
    form += UI.nl();
    form += UI.getLabel('address', 'Address');
    form += UI.getTextInput('address', this.client.address);
    form += UI.nl();
    form += UI.getLabel('town', 'Town');
    form += UI.getTextInput('town', this.client.town);
    form += UI.nl();
    form += UI.getLabel('county', 'County');
    form += UI.getTextInput('county', this.client.county);
    form += UI.nl();
    return form += UI.getSubmit('Submit', 'ClientRegistrationSubmit');
  };

  ClientRegistrationView.prototype.extractData = function() {};

  return ClientRegistrationView;

})();
