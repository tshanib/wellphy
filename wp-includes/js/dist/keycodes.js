this["wp"]=this["wp"]||{};this["wp"]["keycodes"]=(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="z7pY");})
({"YLtl":(function(module,exports){(function(){module.exports=window["lodash"];}());}),"l3Sj":(function(module,exports){(function(){module.exports=window["wp"]["i18n"];}());}),"z7pY":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"BACKSPACE",function(){return BACKSPACE;});__webpack_require__.d(__webpack_exports__,"TAB",function(){return TAB;});__webpack_require__.d(__webpack_exports__,"ENTER",function(){return ENTER;});__webpack_require__.d(__webpack_exports__,"ESCAPE",function(){return ESCAPE;});__webpack_require__.d(__webpack_exports__,"SPACE",function(){return SPACE;});__webpack_require__.d(__webpack_exports__,"PAGEUP",function(){return PAGEUP;});__webpack_require__.d(__webpack_exports__,"PAGEDOWN",function(){return PAGEDOWN;});__webpack_require__.d(__webpack_exports__,"END",function(){return END;});__webpack_require__.d(__webpack_exports__,"HOME",function(){return HOME;});__webpack_require__.d(__webpack_exports__,"LEFT",function(){return LEFT;});__webpack_require__.d(__webpack_exports__,"UP",function(){return UP;});__webpack_require__.d(__webpack_exports__,"RIGHT",function(){return RIGHT;});__webpack_require__.d(__webpack_exports__,"DOWN",function(){return DOWN;});__webpack_require__.d(__webpack_exports__,"DELETE",function(){return DELETE;});__webpack_require__.d(__webpack_exports__,"F10",function(){return F10;});__webpack_require__.d(__webpack_exports__,"ALT",function(){return ALT;});__webpack_require__.d(__webpack_exports__,"CTRL",function(){return CTRL;});__webpack_require__.d(__webpack_exports__,"COMMAND",function(){return COMMAND;});__webpack_require__.d(__webpack_exports__,"SHIFT",function(){return SHIFT;});__webpack_require__.d(__webpack_exports__,"ZERO",function(){return ZERO;});__webpack_require__.d(__webpack_exports__,"modifiers",function(){return modifiers;});__webpack_require__.d(__webpack_exports__,"rawShortcut",function(){return rawShortcut;});__webpack_require__.d(__webpack_exports__,"displayShortcutList",function(){return displayShortcutList;});__webpack_require__.d(__webpack_exports__,"displayShortcut",function(){return displayShortcut;});__webpack_require__.d(__webpack_exports__,"shortcutAriaLabel",function(){return shortcutAriaLabel;});__webpack_require__.d(__webpack_exports__,"isKeyboardEvent",function(){return isKeyboardEvent;});var external_lodash_=__webpack_require__("YLtl");var external_wp_i18n_=__webpack_require__("l3Sj");function isAppleOS(){let _window=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!_window){if(typeof window==='undefined'){return false;}
_window=window;}
const{platform}=_window.navigator;return platform.indexOf('Mac')!==-1||Object(external_lodash_["includes"])(['iPad','iPhone'],platform);}
const BACKSPACE=8;const TAB=9;const ENTER=13;const ESCAPE=27;const SPACE=32;const PAGEUP=33;const PAGEDOWN=34;const END=35;const HOME=36;const LEFT=37;const UP=38;const RIGHT=39;const DOWN=40;const DELETE=46;const F10=121;const ALT='alt';const CTRL='ctrl';const COMMAND='meta';const SHIFT='shift';const ZERO=48;const modifiers={primary:_isApple=>_isApple()?[COMMAND]:[CTRL],primaryShift:_isApple=>_isApple()?[SHIFT,COMMAND]:[CTRL,SHIFT],primaryAlt:_isApple=>_isApple()?[ALT,COMMAND]:[CTRL,ALT],secondary:_isApple=>_isApple()?[SHIFT,ALT,COMMAND]:[CTRL,SHIFT,ALT],access:_isApple=>_isApple()?[CTRL,ALT]:[SHIFT,ALT],ctrl:()=>[CTRL],alt:()=>[ALT],ctrlShift:()=>[CTRL,SHIFT],shift:()=>[SHIFT],shiftAlt:()=>[SHIFT,ALT],undefined:()=>[]};const rawShortcut=Object(external_lodash_["mapValues"])(modifiers,modifier=>{return(function(character){let _isApple=arguments.length>1&&arguments[1]!==undefined?arguments[1]:isAppleOS;return[...modifier(_isApple),character.toLowerCase()].join('+');});});const displayShortcutList=Object(external_lodash_["mapValues"])(modifiers,modifier=>{return(function(character){let _isApple=arguments.length>1&&arguments[1]!==undefined?arguments[1]:isAppleOS;const isApple=_isApple();const replacementKeyMap={[ALT]:isApple?'⌥':'Alt',[CTRL]:isApple?'⌃':'Ctrl',[COMMAND]:'⌘',[SHIFT]:isApple?'⇧':'Shift'};const modifierKeys=modifier(_isApple).reduce((accumulator,key)=>{const replacementKey=Object(external_lodash_["get"])(replacementKeyMap,key,key);if(isApple){return[...accumulator,replacementKey];}
return[...accumulator,replacementKey,'+'];},[]);const capitalizedCharacter=Object(external_lodash_["capitalize"])(character);return[...modifierKeys,capitalizedCharacter];});});const displayShortcut=Object(external_lodash_["mapValues"])(displayShortcutList,shortcutList=>{return(function(character){let _isApple=arguments.length>1&&arguments[1]!==undefined?arguments[1]:isAppleOS;return shortcutList(character,_isApple).join('');});});const shortcutAriaLabel=Object(external_lodash_["mapValues"])(modifiers,modifier=>{return(function(character){let _isApple=arguments.length>1&&arguments[1]!==undefined?arguments[1]:isAppleOS;const isApple=_isApple();const replacementKeyMap={[SHIFT]:'Shift',[COMMAND]:isApple?'Command':'Control',[CTRL]:'Control',[ALT]:isApple?'Option':'Alt',',':Object(external_wp_i18n_["__"])('Comma'),'.':Object(external_wp_i18n_["__"])('Period'),'`':Object(external_wp_i18n_["__"])('Backtick')};return[...modifier(_isApple),character].map(key=>Object(external_lodash_["capitalize"])(Object(external_lodash_["get"])(replacementKeyMap,key,key))).join(isApple?' ':' + ');});});function getEventModifiers(event){return([ALT,CTRL,COMMAND,SHIFT].filter(key=>event[`${key}Key`]));}
const isKeyboardEvent=Object(external_lodash_["mapValues"])(modifiers,getModifiers=>{return(function(event,character){let _isApple=arguments.length>2&&arguments[2]!==undefined?arguments[2]:isAppleOS;const mods=getModifiers(_isApple);const eventMods=getEventModifiers(event);if(Object(external_lodash_["xor"])(mods,eventMods).length){return false;}
let key=event.key.toLowerCase();if(!character){return Object(external_lodash_["includes"])(mods,key);}
if(event.altKey&&character.length===1){key=String.fromCharCode(event.keyCode).toLowerCase();}
if(character==='del'){character='delete';}
return key===character.toLowerCase();});});})});