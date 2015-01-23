/*
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
Extended by Clinton Pahl
*/

(function(dragAndDrop) {

  dragAndDrop(window.jQuery, window, document);

  }(function($, window, document) {
    var html = '<div class="filedrag"> \
                  <div class="hidden"> \
                    <label for="fileselect">File to upload:</label> \
                    <input type="file" class="fileselect"/> \
                  </div> \
                  <span>Drop file here</span> \
                </div> \
                <div class="messages hidden"></div>';

    $(function() {

      $.fn.dragAndDrop = function(inputName) {
        var self = this;
        var form = this.closest('form');

        this.html(html);
        this.addClass('drag-and-drop');
        this.name = inputName;

        this.find('.filedrag').on('dragenter dragover', function(e) {
          $(this).addClass("hover");

          return false;
        });

        this.find('.filedrag').on('dragleave', function(e) {
          $(this).removeClass("hover");

          return false;
        });

        this.find('.filedrag').on('drop', function(e) {
          var fileselect = self.find('.fileselect');
          var files;

          $(this).removeClass("hover");

          files = e.originalEvent.dataTransfer.files;
          parseFile(files[0]);

          form.data(self.name, files[0]);

          return false;
        });

        // output file information
        function parseFile(file) {
          output(
            "<p>File information: <strong>" + file.name +
            "</strong> type: <strong>" + file.type +
            "</strong> size: <strong>" + file.size +
            "</strong> bytes</p>"
          );
        }

        // output information
        function output(msg) {
          self.find('.messages').show().html(msg);
        }

        return this;
      };
    });
  }
));
