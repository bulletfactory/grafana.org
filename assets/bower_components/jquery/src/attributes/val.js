define(["../core","./support","../core/init"],function(e,t){var n=/\r/g;e.fn.extend({val:function(t){var i,o,s,r=this[0];{if(arguments.length)return s=e.isFunction(t),this.each(function(n){var o;1===this.nodeType&&(o=s?t.call(this,n,e(this).val()):t,null==o?o="":"number"==typeof o?o+="":e.isArray(o)&&(o=e.map(o,function(e){return null==e?"":e+""})),i=e.valHooks[this.type]||e.valHooks[this.nodeName.toLowerCase()],i&&"set"in i&&void 0!==i.set(this,o,"value")||(this.value=o))});if(r)return i=e.valHooks[r.type]||e.valHooks[r.nodeName.toLowerCase()],i&&"get"in i&&void 0!==(o=i.get(r,"value"))?o:(o=r.value,"string"==typeof o?o.replace(n,""):null==o?"":o)}}}),e.extend({valHooks:{select:{get:function(n){for(var i,o,s=n.options,r=n.selectedIndex,a="select-one"===n.type||0>r,u=a?null:[],l=a?r+1:s.length,f=0>r?l:a?r:0;l>f;f++)if(o=s[f],!(!o.selected&&f!==r||(t.optDisabled?o.disabled:null!==o.getAttribute("disabled"))||o.parentNode.disabled&&e.nodeName(o.parentNode,"optgroup"))){if(i=e(o).val(),a)return i;u.push(i)}return u},set:function(t,n){for(var i,o,s=t.options,r=e.makeArray(n),a=s.length;a--;)o=s[a],(o.selected=e.inArray(e(o).val(),r)>=0)&&(i=!0);return i||(t.selectedIndex=-1),r}}}}),e.each(["radio","checkbox"],function(){e.valHooks[this]={set:function(t,n){return e.isArray(n)?t.checked=e.inArray(e(t).val(),n)>=0:void 0}},t.checkOn||(e.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})});