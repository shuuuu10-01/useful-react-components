/*! For license information please see components-Dropdown-Dropdown-stories.a35156c5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkuseful_components=self.webpackChunkuseful_components||[]).push([[451],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/Dropdown/Dropdown.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Gallery:function(){return Gallery},Sample:function(){return Sample},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Dropdown_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Dropdown_module_dropdown="Dropdown_dropdown__QEFz6",Dropdown_module_toggle="Dropdown_toggle__UuSWb",Dropdown_module_menu="Dropdown_menu__mxeOQ",Dropdown_module_upper="Dropdown_upper__iQISh",Dropdown_module_lower="Dropdown_lower__vFpJL",Dropdown_module_items="Dropdown_items__sUwUY",slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","className"],_excluded2=["children","className"],_excluded3=["children","className"],DropdownContext=(0,react.createContext)({isOpen:!1,setIsOpen:function setIsOpen(){},isInUpperHalf:!1}),Dropdown=function Dropdown(_ref){var children=_ref.children,className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],dropdownRef=(0,react.useRef)(null),_useElementPosition=function useElementPosition(elementRef){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isInUpperHalf=_useState2[0],setIsInUpperHalf=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),isInLowerHalf=_useState4[0],setIsInLowerHalf=_useState4[1],handleScroll=(0,react.useCallback)((function(){if(elementRef.current){var _elementRef$current$g=elementRef.current.getBoundingClientRect(),top=_elementRef$current$g.top,bottom=_elementRef$current$g.bottom,windowHeight=window.innerHeight;setIsInUpperHalf(top<windowHeight/2),setIsInLowerHalf(bottom>windowHeight/2)}}),[elementRef]);return(0,react.useEffect)((function(){return handleScroll(),window.addEventListener("scroll",handleScroll),function(){window.removeEventListener("scroll",handleScroll)}}),[handleScroll]),{isInUpperHalf:isInUpperHalf,isInLowerHalf:isInLowerHalf}}(dropdownRef),isInUpperHalf=_useElementPosition.isInUpperHalf;return(0,jsx_runtime.jsx)(DropdownContext.Provider,{value:{isOpen:isOpen,setIsOpen:setIsOpen,isInUpperHalf:isInUpperHalf},children:(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({ref:dropdownRef,className:classnames_default()(Dropdown_module_dropdown,className),tabIndex:0,onBlur:function handleBlur(event){var _dropdownRef$current,relatedTarget=event.relatedTarget;relatedTarget&&null!==(_dropdownRef$current=dropdownRef.current)&&void 0!==_dropdownRef$current&&_dropdownRef$current.contains(relatedTarget)||setIsOpen(!1)}},props),{},{children:children}))})};Dropdown.ToggleButton=function ToggleButton(_ref2){var children=_ref2.children,className=_ref2.className,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2),_useContext=(0,react.useContext)(DropdownContext),isOpen=_useContext.isOpen,setIsOpen=_useContext.setIsOpen;return(0,jsx_runtime.jsx)(Button.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()(Dropdown_module_toggle,className)},props),{},{onClick:function onClick(){return setIsOpen(!isOpen)},children:children}))},Dropdown.Body=function Body(_ref3){var children=_ref3.children,className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3),_useContext2=(0,react.useContext)(DropdownContext),isOpen=_useContext2.isOpen,isInUpperHalf=_useContext2.isInUpperHalf;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:isOpen?(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()(Dropdown_module_menu,isInUpperHalf?Dropdown_module_lower:Dropdown_module_upper,className)},props),{},{children:children})):null})};var _Sample$parameters,_Sample$parameters2,_Sample$parameters2$d,_Gallery$parameters,_Gallery$parameters2,_Gallery$parameters2$,components_Dropdown=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/Dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}var Dropdown_stories={title:"Dropdown"},Sample=function Sample(){return(0,jsx_runtime.jsx)("div",{style:{width:"500px",height:"100px"},children:(0,jsx_runtime.jsxs)(components_Dropdown,{children:[(0,jsx_runtime.jsx)(components_Dropdown.ToggleButton,{children:"toggle"}),(0,jsx_runtime.jsx)(components_Dropdown.Body,{children:(0,jsx_runtime.jsxs)("ul",{className:Dropdown_module_items,children:[(0,jsx_runtime.jsx)("li",{children:"first item"}),(0,jsx_runtime.jsx)("li",{children:"second item"})]})})]})})},Gallery=function Gallery(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:"トグルボタンが画面真ん中より下のとき、トグルボタンより上にドロップダウンを表示"}),(0,jsx_runtime.jsx)("div",{style:{width:"§00px",height:"500px",display:"flex",alignItems:"center"},children:(0,jsx_runtime.jsxs)(components_Dropdown,{children:[(0,jsx_runtime.jsx)(components_Dropdown.ToggleButton,{children:"トグル"}),(0,jsx_runtime.jsx)(components_Dropdown.Body,{children:(0,jsx_runtime.jsxs)("ul",{className:Dropdown_module_items,children:[(0,jsx_runtime.jsx)("li",{children:"1つ目のアイテム"}),(0,jsx_runtime.jsx)("li",{children:"2つ目のアイテム"})]})})]})}),(0,jsx_runtime.jsx)("p",{children:"トグルボタンが画面真ん中より上のとき、トグルボタンより下にドロップダウンを表示"})]})};Sample.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Sample.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Sample$parameters=Sample.parameters)||void 0===_Sample$parameters?void 0:_Sample$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  return <div style={{\n    width: "500px",\n    height: "100px"\n  }}>\n      <Dropdown>\n        <Dropdown.ToggleButton>toggle</Dropdown.ToggleButton>\n        <Dropdown.Body>\n          <ul className={styles.items}>\n            <li>first item</li>\n            <li>second item</li>\n          </ul>\n        </Dropdown.Body>\n      </Dropdown>\n    </div>;\n}'},null===(_Sample$parameters2=Sample.parameters)||void 0===_Sample$parameters2||null===(_Sample$parameters2$d=_Sample$parameters2.docs)||void 0===_Sample$parameters2$d?void 0:_Sample$parameters2$d.source)})}),Gallery.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Gallery.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Gallery$parameters=Gallery.parameters)||void 0===_Gallery$parameters?void 0:_Gallery$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  return <div>\n      <p>\n        トグルボタンが画面真ん中より下のとき、トグルボタンより上にドロップダウンを表示\n      </p>\n      <div style={{\n      width: "§00px",\n      height: "500px",\n      display: "flex",\n      alignItems: "center"\n    }}>\n        <Dropdown>\n          <Dropdown.ToggleButton>トグル</Dropdown.ToggleButton>\n          <Dropdown.Body>\n            <ul className={styles.items}>\n              <li>1つ目のアイテム</li>\n              <li>2つ目のアイテム</li>\n            </ul>\n          </Dropdown.Body>\n        </Dropdown>\n      </div>\n      <p>\n        トグルボタンが画面真ん中より上のとき、トグルボタンより下にドロップダウンを表示\n      </p>\n    </div>;\n}'},null===(_Gallery$parameters2=Gallery.parameters)||void 0===_Gallery$parameters2||null===(_Gallery$parameters2$=_Gallery$parameters2.docs)||void 0===_Gallery$parameters2$?void 0:_Gallery$parameters2$.source)})});var __namedExportsOrder=["Sample","Gallery"]},"./src/components/Button/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Button_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.module.css"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","visual","children","className"],Button=function Button(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,_ref$visual=_ref.visual,visual=void 0===_ref$visual?"primary":_ref$visual,children=_ref.children,className=_ref.className,props=(0,_home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",(0,_home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.button,_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z[size],_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z[visual],className)},props),{},{children:children}))};__webpack_exports__.Z=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},visual:{defaultValue:{value:"primary"},description:"",name:"visual",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"alert"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/Button/Button.module.css":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={button:"Button_button__wiIYs",small:"Button_small__QdkfY",medium:"Button_medium__wW44E",large:"Button_large__cwKfr",primary:"Button_primary__XYgy-",secondary:"Button_secondary__QwN49",alert:"Button_alert__R665X",buttonWrapper:"Button_buttonWrapper__B1mQY",hasIcon:"Button_hasIcon__H6w7J"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);