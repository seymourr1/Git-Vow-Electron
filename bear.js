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
    // '<pre class = "clearedLine" onmousedown = "storeNumber(this)" onmouseup = "storeSecondNumber(this)" line-number = '+ (i+1) +'>' + (i+1) + '    ' + lines[i] +'</pre>';
    '<pre class = "clearedLine" line-number = '+ (i+1) +'>' + (i+1) + '    ' + lines[i] +'</pre>';
  }
  //element.textContent = contents;
}
document.addEventListener("selectionchange", storeNumber(this));

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

function storeNumber(line) {
  debugger;
  chosenLines.push(line.getAttribute("line-number"));
  chosenLines = chosenLines.map(Number);
  // debugger;
}

// function storeSecondNumber(line) {
//   chosenLines.push(line.getAttribute("line-number"));
//   chosenLines = chosenLines.map(Number);
//   if(chosenLines[chosenLines.length - 1] != chosenLines[chosenLines.length]) {
//     for (var i = 0; i < abs(chosenLines[chosenLines.length]-chosenLines[chosenLines.length - 1])){
//       chosenLines.plice()
//     }
//   }
// }

// document.getElementById('file-input').addEventListener('change',
//   function () {
//     var fr = new FileReader();
//     fr.onload = function () {
//       document.getElementById('file-content').textContent = this.result;
//     };
//     fr.readAsText(this.files[0]);
//   }
//   );

// HELLO
