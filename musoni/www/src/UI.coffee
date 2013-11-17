class UI
	@getTextInput: (name, value) ->
		value ?= ''
		"<input type='text' name='#{name}' id='#{name}' value='#{value}' />"
	
	@getRadioButton: (name, options, checked) ->
		_(_(options).map( (display, value) ->
				selected = if value == checked then "checked" else ""
				value ?= ''
				"<input type='radio' name='#{name}' id='#{name}_#{value}' value='#{value}' #{selected}/>" + UI.getLabel( name+'_'+value, display, 'radio' )
			)).join( '' )
		
	@getSelection: (name, options, selected) ->
		ret = "<select id='#{name}' name='#{name}'>"
		ret += _(_(options).map( (display, value) ->
				selected = if value == selected then "selected" else ""
				value ?= ''
				"<option id='#{name}_#{value}' value='#{value}' #{selected}>#{display}</option>"
			)).join( '' )
		ret += "</select>"
		ret
			
			
	@getLabel: (id, display, classname='') ->
		"<label for='#{id}' class='#{classname}'>#{display}</label>"

	@getSubmit: (name, functionName) ->
		"<input type='submit' value='" + name + "' onclick='" + functionName + "()' />"
		
	@getBackNext: (name, functionName) ->
		disabled = if name == 'Back' then 'disabled' else ''
		"<input type='button' id='" + name + "' value='" + name + "' onclick='" + functionName + "()' " + disabled + " />"
		
	@nl: ->
		'<br/>'
