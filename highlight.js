var firstLine;
var secondLine;
var singleLines;

function selectTextareaLine() {
  var container = document.getElementById("file-content");
  var children = container.childNodes;
  debugger;
  getLines();
  for (var i = firstLine; i <= secondLine; i++) {
    var node = children[i];
    node.classList.remove("highlight");
    highlightSingleLine(node);
    debugger;
  }
  for(var i = 0; i < singleLines.length; i++) {
    var val = singleLines[i];
    debugger;
    highlightSingleLine(children[val]);
  }
}

function getLines(){ //Make sure to account for prefilled
  firstLine = document.getElementById("firstLine").value;
  firstLine = parseInt(firstLine) - 1;
  secondLine = document.getElementById("lastLine").value;
  secondLine = parseInt(secondLine) - 1;
  singleLines = document.getElementById("singleLine").value.split(",").map(Number);
  for (var i = 0; i < singleLines.length; i++) {
    singleLines[i] = parseInt(singleLines[i]) - 1;
  }
}

function highlightSingleLine(line) {
  line.classList.add("highlight");
  line.classList.remove("clearedLine");
}


// function highlightSingleLine(line, arg) {
//   if(arg == "new"){
//     if(line.classList == "clearedLine") {
//       line.classList.add("highlight");
//       line.classList.toggle("clearedLine");
//     }
//     else {
//       line.classList.toggle("highlight");
//     }
//   }
//   else {
//     line.classList.toggle("highlight");
//   }
// }


// function selectTextareaLine(){
//   getLines();
//
//   if(firstLine == undefined || secondLine == undefined){
//     return 0;
//   }
//   var tarea = document.getElementById('file-content').innerText;
//   tarea = escapeHtml(tarea);
//   var lines = tarea.split("\n");
//   if (lines != undefined && tarea != undefined){
//     for (var i = 0; i < lines.length; i++){
//       if (singleLines.includes(i)) {
//         document.getElementById('line-container').innerHTML +=
//         '<pre class = "highlight" line-number = '+ (i+1) +'>' + '    ' + lines[i] +'</span>';
//       }
//       else if(i >= firstLine && i <= secondLine){
//         document.getElementById('line-container').innerHTML +=
//         '<pre class = "highlight" line-number = '+ (i+1) +'>' + '    ' + lines[i] +'</span>';
//       }
//       else{
//         document.getElementById('line-container').innerHTML +=
//         '<pre class = "clearedLine" line-number = '+ i+1 +'>' + '    ' + lines[i] +'</pre>';
//       }
//     }
//   }
//   else {
//     return;
//   }
//   document.getElementById('file-content').style.display = 'none';
// }
