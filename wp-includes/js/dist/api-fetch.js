this["wp"]=this["wp"]||{};this["wp"]["apiFetch"]=(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="jqrR");})
({"Mmq9":(function(module,exports){(function(){module.exports=window["wp"]["url"];}());}),"jqrR":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var external_wp_i18n_=__webpack_require__("l3Sj");function createNonceMiddleware(nonce){const middleware=(options,next)=>{const{headers={}}=options;for(const headerName in headers){if(headerName.toLowerCase()==='x-wp-nonce'&&headers[headerName]===middleware.nonce){return next(options);}}
return next({...options,headers:{...headers,'X-WP-Nonce':middleware.nonce}});};middleware.nonce=nonce;return middleware;}
var nonce=(createNonceMiddleware);const namespaceAndEndpointMiddleware=(options,next)=>{let path=options.path;let namespaceTrimmed,endpointTrimmed;if(typeof options.namespace==='string'&&typeof options.endpoint==='string'){namespaceTrimmed=options.namespace.replace(/^\/|\/$/g,'');endpointTrimmed=options.endpoint.replace(/^\//,'');if(endpointTrimmed){path=namespaceTrimmed+'/'+endpointTrimmed;}else{path=namespaceTrimmed;}}
delete options.namespace;delete options.endpoint;return next({...options,path});};var namespace_endpoint=(namespaceAndEndpointMiddleware);const createRootURLMiddleware=rootURL=>(options,next)=>{return namespace_endpoint(options,optionsWithPath=>{let url=optionsWithPath.url;let path=optionsWithPath.path;let apiRoot;if(typeof path==='string'){apiRoot=rootURL;if(-1!==rootURL.indexOf('?')){path=path.replace('?','&');}
path=path.replace(/^\//,'');if('string'===typeof apiRoot&&-1!==apiRoot.indexOf('?')){path=path.replace('?','&');}
url=apiRoot+path;}
return next({...optionsWithPath,url});});};var root_url=(createRootURLMiddleware);var external_wp_url_=__webpack_require__("Mmq9");function createPreloadingMiddleware(preloadedData){const cache=Object.keys(preloadedData).reduce((result,path)=>{result[Object(external_wp_url_["normalizePath"])(path)]=preloadedData[path];return result;},{});return(options,next)=>{const{parse=true}=options;let rawPath=options.path;if(!rawPath&&options.url){const pathFromQuery=Object(external_wp_url_["getQueryArg"])(options.url,'rest_route');if(typeof pathFromQuery==='string'){rawPath=pathFromQuery;}}
if(typeof rawPath==='string'){const method=options.method||'GET';const path=Object(external_wp_url_["normalizePath"])(rawPath);if('GET'===method&&cache[path]){const cacheData=cache[path];delete cache[path];return Promise.resolve(parse?cacheData.body:new window.Response(JSON.stringify(cacheData.body),{status:200,statusText:'OK',headers:cacheData.headers}));}else if('OPTIONS'===method&&cache[method]&&cache[method][path]){const cacheData=cache[method][path];delete cache[method][path];return Promise.resolve(parse?cacheData.body:cacheData);}}
return next(options);};}
var preloading=(createPreloadingMiddleware);const modifyQuery=(_ref,queryArgs)=>{let{path,url,...options}=_ref;return{...options,url:url&&Object(external_wp_url_["addQueryArgs"])(url,queryArgs),path:path&&Object(external_wp_url_["addQueryArgs"])(path,queryArgs)};};const parseResponse=response=>response.json?response.json():Promise.reject(response);const parseLinkHeader=linkHeader=>{if(!linkHeader){return{};}
const match=linkHeader.match(/<([^>]+)>; rel="next"/);return match?{next:match[1]}:{};};const getNextPageUrl=response=>{const{next}=parseLinkHeader(response.headers.get('link'));return next;};const requestContainsUnboundedQuery=options=>{const pathIsUnbounded=!!options.path&&options.path.indexOf('per_page=-1')!==-1;const urlIsUnbounded=!!options.url&&options.url.indexOf('per_page=-1')!==-1;return pathIsUnbounded||urlIsUnbounded;};const fetchAllMiddleware=async(options,next)=>{if(options.parse===false){return next(options);}
if(!requestContainsUnboundedQuery(options)){return next(options);}
const response=await build_module({...modifyQuery(options,{per_page:100}),parse:false});const results=await parseResponse(response);if(!Array.isArray(results)){return results;}
let nextPage=getNextPageUrl(response);if(!nextPage){return results;}
let mergedResults=[].concat(results);while(nextPage){const nextResponse=await build_module({...options,path:undefined,url:nextPage,parse:false});const nextResults=await parseResponse(nextResponse);mergedResults=mergedResults.concat(nextResults);nextPage=getNextPageUrl(nextResponse);}
return mergedResults;};var fetch_all_middleware=(fetchAllMiddleware);const OVERRIDE_METHODS=new Set(['PATCH','PUT','DELETE']);const DEFAULT_METHOD='GET';const httpV1Middleware=(options,next)=>{const{method=DEFAULT_METHOD}=options;if(OVERRIDE_METHODS.has(method.toUpperCase())){options={...options,headers:{...options.headers,'X-HTTP-Method-Override':method,'Content-Type':'application/json'},method:'POST'};}
return next(options);};var http_v1=(httpV1Middleware);const userLocaleMiddleware=(options,next)=>{if(typeof options.url==='string'&&!Object(external_wp_url_["hasQueryArg"])(options.url,'_locale')){options.url=Object(external_wp_url_["addQueryArgs"])(options.url,{_locale:'user'});}
if(typeof options.path==='string'&&!Object(external_wp_url_["hasQueryArg"])(options.path,'_locale')){options.path=Object(external_wp_url_["addQueryArgs"])(options.path,{_locale:'user'});}
return next(options);};var user_locale=(userLocaleMiddleware);const response_parseResponse=function(response){let shouldParseResponse=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(shouldParseResponse){if(response.status===204){return null;}
return response.json?response.json():Promise.reject(response);}
return response;};const parseJsonAndNormalizeError=response=>{const invalidJsonError={code:'invalid_json',message:Object(external_wp_i18n_["__"])('The response is not a valid JSON response.')};if(!response||!response.json){throw invalidJsonError;}
return response.json().catch(()=>{throw invalidJsonError;});};const parseResponseAndNormalizeError=function(response){let shouldParseResponse=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;return Promise.resolve(response_parseResponse(response,shouldParseResponse)).catch(res=>parseAndThrowError(res,shouldParseResponse));};function parseAndThrowError(response){let shouldParseResponse=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!shouldParseResponse){throw response;}
return parseJsonAndNormalizeError(response).then(error=>{const unknownError={code:'unknown_error',message:Object(external_wp_i18n_["__"])('An unknown error occurred.')};throw error||unknownError;});}
function isMediaUploadRequest(options){const isCreateMethod=!!options.method&&options.method==='POST';const isMediaEndpoint=!!options.path&&options.path.indexOf('/wp/v2/media')!==-1||!!options.url&&options.url.indexOf('/wp/v2/media')!==-1;return isMediaEndpoint&&isCreateMethod;}
const mediaUploadMiddleware=(options,next)=>{if(!isMediaUploadRequest(options)){return next(options);}
let retries=0;const maxRetries=5;const postProcess=attachmentId=>{retries++;return next({path:`/wp/v2/media/${attachmentId}/post-process`,method:'POST',data:{action:'create-image-subsizes'},parse:false}).catch(()=>{if(retries<maxRetries){return postProcess(attachmentId);}
next({path:`/wp/v2/media/${attachmentId}?force=true`,method:'DELETE'});return Promise.reject();});};return next({...options,parse:false}).catch(response=>{const attachmentId=response.headers.get('x-wp-upload-attachment-id');if(response.status>=500&&response.status<600&&attachmentId){return postProcess(attachmentId).catch(()=>{if(options.parse!==false){return Promise.reject({code:'post_process',message:Object(external_wp_i18n_["__"])('Media upload failed. If this is a photo or a large image, please scale it down and try again.')});}
return Promise.reject(response);});}
return parseAndThrowError(response,options.parse);}).then(response=>parseResponseAndNormalizeError(response,options.parse));};var media_upload=(mediaUploadMiddleware);const DEFAULT_HEADERS={Accept:'application/json, */*;q=0.1'};const DEFAULT_OPTIONS={credentials:'include'};const middlewares=[user_locale,namespace_endpoint,http_v1,fetch_all_middleware];function registerMiddleware(middleware){middlewares.unshift(middleware);}
const checkStatus=response=>{if(response.status>=200&&response.status<300){return response;}
throw response;};const defaultFetchHandler=nextOptions=>{const{url,path,data,parse=true,...remainingOptions}=nextOptions;let{body,headers}=nextOptions;headers={...DEFAULT_HEADERS,...headers};if(data){body=JSON.stringify(data);headers['Content-Type']='application/json';}
const responsePromise=window.fetch(url||path||window.location.href,{...DEFAULT_OPTIONS,...remainingOptions,body,headers});return responsePromise.then(value=>Promise.resolve(value).then(checkStatus).catch(response=>parseAndThrowError(response,parse)).then(response=>parseResponseAndNormalizeError(response,parse)),err=>{if(err&&err.name==='AbortError'){throw err;}
throw{code:'fetch_error',message:Object(external_wp_i18n_["__"])('You are probably offline.')};});};let fetchHandler=defaultFetchHandler;function setFetchHandler(newFetchHandler){fetchHandler=newFetchHandler;}
function apiFetch(options){const enhancedHandler=middlewares.reduceRight((next,middleware)=>{return workingOptions=>middleware(workingOptions,next);},fetchHandler);return enhancedHandler(options).catch(error=>{if(error.code!=='rest_cookie_invalid_nonce'){return Promise.reject(error);}
return window.fetch(apiFetch.nonceEndpoint).then(checkStatus).then(data=>data.text()).then(text=>{apiFetch.nonceMiddleware.nonce=text;return apiFetch(options);});});}
apiFetch.use=registerMiddleware;apiFetch.setFetchHandler=setFetchHandler;apiFetch.createNonceMiddleware=nonce;apiFetch.createPreloadingMiddleware=preloading;apiFetch.createRootURLMiddleware=root_url;apiFetch.fetchAllMiddleware=fetch_all_middleware;apiFetch.mediaUploadMiddleware=media_upload;var build_module=__webpack_exports__["default"]=(apiFetch);}),"l3Sj":(function(module,exports){(function(){module.exports=window["wp"]["i18n"];}());})})["default"];