class ClientModel extends Model
    constructor: ({@ClientInformation, @PersonalInformation, @ClientIdentification, @BusinessDetails, @nextOfKin, @certifyIfAccurate, @approveClient}) ->
        _.defaults(this, {
            ClientInformation: {}
            PersonalInformation: {}
            ClientIdentification: {}
            BusinessDetails: {}
            nextOfKin: {}
            certifyIfAccurate: {}
            approveClient: {}
        }
        

	_.defaults( @ClientInformation, {
            "LoanOfficer" : "",
	    "BranchName" : "",
             "GroupName" : ""
        } )
	 
        _.defaults( @PersonalInformation, {
	    "firstName" : "",
            "middleName" : "",
	    "lastName" : "",
	    "dateOfBirth" : "",
            "gender" : "",
            "maritalStatus" : "",
	    "phoneNumber" : "",
	    "address" : "",
	    "town" : "",
	    "county" : ""
        } )
	 
        _.defaults( @ClientIdentification, {
	    "documentType" : "",
	    "uniqueIDNumber" : 0,
	    "desription" : "",
            "M-PESANumber": ""
        } )
	 
        _.defaults( @BusinessDetails, {
            "businessName": ""
            "businessType": ""
            "startDate": ""
            "address": ""
            "postalCode": ""
        } )
	 
        _.defaults( @nextOfKin, {
            "relationToClient" : "",
            "Name" : "",
	    "dateOfBirth" :  "",
	    "Address" : "",
	    "City" : "",
	    "phoneNumber": ""
        } )
	 
        _.defaults( @certifyIfAccurate, {
	 "certifyIfAccurate" :
	    "isAccurate" : "",
             "date" : ""
        } )
	 
        _.defaults( @approveClient, {
	    "loanOfficerName" : "",
	    "branchManagerName" : "",
	    "date" : "",
	    "verifyTickBox"
        } )
