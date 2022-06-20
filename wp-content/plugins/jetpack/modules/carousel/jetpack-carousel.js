(function(){'use strict';var swiper;var util=(function(){var noop=function(){};function texturize(text){text=text+'';text=text.replace(/'/g,'&#8217;').replace(/&#039;/g,'&#8217;');text=text.replace(/"/g,'&#8221;').replace(/&#034;/g,'&#8221;').replace(/&quot;/g,'&#8221;').replace(/[\u201D]/g,'&#8221;');text=text.replace(/([\w]+)=&#[\d]+;(.+?)&#[\d]+;/g,'$1="$2"');return text.trim();}
function applyReplacements(text,replacements){if(!text){return;}
if(!replacements){return text;}
return text.replace(/{(\d+)}/g,function(match,number){return typeof replacements[number]!=='undefined'?replacements[number]:match;});}
function getBackgroundImage(imgEl){var canvas=document.createElement('canvas'),context=canvas.getContext&&canvas.getContext('2d');if(!imgEl){return;}
context.filter='blur(20px) ';context.drawImage(imgEl,0,0);var url=canvas.toDataURL('image/png');canvas=null;return url;}
return{noop:noop,texturize:texturize,applyReplacements:applyReplacements,getBackgroundImage:getBackgroundImage,};})();var domUtil=(function(){function matches(el,sel){if(Element.prototype.matches){return el.matches(sel);}
if(Element.prototype.msMatchesSelector){return el.msMatchesSelector(sel);}}
function closest(el,sel){if(el.closest){return el.closest(sel);}
var current=el;do{if(matches(current,sel)){return current;}
current=current.parentElement||current.parentNode;}while(current!==null&&current.nodeType===1);return null;}
function hide(el){if(el){el.style.display='none';}}
function show(el){if(el){el.style.display='block';}}
function fade(el,start,end,callback){if(!el){return callback();}
el.style.removeProperty('display');el.style.opacity=start;el.style.transition='opacity 0.2s';el.style.pointerEvents='none';var finished=function(e){if(e.target===el&&e.propertyName==='opacity'){el.style.removeProperty('transition');el.style.removeProperty('opacity');el.style.removeProperty('pointer-events');el.removeEventListener('transitionend',finished);el.removeEventListener('transitioncancel',finished);callback();}};requestAnimationFrame(function(){requestAnimationFrame(function(){el.addEventListener('transitionend',finished);el.addEventListener('transitioncancel',finished);el.style.opacity=end;});});}
function fadeIn(el,callback){callback=callback||util.noop;fade(el,'0','1',callback);}
function fadeOut(el,callback){callback=callback||util.noop;fade(el,'1','0',function(){if(el){el.style.display='none';}
callback();});}
function emitEvent(el,type,detail){var e;try{e=new CustomEvent(type,{bubbles:true,cancelable:true,detail:detail||null,});}catch(err){e=document.createEvent('CustomEvent');e.initCustomEvent(type,true,true,detail||null);}
el.dispatchEvent(e);}
function easeInOutQuad(num){return num<0.5?2*num*num:1-Math.pow(-2*num+2,2)/2;}
function getFooterClearance(container){var footer=container.querySelector('.jp-carousel-info-footer');var infoArea=container.querySelector('.jp-carousel-info-extra');var contentArea=container.querySelector('.jp-carousel-info-content-wrapper');if(footer&&infoArea&&contentArea){var styles=window.getComputedStyle(infoArea);var padding=parseInt(styles.paddingTop,10)+parseInt(styles.paddingBottom,10);padding=isNaN(padding)?0:padding;return contentArea.offsetHeight+footer.offsetHeight+padding;}
return 0;}
function isTouch(){return('ontouchstart'in window||(window.DocumentTouch&&document instanceof DocumentTouch));}
function scrollToElement(el,container,callback){if(!el||!container){if(callback){return callback();}
return;}
var infoArea=container.querySelector('.jp-carousel-info-extra');if(infoArea){infoArea.style.minHeight=window.innerHeight-64+'px';}
var isScrolling=true;var startTime=Date.now();var duration=300;var originalPosition=container.scrollTop;var targetPosition=Math.max(0,el.offsetTop-Math.max(0,window.innerHeight-getFooterClearance(container)));var distance=targetPosition-container.scrollTop;distance=Math.min(distance,container.scrollHeight-window.innerHeight);function stopScroll(){isScrolling=false;}
function runScroll(){var now=Date.now();var progress=easeInOutQuad((now-startTime)/duration);progress=progress>1?1:progress;var newVal=progress*distance;container.scrollTop=originalPosition+newVal;if(now<=startTime+duration&&isScrolling){return requestAnimationFrame(runScroll);}
if(callback){callback();}
if(infoArea){infoArea.style.minHeight='';}
isScrolling=false;container.removeEventListener('wheel',stopScroll);}
container.addEventListener('wheel',stopScroll);runScroll();}
function getJSONAttribute(el,attr){if(!el||!el.hasAttribute(attr)){return undefined;}
try{return JSON.parse(el.getAttribute(attr));}catch(e){return undefined;}}
function convertToPlainText(html){var dummy=document.createElement('div');dummy.textContent=html;return dummy.innerHTML;}
function stripHTML(text){return text.replace(/<[^>]*>?/gm,'');}
return{closest:closest,matches:matches,hide:hide,show:show,fadeIn:fadeIn,fadeOut:fadeOut,scrollToElement:scrollToElement,getJSONAttribute:getJSONAttribute,convertToPlainText:convertToPlainText,stripHTML:stripHTML,emitEvent:emitEvent,isTouch:isTouch,};})();function init(){var commentInterval;var screenPadding;var originalOverflow;var originalHOverflow;var scrollPos;var lastKnownLocationHash='';var isUserTyping=false;var gallerySelector='div.gallery, div.tiled-gallery, ul.wp-block-gallery, ul.blocks-gallery-grid, '+
'figure.wp-block-gallery.has-nested-images, div.wp-block-jetpack-tiled-gallery, a.single-image-gallery';var galleryItemSelector='.gallery-item, .tiled-gallery-item, .blocks-gallery-item, '+' .tiled-gallery__item';var itemSelector=galleryItemSelector+', .wp-block-image';var carousel={};var stat=typeof wpcom!=='undefined'&&wpcom.carousel&&wpcom.carousel.stat?wpcom.carousel.stat:util.noop;var pageview=typeof wpcom!=='undefined'&&wpcom.carousel&&wpcom.carousel.pageview?wpcom.carousel.pageview:util.noop;function handleKeyboardEvent(e){if(!isUserTyping){switch(e.which){case 38:e.preventDefault();carousel.overlay.scrollTop-=100;break;case 40:e.preventDefault();carousel.overlay.scrollTop+=100;break;case 39:e.preventDefault();swiper.slideNext();break;case 37:case 8:e.preventDefault();swiper.slidePrev();break;case 27:e.preventDefault();closeCarousel();break;default:break;}}}
function disableKeyboardNavigation(){isUserTyping=true;}
function enableKeyboardNavigation(){isUserTyping=false;}
function calculatePadding(){var baseScreenPadding=110;screenPadding=baseScreenPadding;if(window.innerWidth<=760){screenPadding=Math.round((window.innerWidth/760)*baseScreenPadding);if(screenPadding<40&&domUtil.isTouch()){screenPadding=0;}}}
function initializeCarousel(){if(!carousel.overlay){carousel.overlay=document.querySelector('.jp-carousel-overlay');carousel.container=carousel.overlay.querySelector('.jp-carousel-wrap');carousel.gallery=carousel.container.querySelector('.jp-carousel');carousel.info=carousel.overlay.querySelector('.jp-carousel-info');carousel.caption=carousel.info.querySelector('.jp-carousel-caption');carousel.commentField=carousel.overlay.querySelector('#jp-carousel-comment-form-comment-field');carousel.emailField=carousel.overlay.querySelector('#jp-carousel-comment-form-email-field');carousel.authorField=carousel.overlay.querySelector('#jp-carousel-comment-form-author-field');carousel.urlField=carousel.overlay.querySelector('#jp-carousel-comment-form-url-field');calculatePadding();[carousel.commentField,carousel.emailField,carousel.authorField,carousel.urlField,].forEach(function(field){if(field){field.addEventListener('focus',disableKeyboardNavigation);field.addEventListener('blur',enableKeyboardNavigation);}});carousel.overlay.addEventListener('click',function(e){var target=e.target;var isTargetCloseHint=!!domUtil.closest(target,'.jp-carousel-close-hint');var isSmallScreen=!!window.matchMedia('(max-device-width: 760px)').matches;if(target===carousel.overlay){if(isSmallScreen){return;}else{closeCarousel();}}else if(isTargetCloseHint){closeCarousel();}else if(target.classList.contains('jp-carousel-image-download')){stat('download_original_click');}else if(target.classList.contains('jp-carousel-comment-login')){handleCommentLoginClick(e);}else if(domUtil.closest(target,'#jp-carousel-comment-form-container')){handleCommentFormClick(e);}else if(domUtil.closest(target,'.jp-carousel-photo-icons-container')||target.classList.contains('jp-carousel-photo-title')){handleFooterElementClick(e);}else if(!domUtil.closest(target,'.jp-carousel-info')){return;}});window.addEventListener('keydown',handleKeyboardEvent);carousel.overlay.addEventListener('jp_carousel.afterOpen',function(){enableKeyboardNavigation();if(carousel.slides.length<=1){return;}
if(carousel.slides.length<=5){domUtil.show(carousel.info.querySelector('.jp-swiper-pagination'));}else{domUtil.show(carousel.info.querySelector('.jp-carousel-pagination'));}});carousel.overlay.addEventListener('jp_carousel.beforeClose',function(){disableKeyboardNavigation();document.documentElement.style.removeProperty('height');if(swiper){swiper.enable();}
domUtil.hide(carousel.info.querySelector('.jp-swiper-pagination'));domUtil.hide(carousel.info.querySelector('.jp-carousel-pagination'));});carousel.overlay.addEventListener('jp_carousel.afterClose',function(){if(window.history.pushState){history.pushState('',document.title,window.location.pathname+window.location.search);}else{window.location.href='';}
lastKnownLocationHash='';carousel.isOpen=false;});carousel.overlay.addEventListener('touchstart',function(e){if(e.touches.length>1){e.preventDefault();}});}}
function handleCommentLoginClick(){var slide=carousel.currentSlide;var attachmentId=slide?slide.attrs.attachmentId:'0';window.location.href=jetpackCarouselStrings.login_url+'%23jp-carousel-'+attachmentId;}
function updatePostResults(msg,isSuccess){var results=carousel.overlay.querySelector('#jp-carousel-comment-post-results');var elClass='jp-carousel-comment-post-'+(isSuccess?'success':'error');results.innerHTML='<span class="'+elClass+'">'+msg+'</span>';domUtil.hide(carousel.overlay.querySelector('#jp-carousel-comment-form-spinner'));carousel.overlay.querySelector('#jp-carousel-comment-form').classList.remove('jp-carousel-is-disabled');domUtil.show(results);}
function handleCommentFormClick(e){var target=e.target;var data=domUtil.getJSONAttribute(carousel.container,'data-carousel-extra')||{};var attachmentId=carousel.currentSlide.attrs.attachmentId;var wrapper=document.querySelector('#jp-carousel-comment-form-submit-and-info-wrapper');var spinner=document.querySelector('#jp-carousel-comment-form-spinner');var submit=document.querySelector('#jp-carousel-comment-form-button-submit');var form=document.querySelector('#jp-carousel-comment-form');if(carousel.commentField&&carousel.commentField.getAttribute('id')===target.getAttribute('id')){disableKeyboardNavigation();domUtil.show(wrapper);}else if(domUtil.matches(target,'input[type="submit"]')){e.preventDefault();e.stopPropagation();domUtil.show(spinner);form.classList.add('jp-carousel-is-disabled');var ajaxData={action:'post_attachment_comment',nonce:jetpackCarouselStrings.nonce,blog_id:data.blog_id,id:attachmentId,comment:carousel.commentField.value,};if(!ajaxData.comment.length){updatePostResults(jetpackCarouselStrings.no_comment_text,false);return;}
if(Number(jetpackCarouselStrings.is_logged_in)!==1){ajaxData.email=carousel.emailField.value;ajaxData.author=carousel.authorField.value;ajaxData.url=carousel.urlField.value;if(Number(jetpackCarouselStrings.require_name_email)===1){if(!ajaxData.email.length||!ajaxData.email.match('@')){updatePostResults(jetpackCarouselStrings.no_comment_email,false);return;}else if(!ajaxData.author.length){updatePostResults(jetpackCarouselStrings.no_comment_author,false);return;}}}
var xhr=new XMLHttpRequest();xhr.open('POST',jetpackCarouselStrings.ajaxurl,true);xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');xhr.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE&&this.status>=200&&this.status<300){var response;try{response=JSON.parse(this.response);}catch(error){updatePostResults(jetpackCarouselStrings.comment_post_error,false);return;}
if(response.comment_status==='approved'){updatePostResults(jetpackCarouselStrings.comment_approved,true);}else if(response.comment_status==='unapproved'){updatePostResults(jetpackCarouselStrings.comment_unapproved,true);}else{updatePostResults(jetpackCarouselStrings.comment_post_error,false);}
clearCommentTextAreaValue();fetchComments(attachmentId);submit.value=jetpackCarouselStrings.post_comment;domUtil.hide(spinner);form.classList.remove('jp-carousel-is-disabled');}else{updatePostResults(jetpackCarouselStrings.comment_post_error,false);}};var params=[];for(var item in ajaxData){if(item){var encoded=encodeURIComponent(item)+'='+encodeURIComponent(ajaxData[item]);params.push(encoded.replace(/%20/g,'+'));}}
var encodedData=params.join('&');xhr.send(encodedData);}}
function handleFooterElementClick(e){e.preventDefault();var target=e.target;var extraInfoContainer=carousel.info.querySelector('.jp-carousel-info-extra');var photoMetaContainer=carousel.info.querySelector('.jp-carousel-image-meta');var commentsContainer=carousel.info.querySelector('.jp-carousel-comments-wrapper');var infoIcon=carousel.info.querySelector('.jp-carousel-icon-info');var commentsIcon=carousel.info.querySelector('.jp-carousel-icon-comments');function handleInfoToggle(){if(commentsIcon){commentsIcon.classList.remove('jp-carousel-selected');}
infoIcon.classList.toggle('jp-carousel-selected');if(commentsContainer){commentsContainer.classList.remove('jp-carousel-show');}
if(photoMetaContainer){photoMetaContainer.classList.toggle('jp-carousel-show');if(photoMetaContainer.classList.contains('jp-carousel-show')){extraInfoContainer.classList.add('jp-carousel-show');}else{extraInfoContainer.classList.remove('jp-carousel-show');}}}
function handleCommentToggle(){if(infoIcon){infoIcon.classList.remove('jp-carousel-selected');}
commentsIcon.classList.toggle('jp-carousel-selected');if(photoMetaContainer){photoMetaContainer.classList.remove('jp-carousel-show');}
if(commentsContainer){commentsContainer.classList.toggle('jp-carousel-show');if(commentsContainer.classList.contains('jp-carousel-show')){extraInfoContainer.classList.add('jp-carousel-show');}else{extraInfoContainer.classList.remove('jp-carousel-show');}}}
if(domUtil.closest(target,'.jp-carousel-icon-info')||target.classList.contains('jp-carousel-photo-title')){if(photoMetaContainer&&photoMetaContainer.classList.contains('jp-carousel-show')){domUtil.scrollToElement(carousel.overlay,carousel.overlay,handleInfoToggle);}else{handleInfoToggle();domUtil.scrollToElement(carousel.info,carousel.overlay);}}
if(domUtil.closest(target,'.jp-carousel-icon-comments')){if(commentsContainer&&commentsContainer.classList.contains('jp-carousel-show')){domUtil.scrollToElement(carousel.overlay,carousel.overlay,handleCommentToggle);}else{handleCommentToggle();domUtil.scrollToElement(carousel.info,carousel.overlay);}}}
function processSingleImageGallery(){var images=document.querySelectorAll('a img[data-attachment-id]');Array.prototype.forEach.call(images,function(image){var link=image.parentElement;var container=link.parentElement;if(container.classList.contains('gallery-icon')){return;}
if(domUtil.closest(container,galleryItemSelector)){return;}
if(!link.hasAttribute('href')){return;}
var valid=false;if(link.getAttribute('href').split('?')[0]===image.getAttribute('data-orig-file').split('?')[0]&&Number(jetpackCarouselStrings.single_image_gallery_media_file)===1){valid=true;}
if(link.getAttribute('href')===image.getAttribute('data-permalink')){valid=true;}
if(!valid){return;}
link.classList.add('single-image-gallery');link.setAttribute('data-carousel-extra',JSON.stringify({blog_id:Number(jetpackCarouselStrings.blog_id),}));});}
function testForData(el){return!!(el&&el.getAttribute('data-carousel-extra'));}
function openOrSelectSlide(gal,index){if(!carousel.isOpen){loadSwiper(gal,{startIndex:index});}else{selectSlideAtIndex(index);swiper.slideTo(index+1);}}
function selectSlideAtIndex(index){if(!index||index<0||index>carousel.slides.length){index=0;}
carousel.currentSlide=carousel.slides[index];var current=carousel.currentSlide;var attachmentId=current.attrs.attachmentId;var infoIcon=carousel.info.querySelector('.jp-carousel-icon-info');var commentsIcon=carousel.info.querySelector('.jp-carousel-icon-comments');if((infoIcon&&infoIcon.classList.contains('jp-carousel-selected'))||(commentsIcon&&commentsIcon.classList.contains('jp-carousel-selected'))){if(carousel.overlay.scrollTop!==0){domUtil.scrollToElement(carousel.overlay,carousel.overlay);}}
loadFullImage(carousel.slides[index]);if(Number(jetpackCarouselStrings.display_background_image)===1&&!carousel.slides[index].backgroundImage){loadBackgroundImage(carousel.slides[index]);}
domUtil.hide(carousel.caption);updateTitleCaptionAndDesc({caption:current.attrs.caption,title:current.attrs.title,desc:current.attrs.desc,});var imageMeta=carousel.slides[index].attrs.imageMeta;updateExif(imageMeta);updateFullSizeLink(current);if(Number(jetpackCarouselStrings.display_comments)===1){testCommentsOpened(carousel.slides[index].attrs.commentsOpened);fetchComments(attachmentId);domUtil.hide(carousel.info.querySelector('#jp-carousel-comment-post-results'));}
var pagination=carousel.info.querySelector('.jp-carousel-pagination');if(pagination&&carousel.slides.length>5){var currentPage=index+1;pagination.innerHTML='<span>'+currentPage+' / '+carousel.slides.length+'</span>';}
if(jetpackCarouselStrings.stats){new Image().src=document.location.protocol+
'//pixel.wp.com/g.gif?'+
jetpackCarouselStrings.stats+
'&post='+
encodeURIComponent(attachmentId)+
'&rand='+
Math.random();}
pageview(attachmentId);window.location.hash=lastKnownLocationHash='#jp-carousel-'+attachmentId;}
function restoreScroll(){window.scrollTo(window.scrollX||window.pageXOffset||0,scrollPos||0);}
function closeCarousel(){document.body.style.overflow=originalOverflow;document.documentElement.style.overflow=originalHOverflow;clearCommentTextAreaValue();disableKeyboardNavigation();domUtil.emitEvent(carousel.overlay,'jp_carousel.beforeClose');restoreScroll();swiper.destroy();carousel.isOpen=false;carousel.slides=[];carousel.currentSlide=undefined;carousel.gallery.innerHTML='';domUtil.fadeOut(carousel.overlay,function(){domUtil.emitEvent(carousel.overlay,'jp_carousel.afterClose');});}
function calculateMaxSlideDimensions(){return{width:window.innerWidth,height:window.innerHeight-64,};}
function selectBestImageUrl(args){if(typeof args!=='object'){args={};}
if(typeof args.origFile==='undefined'){return '';}
if(typeof args.origWidth==='undefined'||typeof args.maxWidth==='undefined'){return args.origFile;}
if(typeof args.mediumFile==='undefined'||typeof args.largeFile==='undefined'){return args.origFile;}
var imageLinkParser=document.createElement('a');imageLinkParser.href=args.largeFile;var isPhotonUrl=/^i[0-2]\.wp\.com$/i.test(imageLinkParser.hostname);var mediumSizeParts=getImageSizeParts(args.mediumFile,args.origWidth,isPhotonUrl);var largeSizeParts=getImageSizeParts(args.largeFile,args.origWidth,isPhotonUrl);var largeWidth=parseInt(largeSizeParts[0],10);var largeHeight=parseInt(largeSizeParts[1],10);var mediumWidth=parseInt(mediumSizeParts[0],10);var mediumHeight=parseInt(mediumSizeParts[1],10);args.origMaxWidth=args.maxWidth;args.origMaxHeight=args.maxHeight;if(typeof window.devicePixelRatio!=='undefined'&&window.devicePixelRatio>1){args.maxWidth=args.maxWidth*window.devicePixelRatio;args.maxHeight=args.maxHeight*window.devicePixelRatio;}
if(largeWidth>=args.maxWidth||largeHeight>=args.maxHeight){return args.largeFile;}
if(mediumWidth>=args.maxWidth||mediumHeight>=args.maxHeight){return args.mediumFile;}
if(isPhotonUrl){var largeFileIndex=args.largeFile.lastIndexOf('?');var origPhotonUrl=args.largeFile;if(largeFileIndex!==-1){origPhotonUrl=args.largeFile.substring(0,largeFileIndex);if(args.origWidth>args.maxWidth||args.origHeight>args.maxHeight){args.origMaxWidth=args.maxWidth*2;args.origMaxHeight=args.maxHeight*2;origPhotonUrl+='?fit='+args.origMaxWidth+'%2C'+args.origMaxHeight;}}
return origPhotonUrl;}
return args.origFile;}
function getImageSizeParts(file,origWidth,isPhotonUrl){var size=isPhotonUrl?file.replace(/.*=([\d]+%2C[\d]+).*$/,'$1'):file.replace(/.*-([\d]+x[\d]+)\..+$/,'$1');var sizeParts=size!==file?isPhotonUrl?size.split('%2C'):size.split('x'):[origWidth,0];if(sizeParts[0]==='9999'){sizeParts[0]='0';}
if(sizeParts[1]==='9999'){sizeParts[1]='0';}
return sizeParts;}
function formatShutterSpeed(speed){var denominator;if(speed>=1){return Math.round(speed*10)/10+'s';}
denominator=Math.round(1/speed);return '1/'+denominator+'s';}
function parseTitleOrDesc(value){if(!value.match(' ')&&value.match('_')){return '';}
return value;}
function updateTitleCaptionAndDesc(data){var caption='';var title='';var desc='';var captionMainElement;var captionInfoExtraElement;var titleElement;var descriptionElement;captionMainElement=carousel.overlay.querySelector('.jp-carousel-photo-caption');captionInfoExtraElement=carousel.overlay.querySelector('.jp-carousel-caption');titleElement=carousel.overlay.querySelector('.jp-carousel-photo-title');descriptionElement=carousel.overlay.querySelector('.jp-carousel-photo-description');domUtil.hide(captionMainElement);domUtil.hide(captionInfoExtraElement);domUtil.hide(titleElement);domUtil.hide(descriptionElement);caption=parseTitleOrDesc(data.caption)||'';title=parseTitleOrDesc(data.title)||'';desc=parseTitleOrDesc(data.desc)||'';if(caption||title||desc){if(caption){captionMainElement.innerHTML=caption;captionInfoExtraElement.innerHTML=caption;domUtil.show(captionMainElement);domUtil.show(captionInfoExtraElement);}
if(domUtil.stripHTML(caption)===domUtil.stripHTML(title)){title='';}
if(domUtil.stripHTML(caption)===domUtil.stripHTML(desc)){desc='';}
if(domUtil.stripHTML(title)===domUtil.stripHTML(desc)){desc='';}
if(desc){descriptionElement.innerHTML=desc;domUtil.show(descriptionElement);if(!title&&!caption){captionMainElement.innerHTML=domUtil.stripHTML(desc);domUtil.show(captionMainElement);}}
if(title){var plainTitle=domUtil.stripHTML(title);titleElement.innerHTML=plainTitle;if(!caption){captionMainElement.innerHTML=plainTitle;captionInfoExtraElement.innerHTML=plainTitle;domUtil.show(captionMainElement);}
domUtil.show(titleElement);}}}
function updateExif(meta){if(!meta||Number(jetpackCarouselStrings.display_exif)!==1){return false;}
var ul=carousel.info.querySelector('.jp-carousel-image-meta ul.jp-carousel-image-exif');var html='';for(var key in meta){var val=meta[key];var metaKeys=jetpackCarouselStrings.meta_data||[];if(parseFloat(val)===0||!val.length||metaKeys.indexOf(key)===-1){continue;}
switch(key){case 'focal_length':val=val+'mm';break;case 'shutter_speed':val=formatShutterSpeed(val);break;case 'aperture':val='f/'+val;break;}
html+='<li><h5>'+jetpackCarouselStrings[key]+'</h5>'+val+'</li>';}
ul.innerHTML=html;ul.style.removeProperty('display');}
function updateFullSizeLink(currentSlide){if(!currentSlide){return false;}
var original;var origSize=[currentSlide.attrs.origWidth,currentSlide.attrs.origHeight];var imageLinkParser=document.createElement('a');imageLinkParser.href=currentSlide.attrs.src.replace(/\?.+$/,'');if(imageLinkParser.hostname.match(/^i[\d]{1}\.wp\.com$/i)!==null){original=imageLinkParser.href;}else{original=currentSlide.attrs.origFile.replace(/\?.+$/,'');}
var downloadText=carousel.info.querySelector('.jp-carousel-download-text');var permalink=carousel.info.querySelector('.jp-carousel-image-download');downloadText.innerHTML=util.applyReplacements(jetpackCarouselStrings.download_original,origSize);permalink.setAttribute('href',original);permalink.style.removeProperty('display');}
function testCommentsOpened(opened){var commentForm=carousel.container.querySelector('.jp-carousel-comment-form-container');var isOpened=parseInt(opened,10)===1;if(isOpened){domUtil.fadeIn(commentForm);}else{domUtil.fadeOut(commentForm);}}
function fetchComments(attachmentId,offset){var shouldClear=offset===undefined;var commentsIndicator=carousel.info.querySelector('.jp-carousel-icon-comments .jp-carousel-has-comments-indicator');commentsIndicator.classList.remove('jp-carousel-show');clearInterval(commentInterval);if(!attachmentId){return;}
if(!offset||offset<1){offset=0;}
var comments=carousel.info.querySelector('.jp-carousel-comments');var commentsLoading=carousel.info.querySelector('#jp-carousel-comments-loading');domUtil.show(commentsLoading);if(shouldClear){domUtil.hide(comments);comments.innerHTML='';}
var xhr=new XMLHttpRequest();var url=jetpackCarouselStrings.ajaxurl+
'?action=get_attachment_comments'+
'&nonce='+
jetpackCarouselStrings.nonce+
'&id='+
attachmentId+
'&offset='+
offset;xhr.open('GET',url);xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');var onError=function(){domUtil.fadeIn(comments);domUtil.fadeOut(commentsLoading);};xhr.onload=function(){if(!carousel.currentSlide||carousel.currentSlide.attrs.attachmentId!==attachmentId){return;}
var isSuccess=xhr.status>=200&&xhr.status<300;var data;try{data=JSON.parse(xhr.responseText);}catch(e){}
if(!isSuccess||!data||!Array.isArray(data)){return onError();}
if(shouldClear){comments.innerHTML='';}
for(var i=0;i<data.length;i++){var entry=data[i];var comment=document.createElement('div');comment.classList.add('jp-carousel-comment');comment.setAttribute('id','jp-carousel-comment-'+entry.id);comment.innerHTML='<div class="comment-gravatar">'+
entry.gravatar_markup+
'</div>'+
'<div class="comment-content">'+
'<div class="comment-author">'+
entry.author_markup+
'</div>'+
'<div class="comment-date">'+
entry.date_gmt+
'</div>'+
entry.content+
'</div>';comments.appendChild(comment);clearInterval(commentInterval);commentInterval=setInterval(function(){if(carousel.container.scrollTop+150>window.innerHeight){fetchComments(attachmentId,offset+10);clearInterval(commentInterval);}},300);}
if(data.length>0){domUtil.show(comments);commentsIndicator.innerText=data.length;commentsIndicator.classList.add('jp-carousel-show');}
domUtil.hide(commentsLoading);};xhr.onerror=onError;xhr.send();}
function loadFullImage(slide){var el=slide.el;var attrs=slide.attrs;var image=el.querySelector('img');if(!image.hasAttribute('data-loaded')){var hasPreview=!!attrs.previewImage;var thumbSize=attrs.thumbSize;if(!hasPreview||(thumbSize&&el.offsetWidth>thumbSize.width)){image.src=attrs.src;}else{image.src=attrs.previewImage;}
image.setAttribute('itemprop','image');image.setAttribute('data-loaded',1);}}
function loadBackgroundImage(slide){var currentSlide=slide.el;if(swiper&&swiper.slides){currentSlide=swiper.slides[swiper.activeIndex];}
var image=slide.attrs.originalElement;var isLoaded=image.complete&&image.naturalHeight!==0;if(isLoaded){applyBackgroundImage(slide,currentSlide,image);return;}
image.onload=function(){applyBackgroundImage(slide,currentSlide,image);};}
function applyBackgroundImage(slide,currentSlide,image){var url=util.getBackgroundImage(image);slide.backgroundImage=url;currentSlide.style.backgroundImage='url('+url+')';currentSlide.style.backgroundSize='cover';}
function clearCommentTextAreaValue(){if(carousel.commentField){carousel.commentField.value='';}}
function getOriginalDimensions(el){var size=el.getAttribute('data-orig-size')||'';if(size){var parts=size.split(',');return{width:parseInt(parts[0],10),height:parseInt(parts[1],10)};}else{return{width:el.getAttribute('data-original-width')||el.getAttribute('width')||undefined,height:el.getAttribute('data-original-height')||el.getAttribute('height')||undefined,};}}
function initCarouselSlides(items,startIndex){carousel.slides=[];var max=calculateMaxSlideDimensions();if(startIndex!==0){var img=new Image();img.src=items[startIndex].getAttribute('data-gallery-src');}
var useInPageThumbnails=!!domUtil.closest(items[0],'.tiled-gallery.type-rectangular');Array.prototype.forEach.call(items,function(item,i){var permalinkEl=domUtil.closest(item,'a');var origFile=item.getAttribute('data-orig-file')||item.getAttribute('src-orig');var attrID=item.getAttribute('data-attachment-id')||item.getAttribute('data-id')||'0';var caption=document.querySelector('img[data-attachment-id="'+attrID+'"] + figcaption');if(caption){caption=caption.innerHTML;}else{caption=item.getAttribute('data-image-caption');}
var attrs={originalElement:item,attachmentId:attrID,commentsOpened:item.getAttribute('data-comments-opened')||'0',imageMeta:domUtil.getJSONAttribute(item,'data-image-meta')||{},title:item.getAttribute('data-image-title')||'',desc:item.getAttribute('data-image-description')||'',mediumFile:item.getAttribute('data-medium-file')||'',largeFile:item.getAttribute('data-large-file')||'',origFile:origFile||'',thumbSize:{width:item.naturalWidth,height:item.naturalHeight},caption:caption||'',permalink:permalinkEl&&permalinkEl.getAttribute('href'),src:origFile||item.getAttribute('src')||'',};var tiledGalleryItem=domUtil.closest(item,'.tiled-gallery-item');var tiledCaptionEl=tiledGalleryItem&&tiledGalleryItem.querySelector('.tiled-gallery-caption');var tiledCaption=tiledCaptionEl&&tiledCaptionEl.innerHTML;if(tiledCaption){attrs.caption=tiledCaption;}
var origDimensions=getOriginalDimensions(item);attrs.origWidth=origDimensions.width||attrs.thumbSize.width;attrs.origHeight=origDimensions.height||attrs.thumbSize.height;if(typeof wpcom!=='undefined'&&wpcom.carousel&&wpcom.carousel.generateImgSrc){attrs.src=wpcom.carousel.generateImgSrc(item,max);}else{attrs.src=selectBestImageUrl({origFile:attrs.src,origWidth:attrs.origWidth,origHeight:attrs.origHeight,maxWidth:max.width,maxHeight:max.height,mediumFile:attrs.mediumFile,largeFile:attrs.largeFile,});}
item.setAttribute('data-gallery-src',attrs.src);if(attrs.attachmentId!=='0'){attrs.title=util.texturize(attrs.title);attrs.desc=util.texturize(attrs.desc);attrs.caption=util.texturize(attrs.caption);var image=new Image();image.src=attrs.src;var slideEl=document.createElement('div');slideEl.classList.add('swiper-slide');slideEl.setAttribute('itemprop','associatedMedia');slideEl.setAttribute('itemscope','');slideEl.setAttribute('itemtype','https://schema.org/ImageObject');var zoomEl=document.createElement('div');zoomEl.classList.add('swiper-zoom-container');carousel.gallery.appendChild(slideEl);slideEl.appendChild(zoomEl);zoomEl.appendChild(image);slideEl.setAttribute('data-attachment-id',attrs.attachmentId);slideEl.setAttribute('data-permalink',attrs.permalink);slideEl.setAttribute('data-orig-file',attrs.origFile);if(useInPageThumbnails){attrs.previewImage=attrs.src;}
var slide={el:slideEl,attrs:attrs,index:i};carousel.slides.push(slide);}});}
function loadSwiper(gallery,options){if(!window.Swiper670){var loader=document.querySelector('#jp-carousel-loading-overlay');domUtil.show(loader);var jsScript=document.createElement('script');jsScript.id='jetpack-carousel-swiper-js';jsScript.src=window.jetpackSwiperLibraryPath.url;jsScript.async=true;jsScript.onload=function(){domUtil.hide(loader);openCarousel(gallery,options);};jsScript.onerror=function(){domUtil.hide(loader);};document.head.appendChild(jsScript);return;}
openCarousel(gallery,options);}
function openCarousel(gallery,options){var settings={imgSelector:'.gallery-item [data-attachment-id], .tiled-gallery-item [data-attachment-id], img[data-attachment-id], img[data-id]',startIndex:0,};var data=domUtil.getJSONAttribute(gallery,'data-carousel-extra');var tapTimeout;if(!data){return;}
initializeCarousel();if(carousel.isOpen){return;}
carousel.isOpen=true;originalOverflow=getComputedStyle(document.body).overflow;document.body.style.overflow='hidden';originalHOverflow=getComputedStyle(document.documentElement).overflow;document.documentElement.style.overflow='hidden';scrollPos=window.scrollY||window.pageYOffset||0;carousel.container.setAttribute('data-carousel-extra',JSON.stringify(data));stat(['open','view_image']);for(var option in options||{}){settings[option]=options[option];}
if(settings.startIndex===-1){settings.startIndex=0;}
domUtil.emitEvent(carousel.overlay,'jp_carousel.beforeOpen');carousel.gallery.innerHTML='';carousel.overlay.style.opacity=1;carousel.overlay.style.display='block';initCarouselSlides(gallery.querySelectorAll(settings.imgSelector),settings.startIndex);swiper=new window.Swiper670('.jp-carousel-swiper-container',{centeredSlides:true,zoom:true,loop:carousel.slides.length>1,enabled:carousel.slides.length>1,pagination:{el:'.jp-swiper-pagination',clickable:true,},navigation:{nextEl:'.jp-swiper-button-next',prevEl:'.jp-swiper-button-prev',},initialSlide:settings.startIndex,on:{init:function(){selectSlideAtIndex(settings.startIndex);},},preventClicks:false,preventClicksPropagation:false,preventInteractionOnTransition:!domUtil.isTouch(),threshold:5,});swiper.on('slideChange',function(swiper){var index;if(swiper.activeIndex===0){index=carousel.slides.length-1;}else if(swiper.activeIndex===carousel.slides.length+1){index=0;}else{index=swiper.activeIndex-1;}
selectSlideAtIndex(index);carousel.overlay.classList.remove('jp-carousel-hide-controls');});swiper.on('zoomChange',function(swiper,scale){if(scale>1){carousel.overlay.classList.add('jp-carousel-hide-controls');}
if(scale===1){carousel.overlay.classList.remove('jp-carousel-hide-controls');}});swiper.on('doubleTap',function(swiper){clearTimeout(tapTimeout);if(swiper.zoom.scale===1){var zoomTimeout=setTimeout(function(){carousel.overlay.classList.remove('jp-carousel-hide-controls');clearTimeout(zoomTimeout);},150);}});swiper.on('tap',function(){if(swiper.zoom.scale>1){tapTimeout=setTimeout(function(){carousel.overlay.classList.toggle('jp-carousel-hide-controls');},150);}});domUtil.fadeIn(carousel.overlay,function(){domUtil.emitEvent(carousel.overlay,'jp_carousel.afterOpen');});}
document.body.addEventListener('click',function(e){var isCompatible=window.CSS&&window.CSS.supports&&window.CSS.supports('display','grid');if(!isCompatible){return;}
var target=e.target;var gallery=domUtil.closest(target,gallerySelector);if(gallery){if(!testForData(gallery)){return;}
var parent=target.parentElement;var grandparent=parent.parentElement;if(grandparent&&grandparent.classList.contains('wp-block-image')){var parentHref=parent.getAttribute('href');if(parentHref.split('?')[0]!==target.getAttribute('data-orig-file').split('?')[0]&&parentHref!==target.getAttribute('data-permalink')){return;}}
if(parent.classList.contains('gallery-caption')){return;}
if(domUtil.matches(parent,'figcaption')){return;}
document.documentElement.style.height='auto';e.preventDefault();e.stopPropagation();var item=domUtil.closest(target,itemSelector);var index=Array.prototype.indexOf.call(gallery.querySelectorAll(itemSelector),item);loadSwiper(gallery,{startIndex:index});}});if(Number(jetpackCarouselStrings.single_image_gallery)===1){processSingleImageGallery();document.body.addEventListener('is.post-load',function(){processSingleImageGallery();});}
window.addEventListener('hashchange',function(){var hashRegExp=/jp-carousel-(\d+)/;if(!window.location.hash||!hashRegExp.test(window.location.hash)){if(carousel.isOpen){closeCarousel();}
return;}
if(window.location.hash===lastKnownLocationHash&&carousel.isOpen){return;}
if(window.location.hash&&carousel.gallery&&!carousel.isOpen&&history.back){history.back();return;}
lastKnownLocationHash=window.location.hash;var matchList=window.location.hash.match(hashRegExp);var attachmentId=parseInt(matchList[1],10);var galleries=document.querySelectorAll(gallerySelector);for(var i=0;i<galleries.length;i++){var gallery=galleries[i];var selected;var images=gallery.querySelectorAll('img');for(var j=0;j<images.length;j++){if(parseInt(images[j].getAttribute('data-attachment-id'),10)===attachmentId||parseInt(images[j].getAttribute('data-id'),10)===attachmentId){selected=j;break;}}
if(selected!==undefined){openOrSelectSlide(gallery,selected);break;}}});if(window.location.hash){domUtil.emitEvent(window,'hashchange');}}
if(document.readyState!=='loading'){init();}else{document.addEventListener('DOMContentLoaded',init);}})();