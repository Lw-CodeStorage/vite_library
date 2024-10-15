(function(q,ee){typeof exports=="object"&&typeof module<"u"?ee(exports):typeof define=="function"&&define.amd?define(["exports"],ee):(q=typeof globalThis<"u"?globalThis:q||self,ee(q.Test={}))})(this,function(q){"use strict";var ee={};/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const $=ee.NODE_ENV!=="production"?Object.freeze({}):{},wn=ee.NODE_ENV!=="production"?Object.freeze([]):[],oe=()=>{},Sn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),V=Object.assign,On=Object.prototype.hasOwnProperty,w=(e,t)=>On.call(e,t),E=Array.isArray,Y=e=>me(e)==="[object Map]",bt=e=>me(e)==="[object Set]",O=e=>typeof e=="function",P=e=>typeof e=="string",G=e=>typeof e=="symbol",x=e=>e!==null&&typeof e=="object",xn=e=>(x(e)||O(e))&&O(e.then)&&O(e.catch),Nt=Object.prototype.toString,me=e=>Nt.call(e),wt=e=>me(e).slice(8,-1),St=e=>me(e)==="[object Object]",ze=e=>P(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ot=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vn=/-(\w)/g,Ee=Ot(e=>e.replace(vn,(t,n)=>n?n.toUpperCase():"")),be=Ot(e=>e.charAt(0).toUpperCase()+e.slice(1)),z=(e,t)=>!Object.is(e,t),yn=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})};let xt;const Ne=()=>xt||(xt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Le(e){if(E(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=P(s)?Vn(s):Le(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(P(e)||x(e))return e}const Dn=/;(?![^(]*\))/g,Rn=/:([^]+)/,Cn=/\/\*[^]*?\*\//g;function Vn(e){const t={};return e.replace(Cn,"").split(Dn).forEach(n=>{if(n){const s=n.split(Rn);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Be(e){let t="";if(P(e))t=e;else if(E(e))for(let n=0;n<e.length;n++){const s=Be(e[n]);s&&(t+=s+" ")}else if(x(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const vt=e=>!!(e&&e.__v_isRef===!0),Ue=e=>P(e)?e:e==null?"":E(e)||x(e)&&(e.toString===Nt||!O(e.toString))?vt(e)?Ue(e.value):JSON.stringify(e,yt,2):String(e),yt=(e,t)=>vt(t)?yt(e,t.value):Y(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Je(s,i)+" =>"]=r,n),{})}:bt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Je(n))}:G(t)?Je(t):x(t)&&!E(t)&&!St(t)?String(t):t,Je=(e,t="")=>{var n;return G(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};var b={};function L(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let m;const qe=new WeakSet;class Tn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qe.has(this)&&(qe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||In(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tt(this),Rt(this);const t=m,n=F;m=this,F=!0;try{return this.fn()}finally{b.NODE_ENV!=="production"&&m!==this&&L("Active effect was not restored correctly - this is likely a Vue internal bug."),Ct(this),m=t,F=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xe(t);this.deps=this.depsTail=void 0,Tt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qe(this)&&this.run()}get dirty(){return Qe(this)}}let Dt=0,ce,le;function In(e,t=!1){if(e.flags|=8,t){e.next=le,le=e;return}e.next=ce,ce=e}function Ye(){Dt++}function Ge(){if(--Dt>0)return;if(le){let t=le;for(le=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ce;){let t=ce;for(ce=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Rt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ct(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Xe(s),Pn(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Qe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&($n(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function $n(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Oe))return;e.globalVersion=Oe;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Qe(e)){e.flags&=-3;return}const n=m,s=F;m=e,F=!0;try{Rt(e);const r=e.fn(e._value);(t.version===0||z(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{m=n,F=s,Ct(e),e.flags&=-3}}function Xe(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),b.NODE_ENV!=="production"&&n.subsHead===e&&(n.subsHead=r),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xe(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pn(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let F=!0;const Vt=[];function we(){Vt.push(F),F=!1}function Se(){const e=Vt.pop();F=e===void 0?!0:e}function Tt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=m;m=void 0;try{t()}finally{m=n}}}let Oe=0;class Mn{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class It{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,b.NODE_ENV!=="production"&&(this.subsHead=void 0)}track(t){if(!m||!F||m===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==m)n=this.activeLink=new Mn(m,this),m.deps?(n.prevDep=m.depsTail,m.depsTail.nextDep=n,m.depsTail=n):m.deps=m.depsTail=n,$t(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=m.depsTail,n.nextDep=void 0,m.depsTail.nextDep=n,m.depsTail=n,m.deps===n&&(m.deps=s)}return b.NODE_ENV!=="production"&&m.onTrack&&m.onTrack(V({effect:m},t)),n}trigger(t){this.version++,Oe++,this.notify(t)}notify(t){Ye();try{if(b.NODE_ENV!=="production")for(let n=this.subsHead;n;n=n.nextSub)n.sub.onTrigger&&!(n.sub.flags&8)&&n.sub.onTrigger(V({effect:n.sub},t));for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ge()}}}function $t(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)$t(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),b.NODE_ENV!=="production"&&e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}const Ze=new WeakMap,Q=Symbol(b.NODE_ENV!=="production"?"Object iterate":""),ke=Symbol(b.NODE_ENV!=="production"?"Map keys iterate":""),ae=Symbol(b.NODE_ENV!=="production"?"Array iterate":"");function v(e,t,n){if(F&&m){let s=Ze.get(e);s||Ze.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new It),r.map=s,r.key=n),b.NODE_ENV!=="production"?r.track({target:e,type:t,key:n}):r.track()}}function B(e,t,n,s,r,i){const o=Ze.get(e);if(!o){Oe++;return}const c=a=>{a&&(b.NODE_ENV!=="production"?a.trigger({target:e,type:t,key:n,newValue:s,oldValue:r,oldTarget:i}):a.trigger())};if(Ye(),t==="clear")o.forEach(c);else{const a=E(e),f=a&&ze(n);if(a&&n==="length"){const d=Number(s);o.forEach((l,u)=>{(u==="length"||u===ae||!G(u)&&u>=d)&&c(l)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),f&&c(o.get(ae)),t){case"add":a?f&&c(o.get("length")):(c(o.get(Q)),Y(e)&&c(o.get(ke)));break;case"delete":a||(c(o.get(Q)),Y(e)&&c(o.get(ke)));break;case"set":Y(e)&&c(o.get(Q));break}}Ge()}function te(e){const t=_(e);return t===e?t:(v(t,"iterate",ae),C(e)?t:t.map(y))}function et(e){return v(e=_(e),"iterate",ae),e}const An={__proto__:null,[Symbol.iterator](){return tt(this,Symbol.iterator,y)},concat(...e){return te(this).concat(...e.map(t=>E(t)?te(t):t))},entries(){return tt(this,"entries",e=>(e[1]=y(e[1]),e))},every(e,t){return H(this,"every",e,t,void 0,arguments)},filter(e,t){return H(this,"filter",e,t,n=>n.map(y),arguments)},find(e,t){return H(this,"find",e,t,y,arguments)},findIndex(e,t){return H(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return H(this,"findLast",e,t,y,arguments)},findLastIndex(e,t){return H(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return H(this,"forEach",e,t,void 0,arguments)},includes(...e){return nt(this,"includes",e)},indexOf(...e){return nt(this,"indexOf",e)},join(e){return te(this).join(e)},lastIndexOf(...e){return nt(this,"lastIndexOf",e)},map(e,t){return H(this,"map",e,t,void 0,arguments)},pop(){return ue(this,"pop")},push(...e){return ue(this,"push",e)},reduce(e,...t){return Pt(this,"reduce",e,t)},reduceRight(e,...t){return Pt(this,"reduceRight",e,t)},shift(){return ue(this,"shift")},some(e,t){return H(this,"some",e,t,void 0,arguments)},splice(...e){return ue(this,"splice",e)},toReversed(){return te(this).toReversed()},toSorted(e){return te(this).toSorted(e)},toSpliced(...e){return te(this).toSpliced(...e)},unshift(...e){return ue(this,"unshift",e)},values(){return tt(this,"values",y)}};function tt(e,t,n){const s=et(e),r=s[t]();return s!==e&&!C(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Fn=Array.prototype;function H(e,t,n,s,r,i){const o=et(e),c=o!==e&&!C(e),a=o[t];if(a!==Fn[t]){const l=a.apply(e,i);return c?y(l):l}let f=n;o!==e&&(c?f=function(l,u){return n.call(this,y(l),u,e)}:n.length>2&&(f=function(l,u){return n.call(this,l,u,e)}));const d=a.call(o,f,s);return c&&r?r(d):d}function Pt(e,t,n,s){const r=et(e);let i=n;return r!==e&&(C(e)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,e)}):i=function(o,c,a){return n.call(this,o,y(c),a,e)}),r[t](i,...s)}function nt(e,t,n){const s=_(e);v(s,"iterate",ae);const r=s[t](...n);return(r===-1||r===!1)&&De(n[0])?(n[0]=_(n[0]),s[t](...n)):r}function ue(e,t,n=[]){we(),Ye();const s=_(e)[t].apply(e,n);return Ge(),Se(),s}const jn=Nn("__proto__,__v_isRef,__isVue"),Mt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(G));function Hn(e){G(e)||(e=String(e));const t=_(this);return v(t,"has",e),t.hasOwnProperty(e)}class At{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Kt:Wt:i?Gn:Ht).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=E(t);if(!r){let a;if(o&&(a=An[n]))return a;if(n==="hasOwnProperty")return Hn}const c=Reflect.get(t,n,D(t)?t:s);return(G(n)?Mt.has(n):jn(n))||(r||v(t,"get",n),i)?c:D(c)?o&&ze(n)?c:c.value:x(c)?r?Lt(c):zt(c):c}}class Wn extends At{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const a=W(i);if(!C(s)&&!W(s)&&(i=_(i),s=_(s)),!E(t)&&D(i)&&!D(s))return a?!1:(i.value=s,!0)}const o=E(t)&&ze(n)?Number(n)<t.length:w(t,n),c=Reflect.set(t,n,s,D(t)?t:r);return t===_(r)&&(o?z(s,i)&&B(t,"set",n,s,i):B(t,"add",n,s)),c}deleteProperty(t,n){const s=w(t,n),r=t[n],i=Reflect.deleteProperty(t,n);return i&&s&&B(t,"delete",n,void 0,r),i}has(t,n){const s=Reflect.has(t,n);return(!G(n)||!Mt.has(n))&&v(t,"has",n),s}ownKeys(t){return v(t,"iterate",E(t)?"length":Q),Reflect.ownKeys(t)}}class Ft extends At{constructor(t=!1){super(!0,t)}set(t,n){return b.NODE_ENV!=="production"&&L(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0}deleteProperty(t,n){return b.NODE_ENV!=="production"&&L(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}}const Kn=new Wn,zn=new Ft,Ln=new Ft(!0),rt=e=>e,xe=e=>Reflect.getPrototypeOf(e);function Bn(e,t,n){return function(...s){const r=this.__v_raw,i=_(r),o=Y(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,f=r[e](...s),d=n?rt:t?ot:y;return!t&&v(i,"iterate",a?ke:Q),{next(){const{value:l,done:u}=f.next();return u?{value:l,done:u}:{value:c?[d(l[0]),d(l[1])]:d(l),done:u}},[Symbol.iterator](){return this}}}}function ve(e){return function(...t){if(b.NODE_ENV!=="production"){const n=t[0]?`on key "${t[0]}" `:"";L(`${be(e)} operation ${n}failed: target is readonly.`,_(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function Un(e,t){const n={get(r){const i=this.__v_raw,o=_(i),c=_(r);e||(z(r,c)&&v(o,"get",r),v(o,"get",c));const{has:a}=xe(o),f=t?rt:e?ot:y;if(a.call(o,r))return f(i.get(r));if(a.call(o,c))return f(i.get(c));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&v(_(r),"iterate",Q),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=_(i),c=_(r);return e||(z(r,c)&&v(o,"has",r),v(o,"has",c)),r===c?i.has(r):i.has(r)||i.has(c)},forEach(r,i){const o=this,c=o.__v_raw,a=_(c),f=t?rt:e?ot:y;return!e&&v(a,"iterate",Q),c.forEach((d,l)=>r.call(i,f(d),f(l),o))}};return V(n,e?{add:ve("add"),set:ve("set"),delete:ve("delete"),clear:ve("clear")}:{add(r){!t&&!C(r)&&!W(r)&&(r=_(r));const i=_(this);return xe(i).has.call(i,r)||(i.add(r),B(i,"add",r,r)),this},set(r,i){!t&&!C(i)&&!W(i)&&(i=_(i));const o=_(this),{has:c,get:a}=xe(o);let f=c.call(o,r);f?b.NODE_ENV!=="production"&&jt(o,c,r):(r=_(r),f=c.call(o,r));const d=a.call(o,r);return o.set(r,i),f?z(i,d)&&B(o,"set",r,i,d):B(o,"add",r,i),this},delete(r){const i=_(this),{has:o,get:c}=xe(i);let a=o.call(i,r);a?b.NODE_ENV!=="production"&&jt(i,o,r):(r=_(r),a=o.call(i,r));const f=c?c.call(i,r):void 0,d=i.delete(r);return a&&B(i,"delete",r,void 0,f),d},clear(){const r=_(this),i=r.size!==0,o=b.NODE_ENV!=="production"?Y(r)?new Map(r):new Set(r):void 0,c=r.clear();return i&&B(r,"clear",void 0,void 0,o),c}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Bn(r,e,t)}),n}function st(e,t){const n=Un(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(w(n,r)&&r in s?n:s,r,i)}const Jn={get:st(!1,!1)},qn={get:st(!0,!1)},Yn={get:st(!0,!0)};function jt(e,t,n){const s=_(n);if(s!==n&&t.call(e,s)){const r=wt(e);L(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ht=new WeakMap,Gn=new WeakMap,Wt=new WeakMap,Kt=new WeakMap;function Qn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xn(e){return e.__v_skip||!Object.isExtensible(e)?0:Qn(wt(e))}function zt(e){return W(e)?e:it(e,!1,Kn,Jn,Ht)}function Lt(e){return it(e,!0,zn,qn,Wt)}function ye(e){return it(e,!0,Ln,Yn,Kt)}function it(e,t,n,s,r){if(!x(e))return b.NODE_ENV!=="production"&&L(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Xn(e);if(o===0)return e;const c=new Proxy(e,o===2?s:n);return r.set(e,c),c}function ne(e){return W(e)?ne(e.__v_raw):!!(e&&e.__v_isReactive)}function W(e){return!!(e&&e.__v_isReadonly)}function C(e){return!!(e&&e.__v_isShallow)}function De(e){return e?!!e.__v_raw:!1}function _(e){const t=e&&e.__v_raw;return t?_(t):e}function Zn(e){return!w(e,"__v_skip")&&Object.isExtensible(e)&&yn(e,"__v_skip",!0),e}const y=e=>x(e)?zt(e):e,ot=e=>x(e)?Lt(e):e;function D(e){return e?e.__v_isRef===!0:!1}function Bt(e){return kn(e,!1)}function kn(e,t){return D(e)?e:new er(e,t)}class er{constructor(t,n){this.dep=new It,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:_(t),this._value=n?t:y(t),this.__v_isShallow=n}get value(){return b.NODE_ENV!=="production"?this.dep.track({target:this,type:"get",key:"value"}):this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||C(t)||W(t);t=s?t:_(t),z(t,n)&&(this._rawValue=t,this._value=s?t:y(t),b.NODE_ENV!=="production"?this.dep.trigger({target:this,type:"set",key:"value",newValue:t,oldValue:n}):this.dep.trigger())}}function tr(e){return D(e)?e.value:e}const nr={get:(e,t,n)=>t==="__v_raw"?e:tr(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return D(r)&&!D(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function rr(e){return ne(e)?e:new Proxy(e,nr)}const Re={},Ce=new WeakMap;let X;function sr(e,t=!1,n=X){if(n){let s=Ce.get(n);s||Ce.set(n,s=[]),s.push(e)}else b.NODE_ENV!=="production"&&!t&&L("onWatcherCleanup() was called when there was no active watcher to associate with.")}function ir(e,t,n=$){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:c,call:a}=n,f=g=>{(n.onWarn||L)("Invalid watch source: ",g,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},d=g=>r?g:C(g)||r===!1||r===0?U(g,1):U(g);let l,u,p,S,A=!1,We=!1;if(D(e)?(u=()=>e.value,A=C(e)):ne(e)?(u=()=>d(e),A=!0):E(e)?(We=!0,A=e.some(g=>ne(g)||C(g)),u=()=>e.map(g=>{if(D(g))return g.value;if(ne(g))return d(g);if(O(g))return a?a(g,2):g();b.NODE_ENV!=="production"&&f(g)})):O(e)?t?u=a?()=>a(e,2):e:u=()=>{if(p){we();try{p()}finally{Se()}}const g=X;X=l;try{return a?a(e,3,[S]):e(S)}finally{X=g}}:(u=oe,b.NODE_ENV!=="production"&&f(e)),t&&r){const g=u,j=r===!0?1/0:r;u=()=>U(g(),j)}const ie=()=>{l.stop()};if(i&&t){const g=t;t=(...j)=>{g(...j),ie()}}let k=We?new Array(e.length).fill(Re):Re;const ge=g=>{if(!(!(l.flags&1)||!l.dirty&&!g))if(t){const j=l.run();if(r||A||(We?j.some((Et,Ke)=>z(Et,k[Ke])):z(j,k))){p&&p();const Et=X;X=l;try{const Ke=[j,k===Re?void 0:We&&k[0]===Re?[]:k,S];a?a(t,3,Ke):t(...Ke),k=j}finally{X=Et}}}else l.run()};return c&&c(ge),l=new Tn(u),l.scheduler=o?()=>o(ge,!1):ge,S=g=>sr(g,!1,l),p=l.onStop=()=>{const g=Ce.get(l);if(g){if(a)a(g,4);else for(const j of g)j();Ce.delete(l)}},b.NODE_ENV!=="production"&&(l.onTrack=n.onTrack,l.onTrigger=n.onTrigger),t?s?ge(!0):k=l.run():o?o(ge.bind(null,!0),!0):l.run(),ie.pause=l.pause.bind(l),ie.resume=l.resume.bind(l),ie.stop=ie,ie}function U(e,t=1/0,n){if(t<=0||!x(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,D(e))U(e.value,t,n);else if(E(e))for(let s=0;s<e.length;s++)U(e[s],t,n);else if(bt(e)||Y(e))e.forEach(s=>{U(s,t,n)});else if(St(e)){for(const s in e)U(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&U(e[s],t,n)}return e}var h={};const Z=[];function or(e){Z.push(e)}function cr(){Z.pop()}let ct=!1;function N(e,...t){if(ct)return;ct=!0,we();const n=Z.length?Z[Z.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=lr();if(s)Ve(s,n,11,[e+t.map(i=>{var o,c;return(c=(o=i.toString)==null?void 0:o.call(i))!=null?c:JSON.stringify(i)}).join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${En(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${e}`,...t];r.length&&i.push(`
`,...ar(r)),console.warn(...i)}Se(),ct=!1}function lr(){let e=Z[Z.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function ar(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...ur(n))}),t}function ur({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${En(e.component,e.type,s)}`,i=">"+n;return e.props?[r,...fr(e.props),i]:[r+i]}function fr(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...Ut(s,e[s]))}),n.length>3&&t.push(" ..."),t}function Ut(e,t,n){return P(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:D(t)?(t=Ut(e,_(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):O(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=_(t),n?t:[`${e}=`,t])}const Jt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Ve(e,t,n,s){try{return s?e(...s):e()}catch(r){lt(r,t,n)}}function qt(e,t,n,s){if(O(e)){const r=Ve(e,t,n,s);return r&&xn(r)&&r.catch(i=>{lt(i,t,n)}),r}if(E(e)){const r=[];for(let i=0;i<e.length;i++)r.push(qt(e[i],t,n,s));return r}else h.NODE_ENV!=="production"&&N(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`)}function lt(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||$;if(t){let c=t.parent;const a=t.proxy,f=h.NODE_ENV!=="production"?Jt[n]:`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let l=0;l<d.length;l++)if(d[l](e,a,f)===!1)return}c=c.parent}if(i){we(),Ve(i,null,10,[e,a,f]),Se();return}}pr(e,n,r,s,o)}function pr(e,t,n,s=!0,r=!1){if(h.NODE_ENV!=="production"){const i=Jt[t];if(n&&or(n),N(`Unhandled error${i?` during execution of ${i}`:""}`),n&&cr(),s)throw e;console.error(e)}else{if(r)throw e;console.error(e)}}const M=[];let K=-1;const re=[];let J=null,se=0;const Yt=Promise.resolve();let Te=null;const dr=100;function hr(e){const t=Te||Yt;return e?t.then(this?e.bind(this):e):t}function _r(e){let t=K+1,n=M.length;for(;t<n;){const s=t+n>>>1,r=M[s],i=fe(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function at(e){if(!(e.flags&1)){const t=fe(e),n=M[M.length-1];!n||!(e.flags&2)&&t>=fe(n)?M.push(e):M.splice(_r(t),0,e),e.flags|=1,Gt()}}function Gt(){Te||(Te=Yt.then(Xt))}function Qt(e){E(e)?re.push(...e):J&&e.id===-1?J.splice(se+1,0,e):e.flags&1||(re.push(e),e.flags|=1),Gt()}function gr(e){if(re.length){const t=[...new Set(re)].sort((n,s)=>fe(n)-fe(s));if(re.length=0,J){J.push(...t);return}for(J=t,h.NODE_ENV!=="production"&&(e=e||new Map),se=0;se<J.length;se++){const n=J[se];h.NODE_ENV!=="production"&&Zt(e,n)||(n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2)}J=null,se=0}}const fe=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Xt(e){h.NODE_ENV!=="production"&&(e=e||new Map);const t=h.NODE_ENV!=="production"?n=>Zt(e,n):oe;try{for(K=0;K<M.length;K++){const n=M[K];if(n&&!(n.flags&8)){if(h.NODE_ENV!=="production"&&t(n))continue;n.flags&4&&(n.flags&=-2),Ve(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2)}}}finally{for(;K<M.length;K++){const n=M[K];n&&(n.flags&=-2)}K=-1,M.length=0,gr(e),Te=null,(M.length||re.length)&&Xt(e)}}function Zt(e,t){const n=e.get(t)||0;if(n>dr){const s=t.i,r=s&&mt(s.type);return lt(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}return e.set(t,n+1),!1}const ut=new Map;h.NODE_ENV!=="production"&&(Ne().__VUE_HMR_RUNTIME__={createRecord:ft(mr),rerender:ft(Er),reload:ft(br)});const Ie=new Map;function mr(e,t){return Ie.has(e)?!1:(Ie.set(e,{initialDef:$e(t),instances:new Set}),!0)}function $e(e){return bn(e)?e.__vccOpts:e}function Er(e,t){const n=Ie.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,$e(s.type).render=t),s.renderCache=[],s.update()}))}function br(e,t){const n=Ie.get(e);if(!n)return;t=$e(t),kt(n.initialDef,t);const s=[...n.instances];for(let r=0;r<s.length;r++){const i=s[r],o=$e(i.type);let c=ut.get(o);c||(o!==n.initialDef&&kt(o,t),ut.set(o,c=new Set)),c.add(i),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(c.add(i),i.ceReload(t.styles),c.delete(i)):i.parent?at(()=>{i.parent.update(),c.delete(i)}):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required."),i.root.ce&&i!==i.root&&i.root.ce._removeChildStyle(o)}Qt(()=>{ut.clear()})}function kt(e,t){V(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function ft(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}function Nr(e,...t){}const wr=Sr("component:updated");/*! #__NO_SIDE_EFFECTS__ */function Sr(e){return t=>{Nr(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}let T=null,en=null;function tn(e){const t=T;return T=e,en=e&&e.type.__scopeId||null,t}function Or(e,t=T,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&pn(-1);const i=tn(t);let o;try{o=e(...r)}finally{tn(i),s._d&&pn(1)}return h.NODE_ENV!=="production"&&wr(t),o};return s._n=!0,s._c=!0,s._d=!0,s}const xr=e=>e.__isTeleport;function nn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,nn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}Ne().requestIdleCallback,Ne().cancelIdleCallback;const vr="components";function yr(e,t){return Rr(vr,e,!0,t)||e}const Dr=Symbol.for("v-ndc");function Rr(e,t,n=!0,s=!1){const r=T||_e;if(r){const i=r.type;{const c=mt(i,!1);if(c&&(c===t||c===Ee(t)||c===be(Ee(t))))return i}const o=rn(r[e]||i[e],t)||rn(r.appContext[e],t);return!o&&s?i:(h.NODE_ENV!=="production"&&n&&!o&&N(`Failed to resolve ${e.slice(0,-1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`),o)}else h.NODE_ENV!=="production"&&N(`resolve${be(e.slice(0,-1))} can only be used in render() or setup().`)}function rn(e,t){return e&&(e[t]||e[Ee(t)]||e[be(Ee(t))])}const pt=e=>e?ts(e)?ns(e):pt(e.parent):null,pe=V(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>h.NODE_ENV!=="production"?ye(e.props):e.props,$attrs:e=>h.NODE_ENV!=="production"?ye(e.attrs):e.attrs,$slots:e=>h.NODE_ENV!=="production"?ye(e.slots):e.slots,$refs:e=>h.NODE_ENV!=="production"?ye(e.refs):e.refs,$parent:e=>pt(e.parent),$root:e=>pt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Tr(e),$forceUpdate:e=>e.f||(e.f=()=>{at(e.update)}),$nextTick:e=>e.n||(e.n=hr.bind(e.proxy)),$watch:e=>zr.bind(e)}),Cr=e=>e==="_"||e==="$",dt=(e,t)=>e!==$&&!e.__isScriptSetup&&w(e,t),Vr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:c,appContext:a}=e;if(h.NODE_ENV!=="production"&&t==="__isVue")return!0;let f;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(dt(s,t))return o[t]=1,s[t];if(r!==$&&w(r,t))return o[t]=2,r[t];if((f=e.propsOptions[0])&&w(f,t))return o[t]=3,i[t];if(n!==$&&w(n,t))return o[t]=4,n[t];o[t]=0}}const d=pe[t];let l,u;if(d)return t==="$attrs"?v(e.attrs,"get",""):h.NODE_ENV!=="production"&&t==="$slots"&&v(e,"get",t),d(e);if((l=c.__cssModules)&&(l=l[t]))return l;if(n!==$&&w(n,t))return o[t]=4,n[t];if(u=a.config.globalProperties,w(u,t))return u[t];h.NODE_ENV!=="production"&&T&&(!P(t)||t.indexOf("__v")!==0)&&(r!==$&&Cr(t[0])&&w(r,t)?N(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===T&&N(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return dt(r,t)?(r[t]=n,!0):h.NODE_ENV!=="production"&&r.__isScriptSetup&&w(r,t)?(N(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==$&&w(s,t)?(s[t]=n,!0):w(e.props,t)?(h.NODE_ENV!=="production"&&N(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(h.NODE_ENV!=="production"&&N(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(h.NODE_ENV!=="production"&&t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:n}):i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let c;return!!n[o]||e!==$&&w(e,o)||dt(t,o)||(c=i[0])&&w(c,o)||w(s,o)||w(pe,o)||w(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:w(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};h.NODE_ENV!=="production"&&(Vr.ownKeys=e=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));function sn(e){return E(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Tr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(f=>Pe(a,f,o,!0)),Pe(a,t,o)),x(t)&&i.set(t,a),a}function Pe(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Pe(e,i,n,!0),r&&r.forEach(o=>Pe(e,o,n,!0));for(const o in t)if(s&&o==="expose")h.NODE_ENV!=="production"&&N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Ir[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const Ir={data:on,props:ln,emits:ln,methods:de,computed:de,beforeCreate:R,created:R,beforeMount:R,mounted:R,beforeUpdate:R,updated:R,beforeDestroy:R,beforeUnmount:R,destroyed:R,unmounted:R,activated:R,deactivated:R,errorCaptured:R,serverPrefetch:R,components:de,directives:de,watch:Pr,provide:on,inject:$r};function on(e,t){return t?e?function(){return V(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function $r(e,t){return de(cn(e),cn(t))}function cn(e){if(E(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function R(e,t){return e?[...new Set([].concat(e,t))]:t}function de(e,t){return e?V(Object.create(null),e,t):t}function ln(e,t){return e?E(e)&&E(t)?[...new Set([...e,...t])]:V(Object.create(null),sn(e),sn(t??{})):t}function Pr(e,t){if(!e)return t;if(!t)return e;const n=V(Object.create(null),e);for(const s in t)n[s]=R(e[s],t[s]);return n}let Mr=null;function Ar(e,t,n=!1){const s=_e||T;if(s||Mr){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&O(t)?t.call(s&&s.proxy):t;h.NODE_ENV!=="production"&&N(`injection "${String(e)}" not found.`)}else h.NODE_ENV!=="production"&&N("inject() can only be used inside setup() or functional components.")}const Fr={},an=e=>Object.getPrototypeOf(e)===Fr,jr=Ur,Hr=Symbol.for("v-scx"),Wr=()=>{{const e=Ar(Hr);return e||h.NODE_ENV!=="production"&&N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Kr(e,t,n=$){const{immediate:s,deep:r,flush:i,once:o}=n;h.NODE_ENV!=="production"&&!t&&(s!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&N('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const c=V({},n);h.NODE_ENV!=="production"&&(c.onWarn=N);const a=t&&s||!t&&i!=="post";let f;if(gt){if(i==="sync"){const p=Wr();f=p.__watcherHandles||(p.__watcherHandles=[])}else if(!a){const p=()=>{};return p.stop=oe,p.resume=oe,p.pause=oe,p}}const d=_e;c.call=(p,S,A)=>qt(p,d,S,A);let l=!1;i==="post"?c.scheduler=p=>{jr(p,d&&d.suspense)}:i!=="sync"&&(l=!0,c.scheduler=(p,S)=>{S?p():at(p)}),c.augmentJob=p=>{t&&(p.flags|=4),l&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const u=ir(e,t,c);return gt&&(f?f.push(u):a&&u()),u}function zr(e,t,n){const s=this.proxy,r=P(e)?e.includes(".")?Lr(s,e):()=>s[e]:e.bind(s,s);let i;O(t)?i=t:(i=t.handler,n=t);const o=es(this),c=Kr(r,i.bind(s),n);return o(),c}function Lr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Br=e=>e.__isSuspense;function Ur(e,t){t&&t.pendingBranch?E(e)?t.effects.push(...e):t.effects.push(e):Qt(e)}const un=Symbol.for("v-fgt"),Jr=Symbol.for("v-txt"),qr=Symbol.for("v-cmt"),Me=[];let I=null;function fn(e=!1){Me.push(I=e?null:[])}function Yr(){Me.pop(),I=Me[Me.length-1]||null}let he=1;function pn(e){he+=e,e<0&&I&&(I.hasOnce=!0)}function Gr(e){return e.dynamicChildren=he>0?I||wn:null,Yr(),he>0&&I&&I.push(e),e}function dn(e,t,n,s,r,i){return Gr(Fe(e,t,n,s,r,i,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}const Xr=(...e)=>gn(...e),hn=({key:e})=>e??null,Ae=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?P(e)||D(e)||O(e)?{i:T,r:e,k:t,f:!!n}:e:null);function Fe(e,t=null,n=null,s=0,r=null,i=e===un?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hn(t),ref:t&&Ae(t),scopeId:en,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:T};return c?(ht(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=P(n)?8:16),h.NODE_ENV!=="production"&&a.key!==a.key&&N("VNode created with invalid key (NaN). VNode type:",a.type),he>0&&!o&&I&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&I.push(a),a}const _n=h.NODE_ENV!=="production"?Xr:gn;function gn(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Dr)&&(h.NODE_ENV!=="production"&&!e&&N(`Invalid vnode type when creating vnode: ${e}.`),e=qr),Qr(e)){const c=je(e,t,!0);return n&&ht(c,n),he>0&&!i&&I&&(c.shapeFlag&6?I[I.indexOf(e)]=c:I.push(c)),c.patchFlag=-2,c}if(bn(e)&&(e=e.__vccOpts),t){t=Zr(t);let{class:c,style:a}=t;c&&!P(c)&&(t.class=Be(c)),x(a)&&(De(a)&&!E(a)&&(a=V({},a)),t.style=Le(a))}const o=P(e)?1:Br(e)?128:xr(e)?64:x(e)?4:O(e)?2:0;return h.NODE_ENV!=="production"&&o&4&&De(e)&&(e=_(e),N("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Fe(e,t,n,s,r,o,i,!0)}function Zr(e){return e?De(e)||an(e)?V({},e):e:null}function je(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:c,transition:a}=e,f=t?kr(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&hn(f),ref:t&&t.ref?n&&i?E(i)?i.concat(Ae(t)):[i,Ae(t)]:Ae(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:h.NODE_ENV!=="production"&&o===-1&&E(c)?c.map(mn):c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==un?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&je(e.ssContent),ssFallback:e.ssFallback&&je(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&nn(d,a.clone(d)),d}function mn(e){const t=je(e);return E(e.children)&&(t.children=e.children.map(mn)),t}function He(e=" ",t=0){return _n(Jr,null,e,t)}function ht(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(E(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ht(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!an(t)?t._ctx=T:r===3&&T&&(T.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:T},n=32):(t=String(t),s&64?(n=16,t=[He(t)]):n=8);e.children=t,e.shapeFlag|=n}function kr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Be([t.class,s.class]));else if(r==="style")t.style=Le([t.style,s.style]);else if(Sn(r)){const i=t[r],o=s[r];o&&i!==o&&!(E(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}let _e=null,_t;{const e=Ne(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};_t=t("__VUE_INSTANCE_SETTERS__",n=>_e=n),t("__VUE_SSR_SETTERS__",n=>gt=n)}const es=e=>{const t=_e;return _t(e),e.scope.on(),()=>{e.scope.off(),_t(t)}};function ts(e){return e.vnode.shapeFlag&4}let gt=!1;function ns(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(rr(Zn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pe)return pe[n](e)},has(t,n){return n in t||n in pe}})):e.proxy}const rs=/(?:^|[-_])(\w)/g,ss=e=>e.replace(rs,t=>t.toUpperCase()).replace(/[-_]/g,"");function mt(e,t=!0){return O(e)?e.displayName||e.name:e.name||t&&e.__name}function En(e,t,n=!1){let s=mt(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=i=>{for(const o in i)if(i[o]===t)return o};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?ss(s):n?"App":"Anonymous"}function bn(e){return O(e)&&"__vccOpts"in e}function is(){if(h.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#1677ff"},n={style:"color:#f5222d"},s={style:"color:#eb2f96"},r={__vue_custom_formatter:!0,header(l){return x(l)?l.__isVue?["div",e,"VueInstance"]:D(l)?["div",{},["span",e,d(l)],"<",c("_value"in l?l._value:l),">"]:ne(l)?["div",{},["span",e,C(l)?"ShallowReactive":"Reactive"],"<",c(l),`>${W(l)?" (readonly)":""}`]:W(l)?["div",{},["span",e,C(l)?"ShallowReadonly":"Readonly"],"<",c(l),">"]:null:null},hasBody(l){return l&&l.__isVue},body(l){if(l&&l.__isVue)return["div",{},...i(l.$)]}};function i(l){const u=[];l.type.props&&l.props&&u.push(o("props",_(l.props))),l.setupState!==$&&u.push(o("setup",l.setupState)),l.data!==$&&u.push(o("data",_(l.data)));const p=a(l,"computed");p&&u.push(o("computed",p));const S=a(l,"inject");return S&&u.push(o("injected",S)),u.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:l}]]),u}function o(l,u){return u=V({},u),Object.keys(u).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},l],["div",{style:"padding-left:1.25em"},...Object.keys(u).map(p=>["div",{},["span",s,p+": "],c(u[p],!1)])]]:["span",{}]}function c(l,u=!0){return typeof l=="number"?["span",t,l]:typeof l=="string"?["span",n,JSON.stringify(l)]:typeof l=="boolean"?["span",s,l]:x(l)?["object",{object:u?_(l):l}]:["span",n,String(l)]}function a(l,u){const p=l.type;if(O(p))return;const S={};for(const A in l.ctx)f(p,A,u)&&(S[A]=l.ctx[A]);return S}function f(l,u,p){const S=l[p];if(E(S)&&S.includes(u)||x(S)&&u in S||l.extends&&f(l.extends,u,p)||l.mixins&&l.mixins.some(A=>f(A,u,p)))return!0}function d(l){return C(l)?"ShallowRef":l.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}var os={};function cs(){is()}os.NODE_ENV!=="production"&&cs();const ls={__name:"A",setup(e){const t=Bt("A");return(n,s)=>{const r=yr("v-btn");return fn(),dn("main",null,[_n(r,{color:"red"},{default:Or(()=>s[0]||(s[0]=[He("123")])),_:1}),s[1]||(s[1]=Fe("h1",null,"A",-1)),He(" "+Ue(t.value),1)])}}},as={__name:"B",setup(e){const t=Bt("B");return(n,s)=>(fn(),dn("main",null,[s[0]||(s[0]=Fe("h1",null,"B",-1)),He(" "+Ue(t.value),1)]))}};q.A=ls,q.B=as,Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});
