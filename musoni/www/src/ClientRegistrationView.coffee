class ClientRegistrationView extends FormView
    constructor: (@model) ->
        @page = 1
        @maxPage = 2
        super @model
    
    render: ->
        form = '<div class="form-page" id="page-1">'
        form += UI.getLabel( 'firstName','First Name' )
        form += UI.getTextInput('firstName', @model.PersonalInformation.firstName )
        form += UI.nl()
        form += UI.getLabel( 'middleName','Middle Name' )
        form += UI.getTextInput('middleName', @model.PersonalInformation.middleName )
        form += UI.nl()
        form += UI.getLabel( 'lastName','Last Name' )
        form += UI.getTextInput('lastName', @model.PersonalInformation.lastName )
        form += UI.nl()
        form += UI.getLabel( 'branchName','Branch' )
        options = { 'ho': 'Head Office', 'pl': 'Premier League', 'ch': 'Championship', 'le': 'League 1', 'll': 'La Liga', 'bn': 'Bundesliga' }
        form += UI.getSelection('branchName', options, @model.PersonalInformation.branchName )
        form += UI.nl()
        form += UI.getLabel( 'gender','Gender' )
        options = { 'm': 'Male', 'f': 'Female' }
        form += UI.getRadioButton('gender', options, @model.PersonalInformation.gender )
        form += UI.nl()
        form += UI.getLabel( 'dateOfBirth','Date of Birth' )
        form += UI.getTextInput('dateOfBirth', @model.PersonalInformation.dateOfBirth)
        form += UI.nl()
        form += '</div>'
        
        form += '<div class="form-page" id="page-2">'
        form += UI.getLabel( 'maritalStatus','Marital Status' )
        options = { 's': 'Single', 'm': 'Married', 'd': 'divorced' }
        form += UI.getSelection('maritalStatus', options, @model.PersonalInformation.maritalStatus )
        form += UI.nl()
        form += UI.getLabel( 'phoneNumber','Phone Number' )
        form += UI.getTextInput('phoneNumber', @model.PersonalInformation.phoneNumber )
        form += UI.nl()
        form += UI.getLabel( 'address','Address' )
        form += UI.getTextInput('address', @model.PersonalInformation.address)
        form += UI.nl()
        form += UI.getLabel( 'town','Town' )
        form += UI.getTextInput('town', @model.PersonalInformation.town )
        form += UI.nl()
        form += UI.getLabel( 'county','County' )
        form += UI.getTextInput('county', @model.PersonalInformation.county )
        form += UI.nl()
        form += UI.getSubmit( 'Submit', 'RegistrationSubmit' )
        form += UI.nl()
        form += '</div>'
        
        form += '<div class="form-nav">'
        form += UI.getBackNext( 'Back', 'GoBack' )
        form += '<span id="page-c">Page '+@page+' out of '+@maxPage+'</span>'
        form += UI.getBackNext( 'Next', 'GoNext' )
        form += '</div>'
        form

    extractData: =>
        @model.PersonalInformation.firstName=$('#firstName').val()
        @model.PersonalInformation.middleName=$('#middleName').val()
        @model.PersonalInformation.lastName=$('#lastName').val()
        @model.PersonalInformation.branchName=$('#branchName :selected').val()
        @model.PersonalInformation.gender=$('input:radio[name=gender]:checked').val()
        @model.PersonalInformation.dateOfBirth=$('#dateOfBirth').val()
        @model.PersonalInformation.maritalStatus=$('#maritalStatus :selected').val()
        @model.PersonalInformation.phoneNumber=$('#phoneNumber').val()
        @model.PersonalInformation.address=$('#address').val()
        @model.PersonalInformation.town=$('#town').val()
        @model.PersonalInformation.county=$('#county').val()
