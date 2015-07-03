// load nsh
var nsh      =  require('node-syntaxhighlighter')
  , language =  require('./lib/shBrushJsx.js'); // usually load a bruns from nsh like : nsh.getLanguage('js')

var code = require('fs').readFileSync('./sampleCode.jsx', 'utf-8');
var result = nsh.highlight(code, language);

console.log('Result:\n' + result);
