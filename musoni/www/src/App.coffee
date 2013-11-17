# main application entry point
class App
	constructor: ->
		@mainRegion = $('#main-region')
		$('#back-region button').click()
		@statusStack = []
		@show( new OptionsView() )

	show: (view) ->
		@mainRegion.html( view.render() )
		@statusStack.push(view)

	customerForm: ->
		@show( new ClientRegistrationView( new ClientModel() ) )

	groupForm: ->
		@show( new GroupRegistrationView( new GroupModel() ) )

	back: ->
		@statusStack.pop()
		@show( @statusStack[@statusStack.length - 1].render() )

$(document).ready( ->
	window.app = new App()
)
