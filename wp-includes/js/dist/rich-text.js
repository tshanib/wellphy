this["wp"]=this["wp"]||{};this["wp"]["richText"]=(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="yyEc");})
({"1ZqX":(function(module,exports){(function(){module.exports=window["wp"]["data"];}());}),"GRId":(function(module,exports){(function(){module.exports=window["wp"]["element"];}());}),"K9lf":(function(module,exports){(function(){module.exports=window["wp"]["compose"];}());}),"RxS6":(function(module,exports){(function(){module.exports=window["wp"]["keycodes"];}());}),"Vx3V":(function(module,exports){(function(){module.exports=window["wp"]["escapeHtml"];}());}),"YLtl":(function(module,exports){(function(){module.exports=window["lodash"];}());}),"gdqT":(function(module,exports){(function(){module.exports=window["wp"]["a11y"];}());}),"l3Sj":(function(module,exports){(function(){module.exports=window["wp"]["i18n"];}());}),"pPDe":(function(module,__webpack_exports__,__webpack_require__){"use strict";var LEAF_KEY,hasWeakMap;LEAF_KEY={};hasWeakMap=typeof WeakMap!=='undefined';function arrayOf(value){return[value];}
function isObjectLike(value){return!!value&&'object'===typeof value;}
function createCache(){var cache={clear:function(){cache.head=null;},};return cache;}
function isShallowEqual(a,b,fromIndex){var i;if(a.length!==b.length){return false;}
for(i=fromIndex;i<a.length;i++){if(a[i]!==b[i]){return false;}}
return true;}
__webpack_exports__["a"]=(function(selector,getDependants){var rootCache,getCache;if(!getDependants){getDependants=arrayOf;}
function getRootCache(){return rootCache;}
function getWeakMapCache(dependants){var caches=rootCache,isUniqueByDependants=true,i,dependant,map,cache;for(i=0;i<dependants.length;i++){dependant=dependants[i];if(!isObjectLike(dependant)){isUniqueByDependants=false;break;}
if(caches.has(dependant)){caches=caches.get(dependant);}else{map=new WeakMap();caches.set(dependant,map);caches=map;}}
if(!caches.has(LEAF_KEY)){cache=createCache();cache.isUniqueByDependants=isUniqueByDependants;caches.set(LEAF_KEY,cache);}
return caches.get(LEAF_KEY);}
getCache=hasWeakMap?getWeakMapCache:getRootCache;function clear(){rootCache=hasWeakMap?new WeakMap():createCache();}
function callSelector(){var len=arguments.length,cache,node,i,args,dependants;args=new Array(len);for(i=0;i<len;i++){args[i]=arguments[i];}
dependants=getDependants.apply(null,args);cache=getCache(dependants);if(!cache.isUniqueByDependants){if(cache.lastDependants&&!isShallowEqual(dependants,cache.lastDependants,0)){cache.clear();}
cache.lastDependants=dependants;}
node=cache.head;while(node){if(!isShallowEqual(node.args,args,1)){node=node.next;continue;}
if(node!==cache.head){node.prev.next=node.next;if(node.next){node.next.prev=node.prev;}
node.next=cache.head;node.prev=null;cache.head.prev=node;cache.head=node;}
return node.val;}
node={val:selector.apply(null,args),};args[0]=null;node.args=args;if(cache.head){cache.head.prev=node;node.next=cache.head;}
cache.head=node;return node.val;}
callSelector.getDependants=getDependants;callSelector.clear=clear;clear();return callSelector;});}),"yyEc":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"store",function(){return store;});__webpack_require__.d(__webpack_exports__,"applyFormat",function(){return applyFormat;});__webpack_require__.d(__webpack_exports__,"concat",function(){return concat;});__webpack_require__.d(__webpack_exports__,"create",function(){return create;});__webpack_require__.d(__webpack_exports__,"getActiveFormat",function(){return getActiveFormat;});__webpack_require__.d(__webpack_exports__,"getActiveObject",function(){return getActiveObject;});__webpack_require__.d(__webpack_exports__,"getTextContent",function(){return getTextContent;});__webpack_require__.d(__webpack_exports__,"__unstableIsListRootSelected",function(){return isListRootSelected;});__webpack_require__.d(__webpack_exports__,"__unstableIsActiveListType",function(){return isActiveListType;});__webpack_require__.d(__webpack_exports__,"isCollapsed",function(){return isCollapsed;});__webpack_require__.d(__webpack_exports__,"isEmpty",function(){return isEmpty;});__webpack_require__.d(__webpack_exports__,"__unstableIsEmptyLine",function(){return isEmptyLine;});__webpack_require__.d(__webpack_exports__,"join",function(){return join;});__webpack_require__.d(__webpack_exports__,"registerFormatType",function(){return registerFormatType;});__webpack_require__.d(__webpack_exports__,"removeFormat",function(){return removeFormat;});__webpack_require__.d(__webpack_exports__,"remove",function(){return remove_remove;});__webpack_require__.d(__webpack_exports__,"replace",function(){return replace_replace;});__webpack_require__.d(__webpack_exports__,"insert",function(){return insert;});__webpack_require__.d(__webpack_exports__,"__unstableInsertLineSeparator",function(){return insertLineSeparator;});__webpack_require__.d(__webpack_exports__,"__unstableRemoveLineSeparator",function(){return removeLineSeparator;});__webpack_require__.d(__webpack_exports__,"insertObject",function(){return insertObject;});__webpack_require__.d(__webpack_exports__,"slice",function(){return slice;});__webpack_require__.d(__webpack_exports__,"split",function(){return split;});__webpack_require__.d(__webpack_exports__,"__unstableToDom",function(){return toDom;});__webpack_require__.d(__webpack_exports__,"toHTMLString",function(){return toHTMLString;});__webpack_require__.d(__webpack_exports__,"toggleFormat",function(){return toggleFormat;});__webpack_require__.d(__webpack_exports__,"__UNSTABLE_LINE_SEPARATOR",function(){return LINE_SEPARATOR;});__webpack_require__.d(__webpack_exports__,"unregisterFormatType",function(){return unregisterFormatType;});__webpack_require__.d(__webpack_exports__,"__unstableCanIndentListItems",function(){return canIndentListItems;});__webpack_require__.d(__webpack_exports__,"__unstableCanOutdentListItems",function(){return canOutdentListItems;});__webpack_require__.d(__webpack_exports__,"__unstableIndentListItems",function(){return indentListItems;});__webpack_require__.d(__webpack_exports__,"__unstableOutdentListItems",function(){return outdentListItems;});__webpack_require__.d(__webpack_exports__,"__unstableChangeListType",function(){return changeListType;});__webpack_require__.d(__webpack_exports__,"__unstableCreateElement",function(){return createElement;});__webpack_require__.d(__webpack_exports__,"useAnchorRef",function(){return useAnchorRef;});__webpack_require__.d(__webpack_exports__,"__experimentalRichText",function(){return __experimentalRichText;});__webpack_require__.d(__webpack_exports__,"__unstableUseRichText",function(){return useRichText;});__webpack_require__.d(__webpack_exports__,"__unstableFormatEdit",function(){return FormatEdit;});var selectors_namespaceObject={};__webpack_require__.r(selectors_namespaceObject);__webpack_require__.d(selectors_namespaceObject,"getFormatTypes",function(){return getFormatTypes;});__webpack_require__.d(selectors_namespaceObject,"getFormatType",function(){return getFormatType;});__webpack_require__.d(selectors_namespaceObject,"getFormatTypeForBareElement",function(){return getFormatTypeForBareElement;});__webpack_require__.d(selectors_namespaceObject,"getFormatTypeForClassName",function(){return getFormatTypeForClassName;});var actions_namespaceObject={};__webpack_require__.r(actions_namespaceObject);__webpack_require__.d(actions_namespaceObject,"addFormatTypes",function(){return addFormatTypes;});__webpack_require__.d(actions_namespaceObject,"removeFormatTypes",function(){return removeFormatTypes;});var external_wp_data_=__webpack_require__("1ZqX");var external_lodash_=__webpack_require__("YLtl");function reducer_formatTypes(){let state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};let action=arguments.length>1?arguments[1]:undefined;switch(action.type){case 'ADD_FORMAT_TYPES':return{...state,...Object(external_lodash_["keyBy"])(action.formatTypes,'name')};case 'REMOVE_FORMAT_TYPES':return Object(external_lodash_["omit"])(state,action.names);}
return state;}
var reducer=(Object(external_wp_data_["combineReducers"])({formatTypes:reducer_formatTypes}));var rememo=__webpack_require__("pPDe");const getFormatTypes=Object(rememo["a"])(state=>Object.values(state.formatTypes),state=>[state.formatTypes]);function getFormatType(state,name){return state.formatTypes[name];}
function getFormatTypeForBareElement(state,bareElementTagName){return Object(external_lodash_["find"])(getFormatTypes(state),_ref=>{let{className,tagName}=_ref;return className===null&&bareElementTagName===tagName;});}
function getFormatTypeForClassName(state,elementClassName){return Object(external_lodash_["find"])(getFormatTypes(state),_ref2=>{let{className}=_ref2;if(className===null){return false;}
return ` ${elementClassName} `.indexOf(` ${className} `)>=0;});}
function addFormatTypes(formatTypes){return{type:'ADD_FORMAT_TYPES',formatTypes:Object(external_lodash_["castArray"])(formatTypes)};}
function removeFormatTypes(names){return{type:'REMOVE_FORMAT_TYPES',names:Object(external_lodash_["castArray"])(names)};}
const STORE_NAME='core/rich-text';const store=Object(external_wp_data_["createReduxStore"])(STORE_NAME,{reducer:reducer,selectors:selectors_namespaceObject,actions:actions_namespaceObject});Object(external_wp_data_["register"])(store);function isFormatEqual(format1,format2){if(format1===format2){return true;}
if(!format1||!format2){return false;}
if(format1.type!==format2.type){return false;}
const attributes1=format1.attributes;const attributes2=format2.attributes;if(attributes1===attributes2){return true;}
if(!attributes1||!attributes2){return false;}
const keys1=Object.keys(attributes1);const keys2=Object.keys(attributes2);if(keys1.length!==keys2.length){return false;}
const length=keys1.length;for(let i=0;i<length;i++){const name=keys1[i];if(attributes1[name]!==attributes2[name]){return false;}}
return true;}
function normaliseFormats(value){const newFormats=value.formats.slice();newFormats.forEach((formatsAtIndex,index)=>{const formatsAtPreviousIndex=newFormats[index-1];if(formatsAtPreviousIndex){const newFormatsAtIndex=formatsAtIndex.slice();newFormatsAtIndex.forEach((format,formatIndex)=>{const previousFormat=formatsAtPreviousIndex[formatIndex];if(isFormatEqual(format,previousFormat)){newFormatsAtIndex[formatIndex]=previousFormat;}});newFormats[index]=newFormatsAtIndex;}});return{...value,formats:newFormats};}
function replace(array,index,value){array=array.slice();array[index]=value;return array;}
function applyFormat(value,format){let startIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:value.start;let endIndex=arguments.length>3&&arguments[3]!==undefined?arguments[3]:value.end;const{formats,activeFormats}=value;const newFormats=formats.slice();if(startIndex===endIndex){const startFormat=Object(external_lodash_["find"])(newFormats[startIndex],{type:format.type});if(startFormat){const index=newFormats[startIndex].indexOf(startFormat);while(newFormats[startIndex]&&newFormats[startIndex][index]===startFormat){newFormats[startIndex]=replace(newFormats[startIndex],index,format);startIndex--;}
endIndex++;while(newFormats[endIndex]&&newFormats[endIndex][index]===startFormat){newFormats[endIndex]=replace(newFormats[endIndex],index,format);endIndex++;}}}else{let position=+Infinity;for(let index=startIndex;index<endIndex;index++){if(newFormats[index]){newFormats[index]=newFormats[index].filter(_ref=>{let{type}=_ref;return type!==format.type;});const length=newFormats[index].length;if(length<position){position=length;}}else{newFormats[index]=[];position=0;}}
for(let index=startIndex;index<endIndex;index++){newFormats[index].splice(position,0,format);}}
return normaliseFormats({...value,formats:newFormats,activeFormats:[...Object(external_lodash_["reject"])(activeFormats,{type:format.type}),format]});}
function createElement(_ref,html){let{implementation}=_ref;if(!createElement.body){createElement.body=implementation.createHTMLDocument('').body;}
createElement.body.innerHTML=html;return createElement.body;}
const LINE_SEPARATOR='\u2028';const OBJECT_REPLACEMENT_CHARACTER='\ufffc';const ZWNBSP='\ufeff';function createEmptyValue(){return{formats:[],replacements:[],text:''};}
function toFormat(_ref){let{type,attributes}=_ref;let formatType;if(attributes&&attributes.class){formatType=Object(external_wp_data_["select"])(store).getFormatTypeForClassName(attributes.class);if(formatType){attributes.class=` ${attributes.class} `.replace(` ${formatType.className} `,' ').trim();if(!attributes.class){delete attributes.class;}}}
if(!formatType){formatType=Object(external_wp_data_["select"])(store).getFormatTypeForBareElement(type);}
if(!formatType){return attributes?{type,attributes}:{type};}
if(formatType.__experimentalCreatePrepareEditableTree&&!formatType.__experimentalCreateOnChangeEditableValue){return null;}
if(!attributes){return{type:formatType.name};}
const registeredAttributes={};const unregisteredAttributes={};const _attributes={...attributes};for(const key in formatType.attributes){const name=formatType.attributes[key];registeredAttributes[key]=_attributes[name];if(formatType.__unstableFilterAttributeValue){registeredAttributes[key]=formatType.__unstableFilterAttributeValue(key,registeredAttributes[key]);}
delete _attributes[name];if(typeof registeredAttributes[key]==='undefined'){delete registeredAttributes[key];}}
for(const name in _attributes){unregisteredAttributes[name]=attributes[name];}
return{type:formatType.name,attributes:registeredAttributes,unregisteredAttributes};}
function create(){let{element,text,html,range,multilineTag,multilineWrapperTags,__unstableIsEditableTree:isEditableTree,preserveWhiteSpace}=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(typeof text==='string'&&text.length>0){return{formats:Array(text.length),replacements:Array(text.length),text};}
if(typeof html==='string'&&html.length>0){element=createElement(document,html);}
if(typeof element!=='object'){return createEmptyValue();}
if(!multilineTag){return createFromElement({element,range,isEditableTree,preserveWhiteSpace});}
return createFromMultilineElement({element,range,multilineTag,multilineWrapperTags,isEditableTree,preserveWhiteSpace});}
function accumulateSelection(accumulator,node,range,value){if(!range){return;}
const{parentNode}=node;const{startContainer,startOffset,endContainer,endOffset}=range;const currentLength=accumulator.text.length;if(value.start!==undefined){accumulator.start=currentLength+value.start;}else if(node===startContainer&&node.nodeType===node.TEXT_NODE){accumulator.start=currentLength+startOffset;}else if(parentNode===startContainer&&node===startContainer.childNodes[startOffset]){accumulator.start=currentLength;}else if(parentNode===startContainer&&node===startContainer.childNodes[startOffset-1]){accumulator.start=currentLength+value.text.length;}else if(node===startContainer){accumulator.start=currentLength;}
if(value.end!==undefined){accumulator.end=currentLength+value.end;}else if(node===endContainer&&node.nodeType===node.TEXT_NODE){accumulator.end=currentLength+endOffset;}else if(parentNode===endContainer&&node===endContainer.childNodes[endOffset-1]){accumulator.end=currentLength+value.text.length;}else if(parentNode===endContainer&&node===endContainer.childNodes[endOffset]){accumulator.end=currentLength;}else if(node===endContainer){accumulator.end=currentLength+endOffset;}}
function filterRange(node,range,filter){if(!range){return;}
const{startContainer,endContainer}=range;let{startOffset,endOffset}=range;if(node===startContainer){startOffset=filter(node.nodeValue.slice(0,startOffset)).length;}
if(node===endContainer){endOffset=filter(node.nodeValue.slice(0,endOffset)).length;}
return{startContainer,startOffset,endContainer,endOffset};}
function collapseWhiteSpace(string){return string.replace(/[\n\r\t]+/g,' ');}
function removeReservedCharacters(string){return string.replace(new RegExp(`[${ZWNBSP}${OBJECT_REPLACEMENT_CHARACTER}]`,'gu'),'');}
function createFromElement(_ref2){let{element,range,multilineTag,multilineWrapperTags,currentWrapperTags=[],isEditableTree,preserveWhiteSpace}=_ref2;const accumulator=createEmptyValue();if(!element){return accumulator;}
if(!element.hasChildNodes()){accumulateSelection(accumulator,element,range,createEmptyValue());return accumulator;}
const length=element.childNodes.length;for(let index=0;index<length;index++){const node=element.childNodes[index];const type=node.nodeName.toLowerCase();if(node.nodeType===node.TEXT_NODE){let filter=removeReservedCharacters;if(!preserveWhiteSpace){filter=string=>removeReservedCharacters(collapseWhiteSpace(string));}
const text=filter(node.nodeValue);range=filterRange(node,range,filter);accumulateSelection(accumulator,node,range,{text});accumulator.formats.length+=text.length;accumulator.replacements.length+=text.length;accumulator.text+=text;continue;}
if(node.nodeType!==node.ELEMENT_NODE){continue;}
if(isEditableTree&&(node.getAttribute('data-rich-text-placeholder')||type==='br'&&!node.getAttribute('data-rich-text-line-break'))){accumulateSelection(accumulator,node,range,createEmptyValue());continue;}
if(type==='script'){const value={formats:[,],replacements:[{type,attributes:{'data-rich-text-script':node.getAttribute('data-rich-text-script')||encodeURIComponent(node.innerHTML)}}],text:OBJECT_REPLACEMENT_CHARACTER};accumulateSelection(accumulator,node,range,value);mergePair(accumulator,value);continue;}
if(type==='br'){accumulateSelection(accumulator,node,range,createEmptyValue());mergePair(accumulator,create({text:'\n'}));continue;}
const format=toFormat({type,attributes:getAttributes({element:node})});if(multilineWrapperTags&&multilineWrapperTags.indexOf(type)!==-1){const value=createFromMultilineElement({element:node,range,multilineTag,multilineWrapperTags,currentWrapperTags:[...currentWrapperTags,format],isEditableTree,preserveWhiteSpace});accumulateSelection(accumulator,node,range,value);mergePair(accumulator,value);continue;}
const value=createFromElement({element:node,range,multilineTag,multilineWrapperTags,isEditableTree,preserveWhiteSpace});accumulateSelection(accumulator,node,range,value);if(!format){mergePair(accumulator,value);}else if(value.text.length===0){if(format.attributes){mergePair(accumulator,{formats:[,],replacements:[format],text:OBJECT_REPLACEMENT_CHARACTER});}}else{function mergeFormats(formats){if(mergeFormats.formats===formats){return mergeFormats.newFormats;}
const newFormats=formats?[format,...formats]:[format];mergeFormats.formats=formats;mergeFormats.newFormats=newFormats;return newFormats;}
mergeFormats.newFormats=[format];mergePair(accumulator,{...value,formats:Array.from(value.formats,mergeFormats)});}}
return accumulator;}
function createFromMultilineElement(_ref3){let{element,range,multilineTag,multilineWrapperTags,currentWrapperTags=[],isEditableTree,preserveWhiteSpace}=_ref3;const accumulator=createEmptyValue();if(!element||!element.hasChildNodes()){return accumulator;}
const length=element.children.length;for(let index=0;index<length;index++){const node=element.children[index];if(node.nodeName.toLowerCase()!==multilineTag){continue;}
const value=createFromElement({element:node,range,multilineTag,multilineWrapperTags,currentWrapperTags,isEditableTree,preserveWhiteSpace});if(index!==0||currentWrapperTags.length>0){mergePair(accumulator,{formats:[,],replacements:currentWrapperTags.length>0?[currentWrapperTags]:[,],text:LINE_SEPARATOR});}
accumulateSelection(accumulator,node,range,value);mergePair(accumulator,value);}
return accumulator;}
function getAttributes(_ref4){let{element}=_ref4;if(!element.hasAttributes()){return;}
const length=element.attributes.length;let accumulator;for(let i=0;i<length;i++){const{name,value}=element.attributes[i];if(name.indexOf('data-rich-text-')===0){continue;}
const safeName=/^on/i.test(name)?'data-disable-rich-text-'+name:name;accumulator=accumulator||{};accumulator[safeName]=value;}
return accumulator;}
function mergePair(a,b){a.formats=a.formats.concat(b.formats);a.replacements=a.replacements.concat(b.replacements);a.text+=b.text;return a;}
function concat(){for(var _len=arguments.length,values=new Array(_len),_key=0;_key<_len;_key++){values[_key]=arguments[_key];}
return normaliseFormats(values.reduce(mergePair,create()));}
function getActiveFormats(_ref){let{formats,start,end,activeFormats}=_ref;let EMPTY_ACTIVE_FORMATS=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(start===undefined){return EMPTY_ACTIVE_FORMATS;}
if(start===end){if(activeFormats){return activeFormats;}
const formatsBefore=formats[start-1]||EMPTY_ACTIVE_FORMATS;const formatsAfter=formats[start]||EMPTY_ACTIVE_FORMATS;if(formatsBefore.length<formatsAfter.length){return formatsBefore;}
return formatsAfter;}
return formats[start]||EMPTY_ACTIVE_FORMATS;}
function getActiveFormat(value,formatType){return Object(external_lodash_["find"])(getActiveFormats(value),{type:formatType});}
function getActiveObject(_ref){let{start,end,replacements,text}=_ref;if(start+1!==end||text[start]!==OBJECT_REPLACEMENT_CHARACTER){return;}
return replacements[start];}
function getTextContent(_ref){let{text}=_ref;return text.replace(new RegExp(OBJECT_REPLACEMENT_CHARACTER,'g'),'').replace(new RegExp(LINE_SEPARATOR,'g'),'\n');}
function getLineIndex(_ref){let{start,text}=_ref;let startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:start;let index=startIndex;while(index--){if(text[index]===LINE_SEPARATOR){return index;}}}
function isListRootSelected(value){const{replacements,start}=value;const lineIndex=getLineIndex(value,start);const replacement=replacements[lineIndex];return!replacement||replacement.length<1;}
function isActiveListType(value,type,rootType){const{replacements,start}=value;const lineIndex=getLineIndex(value,start);const replacement=replacements[lineIndex];if(!replacement||replacement.length===0){return type===rootType;}
const lastFormat=replacement[replacement.length-1];return lastFormat.type===type;}
function isCollapsed(_ref){let{start,end}=_ref;if(start===undefined||end===undefined){return;}
return start===end;}
function isEmpty(_ref){let{text}=_ref;return text.length===0;}
function isEmptyLine(_ref2){let{text,start,end}=_ref2;if(start!==end){return false;}
if(text.length===0){return true;}
if(start===0&&text.slice(0,1)===LINE_SEPARATOR){return true;}
if(start===text.length&&text.slice(-1)===LINE_SEPARATOR){return true;}
return text.slice(start-1,end+1)===`${LINE_SEPARATOR}${LINE_SEPARATOR}`;}
function join(values){let separator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';if(typeof separator==='string'){separator=create({text:separator});}
return normaliseFormats(values.reduce((accumlator,_ref)=>{let{formats,replacements,text}=_ref;return{formats:accumlator.formats.concat(separator.formats,formats),replacements:accumlator.replacements.concat(separator.replacements,replacements),text:accumlator.text+separator.text+text};}));}
function registerFormatType(name,settings){settings={name,...settings};if(typeof settings.name!=='string'){window.console.error('Format names must be strings.');return;}
if(!/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test(settings.name)){window.console.error('Format names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-format');return;}
if(Object(external_wp_data_["select"])(store).getFormatType(settings.name)){window.console.error('Format "'+settings.name+'" is already registered.');return;}
if(typeof settings.tagName!=='string'||settings.tagName===''){window.console.error('Format tag names must be a string.');return;}
if((typeof settings.className!=='string'||settings.className==='')&&settings.className!==null){window.console.error('Format class names must be a string, or null to handle bare elements.');return;}
if(!/^[_a-zA-Z]+[a-zA-Z0-9-]*$/.test(settings.className)){window.console.error('A class name must begin with a letter, followed by any number of hyphens, letters, or numbers.');return;}
if(settings.className===null){const formatTypeForBareElement=Object(external_wp_data_["select"])(store).getFormatTypeForBareElement(settings.tagName);if(formatTypeForBareElement){window.console.error(`Format "${formatTypeForBareElement.name}" is already registered to handle bare tag name "${settings.tagName}".`);return;}}else{const formatTypeForClassName=Object(external_wp_data_["select"])(store).getFormatTypeForClassName(settings.className);if(formatTypeForClassName){window.console.error(`Format "${formatTypeForClassName.name}" is already registered to handle class name "${settings.className}".`);return;}}
if(!('title'in settings)||settings.title===''){window.console.error('The format "'+settings.name+'" must have a title.');return;}
if('keywords'in settings&&settings.keywords.length>3){window.console.error('The format "'+settings.name+'" can have a maximum of 3 keywords.');return;}
if(typeof settings.title!=='string'){window.console.error('Format titles must be strings.');return;}
Object(external_wp_data_["dispatch"])(store).addFormatTypes(settings);return settings;}
function removeFormat(value,formatType){let startIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:value.start;let endIndex=arguments.length>3&&arguments[3]!==undefined?arguments[3]:value.end;const{formats,activeFormats}=value;const newFormats=formats.slice();if(startIndex===endIndex){const format=Object(external_lodash_["find"])(newFormats[startIndex],{type:formatType});if(format){while(Object(external_lodash_["find"])(newFormats[startIndex],format)){filterFormats(newFormats,startIndex,formatType);startIndex--;}
endIndex++;while(Object(external_lodash_["find"])(newFormats[endIndex],format)){filterFormats(newFormats,endIndex,formatType);endIndex++;}}}else{for(let i=startIndex;i<endIndex;i++){if(newFormats[i]){filterFormats(newFormats,i,formatType);}}}
return normaliseFormats({...value,formats:newFormats,activeFormats:Object(external_lodash_["reject"])(activeFormats,{type:formatType})});}
function filterFormats(formats,index,formatType){const newFormats=formats[index].filter(_ref=>{let{type}=_ref;return type!==formatType;});if(newFormats.length){formats[index]=newFormats;}else{delete formats[index];}}
function insert(value,valueToInsert){let startIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:value.start;let endIndex=arguments.length>3&&arguments[3]!==undefined?arguments[3]:value.end;const{formats,replacements,text}=value;if(typeof valueToInsert==='string'){valueToInsert=create({text:valueToInsert});}
const index=startIndex+valueToInsert.text.length;return normaliseFormats({formats:formats.slice(0,startIndex).concat(valueToInsert.formats,formats.slice(endIndex)),replacements:replacements.slice(0,startIndex).concat(valueToInsert.replacements,replacements.slice(endIndex)),text:text.slice(0,startIndex)+valueToInsert.text+text.slice(endIndex),start:index,end:index});}
function remove_remove(value,startIndex,endIndex){return insert(value,create(),startIndex,endIndex);}
function replace_replace(_ref,pattern,replacement){let{formats,replacements,text,start,end}=_ref;text=text.replace(pattern,function(match){for(var _len=arguments.length,rest=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){rest[_key-1]=arguments[_key];}
const offset=rest[rest.length-2];let newText=replacement;let newFormats;let newReplacements;if(typeof newText==='function'){newText=replacement(match,...rest);}
if(typeof newText==='object'){newFormats=newText.formats;newReplacements=newText.replacements;newText=newText.text;}else{newFormats=Array(newText.length);newReplacements=Array(newText.length);if(formats[offset]){newFormats=newFormats.fill(formats[offset]);}}
formats=formats.slice(0,offset).concat(newFormats,formats.slice(offset+match.length));replacements=replacements.slice(0,offset).concat(newReplacements,replacements.slice(offset+match.length));if(start){start=end=offset+newText.length;}
return newText;});return normaliseFormats({formats,replacements,text,start,end});}
function insertLineSeparator(value){let startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:value.start;let endIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:value.end;const beforeText=value.text.slice(0,startIndex);const previousLineSeparatorIndex=beforeText.lastIndexOf(LINE_SEPARATOR);const previousLineSeparatorFormats=value.replacements[previousLineSeparatorIndex];let replacements=[,];if(previousLineSeparatorFormats){replacements=[previousLineSeparatorFormats];}
const valueToInsert={formats:[,],replacements,text:LINE_SEPARATOR};return insert(value,valueToInsert,startIndex,endIndex);}
function removeLineSeparator(value){let backward=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;const{replacements,text,start,end}=value;const collapsed=isCollapsed(value);let index=start-1;let removeStart=collapsed?start-1:start;let removeEnd=end;if(!backward){index=end;removeStart=start;removeEnd=collapsed?end+1:end;}
if(text[index]!==LINE_SEPARATOR){return;}
let newValue;if(collapsed&&replacements[index]&&replacements[index].length){const newReplacements=replacements.slice();newReplacements[index]=replacements[index].slice(0,-1);newValue={...value,replacements:newReplacements};}else{newValue=remove_remove(value,removeStart,removeEnd);}
return newValue;}
function insertObject(value,formatToInsert,startIndex,endIndex){const valueToInsert={formats:[,],replacements:[formatToInsert],text:OBJECT_REPLACEMENT_CHARACTER};return insert(value,valueToInsert,startIndex,endIndex);}
function slice(value){let startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:value.start;let endIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:value.end;const{formats,replacements,text}=value;if(startIndex===undefined||endIndex===undefined){return{...value};}
return{formats:formats.slice(startIndex,endIndex),replacements:replacements.slice(startIndex,endIndex),text:text.slice(startIndex,endIndex)};}
function split(_ref,string){let{formats,replacements,text,start,end}=_ref;if(typeof string!=='string'){return splitAtSelection(...arguments);}
let nextStart=0;return text.split(string).map(substring=>{const startIndex=nextStart;const value={formats:formats.slice(startIndex,startIndex+substring.length),replacements:replacements.slice(startIndex,startIndex+substring.length),text:substring};nextStart+=string.length+substring.length;if(start!==undefined&&end!==undefined){if(start>=startIndex&&start<nextStart){value.start=start-startIndex;}else if(start<startIndex&&end>startIndex){value.start=0;}
if(end>=startIndex&&end<nextStart){value.end=end-startIndex;}else if(start<nextStart&&end>nextStart){value.end=substring.length;}}
return value;});}
function splitAtSelection(_ref2){let{formats,replacements,text,start,end}=_ref2;let startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:start;let endIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:end;if(start===undefined||end===undefined){return;}
const before={formats:formats.slice(0,startIndex),replacements:replacements.slice(0,startIndex),text:text.slice(0,startIndex)};const after={formats:formats.slice(endIndex),replacements:replacements.slice(endIndex),text:text.slice(endIndex),start:0,end:0};return[replace_replace(before,/\u2028+$/,''),replace_replace(after,/^\u2028+/,'')];}
function get_format_type_getFormatType(name){return Object(external_wp_data_["select"])(store).getFormatType(name);}
function restoreOnAttributes(attributes,isEditableTree){if(isEditableTree){return attributes;}
const newAttributes={};for(const key in attributes){let newKey=key;if(key.startsWith('data-disable-rich-text-')){newKey=key.slice('data-disable-rich-text-'.length);}
newAttributes[newKey]=attributes[key];}
return newAttributes;}
function fromFormat(_ref){let{type,attributes,unregisteredAttributes,object,boundaryClass,isEditableTree}=_ref;const formatType=get_format_type_getFormatType(type);let elementAttributes={};if(boundaryClass){elementAttributes['data-rich-text-format-boundary']='true';}
if(!formatType){if(attributes){elementAttributes={...attributes,...elementAttributes};}
return{type,attributes:restoreOnAttributes(elementAttributes,isEditableTree),object};}
elementAttributes={...unregisteredAttributes,...elementAttributes};for(const name in attributes){const key=formatType.attributes?formatType.attributes[name]:false;if(key){elementAttributes[key]=attributes[name];}else{elementAttributes[name]=attributes[name];}}
if(formatType.className){if(elementAttributes.class){elementAttributes.class=`${formatType.className} ${elementAttributes.class}`;}else{elementAttributes.class=formatType.className;}}
return{type:formatType.tagName,object:formatType.object,attributes:restoreOnAttributes(elementAttributes,isEditableTree)};}
function isEqualUntil(a,b,index){do{if(a[index]!==b[index]){return false;}}while(index--);return true;}
function toTree(_ref2){let{value,multilineTag,preserveWhiteSpace,createEmpty,append,getLastChild,getParent,isText,getText,remove,appendText,onStartIndex,onEndIndex,isEditableTree,placeholder}=_ref2;const{formats,replacements,text,start,end}=value;const formatsLength=formats.length+1;const tree=createEmpty();const multilineFormat={type:multilineTag};const activeFormats=getActiveFormats(value);const deepestActiveFormat=activeFormats[activeFormats.length-1];let lastSeparatorFormats;let lastCharacterFormats;let lastCharacter;if(multilineTag){append(append(tree,{type:multilineTag}),'');lastCharacterFormats=lastSeparatorFormats=[multilineFormat];}else{append(tree,'');}
for(let i=0;i<formatsLength;i++){const character=text.charAt(i);const shouldInsertPadding=isEditableTree&&(!lastCharacter||lastCharacter===LINE_SEPARATOR||lastCharacter==='\n');let characterFormats=formats[i];if(multilineTag){if(character===LINE_SEPARATOR){characterFormats=lastSeparatorFormats=(replacements[i]||[]).reduce((accumulator,format)=>{accumulator.push(format,multilineFormat);return accumulator;},[multilineFormat]);}else{characterFormats=[...lastSeparatorFormats,...(characterFormats||[])];}}
let pointer=getLastChild(tree);if(shouldInsertPadding&&character===LINE_SEPARATOR){let node=pointer;while(!isText(node)){node=getLastChild(node);}
append(getParent(node),ZWNBSP);}
if(lastCharacter===LINE_SEPARATOR){let node=pointer;while(!isText(node)){node=getLastChild(node);}
if(onStartIndex&&start===i){onStartIndex(tree,node);}
if(onEndIndex&&end===i){onEndIndex(tree,node);}}
if(characterFormats){characterFormats.forEach((format,formatIndex)=>{if(pointer&&lastCharacterFormats&&isEqualUntil(characterFormats,lastCharacterFormats,formatIndex)&&(character!==LINE_SEPARATOR||characterFormats.length-1!==formatIndex)){pointer=getLastChild(pointer);return;}
const{type,attributes,unregisteredAttributes}=format;const boundaryClass=isEditableTree&&character!==LINE_SEPARATOR&&format===deepestActiveFormat;const parent=getParent(pointer);const newNode=append(parent,fromFormat({type,attributes,unregisteredAttributes,boundaryClass,isEditableTree}));if(isText(pointer)&&getText(pointer).length===0){remove(pointer);}
pointer=append(newNode,'');});}
if(character===LINE_SEPARATOR){lastCharacterFormats=characterFormats;lastCharacter=character;continue;}
if(i===0){if(onStartIndex&&start===0){onStartIndex(tree,pointer);}
if(onEndIndex&&end===0){onEndIndex(tree,pointer);}}
if(character===OBJECT_REPLACEMENT_CHARACTER){var _replacements$i;if(!isEditableTree&&((_replacements$i=replacements[i])===null||_replacements$i===void 0?void 0:_replacements$i.type)==='script'){pointer=append(getParent(pointer),fromFormat({type:'script',isEditableTree}));append(pointer,{html:decodeURIComponent(replacements[i].attributes['data-rich-text-script'])});}else{pointer=append(getParent(pointer),fromFormat({...replacements[i],object:true,isEditableTree}));}
pointer=append(getParent(pointer),'');}else if(!preserveWhiteSpace&&character==='\n'){pointer=append(getParent(pointer),{type:'br',attributes:isEditableTree?{'data-rich-text-line-break':'true'}:undefined,object:true});pointer=append(getParent(pointer),'');}else if(!isText(pointer)){pointer=append(getParent(pointer),character);}else{appendText(pointer,character);}
if(onStartIndex&&start===i+1){onStartIndex(tree,pointer);}
if(onEndIndex&&end===i+1){onEndIndex(tree,pointer);}
if(shouldInsertPadding&&i===text.length){append(getParent(pointer),ZWNBSP);if(placeholder&&text.length===0){append(getParent(pointer),{type:'span',attributes:{'data-rich-text-placeholder':placeholder,contenteditable:'false',style:'pointer-events:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;'}});}}
lastCharacterFormats=characterFormats;lastCharacter=character;}
return tree;}
function createPathToNode(node,rootNode,path){const parentNode=node.parentNode;let i=0;while(node=node.previousSibling){i++;}
path=[i,...path];if(parentNode!==rootNode){path=createPathToNode(parentNode,rootNode,path);}
return path;}
function getNodeByPath(node,path){path=[...path];while(node&&path.length>1){node=node.childNodes[path.shift()];}
return{node,offset:path[0]};}
function to_dom_append(element,child){if(typeof child==='string'){child=element.ownerDocument.createTextNode(child);}
const{type,attributes}=child;if(type){child=element.ownerDocument.createElement(type);for(const key in attributes){child.setAttribute(key,attributes[key]);}}
return element.appendChild(child);}
function to_dom_appendText(node,text){node.appendData(text);}
function to_dom_getLastChild(_ref){let{lastChild}=_ref;return lastChild;}
function to_dom_getParent(_ref2){let{parentNode}=_ref2;return parentNode;}
function to_dom_isText(node){return node.nodeType===node.TEXT_NODE;}
function to_dom_getText(_ref3){let{nodeValue}=_ref3;return nodeValue;}
function to_dom_remove(node){return node.parentNode.removeChild(node);}
function toDom(_ref4){let{value,multilineTag,prepareEditableTree,isEditableTree=true,placeholder,doc=document}=_ref4;let startPath=[];let endPath=[];if(prepareEditableTree){value={...value,formats:prepareEditableTree(value)};}
const createEmpty=()=>createElement(doc,'');const tree=toTree({value,multilineTag,createEmpty,append:to_dom_append,getLastChild:to_dom_getLastChild,getParent:to_dom_getParent,isText:to_dom_isText,getText:to_dom_getText,remove:to_dom_remove,appendText:to_dom_appendText,onStartIndex(body,pointer){startPath=createPathToNode(pointer,body,[pointer.nodeValue.length]);},onEndIndex(body,pointer){endPath=createPathToNode(pointer,body,[pointer.nodeValue.length]);},isEditableTree,placeholder});return{body:tree,selection:{startPath,endPath}};}
function apply(_ref5){let{value,current,multilineTag,prepareEditableTree,__unstableDomOnly,placeholder}=_ref5;const{body,selection}=toDom({value,multilineTag,prepareEditableTree,placeholder,doc:current.ownerDocument});applyValue(body,current);if(value.start!==undefined&&!__unstableDomOnly){applySelection(selection,current);}}
function applyValue(future,current){let i=0;let futureChild;while(futureChild=future.firstChild){const currentChild=current.childNodes[i];if(!currentChild){current.appendChild(futureChild);}else if(!currentChild.isEqualNode(futureChild)){if(currentChild.nodeName!==futureChild.nodeName||currentChild.nodeType===currentChild.TEXT_NODE&&currentChild.data!==futureChild.data){current.replaceChild(futureChild,currentChild);}else{const currentAttributes=currentChild.attributes;const futureAttributes=futureChild.attributes;if(currentAttributes){let ii=currentAttributes.length;while(ii--){const{name}=currentAttributes[ii];if(!futureChild.getAttribute(name)){currentChild.removeAttribute(name);}}}
if(futureAttributes){for(let ii=0;ii<futureAttributes.length;ii++){const{name,value}=futureAttributes[ii];if(currentChild.getAttribute(name)!==value){currentChild.setAttribute(name,value);}}}
applyValue(futureChild,currentChild);future.removeChild(futureChild);}}else{future.removeChild(futureChild);}
i++;}
while(current.childNodes[i]){current.removeChild(current.childNodes[i]);}}
function isRangeEqual(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset;}
function applySelection(_ref6,current){let{startPath,endPath}=_ref6;const{node:startContainer,offset:startOffset}=getNodeByPath(current,startPath);const{node:endContainer,offset:endOffset}=getNodeByPath(current,endPath);const{ownerDocument}=current;const{defaultView}=ownerDocument;const selection=defaultView.getSelection();const range=ownerDocument.createRange();range.setStart(startContainer,startOffset);range.setEnd(endContainer,endOffset);const{activeElement}=ownerDocument;if(selection.rangeCount>0){if(isRangeEqual(range,selection.getRangeAt(0))){return;}
selection.removeAllRanges();}
selection.addRange(range);if(activeElement!==ownerDocument.activeElement){if(activeElement instanceof defaultView.HTMLElement){activeElement.focus();}}}
var external_wp_escapeHtml_=__webpack_require__("Vx3V");function toHTMLString(_ref){let{value,multilineTag,preserveWhiteSpace}=_ref;const tree=toTree({value,multilineTag,preserveWhiteSpace,createEmpty:to_html_string_createEmpty,append:to_html_string_append,getLastChild:to_html_string_getLastChild,getParent:to_html_string_getParent,isText:to_html_string_isText,getText:to_html_string_getText,remove:to_html_string_remove,appendText:to_html_string_appendText});return createChildrenHTML(tree.children);}
function to_html_string_createEmpty(){return{};}
function to_html_string_getLastChild(_ref2){let{children}=_ref2;return children&&children[children.length-1];}
function to_html_string_append(parent,object){if(typeof object==='string'){object={text:object};}
object.parent=parent;parent.children=parent.children||[];parent.children.push(object);return object;}
function to_html_string_appendText(object,text){object.text+=text;}
function to_html_string_getParent(_ref3){let{parent}=_ref3;return parent;}
function to_html_string_isText(_ref4){let{text}=_ref4;return typeof text==='string';}
function to_html_string_getText(_ref5){let{text}=_ref5;return text;}
function to_html_string_remove(object){const index=object.parent.children.indexOf(object);if(index!==-1){object.parent.children.splice(index,1);}
return object;}
function createElementHTML(_ref6){let{type,attributes,object,children}=_ref6;let attributeString='';for(const key in attributes){if(!Object(external_wp_escapeHtml_["isValidAttributeName"])(key)){continue;}
attributeString+=` ${key}="${Object(external_wp_escapeHtml_["escapeAttribute"])(attributes[key])}"`;}
if(object){return `<${type}${attributeString}>`;}
return `<${type}${attributeString}>${createChildrenHTML(children)}</${type}>`;}
function createChildrenHTML(){let children=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return children.map(child=>{if(child.html!==undefined){return child.html;}
return child.text===undefined?createElementHTML(child):Object(external_wp_escapeHtml_["escapeEditableHTML"])(child.text);}).join('');}
var external_wp_a11y_=__webpack_require__("gdqT");var external_wp_i18n_=__webpack_require__("l3Sj");function toggleFormat(value,format){if(getActiveFormat(value,format.type)){if(format.title){Object(external_wp_a11y_["speak"])(Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s removed.'),format.title),'assertive');}
return removeFormat(value,format.type);}
if(format.title){Object(external_wp_a11y_["speak"])(Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s applied.'),format.title),'assertive');}
return applyFormat(value,format);}
function unregisterFormatType(name){const oldFormat=Object(external_wp_data_["select"])(store).getFormatType(name);if(!oldFormat){window.console.error(`Format ${name} is not registered.`);return;}
Object(external_wp_data_["dispatch"])(store).removeFormatTypes(name);return oldFormat;}
function canIndentListItems(value){const lineIndex=getLineIndex(value);if(lineIndex===undefined){return false;}
const{replacements}=value;const previousLineIndex=getLineIndex(value,lineIndex);const formatsAtLineIndex=replacements[lineIndex]||[];const formatsAtPreviousLineIndex=replacements[previousLineIndex]||[];return formatsAtLineIndex.length<=formatsAtPreviousLineIndex.length;}
function canOutdentListItems(value){const{replacements,start}=value;const startingLineIndex=getLineIndex(value,start);return replacements[startingLineIndex]!==undefined;}
function getTargetLevelLineIndex(_ref,lineIndex){let{text,replacements}=_ref;const startFormats=replacements[lineIndex]||[];let index=lineIndex;while(index-->=0){if(text[index]!==LINE_SEPARATOR){continue;}
const formatsAtIndex=replacements[index]||[];if(formatsAtIndex.length===startFormats.length+1){return index;}else if(formatsAtIndex.length<=startFormats.length){return;}}}
function indentListItems(value,rootFormat){if(!canIndentListItems(value)){return value;}
const lineIndex=getLineIndex(value);const previousLineIndex=getLineIndex(value,lineIndex);const{text,replacements,end}=value;const newFormats=replacements.slice();const targetLevelLineIndex=getTargetLevelLineIndex(value,lineIndex);for(let index=lineIndex;index<end;index++){if(text[index]!==LINE_SEPARATOR){continue;}
if(targetLevelLineIndex){const targetFormats=replacements[targetLevelLineIndex]||[];newFormats[index]=targetFormats.concat((newFormats[index]||[]).slice(targetFormats.length-1));}else{const targetFormats=replacements[previousLineIndex]||[];const lastformat=targetFormats[targetFormats.length-1]||rootFormat;newFormats[index]=targetFormats.concat([lastformat],(newFormats[index]||[]).slice(targetFormats.length));}}
return{...value,replacements:newFormats};}
function getParentLineIndex(_ref,lineIndex){let{text,replacements}=_ref;const startFormats=replacements[lineIndex]||[];let index=lineIndex;while(index-->=0){if(text[index]!==LINE_SEPARATOR){continue;}
const formatsAtIndex=replacements[index]||[];if(formatsAtIndex.length===startFormats.length-1){return index;}}}
function getLastChildIndex(_ref,lineIndex){let{text,replacements}=_ref;const lineFormats=replacements[lineIndex]||[];let childIndex=lineIndex;for(let index=lineIndex||0;index<text.length;index++){if(text[index]!==LINE_SEPARATOR){continue;}
const formatsAtIndex=replacements[index]||[];if(formatsAtIndex.length>=lineFormats.length){childIndex=index;}else{return childIndex;}}
return childIndex;}
function outdentListItems(value){if(!canOutdentListItems(value)){return value;}
const{text,replacements,start,end}=value;const startingLineIndex=getLineIndex(value,start);const newFormats=replacements.slice(0);const parentFormats=replacements[getParentLineIndex(value,startingLineIndex)]||[];const endingLineIndex=getLineIndex(value,end);const lastChildIndex=getLastChildIndex(value,endingLineIndex);for(let index=startingLineIndex;index<=lastChildIndex;index++){if(text[index]!==LINE_SEPARATOR){continue;}
const currentFormats=newFormats[index]||[];newFormats[index]=parentFormats.concat(currentFormats.slice(parentFormats.length+1));if(newFormats[index].length===0){delete newFormats[index];}}
return{...value,replacements:newFormats};}
function changeListType(value,newFormat){const{text,replacements,start,end}=value;const startingLineIndex=getLineIndex(value,start);const startLineFormats=replacements[startingLineIndex]||[];const endLineFormats=replacements[getLineIndex(value,end)]||[];const startIndex=getParentLineIndex(value,startingLineIndex);const newReplacements=replacements.slice();const startCount=startLineFormats.length-1;const endCount=endLineFormats.length-1;let changed;for(let index=startIndex+1||0;index<text.length;index++){if(text[index]!==LINE_SEPARATOR){continue;}
if((newReplacements[index]||[]).length<=startCount){break;}
if(!newReplacements[index]){continue;}
changed=true;newReplacements[index]=newReplacements[index].map((format,i)=>{return i<startCount||i>endCount?format:newFormat;});}
if(!changed){return value;}
return{...value,replacements:newReplacements};}
var external_wp_element_=__webpack_require__("GRId");function useAnchorRef(_ref){let{ref,value,settings={}}=_ref;const{tagName,className,name}=settings;const activeFormat=name?getActiveFormat(value,name):undefined;return Object(external_wp_element_["useMemo"])(()=>{if(!ref.current)return;const{ownerDocument:{defaultView}}=ref.current;const selection=defaultView.getSelection();if(!selection.rangeCount){return;}
const range=selection.getRangeAt(0);if(!activeFormat){return range;}
let element=range.startContainer;element=element.nextElementSibling||element;while(element.nodeType!==element.ELEMENT_NODE){element=element.parentNode;}
return element.closest(tagName+(className?'.'+className:''));},[activeFormat,value.start,value.end,tagName,className]);}
var external_wp_compose_=__webpack_require__("K9lf");const whiteSpace='pre-wrap';const minWidth='1px';function useDefaultStyle(){return Object(external_wp_element_["useCallback"])(element=>{if(!element)return;element.style.whiteSpace=whiteSpace;element.style.minWidth=minWidth;},[]);}
function useBoundaryStyle(_ref){let{record}=_ref;const ref=Object(external_wp_element_["useRef"])();const{activeFormats=[]}=record.current;Object(external_wp_element_["useEffect"])(()=>{if(!activeFormats||!activeFormats.length){return;}
const boundarySelector='*[data-rich-text-format-boundary]';const element=ref.current.querySelector(boundarySelector);if(!element){return;}
const{ownerDocument}=element;const{defaultView}=ownerDocument;const computedStyle=defaultView.getComputedStyle(element);const newColor=computedStyle.color.replace(')',', 0.2)').replace('rgb','rgba');const selector=`.rich-text:focus ${boundarySelector}`;const rule=`background-color: ${newColor}`;const style=`${selector} {${rule}}`;const globalStyleId='rich-text-boundary-style';let globalStyle=ownerDocument.getElementById(globalStyleId);if(!globalStyle){globalStyle=ownerDocument.createElement('style');globalStyle.id=globalStyleId;ownerDocument.head.appendChild(globalStyle);}
if(globalStyle.innerHTML!==style){globalStyle.innerHTML=style;}},[activeFormats]);return ref;}
function useCopyHandler(props){const propsRef=Object(external_wp_element_["useRef"])(props);propsRef.current=props;return Object(external_wp_compose_["useRefEffect"])(element=>{function onCopy(event){const{record,multilineTag,preserveWhiteSpace}=propsRef.current;if(isCollapsed(record.current)||!element.contains(element.ownerDocument.activeElement)){return;}
const selectedRecord=slice(record.current);const plainText=getTextContent(selectedRecord);const html=toHTMLString({value:selectedRecord,multilineTag,preserveWhiteSpace});event.clipboardData.setData('text/plain',plainText);event.clipboardData.setData('text/html',html);event.clipboardData.setData('rich-text','true');event.clipboardData.setData('rich-text-multi-line-tag',multilineTag||'');event.preventDefault();}
element.addEventListener('copy',onCopy);return()=>{element.removeEventListener('copy',onCopy);};},[]);}
var external_wp_keycodes_=__webpack_require__("RxS6");const EMPTY_ACTIVE_FORMATS=[];function useFormatBoundaries(props){const[,forceRender]=Object(external_wp_element_["useReducer"])(()=>({}));const propsRef=Object(external_wp_element_["useRef"])(props);propsRef.current=props;return Object(external_wp_compose_["useRefEffect"])(element=>{function onKeyDown(event){const{keyCode,shiftKey,altKey,metaKey,ctrlKey}=event;if(shiftKey||altKey||metaKey||ctrlKey||keyCode!==external_wp_keycodes_["LEFT"]&&keyCode!==external_wp_keycodes_["RIGHT"]){return;}
const{record,applyRecord}=propsRef.current;const{text,formats,start,end,activeFormats:currentActiveFormats=[]}=record.current;const collapsed=isCollapsed(record.current);const{ownerDocument}=element;const{defaultView}=ownerDocument;const{direction}=defaultView.getComputedStyle(element);const reverseKey=direction==='rtl'?external_wp_keycodes_["RIGHT"]:external_wp_keycodes_["LEFT"];const isReverse=event.keyCode===reverseKey;if(collapsed&&currentActiveFormats.length===0){if(start===0&&isReverse){return;}
if(end===text.length&&!isReverse){return;}}
if(!collapsed){return;}
const formatsBefore=formats[start-1]||EMPTY_ACTIVE_FORMATS;const formatsAfter=formats[start]||EMPTY_ACTIVE_FORMATS;const destination=isReverse?formatsBefore:formatsAfter;const isIncreasing=currentActiveFormats.every((format,index)=>format===destination[index]);let newActiveFormatsLength=currentActiveFormats.length;if(!isIncreasing){newActiveFormatsLength--;}else if(newActiveFormatsLength<destination.length){newActiveFormatsLength++;}
if(newActiveFormatsLength===currentActiveFormats.length){record.current._newActiveFormats=destination;return;}
event.preventDefault();const origin=isReverse?formatsAfter:formatsBefore;const source=isIncreasing?destination:origin;const newActiveFormats=source.slice(0,newActiveFormatsLength);const newValue={...record.current,activeFormats:newActiveFormats};record.current=newValue;applyRecord(newValue);forceRender();}
element.addEventListener('keydown',onKeyDown);return()=>{element.removeEventListener('keydown',onKeyDown);};},[]);}
function useSelectObject(){return Object(external_wp_compose_["useRefEffect"])(element=>{function onClick(event){const{target}=event;if(target===element||target.textContent){return;}
const{ownerDocument}=target;const{defaultView}=ownerDocument;const range=ownerDocument.createRange();const selection=defaultView.getSelection();range.selectNode(target);selection.removeAllRanges();selection.addRange(range);}
element.addEventListener('click',onClick);return()=>{element.removeEventListener('click',onClick);};},[]);}
function useIndentListItemOnSpace(props){const propsRef=Object(external_wp_element_["useRef"])(props);propsRef.current=props;return Object(external_wp_compose_["useRefEffect"])(element=>{function onKeyDown(event){const{keyCode,shiftKey,altKey,metaKey,ctrlKey}=event;const{multilineTag,createRecord,handleChange}=propsRef.current;if(shiftKey||altKey||metaKey||ctrlKey||keyCode!==external_wp_keycodes_["SPACE"]||multilineTag!=='li'){return;}
const currentValue=createRecord();if(!isCollapsed(currentValue)){return;}
const{text,start}=currentValue;const characterBefore=text[start-1];if(characterBefore&&characterBefore!==LINE_SEPARATOR){return;}
handleChange(indentListItems(currentValue,{type:element.tagName.toLowerCase()}));event.preventDefault();}
element.addEventListener('keydown',onKeyDown);return()=>{element.removeEventListener('keydown',onKeyDown);};},[]);}
function updateFormats(_ref){let{value,start,end,formats}=_ref;const min=Math.min(start,end);const max=Math.max(start,end);const formatsBefore=value.formats[min-1]||[];const formatsAfter=value.formats[max]||[];value.activeFormats=formats.map((format,index)=>{if(formatsBefore[index]){if(isFormatEqual(format,formatsBefore[index])){return formatsBefore[index];}}else if(formatsAfter[index]){if(isFormatEqual(format,formatsAfter[index])){return formatsAfter[index];}}
return format;});while(--end>=start){if(value.activeFormats.length>0){value.formats[end]=value.activeFormats;}else{delete value.formats[end];}}
return value;}
const INSERTION_INPUT_TYPES_TO_IGNORE=new Set(['insertParagraph','insertOrderedList','insertUnorderedList','insertHorizontalRule','insertLink']);const use_input_and_selection_EMPTY_ACTIVE_FORMATS=[];function fixPlaceholderSelection(defaultView){const selection=defaultView.getSelection();const{anchorNode,anchorOffset}=selection;if(anchorNode.nodeType!==anchorNode.ELEMENT_NODE){return;}
const targetNode=anchorNode.childNodes[anchorOffset];if(!targetNode||targetNode.nodeType!==targetNode.ELEMENT_NODE||!targetNode.getAttribute('data-rich-text-placeholder')){return;}
selection.collapseToStart();}
function useInputAndSelection(props){const propsRef=Object(external_wp_element_["useRef"])(props);propsRef.current=props;return Object(external_wp_compose_["useRefEffect"])(element=>{const{ownerDocument}=element;const{defaultView}=ownerDocument;let isComposing=false;let rafId;function onInput(event){if(isComposing){return;}
let inputType;if(event){inputType=event.inputType;}
const{record,applyRecord,createRecord,handleChange}=propsRef.current;if(inputType&&(inputType.indexOf('format')===0||INSERTION_INPUT_TYPES_TO_IGNORE.has(inputType))){applyRecord(record.current);return;}
const currentValue=createRecord();const{start,activeFormats:oldActiveFormats=[]}=record.current;const change=updateFormats({value:currentValue,start,end:currentValue.start,formats:oldActiveFormats});handleChange(change);}
function handleSelectionChange(event){if(ownerDocument.activeElement!==element){return;}
const{record,applyRecord,createRecord,isSelected,onSelectionChange}=propsRef.current;if(event.type!=='selectionchange'&&!isSelected){return;}
if(element.contentEditable!=='true'){return;}
if(isComposing){return;}
const{start,end,text}=createRecord();const oldRecord=record.current;if(text!==oldRecord.text){onInput();return;}
if(start===oldRecord.start&&end===oldRecord.end){if(oldRecord.text.length===0&&start===0){fixPlaceholderSelection(defaultView);}
return;}
const newValue={...oldRecord,start,end,activeFormats:oldRecord._newActiveFormats,_newActiveFormats:undefined};const newActiveFormats=getActiveFormats(newValue,use_input_and_selection_EMPTY_ACTIVE_FORMATS);newValue.activeFormats=newActiveFormats;record.current=newValue;applyRecord(newValue,{domOnly:true});onSelectionChange(start,end);}
function onCompositionStart(){isComposing=true;ownerDocument.removeEventListener('selectionchange',handleSelectionChange);}
function onCompositionEnd(){isComposing=false;onInput({inputType:'insertText'});ownerDocument.addEventListener('selectionchange',handleSelectionChange);}
function onFocus(){const{record,isSelected,onSelectionChange,applyRecord}=propsRef.current;if(!isSelected){const index=undefined;record.current={...record.current,start:index,end:index,activeFormats:use_input_and_selection_EMPTY_ACTIVE_FORMATS};onSelectionChange(index,index);}else{applyRecord(record.current);onSelectionChange(record.current.start,record.current.end);}
rafId=defaultView.requestAnimationFrame(handleSelectionChange);ownerDocument.addEventListener('selectionchange',handleSelectionChange);}
function onBlur(){ownerDocument.removeEventListener('selectionchange',handleSelectionChange);}
element.addEventListener('input',onInput);element.addEventListener('compositionstart',onCompositionStart);element.addEventListener('compositionend',onCompositionEnd);element.addEventListener('focus',onFocus);element.addEventListener('blur',onBlur);element.addEventListener('keyup',handleSelectionChange);element.addEventListener('mouseup',handleSelectionChange);element.addEventListener('touchend',handleSelectionChange);return()=>{element.removeEventListener('input',onInput);element.removeEventListener('compositionstart',onCompositionStart);element.removeEventListener('compositionend',onCompositionEnd);element.removeEventListener('focus',onFocus);element.removeEventListener('blur',onBlur);element.removeEventListener('keyup',handleSelectionChange);element.removeEventListener('mouseup',handleSelectionChange);element.removeEventListener('touchend',handleSelectionChange);ownerDocument.removeEventListener('selectionchange',handleSelectionChange);defaultView.cancelAnimationFrame(rafId);};},[]);}
function useDelete(props){const propsRef=Object(external_wp_element_["useRef"])(props);propsRef.current=props;return Object(external_wp_compose_["useRefEffect"])(element=>{function onKeyDown(event){const{keyCode}=event;const{createRecord,handleChange,multilineTag}=propsRef.current;if(event.defaultPrevented){return;}
if(keyCode!==external_wp_keycodes_["DELETE"]&&keyCode!==external_wp_keycodes_["BACKSPACE"]){return;}
const currentValue=createRecord();const{start,end,text}=currentValue;const isReverse=keyCode===external_wp_keycodes_["BACKSPACE"];if(start===0&&end!==0&&end===text.length){handleChange(remove_remove(currentValue));event.preventDefault();return;}
if(multilineTag){let newValue;if(isReverse&&currentValue.start===0&&currentValue.end===0&&isEmptyLine(currentValue)){newValue=removeLineSeparator(currentValue,!isReverse);}else{newValue=removeLineSeparator(currentValue,isReverse);}
if(newValue){handleChange(newValue);event.preventDefault();}}}
element.addEventListener('keydown',onKeyDown);return()=>{element.removeEventListener('keydown',onKeyDown);};},[]);}
function useSpace(){return Object(external_wp_compose_["useRefEffect"])(element=>{function onKeyDown(event){if(event.defaultPrevented){return;}
const{keyCode,altKey,metaKey,ctrlKey,key}=event;if(keyCode!==external_wp_keycodes_["SPACE"]||altKey||metaKey||ctrlKey){return;}
if(key!==' '){return;}
event.target.ownerDocument.execCommand('insertText',false,' ');event.preventDefault();}
element.addEventListener('keydown',onKeyDown);return()=>{element.removeEventListener('keydown',onKeyDown);};},[]);}
function useRichText(_ref){let{value='',selectionStart,selectionEnd,placeholder,preserveWhiteSpace,onSelectionChange,onChange,__unstableMultilineTag:multilineTag,__unstableDisableFormats:disableFormats,__unstableIsSelected:isSelected,__unstableDependencies=[],__unstableAfterParse,__unstableBeforeSerialize,__unstableAddInvisibleFormats}=_ref;const registry=Object(external_wp_data_["useRegistry"])();const[,forceRender]=Object(external_wp_element_["useReducer"])(()=>({}));const ref=Object(external_wp_element_["useRef"])();function createRecord(){const{ownerDocument:{defaultView}}=ref.current;const selection=defaultView.getSelection();const range=selection.rangeCount>0?selection.getRangeAt(0):null;return create({element:ref.current,range,multilineTag,multilineWrapperTags:multilineTag==='li'?['ul','ol']:undefined,__unstableIsEditableTree:true,preserveWhiteSpace});}
function applyRecord(newRecord){let{domOnly}=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};apply({value:newRecord,current:ref.current,multilineTag,multilineWrapperTags:multilineTag==='li'?['ul','ol']:undefined,prepareEditableTree:__unstableAddInvisibleFormats,__unstableDomOnly:domOnly,placeholder});}
const _value=Object(external_wp_element_["useRef"])(value);const record=Object(external_wp_element_["useRef"])();function setRecordFromProps(){_value.current=value;record.current=create({html:value,multilineTag,multilineWrapperTags:multilineTag==='li'?['ul','ol']:undefined,preserveWhiteSpace});if(disableFormats){record.current.formats=Array(value.length);record.current.replacements=Array(value.length);}
if(__unstableAfterParse){record.current.formats=__unstableAfterParse(record.current);}
record.current.start=selectionStart;record.current.end=selectionEnd;}
const hadSelectionUpdate=Object(external_wp_element_["useRef"])(false);if(!record.current){var _record$current,_record$current$forma,_record$current$forma2;setRecordFromProps();const hasRelevantInitFormat=((_record$current=record.current)===null||_record$current===void 0?void 0:(_record$current$forma=_record$current.formats[0])===null||_record$current$forma===void 0?void 0:(_record$current$forma2=_record$current$forma[0])===null||_record$current$forma2===void 0?void 0:_record$current$forma2.type)==='core/text-color';if(hasRelevantInitFormat){handleChangesUponInit(record.current);}}else if(selectionStart!==record.current.start||selectionEnd!==record.current.end){hadSelectionUpdate.current=isSelected;record.current={...record.current,start:selectionStart,end:selectionEnd};}
function handleChange(newRecord){record.current=newRecord;applyRecord(newRecord);if(disableFormats){_value.current=newRecord.text;}else{_value.current=toHTMLString({value:__unstableBeforeSerialize?{...newRecord,formats:__unstableBeforeSerialize(newRecord)}:newRecord,multilineTag,preserveWhiteSpace});}
const{start,end,formats,text}=newRecord;registry.batch(()=>{onSelectionChange(start,end);onChange(_value.current,{__unstableFormats:formats,__unstableText:text});});forceRender();}
function handleChangesUponInit(newRecord){record.current=newRecord;_value.current=toHTMLString({value:__unstableBeforeSerialize?{...newRecord,formats:__unstableBeforeSerialize(newRecord)}:newRecord,multilineTag,preserveWhiteSpace});const{formats,text}=newRecord;registry.batch(()=>{onChange(_value.current,{__unstableFormats:formats,__unstableText:text});});forceRender();}
function applyFromProps(){setRecordFromProps();applyRecord(record.current);}
const didMount=Object(external_wp_element_["useRef"])(false);Object(external_wp_element_["useLayoutEffect"])(()=>{if(didMount.current&&value!==_value.current){applyFromProps();}},[value]);Object(external_wp_element_["useLayoutEffect"])(()=>{if(!hadSelectionUpdate.current){return;}
applyFromProps();hadSelectionUpdate.current=false;},[hadSelectionUpdate.current]);const mergedRefs=Object(external_wp_compose_["useMergeRefs"])([ref,useDefaultStyle(),useBoundaryStyle({record}),useCopyHandler({record,multilineTag,preserveWhiteSpace}),useSelectObject(),useFormatBoundaries({record,applyRecord}),useDelete({createRecord,handleChange,multilineTag}),useIndentListItemOnSpace({multilineTag,createRecord,handleChange}),useInputAndSelection({record,applyRecord,createRecord,handleChange,isSelected,onSelectionChange}),useSpace(),Object(external_wp_compose_["useRefEffect"])(()=>{applyFromProps();didMount.current=true;},[placeholder,...__unstableDependencies])]);return{value:record.current,onChange:handleChange,ref:mergedRefs};}
function __experimentalRichText(){}
function FormatEdit(_ref){let{formatTypes,onChange,onFocus,value,forwardedRef}=_ref;return formatTypes.map(settings=>{const{name,edit:Edit}=settings;if(!Edit){return null;}
const activeFormat=getActiveFormat(value,name);const isActive=activeFormat!==undefined;const activeObject=getActiveObject(value);const isObjectActive=activeObject!==undefined&&activeObject.type===name;return Object(external_wp_element_["createElement"])(Edit,{key:name,isActive:isActive,activeAttributes:isActive?activeFormat.attributes||{}:{},isObjectActive:isObjectActive,activeObjectAttributes:isObjectActive?activeObject.attributes||{}:{},value:value,onChange:onChange,onFocus:onFocus,contentRef:forwardedRef});});}})});