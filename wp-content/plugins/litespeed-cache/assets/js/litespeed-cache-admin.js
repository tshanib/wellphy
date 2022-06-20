var _litespeed_meta;var _litespeed_shell_interval=3;var _litespeed_shell_interval_range=[3,60];var _litespeed_shell_handle;var _litespeed_shell_display_handle;var _litespeed_crawler_url;var _litespeed_dots;(function($){'use strict';jQuery(document).ready(function(){$('[data-litespeed-cfm]').on('click',function(event){if(confirm($.trim($(this).data('litespeed-cfm')).replace(/\\n/g,"\n"))){return true;}
event.preventDefault();event.stopImmediatePropagation();return false;});if($('[data-litespeed-tab]').length>0){var litespeed_tab_current=document.cookie.replace(/(?:(?:^|.*;\s*)litespeed_tab\s*\=\s*([^;]*).*$)|^.*$/,"$1");if(window.location.hash.substr(1)){litespeed_tab_current=window.location.hash.substr(1);}
if(!litespeed_tab_current||!$('[data-litespeed-tab="'+litespeed_tab_current+'"]').length){litespeed_tab_current=$('[data-litespeed-tab]').first().data('litespeed-tab');}
litespeed_display_tab(litespeed_tab_current);$('[data-litespeed-tab]').on('click',function(event){litespeed_display_tab($(this).data('litespeed-tab'));document.cookie='litespeed_tab='+$(this).data('litespeed-tab');$(this).blur();});}
$('[name=purgeby]').on('change',function(event){$('[data-purgeby]').hide();$('[data-purgeby='+this.value+']').show();});$('#litespeed-crawl-url-btn').on('click',function(){if(!$(this).data('url')){return false;}
$('.litespeed-shell').removeClass('litespeed-hide');_litespeed_dots=window.setInterval(_litespeed_loading_dots,300);_litespeed_crawler_url=$(this).data('url');litespeed_fetch_meta();$(this).hide();});$('#litespeed_manual_trigger').on('click',function(event){$('#litespeed-loading-dot').before('<li>Manually Started</li>');_litespeed_shell_interval=_litespeed_shell_interval_range[0];litespeed_fetch_meta();});$(document).on('click','.lscwp-whm-notice .notice-dismiss',function(){$.get(litespeed_data.ajax_url_dismiss_whm);});$(document).on('click','.lscwp-notice-ruleconflict .notice-dismiss',function(){$.get(litespeed_data.ajax_url_dismiss_ruleconflict);});$('[litespeed-accesskey]').map(function(){var thiskey=$(this).attr('litespeed-accesskey');$(this).attr('title','Shortcut : '+thiskey.toLocaleUpperCase());var that=this;$(document).on('keydown',function(e){if($(":input:focus").length>0)return;if(event.metaKey)return;if(event.ctrlKey)return;if(event.altKey)return;if(event.shiftKey)return;if(litespeed_keycode(thiskey.charCodeAt(0)))$(that)[0].click();});});if($('input[name="LSCWP_CTRL"]').length>0){var btn=$('input.litespeed-duplicate-float');btn.clone().addClass('litespeed-float-submit').removeAttr('id').insertAfter(btn);}
if($('input[id="LSCWP_NONCE"]').length>0){$('input[id="LSCWP_NONCE"]').removeAttr('id');}
$('#litespeed-promo-done').on('click',function(event){$('.litespeed-banner-promo-full').slideUp();$.get(litespeed_data.ajax_url_promo+'&done=1');});$('#litespeed-promo-later').on('click',function(event){$('.litespeed-banner-promo-full').slideUp();$.get(litespeed_data.ajax_url_promo);});if($('[data-litespeed-readable]').length>0){$('[data-litespeed-readable]').each(function(index,el){var that=this;var $input=$(this).siblings('input[type="text"]');var txt=litespeed_readable_time($input.val());$(that).html(txt?'= '+txt:'');$input.on('keyup',function(event){var txt=litespeed_readable_time($(this).val());$(that).html(txt?'= '+txt:'');});});}
$('#litespeed_get_ip').on('click',function(e){$.ajax({url:litespeed_data.ajax_url_getIP,dataType:'json',beforeSend:function(xhr){xhr.setRequestHeader('X-WP-Nonce',litespeed_data.nonce);},success:function(data){console.log('[litespeed] get server IP response: '+data);$('#litespeed_server_ip').html(data);}});});if($('.litespeed-toggle').length>0){$('.litespeed-toggle').on('click',function(e){var crawler_id=$(this).attr("data-litespeed_crawler_id");var crawler_id=Number(crawler_id.split('-').pop());var that=this;$.ajax({url:litespeed_data.ajax_url_crawler_switch,dataType:'json',method:'POST',cache:false,data:{crawler_id:crawler_id},beforeSend:function(xhr){xhr.setRequestHeader('X-WP-Nonce',litespeed_data.nonce);},success:function(data){$(that).toggleClass('litespeed-toggle-btn-default litespeed-toggleoff',data==0).toggleClass('litespeed-toggle-btn-primary',data==1);console.log('litespeed-crawler-ajax: change Activate option');},error:function(xhr,error){console.log(xhr);console.log(error);console.log('litespeed-crawler-ajax: option failed to save due to some error');}});});}
if($('[data-litespeed-onlyonce]').length>0){$('[data-litespeed-onlyonce]').on('click',function(e){if($(this).hasClass('disabled')){e.preventDefault();}
$(this).addClass('disabled');});}});})(jQuery);function litespeed_plural($num,$txt)
{if($num>1)return $num+' '+$txt+'s';return $num+' '+$txt;}
function litespeed_readable_time(seconds)
{if(seconds<60){return '';}
var second=Math.floor(seconds%60);var minute=Math.floor((seconds/60)%60);var hour=Math.floor((seconds/3600)%24);var day=Math.floor((seconds/3600/24)%7);var week=Math.floor(seconds/3600/24/7);var str='';if(week)str+=' '+litespeed_plural(week,'week');if(day)str+=' '+litespeed_plural(day,'day');if(hour)str+=' '+litespeed_plural(hour,'hour');if(minute)str+=' '+litespeed_plural(minute,'minute');if(second)str+=' '+litespeed_plural(second,'second');return str;}
function litespeed_trigger_click(selector)
{jQuery(selector).trigger('click');}
function litespeed_keycode(num){var num=num||13;var code=window.event?event.keyCode:event.which;if(num==code)return true;return false;}
function litespeed_display_tab(tab){jQuery('[data-litespeed-tab]').removeClass('nav-tab-active');jQuery('[data-litespeed-tab="'+tab+'"]').addClass('nav-tab-active');jQuery('[data-litespeed-layout]').hide();jQuery('[data-litespeed-layout="'+tab+'"]').show();}
function lscwpEsiEnabled(the_checkbox,esi_ids){var rdonly=the_checkbox.checked?false:true;var len=esi_ids.length;for(var i=0;i<len;i++){var node_id='saved_'+esi_ids[i].getAttribute('id');var node_val=esi_ids[i].getAttribute('value');var prev=document.getElementById(node_id);if(rdonly===false){esi_ids[i].removeAttribute('disabled');if(prev){esi_ids[i].removeChild(prev);}
continue;}
esi_ids[i].setAttribute('disabled',true);if(prev!==null){if(esi_ids[i].checked){prev.setAttribute("value",node_val);}
else{esi_ids[i].removeChild(prev);}
continue;}
else if(esi_ids[i].checked===false){continue;}
var hid=document.createElement("INPUT");hid.setAttribute("type","hidden");hid.setAttribute("name",esi_ids[i].getAttribute('name'));hid.setAttribute("value",node_val);hid.setAttribute("id",node_id);esi_ids[i].appendChild(hid);}}
function litespeed_append_param(uri,key,val){var re=new RegExp("([?&])"+key+"=.*?(&|$)","i");var separator=uri.indexOf('?')!==-1?"&":"?";if(uri.match(re)){return uri.replace(re,'$1'+key+"="+val+'$2');}
else{return uri+separator+key+"="+val;}}
function litespeed_pulse(){jQuery('#litespeed-shell-icon').animate({width:27,height:34,opacity:1},700,function(){jQuery('#litespeed-shell-icon').animate({width:23,height:29,opacity:0.5},700);});}
function litespeed_fetch_meta(){window.clearTimeout(_litespeed_shell_handle);jQuery('#litespeed-loading-dot').text('');jQuery.ajaxSetup({cache:false});jQuery.getJSON(_litespeed_crawler_url,function(meta){litespeed_pulse();var changed=false;if(meta&&'list_size'in meta){new_meta=meta.list_size+' '+meta.file_time+' '+meta.curr_crawler+' '+meta.last_pos+' '+meta.last_count+' '+meta.last_start_time+' '+meta.is_running;if(new_meta!=_litespeed_meta){_litespeed_meta=new_meta;changed=true;string=_litespeed_build_meta(meta);jQuery('#litespeed-loading-dot').before(string);log_length=jQuery('.litespeed-shell-body li').length;if(log_length>50){jQuery('.litespeed-shell-body li:lt('+(log_length-50)+')').remove();}
jQuery('.litespeed-shell-body').stop().animate({scrollTop:jQuery('.litespeed-shell-body')[0].scrollHeight},800);}
_litespeed_adjust_interval(changed);}
litespeed_display_interval_reset();_litespeed_shell_handle=window.setTimeout(_litespeed_dynamic_timeout,_litespeed_shell_interval*1000);});}
function _litespeed_adjust_interval(changed){if(changed){_litespeed_shell_interval-=Math.ceil(_litespeed_shell_interval/2);}
else{_litespeed_shell_interval++;}
if(_litespeed_shell_interval<_litespeed_shell_interval_range[0]){_litespeed_shell_interval=_litespeed_shell_interval_range[0];}
if(_litespeed_shell_interval>_litespeed_shell_interval_range[1]){_litespeed_shell_interval=_litespeed_shell_interval_range[1];}}
function _litespeed_build_meta(meta){var string='<li>'+litespeed_date(meta.last_update_time)+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size: '+meta.list_size+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crawler: #'+(meta.curr_crawler*1+1)+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Position: '+(meta.last_pos*1+1)+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Threads: '+meta.last_count+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status: ';if(meta.is_running){string+='crawling, '+meta.last_status;}
else{string+=meta.end_reason?meta.end_reason:'-';}
string+='</li>';return string;}
function _litespeed_dynamic_timeout(){litespeed_fetch_meta();}
function litespeed_display_interval_reset(){window.clearInterval(_litespeed_shell_display_handle);jQuery('.litespeed-shell-header-bar').data('num',_litespeed_shell_interval);_litespeed_shell_display_handle=window.setInterval(_litespeed_display_interval,1000);jQuery('.litespeed-shell-header-bar').stop().animate({width:'100%'},500,function(){jQuery('.litespeed-shell-header-bar').css('width','0%');});}
function _litespeed_display_interval(){var num=jQuery('.litespeed-shell-header-bar').data('num');jQuery('.litespeed-shell-header-bar').stop().animate({width:litespeed_get_percent(num,_litespeed_shell_interval)+'%'},1000);if(num>0)num--;if(num<0)num=0;jQuery('.litespeed-shell-header-bar').data('num',num);}
function litespeed_get_percent(num1,num2){num1=num1*1;num2=num2*1;num=(num2-num1)/num2;return num*100;}
function _litespeed_loading_dots(){jQuery('#litespeed-loading-dot').append('.');}
function litespeed_date(timestamp){var a=new Date(timestamp*1000);var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var year=a.getFullYear();var month=months[a.getMonth()];var date=litespeed_add_zero(a.getDate());var hour=litespeed_add_zero(a.getHours());var min=litespeed_add_zero(a.getMinutes());var sec=litespeed_add_zero(a.getSeconds());var time=date+' '+month+' '+year+' '+hour+':'+min+':'+sec;return time;}
function litespeed_add_zero(i){if(i<10){i="0"+i;}
return i;}