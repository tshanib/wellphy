this["wp"]=this["wp"]||{};this["wp"]["dom"]=(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="2sUP");})
({"2sUP":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"focus",function(){return build_module_focus;});__webpack_require__.d(__webpack_exports__,"computeCaretRect",function(){return computeCaretRect;});__webpack_require__.d(__webpack_exports__,"documentHasTextSelection",function(){return documentHasTextSelection;});__webpack_require__.d(__webpack_exports__,"documentHasUncollapsedSelection",function(){return documentHasUncollapsedSelection;});__webpack_require__.d(__webpack_exports__,"documentHasSelection",function(){return documentHasSelection;});__webpack_require__.d(__webpack_exports__,"getRectangleFromRange",function(){return getRectangleFromRange;});__webpack_require__.d(__webpack_exports__,"getScrollContainer",function(){return getScrollContainer;});__webpack_require__.d(__webpack_exports__,"getOffsetParent",function(){return getOffsetParent;});__webpack_require__.d(__webpack_exports__,"isEntirelySelected",function(){return isEntirelySelected;});__webpack_require__.d(__webpack_exports__,"isHorizontalEdge",function(){return isHorizontalEdge;});__webpack_require__.d(__webpack_exports__,"isNumberInput",function(){return isNumberInput;});__webpack_require__.d(__webpack_exports__,"isTextField",function(){return isTextField;});__webpack_require__.d(__webpack_exports__,"isVerticalEdge",function(){return isVerticalEdge;});__webpack_require__.d(__webpack_exports__,"placeCaretAtHorizontalEdge",function(){return placeCaretAtHorizontalEdge;});__webpack_require__.d(__webpack_exports__,"placeCaretAtVerticalEdge",function(){return placeCaretAtVerticalEdge;});__webpack_require__.d(__webpack_exports__,"replace",function(){return replace;});__webpack_require__.d(__webpack_exports__,"remove",function(){return remove;});__webpack_require__.d(__webpack_exports__,"insertAfter",function(){return insertAfter;});__webpack_require__.d(__webpack_exports__,"unwrap",function(){return unwrap;});__webpack_require__.d(__webpack_exports__,"replaceTag",function(){return replaceTag;});__webpack_require__.d(__webpack_exports__,"wrap",function(){return wrap;});__webpack_require__.d(__webpack_exports__,"__unstableStripHTML",function(){return stripHTML;});__webpack_require__.d(__webpack_exports__,"isEmpty",function(){return isEmpty;});__webpack_require__.d(__webpack_exports__,"removeInvalidHTML",function(){return removeInvalidHTML;});__webpack_require__.d(__webpack_exports__,"isRTL",function(){return isRTL;});__webpack_require__.d(__webpack_exports__,"safeHTML",function(){return safeHTML;});__webpack_require__.d(__webpack_exports__,"getPhrasingContentSchema",function(){return getPhrasingContentSchema;});__webpack_require__.d(__webpack_exports__,"isPhrasingContent",function(){return isPhrasingContent;});__webpack_require__.d(__webpack_exports__,"isTextContent",function(){return isTextContent;});__webpack_require__.d(__webpack_exports__,"getFilesFromDataTransfer",function(){return getFilesFromDataTransfer;});var focusable_namespaceObject={};__webpack_require__.r(focusable_namespaceObject);__webpack_require__.d(focusable_namespaceObject,"find",function(){return find;});var tabbable_namespaceObject={};__webpack_require__.r(tabbable_namespaceObject);__webpack_require__.d(tabbable_namespaceObject,"isTabbableIndex",function(){return isTabbableIndex;});__webpack_require__.d(tabbable_namespaceObject,"find",function(){return tabbable_find;});__webpack_require__.d(tabbable_namespaceObject,"findPrevious",function(){return findPrevious;});__webpack_require__.d(tabbable_namespaceObject,"findNext",function(){return findNext;});function buildSelector(sequential){return[sequential?'[tabindex]:not([tabindex^="-"])':'[tabindex]','a[href]','button:not([disabled])','input:not([type="hidden"]):not([disabled])','select:not([disabled])','textarea:not([disabled])','iframe:not([tabindex^="-"])','object','embed','area[href]','[contenteditable]:not([contenteditable=false])'].join(',');}
function isVisible(element){return element.offsetWidth>0||element.offsetHeight>0||element.getClientRects().length>0;}
function isValidFocusableArea(element){const map=element.closest('map[name]');if(!map){return false;}
const img=element.ownerDocument.querySelector('img[usemap="#'+map.name+'"]');return!!img&&isVisible(img);}
function find(context){let{sequential=false}=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};const elements=context.querySelectorAll(buildSelector(sequential));return Array.from(elements).filter(element=>{if(!isVisible(element)){return false;}
const{nodeName}=element;if('AREA'===nodeName){return isValidFocusableArea(element);}
return true;});}
var external_lodash_=__webpack_require__("YLtl");function getTabIndex(element){const tabIndex=element.getAttribute('tabindex');return tabIndex===null?0:parseInt(tabIndex,10);}
function isTabbableIndex(element){return getTabIndex(element)!==-1;}
function createStatefulCollapseRadioGroup(){const CHOSEN_RADIO_BY_NAME={};return function collapseRadioGroup(result,element){const{nodeName,type,checked,name}=element;if(nodeName!=='INPUT'||type!=='radio'||!name){return result.concat(element);}
const hasChosen=CHOSEN_RADIO_BY_NAME.hasOwnProperty(name);const isChosen=checked||!hasChosen;if(!isChosen){return result;}
if(hasChosen){const hadChosenElement=CHOSEN_RADIO_BY_NAME[name];result=Object(external_lodash_["without"])(result,hadChosenElement);}
CHOSEN_RADIO_BY_NAME[name]=element;return result.concat(element);};}
function mapElementToObjectTabbable(element,index){return{element,index};}
function mapObjectTabbableToElement(object){return object.element;}
function compareObjectTabbables(a,b){const aTabIndex=getTabIndex(a.element);const bTabIndex=getTabIndex(b.element);if(aTabIndex===bTabIndex){return a.index-b.index;}
return aTabIndex-bTabIndex;}
function filterTabbable(focusables){return focusables.filter(isTabbableIndex).map(mapElementToObjectTabbable).sort(compareObjectTabbables).map(mapObjectTabbableToElement).reduce(createStatefulCollapseRadioGroup(),[]);}
function tabbable_find(context){return filterTabbable(find(context));}
function findPrevious(element){const focusables=find(element.ownerDocument.body);const index=focusables.indexOf(element);focusables.length=index;return Object(external_lodash_["last"])(filterTabbable(focusables));}
function findNext(element){const focusables=find(element.ownerDocument.body);const index=focusables.indexOf(element);const remaining=focusables.slice(index+1);return Object(external_lodash_["first"])(filterTabbable(remaining));}
function assertIsDefined(val,name){if(false){}}
function getRectangleFromRange(range){if(!range.collapsed){const rects=Array.from(range.getClientRects());if(rects.length===1){return rects[0];}
const filteredRects=rects.filter(_ref=>{let{width}=_ref;return width>1;});if(filteredRects.length===0){return range.getBoundingClientRect();}
if(filteredRects.length===1){return filteredRects[0];}
let{top:furthestTop,bottom:furthestBottom,left:furthestLeft,right:furthestRight}=filteredRects[0];for(const{top,bottom,left,right}of filteredRects){if(top<furthestTop)furthestTop=top;if(bottom>furthestBottom)furthestBottom=bottom;if(left<furthestLeft)furthestLeft=left;if(right>furthestRight)furthestRight=right;}
return new window.DOMRect(furthestLeft,furthestTop,furthestRight-furthestLeft,furthestBottom-furthestTop);}
const{startContainer}=range;const{ownerDocument}=startContainer;if(startContainer.nodeName==='BR'){const{parentNode}=startContainer;assertIsDefined(parentNode,'parentNode');const index=Array.from(parentNode.childNodes).indexOf(startContainer);assertIsDefined(ownerDocument,'ownerDocument');range=ownerDocument.createRange();range.setStart(parentNode,index);range.setEnd(parentNode,index);}
let rect=range.getClientRects()[0];if(!rect){assertIsDefined(ownerDocument,'ownerDocument');const padNode=ownerDocument.createTextNode('\u200b');range=range.cloneRange();range.insertNode(padNode);rect=range.getClientRects()[0];assertIsDefined(padNode.parentNode,'padNode.parentNode');padNode.parentNode.removeChild(padNode);}
return rect;}
function computeCaretRect(win){const selection=win.getSelection();assertIsDefined(selection,'selection');const range=selection.rangeCount?selection.getRangeAt(0):null;if(!range){return null;}
return getRectangleFromRange(range);}
function documentHasTextSelection(doc){assertIsDefined(doc.defaultView,'doc.defaultView');const selection=doc.defaultView.getSelection();assertIsDefined(selection,'selection');const range=selection.rangeCount?selection.getRangeAt(0):null;return!!range&&!range.collapsed;}
function isHTMLInputElement(node){return!!node&&node.nodeName==='INPUT';}
function isTextField(node){const nonTextInputs=['button','checkbox','hidden','file','radio','image','range','reset','submit','number'];return isHTMLInputElement(node)&&node.type&&!nonTextInputs.includes(node.type)||node.nodeName==='TEXTAREA'||node.contentEditable==='true';}
function isNumberInput(node){return isHTMLInputElement(node)&&node.type==='number'&&!!node.valueAsNumber;}
function inputFieldHasUncollapsedSelection(element){if(!isTextField(element)&&!isNumberInput(element)){return false;}
try{const{selectionStart,selectionEnd}=element;return selectionStart!==null&&selectionStart!==selectionEnd;}catch(error){return false;}}
function documentHasUncollapsedSelection(doc){return documentHasTextSelection(doc)||!!doc.activeElement&&inputFieldHasUncollapsedSelection(doc.activeElement);}
function documentHasSelection(doc){return!!doc.activeElement&&(isTextField(doc.activeElement)||isNumberInput(doc.activeElement)||documentHasTextSelection(doc));}
function getComputedStyle(element){assertIsDefined(element.ownerDocument.defaultView,'element.ownerDocument.defaultView');return element.ownerDocument.defaultView.getComputedStyle(element);}
function getScrollContainer(node){if(!node){return undefined;}
if(node.scrollHeight>node.clientHeight){const{overflowY}=getComputedStyle(node);if(/(auto|scroll)/.test(overflowY)){return node;}}
return getScrollContainer(node.parentNode);}
function getOffsetParent(node){let closestElement;while(closestElement=node.parentNode){if(closestElement.nodeType===closestElement.ELEMENT_NODE){break;}}
if(!closestElement){return null;}
if(getComputedStyle(closestElement).position!=='static'){return closestElement;}
return(closestElement.offsetParent);}
function isInputOrTextArea(element){return element.tagName==='INPUT'||element.tagName==='TEXTAREA';}
function isEntirelySelected(element){if(isInputOrTextArea(element)){return element.selectionStart===0&&element.value.length===element.selectionEnd;}
if(!element.isContentEditable){return true;}
const{ownerDocument}=element;const{defaultView}=ownerDocument;assertIsDefined(defaultView,'defaultView');const selection=defaultView.getSelection();assertIsDefined(selection,'selection');const range=selection.rangeCount?selection.getRangeAt(0):null;if(!range){return true;}
const{startContainer,endContainer,startOffset,endOffset}=range;if(startContainer===element&&endContainer===element&&startOffset===0&&endOffset===element.childNodes.length){return true;}
const lastChild=element.lastChild;assertIsDefined(lastChild,'lastChild');const endContainerContentLength=endContainer.nodeType===endContainer.TEXT_NODE?endContainer.data.length:endContainer.childNodes.length;return isDeepChild(startContainer,element,'firstChild')&&isDeepChild(endContainer,element,'lastChild')&&startOffset===0&&endOffset===endContainerContentLength;}
function isDeepChild(query,container,propName){let candidate=container;do{if(query===candidate){return true;}
candidate=candidate[propName];}while(candidate);return false;}
function isRTL(element){return getComputedStyle(element).direction==='rtl';}
function getRangeHeight(range){const rects=Array.from(range.getClientRects());if(!rects.length){return;}
const highestTop=Math.min(...rects.map(_ref=>{let{top}=_ref;return top;}));const lowestBottom=Math.max(...rects.map(_ref2=>{let{bottom}=_ref2;return bottom;}));return lowestBottom-highestTop;}
function isSelectionForward(selection){const{anchorNode,focusNode,anchorOffset,focusOffset}=selection;assertIsDefined(anchorNode,'anchorNode');assertIsDefined(focusNode,'focusNode');const position=anchorNode.compareDocumentPosition(focusNode);if(position&anchorNode.DOCUMENT_POSITION_PRECEDING){return false;}
if(position&anchorNode.DOCUMENT_POSITION_FOLLOWING){return true;}
if(position===0){return anchorOffset<=focusOffset;}
return true;}
function caretRangeFromPoint(doc,x,y){if(doc.caretRangeFromPoint){return doc.caretRangeFromPoint(x,y);}
if(!doc.caretPositionFromPoint){return null;}
const point=doc.caretPositionFromPoint(x,y);if(!point){return null;}
const range=doc.createRange();range.setStart(point.offsetNode,point.offset);range.collapse(true);return range;}
function hiddenCaretRangeFromPoint(doc,x,y,container){const originalZIndex=container.style.zIndex;const originalPosition=container.style.position;const{position='static'}=getComputedStyle(container);if(position==='static'){container.style.position='relative';}
container.style.zIndex='10000';const range=caretRangeFromPoint(doc,x,y);container.style.zIndex=originalZIndex;container.style.position=originalPosition;return range;}
function isEdge(container,isReverse){let onlyVertical=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(isInputOrTextArea(container)&&typeof container.selectionStart==='number'){if(container.selectionStart!==container.selectionEnd){return false;}
if(isReverse){return container.selectionStart===0;}
return container.value.length===container.selectionStart;}
if(!container.isContentEditable){return true;}
const{ownerDocument}=container;const{defaultView}=ownerDocument;assertIsDefined(defaultView,'defaultView');const selection=defaultView.getSelection();if(!selection||!selection.rangeCount){return false;}
const range=selection.getRangeAt(0);const collapsedRange=range.cloneRange();const isForward=isSelectionForward(selection);const isCollapsed=selection.isCollapsed;if(!isCollapsed){collapsedRange.collapse(!isForward);}
const collapsedRangeRect=getRectangleFromRange(collapsedRange);const rangeRect=getRectangleFromRange(range);if(!collapsedRangeRect||!rangeRect){return false;}
const rangeHeight=getRangeHeight(range);if(!isCollapsed&&rangeHeight&&rangeHeight>collapsedRangeRect.height&&isForward===isReverse){return false;}
const isReverseDir=isRTL(container)?!isReverse:isReverse;const containerRect=container.getBoundingClientRect();const x=isReverseDir?containerRect.left+1:containerRect.right-1;const y=isReverse?containerRect.top+1:containerRect.bottom-1;const testRange=hiddenCaretRangeFromPoint(ownerDocument,x,y,container);if(!testRange){return false;}
const testRect=getRectangleFromRange(testRange);if(!testRect){return false;}
const verticalSide=isReverse?'top':'bottom';const horizontalSide=isReverseDir?'left':'right';const verticalDiff=testRect[verticalSide]-rangeRect[verticalSide];const horizontalDiff=testRect[horizontalSide]-collapsedRangeRect[horizontalSide];const hasVerticalDiff=Math.abs(verticalDiff)<=1;const hasHorizontalDiff=Math.abs(horizontalDiff)<=1;return onlyVertical?hasVerticalDiff:hasVerticalDiff&&hasHorizontalDiff;}
function isHorizontalEdge(container,isReverse){return isEdge(container,isReverse);}
function isVerticalEdge(container,isReverse){return isEdge(container,isReverse,true);}
function getRange(container,isReverse,x){const{ownerDocument}=container;const isReverseDir=isRTL(container)?!isReverse:isReverse;const containerRect=container.getBoundingClientRect();if(x===undefined){x=isReverse?containerRect.right-1:containerRect.left+1;}
const y=isReverseDir?containerRect.bottom-1:containerRect.top+1;return hiddenCaretRangeFromPoint(ownerDocument,x,y,container);}
function placeCaretAtEdge(container,isReverse,x){if(!container){return;}
container.focus();if(isInputOrTextArea(container)){if(typeof container.selectionStart!=='number'){return;}
if(isReverse){container.selectionStart=container.value.length;container.selectionEnd=container.value.length;}else{container.selectionStart=0;container.selectionEnd=0;}
return;}
if(!container.isContentEditable){return;}
let range=getRange(container,isReverse,x);if(!range||!range.startContainer||!container.contains(range.startContainer)){container.scrollIntoView(isReverse);range=range=getRange(container,isReverse,x);if(!range||!range.startContainer||!container.contains(range.startContainer)){return;}}
const{ownerDocument}=container;const{defaultView}=ownerDocument;assertIsDefined(defaultView,'defaultView');const selection=defaultView.getSelection();assertIsDefined(selection,'selection');selection.removeAllRanges();selection.addRange(range);}
function placeCaretAtHorizontalEdge(container,isReverse){return placeCaretAtEdge(container,isReverse,undefined);}
function placeCaretAtVerticalEdge(container,isReverse,rect){return placeCaretAtEdge(container,isReverse,rect===null||rect===void 0?void 0:rect.left);}
function insertAfter(newNode,referenceNode){assertIsDefined(referenceNode.parentNode,'referenceNode.parentNode');referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling);}
function remove(node){assertIsDefined(node.parentNode,'node.parentNode');node.parentNode.removeChild(node);}
function replace(processedNode,newNode){assertIsDefined(processedNode.parentNode,'processedNode.parentNode');insertAfter(newNode,processedNode.parentNode);remove(processedNode);}
function unwrap(node){const parent=node.parentNode;assertIsDefined(parent,'node.parentNode');while(node.firstChild){parent.insertBefore(node.firstChild,node);}
parent.removeChild(node);}
function replaceTag(node,tagName){const newNode=node.ownerDocument.createElement(tagName);while(node.firstChild){newNode.appendChild(node.firstChild);}
assertIsDefined(node.parentNode,'node.parentNode');node.parentNode.replaceChild(newNode,node);return newNode;}
function wrap(newNode,referenceNode){assertIsDefined(referenceNode.parentNode,'referenceNode.parentNode');referenceNode.parentNode.insertBefore(newNode,referenceNode);newNode.appendChild(referenceNode);}
function safeHTML(html){const{body}=document.implementation.createHTMLDocument('');body.innerHTML=html;const elements=body.getElementsByTagName('*');let elementIndex=elements.length;while(elementIndex--){const element=elements[elementIndex];if(element.tagName==='SCRIPT'){remove(element);}else{let attributeIndex=element.attributes.length;while(attributeIndex--){const{name:key}=element.attributes[attributeIndex];if(key.startsWith('on')){element.removeAttribute(key);}}}}
return body.innerHTML;}
function stripHTML(html){html=safeHTML(html);const doc=document.implementation.createHTMLDocument('');doc.body.innerHTML=html;return doc.body.textContent||'';}
function isEmpty(element){switch(element.nodeType){case element.TEXT_NODE:return /^[ \f\n\r\t\v\u00a0]*$/.test(element.nodeValue||'');case element.ELEMENT_NODE:if(element.hasAttributes()){return false;}else if(!element.hasChildNodes()){return true;}
return(Array.from(element.childNodes).every(isEmpty));default:return true;}}
const textContentSchema={strong:{},em:{},s:{},del:{},ins:{},a:{attributes:['href','target','rel','id']},code:{},abbr:{attributes:['title']},sub:{},sup:{},br:{},small:{},q:{attributes:['cite']},dfn:{attributes:['title']},data:{attributes:['value']},time:{attributes:['datetime']},var:{},samp:{},kbd:{},i:{},b:{},u:{},mark:{},ruby:{},rt:{},rp:{},bdi:{attributes:['dir']},bdo:{attributes:['dir']},wbr:{},'#text':{}};Object(external_lodash_["without"])(Object.keys(textContentSchema),'#text','br').forEach(tag=>{textContentSchema[tag].children=Object(external_lodash_["omit"])(textContentSchema,tag);});const embeddedContentSchema={audio:{attributes:['src','preload','autoplay','mediagroup','loop','muted']},canvas:{attributes:['width','height']},embed:{attributes:['src','type','width','height']},img:{attributes:['alt','src','srcset','usemap','ismap','width','height']},object:{attributes:['data','type','name','usemap','form','width','height']},video:{attributes:['src','poster','preload','autoplay','mediagroup','loop','muted','controls','width','height']}};const phrasingContentSchema={...textContentSchema,...embeddedContentSchema};function getPhrasingContentSchema(context){if(context!=='paste'){return phrasingContentSchema;}
return Object(external_lodash_["omit"])({...phrasingContentSchema,ins:{children:phrasingContentSchema.ins.children},del:{children:phrasingContentSchema.del.children}},['u','abbr','data','time','wbr','bdi','bdo']);}
function isPhrasingContent(node){const tag=node.nodeName.toLowerCase();return getPhrasingContentSchema().hasOwnProperty(tag)||tag==='span';}
function isTextContent(node){const tag=node.nodeName.toLowerCase();return textContentSchema.hasOwnProperty(tag)||tag==='span';}
function isElement(node){return!!node&&node.nodeType===node.ELEMENT_NODE;}
function cleanNodeList(nodeList,doc,schema,inline){Array.from(nodeList).forEach((node)=>{var _schema$tag$isMatch,_schema$tag;const tag=node.nodeName.toLowerCase();if(schema.hasOwnProperty(tag)&&(!schema[tag].isMatch||(_schema$tag$isMatch=(_schema$tag=schema[tag]).isMatch)!==null&&_schema$tag$isMatch!==void 0&&_schema$tag$isMatch.call(_schema$tag,node))){if(isElement(node)){const{attributes=[],classes=[],children,require=[],allowEmpty}=schema[tag];if(children&&!allowEmpty&&isEmpty(node)){remove(node);return;}
if(node.hasAttributes()){Array.from(node.attributes).forEach(_ref=>{let{name}=_ref;if(name!=='class'&&!Object(external_lodash_["includes"])(attributes,name)){node.removeAttribute(name);}});if(node.classList&&node.classList.length){const mattchers=classes.map(item=>{if(typeof item==='string'){return(className)=>className===item;}else if(item instanceof RegExp){return(className)=>item.test(className);}
return external_lodash_["noop"];});Array.from(node.classList).forEach(name=>{if(!mattchers.some(isMatch=>isMatch(name))){node.classList.remove(name);}});if(!node.classList.length){node.removeAttribute('class');}}}
if(node.hasChildNodes()){if(children==='*'){return;}
if(children){if(require.length&&!node.querySelector(require.join(','))){cleanNodeList(node.childNodes,doc,schema,inline);unwrap(node);}else if(node.parentNode&&node.parentNode.nodeName==='BODY'&&isPhrasingContent(node)){cleanNodeList(node.childNodes,doc,schema,inline);if(Array.from(node.childNodes).some(child=>!isPhrasingContent(child))){unwrap(node);}}else{cleanNodeList(node.childNodes,doc,children,inline);}}else{while(node.firstChild){remove(node.firstChild);}}}}}else{cleanNodeList(node.childNodes,doc,schema,inline);if(inline&&!isPhrasingContent(node)&&node.nextElementSibling){insertAfter(doc.createElement('br'),node);}
unwrap(node);}});}
function removeInvalidHTML(HTML,schema,inline){const doc=document.implementation.createHTMLDocument('');doc.body.innerHTML=HTML;cleanNodeList(doc.body.childNodes,doc,schema,inline);return doc.body.innerHTML;}
function getFilesFromDataTransfer(dataTransfer){const files=Array.from(dataTransfer.files);Array.from(dataTransfer.items).forEach(item=>{const file=item.getAsFile();if(file&&!files.find(_ref=>{let{name,type,size}=_ref;return name===file.name&&type===file.type&&size===file.size;})){files.push(file);}});return files;}
const build_module_focus={focusable:focusable_namespaceObject,tabbable:tabbable_namespaceObject};}),"YLtl":(function(module,exports){(function(){module.exports=window["lodash"];}());})});