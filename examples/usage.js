// load nsh
var nsh      =  require('node-syntaxhighlighter')
  , language =  require('./lib/shBrushJsx'); // usually load a bruns from nsh like : nsh.getLanguage('js')

var code = require('fs').readFileSync('./example.jsx', 'utf-8');
var result = nsh.highlight(code, language);

console.log('Result:\n' + result);