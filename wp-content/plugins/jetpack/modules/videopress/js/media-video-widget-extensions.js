window.wp=window.wp||{};(function(wp){if(wp.mediaWidgets){wp.mediaWidgets.controlConstructors.media_video.prototype.mapMediaToModelProps=(function(originalMapMediaToModelProps){return function(mediaFrameProps){var newProps,originalProps,videoPressGuid;originalProps=originalMapMediaToModelProps.call(this,mediaFrameProps);newProps=_.extend({},originalProps);if(mediaFrameProps.videopress&&mediaFrameProps.videopress.guid){videoPressGuid=mediaFrameProps.videopress.guid;}
if(!videoPressGuid&&mediaFrameProps.videopress_guid&&mediaFrameProps.videopress_guid.length){videoPressGuid=mediaFrameProps.videopress_guid[0];}
if(videoPressGuid){newProps=_.extend({},originalProps,{url:'https://videopress.com/v/'+videoPressGuid,attachment_id:0,});}
return newProps;};})(wp.mediaWidgets.controlConstructors.media_video.prototype.mapMediaToModelProps);wp.mediaWidgets.controlConstructors.media_video.prototype.isHostedVideo=(function(originalIsHostedVideo){return function(url){var parsedUrl=document.createElement('a');parsedUrl.href=url;if('videopress.com'===parsedUrl.hostname){return true;}
return originalIsHostedVideo.call(this,url);};})(wp.mediaWidgets.controlConstructors.media_video.prototype.isHostedVideo);}})(window.wp);