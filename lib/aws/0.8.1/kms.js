(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e){var t=c();return function(){var n,o=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function o(e){var t="function"==typeof Map?new Map:void 0;return o=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return i(e,arguments,u(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)},o(e)}function i(e,t,r){return i=c()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&a(o,r.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function l(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}e.r(t),e.d(t,{AWSConfig:()=>h,InvalidAWSConfigError:()=>d,InvalidSignatureError:()=>le,KMSClient:()=>Ae,KMSDataKey:()=>Ce,KMSServiceError:()=>Ke});var h=function(){function e(t){if(s(this,e),y(this,"region",void 0),y(this,"accessKeyId",void 0),y(this,"secretAccessKey",void 0),y(this,"sessionToken",void 0),y(this,"scheme","https"),y(this,"endpoint","amazonaws.com"),!t.region||""===t.region)throw new d('invalid AWS region; reason: expected a valid AWS region name (e.g. "us-east-1"), got `'.concat(t.region,"`"));if(!t.accessKeyId||""===t.accessKeyId)throw new d("invalid AWS access key ID; reason: expected a non empty string, got `".concat(t.accessKeyId,"`"));if(t.accessKeyId.length<16||t.accessKeyId.length>128)throw new d("invalid AWS access key ID; reason: size should be between 16 and 128 characters, got ".concat(t.accessKeyId.length));if(!t.secretAccessKey||""===t.secretAccessKey)throw new d("invalid AWS secret access key; reason: expected a non empty string, got `".concat(t.secretAccessKey,"`"));if(t.secretAccessKey.length<16||t.secretAccessKey.length>128)throw new d("invalid AWS secret access key; reason: size should be between 16 and 128 characters, got ".concat(t.secretAccessKey.length));this.region=t.region,this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey,void 0!==t.sessionToken&&(this.sessionToken=t.sessionToken),void 0!==t.scheme&&(this.scheme=t.scheme),void 0!==t.endpoint&&(this.endpoint=t.endpoint)}return l(e,null,[{key:"fromEnvironment",value:function(t){return new e({region:__ENV.AWS_REGION,accessKeyId:__ENV.AWS_ACCESS_KEY_ID,secretAccessKey:__ENV.AWS_SECRET_ACCESS_KEY,sessionToken:__ENV.AWS_SESSION_TOKEN,scheme:null==t?void 0:t.scheme,endpoint:null==t?void 0:t.endpoint})}}]),e}(),d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(r,e);var t=n(r);function r(e){return s(this,r),t.call(this,e)}return l(r)}(o(Error));const b=require("k6/http");var v=e.n(b);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,O(n.key),n)}}function w(e,t,r){return(t=O(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}var S=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"awsConfig",void 0),w(this,"serviceName",void 0),w(this,"_host",void 0),w(this,"_scheme",void 0),this.awsConfig=t,this.serviceName=r}var t,r,n;return t=e,(r=[{key:"host",get:function(){return null==this._host&&(this._host="".concat(this.serviceName,".").concat(this.awsConfig.region,".").concat(this.awsConfig.endpoint)),this._host},set:function(e){this._host=e}},{key:"scheme",get:function(){return null==this._scheme&&(this._scheme=this.awsConfig.scheme),this._scheme},set:function(e){this._scheme=e}}])&&g(t.prototype,r),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j="X-Amz-Date",P="X-Amz-Signature",_="X-Amz-Security-Token",k="x-amz-content-sha256",A=j.toLowerCase(),E=P.toLowerCase(),C="X-Amz-Target".toLowerCase(),K=_.toLowerCase(),T="authorization",x=[T,A,"date"],I="host",D={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},R="aws4_request",N="AWS4-HMAC-SHA256";const H=require("k6/html");function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Q(n.key),n)}}function L(e){var t=X();return function(){var r,n=U(e);if(t){var o=U(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}(this,r)}}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){var t="function"==typeof Map?new Map:void 0;return B=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return W(e,arguments,U(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),J(n,e)},B(e)}function W(e,t,r){return W=X()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&J(o,r.prototype),o},W.apply(null,arguments)}function X(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function Q(e){var t=function(e,t){if("object"!==z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===z(t)?t:String(t)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(i,e);var t,r,n,o=L(i);function i(e,t){var r,n,c,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r=o.call(this,e),n=M(r),a=void 0,(c=Q(c="code"))in n?Object.defineProperty(n,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[c]=a,r.name="AWSError",r.code=t,r}return t=i,n=[{key:"parseXML",value:function(e){var t=(0,H.parseHTML)(e);return new i(t.find("Message").text(),t.find("Code").text())}}],(r=null)&&q(t.prototype,r),n&&q(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(B(Error));const V=require("k6/crypto");var F=e.n(V);function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Z(e,t)}function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ee(e);if(t){var o=ee(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===Y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}function te(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){ue(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,se(n.key),n)}}function ae(e,t,r){return t&&ce(e.prototype,t),r&&ce(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ue(e,t,r){return(t=se(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(e){var t=function(e,t){if("object"!==Y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==Y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Y(t)?t:String(t)}var fe=function(){function e(t){var r=t.service,n=t.region,o=t.credentials,i=t.uriEscapePath,c=t.applyChecksum;ie(this,e),ue(this,"service",void 0),ue(this,"region",void 0),ue(this,"credentials",void 0),ue(this,"uriEscapePath",void 0),ue(this,"applyChecksum",void 0),this.service=r,this.region=n,this.credentials=o,this.uriEscapePath="boolean"!=typeof i||i,this.applyChecksum="boolean"!=typeof c||c}return ae(e,[{key:"sign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=oe(oe({},{signingDate:new Date,unsignableHeaders:new Set,signableHeaders:new Set}),t),n=pe(r.signingDate),o=n.longDate,i=n.shortDate,c=r.signingService||this.service,a=r.signingRegion||this.region,u="".concat(i,"/").concat(a,"/").concat(c,"/").concat(R);e.headers[I]=e.hostname;for(var s=0,f=Object.keys(e.headers);s<f.length;s++){var l=f[s];x.indexOf(l.toLowerCase())>-1&&delete e.headers[l]}e.headers[A]=o,this.credentials.sessionToken&&(e.headers[K]=this.credentials.sessionToken),ArrayBuffer.isView(e.body)&&(e.body=e.body.buffer),e.body||(e.body="");var y=this.computePayloadHash(e);!function(e,t){e=e.toLowerCase();for(var r=0,n=Object.keys(t);r<n.length;r++)if(e===n[r].toLowerCase())return!0;return!1}(k,e.headers)&&this.applyChecksum&&(e.headers[k]=y);var p=this.computeCanonicalHeaders(e,r.unsignableHeaders,r.signableHeaders),h=this.calculateSignature(o,u,this.deriveSigningKey(this.credentials,c,a,i),this.createCanonicalRequest(e,p,y));e.headers[T]="".concat(N," ")+"Credential=".concat(this.credentials.accessKeyId,"/").concat(u,", ")+"SignedHeaders=".concat(Object.keys(p).sort().join(";"),", ")+"Signature=".concat(h);var d="".concat(e.protocol,"://").concat(e.hostname);return e.path&&(d+=e.path),e.query&&(d+="?".concat(this.serializeQueryParameters(e.query))),oe({url:d},e)}},{key:"presign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.signingDate,n=void 0===r?new Date:r,o=t.expiresIn,i=void 0===o?3600:o,c=t.unsignableHeaders,a=t.unhoistableHeaders,u=t.signableHeaders,s=t.signingRegion,f=t.signingService,l=pe(n),y=l.longDate,p=l.shortDate,h=s||this.region,d=f||this.service;if(i>604800)throw new le("Signature version 4 presigned URLs can't be valid for more than 7 days");var b="".concat(p,"/").concat(h,"/").concat(d,"/").concat(R),v=this.moveHeadersToQuery(e,{unhoistableHeaders:a});v.headers[I]=e.hostname,this.credentials.sessionToken&&(v.query[_]=this.credentials.sessionToken),v.query["X-Amz-Algorithm"]=N,v.query["X-Amz-Credential"]="".concat(this.credentials.accessKeyId,"/").concat(b),v.query[j]=y,v.query["X-Amz-Expires"]=i.toString(10);var m=this.computeCanonicalHeaders(v,c,u);v.query["X-Amz-SignedHeaders"]=Object.keys(m).sort().join(";");var g=this.deriveSigningKey(this.credentials,d,h,p),w=this.computePayloadHash(e),O=this.createCanonicalRequest(v,m,w);v.query[P]=this.calculateSignature(y,b,g,O);var S="".concat(v.protocol,"://").concat(v.hostname);return v.path&&(S+=v.path),v.query&&(S+="?".concat(this.serializeQueryParameters(v.query))),oe({url:S},v)}},{key:"createCanonicalRequest",value:function(e,t,r){var n=Object.keys(t).sort(),o=n.map((function(e){return"".concat(e,":").concat(t[e])})).join("\n"),i=n.join(";");return"".concat(e.method,"\n")+"".concat(this.computeCanonicalURI(e),"\n")+"".concat(this.computeCanonicalQuerystring(e),"\n")+"".concat(o,"\n\n")+"".concat(i,"\n")+"".concat(r)}},{key:"createStringToSign",value:function(e,t,r){var n=F().sha256(r,"hex");return"".concat(N,"\n")+"".concat(e,"\n")+"".concat(t,"\n")+"".concat(n)}},{key:"calculateSignature",value:function(e,t,r,n){var o=this.createStringToSign(e,t,n);return F().hmac("sha256",r,o,"hex")}},{key:"deriveSigningKey",value:function(e,t,r,n){var o=e.secretAccessKey,i=F().hmac("sha256","AWS4"+o,n,"binary"),c=F().hmac("sha256",i,r,"binary"),a=F().hmac("sha256",c,t,"binary");return F().hmac("sha256",a,"aws4_request","binary")}},{key:"computeCanonicalURI",value:function(e){var t=e.path;if(this.uriEscapePath){var r,n=[],o=te(t.split("/"));try{for(o.s();!(r=o.n()).done;){var i=r.value;0!==(null==i?void 0:i.length)&&("."!==i&&(".."===i?n.pop():n.push(i)))}}catch(e){o.e(e)}finally{o.f()}var c=null!=t&&t.startsWith("/")?"/":"",a=n.join("/"),u=n.length>0&&null!=t&&t.endsWith("/")?"/":"",s="".concat(c).concat(a).concat(u);return encodeURIComponent(s).replace(/%2F/g,"/")}return t}},{key:"computeCanonicalQuerystring",value:function(e){var t,r=e.query,n=void 0===r?{}:r,o=[],i={},c=function(e){if(e.toLowerCase()===E)return"continue";o.push(e);var t=n[e];"string"==typeof t?i[e]="".concat(ye(e),"=").concat(ye(t)):Array.isArray(t)&&(i[e]=t.slice(0).sort().reduce((function(t,r){return t.concat(["".concat(ye(e),"=").concat(ye(r))])}),[]).join("&"))},a=te(Object.keys(n).sort());try{for(a.s();!(t=a.n()).done;)c(t.value)}catch(e){a.e(e)}finally{a.f()}return o.map((function(e){return i[e]})).filter((function(e){return e})).join("&")}},{key:"computeCanonicalHeaders",value:function(e,t,r){var n,o=e.headers,i={},c=te(Object.keys(o).sort());try{for(c.s();!(n=c.n()).done;){var a=n.value;if(null!=o[a]){var u=a.toLowerCase();(u in D||null!=t&&t.has(u))&&(!r||r&&!r.has(u))||(i[u]=o[a].trim().replace(/\s+/g," "))}}}catch(e){c.e(e)}finally{c.f()}return i}},{key:"computePayloadHash",value:function(e){var t,r=e.headers,n=e.body;return r[k]?r[k]:null==n?"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855":"string"==typeof n||(t=n,"function"==typeof ArrayBuffer&&(t instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(t)))?F().sha256(n,"hex").toLowerCase():ArrayBuffer.isView(n)?F().sha256(n.buffer,"hex").toLowerCase():"UNSIGNED-PAYLOAD"}},{key:"moveHeadersToQuery",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=JSON.parse(JSON.stringify(e)),n=r.headers,o=r.query,i=void 0===o?{}:o,c=0,a=Object.keys(n);c<a.length;c++){var u,s=a[c],f=s.toLowerCase();"x-amz-"!==f.slice(0,6)||null!==(u=t.unhoistableHeaders)&&void 0!==u&&u.has(f)||(i[s]=n[s],delete n[s])}return oe(oe({},r),{},{headers:n,query:i})}},{key:"serializeQueryParameters",value:function(e,t){var r,n=[],o={},i=function(r){if(null!=t&&t.includes(r.toLowerCase()))return"continue";n.push(r);var i=e[r];"string"==typeof i?o[r]="".concat(ye(r),"=").concat(ye(i)):Array.isArray(i)&&(o[r]=i.slice(0).sort().reduce((function(e,t){return e.concat(["".concat(ye(r),"=").concat(ye(t))])}),[]).join("&"))},c=te(Object.keys(e).sort());try{for(c.s();!(r=c.n()).done;)i(r.value)}catch(e){c.e(e)}finally{c.f()}return n.map((function(e){return o[e]})).filter((function(e){return e})).join("&")}}]),e}(),le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(r,e);var t=$(r);function r(e,n){var o;return ie(this,r),(o=t.call(this,e,n)).name="InvalidSignatureError",o}return ae(r)}(G);function ye(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}function pe(e){var t,r=(t=e,function(e){return"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e}(t).toISOString().replace(/\.\d{3}Z$/,"Z")).replace(/[\-:]/g,"");return{longDate:r,shortDate:r.slice(0,8)}}function he(e){return he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(e)}function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){_e(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ve(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ke(n.key),n)}}function ge(e,t,r){return t&&me(e.prototype,t),r&&me(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function we(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Oe(e,t)}function Oe(e,t){return Oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Oe(e,t)}function Se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Pe(e);if(t){var o=Pe(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===he(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return je(e)}(this,r)}}function je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e){return Pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Pe(e)}function _e(e,t,r){return(t=ke(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ke(e){var t=function(e,t){if("object"!==he(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==he(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===he(t)?t:String(t)}var Ae=function(e){we(r,e);var t=Se(r);function r(e){var n;return ve(this,r),_e(je(n=t.call(this,e,"kms")),"method",void 0),_e(je(n),"commonHeaders",void 0),_e(je(n),"signature",void 0),n.signature=new fe({service:n.serviceName,region:e.region,credentials:{accessKeyId:e.accessKeyId,secretAccessKey:e.secretAccessKey},uriEscapePath:!0,applyChecksum:!1}),n.method="POST",n.commonHeaders={"Content-Type":"application/x-amz-json-1.1"},n}return ge(r,[{key:"listKeys",value:function(){var e=this.signature.sign({method:this.method,protocol:this.awsConfig.scheme,hostname:this.host,path:"/",headers:be(be({},this.commonHeaders),{},_e({},C,"TrentService.ListKeys")),body:JSON.stringify({})},{}),t=v().request(this.method,e.url,e.body,{headers:e.headers});return this._handle_error(Te.ListKeys,t),t.json("Keys").map((function(e){return Ee.fromJSON(e)}))}},{key:"generateDataKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:xe.Size256,r=this.signature.sign({method:this.method,protocol:this.awsConfig.scheme,hostname:this.host,path:"/",headers:be(be({},this.commonHeaders),{},_e({},C,"TrentService.GenerateDataKey")),body:JSON.stringify({KeyId:e,NumberOfBytes:t})},{}),n=v().request(this.method,r.url,r.body,{headers:r.headers});return this._handle_error(Te.GenerateDataKey,n),Ce.fromJSON(n.json())}},{key:"_handle_error",value:function(e,t){var r=t.error_code;if(0!==r){var n=t.json();if(r>=1400&&r<=1499){var o=n.Message||n.message||n.__type;if("InvalidSignatureException"===n.__type)throw new le(o,n.__type);throw new Ke(o,n.__type,e)}if(1500===r)throw new Ke("An error occured on the server side","InternalServiceError",e)}}}]),r}(S),Ee=function(){function e(t,r){ve(this,e),_e(this,"keyArn",void 0),_e(this,"keyId",void 0),this.keyArn=t,this.keyId=r}return ge(e,null,[{key:"fromJSON",value:function(t){return new e(t.KeyArn,t.KeyId)}}]),e}(),Ce=function(){function e(t,r,n){ve(this,e),_e(this,"id",void 0),_e(this,"ciphertextBlob",void 0),_e(this,"plaintext",void 0),this.ciphertextBlob=t,this.id=r,this.plaintext=n}return ge(e,null,[{key:"fromJSON",value:function(t){return new e(t.CiphertextBlob,t.KeyId,t.Plaintext)}}]),e}(),Ke=function(e){we(r,e);var t=Se(r);function r(e,n,o){var i;return ve(this,r),_e(je(i=t.call(this,e,n)),"operation",void 0),i.name="KMSServiceError",i.operation=o,i}return ge(r)}(G),Te=function(e){return e.GenerateDataKey="GenerateDataKey",e.ListKeys="ListKeys",e}(Te||{}),xe=function(e){return e[e.Size256=32]="Size256",e[e.Size512=64]="Size512",e}(xe||{}),Ie=exports;for(var De in t)Ie[De]=t[De];t.__esModule&&Object.defineProperty(Ie,"__esModule",{value:!0})})();
//# sourceMappingURL=kms.js.map