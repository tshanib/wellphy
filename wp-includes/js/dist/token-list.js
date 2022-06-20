this["wp"]=this["wp"]||{};this["wp"]["tokenList"]=(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="hwXU");})
({"YLtl":(function(module,exports){(function(){module.exports=window["lodash"];}());}),"hwXU":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",function(){return TokenList;});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("YLtl");var lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);class TokenList{constructor(){let initialValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';this.value=initialValue;this._currentValue;this._valueAsArray;}
entries(){return this._valueAsArray.entries(...arguments);}
forEach(){return this._valueAsArray.forEach(...arguments);}
keys(){return this._valueAsArray.keys(...arguments);}
values(){return this._valueAsArray.values(...arguments);}
get value(){return this._currentValue;}
set value(value){value=String(value);this._valueAsArray=Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["compact"])(value.split(/\s+/g)));this._currentValue=this._valueAsArray.join(' ');}
get length(){return this._valueAsArray.length;}
toString(){return this.value;}*[Symbol.iterator](){return yield*this._valueAsArray;}
item(index){return this._valueAsArray[index];}
contains(item){return this._valueAsArray.indexOf(item)!==-1;}
add(){for(var _len=arguments.length,items=new Array(_len),_key=0;_key<_len;_key++){items[_key]=arguments[_key];}
this.value+=' '+items.join(' ');}
remove(){for(var _len2=arguments.length,items=new Array(_len2),_key2=0;_key2<_len2;_key2++){items[_key2]=arguments[_key2];}
this.value=Object(lodash__WEBPACK_IMPORTED_MODULE_0__["without"])(this._valueAsArray,...items).join(' ');}
toggle(token,force){if(undefined===force){force=!this.contains(token);}
if(force){this.add(token);}else{this.remove(token);}
return force;}
replace(token,newToken){if(!this.contains(token)){return false;}
this.remove(token);this.add(newToken);return true;}
supports(){return true;}}})})["default"];