// Generated by CoffeeScript 1.6.3
var ClientRegistrationView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ClientRegistrationView = (function(_super) {
  __extends(ClientRegistrationView, _super);

  function ClientRegistrationView(model) {
    this.model = model;
    this.extractData = __bind(this.extractData, this);
    this.page = 1;
    this.maxPage = 2;
    ClientRegistrationView.__super__.constructor.call(this, this.model);
  }

  ClientRegistrationView.prototype.render = function() {
    var form, options;
    form = '<div class="form-page" id="page-1">';
    form += UI.getLabel('firstName', 'First Name');
    form += UI.getTextInput('firstName', this.model.PersonalInformation.firstName);
    form += UI.nl();
    form += UI.getLabel('middleName', 'Middle Name');
    form += UI.getTextInput('middleName', this.model.PersonalInformation.middleName);
    form += UI.nl();
    form += UI.getLabel('lastName', 'Last Name');
    form += UI.getTextInput('lastName', this.model.PersonalInformation.lastName);
    form += UI.nl();
    form += UI.getLabel('branchName', 'Branch');
    options = {
      'ho': 'Head Office',
      'pl': 'Premier League',
      'ch': 'Championship',
      'le': 'League 1',
      'll': 'La Liga',
      'bn': 'Bundesliga'
    };
    form += UI.getSelection('branchName', options, this.model.PersonalInformation.branchName);
    form += UI.nl();
    form += UI.getLabel('gender', 'Gender');
    options = {
      'm': 'Male',
      'f': 'Female'
    };
    form += UI.getRadioButton('gender', options, this.model.PersonalInformation.gender);
    form += UI.nl();
    form += UI.getLabel('dateOfBirth', 'Date of Birth');
    form += UI.getTextInput('dateOfBirth', this.model.PersonalInformation.dateOfBirth);
    form += UI.nl();
    form += '</div>';
    form += '<div class="form-page" id="page-2">';
    form += UI.getLabel('maritalStatus', 'Marital Status');
    options = {
      's': 'Single',
      'm': 'Married',
      'd': 'divorced'
    };
    form += UI.getSelection('maritalStatus', options, this.model.PersonalInformation.maritalStatus);
    form += UI.nl();
    form += UI.getLabel('phoneNumber', 'Phone Number');
    form += UI.getTextInput('phoneNumber', this.model.PersonalInformation.phoneNumber);
    form += UI.nl();
    form += UI.getLabel('address', 'Address');
    form += UI.getTextInput('address', this.model.PersonalInformation.address);
    form += UI.nl();
    form += UI.getLabel('town', 'Town');
    form += UI.getTextInput('town', this.model.PersonalInformation.town);
    form += UI.nl();
    form += UI.getLabel('county', 'County');
    form += UI.getTextInput('county', this.model.PersonalInformation.county);
    form += UI.nl();
    form += UI.getSubmit('Submit', 'ClientRegistrationSubmit');
    form += UI.nl();
    form += '</div>';
    form += UI.getBackNext('Back', 'GoBack');
    form += '<span id="page-c">Page ' + this.page + ' out of ' + this.maxPage + '</span>';
    form += UI.getBackNext('Next', 'GoNext');
    return form;
  };

  ClientRegistrationView.prototype.extractData = function() {
    this.model.PersonalInformation.firstName = $('#firstName').val();
    this.model.PersonalInformation.middleName = $('#middleName').val();
    this.model.PersonalInformation.lastName = $('#lastName').val();
    this.model.PersonalInformation.branchName = $('#branchName :selected').val();
    this.model.PersonalInformation.gender = $('input:radio[name=gender]:checked').val();
    this.model.PersonalInformation.dateOfBirth = $('#dateOfBirth').val();
    this.model.PersonalInformation.maritalStatus = $('#maritalStatus :selected').val();
    this.model.PersonalInformation.phoneNumber = $('#phoneNumber').val();
    this.model.PersonalInformation.address = $('#address').val();
    this.model.PersonalInformation.town = $('#town').val();
    return this.model.PersonalInformation.county = $('#county').val();
  };

  return ClientRegistrationView;

})(FormView);
