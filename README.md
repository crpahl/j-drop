# j-drop

A simple HTML5 file drag and drop plugin. A drag and drop area can be initialized with the following invocation:

	$("selector").dragAndDrop("name");

Where name is the name that you would like to use for the created file input field and selector applies to some element inside a form. A drag and drop area will hold a single file, and any additional dropped files will simply over write the previously dropped file. 

Files can then be submitted through ajax by creating a new FormData object as seen in the following example:

	$("#myForm").on('submit', function(e) {
		  formData = new FormData(this);

		  // append dropped files to form data
		  for(var key in $(this).data()) {
		    formData.append(key, $(this).data(key));
		  }

		  $.ajax({
		    url: $(this).attr('action'),
		    type: $(this).attr('method'),
		    data: formData,
		    processData: false,
		    contentType: false,
		    success: function(data, textStatus, jqXHR) {
			// successful upload
		    },
		    error: function(jqXHR, textStatus, error) {
			// some error
		    }
		  });
	});
