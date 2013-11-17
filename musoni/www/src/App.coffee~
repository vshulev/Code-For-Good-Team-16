# main application entry point
class App
	constructor: ->
		@mainRegion = $('#main-region')
		$('#back-region button').click()
		@statusStack = []
		@currentModel = null
		@show( new OptionsView() )

	show: (view) ->
		@mainRegion.html( view.render() )
		@statusStack.push(view);

	customerForm: ->
		@currentModel = new ClientModel()
		@show( new ClientRegistrationView() )

	groupForm: ->
		@currentModel = new GroupModel()
		@show( new GuestFormView() )

	back: ->
		@statusStack.pop();
		@show( @statusStack[@statusStack.length - 1].render() )

$(document).ready( ->
	window.app = new App()
)
