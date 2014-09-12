/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,n,i){"use strict";function s(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}var o=function(e){for(var n=e.length;n--;)0===t("head").has("."+e[n]).length&&t("head").append('<meta class="'+e[n]+'">')};o(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var r=function(e,i){if("string"==typeof e){if(i){var s;return s=i.jquery?i[0]:i,t(s.querySelectorAll(e))}return t(n.querySelectorAll(e))}return t(e,i)},a=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},o=function(e){for(var n=e.length;n--;)0===t("head").has("."+e[n]).length&&t("head").append('<meta class="'+e[n]+'">')},c=function(t){for(var e=t.split("-"),n=e.length,i=[];n--;)0!==n?i.push(e[n]):this.namespace.length>0?i.push(this.namespace,e[n]):i.push(e[n]);return i.reverse().join("-")},l=function(e,n){var i=this,s=!r(this).data(this.attr_name(!0));return"string"==typeof e?this[e].call(this,n):(r(this.scope).is("["+this.attr_name()+"]")?(r(this.scope).data(this.attr_name(!0)+"-init",t.extend({},this.settings,n||e,this.data_options(r(this.scope)))),s&&this.events(this.scope)):r("["+this.attr_name()+"]",this.scope).each(function(){var s=!r(this).data(i.attr_name(!0)+"-init");r(this).data(i.attr_name(!0)+"-init",t.extend({},i.settings,n||e,i.data_options(r(this)))),s&&i.events(this)}),void 0)},u=function(t,e){function n(){e(t[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?(t[0].complete||4===t[0].readyState?n():i.call(t),void 0):(n(),void 0)};e.matchMedia=e.matchMedia||function(t){var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,s=t.createElement("body"),o=t.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(o),function(t){return o.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,i),e=42===o.offsetWidth,n.removeChild(s),{matches:e,media:t}}}(n),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(){function t(){n&&(o(t),jQuery.fx.tick())}for(var n,i=0,s=["webkit","moz"],o=e.requestAnimationFrame,r=e.cancelAnimationFrame;i<s.length&&!o;i++)o=e[s[i]+"RequestAnimationFrame"],r=r||e[s[i]+"CancelAnimationFrame"]||e[s[i]+"CancelRequestAnimationFrame"];o?(e.requestAnimationFrame=o,e.cancelAnimationFrame=r,jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,t())},jQuery.fx.stop=function(){n=!1}):(e.requestAnimationFrame=function(t){var n=(new Date).getTime(),s=Math.max(0,16-(n-i)),o=e.setTimeout(function(){t(n+s)},s);return i=n+s,o},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(jQuery),e.Foundation={name:"Foundation",version:"5.1.1",media_queries:{small:r(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:r(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:r(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:r(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:r(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:""},init:function(t,e,n,i,s){var o=[t,n,i,s],a=[];if(this.rtl=/rtl/i.test(r("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),e&&"string"==typeof e&&!/reflow/i.test(e))this.libs.hasOwnProperty(e)&&a.push(this.init_lib(e,o));else for(var c in this.libs)a.push(this.init_lib(c,e));return t},init_lib:function(t,e){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),e&&e.hasOwnProperty(t)?this.libs[t].init.apply(this.libs[t],[this.scope,e[t]]):(e=e instanceof Array?e:Array(e),this.libs[t].init.apply(this.libs[t],e))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=a,t.add_namespace=c,t.bindings=l,t.S=this.utils.S},inherit:function(t,e){for(var n=e.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(t[n[i]]=this.utils[n[i]])},set_namespace:function(){var e=t(".foundation-data-attribute-namespace").css("font-family");/false/i.test(e)||(this.global.namespace=e)},libs:{},utils:{S:r,throttle:function(t,e){var n=null;return function(){var i=this,s=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,s)},e)}},debounce:function(t,e,n){var i,s;return function(){var o=this,r=arguments,a=function(){i=null,n||(s=t.apply(o,r))},c=n&&!i;return clearTimeout(i),i=setTimeout(a,e),c&&(s=t.apply(o,r)),s}},data_options:function(e){function n(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function i(e){return"string"==typeof e?t.trim(e):e}var s,o,r,a={},c=function(t){var e=Foundation.global.namespace;return e.length>0?t.data(e+"-options"):t.data("options")},l=c(e);if("object"==typeof l)return l;for(r=(l||":").split(";"),s=r.length;s--;)o=r[s].split(":"),/true/i.test(o[1])&&(o[1]=!0),/false/i.test(o[1])&&(o[1]=!1),n(o[1])&&(o[1]=parseInt(o[1],10)),2===o.length&&o[0].length>0&&(a[i(o[0])]=i(o[1]));return a},register_media:function(e,n){Foundation.media_queries[e]===i&&(t("head").append('<meta class="'+n+'">'),Foundation.media_queries[e]=s(t("."+n).css("font-family")))},add_custom_rule:function(t,e){if(e===i)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[e];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}},image_loaded:function(t,e){var n=this,i=t.length;t.each(function(){u(n.S(this),function(){i-=1,0==i&&e(t)})})},random_str:function(t){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");t||(t=Math.floor(Math.random()*e.length));for(var n="";t--;)n+=e[Math.floor(Math.random()*e.length)];return n}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,this,this.document);