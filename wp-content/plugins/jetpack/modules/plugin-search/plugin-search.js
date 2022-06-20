var JetpackPSH={};(function($,jpsh){JetpackPSH={$pluginFilter:$('#plugin-filter'),getCard:function(){return document.querySelector('.plugin-card-jetpack-plugin-search');},trackEvent:function(eventName,feature,target){jpTracksAJAX.record_ajax_event(eventName,'click',{feature:feature}).always(function(){if('undefined'!==typeof target&&!!target.getAttribute('href')){window.location=target.getAttribute('href');}});},updateCardTitle:function(){var hint=JetpackPSH.getCard();if('object'===typeof hint&&null!==hint){var title=hint.querySelector('.column-name h3');title.outerHTML=title.outerHTML+'<strong>'+jetpackPluginSearch.poweredBy+'</strong>';}},moveActionLinks:function(){var hint=JetpackPSH.getCard();if('object'===typeof hint&&null!==hint){var descriptionContainer=hint.querySelector('.column-description');var descriptionText=descriptionContainer.querySelector('p:first-child');var actionLinks=hint.querySelector('.action-links');descriptionContainer.innerHTML=descriptionText.outerHTML+actionLinks.outerHTML;actionLinks.parentNode.removeChild(actionLinks);}},replaceCardBottom:function(){var hint=JetpackPSH.getCard();if('object'===typeof hint&&null!==hint){hint.querySelector('.plugin-card-bottom').outerHTML='<div class="jetpack-plugin-search__bottom"><img src="'+
jetpackPluginSearch.logo+
'" width="32" />'+
'<p class="jetpack-plugin-search__text">'+
jetpackPluginSearch.legend+
' <a class="jetpack-plugin-search__support_link" href="'+
jetpackPluginSearch.supportLink+
'" target="_blank" rel="noopener noreferrer" data-track="support_link" >'+
jetpackPluginSearch.supportText+
'</a>'+
'</p>'+
'</div>';var dismissLink=document.querySelector('.jetpack-plugin-search__dismiss');dismissLink.parentNode.parentNode.removeChild(dismissLink.parentNode);document.querySelector('.jetpack-plugin-search__bottom').appendChild(dismissLink);}},replaceOnNewResults:function(mutationsList){mutationsList.forEach(function(mutation){if('childList'===mutation.type&&1===document.querySelectorAll('.plugin-card-jetpack-plugin-search').length){JetpackPSH.updateCardTitle();JetpackPSH.moveActionLinks();JetpackPSH.replaceCardBottom();}});},dismiss:function(moduleName){document.getElementById('the-list').removeChild(JetpackPSH.getCard());$.ajax({url:jpsh.base_rest_url+'/hints',method:'post',beforeSend:function(xhr){xhr.setRequestHeader('X-WP-Nonce',jpsh.nonce);},data:JSON.stringify({hint:moduleName,}),contentType:'application/json',dataType:'json',}).done(function(){JetpackPSH.trackEvent('wpa_plugin_search_dismiss',moduleName);});},ajaxActivateModule:function(moduleName){var $moduleBtn=JetpackPSH.$pluginFilter.find('#plugin-select-activate');$moduleBtn.toggleClass('install-now updating-message');$moduleBtn.prop('disabled',true);$moduleBtn.text(jpsh.activating);var data={};data[moduleName]=true;$.ajax({url:jpsh.base_rest_url+'/settings',method:'post',beforeSend:function(xhr){xhr.setRequestHeader('X-WP-Nonce',jpsh.nonce);},data:JSON.stringify(data),contentType:'application/json',dataType:'json',}).done(function(){JetpackPSH.updateButton(moduleName);JetpackPSH.trackEvent('wpa_plugin_search_activate',moduleName);}).error(function(){$moduleBtn.toggleClass('install-now updating-message');});},updateButton:function(moduleName){$.ajax({url:jpsh.base_rest_url+'/module/'+moduleName,method:'get',beforeSend:function(xhr){xhr.setRequestHeader('X-WP-Nonce',jpsh.nonce);},dataType:'json',}).done(function(response){var $moduleBtn=JetpackPSH.$pluginFilter.find('#plugin-select-activate');$moduleBtn.prop('onclick',null).off('click');$moduleBtn.toggleClass('install-now updating-message');$moduleBtn.text(jpsh.activated);setTimeout(function(){var url='https://jetpack.com/redirect/?source=plugin-hint-learn-'+moduleName,label=jpsh.getStarted,classes='jetpack-plugin-search__primary button',track='configure';if(response.options&&0<Object.keys(response.options).length){url=$moduleBtn.data('configure-url');label=jpsh.manageSettings;classes+=' jetpack-plugin-search__configure';}else{var learnMore=document.querySelector('.jetpack-plugin-search__learn-more');learnMore.parentNode.removeChild(learnMore);classes+=' jetpack-plugin-search__get-started';track='get_started';}
$moduleBtn.replaceWith('<a id="plugin-select-settings" class="'+
classes+
'" href="'+
url+
'" data-module="'+
moduleName+
'" data-track="'+
track+
'">'+
label+
'</a>');},1000);});},init:function(){if(JetpackPSH.$pluginFilter.length<1){return;}
JetpackPSH.updateCardTitle();JetpackPSH.moveActionLinks();JetpackPSH.replaceCardBottom();var resultsObserver=new MutationObserver(JetpackPSH.replaceOnNewResults);resultsObserver.observe(document.getElementById('plugin-filter'),{childList:true});JetpackPSH.$pluginFilter.on('click','.jetpack-plugin-search__dismiss',function(event){event.preventDefault();JetpackPSH.dismiss($(this).data('module'));}).on('click','button#plugin-select-activate',function(event){event.preventDefault();JetpackPSH.ajaxActivateModule($(this).data('module'));}).on('click','.jetpack-plugin-search__primary',function(event){event.preventDefault();var $this=$(this);if($this.data('track')){JetpackPSH.trackEvent('wpa_plugin_search_'+$this.data('track'),$this.data('module'),$this.get(0));}}).on('click','.jetpack-plugin-search__learn-more',function(event){event.preventDefault();var $this=$(this);JetpackPSH.trackEvent('wpa_plugin_search_learn_more',$this.data('module'),$this.get(0));}).on('click','.jetpack-plugin-search__support_link',function(event){event.preventDefault();var $this=$(this);JetpackPSH.trackEvent('wpa_plugin_search_support_link',$this.data('module'),$this.get(0));});},};JetpackPSH.init();})(jQuery,jetpackPluginSearch);