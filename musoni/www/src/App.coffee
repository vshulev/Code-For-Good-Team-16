# main application entry point
class App
	constructor: ->
		@mainRegion = $('#main-region')
		$('#back-region button').click()
		@statusStack = []
		@show( new LoginView() )

	show: (view) ->
		@mainRegion.html( view.render() )
		@statusStack.push(view)

	optionsView: ->
		@show( new OptionsView() )

	customerForm: ->
		@show( new ClientRegistrationView( new ClientModel() ) )

	groupForm: ->
		@show( new GroupRegistrationView( new GroupModel() ) )

	back: ->
		if @statusStack.length > 1
			@statusStack.pop()
			@show( @statusStack[@statusStack.length - 1] )

$(document).ready( ->
    window.app = new App()
)
