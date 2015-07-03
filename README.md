JSX Syntax Highlighter 
=========
JSX syntax highlighter <em>Brush</em> based on [Node friendly version of Alex Gorbachev's great SyntaxHighlighter](https://github.com/sravanrekandar/node-syntaxhighlighter).
## Install
	$ npm install node-syntaxhighlighter
	$ npm install jsx-syntaxhighlighter

## Usage

	var nsh      =  require('node-syntaxhighlighter')
      , language =  require('jsx-syntaxhighlighter'); // usually load a brush from nsh like : nsh.getLanguage('js')

        var code = require('fs').readFileSync('./example.jsx', 'utf-8');
        var result = nsh.highlight(code, language);

        console.log('Result:\n' + result);
## Tests

  npm test
  
## Release History

* 0.1.0
