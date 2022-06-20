window._tkq=window._tkq||[];let _user;const debug=console.error;function buildQuerystring(group,name){let uriComponent='';if('object'===typeof group){for(const key in group){uriComponent+='&x_'+encodeURIComponent(key)+'='+encodeURIComponent(group[key]);}}else{uriComponent='&x_'+encodeURIComponent(group)+'='+encodeURIComponent(name);}
return uriComponent;}
const analytics={initialize:function(userId,username){analytics.setUser(userId,username);analytics.identifyUser();},mc:{bumpStat:function(group,name){const uriComponent=buildQuerystring(group,name);new Image().src=document.location.protocol+
'//pixel.wp.com/g.gif?v=wpcom-no-pv'+
uriComponent+
'&t='+
Math.random();},},tracks:{recordEvent:function(eventName,eventProperties){eventProperties=eventProperties||{};if(eventName.indexOf('jetpack_')!==0){debug('- Event name must be prefixed by "jetpack_"');return;}
window._tkq.push(['recordEvent',eventName,eventProperties]);},recordPageView:function(urlPath){analytics.tracks.recordEvent('jetpack_page_view',{path:urlPath,});},},setUser:function(userId,username){_user={ID:userId,username:username};},identifyUser:function(){if(_user){window._tkq.push(['identifyUser',_user.ID,_user.username]);}},clearedIdentity:function(){window._tkq.push(['clearIdentity']);},};if(typeof module!=='undefined'){module.exports=analytics;}else{window.analytics=analytics;}