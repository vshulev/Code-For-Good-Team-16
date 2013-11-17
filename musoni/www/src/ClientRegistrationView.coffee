class ClientRegistrationView
	constructor: (@client) ->
		@client = {}
		window.ClientRegistrationSubmit = => @submission()

	submission: ->
		@extractData()
		@client.submit()
	
	render: =>
		form = UI.getLabel( 'firstName','First Name' )
		form += UI.getTextInput('firstName', @client.PersonalInformation.firstName )
		form += UI.nl()
		form += UI.getLabel( 'middleName','Middle Name' )
		form += UI.getTextInput('middleName', @client.PersonalInformation.middleName )
		form += UI.nl()
		form += UI.getLabel( 'lastName','Last Name' )
		form += UI.getTextInput('lastName', @client.PersonalInformation.lastName )
		form += UI.nl()
		form += UI.getLabel( 'branchName','Branch' )
		options = { 'ho': 'Head Office', 'pl': 'Premier League', 'ch': 'Championship', 'le': 'League 1', 'll': 'La Liga', 'bn': 'Bundesliga' }
		form += UI.getSelection('branchName', options, @client.PersonalInformation.branchName )
		form += UI.nl()
		form += UI.getLabel( 'gender','Gender' )
		options = { 'm': 'Male', 'f': 'Female' }
		form += UI.getRadioButton('gender', options, @client.PersonalInformation.gender )
		form += UI.nl()
		form += UI.getLabel( 'dateOfBirth','Date of Birth' )
		form += UI.getTextInput('dateOfBirth', @client.PersonalInformation.dateOfBirth)
		form += UI.nl()
		form += UI.getLabel( 'maritalStatus','Marital Status' )
		options = { 's': 'Single', 'm': 'Married', 'd': 'divorced' }
		form += UI.getSelection('maritalStatus', options, @client.PersonalInformation.maritalStatus )
		form += UI.nl()
		form += UI.getLabel( 'phoneNumber','Phone Number' )
		form += UI.getTextInput('phoneNumber', @client.PersonalInformation.phoneNumber )
		form += UI.nl()
		form += UI.getLabel( 'address','Address' )
		form += UI.getTextInput('address', @client.PersonalInformation.address)
		form += UI.nl()
		form += UI.getLabel( 'town','Town' )
		form += UI.getTextInput('town', @client.PersonalInformation.town )
		form += UI.nl()
		form += UI.getLabel( 'county','County' )
		form += UI.getTextInput('county', @client.PersonalInformation.county )
		form += UI.nl()	
		form += UI.getSubmit( 'Submit', 'ClientRegistrationSubmit' )

	extractData: =>
		@client.PersonalInformation.firstName=${'#firstName'}.val()
		@client.PersonalInformation.middleName=${'#middleName'}.val()
		@client.PersonalInformation.lastName=${'#lastName'}.val()
		@client.PersonalInformation.branchName=$('#branchName :selected').val()
		@client.PersonalInformation.gender=$('input:radio[name=gender]:checked').val();
		@client.PersonalInformation.dateOfBirth=${'#dateOfBirth'}.val()
		@client.PersonalInformation.maritalStatus=$('#maritalStatus :selected').val()
		@client.PersonalInformation.phoneNumber=${'#phoneNumber'}.val()
		@client.PersonalInformation.address=${'#address'}.val()
		@client.PersonalInformation.town=${'#town'}.val()
		@client.PersonalInformation.county=${'#county'}.val()
		

	
	
