"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[179],{426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  color: blueviolet;\r\n  border: none;\r\n}\r\n\r\nbody {\r\n  background-color: gainsboro;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.to-do-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n  background-color: gainsboro;\r\n}\r\n\r\n.heading-and-refresh-button {\r\n  display: flex;\r\n  background-color: chartreuse;\r\n  width: 50vw;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  height: 40px;\r\n}\r\n\r\n.heading {\r\n  font-size: 16px;\r\n}\r\n\r\n.type-and-enter-btn {\r\n  background-color: #fff;\r\n  padding: 5px;\r\n  height: 40px;\r\n  width: 50vw;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#refresh {\r\n  background-color: chartreuse;\r\n}\r\n\r\n.type {\r\n  height: 90%;\r\n  width: 90%;\r\n  border: none;\r\n  border-bottom: 1px solid blueviolet;\r\n}\r\n\r\n.clear-all {\r\n  height: 40px;\r\n  background-color: chartreuse;\r\n  border: none;\r\n  font-weight: 700;\r\n}\r\n\r\n.list {\r\n  background-color: gainsboro;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 5px;\r\n  background-color: #fff;\r\n  height: 40px;\r\n  align-items: center;\r\n  gap: 5px;\r\n  width: 50vw;\r\n}\r\n\r\n.text {\r\n  text-align: left;\r\n  width: 70%;\r\n}\r\n\r\n.refresh {\r\n  border: none;\r\n  background-color: #fff;\r\n}\r\n\r\n.enter {\r\n  border: none;\r\n  background-color: #fff;\r\n  display: flex;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},987:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),c=e(569),s=e.n(c),d=e(565),l=e.n(d),p=e(216),u=e.n(p),f=e(589),h=e.n(f),m=e(426),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const b=[{description:"work with saba",completed:!0,index:0},{description:"work at the office",completed:!1,index:1}],v=document.querySelector("#sub-container");for(let n=0;n<b.length;n+=1){const r=document.createElement("div");r.classList.add("task"),v.append(r);const e=document.createElement("input");e.type="checkbox",r.append(e);const t=document.createElement("p");t.innerText=b[n].description,t.classList.add("text"),r.append(t);const o=document.createElement("i");o.classList.add("removeBtn"),o.id="moreicon",o.classList.add("fa-solid"),o.classList.add("fa-ellipsis-vertical"),r.append(o)}}},n=>{n(n.s=987)}]);