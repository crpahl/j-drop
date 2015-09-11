/*
filedrag.js - HTML5 File Drag & Drop demonstration
Featured on SitePoint.com
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
Extended by Clinton Pahl
*/

//DOM ready
$(function() {
    var html = '<div class="filedrag"> \
                  <span id="fileInput"></span> \
                  <span class="status info">Drop file here</span> \
                </div> \
                <div class="messages hidden"></div>';


    $.fn.dragAndDrop = function() {
        // publicly accesible dropped file
        var dragAndDrop = this;
        var self = $(this);
        var input = $(this).find('input');

        input.wrap(html);

        $(this).addClass('drag-and-drop');

        $(this).find('.filedrag').on('dragenter dragover', function (e) {
            $(this).addClass("hover");
        });

        $(this).find('.filedrag').on('dragleave', function (e) {
            $(this).removeClass("hover");
        });

        $(this).find('.filedrag').on('drop', function (e) {
            var fileselect = self.find('.fileselect');
            var files;

            $(this).removeClass("hover");

            files = e.originalEvent.dataTransfer.files;
            dragAndDrop.dropFile = files[0];
            parseFile(dragAndDrop.dropFile);
        });

        // output file information
        function parseFile(file) {
            output(
                "<p>File: <strong>" + file.name +
                "</strong> Type: <strong>" + file.type +
                "</strong> Size: <strong>" + file.size +
                "</strong> bytes</p>"
            );
        }

        // output information
        function output(msg) {
            self.find('.status').removeClass("info").addClass("info-file").html(msg);
        }

        return this;
    }
});
