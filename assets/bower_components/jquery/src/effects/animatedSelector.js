define(["../core","../selector","../effects"],function(t){t.expr.filters.animated=function(e){return t.grep(t.timers,function(t){return e===t.elem}).length}});