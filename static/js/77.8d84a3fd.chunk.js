(this["webpackJsonpmarkdown-website"]=this["webpackJsonpmarkdown-website"]||[]).push([[77],{920:function(e,t,r){!function(e){"use strict";e.defineMode("pascal",(function(){var e=function(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),t={null:!0},r=/[+\-*&%=<>!?|\/]/;function n(n,o){var l,s=n.next();if("#"==s&&o.startOfLine)return n.skipToEnd(),"meta";if('"'==s||"'"==s)return o.tokenize=(l=s,function(e,t){for(var r,n=!1,i=!1;null!=(r=e.next());){if(r==l&&!n){i=!0;break}n=!n&&"\\"==r}return!i&&n||(t.tokenize=null),"string"}),o.tokenize(n,o);if("("==s&&n.eat("*"))return o.tokenize=i,i(n,o);if("{"==s)return o.tokenize=a,a(n,o);if(/[\[\]\(\),;\:\.]/.test(s))return null;if(/\d/.test(s))return n.eatWhile(/[\w\.]/),"number";if("/"==s&&n.eat("/"))return n.skipToEnd(),"comment";if(r.test(s))return n.eatWhile(r),"operator";n.eatWhile(/[\w\$_]/);var c=n.current();return e.propertyIsEnumerable(c)?"keyword":t.propertyIsEnumerable(c)?"atom":"variable"}function i(e,t){for(var r,n=!1;r=e.next();){if(")"==r&&n){t.tokenize=null;break}n="*"==r}return"comment"}function a(e,t){for(var r;r=e.next();)if("}"==r){t.tokenize=null;break}return"comment"}return{startState:function(){return{tokenize:null}},token:function(e,t){if(e.eatSpace())return null;var r=(t.tokenize||n)(e,t);return r},electricChars:"{}"}})),e.defineMIME("text/x-pascal","pascal")}(r(26))}}]);
//# sourceMappingURL=77.8d84a3fd.chunk.js.map