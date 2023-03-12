!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire92fb;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire92fb=a),a.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a("MjY8E").registerVersion)("firebase","9.17.2","app")})),a.register("MjY8E",(function(n,r){e(n.exports,"_registerComponent",(function(){return I})),e(n.exports,"_getProvider",(function(){return T})),e(n.exports,"_removeServiceInstance",(function(){return A})),e(n.exports,"SDK_VERSION",(function(){return N})),e(n.exports,"initializeApp",(function(){return P})),e(n.exports,"getApp",(function(){return M})),e(n.exports,"registerVersion",(function(){return L}));var i=a("bpxeT"),o=a("8MBJY"),u=a("a2hTj"),s=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),f=a("6ExWU"),h=a("kZfxc"),d=a("2xDiJ"),v=a("ajgRO"),p=(d=a("2xDiJ"),function(){"use strict";function e(n){t(o)(this,e),this.container=n}return t(u)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var y,g,m="@firebase/app",b="0.9.4",k=new(0,h.Logger)("@firebase/app"),w="[DEFAULT]",_=(y={},t(s)(y,m,"fire-core"),t(s)(y,"@firebase/app-compat","fire-core-compat"),t(s)(y,"@firebase/analytics","fire-analytics"),t(s)(y,"@firebase/analytics-compat","fire-analytics-compat"),t(s)(y,"@firebase/app-check","fire-app-check"),t(s)(y,"@firebase/app-check-compat","fire-app-check-compat"),t(s)(y,"@firebase/auth","fire-auth"),t(s)(y,"@firebase/auth-compat","fire-auth-compat"),t(s)(y,"@firebase/database","fire-rtdb"),t(s)(y,"@firebase/database-compat","fire-rtdb-compat"),t(s)(y,"@firebase/functions","fire-fn"),t(s)(y,"@firebase/functions-compat","fire-fn-compat"),t(s)(y,"@firebase/installations","fire-iid"),t(s)(y,"@firebase/installations-compat","fire-iid-compat"),t(s)(y,"@firebase/messaging","fire-fcm"),t(s)(y,"@firebase/messaging-compat","fire-fcm-compat"),t(s)(y,"@firebase/performance","fire-perf"),t(s)(y,"@firebase/performance-compat","fire-perf-compat"),t(s)(y,"@firebase/remote-config","fire-rc"),t(s)(y,"@firebase/remote-config-compat","fire-rc-compat"),t(s)(y,"@firebase/storage","fire-gcs"),t(s)(y,"@firebase/storage-compat","fire-gcs-compat"),t(s)(y,"@firebase/firestore","fire-fst"),t(s)(y,"@firebase/firestore-compat","fire-fst-compat"),t(s)(y,"fire-js","fire-js"),t(s)(y,"firebase","fire-js-all"),y),E=new Map,x=new Map;function S(e,t){try{e.container.addComponent(t)}catch(n){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function I(e){var t=e.name;if(x.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;x.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=E.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){S(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function T(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;T(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var O=(g={},t(s)(g,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(s)(g,"bad-app-name","Illegal App name: '{$appName}"),t(s)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(s)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),t(s)(g,"no-options","Need to provide options, when not being deployed to hosting via source."),t(s)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(s)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(s)(g,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(s)(g,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(s)(g,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(s)(g,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),g),D=new(0,d.ErrorFactory)("app","Firebase",O),C=function(){"use strict";function e(n,r,i){var a=this;t(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,f.Component)("app",(function(){return a}),"PUBLIC"))}return t(u)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}]),e}(),N="9.17.2";function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:w,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw D.create("bad-app-name",{appName:String(a)});if(n||(n=(0,d.getDefaultAppConfig)()),!n)throw D.create("no-options");var o=E.get(a);if(o){if((0,d.deepEqual)(n,o.options)&&(0,d.deepEqual)(i,o.config))return o;throw D.create("duplicate-app",{appName:a})}var u=new(0,f.ComponentContainer)(a),s=!0,c=!1,l=void 0;try{for(var h,v=x.values()[Symbol.iterator]();!(s=(h=v.next()).done);s=!0){var p=h.value;u.addComponent(p)}}catch(e){c=!0,l=e}finally{try{s||null==v.return||v.return()}finally{if(c)throw l}}var y=new C(n,i,u);return E.set(a,y),y}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=E.get(e);if(!t&&e===w)return P();if(!t)throw D.create("no-app",{appName:e});return t}function L(e,t,n){var r,i=null!==(r=_[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var u=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&u.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&u.push("and"),o&&u.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(u.join(" "))}I(new(0,f.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var V="firebase-heartbeat-store",F=null;function R(){return F||(F=(0,v.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(V)}}).catch((function(e){throw D.create("idb-open",{originalErrorMessage:e.message})}))),F}function j(e){return B.apply(this,arguments)}function B(){return(B=t(i)(t(l).mark((function e(n){var r,i;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:return r=e.sent,e.abrupt("return",r.transaction(V).objectStore(V).get(z(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?k.warn(e.t0.message):(i=D.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function U(e,t){return q.apply(this,arguments)}function q(){return(q=t(i)(t(l).mark((function e(n,r){var i,a,o,u;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:return i=e.sent,a=i.transaction(V,"readwrite"),o=a.objectStore(V),e.next=8,o.put(r,z(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?k.warn(e.t0.message):(u=D.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(u.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function z(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Y(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(u)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=W(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,a,o,u;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=W(),i=G(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,u=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",u);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function W(){return(new Date).toISOString().substring(0,10)}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var u,s=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),J(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),J(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var l=s(c,u);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var K,Y=function(){"use strict";function e(n){t(o)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(u)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,j(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",U(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,a;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",U(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(c)(a.heartbeats).concat(t(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function J(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */K="",I(new(0,f.Component)("platform-logger",(function(e){return new p(e)}),"PRIVATE")),I(new(0,f.Component)("heartbeat",(function(e){return new H(e)}),"PRIVATE")),L(m,b,K),L(m,b,"esm2017"),L("fire-js","")})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var u=e[a](o),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function u(e){n(o,i,a,u,s,"next",e)}function s(e){n(o,i,a,u,s,"throw",e)}u(void 0)}))}}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=u(a("kMC0W")),r=u(a("7AJDX")),i=u(a("8CtQK")),o=u(a("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new A(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return D()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var u=S(o,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?v:h,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",p={};function y(){}function g(){}function m(){}var b={};s(b,a,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(O([])));w&&w!==n&&r.call(w,a)&&(b=w);var _=m.prototype=y.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,a,o,u){var s=l(e[i],e,a);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,u)}),(function(e){n("throw",e,o,u)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,u)}))}u(s.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function O(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:D}}function D(){return{value:t,done:!0}}return g.prototype=m,s(_,"constructor",m),s(m,"constructor",g),g.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,u,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},E(x.prototype),s(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new x(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(_),s(_,u,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return u.type="throw",u.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("6ExWU",(function(n,r){e(n.exports,"Component",(function(){return h})),e(n.exports,"ComponentContainer",(function(){return p}));var i=a("bpxeT"),o=a("8MBJY"),u=a("a2hTj"),s=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),f=a("2xDiJ"),h=function(){"use strict";function e(n,r,i){t(o)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(u)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),d="[DEFAULT]",v=function(){"use strict";function e(n,r){t(o)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(u)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,f.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=t(s)(a.value,2),c=u[0],l=u[1],f=this.normalizeInstanceIdentifier(c);try{var h=this.getOrInitializeService({instanceIdentifier:f});l.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,u=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var h=t(s)(l.value,2),d=h[0],v=h[1],p=this.normalizeInstanceIdentifier(d);i===p&&v.resolve(a)}}catch(e){u=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(u)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,u=n[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var s=o.value;try{s(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===d?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var p=function(){"use strict";function e(n){t(o)(this,e),this.name=n,this.providers=new Map}return t(u)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new v(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=u(a("8slrw")),r=u(a("7AJDX")),i=u(a("ifqQW")),o=u(a("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("2xDiJ",(function(r,i){e(r.exports,"base64urlEncodeWithoutPadding",(function(){return g})),e(r.exports,"base64Decode",(function(){return m})),e(r.exports,"getDefaultEmulatorHost",(function(){return w})),e(r.exports,"getDefaultEmulatorHostnameAndPort",(function(){return _})),e(r.exports,"getDefaultAppConfig",(function(){return E})),e(r.exports,"getExperimentalSetting",(function(){return x})),e(r.exports,"Deferred",(function(){return S})),e(r.exports,"createMockUserToken",(function(){return I})),e(r.exports,"getUA",(function(){return T})),e(r.exports,"isMobileCordova",(function(){return A})),e(r.exports,"isBrowserExtension",(function(){return O})),e(r.exports,"isReactNative",(function(){return D})),e(r.exports,"isIE",(function(){return C})),e(r.exports,"isIndexedDBAvailable",(function(){return N})),e(r.exports,"validateIndexedDBOpenable",(function(){return P})),e(r.exports,"FirebaseError",(function(){return M})),e(r.exports,"ErrorFactory",(function(){return L})),e(r.exports,"isEmpty",(function(){return R})),e(r.exports,"deepEqual",(function(){return j})),e(r.exports,"querystring",(function(){return U})),e(r.exports,"querystringDecode",(function(){return q})),e(r.exports,"extractQuerystring",(function(){return z})),e(r.exports,"createSubscribe",(function(){return H})),e(r.exports,"getModularInstance",(function(){return K}));var o=a("ds8z5"),u=a("8MBJY"),s=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),f=(a("8nrFW"),a("4c7YB")),h=a("2MbLg"),d=a("6qd2L"),v=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,u=o?e[i+1]:0,s=i+2<e.length,c=s?e[i+2]:0,l=a>>2,f=(3&a)<<4|u>>4,h=(15&u)<<2|c>>6,d=63&c;s||(d=64,o||(h=64)),r.push(n[l],n[f],n[h],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(v(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var u=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&u)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,u=++i<e.length?n[e.charAt(i)]:64,s=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==u||null==s)throw new y;var c=a<<2|o>>4;if(r.push(c),64!==u){var l=o<<4&240|u>>2;if(r.push(l),64!==s){var f=u<<6&192|s;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},y=function(e){"use strict";t(c)(r,e);var n=t(h)(r);function r(){var e;return t(u)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return r}(t(f)(Error)),g=function(e){return function(e){var t=v(e);return p.encodeByteArray(t,!0)}(e).replace(/\./g,"")},m=function(e){try{return p.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var b=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},k=function(){try{return b()||function(){if(void 0!==d&&void 0!==d.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&m(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},w=function(e){var t,n;return null===(n=null===(t=k())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},_=function(e){var t=w(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},E=function(){var e;return null===(e=k())||void 0===e?void 0:e.config},x=function(e){var t;return null===(t=k())||void 0===t?void 0:t["_".concat(e)]},S=function(){"use strict";function e(){var n=this;t(u)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(s)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[g(JSON.stringify({alg:"none",type:"JWT"})),g(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function A(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function O(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function D(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function C(){var e=T();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N(){try{return"object"==typeof indexedDB}catch(e){return!1}}function P(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var M=function(e){"use strict";t(c)(r,e);var n=t(h)(r);function r(e,i,a){var s;return t(u)(this,r),(s=n.call(this,i)).code=e,s.customData=a,s.name="FirebaseError",Object.setPrototypeOf(t(o)(s),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(o)(s),L.prototype.create),s}return r}(t(f)(Error)),L=function(){"use strict";function e(n,r,i){t(u)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(s)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],u=o?V(o,i):"Error",s="".concat(this.serviceName,": ").concat(u," (").concat(a,")."),c=new M(a,s,i);return c}}]),e}();function V(e,t){return e.replace(F,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var u,s=n[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var c=u.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(B(l)&&B(f)){if(!j(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}var h=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(h=(p=y.next()).done);h=!0){var g=p.value;if(!n.includes(g))return!1}}catch(e){d=!0,v=e}finally{try{h||null==y.return||y.return()}finally{if(d)throw v}}return!0}function B(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=function(e,r){var i=t(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},s=Object.entries(e)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)u(0,o)}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function q(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(l)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function z(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){var n=new W(e,t);return n.subscribe.bind(n)}var W=function(){"use strict";function e(n,r){var i=this;t(u)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(s)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value;if(u in e&&"function"==typeof e[u])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=G),void 0===r.error&&(r.error=G),void 0===r.complete&&(r.complete=G);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return s(e)};var n=u(a("ge8co")),r=u(a("cZGw3")),i=u(a("fVNic")),o=u(a("gD1JV"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},s(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s,c=[],l=!1,f=-1;function h(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=u(h);l=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||u(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("kZfxc",(function(n,r){e(n.exports,"LogLevel",(function(){return i})),e(n.exports,"Logger",(function(){return g})),e(n.exports,"setLogLevel",(function(){return m})),e(n.exports,"setUserLogHandler",(function(){return b}));var i,o,u=a("8MBJY"),s=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),f=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var h,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},v=i.INFO,p=(h={},t(c)(h,i.DEBUG,"log"),t(c)(h,i.VERBOSE,"log"),t(c)(h,i.INFO,"info"),t(c)(h,i.WARN,"warn"),t(c)(h,i.ERROR,"error"),h),y=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var u=(new Date).toISOString(),s=p[n];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[s].apply(o,["[".concat(u,"]  ").concat(e.name,":")].concat(t(l)(i)))}},g=function(){"use strict";function e(n){t(u)(this,e),this.name=n,this._logLevel=v,this._logHandler=y,this._userLogHandler=null,f.push(this)}return t(s)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(t(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(t(l)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(t(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(t(l)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(t(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(t(l)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(t(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(t(l)(n)))}}]),e}();function m(e){f.forEach((function(t){t.setLogLevel(e)}))}function b(e,t){var n=!0,r=!1,a=void 0;try{for(var o,u=f[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value,c=null;t&&t.level&&(c=d[t.level]),s.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var u=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:u,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(n,r){e(n.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),u=a("8nrFW"),s=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,u=indexedDB.open(e,t),s=(0,c.w)(u);return i&&u.addEventListener("upgradeneeded",(function(e){i((0,c.w)(u.result),e.oldVersion,e.newVersion,(0,c.w)(u.transaction))})),r&&u.addEventListener("blocked",(function(){return r()})),s.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),s}var f=["get","getKey","getAll","getAllKeys","count"],h=["put","add","delete","clear"],d=new Map;function v(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(d.get(n))return d.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=h.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||f.includes(r))){var c,l=(c=t(i)(t(s).mark((function e(n){var i,c,l,f,h,d,v=arguments;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=v.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=v[l];return h=this.transaction(n,o?"readwrite":"readonly"),d=h.store,a&&(d=d.index(c.shift())),e.next=7,Promise.all([(f=d)[r].apply(f,t(u)(c)),o&&h.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return d.set(n,l),l}}}(0,c.r)((function(e){return t(o)({},e,{get:function(t,n,r){return v(t,n)||e.get(t,n,r)},has:function(t,n){return!!v(t,n)||e.has(t,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(n,r){e(n.exports,"w",(function(){return g})),e(n.exports,"r",(function(){return v}));var i,o,u=a("8nrFW");var s=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,h=new WeakMap;var d={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){d=e(d)}function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(m(this),n),g(s.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(e.apply(m(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[m(this),n].concat(t(u)(i)));return l.set(s,n.sort?n.sort():[n]),g(s)}}function y(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(g(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&s.set(e,t)})).catch((function(){})),h.set(n,t),n;var t,n;if(f.has(e))return f.get(e);var r=y(e);return r!==e&&(f.set(e,r),h.set(r,e)),r}var m=function(e){return h.get(e)}})),a.register("587DK",(function(t,n){e(t.exports,"getFirestore",(function(){return a("hbbGa").getFirestore})),e(t.exports,"collection",(function(){return a("hbbGa").collection})),e(t.exports,"getDocs",(function(){return a("hbbGa").getDocs})),e(t.exports,"query",(function(){return a("hbbGa").query})),e(t.exports,"where",(function(){return a("hbbGa").where})),e(t.exports,"addDoc",(function(){return a("hbbGa").addDoc})),e(t.exports,"updateDoc",(function(){return a("hbbGa").updateDoc})),e(t.exports,"doc",(function(){return a("hbbGa").doc})),e(t.exports,"deleteDoc",(function(){return a("hbbGa").deleteDoc})),a("hbbGa")})),a.register("hbbGa",(function(n,r){e(n.exports,"getFirestore",(function(){return pn})),e(n.exports,"collection",(function(){return kn})),e(n.exports,"doc",(function(){return wn})),e(n.exports,"query",(function(){return Zn})),e(n.exports,"where",(function(){return tr})),e(n.exports,"getDocs",(function(){return cr})),e(n.exports,"updateDoc",(function(){return lr})),e(n.exports,"deleteDoc",(function(){return fr})),e(n.exports,"addDoc",(function(){return hr}));var i=a("bpxeT"),o=a("8MBJY"),u=a("ge8co"),s=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),f=a("eYQtU"),h=a("jmhxu"),d=a("1t1Wn"),v=a("8nrFW"),p=(a("l5bVx"),a("4c7YB")),y=a("2MbLg"),g=a("2TvXO"),m=a("MjY8E"),b=a("6ExWU"),k=a("kZfxc"),w=a("2xDiJ"),_=function(){"use strict";function e(n){t(o)(this,e),this.uid=n}return t(s)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),e}();_.UNAUTHENTICATED=new _(null),_.GOOGLE_CREDENTIALS=new _("google-credentials-uid"),_.FIRST_PARTY=new _("first-party-uid"),_.MOCK_USER=new _("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var E="9.17.2",x=new(0,k.Logger)("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(x.logLevel<=k.LogLevel.DEBUG){var a,o=r.map(A);(a=x).debug.apply(a,["Firestore (".concat(E,"): ").concat(e)].concat(t(v)(o)))}}function I(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(x.logLevel<=k.LogLevel.ERROR){var a,o=r.map(A);(a=x).error.apply(a,["Firestore (".concat(E,"): ").concat(e)].concat(t(v)(o)))}}function T(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(x.logLevel<=k.LogLevel.WARN){var a,o=r.map(A);(a=x).warn.apply(a,["Firestore (".concat(E,"): ").concat(e)].concat(t(v)(o)))}}function A(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(E,") INTERNAL ASSERTION FAILED: ")+e;throw I(t),new Error(t)}function D(e,t){e||O()}function C(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N="cancelled",P="unknown",M="invalid-argument",L="deadline-exceeded",V="not-found",F="permission-denied",R="unauthenticated",j="resource-exhausted",B="failed-precondition",U="aborted",q="out-of-range",z="unimplemented",H="internal",W="unavailable",G=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,i)).code=e,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},t(h)(a)}return r}(w.FirebaseError),K=function e(n,r){"use strict";t(o)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Y=function(){"use strict";function e(){t(o)(this,e)}return t(s)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(_.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),J=function(){"use strict";function e(n){t(o)(this,e),this.token=n,this.changeListener=null}return t(s)(e,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),e}(),Q=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.auth=null,n.onInit((function(e){r.auth=e}))}return t(s)(e,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(D("string"==typeof t.accessToken),new K(t.accessToken,new _(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),e}(),X=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.t=n,this.i=r,this.o=i,this.u=a,this.type="FirstParty",this.user=_.FIRST_PARTY,this.h=new Map}return t(s)(e,[{key:"l",value:function(){return this.u?this.u():(D(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.h.set("X-Goog-AuthUser",this.i);var e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}]),e}(),$=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.t=n,this.i=r,this.o=i,this.u=a}return t(s)(e,[{key:"getToken",value:function(){return Promise.resolve(new X(this.t,this.i,this.o,this.u))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(_.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),Z=function e(n){"use strict";t(o)(this,e),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},ee=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.m=n,this.appCheck=null,n.onInit((function(e){r.appCheck=e}))}return t(s)(e,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(D("string"==typeof e.token),new Z(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),e}(),te=function e(n,r,i,a,u,s,c,l){"use strict";t(o)(this,e),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=u,this.forceLongPolling=s,this.autoDetectLongPolling=c,this.useFetchStreams=l},ne=function(){"use strict";function e(n,r){t(o)(this,e),this.projectId=n,this.database=r||"(default)"}return t(s)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}(),re=function(){"use strict";function e(n,r,i){t(o)(this,e),void 0===r?r=0:r>n.length&&O(),void 0===i?i=n.length-r:i>n.length-r&&O(),this.segments=n,this.offset=r,this.len=i}return t(s)(e,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(t){return 0===e.comparator(this,t)}},{key:"child",value:function(t){var n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((function(e){n.push(e)})):n.push(t),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),e}(),ie=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(s)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var a=[],o=!0,u=!1,s=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f,h=c.value;if(h.indexOf("//")>=0)throw new G(M,"Invalid segment (".concat(h,"). Paths must not contain // in them."));(f=a).push.apply(f,t(v)(h.split("/").filter((function(e){return e.length>0}))))}}catch(e){u=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(u)throw s}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(re),ae=/^[_a-zA-Z][_a-zA-Z0-9]*$/,oe=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(s)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return ae.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new G(M,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var u=e[i];if("\\"===u){if(i+1===e.length)throw new G(M,"Path has trailing escape character: "+e);var s=e[i+1];if("\\"!==s&&"."!==s&&"`"!==s)throw new G(M,"Path has invalid escape sequence: "+e);n+=s,i+=2}else"`"===u?(o=!o,i++):"."!==u||o?(n+=u,i++):(a(),i++)}if(a(),o)throw new G(M,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(re),ue=function(){"use strict";function e(n){t(o)(this,e),this.path=n}return t(s)(e,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===ie.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(t){return new e(ie.fromString(t))}},{key:"fromName",value:function(t){return new e(ie.fromString(t).popFirst(5))}},{key:"empty",value:function(){return new e(ie.emptyPath())}},{key:"comparator",value:function(e,t){return ie.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(t){return new e(new ie(t.slice()))}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e,t,n){if(!n)throw new G(M,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function ce(e){if(!ue.isDocumentKey(e))throw new G(M,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function le(e){if(ue.isDocumentKey(e))throw new G(M,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function fe(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":O()}function he(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new G(M,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=fe(e);throw new G(M,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(e){return null==e}function ve(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,ye,ge={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){if(void 0===e)return I("RPC_ERROR","HTTP error has no status"),P;switch(e){case 200:return"ok";case 400:return B;case 401:return R;case 403:return F;case 404:return V;case 409:return U;case 416:return q;case 429:return j;case 499:return N;case 500:return P;case 501:return z;case 503:return W;case 504:return L;default:return e>=200&&e<300?"ok":e>=400&&e<500?B:e>=500&&e<600?H:P}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ye=pe||(pe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";var be=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e)).V=i,t(h)(a)}return t(s)(r,[{key:"$",value:function(e,t){throw new Error("Not supported by FetchConnection")}},{key:"R",value:function(e,n,r,a){var o=this;return t(i)(t(g).mark((function e(){var i,u,s,c,l,f;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=JSON.stringify(a),e.prev=3,e.next=6,o.V(n,{method:"POST",headers:r,body:u});case 6:s=e.sent,e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(3),c=e.t0,new G(me(c.status),"Request failed with error: "+c.statusText);case 13:if(s.ok){e.next=20;break}return e.next=16,s.json();case 16:throw l=e.sent,Array.isArray(l)&&(l=l[0]),f=null===(i=null==l?void 0:l.error)||void 0===i?void 0:i.message,new G(me(s.status),"Request failed with error: ".concat(null!=f?f:s.statusText));case 20:return e.abrupt("return",s.json());case 21:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}]),r}(function(){"use strict";function e(n){t(o)(this,e),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.p=r+"://"+n.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return t(s)(e,[{key:"v",get:function(){return!1}},{key:"A",value:function(e,t,n,r,i){var a=this.I(e,t);S("RestConnection","Sending: ",a,n);var o={};return this.T(o,r,i),this.R(e,a,o,n).then((function(e){return S("RestConnection","Received: ",e),e}),(function(t){throw T("RestConnection","".concat(e," failed with error: "),t,"url: ",a,"request:",n),t}))}},{key:"P",value:function(e,t,n,r,i,a){return this.A(e,t,n,r,i)}},{key:"T",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+E,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"I",value:function(e,t){var n=ge[e];return"".concat(this.p,"/v1/").concat(t,":").concat(n)}}]),e}());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we=function(){"use strict";function e(){t(o)(this,e)}return t(s)(e,null,[{key:"F",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=ke(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),e}();function _e(e,t){return e<t?-1:e>t?1:0}function Ee(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Se(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(){var e;return t(o)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",t(h)(e)}return r}(t(p)(Error)),Te=Symbol.iterator,Ae=function(){"use strict";function e(n){t(o)(this,e),this.binaryString=n}return t(s)(e,[{key:Te,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return _e(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(function(e){try{return atob(e)}catch(e){throw e instanceof DOMException?new Ie("Invalid base64 string: "+e):e}}(t))}},{key:"fromUint8Array",value:function(t){return new e(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t))}}]),e}();Ae.EMPTY_BYTE_STRING=new Ae("");var Oe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(e){if(D(!!e),"string"==typeof e){var t=0,n=Oe.exec(e);if(D(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Ce(e.seconds),nanos:Ce(e.nanos)}}function Ce(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ne(e){return"string"==typeof e?Ae.fromBase64String(e):Ae.fromUint8Array(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe=function(){"use strict";function e(n,r){if(t(o)(this,e),this.seconds=n,this.nanoseconds=r,r<0)throw new G(M,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new G(M,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new G(M,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new G(M,"Timestamp seconds out of range: "+n)}return t(s)(e,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return e.fromMillis(Date.now())}},{key:"fromDate",value:function(t){return e.fromMillis(t.getTime())}},{key:"fromMillis",value:function(t){var n=Math.floor(t/1e3);return new e(n,Math.floor(1e6*(t-1e3*n)))}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Le(e){var t=e.mapValue.fields.__previous_value__;return Me(t)?Le(t):t}function Ve(e){var t=De(e.mapValue.fields.__local_write_time__.timestampValue);return new Pe(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe={fields:{__type__:{stringValue:"__max__"}}};function Re(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Me(e)?4:"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:O()}function je(e,t){if(e===t)return!0;var n,r=Re(e);if(r!==Re(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ve(e).isEqual(Ve(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=De(e.timestampValue),r=De(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Ne(e.bytesValue).isEqual(Ne(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ce(e.geoPointValue.latitude)===Ce(t.geoPointValue.latitude)&&Ce(e.geoPointValue.longitude)===Ce(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ce(e.integerValue)===Ce(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Ce(e.doubleValue),r=Ce(t.doubleValue);return n===r?ve(n)===ve(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ee(e.arrayValue.values||[],t.arrayValue.values||[],je);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(xe(n)!==xe(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!je(n[i],r[i])))return!1;return!0}(e,t);default:return O()}}function Be(e,t){return void 0!==(e.values||[]).find((function(e){return je(e,t)}))}function Ue(e,t){if(e===t)return 0;var n,r,i,a,o=Re(e),u=Re(t);if(o!==u)return _e(o,u);switch(o){case 0:case 9007199254740991:return 0;case 1:return _e(e.booleanValue,t.booleanValue);case 2:return r=t,i=Ce((n=e).integerValue||n.doubleValue),a=Ce(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return qe(e.timestampValue,t.timestampValue);case 4:return qe(Ve(e),Ve(t));case 5:return _e(e.stringValue,t.stringValue);case 6:return function(e,t){var n=Ne(e),r=Ne(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=_e(n[i],r[i]);if(0!==a)return a}return _e(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=_e(Ce(e.latitude),Ce(t.latitude));return 0!==n?n:_e(Ce(e.longitude),Ce(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Ue(n[i],r[i]);if(a)return a}return _e(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Fe&&t===Fe)return 0;if(e===Fe)return 1;if(t===Fe)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var u=_e(r[o],a[o]);if(0!==u)return u;var s=Ue(n[r[o]],i[a[o]]);if(0!==s)return s}return _e(r.length,a.length)}(e.mapValue,t.mapValue);default:throw O()}}function qe(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return _e(e,t);var n=De(e),r=De(t),i=_e(n.seconds,r.seconds);return 0!==i?i:_e(n.nanos,r.nanos)}function ze(e,t){return{referenceValue:"projects/".concat(e.projectId,"/databases/").concat(e.database,"/documents/").concat(t.path.canonicalString())}}function He(e){return!!e&&"arrayValue"in e}function We(e){return!!e&&"nullValue"in e}function Ge(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ke(e){return!!e&&"mapValue"in e}function Ye(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return Se(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=Ye(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=Ye(e.arrayValue.values[r]);return n}return Object.assign({},e)}var Je=function e(n,r){"use strict";t(o)(this,e),this.position=n,this.inclusive=r};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qe=function e(){"use strict";t(o)(this,e)},Xe=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i,a){var u;return t(o)(this,r),(u=n.call(this)).field=e,u.op=i,u.value=a,t(h)(u)}return t(s)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ue(t,this.value)):null!==t&&Re(this.value)===Re(t)&&this.matchesComparison(Ue(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return O()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ze(e,t,n):"array-contains"===t?new rt(e,n):"in"===t?new it(e,n):"not-in"===t?new at(e,n):"array-contains-any"===t?new ot(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new et(e,n):new tt(e,n)}}]),r}(Qe),$e=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).filters=e,a.op=i,a.S=null,t(h)(a)}return t(s)(r,[{key:"matches",value:function(e){return"and"===this.op?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.S||(this.S=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.S}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.q((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"q",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(Qe);var Ze=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i,a){var u;return t(o)(this,r),(u=n.call(this,e,i,a)).key=ue.fromName(a.referenceValue),t(h)(u)}return t(s)(r,[{key:"matches",value:function(e){var t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(Xe),et=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,"in",i)).keys=nt("in",i),t(h)(a)}return t(s)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(Xe),tt=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,"not-in",i)).keys=nt("not-in",i),t(h)(a)}return t(s)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(Xe);function nt(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return ue.fromName(e.referenceValue)}))}var rt=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"array-contains",i)}return t(s)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return He(t)&&Be(t.arrayValue,this.value)}}]),r}(Xe),it=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"in",i)}return t(s)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&Be(this.value.arrayValue,t)}}]),r}(Xe),at=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"not-in",i)}return t(s)(r,[{key:"matches",value:function(e){if(Be(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!Be(this.value.arrayValue,t)}}]),r}(Xe),ot=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"array-contains-any",i)}return t(s)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!He(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return Be(t.value.arrayValue,e)}))}}]),r}(Xe),ut=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";t(o)(this,e),this.field=n,this.dir=r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var st=function(){"use strict";function e(n){t(o)(this,e),this.timestamp=n}return t(s)(e,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(t){return new e(t)}},{key:"min",value:function(){return new e(new Pe(0,0))}},{key:"max",value:function(){return new e(new Pe(253402300799,999999999))}}]),e}(),ct=function(){"use strict";function e(n,r){t(o)(this,e),this.comparator=n,this.root=r||ft.EMPTY}return t(s)(e,[{key:"insert",value:function(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ft.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new lt(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new lt(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new lt(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new lt(this.root,e,this.comparator,!0)}}]),e}(),lt=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.isReverse=a,this.nodeStack=[];for(var u=1;!n.isEmpty();)if(u=r?i(n.key,r):1,r&&a&&(u*=-1),u<0)n=this.isReverse?n.left:n.right;else{if(0===u){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return t(s)(e,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),e}(),ft=function(){"use strict";function e(n,r,i,a,u){t(o)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:e.EMPTY,this.right=null!=u?u:e.EMPTY,this.size=this.left.size+1+this.right.size}return t(s)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();var e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1,ft.EMPTY=new(function(){"use strict";function e(){t(o)(this,e),this.size=0}return t(s)(e,[{key:"key",get:function(){throw O()}},{key:"value",get:function(){throw O()}},{key:"color",get:function(){throw O()}},{key:"left",get:function(){throw O()}},{key:"right",get:function(){throw O()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new ft(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ht=function(){"use strict";function e(n){t(o)(this,e),this.comparator=n,this.data=new ct(this.comparator)}return t(s)(e,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new dt(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new dt(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.data.getIterator(),r=t.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(t){var n=new e(this.comparator);return n.data=t,n}}]),e}(),dt=function(){"use strict";function e(n){t(o)(this,e),this.iter=n}return t(s)(e,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),e}(),vt=function(){"use strict";function e(n){t(o)(this,e),this.fields=n,n.sort(oe.comparator)}return t(s)(e,[{key:"unionWith",value:function(t){var n=new ht(oe.comparator),r=!0,i=!1,a=void 0;try{for(var o,u=this.fields[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var s=o.value;n=n.add(s)}}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}var c=!0,l=!1,f=void 0;try{for(var h,d=t[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var v=h.value;n=n.add(v)}}catch(e){l=!0,f=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw f}}return new e(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return Ee(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new e([])}}]),e}(),pt=function(){"use strict";function e(n){t(o)(this,e),this.value=n}return t(s)(e,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!Ke(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ye(t)}},{key:"setAll",value:function(e){var t=this,n=oe.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=Ye(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());Ke(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return je(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];Ke(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){Se(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,u=n[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var s=o.value;delete e[s]}}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new e(Ye(this.value))}}],[{key:"empty",value:function(){return new e({mapValue:{}})}}]),e}(),yt=function(){"use strict";function e(n,r,i,a,u,s,c){t(o)(this,e),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=u,this.data=s,this.documentState=c}return t(s)(e,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(st.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=st.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}},{key:"mutableCopy",value:function(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(t){return new e(t,0,st.min(),st.min(),st.min(),pt.empty(),0)}},{key:"newFoundDocument",value:function(t,n,r,i){return new e(t,1,n,st.min(),r,i,0)}},{key:"newNoDocument",value:function(t,n){return new e(t,2,n,st.min(),st.min(),pt.empty(),0)}},{key:"newUnknownDocument",value:function(t,n){return new e(t,3,n,st.min(),st.min(),pt.empty(),2)}}]),e}(),gt=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;t(o)(this,e),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=u,this.startAt=s,this.endAt=c,this.O=null};function mt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new gt(e,t,n,r,i,a,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;t(o)(this,e),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=u,this.limitType=s,this.startAt=c,this.endAt=l,this.k=null,this.C=null,this.startAt,this.endAt};function kt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wt(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function _t(e){return null!==e.collectionGroup}function Et(e){var t=C(e);if(null===t.k){t.k=[];var n=wt(t),r=kt(t);if(null!==n&&null===r)n.isKeyField()||t.k.push(new ut(n)),t.k.push(new ut(oe.keyField(),"asc"));else{var i=!1,a=!0,o=!1,u=void 0;try{for(var s,c=t.explicitOrderBy[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=s.value;t.k.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,u=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw u}}if(!i){var f=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.k.push(new ut(oe.keyField(),f))}}}return t.k}function xt(e){var t=C(e);if(!t.C)if("F"===t.limitType)t.C=mt(t.path,t.collectionGroup,Et(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=Et(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var s=o.value,c="desc"===s.dir?"asc":"desc";n.push(new ut(s.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}var l=t.endAt?new Je(t.endAt.position,t.endAt.inclusive):null,f=t.startAt?new Je(t.startAt.position,t.startAt.inclusive):null;t.C=mt(t.path,t.collectionGroup,n,t.filters,t.limit,l,f)}return t.C}function St(e,t){t.getFirstInequalityField(),wt(e);var n=e.filters.concat([t]);return new bt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!ve(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.L){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ve(t)?"-0":t}}(e,t);var n}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function e(){"use strict";t(o)(this,e),this._=void 0},At=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return r}(Tt),Ot=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).elements=e,t(h)(i)}return r}(Tt),Dt=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).elements=e,t(h)(i)}return r}(Tt),Ct=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).M=e,a.U=i,t(h)(a)}return r}(Tt),Nt=function(){"use strict";function e(n,r){t(o)(this,e),this.updateTime=n,this.exists=r}return t(s)(e,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new e}},{key:"exists",value:function(t){return new e(void 0,t)}},{key:"updateTime",value:function(t){return new e(t)}}]),e}(),Pt=function e(){"use strict";t(o)(this,e)},Mt=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i,a){var u,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return t(o)(this,r),(u=n.call(this)).key=e,u.value=i,u.precondition=a,u.fieldTransforms=s,u.type=0,t(h)(u)}return t(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Pt),Lt=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i,a,u){var s,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return t(o)(this,r),(s=n.call(this)).key=e,s.data=i,s.fieldMask=a,s.precondition=u,s.fieldTransforms=c,s.type=1,t(h)(s)}return t(s)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(Pt),Vt=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=2,a.fieldTransforms=[],t(h)(a)}return t(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Pt),Ft=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=3,a.fieldTransforms=[],t(h)(a)}return t(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Pt),Rt={asc:"ASCENDING",desc:"DESCENDING"},jt={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bt={and:"AND",or:"OR"},Ut=function e(n,r){"use strict";t(o)(this,e),this.databaseId=n,this.L=r};function qt(e,t){return e.L?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function zt(e,t){return e.L?t.toBase64():t.toUint8Array()}function Ht(e,t){return qt(e,t.toTimestamp())}function Wt(e){return D(!!e),st.fromTimestamp((t=De(e),new Pe(t.seconds,t.nanos)));var t}function Gt(e,t){return(n=e,new ie(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Kt(e,t){return Gt(e.databaseId,t.path)}function Yt(e,t){var n,r,i,a=(n=t,D(an(r=ie.fromString(n))),r);if(a.get(1)!==e.databaseId.projectId)throw new G(M,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new G(M,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new ue((D((i=a).length>4&&"documents"===i.get(4)),i.popFirst(5)))}function Jt(e,t){return Gt(e.databaseId,t)}function Qt(e){return new ie(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Xt(e,t,n){return{name:Kt(e,t),fields:n.value.mapValue.fields}}function $t(e,t){var n,r,i;if(t instanceof Mt)n={update:Xt(e,t.key,t.value)};else if(t instanceof Vt)n={delete:Kt(e,t.key)};else if(t instanceof Lt)n={update:Xt(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof Ft))return O();n={verify:Kt(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof At)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ot)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Dt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ct)return{fieldPath:t.field.canonicalString(),increment:n.U};throw O()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ht(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:O()}(e,t.precondition)),n}function Zt(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Jt(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Jt(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length)return rn($e.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:nn((t=e).field),direction:en(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,u,s,c=(o=e,u=t.limit,o.L||de(u)?u:{value:u});return null!==c&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt={before:(s=t.startAt).inclusive,values:s.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function en(e){return Rt[e]}function tn(e){return jt[e]}function nn(e){return{fieldPath:e.canonicalString()}}function rn(e){return e instanceof Xe?function(e){if("=="===e.op){if(Ge(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NAN"}};if(We(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ge(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NAN"}};if(We(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(e.field),op:tn(e.op),value:e.value}}}(e):e instanceof $e?(r=(t=e).getFilters().map((function(e){return rn(e)})),1===r.length?r[0]:{compositeFilter:{op:(n=t.op,Bt[n]),filters:r}}):O();var t,n,r}function an(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e){return new Ut(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var un=function(e){"use strict";t(f)(r,(function e(){t(o)(this,e)}));var n=t(y)(r);function r(e,i,a,u){var s;return t(o)(this,r),(s=n.call(this)).authCredentials=e,s.appCheckCredentials=i,s.connection=a,s.M=u,s.et=!1,t(h)(s)}return t(s)(r,[{key:"nt",value:function(){if(this.et)throw new G(B,"The client has already been terminated.")}},{key:"A",value:function(e,n,r){var i=this;return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=t(d)(a,2),u=o[0],s=o[1];return i.connection.A(e,n,r,u,s)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===R&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new G(P,e.toString())}))}},{key:"P",value:function(e,n,r,i){var a=this;return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var u=t(d)(o,2),s=u[0],c=u[1];return a.connection.P(e,n,r,s,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===R&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new G(P,e.toString())}))}},{key:"terminate",value:function(){this.et=!0}}]),r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e,t){return cn.apply(this,arguments)}function cn(){return(cn=t(i)(t(g).mark((function e(n,r){var i,a,o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=C(n),a=Qt(i.M)+"/documents",o={writes:r.map((function(e){return $t(i.M,e)}))},e.next=3,i.A("Commit",a,o);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ln(){return(ln=t(i)(t(g).mark((function e(n,r){var i,a;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=C(n),a=Zt(i.M,xt(r)),e.next=3,i.P("RunQuery",a.parent,{structuredQuery:a.structuredQuery});case 3:return e.abrupt("return",e.sent.filter((function(e){return!!e.document})).map((function(e){return t=i.M,n=e.document,r=Yt(t,n.name),a=Wt(n.updateTime),o=n.createTime?Wt(n.createTime):st.min(),u=new pt({mapValue:{fields:n.fields}}),yt.newFoundDocument(r,a,o,u);var t,n,r,a,o,u})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fn=new Map;function hn(e){if(e._terminated)throw new G(B,"The client has already been terminated.");if(!fn.has(e)){S("ComponentProvider","Initializing Datastore");var t=(a=e._databaseId,o=e.app.options.appId||"",u=e._persistenceKey,s=e._freezeSettings(),i=new te(a,o,u,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams),new be(i,fetch.bind(null))),n=on(e._databaseId),r=function(e,t,n,r){return new un(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,t,n);fn.set(e,r)}var i,a,o,u,s;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return fn.get(e)}var dn=function(){"use strict";function e(n){var r;if(t(o)(this,e),void 0===n.host){if(void 0!==n.ssl)throw new G(M,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new G(M,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new G(M,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return t(s)(e,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),e}(),vn=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dn({}),this._settingsFrozen=!1}return t(s)(e,[{key:"app",get:function(){if(!this._app)throw new G(B,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new G(B,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dn(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Y;switch(e.type){case"gapi":var t=e.client;return new $(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new G(M,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=fn.get(e))&&(S("ComponentProvider","Removing Datastore"),fn.delete(e),t.terminate()),Promise.resolve();var e,t}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e,n){var r="object"==typeof e?e:(0,m.getApp)(),i="string"==typeof e?e:n||"(default)",a=(0,m._getProvider)(r,"firestore/lite").getImmediate({identifier:i});if(!a._initialized){var o=(0,w.getDefaultEmulatorHostnameAndPort)("firestore");o&&yn.apply(void 0,[a].concat(t(v)(o)))}return a}function yn(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=he(e,vn))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&T("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,u;if("string"==typeof i.mockUserToken)o=i.mockUserToken,u=_.MOCK_USER;else{o=(0,w.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new G(M,"mockUserToken must contain 'sub' or 'user_id' field!");u=new _(s)}e._authCredentials=new J(new K(o,u))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gn=function(){"use strict";function e(n,r,i){t(o)(this,e),this.converter=r,this._key=i,this.type="document",this.firestore=n}return t(s)(e,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new bn(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(t){return new e(this.firestore,t,this._key)}}]),e}(),mn=function(){"use strict";function e(n,r,i){t(o)(this,e),this.converter=r,this._query=i,this.type="query",this.firestore=n}return t(s)(e,[{key:"withConverter",value:function(t){return new e(this.firestore,t,this._query)}}]),e}(),bn=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i,a){var u;return t(o)(this,r),(u=n.call(this,e,i,new bt(a)))._path=a,u.type="collection",t(h)(u)}return t(s)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new gn(this.firestore,null,new ue(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(mn);function kn(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=(0,w.getModularInstance)(e),se("collection","path",n),e instanceof vn){var o,u=(o=ie).fromString.apply(o,[n].concat(t(v)(i)));return le(u),new bn(e,null,u)}var s;if(!(e instanceof gn||e instanceof bn))throw new G(M,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((s=ie).fromString.apply(s,[n].concat(t(v)(i))));return le(c),new bn(e.firestore,null,c)}function wn(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=(0,w.getModularInstance)(e),1===arguments.length&&(n=we.F()),se("doc","path",n),e instanceof vn){var o,u=(o=ie).fromString.apply(o,[n].concat(t(v)(i)));return ce(u),new gn(e,null,new ue(u))}var s;if(!(e instanceof gn||e instanceof bn))throw new G(M,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((s=ie).fromString.apply(s,[n].concat(t(v)(i))));return ce(c),new gn(e.firestore,e instanceof bn?e.converter:null,new ue(c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _n=function(){"use strict";function e(n){t(o)(this,e),this._byteString=n}return t(s)(e,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(t){try{return new e(Ae.fromBase64String(t))}catch(e){throw new G(M,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(t){return new e(Ae.fromUint8Array(t))}}]),e}(),En=function(){"use strict";function e(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];t(o)(this,e);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new G(M,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(r)}return t(s)(e,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xn=function e(n){"use strict";t(o)(this,e),this._methodName=n},Sn=function(){"use strict";function e(n,r){if(t(o)(this,e),!isFinite(n)||n<-90||n>90)throw new G(M,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new G(M,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return t(s)(e,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}]),e}(),In=/^__.*__$/,Tn=function(){"use strict";function e(n,r,i){t(o)(this,e),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return t(s)(e,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mt(e,this.data,t,this.fieldTransforms)}}]),e}(),An=function(){"use strict";function e(n,r,i){t(o)(this,e),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return t(s)(e,[{key:"toMutation",value:function(e,t){return new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}var Dn=function(){"use strict";function e(n,r,i,a,u,s){t(o)(this,e),this.settings=n,this.databaseId=r,this.M=i,this.ignoreUndefinedProperties=a,void 0===u&&this.rt(),this.fieldTransforms=u||[],this.fieldMask=s||[]}return t(s)(e,[{key:"path",get:function(){return this.settings.path}},{key:"st",get:function(){return this.settings.st}},{key:"it",value:function(t){return new e(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"ot",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.it({path:n,ut:!1});return r.ct(e),r}},{key:"at",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.it({path:n,ut:!1});return r.rt(),r}},{key:"ht",value:function(e){return this.it({path:void 0,ut:!0})}},{key:"lt",value:function(e){return Wn(e,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"rt",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ct(this.path.get(e))}},{key:"ct",value:function(e){if(0===e.length)throw this.lt("Document fields must not be empty");if(On(this.st)&&In.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}]),e}(),Cn=function(){"use strict";function e(n,r,i){t(o)(this,e),this.databaseId=n,this.ignoreUndefinedProperties=r,this.M=i||on(n)}return t(s)(e,[{key:"wt",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Dn({st:e,methodName:t,dt:n,path:oe.emptyPath(),ut:!1,ft:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}]),e}();function Nn(e){var t=e._freezeSettings(),n=on(e._databaseId);return new Cn(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Pn(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.wt(a.merge||a.mergeFields?2:0,t,n,i);Un("Data must be an object, but it was:",o,r);var u,s,c=jn(r,o);if(a.merge)u=new vt(o.fieldMask),s=o.fieldTransforms;else if(a.mergeFields){var l=[],f=!0,h=!1,d=void 0;try{for(var v,p=a.mergeFields[Symbol.iterator]();!(f=(v=p.next()).done);f=!0){var y=v.value,g=qn(t,y,n);if(!o.contains(g))throw new G(M,"Field '".concat(g,"' is specified in your field mask but missing from your input data."));Gn(l,g)||l.push(g)}}catch(e){h=!0,d=e}finally{try{f||null==p.return||p.return()}finally{if(h)throw d}}u=new vt(l),s=o.fieldTransforms.filter((function(e){return u.covers(e.field)}))}else u=null,s=o.fieldTransforms;return new Tn(new pt(c),u,s)}var Mn=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(s)(r,[{key:"_toFieldTransform",value:function(e){if(2!==e.st)throw 1===e.st?e.lt("".concat(this._methodName,"() can only appear at the top level of your update data")):e.lt("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return e.fieldMask.push(e.path),null}},{key:"isEqual",value:function(e){return e instanceof r}}]),r}(xn);function Ln(e,t,n,r){var i=e.wt(1,t,n);Un("Data must be an object, but it was:",i,r);var a=[],o=pt.empty();Se(r,(function(e,r){var u=Hn(t,e,n);r=(0,w.getModularInstance)(r);var s=i.at(u);if(r instanceof Mn)a.push(u);else{var c=Rn(r,s);null!=c&&(a.push(u),o.set(u,c))}}));var u=new vt(a);return new An(o,u,i.fieldTransforms)}function Vn(e,t,n,r,i,a){var o=e.wt(1,t,n),u=[qn(t,r,n)],s=[i];if(a.length%2!=0)throw new G(M,"Function ".concat(t,"() needs to be called with an even number of arguments that alternate between field names and values."));for(var c=0;c<a.length;c+=2)u.push(qn(t,a[c])),s.push(a[c+1]);for(var l=[],f=pt.empty(),h=u.length-1;h>=0;--h)if(!Gn(l,u[h])){var d=u[h],v=s[h];v=(0,w.getModularInstance)(v);var p=o.at(d);if(v instanceof Mn)l.push(d);else{var y=Rn(v,p);null!=y&&(l.push(d),f.set(d,y))}}var g=new vt(l);return new An(f,g,o.fieldTransforms)}function Fn(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Rn(n,e.wt(r?4:3,t))}function Rn(e,t){if(Bn(e=(0,w.getModularInstance)(e)))return Un("Unsupported field value:",t,e),jn(e,t);if(e instanceof xn)return function(e,t){if(!On(t.st))throw t.lt("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.lt("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ut&&4!==t.st)throw t.lt("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var c=Rn(u.value,t.ht(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,w.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return It(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=Pe.fromDate(e);return{timestampValue:qt(t.M,n)}}if(e instanceof Pe){var r=new Pe(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:qt(t.M,r)}}if(e instanceof Sn)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof _n)return{bytesValue:zt(t.M,e._byteString)};if(e instanceof gn){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.lt("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:Gt(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.lt("Unsupported field value: ".concat(fe(e)))}(e,t)}function jn(e,t){var n={};return function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(e,(function(e,r){var i=Rn(r,t.ot(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Bn(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Pe||e instanceof Sn||e instanceof _n||e instanceof gn||e instanceof xn)}function Un(e,t,n){if(!Bn(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=fe(n);throw"an object"===r?t.lt(e+" a custom object"):t.lt(e+" "+r)}var i}function qn(e,t,n){if((t=(0,w.getModularInstance)(t))instanceof En)return t._internalPath;if("string"==typeof t)return Hn(e,t);throw Wn("Field path arguments must be of type string or ",e,!1,void 0,n)}var zn=new RegExp("[~\\*/\\[\\]]");function Hn(e,n,r){if(n.search(zn)>=0)throw Wn("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,r);try{return t(u)(En,t(v)(n.split(".")))._internalPath}catch(t){throw Wn("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,r)}}function Wn(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,u="Function ".concat(t,"() called with invalid data");n&&(u+=" (via `toFirestore()`)"),u+=". ";var s="";return(a||o)&&(s+=" (found",a&&(s+=" in field ".concat(r)),o&&(s+=" in document ".concat(i)),s+=")"),new G(M,u+e+s)}function Gn(e,t){return e.some((function(e){return e.isEqual(t)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn=function(){"use strict";function e(n,r,i,a,u){t(o)(this,e),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=u}return t(s)(e,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new gn(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new Yn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(Qn("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),e}(),Yn=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(s)(r,[{key:"data",value:function(){return t(c)(t(l)(r.prototype),"data",this).call(this)}}]),r}(Kn),Jn=function(){"use strict";function e(n,r){t(o)(this,e),this._docs=r,this.query=n}return t(s)(e,[{key:"docs",get:function(){return t(v)(this._docs)}},{key:"size",get:function(){return this.docs.length}},{key:"empty",get:function(){return 0===this.docs.length}},{key:"forEach",value:function(e,t){this._docs.forEach(e,t)}}]),e}();function Qn(e,t){return"string"==typeof t?Hn(e,t):t instanceof En?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn=function e(){"use strict";t(o)(this,e)},$n=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return r}(Xn);function Zn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[];t instanceof Xn&&a.push(t),function(e){var t=e.filter((function(e){return e instanceof nr})).length,n=e.filter((function(e){return e instanceof er})).length;if(t>1||t>0&&n>0)throw new G(M,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a=a.concat(r));var o=!0,u=!1,s=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=c.value;e=f._apply(e)}}catch(e){u=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(u)throw s}}return e}var er=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i,a){var u;return t(o)(this,r),(u=n.call(this))._field=e,u._op=i,u._value=a,u.type="where",t(h)(u)}return t(s)(r,[{key:"_apply",value:function(e){var t=this._parse(e);return ar(e._query,t),new mn(e.firestore,e.converter,St(e._query,t))}},{key:"_parse",value:function(e){var t=Nn(e.firestore);return function(e,t,n,r,i,a,o){var u;if(i.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new G(M,"Invalid Query. You can't perform '".concat(a,"' queries on documentId()."));if("in"===a||"not-in"===a){ir(o,a);var s=[],c=!0,l=!1,f=void 0;try{for(var h,d=o[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var v=h.value;s.push(rr(r,e,v))}}catch(e){l=!0,f=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw f}}u={arrayValue:{values:s}}}else u=rr(r,e,o)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||ir(o,a),u=Fn(n,"where",o,"in"===a||"not-in"===a);return Xe.create(i,a,u)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}}],[{key:"_create",value:function(e,t,n){return new r(e,t,n)}}]),r}($n);function tr(e,t,n){var r=t,i=Qn("where",e);return er._create(i,r,n)}var nr=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).type=e,a._queryConstraints=i,t(h)(a)}return t(s)(r,[{key:"_parse",value:function(e){var t=this._queryConstraints.map((function(t){return t._parse(e)})).filter((function(e){return e.getFilters().length>0}));return 1===t.length?t[0]:$e.create(t,this._getOperator())}},{key:"_apply",value:function(e){var t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){var n=e,r=t.getFlattenedFilters(),i=!0,a=!1,o=void 0;try{for(var u,s=r[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var c=u.value;ar(n,c),n=St(n,c)}}catch(e){a=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}}(e._query,t),new mn(e.firestore,e.converter,St(e._query,t)))}},{key:"_getQueryConstraints",value:function(){return this._queryConstraints}},{key:"_getOperator",value:function(){return"and"===this.type?"and":"or"}}],[{key:"_create",value:function(e,t){return new r(e,t)}}]),r}(Xn);function rr(e,t,n){if("string"==typeof(n=(0,w.getModularInstance)(n))){if(""===n)throw new G(M,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_t(t)&&-1!==n.indexOf("/"))throw new G(M,"Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '".concat(n,"' contains a '/' character."));var r=t.path.child(ie.fromString(n));if(!ue.isDocumentKey(r))throw new G(M,"Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '".concat(r,"' is not because it has an odd number of segments (").concat(r.length,")."));return ze(e,new ue(r))}if(n instanceof gn)return ze(e,n._key);throw new G(M,"Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ".concat(fe(n),"."))}function ir(e,t){if(!Array.isArray(e)||0===e.length)throw new G(M,"Invalid Query. A non-empty array is required for '".concat(t.toString(),"' filters."))}function ar(e,t){if(t.isInequality()){var n=wt(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new G(M,"Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '".concat(n.toString(),"' and '").concat(r.toString(),"'"));var i=kt(e);null!==i&&or(e,r,i)}var a=function(e,t){var n=!0,r=!1,i=void 0,a=!0,o=!1,u=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=s.value;try{for(var f,h=l.getFlattenedFilters()[Symbol.iterator]();!(n=(f=h.next()).done);n=!0){var d=f.value;if(t.indexOf(d.op)>=0)return d.op}}catch(e){r=!0,i=e}finally{try{n||null==h.return||h.return()}finally{if(r)throw i}}}}catch(e){o=!0,u=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw u}}return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==a)throw a===t.op?new G(M,"Invalid query. You cannot use more than one '".concat(t.op.toString(),"' filter.")):new G(M,"Invalid query. You cannot use '".concat(t.op.toString(),"' filters with '").concat(a.toString(),"' filters."))}function or(e,t,n){if(!n.isEqual(t))throw new G(M,"Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '".concat(t.toString(),"' and so you must also use '").concat(t.toString(),"' as your first argument to orderBy(), but your first orderBy() is on field '").concat(n.toString(),"' instead."))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ur(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}var sr=function(e){"use strict";t(f)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).firestore=e,t(h)(i)}return t(s)(r,[{key:"convertBytes",value:function(e){return new _n(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new gn(this.firestore,null,t)}}]),r}(function(){"use strict";function e(){t(o)(this,e)}return t(s)(e,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(Re(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ne(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}},{key:"convertObject",value:function(e,t){var n=this,r={};return Se(e.fields,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new Sn(Ce(e.latitude),Ce(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=Le(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ve(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=De(e);return new Pe(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=ie.fromString(e);D(an(n));var r=new ne(n.get(1),n.get(3)),i=new ue(n.popFirst(5));return r.isEqual(t)||I("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),e}());function cr(e){!function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new G(z,"limitToLast() queries require specifying at least one orderBy() clause")}((e=he(e,mn))._query);var t=hn(e.firestore),n=new sr(e.firestore);return function(e,t){return ln.apply(this,arguments)}(t,e._query).then((function(t){var r=t.map((function(t){return new Yn(e.firestore,n,t.key,t,e.converter)}));return"L"===e._query.limitType&&r.reverse(),new Jn(e,r)}))}function lr(e,t,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];var o,u=Nn((e=he(e,gn)).firestore);return o="string"==typeof(t=(0,w.getModularInstance)(t))||t instanceof En?Vn(u,"updateDoc",e._key,t,n,i):Ln(u,"updateDoc",e._key,t),sn(hn(e.firestore),[o.toMutation(e._key,Nt.exists(!0))])}function fr(e){return sn(hn((e=he(e,gn)).firestore),[new Vt(e._key,Nt.none())])}function hr(e,t){var n=wn(e=he(e,bn)),r=ur(e.converter,t),i=Pn(Nn(e.firestore),"addDoc",n._key,r,null!==n.converter,{});return sn(hn(e.firestore),[i.toMutation(n._key,Nt.exists(!1))]).then((function(){return n}))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr="".concat(m.SDK_VERSION,"_lite"),E=dr,(0,m._registerComponent)(new(0,b.Component)("firestore/lite",(function(e,t){var n=t.instanceIdentifier,r=t.options,i=e.getProvider("app").getImmediate(),a=new vn(new Q(e.getProvider("auth-internal")),new ee(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new G(M,'"projectId" not provided in firebase.initializeApp.');return new ne(e.options.projectId,t)}(i,n),i);return r&&a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),(0,m.registerVersion)("firestore-lite","3.8.4",""),(0,m.registerVersion)("firestore-lite","3.8.4","esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}}))}();
//# sourceMappingURL=terms-of-service.fa6cf44e.js.map
