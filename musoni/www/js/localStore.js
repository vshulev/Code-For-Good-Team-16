/*
 * For simplicity, assuming that no two customers have the same name
 * and no two groups have the same name.
 */

function LocalStore() {

	/*
	 * Store customer data to local file system
	 */
	this.storeCustomer = function(uid, fname, sname, formData) {

		// prepare data
		var fname = fname + "-" + sname + ".json";
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
		var fname = gname + ".json";
		var fdata = {
			"gid": gid,
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

	this.retrieveCustomerByName = function(fname, sname, callback) {

		// generate filename
		var filename = fname + "-" + sname + ".json";

		// retrieve file
		retrieve(filename, callback);

	};

	this.retrieveGroupByName = function(gname, callback) {

		// generate filename
		var fname = gname + ".json";

		// retrieve file
		retrieve(fname, callback);

	};

	/*
	 * Retrieve a file entry from local storage by providing filename.
	 * Returns a FileEntry object.
	 */
	function retrieveFileEntry(fname, callback) {
		// load file system
		window.retrieveFileSystem(LocalFileSystem.PERSISTENT, 0,

			// on file system success
			function(fileSys) { 
				fileSys.root.getFile(fname, null,
			
					// retrieving file entry succeeded
					callback(fileEntry),

					// retrieving file entry failed
					fail

				);
			},

			// on file system fail
			fail

		);
	}

	/*
	 * Retrieve file from local storage by providing filename.
	 * Returns file object.
	 */
	function retrieve(fname, callback) {

		retrieveFileEntry(fname, function(fileEntry) {

			fileEntry.file(
				// retrieving file succeeded
				callback(file),

				// retrieving file failed
				fail
			);			

		});

	}

	/*
	 * Removes local customer file given customer's firstname and surname.
	 * Invokes callback function on success.
	 */
	this.removeCustomer = function(fname, sname, callback) {
		removeFile(fname + "-" + sname + ".json", callback);
	};

	/*
	 * Removes local group file given group's name.
	 * Invokes callback function on success.
	 */
	this.removeGroup = function(gname, callback) {
		removeFile(gname + "-" + gname + ".json");
	};

	/*
	 * Removes a file given its filename.
	 * Invokes callback function on success.
	 */
	function removeFile(fname, callback) {

		retrieveFileEntry(fname, function(fileEntry){
			fileEntry.remove(callback, fail);
		});

	}

	/*
	 * Outputs error code
	 */
	// log error to console - TODO remove logging?
	function fail(evt) {
		alert(evt.target.error.code);
		console.log(evt.target.error.code);
	}

}
