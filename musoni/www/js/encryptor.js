// Generated by CoffeeScript 1.6.3
var Encryptor,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Encryptor = (function() {
  function Encryptor(key) {
    this.key = key;
    this.decrypt = __bind(this.decrypt, this);
  }

  Encryptor.prototype.decrypt = function(encrypted, d_key) {
    if (d_key === this.key) {
      return JSON.parse(CryptoJS.AES.decrypt(encrypted, "hamster").toString(CryptoJS.enc.Utf8));
    }
    return "";
  };

  Encryptor.prototype.encrypt = function(obj) {
    return CryptoJS.AES.encrypt(JSON.stringify(obj), "hamster");
  };

  return Encryptor;

})();