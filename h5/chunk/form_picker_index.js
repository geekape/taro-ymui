(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"123":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(n):void 0},r=_interopRequireDefault(n(1)),l=_interopRequireDefault(n(4)),i=n(131),c=_interopRequireDefault(n(146));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(614);var s=function(e){function Index(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=n=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(o))),n.config={"navigationBarTitleText":"Taro UI"},n.state={"selector":["中国","美国","巴西","日本"],"multiSelector":[["饭","粥","粉"],["猪肉","牛肉"]],"selectorValue":0,"mulitSelectorValues":[0,1],"timeSel":"06:18","dateSel":"2018-06-18"},n.handleChange=function(e){n.setState({"selectorValue":e.detail.value})},n.handleMulitChange=function(e){n.setState({"mulitSelectorValues":e.detail.value})},n.handleTimeChange=function(e){n.setState({"timeSel":e.detail.value})},n.handleDateChange=function(e){n.setState({"dateSel":e.detail.value})},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,l.default.Component),a(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=l.default.getEnv();this.setState({"isAlipay":e===l.default.ENV_TYPE.ALIPAY})}},{"key":"render","value":function render(){var e=this.state,t=e.selector,n=e.selectorValue,a=e.multiSelector,o=e.mulitSelectorValues,l=e.timeSel,s=e.dateSel,u=e.isAlipay;return r.default.createElement(i.View,{"className":"page picker__page"},r.default.createElement(c.default,{"title":"Picker 选择器"}),r.default.createElement(i.View,{"className":"doc-body"},r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"普通选择器"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.Picker,{"mode":"selector","range":t,"value":n,"onChange":this.handleChange},r.default.createElement(i.View,{"className":"demo-list-item"},r.default.createElement(i.View,{"className":"demo-list-item__label"},"国家地区"),r.default.createElement(i.View,{"className":"demo-list-item__value"},t[n])))))),!u&&r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"多列选择器"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.Picker,{"mode":"multiSelector","range":a,"value":o,"onChange":this.handleMulitChange},r.default.createElement(i.View,{"className":"demo-list-item"},r.default.createElement(i.View,{"className":"demo-list-item__label"},"请选择早餐"),r.default.createElement(i.View,{"className":"demo-list-item__value"},a[0][o[0]]+" & "+a[1][o[1]])))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"时间选择器"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.Picker,{"mode":"time","value":l,"onChange":this.handleTimeChange},r.default.createElement(i.View,{"className":"demo-list-item"},r.default.createElement(i.View,{"className":"demo-list-item__label"},"请选择时间"),r.default.createElement(i.View,{"className":"demo-list-item__value"},l)))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"日期选择器"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.Picker,{"mode":"date","value":s,"onChange":this.handleDateChange},r.default.createElement(i.View,{"className":"demo-list-item"},r.default.createElement(i.View,{"className":"demo-list-item__label"},"请选择日期"),r.default.createElement(i.View,{"className":"demo-list-item__value"},s))))))))}},{"key":"componentDidShow","value":function componentDidShow(){o(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&o(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){o(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&o(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();t.default=s},"134":function(e,t,n){"use strict";e.exports=n(212)()},"146":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),r=_interopRequireDefault(n(4)),l=_interopRequireDefault(n(134)),i=n(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(147);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.default.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(i.View,{"className":"doc-header"},o.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":l.default.string}},"147":function(e,t,n){},"212":function(e,t,n){"use strict";var a=n(213);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,o,r,l){if(l!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e,e}},"213":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"614":function(e,t,n){}}]);