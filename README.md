JSX Syntax Highlighter
=========
JSX syntax highlighter based on Node friendly version of Alex Gorbachev's great SyntaxHighlighter.
## Install
	$ npm install node-syntaxhighlighter
	$ npm install jsx-syntaxhighlighter

## Usage

	var nsh      =  require('node-syntaxhighlighter')
      , language =  require('jsx-syntaxhighlighter'); // usually load a bruns from nsh like : nsh.getLanguage('js')

        var code = require('fs').readFileSync('./example.jsx', 'utf-8');
        var result = nsh.highlight(code, language);

        console.log('Result:\n' + result);
## Tests

  npm test
  
## Release History

* 0.0.1 Initial release
