!function(e){function t(t){for(var o,c,i=t[0],l=t[1],s=t[2],f=0,d=[];f<i.length;f++)c=i[f],r[c]&&d.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(a&&a(t);d.length;)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={1:0},u=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var a=l;u.push([3,0]),n()}([,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(0),u=(o=r)&&o.__esModule?o:{default:o};t.default=function(){(0,u.default)(".button").click(function(){console.log((0,u.default)(this)),console.log((0,u.default)(this).text()),console.log("Strong is the Force inside you.")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=new XMLHttpRequest;e.open("GET","<%= iconsPath %>",!0),e.send(),e.onload=function(t){var n=document.createElement("div");n.innerHTML=e.responseText,document.body.insertBefore(n,document.body.childNodes[0])}}},function(e,t,n){"use strict";r(n(0));n(2);var o=r(n(1));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(){(0,o.default)()};void 0===window.sources&&jQuery(document).ready(function(){return u()}),document.addEventListener("ToolboxReady",function(){return u()})}]);