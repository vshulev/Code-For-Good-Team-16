class Model
    submit: ->
        # check if the connection is available
        # if it us, use that
        # otherwise, worth offline
        #navigator.network.isReachable("phonegap.com", @reachableCallback, {})

    reachableCallback: (reachability) =>
        if reachability == NetworkStatus.NOT_REACHABLE
            # store offline
            storeObj = @getStoreObject()
            storeObj.formData = new Encryptor().encrypt( storeObj.formData )
            @storeLocally( storeObj )
        else
            # story online

    getStoreObject: ->
        throw "Not implemented (abstract class)"

    getStoreObject: ->
        throw "Not implemented (abstract class)"

    storeLocally: ->
        throw "Not implemented (abstract class)"
