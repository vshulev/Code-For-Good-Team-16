// Generated by CoffeeScript 1.6.3
var Sync,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Sync = (function() {
  function Sync(username, password) {
    this.username = username;
    this.password = password;
    this.setBasicAuthKey = __bind(this.setBasicAuthKey, this);
    this.API_URL = "https://mlite-demo.musoni.eu:8443/mifosng-provider/api/v1/";
    this.basicAuthKey = '';
    this.url = '';
    this.verbType = '';
    this.jsonData = {};
    this.send_data();
  }

  Sync.prototype.checkConnection = function() {
    return navigator.connection.type;
  };

  Sync.prototype.setBasicAuthKey = function() {
    return this.basicAuthKey = "Y29kZTRnb29kOlVLMjAxMw==";
  };

  Sync.prototype.executeAjaxRequest = function(url, verbType, jsonData, basicAuthKey, successFunction, errorFunction) {
    var jqxhr,
      _this = this;
    return jqxhr = $.ajax({
      url: url,
      type: verbType,
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: jsonData,
      cache: false,
      beforeSend: function(xhr) {
        return xhr.setRequestHeader("Authorization", "Basic " + _this.basicAuthKey);
      },
      success: successFunction,
      error: errorFunction
    });
  };

  Sync.prototype.successFunction = function() {};

  Sync.prototype.errorFunction = function() {};

  Sync.prototype.send_data = function() {
    if (true) {
      return alert("please connect to the internet before sync");
    } else {
      return executeAjaxRequest(this.url, this.verbType, this.jsonData, this.basicAuthKey, successFunction, errorFunction);
    }
  };

  Sync.prototype.create_client = function(firstname, lastname, fullname, officeId, active, activationDate, groupId, externalId, accountNo, staffId) {
    if (active == null) {
      active = true;
    }
    if (groupId == null) {
      groupId = "";
    }
    if (externalId == null) {
      externalId = "";
    }
    if (accountNo == null) {
      accountNo = "";
    }
    if (staffId == null) {
      staffId = "";
    }
    this.url = API_URL + "clients/?tenantIdentifier=" + this.username;
    this.verbType = 'POST';
    return this.jsonData = {
      "firstname": firstname({
        "lastname": lastname,
        "fullname": fullname,
        "officeId": officeId,
        "active": active,
        "dateFormat": "dd/mm/yyyy",
        "activationDate": activationDate,
        "groupId": groupId,
        "externalId": externalId,
        "accountNo": accountNo,
        "staffId": staffId
      })
    };
  };

  return Sync;

})();
