class Sync

	constructor: (@username, @password) -> 
		@API_URL = "https://mlite-demo.musoni.eu:8443/mifosng-provider/api/v1/"
		@basicAuthKey = ''
		@url = ''
		@verbType = ''
		@jsonData = {}
		@send_data()
		#@setBasicAuthKey()
		
		
	checkConnection: ->
		return navigator.connection.type
	
	
	setBasicAuthKey:  =>
		@basicAuthKey = "Y29kZTRnb29kOlVLMjAxMw=="
		# jqxhr = $.ajax({ 
			# url : "https://mlite-demo.musoni.eu:8443/mifosng-provider/api/v1/authentication/?username=" + @username + "&password=" + @password #@API_URL + "authentication?username=" + @username + "&password=" + @password + "&tenantIdentifier=" + @username
			# type : 'POST'
			# contentType : "application/json; charset=utf-8"
			# dataType : 'json'
			# crossDomain: true
			# data : "{}"
			# cache : false
			# beforeSend : (xhr) =>
				# xhr.setRequestHeader("X-Mifos-Platform-TenantId", "code4good")
			# success : (data, textStatus, jqXHR) => 
				# @basicAuthKey = data.base64EncodedAuthenticationKey
				# console.log(@basicAuthKey)
			# error : (jqXHR, textStatus, errorThrown) =>
				# console.log(errorThrown)
				# console.log(JSON.stringify jqXHR)
			# })

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
		
		
	send_data: -> # (action) ->
		if true #navigator.connection.type == Connection.NONE
			alert ("please connect to the internet before sync")
		else
			#@setBasicAuthKey()
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
		