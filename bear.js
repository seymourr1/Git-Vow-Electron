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
    '<span class = "clearedLine" onmouseup = "highlight(event)" line-number = '+ (i+1) + '>' + (i+1) + '    ' + lines[i] +'</span>';
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
  chosenLines = [];
  var container = document.getElementById("file-content");
  var children = container.childNodes;
  for (var i = 0; i< children.length; i++){
    var node = children[i];
    debugger;
    if(node.classList.contains("highlight")){
      var lineNumber = parseInt(node.getAttribute("line-number"));
      chosenLines.push(lineNumber);
    }
  }
}

function highlight(event) {
  selected = window.getSelection().getRangeAt(0);
  var startNode = selected.startContainer.parentNode;
  var endNode = selected.endContainer.parentNode;
  var lines = document.querySelectorAll("span");
  var started = false;
  var ended = false;
  lines.forEach(function(e) {
    if (e === startNode)
      started = true;
    if (started && !ended) {
      if (event.shiftKey)
        e.classList.remove("highlight");

      else
        e.classList.add("highlight");
    }
    if (e === endNode)
      ended = true;
  });
  window.getSelection().empty();
}

function getFormattedSelection() {
  var lines = document.querySelectorAll("span");
  debugger;
  var indivLines = [];
  var linesInBetween = [];
  var startRange = 0;
  var endRange = 0;
  var arrLength = lines.length;
  var pushToSelection = function(startRange, endRange) {
    if (startRange === endRange)
      indivLines.push(startRange);
    else
      linesInBetween.push(startRange + "-" + endRange);
  }
  lines.forEach(function(e, index, arr) {
    if (e.classList.contains("highlight")) {
      if (startRange === 0) {
        startRange = index + 1;
        endRange = index + 1;
      } else
        endRange = index + 1;

      if (index === arrLength - 1) {
        endRange = index + 1;
        pushToSelection(startRange, endRange);
      }
    } else {
      if (startRange !== 0) {
        pushToSelection(startRange, endRange);
      }
      startRange = 0;
    }
  });
  return {
    "lines": indivLines,
    "linesInBetween": linesInBetween
  };
}

$( "#python" ).click(function() {
  alert( "Handler for .click() called." );
});

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
