# main application entry point
class App
	constructor: ->
		@mainRegion = $('#main-region')
		@statusStack = []
		@currentModel = null
		@show( new OptionsView() )

	show: (view) ->
		@mainRegion.html( view.render() )
		@statusStack.push(view);

	customerForm: ->
		@currentModel = new FormModel()
		@show( new CustomerFormView() )

	groupForm: ->
		@currentModel = new FormModel()
		@show( new GuestFormView() )

	submit: ->
		if @currentModel != null
			currentModel.submit()

	back: ->
		@statusStack.pop();
		@show( @statusStack[@statusStack.length - 1].render() )

$(document).ready( ->
	document.app = new App()
)
