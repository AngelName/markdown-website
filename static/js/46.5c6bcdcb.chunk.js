(this["webpackJsonpmarkdown-website"]=this["webpackJsonpmarkdown-website"]||[]).push([[46],{883:function(e,t,a){!function(e){"use strict";e.defineMode("ebnf",(function(t){var a=0,c=1,n=0,r=1,s=2,i=null;return t.bracesMode&&(i=e.getMode(t,t.bracesMode)),{startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(t,o){if(t){switch(0===o.stack.length&&('"'==t.peek()||"'"==t.peek()?(o.stringType=t.peek(),t.next(),o.stack.unshift(r)):t.match(/^\/\*/)?(o.stack.unshift(n),o.commentType=a):t.match(/^\(\*/)&&(o.stack.unshift(n),o.commentType=c)),o.stack[0]){case r:for(;o.stack[0]===r&&!t.eol();)t.peek()===o.stringType?(t.next(),o.stack.shift()):"\\"===t.peek()?(t.next(),t.next()):t.match(/^.[^\\\"\']*/);return o.lhs?"property string":"string";case n:for(;o.stack[0]===n&&!t.eol();)o.commentType===a&&t.match(/\*\//)||o.commentType===c&&t.match(/\*\)/)?(o.stack.shift(),o.commentType=null):t.match(/^.[^\*]*/);return"comment";case s:for(;o.stack[0]===s&&!t.eol();)t.match(/^[^\]\\]+/)||t.match(/^\\./)||o.stack.shift();return"operator"}var m=t.peek();if(null!==i&&(o.braced||"{"===m)){null===o.localState&&(o.localState=e.startState(i));var h=i.token(t,o.localState),u=t.current();if(!h)for(var f=0;f<u.length;f++)"{"===u[f]?(0===o.braced&&(h="matchingbracket"),o.braced++):"}"===u[f]&&(o.braced--,0===o.braced&&(h="matchingbracket"));return h}switch(m){case"[":return t.next(),o.stack.unshift(s),"bracket";case":":case"|":case";":return t.next(),"operator";case"%":if(t.match("%%"))return"header";if(t.match(/[%][A-Za-z]+/))return"keyword";if(t.match(/[%][}]/))return"matchingbracket";break;case"/":if(t.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(t.match(/[\][a-z]+/))return"string-2";case".":if(t.match("."))return"atom";case"*":case"-":case"+":case"^":if(t.match(m))return"atom";case"$":if(t.match("$$"))return"builtin";if(t.match(/[$][0-9]+/))return"variable-3";case"<":if(t.match(/<<[a-zA-Z_]+>>/))return"builtin"}return t.match(/^\/\//)?(t.skipToEnd(),"comment"):t.match(/return/)?"operator":t.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?t.match(/(?=[\(.])/)?"variable":t.match(/(?=[\s\n]*[:=])/)?"def":"variable-2":-1!=["[","]","(",")"].indexOf(t.peek())?(t.next(),"bracket"):(t.eatSpace()||t.next(),null)}}}})),e.defineMIME("text/x-ebnf","ebnf")}(a(26))}}]);
//# sourceMappingURL=46.5c6bcdcb.chunk.js.map