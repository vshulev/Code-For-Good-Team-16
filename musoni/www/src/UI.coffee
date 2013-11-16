class UI
	@getTextInput: (name, value) ->
		"<input type='text' name='#{name}' id='#{name}' value='#{value}' />"
	
	@getRadioButton: (name, options, selected) ->
		_(_(options).map( (value, display) ->
				selected = if value == selected then "checked" else ""
				"<input type='radio' name='#{name}' id='#{name}_#{value}' value='#{value}' #{selected}/>" + UI.getLabel( name+'_'+value, display )
			)).join( '' )
		
	@getSelection: (name, options) ->
		ret = "<select id='#{name}' name='#{name}'>"
		ret += _(_(options).each( (value, display) ->
				selected = if value == selected then "selected" else ""
				"<option id='#{name}_#{value}' value='#{value}' #{selected}>#{display}</option>"
			)).join( '' )
		ret += "</select>"
		ret
			
			
	@getLabel: (id, display) ->
		"<label for='#{id}'>#{display}</label>"
		
	@nl: ->
		'<br/>'