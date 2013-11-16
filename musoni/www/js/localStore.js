function LocalStore() {

	/*
	 * Store customer data to local file system
	 */
	this.storeCustomer = function(uid, fname, sname, formData) {

		// prepare data
		var fname = uid + "-" + fname + "-" + sname + ".json";
		var fdata = {
			"uid": uid,
			"fname": fname,
			"sname": sname,
			"formData": formData
		};

		// store file as "<uid>-<fname>-<sname>.json"
		store(fname, fdata);

	};

	/*
	 * Store group data to local file system
	 */
	this.storeGroup = function(gid, gname, formData) {

		// prepare data
		var fname = gid + "-" + gname + ".json";
		var fdata = {
			"uid": uid,
			"gname": fname,
			"formData": formData
		};

		// store file as "<gid>-<gname>.json"
		store(fname, fdata);

	};


	/*
	 * Stores a file on the local file system.
	 */
	function store(fname, fdata) {

		// load file system
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,

			// on file system success
			function(fileSys) {
				// store file as "<fname>"
				fileSys.root.getFile(fname, {create: true, exclusive: false}, 

					// creating file succeeded
					function(fileEntry) {

						//write to file
						fileEntry.createWriter(

							function(writer) {

								writer.write(fdata);

							},

							//creating writer failed
							fail							

						);					

					},

					// creating file failed
					fail

				);
			},
			// on file system fail
			fail
		);

	}

	// log error to console - TODO change to alert?
	function fail(evt) {
		alert(evt.target.error.code);
		console.log(evt.target.error.code);
	}

	this.retrieveByFname = function(fname) {

	};

	this.retrieveBySname = function(sname) {

	};

	this.retrieveByName = function(fname, sname) {

	};

	this.removeCustomer = function(fname, sname) {

	};

	this.removeGroup = function(gname) {

	};

	this.removeAll = function() {

	};

}
