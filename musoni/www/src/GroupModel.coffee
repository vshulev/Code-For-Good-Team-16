class GroupModel extends Model
    constructor: ( {@GroupInformation, @groupMembers} ) ->
        _.defaults( @GroupInformation, {
	    "groupName" : "",
	    "branchName" : ""
	    "loanOfficer" : "",
	    "registrationNumber" : "",
	    "meetingLocation" : "",
	    "meetingDay" : "",
	    "meetingFrequency"
        }
	 
        @groupMembers ?= []
