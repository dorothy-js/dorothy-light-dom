/* @pollon/light-dom - v1.0.0
* https://github.com/pollon-js/light-dom#readme
* 2020 Francesco Lasaracina. Licensed ISC */
define(["exports"],(function(e){"use strict";function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var o=function(e){var n,t;return n=[],e instanceof i&&e.nodes.forEach((function(e){return n.push(e)})),e instanceof Node&&(n=[e]),"string"==typeof e&&(n=document.querySelectorAll(e)),t=document.createDocumentFragment(),n.forEach((function(e){return t.appendChild(e)})),t},i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.nodes=n||[]}var r,i,u;return r=e,(i=[{key:"get",value:function(e){return this.nodes[e]}},{key:"html",value:function(e){return e?(this.nodes.forEach((function(n){return n.innerHTML=e})),this):this.nodes[0].innerHTML}},{key:"empty",value:function(){this.html("")}},{key:"append",value:function(e){var n;return n=o(e),this.nodes.forEach((function(e){e.appendChild(n)})),this}},{key:"prepend",value:function(e){var n;return n=o(e),this.nodes.forEach((function(e){e.insertBefore(n,e.firstChild)})),this}},{key:"replace",value:function(e){this.nodes.forEach((function(e){for(;e.firstChild;)e.removeChild(e.firstChild)})),this.append(e)}},{key:"attr",value:function(e,n){return void 0===n?this.nodes[0].getAttribute(e):(this.nodes.forEach((function(t){return t.setAttribute(e,n)})),this)}},{key:"addClass",value:function(e){return this.nodes.forEach((function(n){Array.from(n.classList).includes(e)||n.classList.add("".concat(e))})),this}},{key:"removeClass",value:function(e){return this.nodes.forEach((function(n){n.classList.remove(e)})),this}},{key:"toggleClass",value:function(e){this.nodes.forEach((function(n){return n.classList.toggle(e)}))}},{key:"children",value:function(){var n=[];return this.nodes.forEach((function(e){return n=n.concat(Array.from(e.children))})),new e(n)}},{key:"parent",value:function(n){var t=[];return n?(this.nodes.forEach((function(e){for(var r=e.parentNode;r&&r!==document;){if(r.matches(n))return void t.push(r);r=r.parentNode}})),new e(t)):(this.nodes.forEach((function(e){return t.push(e.parentNode)})),new e(t))}},{key:"find",value:function(n){var t=[];return this.nodes.forEach((function(e){t=t.concat(Array.from(e.querySelectorAll(n)))})),new e(t)}},{key:"remove",value:function(){return this.nodes.forEach((function(e){return e.outerHTML=""})),this.nodes=[],this}},{key:"on",value:function(e,n){return this.nodes.forEach((function(t){void 0===t.eventHandlers&&(t.eventHandlers={}),void 0===t.eventHandlers[e]&&(t.eventHandlers[e]=[]),t.eventHandlers[e].push(n),t.addEventListener(e,n)})),this}},{key:"off",value:function(e){return this.nodes.forEach((function(n){void 0!==n.eventHandlers&&void 0!==n.eventHandlers[e]&&(n.eventHandlers[e].forEach((function(t){return n.removeEventListener(e,t)})),n.eventHandlers[e]=[])})),this}},{key:"unbind",value:function(){var e;this.nodes.forEach((function(e){if(e.eventHandlers)for(var n=function(){var n=t(o[r],1)[0];e.eventHandlers[n].forEach((function(t){return e.removeEventListener(n,t)})),e.eventHandlers[n]=[]},r=0,o=Object.entries(e.eventHandlers);r<o.length;r++)n()})),(e=this.children()).length&&e.unbind()}},{key:"serializeForm",value:function(){var e={};return this.nodes.reduce((function(e,n){return e.concat(Array.from(n.querySelectorAll("input, select, textarea")))}),[]).forEach((function(n){var t=n.name,r=n.value;t&&(e[t]=r)})),JSON.stringify(e)}},{key:"length",get:function(){return this.nodes.length}}])&&n(r.prototype,i),u&&n(r,u),e}(),u=function e(n){if(!((t=n)&&1===t.nodeType||t&&11===t.nodeType||t&&9===t.nodeType))throw"Light DOM: the given scope is not an Element nor a DocumentFragment";var t;return{asCollection:function(){return new i([n])},one:function(e){return new i([n.querySelector(e)])},all:function(e){return new i(n.querySelectorAll(e))},in:function(t){var r=n.querySelector(t);if(n&&!n.contains(r))throw"Light DOM: "+t+" is not in the current scope";return e(r)}}};u.element=function(e,n){var t,r;return t=document.createElement(e),r=n,n="object"==Object.prototype.toString.call(r).match(/^\[object\s(.*)\]$/)[1].toLowerCase()?n:{},Object.keys(n).forEach((function(e){return t.setAttribute(e,n[e])})),new i([t])},e.Query=u,e.dispatchEvent=function(e,n){setTimeout((function(){return e&&e.dispatchEvent(n)}),0)},Object.defineProperty(e,"__esModule",{value:!0})}));
