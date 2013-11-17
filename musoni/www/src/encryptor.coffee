class Encryptor
	constructor: (@key) -> 

	decrypt: (encrypted, d_key) =>
		if d_key == @key
			
			return JSON.parse CryptoJS.AES.decrypt(encrypted, "hamster").toString(CryptoJS.enc.Utf8)
		return ""
	
	
	encrypt: (obj) ->
		return CryptoJS.AES.encrypt(JSON.stringify(obj), "hamster")