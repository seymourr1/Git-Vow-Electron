function selectTextareaLine(startLine, endLine){
    var tarea = document.getElementById('file-content').innerText   ;
    var lines = tarea.split("\n");
    for (var i = 1; i <= lines.length; i++){
        if(i >= startLine && i <= endLine){
            document.getElementById('line-container').innerHTML += '<pre class = "highlight">' + i + '    ' + lines[i] + '</span>';
        }
        else{
            document.getElementById('line-container').innerHTML += '<pre class = "clearedLine">' + i + '    ' + lines[i] + '</pre>';
        }
    }
    document.getElementById('file-content').remove();
}