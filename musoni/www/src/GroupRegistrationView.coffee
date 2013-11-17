class GroupRegistrationView
	constructor: (@group) ->
		@group = {}
		window.groupRegistrationSubmit = => @submission()

		@page = 1
		@maxPage = 2
		window.GoNext = =>
			if @page < @maxPage
				$('.form-page').hide()
				@page += 1
				$('#page-'+@page).show()
			if @page == @maxPage
				$('#Next').attr('disabled','disabled');
			$('#Back').removeAttr('disabled');
			
		window.GoBack = =>
			if @page > 1
				$('.form-page').hide()
				@page -= 1
				$('#page-'+@page).show()
			if @page == 1
				$('#Back').attr('disabled','disabled');
			$('#Next').removeAttr('disabled');
			
	submission: ->
		@extractData()
		@group.submit()
	
	render: =>
		form = '<div class="form-page" id="page-1">'
		form += UI.getLabel( 'groupName','Group Name' )
		form += UI.getTextInput('groupName', @group.groupName )
		form += UI.nl()
		form += UI.getLabel( 'branchName','Branch' )
		options = { 'ho': 'Head Office', 'pl': 'Premier League', 'ch': 'Championship', 'le': 'League 1', 'll': 'La Liga', 'bn': 'Bundesliga' }
		form += UI.getSelection('branchName', options, @group.branchName )
		form += UI.nl()
		form += UI.getLabel( 'loanOfficer','Loan Officer' )
		options = { }
		form += UI.getSelection('loanOfficer', options, @group.loanOfficer )
		form += UI.nl()
		form += UI.getLabel( 'registrationNumber','Registration Number' )
		form += UI.getTextInput('registrationNumber', @group.registrationNumber)
		form += UI.nl()
		form += '</div>'
		
		form += '<div class="form-page" id="page-2">'
		form += UI.getLabel( 'meetingLocation','Meeting Location' )
		form += UI.getTextInput('meetingLocation', @group.meetingLocation )
		form += UI.nl()
		form += UI.getLabel( 'meetingDays','Meeting Days' )
		options = { 'mo': 'Monday', 'tu': 'Tuesday', 'we': 'Wednesday', 'th': 'Thursday', 'fr': 'Friday', 'sa': 'Saturday', 'su': 'Sunday' }
		form += UI.getSelection('meetingDays', options, @group.meetingDays )
		form += UI.getLabel( 'meetingFrequency','Meeting Frequency' )
		options = { 'w': 'Weekly', 'f': 'Fortnightly', 'm': 'Monthly'}
		form += UI.getSelection('meetingFrequency', options, @group.meetingFrequency )
		form += UI.nl()
		form += UI.getSubmit( 'Submit', 'groupRegistrationSubmit' )
		form += UI.nl()
		form += '</div>'
		form += UI.getBackNext( 'Next', 'GoNext' )
		form += UI.nl()	
		form += UI.getBackNext( 'Back', 'GoBack' )
		form


	extractData: ->
		@group.GroupInformation.groupName=$('#groupName').val()
		@group.GroupInformation.branchName=$('#branchName :selected').val()
		@group.GroupInformation.loanOfficer=$('#loanOfficer :selected').val()
		@group.GroupInformation.registrationNumber=$('#registrationNumber').val()
		@group.GroupInformation.meetingLocation=$('#meetingLocation').val()
		@group.GroupInformation.meetingDays=$('#meetingDays :selected').val()	
		@group.GroupInformation.meetingFrequency=$('#meetingFrequency :selected').val()	

		
