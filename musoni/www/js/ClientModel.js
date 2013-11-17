// Generated by CoffeeScript 1.6.3
var ClientModel,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ClientModel = (function(_super) {
  __extends(ClientModel, _super);

  function ClientModel(_arg) {
    this.ClientInformation = _arg.ClientInformation, this.PersonalInformation = _arg.PersonalInformation, this.ClientIdentification = _arg.ClientIdentification, this.BusinessDetails = _arg.BusinessDetails, this.nextOfKin = _arg.nextOfKin, this.certifyIfAccurate = _arg.certifyIfAccurate, this.approveClient = _arg.approveClient;
    _.defaults(this, {
      ClientInformation: {},
      PersonalInformation: {},
      ClientIdentification: {},
      BusinessDetails: {},
      nextOfKin: {},
      certifyIfAccurate: {},
      approveClient: {}
    });
    _.defaults(this.ClientInformation, {
      "LoanOfficer": "",
      "BranchName": "",
      "GroupName": ""
    });
    _.defaults(this.PersonalInformation, {
      "firstName": "",
      "middleName": "",
      "lastName": "",
      "dateOfBirth": "",
      "gender": "",
      "maritalStatus": "",
      "phoneNumber": "",
      "address": "",
      "town": "",
      "county": ""
    });
    _.defaults(this.ClientIdentification, {
      "documentType": "",
      "uniqueIDNumber": 0,
      "desription": "",
      "M-PESANumber": ""
    });
    _.defaults(this.BusinessDetails, {
      "businessName": "",
      "businessType": "",
      "startDate": "",
      "address": "",
      "postalCode": ""
    });
    _.defaults(this.nextOfKin, {
      "relationToClient": "",
      "Name": "",
      "dateOfBirth": "",
      "Address": "",
      "City": "",
      "phoneNumber": ""
    });
    _.defaults(this.certifyIfAccurate, {
      "certifyIfAccurate": "",
      "isAccurate": "",
      "date": ""
    });
    _.defaults(this.approveClient, {
      "loanOfficerName": "",
      "branchManagerName": "",
      "date": "",
      "verifyTickBox": "verifyTickBox"
    });
  }

  ClientModel.prototype.getDataObject = function() {
    return {
      ClientInformation: this.ClientInformation,
      PersonalInformation: this.PersonalInformation,
      ClientIdentification: this.ClientIdentification,
      BusinessDetails: this.BusinessDetails,
      nextOfKin: this.nextOfKin,
      certifyIfAccurate: this.certifyIfAccurate,
      approveClient: this.approveClient
    };
  };

  ClientModel.prototype.getStoreObject = function() {
    return {
      uid: this.ClientIdentification.uniqueIDNumber,
      fname: this.ClientInformation.firstName,
      sname: this.ClientInformation.lastName,
      formData: this.getDataObject()
    };
  };

  ClientModel.prototype.storeLocally = function(obj) {
    return new LocalStore().storeCustomer(obj.uid, obj.fname, obj.sname, obj.formData);
  };

  return ClientModel;

})(Model);