import '../css/jetpack-admin-jitm.scss';jQuery(document).ready(function($){var templates={default:function(envelope){var html='<div class="jitm-card jitm-banner '+
(envelope.CTA.message?'has-call-to-action':'')+
' is-upgrade-premium '+
envelope.content.classes+
'" data-stats_url="'+
envelope.jitm_stats_url+
'">';html+='<div class="jitm-banner__content">';html+='<div class="jitm-banner__icon-plan">'+envelope.content.icon+'</div>';html+='<div class="jitm-banner__info">';html+='<div class="jitm-banner__title">'+envelope.content.message+'</div>';if(envelope.content.description&&envelope.content.description!==''){html+='<div class="jitm-banner__description">'+envelope.content.description;if(envelope.content.list.length>0){html+='<ul class="banner__list">';for(var i=0;i<envelope.content.list.length;i++){var text=envelope.content.list[i].item;if(envelope.content.list[i].url){text='<a href="'+
envelope.content.list[i].url+
'" target="_blank" rel="noopener noreferrer" data-module="'+
envelope.feature_class+
'" data-jptracks-name="nudge_item_click" data-jptracks-prop="jitm-'+
envelope.id+
'">'+
text+
'</a>';}
html+='<li>'+
'<svg class="gridicon gridicons-checkmark" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g>'+
'<path d="M9 19.414l-6.707-6.707 1.414-1.414L9 16.586 20.293 5.293l1.414 1.414" /></g></svg>'+
text+
'</li>';}}
html+='</div>';}
html+='</div>';html+='</div>';html+='<div class="jitm-banner__buttons_container">';if(envelope.activate_module){html+='<div class="jitm-banner__action" id="jitm-banner__activate">';html+='<a href="#" data-module="'+
envelope.activate_module+
'" type="button" class="jitm-button is-compact is-primary jptracks" data-jptracks-name="nudge_click" data-jptracks-prop="jitm-'+
envelope.id+
'-activate_module">'+
window.jitm_config.activate_module_text+
'</a>';html+='</div>';}
if(envelope.CTA.message){var ctaClasses='jitm-button is-compact jptracks';if(envelope.CTA.primary&&null===envelope.activate_module){ctaClasses+=' is-primary';}
var ajaxAction=envelope.CTA.ajax_action;html+='<div class="jitm-banner__action">';html+='<a href="'+
(envelope.CTA.hasOwnProperty('link')&&envelope.CTA.link.length?envelope.CTA.link:envelope.url)+
'" target="'+
(envelope.CTA.newWindow===false||ajaxAction?'_self':'_blank')+
'" rel="noopener noreferrer" title="'+
envelope.CTA.message+
'" data-module="'+
envelope.feature_class+
'" type="button" class="'+
ctaClasses+
'" data-jptracks-name="nudge_click" data-jptracks-prop="jitm-'+
envelope.id+
'" '+
(ajaxAction?'data-ajax-action="'+ajaxAction+'"':'')+
'>'+
envelope.CTA.message+
'</a>';html+='</div>';}
html+='</div>';if(envelope.is_dismissible){html+='<a href="#" data-module="'+
envelope.feature_class+
'" class="jitm-banner__dismiss"></a>';}
html+='</div>';return $(html);},};var setJITMContent=function($el,response,redirect){var template;var render=function($my_template){return function(e){e.preventDefault();$my_template.hide();$.ajax({url:window.jitm_config.api_root+'jetpack/v4/jitm',method:'POST',beforeSend:function(xhr){xhr.setRequestHeader('X-WP-Nonce',window.jitm_config.nonce);},data:{id:response.id,feature_class:response.feature_class,},});};};template=response.template;if(!template||!templates[template]){template='default';}
response.url=response.url+'&redirect='+redirect;var $template=templates[template](response);$template.find('.jitm-banner__dismiss').on('click',render($template));if($('#jp-admin-notices').length>0){$el.innerHTML=$template;if($('#jp-admin-notices').find('.jitm-card')){$('.jitm-card').replaceWith($template);}
$template.prependTo($('#jp-admin-notices'));}else{$el.replaceWith($template);}
$template.find('#jitm-banner__activate a').on('click',function(){var $activate_button=$(this);if($activate_button.attr('disabled')){return false;}
$.ajax({url:window.jitm_config.api_root+
'jetpack/v4/module/'+
$activate_button.data('module')+
'/active',method:'POST',beforeSend:function(xhr){xhr.setRequestHeader('X-WP-Nonce',$el.data('nonce'));$('#jitm-banner__activate a').text(window.jitm_config.activating_module_text);$('#jitm-banner__activate a').attr('disabled',true);},}).done(function(){$('#jitm-banner__activate a').text(window.jitm_config.activated_module_text);$('#jitm-banner__activate a').attr('disabled',true);setTimeout(function(){$template.fadeOut('slow');},2000);});});$template.find('.jitm-button[data-ajax-action]').on('click',function(e){e.preventDefault();var button=$(this);button.attr('disabled',true);$.post(window.ajaxurl,{action:button.data('ajax-action'),_nonce:$el.data('ajax-nonce'),}).done(function(){$template.fadeOut('slow');}).fail(function(){button.attr('disabled',false);});return false;});};var reFetch=function(){$('.jetpack-jitm-message').each(function(){var $el=$(this);var message_path=$el.data('message-path');var query=$el.data('query');var redirect=$el.data('redirect');var hash=location.hash;hash=hash.replace(/#\//,'_');if('_dashboard'!==hash){message_path=message_path.replace('toplevel_page_jetpack','toplevel_page_jetpack'+hash);}
var full_jp_logo_exists=$('.jetpack-logo__masthead').length?true:false;$.get(window.jitm_config.api_root+'jetpack/v4/jitm',{message_path:message_path,query:query,full_jp_logo_exists:full_jp_logo_exists,_wpnonce:$el.data('nonce'),}).then(function(response){if('object'===typeof response&&response['1']){response=[response['1']];}
if(0===response.length||!response[0].content){return;}
setJITMContent($el,response[0],redirect);});});};reFetch();$(window).on('hashchange',function(e){var newURL=e.originalEvent.newURL;if(newURL.indexOf('jetpack#/')>=0){var jitm_card=document.querySelector('.jitm-card');if(jitm_card){jitm_card.remove();}
reFetch();}});});