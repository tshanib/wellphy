window.jetpackModules=window.jetpackModules||{};window.jetpackModules.models=(function(window,$,_,Backbone){'use strict';var models={};models.Modules=Backbone.Model.extend({visibles:{},filter_and_sort:function(){var subsubsub=$('.subsubsub .current'),items=this.get('raw'),m_filter=$('.button-group.filter-active .active'),m_sort=$('.button-group.sort .active'),m_search=$('#srch-term-search-input').val().toLowerCase(),groups;if(!subsubsub.closest('li').hasClass('all')){items=_.filter(items,function(item){return _.contains(item.module_tags,subsubsub.data('title'));});}
if(m_filter.data('filter-by')){items=_.filter(items,function(item){return item[m_filter.data('filter-by')]===m_filter.data('filter-value');});}
if(m_search.length){items=_.filter(items,function(item){var search_text=item.name+
' '+
item.description+
' '+
item.long_description+
' '+
item.search_terms+
' '+
item.module_tags;return-1!==search_text.toLowerCase().indexOf(m_search);});}
if(m_sort.data('sort-by')){items=_.sortBy(items,m_sort.data('sort-by'));if('reverse'===m_sort.data('sort-order')){items.reverse();}}
groups=_.groupBy(items,'available');if(_.has(groups,'false')){items=[].concat(groups[true],groups[false]);}
this.set('items',items);return this;},initialize:function(){var items=this.get('items');this.set('raw',items);},});return models;})(window,jQuery,_,Backbone);