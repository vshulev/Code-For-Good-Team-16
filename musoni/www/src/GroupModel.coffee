class GroupModel extends Model
    constructor: ( {@GroupInformation} = {} ) ->
        _.defaults(this, {
            GroupInformation: {}
        } )

        _.defaults( @GroupInformation, {
            "officeId": 0,
            "groupId": 0,
            "groupName" : "",
            "branchName" : ""
            "loanOfficer" : "",
            "registrationNumber" : "",
            "meetingLocation" : "",
            "meetingDay" : "",
            "meetingFrequency" : "",
            "locale" : "en",
            "active" : false,
            "activationDate" : "",
            "dateFormat" : "dd MMMM YYYY",
            "clientMembers": []
        } )

    getDataObject: ->
        @GroupInformation

    getStoreObject: ->
        gid: @GroupInformation.groupId
        gname: @GroupInformation.groupName
        formData: @getDataObject()

    storeLocally: (obj) ->
        new LocalStore().storeGroup( obj.gid, obj.gname, obj.formData )
