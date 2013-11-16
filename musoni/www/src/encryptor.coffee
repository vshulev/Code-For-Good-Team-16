class Encryptor
	constructor: (@key) -> 
	
	decrypt: (d_key, encrypted) =>
		if d_key == @key
			return JSON.parse CryptoJS.AES.decrypt(encrypted, "hamster")
		return ""
	
	
	encrypt: (obj) ->
		return CryptoJS.AES.encrypt(JSON.stringify(obj), "hamster")