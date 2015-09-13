# j-drop

A simple HTML5 file drag and drop plugin. Creates a drag and drop area around a file input:

    <input id="file-drop" type="file" name="imageUpload" />

A drag and drop area can be initialized with the following invocation:

    $("#file-drop").dragAndDrop();

If you need to access the file you can do it through the public accessor:

    var dragAndDrop = $("#file-drop").dragAndDrop();
    ...
    dragAndDrop.dropFile;
