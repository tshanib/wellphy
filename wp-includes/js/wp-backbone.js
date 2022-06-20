window.wp=window.wp||{};(function($){wp.Backbone={};wp.Backbone.Subviews=function(view,views){this.view=view;this._views=_.isArray(views)?{'':views}:views||{};};wp.Backbone.Subviews.extend=Backbone.Model.extend;_.extend(wp.Backbone.Subviews.prototype,{all:function(){return _.flatten(_.values(this._views));},get:function(selector){selector=selector||'';return this._views[selector];},first:function(selector){var views=this.get(selector);return views&&views.length?views[0]:null;},set:function(selector,views,options){var existing,next;if(!_.isString(selector)){options=views;views=selector;selector='';}
options=options||{};views=_.isArray(views)?views:[views];existing=this.get(selector);next=views;if(existing){if(options.add){if(_.isUndefined(options.at)){next=existing.concat(views);}else{next=existing;next.splice.apply(next,[options.at,0].concat(views));}}else{_.each(next,function(view){view.__detach=true;});_.each(existing,function(view){if(view.__detach)
view.$el.detach();else
view.remove();});_.each(next,function(view){delete view.__detach;});}}
this._views[selector]=next;_.each(views,function(subview){var constructor=subview.Views||wp.Backbone.Subviews,subviews=subview.views=subview.views||new constructor(subview);subviews.parent=this.view;subviews.selector=selector;},this);if(!options.silent)
this._attach(selector,views,_.extend({ready:this._isReady()},options));return this;},add:function(selector,views,options){if(!_.isString(selector)){options=views;views=selector;selector='';}
return this.set(selector,views,_.extend({add:true},options));},unset:function(selector,views,options){var existing;if(!_.isString(selector)){options=views;views=selector;selector='';}
views=views||[];if(existing=this.get(selector)){views=_.isArray(views)?views:[views];this._views[selector]=views.length?_.difference(existing,views):[];}
if(!options||!options.silent)
_.invoke(views,'remove');return this;},detach:function(){$(_.pluck(this.all(),'el')).detach();return this;},render:function(){var options={ready:this._isReady()};_.each(this._views,function(views,selector){this._attach(selector,views,options);},this);this.rendered=true;return this;},remove:function(options){if(!options||!options.silent){if(this.parent&&this.parent.views)
this.parent.views.unset(this.selector,this.view,{silent:true});delete this.parent;delete this.selector;}
_.invoke(this.all(),'remove');this._views=[];return this;},replace:function($target,els){$target.html(els);return this;},insert:function($target,els,options){var at=options&&options.at,$children;if(_.isNumber(at)&&($children=$target.children()).length>at)
$children.eq(at).before(els);else
$target.append(els);return this;},ready:function(){this.view.trigger('ready');_.chain(this.all()).map(function(view){return view.views;}).flatten().where({attached:true}).invoke('ready');},_attach:function(selector,views,options){var $selector=selector?this.view.$(selector):this.view.$el,managers;if(!$selector.length)
return this;managers=_.chain(views).pluck('views').flatten().value();_.each(managers,function(manager){if(manager.rendered)
return;manager.view.render();manager.rendered=true;},this);this[options.add?'insert':'replace']($selector,_.pluck(views,'el'),options);_.each(managers,function(manager){manager.attached=true;if(options.ready)
manager.ready();},this);return this;},_isReady:function(){var node=this.view.el;while(node){if(node===document.body)
return true;node=node.parentNode;}
return false;}});wp.Backbone.View=Backbone.View.extend({Subviews:wp.Backbone.Subviews,constructor:function(options){this.views=new this.Subviews(this,this.views);this.on('ready',this.ready,this);this.options=options||{};Backbone.View.apply(this,arguments);},remove:function(){var result=Backbone.View.prototype.remove.apply(this,arguments);if(this.views)
this.views.remove();return result;},render:function(){var options;if(this.prepare)
options=this.prepare();this.views.detach();if(this.template){options=options||{};this.trigger('prepare',options);this.$el.html(this.template(options));}
this.views.render();return this;},prepare:function(){return this.options;},ready:function(){}});}(jQuery));