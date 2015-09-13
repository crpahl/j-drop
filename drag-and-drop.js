/*
filedrag.js - HTML5 File Drag & Drop demonstration
Featured on SitePoint.com
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
Extended by Clinton Pahl
*/

//DOM ready
$(function() {

    var html = '<div class="filedrag"> \
                    <span class="status info">Drop file here</span> \
                </div> ';


    $.fn.dragAndDrop = function() {
        var dragAndDrop = this;
        var input = $(this);

        input.wrap(html);

        var container = $(this).parent();

        $(container).on('dragenter dragover', function (e) {
            $(this).addClass("hover");
        });

        $(container).on('dragleave', function (e) {
            $(this).removeClass("hover");
        });

        $(container).on('drop', function (e) {
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
            container.find('.status').removeClass("info").addClass("info-file").html(msg);
        }

        return this;
    }
});
