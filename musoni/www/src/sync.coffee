class Sync
	constructor: (@username, @password) -> 
		@API_URL = "https://mlite-demo.musoni.eu:8443/mifosng-provider/api/v1/"
		@basicAuthKey = ''
		@url = ''
		@verbType = ''
		@jsonData = {}
		@setBasicAuthKey()
		
	setBasicAuthKey:  =>
		jqxhr = $.ajax({ 
			url : @API_URL + "?authentication?username=" + @username + "&password=" + @password
			type : 'POST'
			contentType : "application/json; charset=utf-8"
			dataType : 'json'
			data : "{}"
			cache : false
			success : (data, textStatus, jqXHR) => 
				@basicAuthKey = data.base64EncodedAuthenticationKey
				alert(@basicAuthKey)
			error : (jqXHR, textStatus, errorThrown) =>
		})
	
	executeAjaxRequest: (url, verbType, jsonData, basicAuthKey, successFunction, errorFunction) ->
		jqxhr = $.ajax({ 
			url : url
			type : verbType
			contentType : "application/json; charset=utf-8"
			dataType : 'json'
			data : jsonData
			cache : false
			beforeSend : (xhr) =>
				xhr.setRequestHeader("Authorization", "Basic " + @basicAuthKey)
			success : successFunction
			error : errorFunction 
		})
	
	successFunction: ->
	
	errorFunction: ->
		
	send_data: (action) ->
		@setBasicAuthKey()
		jsonData = action
		executeAjaxRequest(@url, @verbType, @jsonData, @basicAuthKey, successFunction, errorFunction)
		
	
	create_client: (firstname, lastname, fullname, officeId, active=true, activationDate, groupId = "", externalId = "", accountNo = "", staffId = "") ->
		@url = API_URL + "clients/?tenantIdentifier=" + @username
		@verbType = 'POST'
		@jsonData = {"firstname" : firstname
				"lastname" : lastname
				"fullname" : fullname
				"officeId" : officeId
				"active" : active
				"dateFormat": "dd/mm/yyyy"
				"activationDate" : activationDate
				"groupId" : groupId
				"externalId" : externalId
				"accountNo" : accountNo
				"staffId" : staffId }
		
		