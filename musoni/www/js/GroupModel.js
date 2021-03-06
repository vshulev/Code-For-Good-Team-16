// Generated by CoffeeScript 1.6.3
var GroupModel,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GroupModel = (function(_super) {
  __extends(GroupModel, _super);

  function GroupModel(_arg) {
    this.GroupInformation = (_arg != null ? _arg : {}).GroupInformation;
    _.defaults(this, {
      GroupInformation: {}
    });
    _.defaults(this.GroupInformation, {
      "officeId": 0,
      "groupId": 0,
      "groupName": "",
      "branchName": "",
      "loanOfficer": "",
      "registrationNumber": "",
      "meetingLocation": "",
      "meetingDay": "",
      "meetingFrequency": "",
      "locale": "en",
      "active": false,
      "activationDate": "",
      "dateFormat": "dd MMMM YYYY",
      "clientMembers": []
    });
  }

  GroupModel.prototype.getDataObject = function() {
    return this.GroupInformation;
  };

  GroupModel.prototype.getStoreObject = function() {
    return {
      gid: this.GroupInformation.groupId,
      gname: this.GroupInformation.groupName,
      formData: this.getDataObject()
    };
  };

  GroupModel.prototype.storeLocally = function(obj) {
    return new LocalStore().storeGroup(obj.gid, obj.gname, obj.formData);
  };

  return GroupModel;

})(Model);
