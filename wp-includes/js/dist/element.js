this["wp"]=this["wp"]||{};this["wp"]["element"]=(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="o/Ny");})
({"Vx3V":(function(module,exports){(function(){module.exports=window["wp"]["escapeHtml"];}());}),"YLtl":(function(module,exports){(function(){module.exports=window["lodash"];}());}),"cDcd":(function(module,exports){(function(){module.exports=window["React"];}());}),"faye":(function(module,exports){(function(){module.exports=window["ReactDOM"];}());}),"o/Ny":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"createInterpolateElement",function(){return create_interpolate_element;});__webpack_require__.d(__webpack_exports__,"Children",function(){return external_React_["Children"];});__webpack_require__.d(__webpack_exports__,"cloneElement",function(){return external_React_["cloneElement"];});__webpack_require__.d(__webpack_exports__,"Component",function(){return external_React_["Component"];});__webpack_require__.d(__webpack_exports__,"createContext",function(){return external_React_["createContext"];});__webpack_require__.d(__webpack_exports__,"createElement",function(){return external_React_["createElement"];});__webpack_require__.d(__webpack_exports__,"createRef",function(){return external_React_["createRef"];});__webpack_require__.d(__webpack_exports__,"forwardRef",function(){return external_React_["forwardRef"];});__webpack_require__.d(__webpack_exports__,"Fragment",function(){return external_React_["Fragment"];});__webpack_require__.d(__webpack_exports__,"isValidElement",function(){return external_React_["isValidElement"];});__webpack_require__.d(__webpack_exports__,"memo",function(){return external_React_["memo"];});__webpack_require__.d(__webpack_exports__,"StrictMode",function(){return external_React_["StrictMode"];});__webpack_require__.d(__webpack_exports__,"useCallback",function(){return external_React_["useCallback"];});__webpack_require__.d(__webpack_exports__,"useContext",function(){return external_React_["useContext"];});__webpack_require__.d(__webpack_exports__,"useDebugValue",function(){return external_React_["useDebugValue"];});__webpack_require__.d(__webpack_exports__,"useEffect",function(){return external_React_["useEffect"];});__webpack_require__.d(__webpack_exports__,"useImperativeHandle",function(){return external_React_["useImperativeHandle"];});__webpack_require__.d(__webpack_exports__,"useLayoutEffect",function(){return external_React_["useLayoutEffect"];});__webpack_require__.d(__webpack_exports__,"useMemo",function(){return external_React_["useMemo"];});__webpack_require__.d(__webpack_exports__,"useReducer",function(){return external_React_["useReducer"];});__webpack_require__.d(__webpack_exports__,"useRef",function(){return external_React_["useRef"];});__webpack_require__.d(__webpack_exports__,"useState",function(){return external_React_["useState"];});__webpack_require__.d(__webpack_exports__,"lazy",function(){return external_React_["lazy"];});__webpack_require__.d(__webpack_exports__,"Suspense",function(){return external_React_["Suspense"];});__webpack_require__.d(__webpack_exports__,"concatChildren",function(){return concatChildren;});__webpack_require__.d(__webpack_exports__,"switchChildrenNodeName",function(){return switchChildrenNodeName;});__webpack_require__.d(__webpack_exports__,"createPortal",function(){return external_ReactDOM_["createPortal"];});__webpack_require__.d(__webpack_exports__,"findDOMNode",function(){return external_ReactDOM_["findDOMNode"];});__webpack_require__.d(__webpack_exports__,"render",function(){return external_ReactDOM_["render"];});__webpack_require__.d(__webpack_exports__,"unmountComponentAtNode",function(){return external_ReactDOM_["unmountComponentAtNode"];});__webpack_require__.d(__webpack_exports__,"isEmptyElement",function(){return isEmptyElement;});__webpack_require__.d(__webpack_exports__,"Platform",function(){return platform;});__webpack_require__.d(__webpack_exports__,"renderToString",function(){return serialize;});__webpack_require__.d(__webpack_exports__,"RawHTML",function(){return RawHTML;});var external_React_=__webpack_require__("cDcd");let indoc,offset,output,stack;const tokenizer=/<(\/)?(\w+)\s*(\/)?>/g;function createFrame(element,tokenStart,tokenLength,prevOffset,leadingTextStart){return{element,tokenStart,tokenLength,prevOffset,leadingTextStart,children:[]};}
const createInterpolateElement=(interpolatedString,conversionMap)=>{indoc=interpolatedString;offset=0;output=[];stack=[];tokenizer.lastIndex=0;if(!isValidConversionMap(conversionMap)){throw new TypeError('The conversionMap provided is not valid. It must be an object with values that are WPElements');}
do{}while(proceed(conversionMap));return Object(external_React_["createElement"])(external_React_["Fragment"],null,...output);};const isValidConversionMap=conversionMap=>{const isObject=typeof conversionMap==='object';const values=isObject&&Object.values(conversionMap);return isObject&&values.length&&values.every(element=>Object(external_React_["isValidElement"])(element));};function proceed(conversionMap){const next=nextToken();const[tokenType,name,startOffset,tokenLength]=next;const stackDepth=stack.length;const leadingTextStart=startOffset>offset?offset:null;if(!conversionMap[name]){addText();return false;}
switch(tokenType){case 'no-more-tokens':if(stackDepth!==0){const{leadingTextStart:stackLeadingText,tokenStart}=stack.pop();output.push(indoc.substr(stackLeadingText,tokenStart));}
addText();return false;case 'self-closed':if(0===stackDepth){if(null!==leadingTextStart){output.push(indoc.substr(leadingTextStart,startOffset-leadingTextStart));}
output.push(conversionMap[name]);offset=startOffset+tokenLength;return true;}
addChild(createFrame(conversionMap[name],startOffset,tokenLength));offset=startOffset+tokenLength;return true;case 'opener':stack.push(createFrame(conversionMap[name],startOffset,tokenLength,startOffset+tokenLength,leadingTextStart));offset=startOffset+tokenLength;return true;case 'closer':if(1===stackDepth){closeOuterElement(startOffset);offset=startOffset+tokenLength;return true;}
const stackTop=stack.pop();const text=indoc.substr(stackTop.prevOffset,startOffset-stackTop.prevOffset);stackTop.children.push(text);stackTop.prevOffset=startOffset+tokenLength;const frame=createFrame(stackTop.element,stackTop.tokenStart,stackTop.tokenLength,startOffset+tokenLength);frame.children=stackTop.children;addChild(frame);offset=startOffset+tokenLength;return true;default:addText();return false;}}
function nextToken(){const matches=tokenizer.exec(indoc);if(null===matches){return['no-more-tokens'];}
const startedAt=matches.index;const[match,isClosing,name,isSelfClosed]=matches;const length=match.length;if(isSelfClosed){return['self-closed',name,startedAt,length];}
if(isClosing){return['closer',name,startedAt,length];}
return['opener',name,startedAt,length];}
function addText(){const length=indoc.length-offset;if(0===length){return;}
output.push(indoc.substr(offset,length));}
function addChild(frame){const{element,tokenStart,tokenLength,prevOffset,children}=frame;const parent=stack[stack.length-1];const text=indoc.substr(parent.prevOffset,tokenStart-parent.prevOffset);if(text){parent.children.push(text);}
parent.children.push(Object(external_React_["cloneElement"])(element,null,...children));parent.prevOffset=prevOffset?prevOffset:tokenStart+tokenLength;}
function closeOuterElement(endOffset){const{element,leadingTextStart,prevOffset,tokenStart,children}=stack.pop();const text=endOffset?indoc.substr(prevOffset,endOffset-prevOffset):indoc.substr(prevOffset);if(text){children.push(text);}
if(null!==leadingTextStart){output.push(indoc.substr(leadingTextStart,tokenStart-leadingTextStart));}
output.push(Object(external_React_["cloneElement"])(element,null,...children));}
var create_interpolate_element=(createInterpolateElement);var external_lodash_=__webpack_require__("YLtl");function concatChildren(){for(var _len=arguments.length,childrenArguments=new Array(_len),_key=0;_key<_len;_key++){childrenArguments[_key]=arguments[_key];}
return childrenArguments.reduce((accumulator,children,i)=>{external_React_["Children"].forEach(children,(child,j)=>{if(child&&'string'!==typeof child){child=Object(external_React_["cloneElement"])(child,{key:[i,j].join()});}
accumulator.push(child);});return accumulator;},[]);}
function switchChildrenNodeName(children,nodeName){return children&&external_React_["Children"].map(children,(elt,index)=>{if(Object(external_lodash_["isString"])(elt)){return Object(external_React_["createElement"])(nodeName,{key:index},elt);}
const{children:childrenProp,...props}=elt.props;return Object(external_React_["createElement"])(nodeName,{key:index,...props},childrenProp);});}
var external_ReactDOM_=__webpack_require__("faye");const isEmptyElement=element=>{if(Object(external_lodash_["isNumber"])(element)){return false;}
if(Object(external_lodash_["isString"])(element)||Object(external_lodash_["isArray"])(element)){return!element.length;}
return!element;};const Platform={OS:'web',select:spec=>'web'in spec?spec.web:spec.default,isWeb:true};var platform=(Platform);var external_wp_escapeHtml_=__webpack_require__("Vx3V");function RawHTML(_ref){let{children,...props}=_ref;let rawHtml='';external_React_["Children"].toArray(children).forEach(child=>{if(typeof child==='string'&&child.trim()!==''){rawHtml+=child;}});return Object(external_React_["createElement"])('div',{dangerouslySetInnerHTML:{__html:rawHtml},...props});}
const{Provider,Consumer}=Object(external_React_["createContext"])(undefined);const ForwardRef=Object(external_React_["forwardRef"])(()=>{return null;});const ATTRIBUTES_TYPES=new Set(['string','boolean','number']);const SELF_CLOSING_TAGS=new Set(['area','base','br','col','command','embed','hr','img','input','keygen','link','meta','param','source','track','wbr']);const BOOLEAN_ATTRIBUTES=new Set(['allowfullscreen','allowpaymentrequest','allowusermedia','async','autofocus','autoplay','checked','controls','default','defer','disabled','download','formnovalidate','hidden','ismap','itemscope','loop','multiple','muted','nomodule','novalidate','open','playsinline','readonly','required','reversed','selected','typemustmatch']);const ENUMERATED_ATTRIBUTES=new Set(['autocapitalize','autocomplete','charset','contenteditable','crossorigin','decoding','dir','draggable','enctype','formenctype','formmethod','http-equiv','inputmode','kind','method','preload','scope','shape','spellcheck','translate','type','wrap']);const CSS_PROPERTIES_SUPPORTS_UNITLESS=new Set(['animation','animationIterationCount','baselineShift','borderImageOutset','borderImageSlice','borderImageWidth','columnCount','cx','cy','fillOpacity','flexGrow','flexShrink','floodOpacity','fontWeight','gridColumnEnd','gridColumnStart','gridRowEnd','gridRowStart','lineHeight','opacity','order','orphans','r','rx','ry','shapeImageThreshold','stopOpacity','strokeDasharray','strokeDashoffset','strokeMiterlimit','strokeOpacity','strokeWidth','tabSize','widows','x','y','zIndex','zoom']);function hasPrefix(string,prefixes){return prefixes.some(prefix=>string.indexOf(prefix)===0);}
function isInternalAttribute(attribute){return 'key'===attribute||'children'===attribute;}
function getNormalAttributeValue(attribute,value){switch(attribute){case 'style':return renderStyle(value);}
return value;}
function getNormalAttributeName(attribute){switch(attribute){case 'htmlFor':return 'for';case 'className':return 'class';}
return attribute.toLowerCase();}
function getNormalStylePropertyName(property){if(Object(external_lodash_["startsWith"])(property,'--')){return property;}
if(hasPrefix(property,['ms','O','Moz','Webkit'])){return '-'+Object(external_lodash_["kebabCase"])(property);}
return Object(external_lodash_["kebabCase"])(property);}
function getNormalStylePropertyValue(property,value){if(typeof value==='number'&&0!==value&&!CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)){return value+'px';}
return value;}
function renderElement(element,context){let legacyContext=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(null===element||undefined===element||false===element){return '';}
if(Array.isArray(element)){return renderChildren(element,context,legacyContext);}
switch(typeof element){case 'string':return Object(external_wp_escapeHtml_["escapeHTML"])(element);case 'number':return element.toString();}
const{type,props}=element;switch(type){case external_React_["StrictMode"]:case external_React_["Fragment"]:return renderChildren(props.children,context,legacyContext);case RawHTML:const{children,...wrapperProps}=props;return renderNativeComponent(Object(external_lodash_["isEmpty"])(wrapperProps)?null:'div',{...wrapperProps,dangerouslySetInnerHTML:{__html:children}},context,legacyContext);}
switch(typeof type){case 'string':return renderNativeComponent(type,props,context,legacyContext);case 'function':if(type.prototype&&typeof type.prototype.render==='function'){return renderComponent(type,props,context,legacyContext);}
return renderElement(type(props,legacyContext),context,legacyContext);}
switch(type&&type.$$typeof){case Provider.$$typeof:return renderChildren(props.children,props.value,legacyContext);case Consumer.$$typeof:return renderElement(props.children(context||type._currentValue),context,legacyContext);case ForwardRef.$$typeof:return renderElement(type.render(props),context,legacyContext);}
return '';}
function renderNativeComponent(type,props,context){let legacyContext=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};let content='';if(type==='textarea'&&props.hasOwnProperty('value')){content=renderChildren(props.value,context,legacyContext);props=Object(external_lodash_["omit"])(props,'value');}else if(props.dangerouslySetInnerHTML&&typeof props.dangerouslySetInnerHTML.__html==='string'){content=props.dangerouslySetInnerHTML.__html;}else if(typeof props.children!=='undefined'){content=renderChildren(props.children,context,legacyContext);}
if(!type){return content;}
const attributes=renderAttributes(props);if(SELF_CLOSING_TAGS.has(type)){return '<'+type+attributes+'/>';}
return '<'+type+attributes+'>'+content+'</'+type+'>';}
function renderComponent(Component,props,context){let legacyContext=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};const instance=new
Component(props,legacyContext);if(typeof
instance.getChildContext==='function'){Object.assign(legacyContext,instance.getChildContext());}
const html=renderElement(instance.render(),context,legacyContext);return html;}
function renderChildren(children,context){let legacyContext=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};let result='';children=Object(external_lodash_["castArray"])(children);for(let i=0;i<children.length;i++){const child=children[i];result+=renderElement(child,context,legacyContext);}
return result;}
function renderAttributes(props){let result='';for(const key in props){const attribute=getNormalAttributeName(key);if(!Object(external_wp_escapeHtml_["isValidAttributeName"])(attribute)){continue;}
let value=getNormalAttributeValue(key,props[key]);if(!ATTRIBUTES_TYPES.has(typeof value)){continue;}
if(isInternalAttribute(key)){continue;}
const isBooleanAttribute=BOOLEAN_ATTRIBUTES.has(attribute);if(isBooleanAttribute&&value===false){continue;}
const isMeaningfulAttribute=isBooleanAttribute||hasPrefix(key,['data-','aria-'])||ENUMERATED_ATTRIBUTES.has(attribute);if(typeof value==='boolean'&&!isMeaningfulAttribute){continue;}
result+=' '+attribute;if(isBooleanAttribute){continue;}
if(typeof value==='string'){value=Object(external_wp_escapeHtml_["escapeAttribute"])(value);}
result+='="'+value+'"';}
return result;}
function renderStyle(style){if(!Object(external_lodash_["isPlainObject"])(style)){return style;}
let result;for(const property in style){const value=style[property];if(null===value||undefined===value){continue;}
if(result){result+=';';}else{result='';}
const normalName=getNormalStylePropertyName(property);const normalValue=getNormalStylePropertyValue(property,value);result+=normalName+':'+normalValue;}
return result;}
var serialize=(renderElement);})});