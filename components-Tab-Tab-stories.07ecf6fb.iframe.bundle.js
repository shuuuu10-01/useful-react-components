"use strict";(self.webpackChunkuseful_components=self.webpackChunkuseful_components||[]).push([[569],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/Tab/Tab.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Gallery:function(){return Gallery},Icon:function(){return Icon},Number:function(){return Tab_stories_Number},Sample:function(){return Sample},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Tab_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _Sample$parameters,_Sample$parameters2,_Sample$parameters2$d,_Number$parameters,_Number$parameters2,_Number$parameters2$d,_Icon$parameters,_Icon$parameters2,_Icon$parameters2$doc,_Gallery$parameters,_Gallery$parameters2,_Gallery$parameters2$,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Tab_module_header="Tab_header__RHatd",Tab_module_column="Tab_column__7J7ZE",Tab_module_button="Tab_button__KopLo",Tab_module_active="Tab_active__uRYAU",Tab_module_tabBody="Tab_tabBody__EU19m",Tab_module_hasIcon="Tab_hasIcon__+3Qx7",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TabContext=(0,react.createContext)({activeKey:""}),Tab=function Tab(_ref){var defaultKey=_ref.defaultKey,children=_ref.children,className=_ref.className,_useState=(0,react.useState)(defaultKey),_useState2=(0,slicedToArray.Z)(_useState,2),activeKey=_useState2[0],setActiveKey=_useState2[1],headers=(0,react.useMemo)((function(){var headerArray=[];if(Array.isArray(children))children.forEach((function(c){if(c.type!==TabItem)throw Error("TabItemを利用してください");headerArray.push({tabKey:c.props.tabKey,label:c.props.label})}));else{if(children.type!==TabItem)throw Error("TabItemを利用してください");headerArray.push({tabKey:children.props.tabKey,label:children.props.label})}return headerArray}),[children]);return(0,jsx_runtime.jsxs)(TabContext.Provider,{value:{activeKey:activeKey},children:[(0,jsx_runtime.jsx)("ul",{className:classnames_default()(Tab_module_header,className),children:headers.map((function(_ref2){var tabKey=_ref2.tabKey,label=_ref2.label;return(0,jsx_runtime.jsx)("li",{className:Tab_module_column,children:(0,jsx_runtime.jsx)("button",{className:classnames_default()(Tab_module_button,tabKey===activeKey&&Tab_module_active),onClick:function onClick(){return setActiveKey(tabKey)},children:label})},tabKey)}))}),children]})},TabItem=function TabItem(_ref3){var tabKey=_ref3.tabKey,children=_ref3.children,className=_ref3.className;return(0,react.useContext)(TabContext).activeKey===tabKey?(0,jsx_runtime.jsx)("div",{className:classnames_default()(Tab_module_tabBody,className),children:children}):null};try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{defaultKey:{defaultValue:null,description:"",name:"defaultKey",required:!0,type:{name:"TabKey"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tab/index.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tab/index.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}try{TabItem.displayName="TabItem",TabItem.__docgenInfo={description:"",displayName:"TabItem",props:{tabKey:{defaultValue:null,description:"",name:"tabKey",required:!0,type:{name:"TabKey"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"TabLabel"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tab/index.tsx#TabItem"]={docgenInfo:TabItem.__docgenInfo,name:"TabItem",path:"src/components/Tab/index.tsx#TabItem"})}catch(__react_docgen_typescript_loader_error){}var Tab_stories={title:"Tab"},Sample=function Sample(){return(0,jsx_runtime.jsxs)(Tab,{defaultKey:"item1",children:[(0,jsx_runtime.jsx)(TabItem,{tabKey:"item1",label:"アイテム1",children:"アイテム1のタブ"}),(0,jsx_runtime.jsx)(TabItem,{tabKey:"item2",label:"アイテム2",children:"アイテム2のタブ"})]})},Tab_stories_Number=function Number(){var _useState=(0,react.useState)([1,2,3,4,5]),_useState2=(0,slicedToArray.Z)(_useState,2),array=_useState2[0],setArray=_useState2[1];return(0,jsx_runtime.jsxs)("div",{style:{width:"500px"},children:[(0,jsx_runtime.jsx)("p",{children:"タブを動的に追加するパターン（8まで追加可能）"}),(0,jsx_runtime.jsx)(Tab,{defaultKey:1,children:array.map((function(num){return(0,jsx_runtime.jsx)(TabItem,{tabKey:num,label:num,children:num},num)}))}),(0,jsx_runtime.jsx)(Button.Z,{onClick:function addArray(){setArray((function(prev){return prev.length>=8?prev:[].concat(_toConsumableArray(prev),[prev.length+1])}))},children:"+ add"})]})},Icon=function Icon(){var headerLabel=function headerLabel(label){return(0,jsx_runtime.jsxs)("div",{className:Tab_module_hasIcon,children:[(0,jsx_runtime.jsx)(index_esm.LL$,{}),label]})};return(0,jsx_runtime.jsx)("div",{style:{width:"500px"},children:(0,jsx_runtime.jsxs)(Tab,{defaultKey:"1st",children:[(0,jsx_runtime.jsx)(TabItem,{tabKey:"1st",label:headerLabel("1st"),children:"1st content"}),(0,jsx_runtime.jsx)(TabItem,{tabKey:"2nd",label:headerLabel("2nd"),children:"2nd content"}),(0,jsx_runtime.jsx)(TabItem,{tabKey:"3rd",label:headerLabel("3rd"),children:"3rd content"})]})})},Gallery=function Gallery(){return(0,jsx_runtime.jsx)("div",{style:{width:"500px"},children:(0,jsx_runtime.jsxs)(Tab,{defaultKey:"React",children:[(0,jsx_runtime.jsx)(TabItem,{tabKey:"React",label:"React",children:"this is initial tab."}),(0,jsx_runtime.jsx)(TabItem,{tabKey:"Useful",label:"Useful",children:"2nd content"}),(0,jsx_runtime.jsx)(TabItem,{tabKey:"Components",label:function headerLabel(label){return(0,jsx_runtime.jsxs)("div",{className:Tab_module_hasIcon,children:[(0,jsx_runtime.jsx)(index_esm.LL$,{}),label]})}("Components"),children:"3rd content"})]})})};Sample.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Sample.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Sample$parameters=Sample.parameters)||void 0===_Sample$parameters?void 0:_Sample$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  return <Tab defaultKey="item1">\n      <TabItem tabKey="item1" label="アイテム1">\n        アイテム1のタブ\n      </TabItem>\n      <TabItem tabKey="item2" label="アイテム2">\n        アイテム2のタブ\n      </TabItem>\n    </Tab>;\n}'},null===(_Sample$parameters2=Sample.parameters)||void 0===_Sample$parameters2||null===(_Sample$parameters2$d=_Sample$parameters2.docs)||void 0===_Sample$parameters2$d?void 0:_Sample$parameters2$d.source)})}),Tab_stories_Number.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Tab_stories_Number.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Number$parameters=Tab_stories_Number.parameters)||void 0===_Number$parameters?void 0:_Number$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const [array, setArray] = useState([1, 2, 3, 4, 5]);\n  const addArray = () => {\n    setArray(prev => {\n      if (prev.length >= 8) return prev;\n      return [...prev, prev.length + 1];\n    });\n  };\n  return <div style={{\n    width: "500px"\n  }}>\n      <p>タブを動的に追加するパターン（8まで追加可能）</p>\n      <Tab defaultKey={1}>\n        {array.map(num => {\n        return <TabItem tabKey={num} label={num} key={num}>\n              {num}\n            </TabItem>;\n      })}\n      </Tab>\n      <Button onClick={addArray}>+ add</Button>\n    </div>;\n}'},null===(_Number$parameters2=Tab_stories_Number.parameters)||void 0===_Number$parameters2||null===(_Number$parameters2$d=_Number$parameters2.docs)||void 0===_Number$parameters2$d?void 0:_Number$parameters2$d.source)})}),Icon.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Icon.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Icon$parameters=Icon.parameters)||void 0===_Icon$parameters?void 0:_Icon$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const headerLabel = (label: string) => {\n    return <div className={styles.hasIcon}>\n        <FaInfo />\n        {label}\n      </div>;\n  };\n  return <div style={{\n    width: "500px"\n  }}>\n      <Tab defaultKey="1st">\n        <TabItem tabKey="1st" label={headerLabel("1st")}>\n          1st content\n        </TabItem>\n        <TabItem tabKey="2nd" label={headerLabel("2nd")}>\n          2nd content\n        </TabItem>\n        <TabItem tabKey="3rd" label={headerLabel("3rd")}>\n          3rd content\n        </TabItem>\n      </Tab>\n    </div>;\n}'},null===(_Icon$parameters2=Icon.parameters)||void 0===_Icon$parameters2||null===(_Icon$parameters2$doc=_Icon$parameters2.docs)||void 0===_Icon$parameters2$doc?void 0:_Icon$parameters2$doc.source)})}),Gallery.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Gallery.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Gallery$parameters=Gallery.parameters)||void 0===_Gallery$parameters?void 0:_Gallery$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const headerLabel = (label: string) => {\n    return <div className={styles.hasIcon}>\n        <FaInfo />\n        {label}\n      </div>;\n  };\n  return <div style={{\n    width: "500px"\n  }}>\n      <Tab defaultKey="React">\n        <TabItem tabKey="React" label="React">\n          this is initial tab.\n        </TabItem>\n        <TabItem tabKey="Useful" label="Useful">\n          2nd content\n        </TabItem>\n        <TabItem tabKey="Components" label={headerLabel("Components")}>\n          3rd content\n        </TabItem>\n      </Tab>\n    </div>;\n}'},null===(_Gallery$parameters2=Gallery.parameters)||void 0===_Gallery$parameters2||null===(_Gallery$parameters2$=_Gallery$parameters2.docs)||void 0===_Gallery$parameters2$?void 0:_Gallery$parameters2$.source)})});var __namedExportsOrder=["Sample","Number","Icon","Gallery"]},"./src/components/Button/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Button_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.module.css"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","visual","children","className"],Button=function Button(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,_ref$visual=_ref.visual,visual=void 0===_ref$visual?"primary":_ref$visual,children=_ref.children,className=_ref.className,props=(0,_home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",(0,_home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_useful_react_components_useful_react_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.button,_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z[size],_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z[visual],className)},props),{},{children:children}))};__webpack_exports__.Z=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},visual:{defaultValue:{value:"primary"},description:"",name:"visual",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"alert"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.module.css":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={button:"Button_button__wiIYs",small:"Button_small__QdkfY",medium:"Button_medium__wW44E",large:"Button_large__cwKfr",primary:"Button_primary__XYgy-",secondary:"Button_secondary__QwN49",alert:"Button_alert__R665X",buttonWrapper:"Button_buttonWrapper__B1mQY",hasIcon:"Button_hasIcon__H6w7J"}}}]);