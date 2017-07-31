var PythonShell = require('python-shell');

PythonShell.run('hello.py', function (err, result) {
  if (err) throw err;
  console.log(result);
});
