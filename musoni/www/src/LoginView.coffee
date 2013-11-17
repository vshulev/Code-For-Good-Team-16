class LoginView

	constructor: ->
		window.userLogin = => @login()

	render: ->
		form = '<div class="form-page" id="page-1">'
		form += UI.getLabel( 'username','Username' )
		form += UI.getTextInput('password', null )
		form += UI.nl()
		form += UI.getLabel( 'password','Password' )
		form += UI.getPasswordInput('password', null )
		form += UI.nl()
		form += UI.getSubmit( 'Log In', 'userLogin' )
		form += UI.nl()
		form += '</div>'
		form

	login: ->
		window.app.optionsView()
	


