class ClientRegistrationView
	constructor: (@client) ->
		@client = {}
		window.ClientRegistrationSubmit = => @submission()

	submission: ->
		@extractData()
		@client.submit()
	
	render: =>
		form = UI.getLabel( 'firstName','First Name' )
		form += UI.getTextInput('firstName', @client.firstName )
		form += UI.nl()
		form += UI.getLabel( 'middleName','Middle Name' )
		form += UI.getTextInput('middleName', @client.middleName )
		form += UI.nl()
		form += UI.getLabel( 'lastName','Last Name' )
		form += UI.getTextInput('lastName', @client.lastName )
		form += UI.nl()
		form += UI.getLabel( 'branchName','Branch' )
		form += UI.getTextInput('branchName', @client.branchName )
		form += UI.nl()
		form += UI.getLabel( 'gender','Gender' )
		options = { 'm': 'Male', 'f': 'Female' }
		form += UI.getRadioButton('gender', options, @client.gender )
		form += UI.nl()
		form += UI.getLabel( 'dateOfBirth','Date of Birth' )
		form += UI.getTextInput('dateOfBirth', @client.dateOfBirth)
		form += UI.nl()
		form += UI.getLabel( 'maritalStatus','Marital Status' )
		options = { 's': 'Single', 'm': 'Married', 'd': 'divorced' }
		form += UI.getSelection('maritalStatus', options, @client.maritalStatus )
		form += UI.nl()
		form += UI.getLabel( 'phoneNumber','Phone Number' )
		form += UI.getTextInput('phoneNumber', @client.phoneNumber )
		form += UI.nl()
		form += UI.getLabel( 'address','Address' )
		form += UI.getTextInput('address', @client.address)
		form += UI.nl()
		form += UI.getLabel( 'town','Town' )
		form += UI.getTextInput('town', @client.town )
		form += UI.nl()
		form += UI.getLabel( 'county','County' )
		form += UI.getTextInput('county', @client.county )
		form += UI.nl()	
		form += UI.getSubmit( 'Submit', 'ClientRegistrationSubmit' )

	extractData: ->
		
