function createClientFields(){
	clientObject = {"Client Information" = 
	{"LoanOfficer" : "",
	 "BranchName" : "",
	 "GroupName" : ""},
	 
	 "PersonalInformation":  
	 {"firstName" : "", 
	 "middleName" : "", 
	 "lastName" : "", 
	 "dateOfBirth" : "", 
	 "gender" : "",
	 "maritalStatus" : "", 
	 "phoneNumber" : "", 
	 "address" : "", 
	 "town" : "", 
	 "county" : ""},
	 
	 "Client Identfication":
	 {"documentType" : "",
	 "uniqueIDNumber" : 0,
	 "desription" : "",
	 "M-PESANumber"}, 
	 
	 "BusinessDetails" : 
	 {"businessName", 
	 "businessType", 
	 "startDate", 
	 "address", 
	 "postalCode"}, 
	 
	 "nextOfKin" :
	 {"relationToClient" : "", 
	 "Name" : "",
	 "dateOfBirth" :  "",
	 "Address" : "", 
	 "City" : "", 
	 "phoneNumber"},
	 
	 "certifyIfAccurate" :
	 {"isAccurate" : "",
	 "date" : ""},
	 
	 "approveClient":
	 {"loanOfficerName" : "",
	 "branchManagerName" : "",
	 "date" : "",
	 "verifyTickBox"};
    }	 
}


function createGroupFields(){
	groupObject = {"GroupInformation" : 
	{"groupName" : "",
	 "branchName" : ""
	 "loanOfficer" : "", 
	 "registrationNumber" : "",
	 "meetingLocation" : "", 
	 "meetingDay" : "", 
	 "meetingFrequency"}
	 
	 "groupMembers" : {}
    }	
}

	



function populateClientFields(){
	
	
	
	
	
}

function populateGroupFields(){
	
	
	
}











function createClientTable(){
	POST https://DomainName/api/v1/datatables Content-Type: application/json 
	Request Body: 
	{ "datatableName": "client_details", 
		"apptableName": "m_client", 
		"columns": [ 
		   { "name": "firstName", 
			 "type": "String"},
		
		 	{"name": "middleName", 
		  	 "type": "String"}, 
	
		   { "name": "lastName",
			 "type": "String" }, 
			 
           { "name": "dateOfBirth", 
    	     "type": "String"},
		
           { "name": "gender", 
        	 "type": "String"},
			 
  		   { "name": "maritalStatus", 
  			 "type": "String"},
		
  		   {"name": "phoneNumber", 
  		  	 "type": "String"}, 
	
  		   { "name": "address",
  			 "type": "String" },
			 
  		   { "name": "town", 
  			 "type": "String"},
		
  		   {"name": "county", 
  		  	 "type": "String"}, 
	
  		   { "name": "documentType",
  			 "type": "String" },
			 
    	   { "name": "uniqueIDNumber", 
    		 "type": "String"},
		
    	   {"name": "description", 
    		"type": "String"}, 
	
    	   { "name": "MPesaNumber",
    		 "type": "String" },
	
	 
    	   {"name": "businessName", 
    		  	 "type": "String"}, 
	
    	   { "name": "businessType",
    			 "type": "String" },
			 
    	   { "name": "startDate", 
    	     "type": "String"},
		
    	   {"name": "addressOfBusiness", 
    		"type": "String"}, 
	
    	   { "name": "pCodeOfBusiness",
    	     "type": "String" },
			 
      	   { "name": "relationToClient", 
      		 "type": "String"},
			 
           { "name": "nameOfRelation", 
        	 "type": "String"},
		
      	   { "name": "dateOfBirth", 
      		 "type": "String"}, 
	
      	   { "name": "addressOfRelation",
      		 "type": "String" },
			 
           { "name": "cityOfRelation", 
      		 "type": "String"}, 
	
           { "name": "phoneOfRelation",
             "type": "Number" },  

	  	} 
	  ] 
  }	
}