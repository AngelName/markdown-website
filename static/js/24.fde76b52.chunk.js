(this["webpackJsonpmarkdown-website"]=this["webpackJsonpmarkdown-website"]||[]).push([[24],{964:function(e,t,n){!function(e){"use strict";e.defineSimpleMode("wast",{start:[{regex:/[+\-]?(?:nan(?::0x[0-9a-fA-F]+)?|infinity|inf|0x[0-9a-fA-F]+\.?[0-9a-fA-F]*p[+\/-]?\d+|\d+(?:\.\d*)?[eE][+\-]?\d*|\d+\.\d*|0x[0-9a-fA-F]+|\d+)/,token:"number"},{regex:/mut|nop|block|if|then|else|loop|br_if|br_table|br|call(_indirect)?|drop|end|return(_call(_indirect)?)?|local\.(get|set|tee)|global\.(get|set)|i(32|64)\.(store(8|16)|(load(8|16)_[su]))|i64\.(load32_[su]|store32)|[fi](32|64)\.(const|load|store)|f(32|64)\.(abs|add|ceil|copysign|div|eq|floor|[gl][et]|max|min|mul|nearest|neg?|sqrt|sub|trunc)|i(32|64)\.(a[dn]d|c[lt]z|(div|rem)_[su]|eqz?|[gl][te]_[su]|mul|ne|popcnt|rot[lr]|sh(l|r_[su])|sub|x?or)|i64\.extend_[su]_i32|i32\.wrap_i64|i(32|64)\.trunc_f(32|64)_[su]|f(32|64)\.convert_i(32|64)_[su]|f64\.promote_f32|f32\.demote_f64|f32\.reinterpret_i32|i32\.reinterpret_f32|f64\.reinterpret_i64|i64\.reinterpret_f64|select|unreachable|current_memory|memory(\.((atomic\.(notify|wait(32|64)))|grow|size))?|type|func|param|result|local|global|module|table|start|elem|data|align|offset|import|export|i64\.atomic\.(load32_u|store32|rmw32\.(a[dn]d|sub|x?or|(cmp)?xchg)_u)|i(32|64)\.atomic\.(load((8|16)_u)?|store(8|16)?|rmw(\.(a[dn]d|sub|x?or|(cmp)?xchg)|(8|16)\.(a[dn]d|sub|x?or|(cmp)?xchg)_u))|v128\.(load|store|const|not|andnot|and|or|xor|bitselect)|i(8x16|16x8|32x4|64x2)\.(shl|shr_[su])|i(8x16|16x8)\.(extract_lane_[su]|((add|sub)_saturate_[su])|avgr_u)|(i(8x16|16x8|32x4|64x2)|f(32x4|64x2))\.(splat|replace_lane|neg|add|sub)|i(8x16|16x8|32x4)\.(eq|ne|([lg][te]_[su])|abs|any_true|all_true|bitmask|((min|max)_[su]))|f(32x4|64x2)\.(eq|ne|[lg][te]|abs|sqrt|mul|div|min|max)|[fi](32x4|64x2)\.extract_lane|v8x16\.(shuffle|swizzle)|i16x8\.(load8x8_[su]|narrow_i32x4_[su]|widen_(low|high)_i8x16_[su]|mul)|i32x4\.(load16x4_[su]|widen_(low|high)_i16x8_[su]|mul|trunc_sat_f32x4_[su])|i64x2\.(load32x2_[su]|mul)|(v(8x16|16x8|32x4|64x2)\.load_splat)|i8x16\.narrow_i16x8_[su]|f32x4\.convert_i32x4_[su]/,token:"keyword"},{regex:/\b(anyfunc|[fi](32|64))\b/,token:"atom"},{regex:/\$([a-zA-Z0-9_`\+\-\*\/\\\^~=<>!\?@#$%&|:\.]+)/,token:"variable-2"},{regex:/"(?:[^"\\\x00-\x1f\x7f]|\\[nt\\'"]|\\[0-9a-fA-F][0-9a-fA-F])*"/,token:"string"},{regex:/\(;.*?/,token:"comment",next:"comment"},{regex:/;;.*$/,token:"comment"},{regex:/\(/,indent:!0},{regex:/\)/,dedent:!0}],comment:[{regex:/.*?;\)/,token:"comment",next:"start"},{regex:/.*/,token:"comment"}],meta:{dontIndentStates:["comment"]}}),e.defineMIME("text/webassembly","wast")}(n(26),n(980))},980:function(e,t,n){!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function a(e,a){(e.next||e.push)&&t(a,e.next||e.push),this.regex=n(e.regex),this.token=function(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}(e.token),this.data=e}function r(e,t){return function(n,a){if(a.pending){var r=a.pending.shift();return 0==a.pending.length&&(a.pending=null),n.pos+=r.text.length,r.token}if(a.local){if(a.local.end&&n.match(a.local.end)){var o=a.local.endToken||null;return a.local=a.localState=null,o}var s;return o=a.local.mode.token(n,a.localState),a.local.endScan&&(s=a.local.endScan.exec(n.current()))&&(n.pos=n.start+s.index),o}for(var l=e[a.state],d=0;d<l.length;d++){var c=l[d],u=(!c.data.sol||n.sol())&&n.match(c.regex);if(u){c.data.next?a.state=c.data.next:c.data.push?((a.stack||(a.stack=[])).push(a.state),a.state=c.data.push):c.data.pop&&a.stack&&a.stack.length&&(a.state=a.stack.pop()),c.data.mode&&i(t,a,c.data.mode,c.token),c.data.indent&&a.indent.push(n.indentation()+t.indentUnit),c.data.dedent&&a.indent.pop();var f=c.token;if(f&&f.apply&&(f=f(u)),u.length>2&&c.token&&"string"!=typeof c.token){a.pending=[];for(var p=2;p<u.length;p++)u[p]&&a.pending.push({text:u[p],token:c.token[p-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),f[0]}return f&&f.join?f[0]:f}}return n.next(),null}}function o(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var a in e)if(e.hasOwnProperty(a)){if(!t.hasOwnProperty(a)||!o(e[a],t[a]))return!1;n++}for(var a in t)t.hasOwnProperty(a)&&n--;return 0==n}function i(t,a,r,i){var s;if(r.persistent)for(var l=a.persistentStates;l&&!s;l=l.next)(r.spec?o(r.spec,l.spec):r.mode==l.mode)&&(s=l);var d=s?s.mode:r.mode||e.getMode(t,r.spec),c=s?s.state:e.startState(d);r.persistent&&!s&&(a.persistentStates={mode:d,spec:r.spec,state:c,next:a.persistentStates}),a.localState=c,a.local={mode:d,end:r.end&&n(r.end),endScan:r.end&&!1!==r.forceEnd&&n(r.end,!1),endToken:i&&i.join?i[i.length-1]:i}}function s(t,n){return function(a,r,o){if(a.local&&a.local.mode.indent)return a.local.mode.indent(a.localState,r,o);if(null==a.indent||a.local||n.dontIndentStates&&function(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}(a.state,n.dontIndentStates)>-1)return e.Pass;var i=a.indent.length-1,s=t[a.state];e:for(;;){for(var l=0;l<s.length;l++){var d=s[l];if(d.data.dedent&&!1!==d.data.dedentIfLineStart){var c=d.regex.exec(r);if(c&&c[0]){i--,(d.next||d.push)&&(s=t[d.next||d.push]),r=r.slice(c[0].length);continue e}}}break}return i<0?0:a.indent[i]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,o){t(o,"start");var i={},l=o.meta||{},d=!1;for(var c in o)if(c!=l&&o.hasOwnProperty(c))for(var u=i[c]=[],f=o[c],p=0;p<f.length;p++){var x=f[p];u.push(new a(x,o)),(x.indent||x.dedent)&&(d=!0)}var m={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:d?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var a=t.persistentStates;a;a=a.next)n.persistentStates={mode:a.mode,spec:a.spec,state:a.state==t.localState?n.localState:e.copyState(a.mode,a.state),next:n.persistentStates};return n},token:r(i,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:s(i,l)};if(l)for(var g in l)l.hasOwnProperty(g)&&(m[g]=l[g]);return m}}(n(26))}}]);
//# sourceMappingURL=24.fde76b52.chunk.js.map