var jQuery = require('jquery'),
	cheerio = require('cheerio'),
	should = require('chai').should(),
    nsh = require('node-syntaxhighlighter'),
    htmlLanguage = nsh.getLanguage('html'),
    jsLanguage = nsh.getLanguage('js'),
    jsxLanguage = require('../shBrushJsx');
	
var HTML_CODE = '<p><input class="form-control" value="name" /></p>';
var JS_CODE = 'function(e){return this.e + e;}';

// The wrapper div of the highlighted code would have an unique id. 
// We have to remove it before comparing two highlighted codes.
function omitWrapperDiv(html){
	return cheerio.load(html)('div').html();
}

describe('HTML:', function() {
	it('successfully converts HTML', function() {
		var code = HTML_CODE,
			highlightedCodeByHTML = nsh.highlight(code, htmlLanguage),
			highlightedCodeByJSX = nsh.highlight(code, jsxLanguage);
			
		highlightedCodeByHTML = omitWrapperDiv(highlightedCodeByHTML);
		highlightedCodeByJSX = omitWrapperDiv(highlightedCodeByJSX);

		highlightedCodeByJSX.should.eql(highlightedCodeByHTML);
	});
});

describe('JS:', function() {
	it('successfully converts JS', function() {
		var code = JS_CODE,
			highlightedCodeByJS = nsh.highlight(code, jsLanguage),
			highlightedCodeByJSX = nsh.highlight(code, jsxLanguage);
		
		highlightedCodeByJS = omitWrapperDiv(highlightedCodeByJS);
		highlightedCodeByJSX = omitWrapperDiv(highlightedCodeByJSX);

		highlightedCodeByJSX.should.eql(highlightedCodeByJS);
	});
});