!function(t,e){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.1.1",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30},init:function(t,e,n){Foundation.inherit(this,"throttle"),this.bindings(e,n)},events:function(){var n=this,i=n.S,r=n.settings;n.set_expedition_position(),i(n.scope).off(".magellan").on("click.fndtn.magellan","["+n.add_namespace("data-magellan-arrival")+'] a[href^="#"]',function(i){i.preventDefault();var r=t(this).closest("["+n.attr_name()+"]");r.data("magellan-expedition-init");var o=this.hash.split("#").join(""),s=t("a[name="+o+"]");0===s.length&&(s=t("#"+o));var a=s.offset().top;"fixed"===r.css("position")&&(a-=r.outerHeight()),t("html, body").stop().animate({scrollTop:a},700,"swing",function(){e.location.hash="#"+o})}).on("scroll.fndtn.magellan",n.throttle(this.check_for_arrivals.bind(this),r.throttle_delay)).on("resize.fndtn.magellan",n.throttle(this.set_expedition_position.bind(this),r.throttle_delay))},check_for_arrivals:function(){var t=this;t.update_arrivals(),t.update_expedition_positions()},set_expedition_position:function(){var e=this;t("["+this.attr_name()+"=fixed]",e.scope).each(function(){var n,i=t(this),r=i.attr("styles");i.attr("style",""),n=i.offset().top,i.data(e.data_attr("magellan-top-offset"),n),i.attr("style",r)})},update_expedition_positions:function(){var n=this,i=t(e).scrollTop();t("["+this.attr_name()+"=fixed]",n.scope).each(function(){var e=t(this),r=e.data("magellan-top-offset");if(i>=r){var o=e.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]");0===o.length&&(o=e.clone(),o.removeAttr(n.attr_name()),o.attr(n.add_namespace("data-magellan-expedition-clone"),""),e.before(o)),e.css({position:"fixed",top:0})}else e.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]").remove(),e.attr("style","")})},update_arrivals:function(){var n=this,i=t(e).scrollTop();t("["+this.attr_name()+"]",n.scope).each(function(){var e=t(this),r=r=e.data(n.attr_name(!0)+"-init"),o=n.offsets(e,i),s=e.find("["+n.add_namespace("data-magellan-arrival")+"]"),a=!1;o.each(function(t,i){if(i.viewport_offset>=i.top_offset){var o=e.find("["+n.add_namespace("data-magellan-arrival")+"]");return o.not(i.arrival).removeClass(r.active_class),i.arrival.addClass(r.active_class),a=!0,!0}}),a||s.removeClass(r.active_class)})},offsets:function(e,n){var i=this,r=e.data(i.attr_name(!0)+"-init"),o=n+r.destination_threshold;return e.find("["+i.add_namespace("data-magellan-arrival")+"]").map(function(){var e=t(this).data(i.data_attr("magellan-arrival")),n=t("["+i.add_namespace("data-magellan-destination")+"="+e+"]");if(n.length>0){var r=n.offset().top;return{destination:n,arrival:t(this),top_offset:r,viewport_offset:o}}}).sort(function(t,e){return t.top_offset<e.top_offset?-1:t.top_offset>e.top_offset?1:0})},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){this.S(this.scope).off(".magellan"),this.S(e).off(".magellan")},reflow:function(){var e=this;t("["+e.add_namespace("data-magellan-expedition-clone")+"]",e.scope).remove()}}}(jQuery,this,this.document);