class GroupRegistrationView extends FormView
    constructor: (@model) ->
        @page = 1
        @maxPage = 2
        super @model
    
    render: ->
        form = '<div class="form-page" id="page-1">'
        form += UI.getLabel( 'groupName','Group Name' )
        form += UI.getTextInput('groupName', @model.groupName )
        form += UI.nl()
        form += UI.getLabel( 'branchName','Branch' )
        options = { 'ho': 'Head Office', 'pl': 'Premier League', 'ch': 'Championship', 'le': 'League 1', 'll': 'La Liga', 'bn': 'Bundesliga' }
        form += UI.getSelection('branchName', options, @model.branchName )
        form += UI.nl()
        form += UI.getLabel( 'loanOfficer','Loan Officer' )
        options = { }
        form += UI.getSelection('loanOfficer', options, @model.loanOfficer )
        form += UI.nl()
        form += UI.getLabel( 'registrationNumber','Registration Number' )
        form += UI.getTextInput('registrationNumber', @model.registrationNumber)
        form += UI.nl()
        form += '</div>'
        
        form += '<div class="form-page" id="page-2">'
        form += UI.getLabel( 'meetingLocation','Meeting Location' )
        form += UI.getTextInput('meetingLocation', @model.meetingLocation )
        form += UI.nl()
        form += UI.getLabel( 'meetingDays','Meeting Days' )
        options = { 'mo': 'Monday', 'tu': 'Tuesday', 'we': 'Wednesday', 'th': 'Thursday', 'fr': 'Friday', 'sa': 'Saturday', 'su': 'Sunday' }
        form += UI.getSelection('meetingDays', options, @model.meetingDays )
        form += UI.getLabel( 'meetingFrequency','Meeting Frequency' )
        options = { 'w': 'Weekly', 'f': 'Fortnightly', 'm': 'Monthly'}
        form += UI.getSelection('meetingFrequency', options, @model.meetingFrequency )
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


    extractData: ->
        @model.GroupInformation.groupName=$('#groupName').val()
        @model.GroupInformation.branchName=$('#branchName :selected').val()
        @model.GroupInformation.loanOfficer=$('#loanOfficer :selected').val()
        @model.GroupInformation.registrationNumber=$('#registrationNumber').val()
        @model.GroupInformation.meetingLocation=$('#meetingLocation').val()
        @model.GroupInformation.meetingDays=$('#meetingDays :selected').val()
        @model.GroupInformation.meetingFrequency=$('#meetingFrequency :selected').val()

        
