# main application entry point
class App
    constructor: ->
        @mainRegion = $('#main-region')
        @show( new OptionsView() )
    
    show: (view) ->
        @mainRegion.html( view.render() )

$(document).ready( ->
    document.app = new App()
)
