function createClientFields(){
	clientObject = {"Client Information" :
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
	
    	   { "name": "businessName", 
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
			 	 	 
           { "name": "certifyTickBox", 
        	 "type": "String"},
			 
           { "name": "certifyForm", 
          	 "type": "String"},
		
           { "name": "dateOfCertify", 
             "type": "Date"}, 
	
           { "name": "approvalOfficerName",
         	 "type": "String" },
			 
           { "name": "approvalManagerName", 
             "type": "String"}, 
	
           { "name": "dateOfApproval ",
             "type": "Number" }, 
			 
           { "name": "approvalTickBox ",
             "type": "Number" }, 

	  	} 
	  ] 
  }	
  
  
function createGroupTable(){
  POST https://DomainName/api/v1/datatables Content-Type: application/json 
  Request Body: 
  { "datatableName": "group_details", 
  	"apptableName": "m_client", 
  	"columns": [ 
  		   { "name": "groupName", 
  			 "type": "String"},
		
  		 	{"name": "branchName", 
  		  	 "type": "String"}, 
	
  		   { "name": "loanOfficer",
  			 "type": "String" }, 
			 
             { "name": "registrationNumber", 
      	     "type": "Number"},
		
             { "name": "meetingLocation", 
          	 "type": "String"},
			 
    		 { "name": "meetingDay", 
    		   "type": "String"},
		
    	     {"name": "meetingFrequency", 
    		  "type": "String"},   
			  
     	     {"name": "groupMembers", 
     		  "type": "String"}, 
  	  	} 
  	] 
}


function remoteStorageClient(JSON clientObject){
	PUT https://DomainName/api/v1/datatables/group_details
	Content-Type: application/json 
	Request Body:
	{
		"apptableName" : "m_client",
		"addColumns" : [
			{
				"firstName" : clientObject.name
				"middleName" : clientObject.middleName
				"lastName" : clientObject.lastName
				"dateOfBirth" : clientObject.dateOfBirth
				"gender" : clientObject.gender
				"maritalStatus" : clientObject.maritalStatus
				"phoneNumber" : clientObject.phoneNumber
				"address" : clientObject.address
				"town" : clientObject.town
				"county" : clientObject.county
				"documentType" : clientObject.documentType
				"uniqueIDNumber" : clientObject.uniqueIDNumber
				"description" : clientObject.description
				"MPesaNumber" : clientObject.mPesaNumber			
		}
	]
		
		
		
		
		
		
		
		
	}
	
	
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}