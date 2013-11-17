class Model
    submit: ->
        # check if the connection is available
        # if it us, use that
        # otherwise, worth offline
        navigator.network.isReachable("phonegap.com", @reachableCallback, {})

    reachableCallback: (reachability) =>
        if reachability == NetworkStatus.NOT_REACHABLE
            # store offline
        else
            # story online

