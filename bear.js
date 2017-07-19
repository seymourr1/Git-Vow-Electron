function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.textContent = contents;
}

var el = document.getElementById('file-input');
if(el){
  el.addEventListener('change', readSingleFile, false);
}

document.getElementById('file-input').addEventListener('change',
  function () {
    var fr = new FileReader();
    fr.onload = function () {
      document.getElementById('file-content').textContent = this.result;
    };
    fr.readAsText(this.files[0]);
  }
  );
// HELLO 