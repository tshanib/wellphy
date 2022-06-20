const jetpackLazyImagesModule=function(){const config={rootMargin:'200px 0px',threshold:0.01,};const loadingImages=[];let lazyImages,loadingWarning,observer;lazy_load_init();const bodyEl=document.querySelector('body');if(bodyEl){bodyEl.addEventListener('is.post-load',lazy_load_init);bodyEl.addEventListener('jetpack-lazy-images-load',lazy_load_init);}
function lazy_load_init(){lazyImages=Array.from(document.querySelectorAll('img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)'));if(observer){observer.disconnect();}
if(!('IntersectionObserver'in window)){loadAllImages();}else{observer=new IntersectionObserver(onIntersection,config);lazyImages.forEach(function(image){if(!image.getAttribute('data-lazy-loaded')){observer.observe(image);}});window.addEventListener('beforeprint',onPrint);if(window.matchMedia){window.matchMedia('print').addListener(function(mql){if(mql.matches){onPrint();}});}}}
function loadAllImages(){if(observer){observer.disconnect();}
while(lazyImages.length>0){applyImage(lazyImages[0]);}}
function onIntersection(entries){for(let i=0;i<entries.length;i++){const entry=entries[i];if(entry.intersectionRatio>0){observer.unobserve(entry.target);applyImage(entry.target);}}
if(lazyImages.length===0){observer.disconnect();}}
function onPrint(){if(!loadingWarning&&(lazyImages.length>0||loadingImages.length>0)){loadingWarning=document.createElement('div');loadingWarning.id='loadingWarning';loadingWarning.style.fontWeight='bold';loadingWarning.innerText=jetpackLazyImagesL10n.loading_warning;const s=document.createElement('style');s.innerHTML='#loadingWarning { display: none; }\n@media print {\n#loadingWarning { display: block; }\nbody > #loadingWarning ~ * { display: none !important; }\n}';loadingWarning.appendChild(s);bodyEl.insertBefore(loadingWarning,bodyEl.firstChild);}
if(lazyImages.length>0){loadAllImages();}
if(loadingWarning){alert(jetpackLazyImagesL10n.loading_warning);}}
function applyImage(image){let lazyLoadedImageEvent;if(!(image instanceof HTMLImageElement)){return;}
const srcset=image.getAttribute('data-lazy-srcset');const sizes=image.getAttribute('data-lazy-sizes');image.removeAttribute('data-lazy-srcset');image.removeAttribute('data-lazy-sizes');image.removeAttribute('data-lazy-src');image.classList.add('jetpack-lazy-image--handled');image.setAttribute('data-lazy-loaded',1);if(sizes){image.setAttribute('sizes',sizes);}
if(!srcset){image.removeAttribute('srcset');}else{image.setAttribute('srcset',srcset);}
image.setAttribute('loading','eager');loadingImages.push(image);const idx=lazyImages.indexOf(image);if(idx>=0){lazyImages.splice(idx,1);}
if(image.complete){loadedImage.call(image,null);}else{image.addEventListener('load',loadedImage,{once:true});image.addEventListener('error',loadedImage,{once:true});}
try{lazyLoadedImageEvent=new Event('jetpack-lazy-loaded-image',{bubbles:true,cancelable:true,});}catch(e){lazyLoadedImageEvent=document.createEvent('Event');lazyLoadedImageEvent.initEvent('jetpack-lazy-loaded-image',true,true);}
image.dispatchEvent(lazyLoadedImageEvent);}
function loadedImage(){const idx=loadingImages.indexOf(this);if(idx>=0){loadingImages.splice(idx,1);}
if(loadingWarning&&lazyImages.length===0&&loadingImages.length===0){loadingWarning.parentNode.removeChild(loadingWarning);loadingWarning=null;}}};if(document.readyState==='interactive'||document.readyState==='complete'){jetpackLazyImagesModule();}else{document.addEventListener('DOMContentLoaded',jetpackLazyImagesModule);}