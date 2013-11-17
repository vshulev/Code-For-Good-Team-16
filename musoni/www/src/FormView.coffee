class FormView
    constructor: (@model) ->
            window.RegistrationSubmit = => @submission()
            
            window.GoNext = =>
                    if @page < @maxPage
                            $('.form-page').hide()
                            @page += 1
                            $('#page-'+@page).show()
                    if @page == @maxPage
                            $('#Next').attr('disabled','disabled')
                    $('#Back').removeAttr('disabled')
                    $('#page-c').html( 'Page '+@page+' out of '+@maxPage )
                    
            window.GoBack = =>
                    if @page > 1
                            $('.form-page').hide()
                            @page -= 1
                            $('#page-'+@page).show()
                    if @page == 1
                            $('#Back').attr('disabled','disabled')
                    $('#Next').removeAttr('disabled')
                    $('#page-c').html( 'Page '+@page+' out of '+@maxPage )
    
    submission: ->
            @extractData()
            @model.submit()

    render: ->
            throw "Not implemented (abstract class)"

    extractData: ->
            throw "Not implemented (abstract class)"
