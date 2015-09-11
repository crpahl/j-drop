# j-drop

A simple HTML5 file drag and drop plugin. First, wrap your file input in a container. For example

     <div id="file-drop">
         <input type="file" name="imageUpload" />
     </div>

A drag and drop area can be initialized with the following invocation:

    $("file-drop").dragAndDrop();

If you need to access the file you can do it through the public accessor:

    var dragAndDrop = $("file-drop").dragAndDrop();
    ...
    dragAndDrop.dropFile;
