(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{AMZ_ALGORITHM_QUERY_PARAM:()=>r,AMZ_CONTENT_SHA256_HEADER:()=>s,AMZ_CREDENTIAL_QUERY_PARAM:()=>n,AMZ_DATE_HEADER:()=>l,AMZ_DATE_QUERY_PARAM:()=>o,AMZ_EXPIRES_QUERY_PARAM:()=>i,AMZ_SIGNATURE_QUERY_PARAM:()=>a,AMZ_SIGNED_HEADERS_QUERY_PARAM:()=>c,AMZ_TOKEN_QUERY_PARAM:()=>u,AUTHORIZATION_HEADER:()=>y,AWSConfig:()=>x,Endpoint:()=>E,HOST_HEADER:()=>d,InvalidAWSConfigError:()=>K,InvalidSignatureError:()=>ye,SIGNING_ALGORITHM_IDENTIFIER:()=>m,SignatureV4:()=>pe,UNSIGNED_PAYLOAD:()=>g});var r="X-Amz-Algorithm",n="X-Amz-Credential",o="X-Amz-Date",i="X-Amz-Expires",a="X-Amz-Signature",c="X-Amz-SignedHeaders",u="X-Amz-Security-Token",s="x-amz-content-sha256",l=o.toLowerCase(),f=a.toLowerCase(),p=("X-Amz-Target".toLowerCase(),u.toLowerCase()),y="authorization",h=[y,l,"date"],d="host",b={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},v="aws4_request",m="AWS4-HMAC-SHA256",g="UNSIGNED-PAYLOAD";function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,j(n.key),n)}}function A(e,t,r){return(t=j(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){var t=function(e,t){if("object"!=O(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==O(t)?t:t+""}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,"_protocol",void 0),A(this,"_hostname",void 0),A(this,"_port",void 0);var r=!t.startsWith("http://")&&!t.startsWith("https://")?"".concat(e.DEFAULT_PROTOCOL,"://").concat(t):t,n=r.match(/^https?:/),o=w(r.replace(/^https?:\/\//,"").split("/"),1)[0];this._protocol=n?n[0].slice(0,-1):e.DEFAULT_PROTOCOL,this._hostname=o.split(":")[0],this._port=o.split(":")[1]?parseInt(o.split(":")[1]):void 0}return t=e,(r=[{key:"copy",value:function(){return new e(this.href)}},{key:"host",get:function(){return this._port?"".concat(this._hostname,":").concat(this._port):this._hostname},set:function(e){var t=w(e.split(":"),2),r=t[0],n=t[1];this._hostname=r,this._port=n?parseInt(n):void 0}},{key:"hostname",get:function(){return this._hostname},set:function(e){this._hostname=e}},{key:"href",get:function(){return"".concat(this.protocol,"://").concat(this.host)},set:function(t){var r=t.match(/^https?:/),n=w(t.replace(/^https?:\/\//,"").split("/"),1)[0];this._protocol=r?r[0].slice(0,-1):e.DEFAULT_PROTOCOL,this._hostname=n.split(":")[0],this._port=n.split(":")[1]?parseInt(n.split(":")[1]):void 0}},{key:"port",get:function(){return this._port},set:function(e){this._port=e}},{key:"protocol",get:function(){return this._protocol},set:function(e){this._protocol=e}}])&&_(t.prototype,r),n&&_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r,n}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function T(e,t,r){return t=I(t),function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,C()?Reflect.construct(t,r||[],I(e).constructor):t.apply(e,r))}function k(e){var t="function"==typeof Map?new Map:void 0;return k=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if(C())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&R(o,r.prototype),o}(e,arguments,I(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),R(r,e)},k(e)}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,N(n.key),n)}}function H(e,t,r){return t&&M(e.prototype,t),r&&M(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function L(e,t,r){return(t=N(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){var t=function(e,t){if("object"!=P(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==P(t)?t:t+""}A(E,"DEFAULT_PROTOCOL","https");var x=function(){function e(t){if(D(this,e),L(this,"region",void 0),L(this,"accessKeyId",void 0),L(this,"secretAccessKey",void 0),L(this,"sessionToken",void 0),L(this,"endpoint",void 0),!t.region||""===t.region)throw new K('invalid AWS region; reason: expected a valid AWS region name (e.g. "us-east-1"), got `'.concat(t.region,"`"));if(!t.accessKeyId||""===t.accessKeyId)throw new K("invalid AWS access key ID; reason: expected a non empty string, got `".concat(t.accessKeyId,"`"));if(t.accessKeyId.length<16||t.accessKeyId.length>128)throw new K("invalid AWS access key ID; reason: size should be between 16 and 128 characters, got ".concat(t.accessKeyId.length));if(!t.secretAccessKey||""===t.secretAccessKey)throw new K("invalid AWS secret access key; reason: expected a non empty string, got `".concat(t.secretAccessKey,"`"));this.region=t.region,this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey,void 0!==t.sessionToken&&(this.sessionToken=t.sessionToken),void 0!==t.endpoint&&("string"==typeof t.endpoint?this.endpoint=new E(t.endpoint):this.endpoint=t.endpoint)}return H(e,null,[{key:"fromEnvironment",value:function(t){return new e({region:__ENV.AWS_REGION,accessKeyId:__ENV.AWS_ACCESS_KEY_ID,secretAccessKey:__ENV.AWS_SECRET_ACCESS_KEY,sessionToken:__ENV.AWS_SESSION_TOKEN,endpoint:null==t?void 0:t.endpoint})}}])}(),K=function(e){function t(e){return D(this,t),T(this,t,[e])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(t,e),H(t)}(k(Error));const U=require("k6/crypto");var q=e.n(U);const z=require("k6/html");function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function Q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,F(n.key),n)}}function X(e,t,r){return t=G(t),function(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,B()?Reflect.construct(t,r||[],G(e).constructor):t.apply(e,r))}function Z(e){var t="function"==typeof Map?new Map:void 0;return Z=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if(B())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&Y(o,r.prototype),o}(e,arguments,G(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Y(r,e)},Z(e)}function B(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(B=function(){return!!e})()}function Y(e,t){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Y(e,t)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}function F(e){var t=function(e,t){if("object"!=W(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==W(t)?t:t+""}var V=function(e){function t(e,r){var n,o,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=X(this,t,[e]),o=n,a=void 0,(i=F(i="code"))in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a,n.name="AWSError",n.code=r,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Y(e,t)}(t,e),r=t,o=[{key:"parseXML",value:function(e){var r=(0,z.parseHTML)(e);return new t(r.find("Message").text(),r.find("Code").text())}},{key:"parse",value:function(e){if("application/json"===e.headers["Content-Type"]){var r=e.json()||{};return new t(r.Message||r.message||r.__type||"An error occurred on the server side",e.headers["X-Amzn-Errortype"]||r.__type)}return t.parseXML(e.body)}}],(n=null)&&Q(r.prototype,n),o&&Q(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,o}(Z(Error));function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function J(e,t,r){return t=te(t),function(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,ee()?Reflect.construct(t,r||[],te(e).constructor):t.apply(e,r))}function ee(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ee=function(){return!!e})()}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},te(e)}function re(e,t){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},re(e,t)}function ne(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return oe(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){le(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ue(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,fe(n.key),n)}}function se(e,t,r){return t&&ue(e.prototype,t),r&&ue(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,r){return(t=fe(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fe(e){var t=function(e,t){if("object"!=$(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==$(t)?t:t+""}var pe=function(){return se((function e(t){var r=t.service,n=t.region,o=t.credentials,i=t.uriEscapePath,a=t.applyChecksum;ce(this,e),le(this,"service",void 0),le(this,"region",void 0),le(this,"credentials",void 0),le(this,"uriEscapePath",void 0),le(this,"applyChecksum",void 0),this.service=r,this.region=n,this.credentials=o,this.uriEscapePath="boolean"!=typeof i||i,this.applyChecksum="boolean"!=typeof a||a}),[{key:"sign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=ae(ae({},{signingDate:new Date,unsignableHeaders:new Set,signableHeaders:new Set}),t),n=de(r.signingDate),o=n.longDate,i=n.shortDate,a=r.signingService||this.service,c=r.signingRegion||this.region,u="".concat(i,"/").concat(c,"/").concat(a,"/").concat(v);e.headers[d]||(e.headers[d]=e.endpoint.hostname);for(var f=0,b=Object.keys(e.headers);f<b.length;f++){var g=b[f];h.indexOf(g.toLowerCase())>-1&&delete e.headers[g]}e.headers[l]=o,this.credentials.sessionToken&&(e.headers[p]=this.credentials.sessionToken),ArrayBuffer.isView(e.body)&&(e.body=e.body.buffer),e.body||(e.body="");var O=this.computePayloadHash(e);!function(e,t){e=e.toLowerCase();for(var r=0,n=Object.keys(t);r<n.length;r++)if(e===n[r].toLowerCase())return!0;return!1}(s,e.headers)&&this.applyChecksum&&(e.headers[s]=O);var w=this.computeCanonicalHeaders(e,r.unsignableHeaders,r.signableHeaders),S=this.calculateSignature(o,u,this.deriveSigningKey(this.credentials,a,c,i),this.createCanonicalRequest(e,w,O));e.headers[y]="".concat(m," ")+"Credential=".concat(this.credentials.accessKeyId,"/").concat(u,", ")+"SignedHeaders=".concat(Object.keys(w).sort().join(";"),", ")+"Signature=".concat(S);var _=e.endpoint.href;return e.path&&(_+=e.path),e.query&&(_+="?".concat(this.serializeQueryParameters(e.query))),ae({url:_},e)}},{key:"presign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.signingDate,l=void 0===s?new Date:s,f=t.expiresIn,p=void 0===f?3600:f,y=t.unsignableHeaders,h=t.unhoistableHeaders,b=t.signableHeaders,g=t.signingRegion,O=t.signingService,w=de(l),S=w.longDate,_=w.shortDate,A=g||this.region,j=O||this.service;if(p>604800)throw new ye("Signature version 4 presigned URLs can't be valid for more than 7 days");var E="".concat(_,"/").concat(A,"/").concat(j,"/").concat(v),P=this.moveHeadersToQuery(e,{unhoistableHeaders:h});P.headers[d]||(P.headers[d]=e.endpoint.hostname),this.credentials.sessionToken&&(P.query[u]=this.credentials.sessionToken),P.query[r]=m,P.query[n]="".concat(this.credentials.accessKeyId,"/").concat(E),P.query[o]=S,P.query[i]=p.toString(10);var T=this.computeCanonicalHeaders(P,y,b);P.query[c]=Object.keys(T).sort().join(";");var k=this.deriveSigningKey(this.credentials,j,A,_),C=this.computePayloadHash(e),R=this.createCanonicalRequest(P,T,C);P.query[a]=this.calculateSignature(S,E,k,R);var I=P.endpoint.href;return P.path&&(I+=P.path),P.query&&(I+="?".concat(this.serializeQueryParameters(P.query))),ae({url:I},P)}},{key:"createCanonicalRequest",value:function(e,t,r){var n=Object.keys(t).sort(),o=n.map((function(e){return"".concat(e,":").concat(t[e])})).join("\n"),i=n.join(";");return"".concat(e.method,"\n")+"".concat(this.computeCanonicalURI(e),"\n")+"".concat(this.computeCanonicalQuerystring(e),"\n")+"".concat(o,"\n\n")+"".concat(i,"\n")+"".concat(r)}},{key:"createStringToSign",value:function(e,t,r){var n=q().sha256(r,"hex");return"".concat(m,"\n")+"".concat(e,"\n")+"".concat(t,"\n")+"".concat(n)}},{key:"calculateSignature",value:function(e,t,r,n){var o=this.createStringToSign(e,t,n);return q().hmac("sha256",r,o,"hex")}},{key:"deriveSigningKey",value:function(e,t,r,n){var o=e.secretAccessKey,i=q().hmac("sha256","AWS4"+o,n,"binary"),a=q().hmac("sha256",i,r,"binary"),c=q().hmac("sha256",a,t,"binary");return q().hmac("sha256",c,"aws4_request","binary")}},{key:"computeCanonicalURI",value:function(e){var t=e.path;if(this.uriEscapePath){var r,n=[],o=ne(t.split("/"));try{for(o.s();!(r=o.n()).done;){var i=r.value;0!==(null==i?void 0:i.length)&&("."!==i&&(".."===i?n.pop():n.push(i)))}}catch(e){o.e(e)}finally{o.f()}var a=null!=t&&t.startsWith("/")?"/":"",c=n.join("/"),u=n.length>0&&null!=t&&t.endsWith("/")?"/":"",s="".concat(a).concat(c).concat(u);return encodeURIComponent(s).replace(/%2F/g,"/")}return t}},{key:"computeCanonicalQuerystring",value:function(e){var t,r=e.query,n=void 0===r?{}:r,o=[],i={},a=function(e){if(e.toLowerCase()===f)return 1;o.push(e);var t=n[e];"string"==typeof t?i[e]="".concat(he(e),"=").concat(he(t)):Array.isArray(t)&&(i[e]=t.slice(0).sort().reduce((function(t,r){return t.concat(["".concat(he(e),"=").concat(he(r))])}),[]).join("&"))},c=ne(Object.keys(n).sort());try{for(c.s();!(t=c.n()).done;){a(t.value)}}catch(e){c.e(e)}finally{c.f()}return o.map((function(e){return i[e]})).filter((function(e){return e})).join("&")}},{key:"computeCanonicalHeaders",value:function(e,t,r){var n,o=e.headers,i={},a=ne(Object.keys(o).sort());try{for(a.s();!(n=a.n()).done;){var c=n.value;if(null!=o[c]){var u=c.toLowerCase();(u in b||null!=t&&t.has(u))&&(!r||r&&!r.has(u))||"string"==typeof o[c]&&(i[u]=o[c]=o[c].trim().replace(/\s+/g," "))}}}catch(e){a.e(e)}finally{a.f()}return i}},{key:"computePayloadHash",value:function(e){var t,r=e.headers,n=e.body;return r[s]?r[s]:null==n?"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855":"string"==typeof n||(t=n,"function"==typeof ArrayBuffer&&(t instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(t)))?q().sha256(n,"hex").toLowerCase():ArrayBuffer.isView(n)?q().sha256(n.buffer,"hex").toLowerCase():g}},{key:"moveHeadersToQuery",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=JSON.parse(JSON.stringify(e)),n=r.headers,o=r.query,i=void 0===o?{}:o,a=0,c=Object.keys(n);a<c.length;a++){var u,s=c[a],l=s.toLowerCase();"x-amz-"!==l.slice(0,6)||null!==(u=t.unhoistableHeaders)&&void 0!==u&&u.has(l)||(i[s]=n[s],delete n[s])}return ae(ae({},r),{},{headers:n,query:i})}},{key:"serializeQueryParameters",value:function(e,t){var r,n=[],o={},i=function(r){if(null!=t&&t.includes(r.toLowerCase()))return 1;n.push(r);var i=e[r];"string"==typeof i?o[r]="".concat(he(r),"=").concat(he(i)):Array.isArray(i)&&(o[r]=i.slice(0).sort().reduce((function(e,t){return e.concat(["".concat(he(r),"=").concat(he(t))])}),[]).join("&"))},a=ne(Object.keys(e).sort());try{for(a.s();!(r=a.n()).done;){i(r.value)}}catch(e){a.e(e)}finally{a.f()}return n.map((function(e){return o[e]})).filter((function(e){return e})).join("&")}}])}(),ye=function(e){function t(e,r){var n;return ce(this,t),(n=J(this,t,[e,r])).name="InvalidSignatureError",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&re(e,t)}(t,e),se(t)}(V);function he(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}function de(e){var t,r=(t=e,function(e){return"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e}(t).toISOString().replace(/\.\d{3}Z$/,"Z")).replace(/[-:]/g,"");return{longDate:r,shortDate:r.slice(0,8)}}var be=exports;for(var ve in t)be[ve]=t[ve];t.__esModule&&Object.defineProperty(be,"__esModule",{value:!0})})();
//# sourceMappingURL=signature.js.map