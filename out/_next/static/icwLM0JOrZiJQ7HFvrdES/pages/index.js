(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSG",(function(){return nn})),e.d(t,"default",(function(){return tn}));var r=e("q1tI"),i=e.n(r),o=e("8Kt/"),u=e.n(o),c=e("CafY"),a=e("Z4Yb"),f=e.n(a),s=(e("YFqc"),function(){return(s=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)});function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var d={strings:[],speed:100,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,lifeLike:!0,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:750,html:!0,waitUntilVisible:!1,beforeString:function(){},afterString:function(){},beforeStep:function(){},afterStep:function(){},afterComplete:function(){}},p=function(n){return n.map((function(n){return void 0===n[1]&&n.push(null),void 0===n[2]&&n.push({}),n}))},h=function(n,t){return Object.assign({},n,t)},v=function(n){return Array.isArray(n)},m=function(n,t){return n[2]=h(n[2],t)||t,n},y=function(n,t){return v(n[0])?n.map((function(n){return m(n,t)})):m(n,t)},g=function(n,t,e,r){r=r||!1,e=e||{};var i=!v(n),o=n.length;return(n=i?new Array(n).fill(0):n).map((function(n,u){if(i)return t;var c=[t,n,e];return r&&(0===u&&(c=y(c,{isFirst:!0})),u+1===o&&(c=y(c,{isLast:!0}))),c}))};function b(n){this.insert=function(n,e){t.splice(n,0,e)},this.add=function(n,r,i){return n=v(n)?n:[n,null],i=i||!1,r=r||1,v(n[0])||(n=g(r,n)),n=p(n).map((function(n){return n[2]=h(n[2],{id:e}),e++,n})),t=i?n.concat(t):t.concat(n),this},this.delete=function(n){return t.splice(n,1),this},this.reset=function(){return t=t.map((function(n){return n[2].executed=!1,n})),this},this.getItems=function(){return(t=p(t)).filter((function(n){return!n[2].executed}))},this.setMeta=function(n,e){var r=t.findIndex((function(t){return t[2].id===n}));t[r][2]=h(t[r][2],e)};var t=[],e=0;this.add(n)}var S=function(n){return Array.from(n)},N=function(n){var t=[];return t.concat.apply(t,n)},w=function(n){var t=document.implementation.createHTMLDocument("");return t.body.innerHTML=n,t.body},T=function n(t,e,r){e=e||null,r=void 0!==r&&r;var i=S(t.childNodes).map((function(t){return 3===(e=t).nodeType||"BR"===e.tagName?t:n(t);var e}));return i=N(i),e&&(i=i.filter((function(n){return!e.contains(n)}))),r?i.reverse():i},L=function(n){return"BODY"===n.tagName},M=function(n,t){t=t||null;var e=n instanceof HTMLElement;return{node:t,isTopLevelText:(!t||L(t.parentNode))&&!e,isHTMLElement:e,content:n}};function x(n){var t,e=w(n);return t=T(e).map((function(n){return n.nodeValue?S(n.nodeValue).map((function(t){return M(t,n)})):M(n)})),N(t)}function E(n,t){return(t=void 0===t||t)?x(n):S(n).map((function(n){return M(n)}))}var O=function(n){return document.createElement(n)},D=function(n,t){var e=O("style");e.id=t||"",e.appendChild(document.createTextNode(n)),document.head.appendChild(e)},P=function(n){return v(n)||(n=[n/2,n/2]),{before:n[0],after:n[1],total:n[0]+n[1]}},H=function(n,t){return Math.abs(Math.random()*(n+t-(n-t))+(n-t))},C=function(n){return["textarea","input"].indexOf(n.tagName.toLowerCase())>-1},k=function(n,t){var e=t.querySelectorAll("*");return[t].concat(S(e).reverse()).find((function(t){return t.cloneNode().outerHTML===n.outerHTML}))},I=function(n,t,e,r){e=e||null;var i=t.isHTMLElement,o=i?t.content:document.createTextNode(t.content);if(C(n))n.value="".concat(n.value).concat(t.content);else{if(!t.isTopLevelText&&!i){var u=t.node.parentNode,c=k(u.cloneNode(),n);if(function(n,t){if(!n)return!1;var e=n.nextSibling;return!e||e.isEqualNode(t)}(c,e))n=c;else if((o=u.cloneNode()).innerText=t.content,!L(u.parentNode)){for(var a=u.parentNode,f=a.cloneNode(),s=k(f,n);!s&&!L(a);)f.innerHTML=o.outerHTML,o=f,f=a.parentNode.cloneNode(),a=a.parentNode,s=k(f,n);n=s||n}}var l=T(n,e,!0)[r-1],d=l?l.parentNode:n;d.insertBefore(o,d.contains(e)?e:null)}},A=function(n){var t;return null==n||null===(t=n.parentNode)||void 0===t?void 0:t.removeChild(n)},j=function(n,t,e){var r,i="string"==typeof n,o=!1,u=-1*n;return i&&(u=(r="END"===n.toUpperCase())?-1:1,o=r?t+u>0:t+u<e.length),{isString:i,numberOfSteps:u,canKeepMoving:o}};function B(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function R(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(n.apply(this,t))}catch(n){return Promise.reject(n)}}}function q(){}function _(n,t){if(!t)return n&&n.then?n.then(q):Promise.resolve()}function z(n,t){var e=n();return e&&e.then?e.then(t):t(e)}function F(n,t,e){if(!n.s){if(e instanceof V){if(!e.s)return void(e.o=F.bind(null,n,t));1&t&&(t=e.s),e=e.v}if(e&&e.then)return void e.then(F.bind(null,n,t),F.bind(null,n,2));n.s=t,n.v=e;var r=n.o;r&&r(n)}}var V=function(){function n(){}return n.prototype.then=function(t,e){var r=new n,i=this.s;if(i){var o=1&i?t:e;if(o){try{F(r,1,o(this.v))}catch(n){F(r,2,n)}return r}return this}return this.o=function(n){try{var i=n.v;1&n.s?F(r,1,t?t(i):i):e?F(r,1,e(i)):F(r,2,i)}catch(n){F(r,2,n)}},r},n}();function Y(n,t){return n&&n.then?n.then(t):t(n)}function K(n,t){var e=this,r=this;t=t||{};var i=function(n,t,r){return n=v(n[0])?n:[n],cn.add(n,t),function(n){var t=(n=n||{}).delay;t&&cn.add([y,t])}(r),e},o=function(n){return[[k,n="object"==l(n)?n:{},{force:!0}],[k,tn,{force:!0}]]},u=function(){return G?S(X.value):T(X,an,!0)},c=function(n,t){t=t||1;var e=tn.nextStringDelay;cn.insert(n,[y,e.before]),cn.insert(n+t+1,[y,e.after])},a=R((function(){if(an){var n="[data-typeit-id='".concat(un,"'] .ti-cursor");D("@keyframes blink-".concat(un," { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ").concat(n," { animation: blink-").concat(un," ").concat(tn.cursorSpeed/1e3,"s infinite; } ").concat(n,".with-delay { animation-delay: 500ms; } ").concat(n,".disabled { animation: none; }"),un),X.appendChild(an);var t="loaded"===document.fonts.status;return B(t||document.fonts.ready,(function(n){var t=an.getBoundingClientRect().width/2;an.style.margin="0 -".concat(t+2,"px 0 -").concat(t-2,"px")}),t)}})),f=function(n){an&&(an.classList.toggle("disabled",n),an.classList.toggle("with-delay",!n))},s=R((function(n,t){return W.push(setTimeout(n,t)),B()})),p=R((function(n){return z((function(){if(Z)return _(N(Z))}),(function(){cn.reset().delete(0).add([y,n.before],1,!0),u().forEach((function(n){cn.add([U,null,{isPhantom:!0}],1,!0)}))}))})),m=R((function(){nn.started=!0;var n,t=cn.getItems();return Y(function(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}((function(){return Y(function(n,t,e){var r,i,o=-1;return function e(u){try{for(;++o<n.length;)if((u=t(o))&&u.then){if(!((c=u)instanceof V&&1&c.s))return void u.then(e,i||(i=F.bind(null,r=new V,2)));u=u.v}r?F(r,1,u):r=u}catch(n){F(r||(r=new V),2,n)}var c}(),r}(t,(function(e){if(nn.frozen||nn.destroyed)throw"";var i,o,u,c,a=t[e],s=a[2];return n=[a,r],s.freezeCursor&&f(!0),i=tn.speed,o=tn.deleteSpeed,u=tn.lifeLike,c=(o=null!==o?o:i/3)/2,Q=u?[H(i,i/2),H(o,c)]:[i,o],z((function(){var t;if(null==s?void 0:s.isFirst)return _((t=tn).beforeString.apply(t,n))}),(function(){var t;return B((t=tn).beforeStep.apply(t,n),(function(){return B(a[0].call(r,a[1],s),(function(){return z((function(){if(!s||!s.isPhantom)return z((function(){var t,e;if(null===(t=a[2])||void 0===t?void 0:t.isLast)return _((e=tn).afterString.apply(e,n))}),(function(){var t;return B((t=tn).afterStep.apply(t,n),(function(){cn.setMeta(s.id,{executed:!0})}))}))}),(function(){f(!1)}))}))}))}))})),(function(t){var e;return nn.completed=!0,B((e=tn).afterComplete.apply(e,n),(function(){if(tn.loop){var n=tn.loopDelay;s((function(){return B(p(n),(function(){m()}))}),n.after)}}))}))}),q),(function(n){return r}))})),y=function(n){return new Promise((function(t){s((function(){return t()}),n||0)}))},N=function n(t){var e=u(),r=j(t,Z,e);return Z+=r.numberOfSteps,new Promise((function(t){s(R((function(){return function(n,t,e,r){if(e){var i=r,o=t[(i=i>t.length?t.length:i)-1];(n=o?o.parentNode:n).insertBefore(e,o||null)}}(X,u(),an,Z),z((function(){if(r.isString&&r.canKeepMoving)return _(n(r.numberOfSteps>0?"START":"END"))}),(function(){return t()}))})),Q[0])}))},L=function(n){return new Promise((function(t){s((function(){return I(X,n,an,Z),t()}),Q[0])}))},k=R((function(n){tn=h(tn,n)})),K=R((function(){G?X.value="":u().forEach((function(n){A(n)}))})),U=function n(t){return t=!0===t,new Promise((function(e){s(R((function(){var r=!1,i=u();return i.length&&(G?X.value=X.value.slice(0,-1):A(i[Z])),S(X.querySelectorAll("*")).forEach((function(n){if(!n.innerHTML&&"BR"!==n.tagName){for(var t=n;1===t.parentNode.childNodes.length&&t.parentNode.childNodes[0].isEqualNode(t);)t=t.parentNode;A(t)}})),z((function(){if(t&&i.length-1>0)return B(n(!0),(function(){return r=!0,e()}))}),(function(n){return r?n:e()}))})),Q[1])}))};this.break=function(n){return i([L,M(O("BR"))],1,n)},this.delete=function(n,t){var e=o(t);return i([e[0]].concat([].concat(Array(Math.abs(n)||1)).fill().map((function(){return[U,!n,$]})),[e[1]]),1,t)},this.empty=function(){return i(K,1,arguments)},this.exec=function(n,t){var e=o(t);return i([e[0],[n,null],e[1]],1,t)},this.move=function(n,t){var e=j(n,Z,u()),r=o(t),c=e.isString?n:Math.sign(n);return i([r[0]].concat([].concat(Array(Math.abs(n)||1)).fill().map((function(){return[N,c,$]})),[r[1]]),1,t)},this.options=function(n){return i([k,n],1,n)},this.pause=function(n,t){return i([y,n],1,t)},this.type=function(n,t){var e=o(t),r=E(n,tn.html),u=[e[0]].concat(g(r,L,$,!0),[e[1]]);return i(u,1,t)},this.is=function(n){return nn[n]},this.destroy=function(n){n=void 0===n||n,W.forEach((function(n){clearTimeout(n)})),W=[],n&&A(an),nn.destroyed=!0},this.freeze=function(){nn.frozen=!0},this.unfreeze=function(){nn.frozen=!1,m()},this.reset=function(){for(var n in!this.is("destroyed")&&this.destroy(),cn.reset(),Z=0,nn)nn[n]=!1;return G?X.value="":X.innerHTML="",this},this.go=function(){return nn.started?this:(a(),tn.waitUntilVisible?(function(n,t){new IntersectionObserver((function(e,r){e.forEach((function(e){e.isIntersecting&&(t(),r.unobserve(n))}))}),{threshold:1}).observe(n)}(X,m.bind(this)),this):(m(),this))},this.getQueue=function(){return cn},this.getOptions=function(){return tn},this.getElement=function(){return X};var J,X="string"==typeof(J=n)?document.querySelector(J):J,G=C(X),Q=[],W=[],Z=0,$={freezeCursor:!0},nn={started:!1,completed:!1,frozen:!1,destroyed:!1},tn=h(d,t);tn=h(tn,{html:!G&&tn.html,nextStringDelay:P(tn.nextStringDelay),loopDelay:P(tn.loopDelay)});var en,rn,on,un=Math.random().toString().substring(2,9),cn=new b([y,tn.startDelay]);X.setAttribute("data-typeit-id",un),D("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}[data-typeit-id]"),tn.strings=(on=tn.strings,en=v(on)?on:[on],(rn=function(n){return n.innerHTML.replace(/<\!--.*?-->/g,"").trim()}(X))?(X.innerHTML="",tn.startDelete?(x(rn).forEach((function(n){I(X,n,an,Z)})),cn.add([U,!0]),c(1),en):[rn.trim()].concat(en)):en);var an=function(){if(G||!tn.cursor)return null;var n=O("span");return n.innerHTML=w(tn.cursorChar).innerHTML,n.className="ti-cursor",n.style.cssText="display:inline;".concat(function(n){var t,e=["font","lineHeight","color"],r=O("SPAN"),i=(t=n,window.getComputedStyle(t,null));for(var o in i)e.indexOf(o)>-1&&i[o]&&(r.style[o]=i[o]);return r.style.cssText}(X)),n}();tn.strings.length&&function(){var n=tn.strings.filter((function(n){return!!n}));n.forEach((function(t,e){var r=E(t,tn.html);cn.add(g(r,L,$,!0));var i=cn.getItems().length;if(e+1!==n.length){if(tn.breakLines){var o=M(O("BR"));return cn.add([L,o,$]),void c(i)}cn.add(g(r,U,$)),c(i,t.length)}}))}()}var U=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],J=r.useRef,X=r.useEffect,G=r.useState,Q=r.useMemo,W=function(n){var t=G(!0),e=t[0],i=t[1],o=J(null),u=n.options,c=n.element,a=n.children,f=n.getBeforeInit,l=n.getAfterInit,d=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]])}return e}(n,["options","element","children","getBeforeInit","getAfterInit"]),p=c,h=Q((function(){return n=p,U.indexOf(n.toLowerCase())>-1;var n}),[p]);return X((function(){a&&(u.strings=o.current.innerHTML),i(!1)}),[]),X((function(){if(!e){var n=new K(o.current,s({},u));return(n=f(n)).go(),n=l(n),function(){n.destroy()}}}),[e]),Object(r.createElement)("div",{style:{opacity:e?0:1}},h?Object(r.createElement)(p,s({ref:o},d)):Object(r.createElement)(p,s({ref:o},d),e&&a))};W.defaultProps={element:"span",options:{},getBeforeInit:function(n){return n},getAfterInit:function(n){return n}};var Z=W,$=(e("65Hy"),i.a.createElement),nn=!0;function tn(n){n.allPostsData;return $(c.a,{home:!0},$(u.a,null,$("title",null,c.b)),$("section",{className:f.a.headingMd},$("p",null,$(Z,{options:{lifelike:!0,loop:!0},getBeforeInit:function(n){return n.type("Wannabe Software Engineer, trying to make it. Don't ev").pause(250).delete(2).pause(200).type("@ me after the come up"),n}}))),$("section",{className:"".concat(f.a.headingMd," ").concat(f.a.padding1px)},$("h2",{className:f.a.headingLg},"Featured Projects")))}},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,2,1,3]]]);