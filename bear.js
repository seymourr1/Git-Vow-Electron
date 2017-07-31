var chosenLines = [];


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
  var display = document.getElementById('line-container');
  display.innerHTML = "";
  element = document.getElementById('file-content');
  element.innerHTML = "";
  element.style.display = 'block';
  contents = escapeHtml(contents);
  lines = contents.split("\n");
  for (var i = 0; i < lines.length; i++) {
    element.innerHTML +=
    '<pre class = "clearedLine" line-number = '+ (i+1) +'>' + (i+1) + '    ' + lines[i] +'</pre>';
  }
}

var el = document.getElementById('file-input');
if(el){
  el.addEventListener('change', readSingleFile, false);
}

function escapeHtml(unsafe) {
  return unsafe
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");
}

function displayArray() {
  var container = document.getElementById("file-content");
  var children = container.childNodes;
  for (var i = 0; i< children.length; i++){
    var node = children[i];
    if(node.classList.contains("highlight")){
      var lineNumber = parseInt(node.getAttribute("line-number"));
      chosenLines.push(lineNumber);
    }
  }
}

// function storeNumber(line) {
//   // debugger;
//
//   var lineNumber = parseInt(line.getAttribute("line-number"));
//   if(chosenLines.contains(lineNumber) == true) {
//     var index = chosenLines.indexOf(lineNumber);
//     delete chosenLines[index];
//     highlightSingleLine(line);
//     debugger;
//   }
//   else {
//     chosenLines.push(lineNumber);
//     chosenLines = chosenLines.map(Number);
//     highlightSingleLine(line);
//   }
//   // debugger;
// }
//
// Array.prototype.contains = function(obj) {
//   var i = this.length;
//   while (i--) {
//     if (this[i] == obj) {
//       return true;
//     }
//   }
//   return false;
// }
