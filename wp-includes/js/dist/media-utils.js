this["wp"]=this["wp"]||{};this["wp"]["mediaUtils"]=(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="Lb+8");})
({"GRId":(function(module,exports){(function(){module.exports=window["wp"]["element"];}());}),"Lb+8":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"MediaUpload",function(){return media_upload;});__webpack_require__.d(__webpack_exports__,"uploadMedia",function(){return uploadMedia;});var external_lodash_=__webpack_require__("YLtl");var external_wp_element_=__webpack_require__("GRId");var external_wp_i18n_=__webpack_require__("l3Sj");const{wp}=window;const DEFAULT_EMPTY_GALLERY=[];const getFeaturedImageMediaFrame=()=>{return wp.media.view.MediaFrame.Select.extend({featuredImageToolbar(toolbar){this.createSelectToolbar(toolbar,{text:wp.media.view.l10n.setFeaturedImage,state:this.options.state});},editState(){const selection=this.state('featured-image').get('selection');const view=new wp.media.view.EditImage({model:selection.single(),controller:this}).render();this.content.set(view);view.loadEditor();},createStates:function createStates(){this.on('toolbar:create:featured-image',this.featuredImageToolbar,this);this.on('content:render:edit-image',this.editState,this);this.states.add([new wp.media.controller.FeaturedImage(),new wp.media.controller.EditImage({model:this.options.editImage})]);}});};const getGalleryDetailsMediaFrame=()=>{return wp.media.view.MediaFrame.Post.extend({galleryToolbar(){const editing=this.state().get('editing');this.toolbar.set(new wp.media.view.Toolbar({controller:this,items:{insert:{style:'primary',text:editing?wp.media.view.l10n.updateGallery:wp.media.view.l10n.insertGallery,priority:80,requires:{library:true},click(){const controller=this.controller,state=controller.state();controller.close();state.trigger('update',state.get('library'));controller.setState(controller.options.state);controller.reset();}}}}));},editState(){const selection=this.state('gallery').get('selection');const view=new wp.media.view.EditImage({model:selection.single(),controller:this}).render();this.content.set(view);view.loadEditor();},createStates:function createStates(){this.on('toolbar:create:main-gallery',this.galleryToolbar,this);this.on('content:render:edit-image',this.editState,this);this.states.add([new wp.media.controller.Library({id:'gallery',title:wp.media.view.l10n.createGalleryTitle,priority:40,toolbar:'main-gallery',filterable:'uploaded',multiple:'add',editable:false,library:wp.media.query(Object(external_lodash_["defaults"])({type:'image'},this.options.library))}),new wp.media.controller.EditImage({model:this.options.editImage}),new wp.media.controller.GalleryEdit({library:this.options.selection,editing:this.options.editing,menu:'gallery',displaySettings:false,multiple:true}),new wp.media.controller.GalleryAdd()]);}});};const slimImageObject=img=>{const attrSet=['sizes','mime','type','subtype','id','url','alt','link','caption'];return Object(external_lodash_["pick"])(img,attrSet);};const getAttachmentsCollection=ids=>{return wp.media.query({order:'ASC',orderby:'post__in',post__in:ids,posts_per_page:-1,query:true,type:'image'});};class media_upload_MediaUpload extends external_wp_element_["Component"]{constructor(_ref){let{allowedTypes,gallery=false,unstableFeaturedImageFlow=false,modalClass,multiple=false,title=Object(external_wp_i18n_["__"])('Select or Upload Media')}=_ref;super(...arguments);this.openModal=this.openModal.bind(this);this.onOpen=this.onOpen.bind(this);this.onSelect=this.onSelect.bind(this);this.onUpdate=this.onUpdate.bind(this);this.onClose=this.onClose.bind(this);if(gallery){this.buildAndSetGalleryFrame();}else{const frameConfig={title,multiple};if(!!allowedTypes){frameConfig.library={type:allowedTypes};}
this.frame=wp.media(frameConfig);}
if(modalClass){this.frame.$el.addClass(modalClass);}
if(unstableFeaturedImageFlow){this.buildAndSetFeatureImageFrame();}
this.initializeListeners();}
initializeListeners(){this.frame.on('select',this.onSelect);this.frame.on('update',this.onUpdate);this.frame.on('open',this.onOpen);this.frame.on('close',this.onClose);}
buildAndSetGalleryFrame(){const{addToGallery=false,allowedTypes,multiple=false,value=DEFAULT_EMPTY_GALLERY}=this.props;if(value===this.lastGalleryValue){return;}
this.lastGalleryValue=value;if(this.frame){this.frame.remove();}
let currentState;if(addToGallery){currentState='gallery-library';}else{currentState=value&&value.length?'gallery-edit':'gallery';}
if(!this.GalleryDetailsMediaFrame){this.GalleryDetailsMediaFrame=getGalleryDetailsMediaFrame();}
const attachments=getAttachmentsCollection(value);const selection=new wp.media.model.Selection(attachments.models,{props:attachments.props.toJSON(),multiple});this.frame=new this.GalleryDetailsMediaFrame({mimeType:allowedTypes,state:currentState,multiple,selection,editing:value&&value.length?true:false});wp.media.frame=this.frame;this.initializeListeners();}
buildAndSetFeatureImageFrame(){const featuredImageFrame=getFeaturedImageMediaFrame();const attachments=getAttachmentsCollection(this.props.value);const selection=new wp.media.model.Selection(attachments.models,{props:attachments.props.toJSON()});this.frame=new featuredImageFrame({mimeType:this.props.allowedTypes,state:'featured-image',multiple:this.props.multiple,selection,editing:this.props.value?true:false});wp.media.frame=this.frame;}
componentWillUnmount(){this.frame.remove();}
onUpdate(selections){const{onSelect,multiple=false}=this.props;const state=this.frame.state();const selectedImages=selections||state.get('selection');if(!selectedImages||!selectedImages.models.length){return;}
if(multiple){onSelect(selectedImages.models.map(model=>slimImageObject(model.toJSON())));}else{onSelect(slimImageObject(selectedImages.models[0].toJSON()));}}
onSelect(){const{onSelect,multiple=false}=this.props;const attachment=this.frame.state().get('selection').toJSON();onSelect(multiple?attachment:attachment[0]);}
onOpen(){var _this$props$value;this.updateCollection();const hasMedia=Array.isArray(this.props.value)?!!((_this$props$value=this.props.value)!==null&&_this$props$value!==void 0&&_this$props$value.length):!!this.props.value;if(!hasMedia){return;}
const isGallery=this.props.gallery;const selection=this.frame.state().get('selection');if(!isGallery){Object(external_lodash_["castArray"])(this.props.value).forEach(id=>{selection.add(wp.media.attachment(id));});}
const attachments=getAttachmentsCollection(Object(external_lodash_["castArray"])(this.props.value));attachments.more().done(function(){var _attachments$models;if(isGallery&&attachments!==null&&attachments!==void 0&&(_attachments$models=attachments.models)!==null&&_attachments$models!==void 0&&_attachments$models.length){selection.add(attachments.models);}});}
onClose(){const{onClose}=this.props;if(onClose){onClose();}}
updateCollection(){const frameContent=this.frame.content.get();if(frameContent&&frameContent.collection){const collection=frameContent.collection;collection.toArray().forEach(model=>model.trigger('destroy',model));collection.mirroring._hasMore=true;collection.more();}}
openModal(){if(this.props.gallery){this.buildAndSetGalleryFrame();}
this.frame.open();}
render(){return this.props.render({open:this.openModal});}}
var media_upload=(media_upload_MediaUpload);var external_wp_apiFetch_=__webpack_require__("ywyh");var external_wp_apiFetch_default=__webpack_require__.n(external_wp_apiFetch_);var external_wp_blob_=__webpack_require__("xTGt");function getMimeTypesArray(wpMimeTypesObject){if(!wpMimeTypesObject){return wpMimeTypesObject;}
return Object(external_lodash_["flatMap"])(wpMimeTypesObject,(mime,extensionsString)=>{const[type]=mime.split('/');const extensions=extensionsString.split('|');return[mime,...Object(external_lodash_["map"])(extensions,extension=>`${type}/${extension}`)];});}
async function uploadMedia(_ref){let{allowedTypes,additionalData={},filesList,maxUploadFileSize,onError=external_lodash_["noop"],onFileChange,wpAllowedMimeTypes=null}=_ref;const files=[...filesList];const filesSet=[];const setAndUpdateFiles=(idx,value)=>{Object(external_wp_blob_["revokeBlobURL"])(Object(external_lodash_["get"])(filesSet,[idx,'url']));filesSet[idx]=value;onFileChange(Object(external_lodash_["compact"])(filesSet));};const isAllowedType=fileType=>{if(!allowedTypes){return true;}
return Object(external_lodash_["some"])(allowedTypes,allowedType=>{if(Object(external_lodash_["includes"])(allowedType,'/')){return allowedType===fileType;}
return Object(external_lodash_["startsWith"])(fileType,`${allowedType}/`);});};const allowedMimeTypesForUser=getMimeTypesArray(wpAllowedMimeTypes);const isAllowedMimeTypeForUser=fileType=>{return Object(external_lodash_["includes"])(allowedMimeTypesForUser,fileType);};const triggerError=error=>{error.message=[Object(external_wp_element_["createElement"])("strong",{key:"filename"},error.file.name),': ',error.message];onError(error);};const validFiles=[];for(const mediaFile of files){if(allowedMimeTypesForUser&&mediaFile.type&&!isAllowedMimeTypeForUser(mediaFile.type)){triggerError({code:'MIME_TYPE_NOT_ALLOWED_FOR_USER',message:Object(external_wp_i18n_["__"])('Sorry, you are not allowed to upload this file type.'),file:mediaFile});continue;}
if(mediaFile.type&&!isAllowedType(mediaFile.type)){triggerError({code:'MIME_TYPE_NOT_SUPPORTED',message:Object(external_wp_i18n_["__"])('Sorry, this file type is not supported here.'),file:mediaFile});continue;}
if(maxUploadFileSize&&mediaFile.size>maxUploadFileSize){triggerError({code:'SIZE_ABOVE_LIMIT',message:Object(external_wp_i18n_["__"])('This file exceeds the maximum upload size for this site.'),file:mediaFile});continue;}
if(mediaFile.size<=0){triggerError({code:'EMPTY_FILE',message:Object(external_wp_i18n_["__"])('This file is empty.'),file:mediaFile});continue;}
validFiles.push(mediaFile);filesSet.push({url:Object(external_wp_blob_["createBlobURL"])(mediaFile)});onFileChange(filesSet);}
for(let idx=0;idx<validFiles.length;++idx){const mediaFile=validFiles[idx];try{const savedMedia=await createMediaFromFile(mediaFile,additionalData);const mediaObject={...Object(external_lodash_["omit"])(savedMedia,['alt_text','source_url']),alt:savedMedia.alt_text,caption:Object(external_lodash_["get"])(savedMedia,['caption','raw'],''),title:savedMedia.title.raw,url:savedMedia.source_url};setAndUpdateFiles(idx,mediaObject);}catch(error){setAndUpdateFiles(idx,null);let message;if(Object(external_lodash_["has"])(error,['message'])){message=Object(external_lodash_["get"])(error,['message']);}else{message=Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Error while uploading file %s to the media library.'),mediaFile.name);}
onError({code:'GENERAL',message,file:mediaFile});}}}
function createMediaFromFile(file,additionalData){const data=new window.FormData();data.append('file',file,file.name||file.type.replace('/','.'));Object(external_lodash_["forEach"])(additionalData,(value,key)=>data.append(key,value));return external_wp_apiFetch_default()({path:'/wp/v2/media',body:data,method:'POST'});}}),"YLtl":(function(module,exports){(function(){module.exports=window["lodash"];}());}),"l3Sj":(function(module,exports){(function(){module.exports=window["wp"]["i18n"];}());}),"xTGt":(function(module,exports){(function(){module.exports=window["wp"]["blob"];}());}),"ywyh":(function(module,exports){(function(){module.exports=window["wp"]["apiFetch"];}());})});