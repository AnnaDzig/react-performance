(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function l(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(u){if(u.ep)return;u.ep=!0;const d=l(u);fetch(u.href,d)}})();var ed={exports:{}},al={};var Og;function $w(){if(Og)return al;Og=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(o,u,d){var h=null;if(d!==void 0&&(h=""+d),u.key!==void 0&&(h=""+u.key),"key"in u){d={};for(var p in u)p!=="key"&&(d[p]=u[p])}else d=u;return u=d.ref,{$$typeof:a,type:o,key:h,ref:u!==void 0?u:null,props:d}}return al.Fragment=r,al.jsx=l,al.jsxs=l,al}var Rg;function Qw(){return Rg||(Rg=1,ed.exports=$w()),ed.exports}var le=Qw();const Zw="0.3.34",af=`bippy-${Zw}`,Ug=Object.defineProperty,Iw=Object.prototype.hasOwnProperty,dl=()=>{},Kv=a=>{try{Function.prototype.toString.call(a).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},Wv=(a=oi())=>"getFiberRoots"in a;let Pv=!1,Hg;const zd=(a=oi())=>Pv?!0:(typeof a.inject=="function"&&(Hg=a.inject.toString()),!!Hg?.includes("(injected)")),os=new Set,Ad=new Set,Jw=a=>{const r=new Map;let l=0,o={_instrumentationIsActive:!1,_instrumentationSource:af,checkDCE:Kv,hasUnsupportedRendererAttached:!1,inject(u){const d=++l;return r.set(d,u),Ad.add(u),o._instrumentationIsActive||(o._instrumentationIsActive=!0,os.forEach(h=>h())),d},on:dl,onCommitFiberRoot:dl,onCommitFiberUnmount:dl,onPostCommitFiberRoot:dl,renderers:r,supportsFiber:!0,supportsFlight:!0};try{Ug(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return o},set(h){if(h&&typeof h=="object"){const p=o.renderers;o=h,p.size>0&&(p.forEach((m,v)=>{Ad.add(m),h.renderers.set(v,m)}),Md(a))}}});const u=window.hasOwnProperty;let d=!1;Ug(window,"hasOwnProperty",{configurable:!0,value:function(...h){try{if(!d&&h[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,d=!0,-0}catch{}return u.apply(this,h)},writable:!0})}catch{Md(a)}return o},Md=a=>{a&&os.add(a);try{const r=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!r)return;if(!r._instrumentationSource){const l=Wv();if(r.checkDCE=Kv,r.supportsFiber=!0,r.supportsFlight=!0,r.hasUnsupportedRendererAttached=!1,r._instrumentationSource=af,r._instrumentationIsActive=!1,l||(r.on=dl),r.renderers.size){r._instrumentationIsActive=!0,os.forEach(u=>u());return}const o=r.inject;zd(r)&&!l&&(Pv=!0,r.inject({scheduleRefresh(){}})&&(r._instrumentationIsActive=!0)),r.inject=u=>{const d=o(u);return Ad.add(u),r._instrumentationIsActive=!0,os.forEach(h=>h()),d}}(r.renderers.size||r._instrumentationIsActive||zd())&&a?.()}catch{}},Kw=()=>Iw.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),oi=a=>Kw()?(Md(a),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):Jw(a),Ww=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),Pw=()=>{try{Ww()&&oi()}catch{}},Ns=0,lr=1,e0=3,e1=5,t1=6,n1=7,a1=9,zs=11,As=13,El=14,Nl=15,r1=18,i1=22,l1=23,o1=26,s1=27,c1=60111,u1="Symbol(react.concurrent_mode)",d1="Symbol(react.async_mode)",jg=1,f1=2,h1=4096,p1=4,Lg=8,m1=16,g1=32,v1=1024,y1=8192,Bg=f1|p1|m1|g1|h1|y1|v1,vl=a=>{switch(a.tag){case e1:case o1:case s1:return!0;default:return typeof a.type=="string"}},Ms=a=>{switch(a.tag){case lr:case zs:case Ns:case El:case Nl:return!0;default:return!1}},b1=(a,r)=>{try{const l=a.dependencies,o=a.alternate?.dependencies;if(!l||!o||typeof l!="object"||!("firstContext"in l)||typeof o!="object"||!("firstContext"in o))return!1;let u=l.firstContext,d=o.firstContext;for(;u&&typeof u=="object"&&"memoizedValue"in u||d&&typeof d=="object"&&"memoizedValue"in d;){if(r(u,d)===!0)return!0;u=u?.next,d=d?.next}}catch{}return!1},rf=a=>{const r=a.memoizedProps,l=a.alternate?.memoizedProps||{},o=a.flags??a.effectTag??0;switch(a.tag){case lr:case a1:case zs:case Ns:case El:case Nl:return(o&jg)===jg;default:return a.alternate?l!==r||a.alternate.memoizedState!==a.memoizedState||a.alternate.ref!==a.ref:!0}},lf=a=>(a.flags&(Bg|Lg))!==0||(a.subtreeFlags&(Bg|Lg))!==0,w1=a=>{const r=[],l=[a];for(;l.length;){const o=l.pop();o&&(vl(o)&&lf(o)&&rf(o)&&r.push(o),o.child&&l.push(o.child),o.sibling&&l.push(o.sibling))}return r},of=a=>{switch(a.tag){case r1:return!0;case n1:case t1:case l1:case i1:return!0;case e0:return!1;default:{const r=typeof a.type=="object"&&a.type!==null?a.type.$$typeof:a.type;switch(typeof r=="symbol"?r.toString():r){case c1:case u1:case d1:return!0;default:return!1}}}},x1=a=>{const r=[],l=[];for(vl(a)?r.push(a):a.child&&l.push(a.child);l.length;){const o=l.pop();if(!o)break;vl(o)?r.push(o):o.child&&l.push(o.child),o.sibling&&l.push(o.sibling)}return r};function t0(a,r,l=!1){return a&&r(a)instanceof Promise?a0(a,r,l):n0(a,r,l)}const n0=(a,r,l=!1)=>{if(!a)return null;if(r(a)===!0)return a;let o=l?a.return:a.child;for(;o;){const u=n0(o,r,l);if(u)return u;o=l?null:o.sibling}return null},a0=async(a,r,l=!1)=>{if(!a)return null;if(await r(a)===!0)return a;let o=l?a.return:a.child;for(;o;){const u=await a0(o,r,l);if(u)return u;o=l?null:o.sibling}return null},er=a=>{const r=a?.actualDuration??0;let l=r,o=a?.child??null;for(;r>0&&o!=null;)l-=o.actualDuration??0,o=o.sibling;return{selfTime:l,totalTime:r}},yl=a=>!!a.updateQueue?.memoCache,or=a=>{const r=a;return typeof r=="function"?r:typeof r=="object"&&r?or(r.type||r.render):null},bt=a=>{const r=a;if(typeof r=="string")return r;if(typeof r!="function"&&!(typeof r=="object"&&r))return null;const l=r.displayName||r.name||null;if(l)return l;const o=or(r);return o&&(o.displayName||o.name)||null},_1=a=>{try{if(typeof a.version=="string"&&a.bundleType>0)return"development"}catch{}return"production"},S1=()=>!!oi()._instrumentationIsActive||Wv()||zd();let r0=0;const ii=new WeakMap,T1=(a,r=r0++)=>{ii.set(a,r)},za=a=>{let r=ii.get(a);return!r&&a.alternate&&(r=ii.get(a.alternate)),r||(r=r0++,T1(a,r)),r},Na=(a,r,l)=>{let o=r;for(;o!=null;){if(ii.has(o)||za(o),!of(o)&&rf(o)&&a(o,"mount"),o.tag===As)if(o.memoizedState!==null){const h=o.child,p=h?h.sibling:null;if(p){const m=p.child;m!==null&&Na(a,m,!1)}}else{let h=null;o.child!==null&&(h=o.child.child),h!==null&&Na(a,h,!1)}else o.child!=null&&Na(a,o.child,!0);o=l?o.sibling:null}},Dd=(a,r,l,o)=>{if(ii.has(r)||za(r),!l)return;ii.has(l)||za(l);const u=r.tag===As;!of(r)&&rf(r)&&a(r,"update");const h=u&&l.memoizedState!==null,p=u&&r.memoizedState!==null;if(h&&p){const m=r.child?.sibling??null,v=l.child?.sibling??null;m!==null&&v!==null&&Dd(a,m,v)}else if(h&&!p){const m=r.child;m!==null&&Na(a,m,!0)}else if(!h&&p){i0(a,l);const m=r.child?.sibling??null;m!==null&&Na(a,m,!0)}else if(r.child!==l.child){let m=r.child;for(;m;){if(m.alternate){const v=m.alternate;Dd(a,m,v)}else Na(a,m,!1);m=m.sibling}}},Od=(a,r)=>{(r.tag===e0||!of(r))&&a(r,"unmount")},i0=(a,r)=>{const l=r.tag===As&&r.memoizedState!==null;let o=r.child;for(l&&(o=(r.child?.sibling??null)?.child??null);o!==null;)o.return!==null&&(Od(a,o),i0(a,o)),o=o.sibling};let C1=0;const Yg=new WeakMap,k1=(a,r)=>{const l="current"in a?a.current:a;let o=Yg.get(a);o||(o={id:C1++,prevFiber:null},Yg.set(a,o));const{prevFiber:u}=o;if(!l)Od(r,l);else if(u!==null){const d=u&&u.memoizedState!=null&&u.memoizedState.element!=null&&u.memoizedState.isDehydrated!==!0,h=l.memoizedState!=null&&l.memoizedState.element!=null&&l.memoizedState.isDehydrated!==!0;!d&&h?Na(r,l,!1):d&&h?Dd(r,l,l.alternate):d&&!h&&Od(r,l)}else Na(r,l,!0);o.prevFiber=l},E1=a=>{const r=oi(a.onActive);r._instrumentationSource=a.name??af;const l=r.onCommitFiberRoot;if(a.onCommitFiberRoot){const d=(h,p,m)=>{r.onCommitFiberRoot===d&&(l?.(h,p,m),a.onCommitFiberRoot?.(h,p,m))};r.onCommitFiberRoot=d}const o=r.onCommitFiberUnmount;if(a.onCommitFiberUnmount){const d=(h,p)=>{r.onCommitFiberUnmount===d&&(o?.(h,p),a.onCommitFiberUnmount?.(h,p))};r.onCommitFiberUnmount=d}const u=r.onPostCommitFiberRoot;if(a.onPostCommitFiberRoot){const d=(h,p)=>{r.onPostCommitFiberRoot===d&&(u?.(h,p),a.onPostCommitFiberRoot?.(h,p))};r.onPostCommitFiberRoot=d}return r};Pw();var Ds,ge,l0,o0,Pa,Xg,s0,c0,u0,sf,Rd,Ud,d0,bl={},f0=[],N1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,zl=Array.isArray;function In(a,r){for(var l in r)a[l]=r[l];return a}function cf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function rr(a,r,l){var o,u,d,h={};for(d in r)d=="key"?o=r[d]:d=="ref"?u=r[d]:h[d]=r[d];if(arguments.length>2&&(h.children=arguments.length>3?Ds.call(arguments,2):l),typeof a=="function"&&a.defaultProps!=null)for(d in a.defaultProps)h[d]===void 0&&(h[d]=a.defaultProps[d]);return ss(a,h,o,u,null)}function ss(a,r,l,o,u){var d={type:a,props:r,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:u??++l0,__i:-1,__u:0};return u==null&&ge.vnode!=null&&ge.vnode(d),d}function ze(a){return a.children}function cn(a,r){this.props=a,this.context=r}function li(a,r){if(r==null)return a.__?li(a.__,a.__i+1):null;for(var l;r<a.__k.length;r++)if((l=a.__k[r])!=null&&l.__e!=null)return l.__e;return typeof a.type=="function"?li(a):null}function h0(a){var r,l;if((a=a.__)!=null&&a.__c!=null){for(a.__e=a.__c.base=null,r=0;r<a.__k.length;r++)if((l=a.__k[r])!=null&&l.__e!=null){a.__e=a.__c.base=l.__e;break}return h0(a)}}function Hd(a){(!a.__d&&(a.__d=!0)&&Pa.push(a)&&!ps.__r++||Xg!=ge.debounceRendering)&&((Xg=ge.debounceRendering)||s0)(ps)}function ps(){for(var a,r,l,o,u,d,h,p=1;Pa.length;)Pa.length>p&&Pa.sort(c0),a=Pa.shift(),p=Pa.length,a.__d&&(l=void 0,o=void 0,u=(o=(r=a).__v).__e,d=[],h=[],r.__P&&((l=In({},o)).__v=o.__v+1,ge.vnode&&ge.vnode(l),uf(r.__P,l,o,r.__n,r.__P.namespaceURI,32&o.__u?[u]:null,d,u??li(o),!!(32&o.__u),h),l.__v=o.__v,l.__.__k[l.__i]=l,g0(d,l,h),o.__e=o.__=null,l.__e!=u&&h0(l)));ps.__r=0}function p0(a,r,l,o,u,d,h,p,m,v,x){var y,_,S,k,z,R,T,M=o&&o.__k||f0,q=r.length;for(m=z1(l,r,M,m,q),y=0;y<q;y++)(S=l.__k[y])!=null&&(_=S.__i==-1?bl:M[S.__i]||bl,S.__i=y,R=uf(a,S,_,u,d,h,p,m,v,x),k=S.__e,S.ref&&_.ref!=S.ref&&(_.ref&&df(_.ref,null,S),x.push(S.ref,S.__c||k,S)),z==null&&k!=null&&(z=k),(T=!!(4&S.__u))||_.__k===S.__k?m=m0(S,m,a,T):typeof S.type=="function"&&R!==void 0?m=R:k&&(m=k.nextSibling),S.__u&=-7);return l.__e=z,m}function z1(a,r,l,o,u){var d,h,p,m,v,x=l.length,y=x,_=0;for(a.__k=new Array(u),d=0;d<u;d++)(h=r[d])!=null&&typeof h!="boolean"&&typeof h!="function"?(typeof h=="string"||typeof h=="number"||typeof h=="bigint"||h.constructor==String?h=a.__k[d]=ss(null,h,null,null,null):zl(h)?h=a.__k[d]=ss(ze,{children:h},null,null,null):h.constructor===void 0&&h.__b>0?h=a.__k[d]=ss(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):a.__k[d]=h,m=d+_,h.__=a,h.__b=a.__b+1,p=null,(v=h.__i=A1(h,l,m,y))!=-1&&(y--,(p=l[v])&&(p.__u|=2)),p==null||p.__v==null?(v==-1&&(u>x?_--:u<x&&_++),typeof h.type!="function"&&(h.__u|=4)):v!=m&&(v==m-1?_--:v==m+1?_++:(v>m?_--:_++,h.__u|=4))):a.__k[d]=null;if(y)for(d=0;d<x;d++)(p=l[d])!=null&&(2&p.__u)==0&&(p.__e==o&&(o=li(p)),y0(p,p));return o}function m0(a,r,l,o){var u,d;if(typeof a.type=="function"){for(u=a.__k,d=0;u&&d<u.length;d++)u[d]&&(u[d].__=a,r=m0(u[d],r,l,o));return r}a.__e!=r&&(o&&(r&&a.type&&!r.parentNode&&(r=li(a)),l.insertBefore(a.__e,r||null)),r=a.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function ms(a,r){return r=r||[],a==null||typeof a=="boolean"||(zl(a)?a.some(function(l){ms(l,r)}):r.push(a)),r}function A1(a,r,l,o){var u,d,h,p=a.key,m=a.type,v=r[l],x=v!=null&&(2&v.__u)==0;if(v===null&&p==null||x&&p==v.key&&m==v.type)return l;if(o>(x?1:0)){for(u=l-1,d=l+1;u>=0||d<r.length;)if((v=r[h=u>=0?u--:d++])!=null&&(2&v.__u)==0&&p==v.key&&m==v.type)return h}return-1}function qg(a,r,l){r[0]=="-"?a.setProperty(r,l??""):a[r]=l==null?"":typeof l!="number"||N1.test(r)?l:l+"px"}function Jo(a,r,l,o,u){var d,h;e:if(r=="style")if(typeof l=="string")a.style.cssText=l;else{if(typeof o=="string"&&(a.style.cssText=o=""),o)for(r in o)l&&r in l||qg(a.style,r,"");if(l)for(r in l)o&&l[r]==o[r]||qg(a.style,r,l[r])}else if(r[0]=="o"&&r[1]=="n")d=r!=(r=r.replace(u0,"$1")),h=r.toLowerCase(),r=h in a||r=="onFocusOut"||r=="onFocusIn"?h.slice(2):r.slice(2),a.l||(a.l={}),a.l[r+d]=l,l?o?l.u=o.u:(l.u=sf,a.addEventListener(r,d?Ud:Rd,d)):a.removeEventListener(r,d?Ud:Rd,d);else{if(u=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in a)try{a[r]=l??"";break e}catch{}typeof l=="function"||(l==null||l===!1&&r[4]!="-"?a.removeAttribute(r):a.setAttribute(r,r=="popover"&&l==1?"":l))}}function Vg(a){return function(r){if(this.l){var l=this.l[r.type+a];if(r.t==null)r.t=sf++;else if(r.t<l.u)return;return l(ge.event?ge.event(r):r)}}}function uf(a,r,l,o,u,d,h,p,m,v){var x,y,_,S,k,z,R,T,M,q,$,Z,K,P,he,ce,ye,ue=r.type;if(r.constructor!==void 0)return null;128&l.__u&&(m=!!(32&l.__u),d=[p=r.__e=l.__e]),(x=ge.__b)&&x(r);e:if(typeof ue=="function")try{if(T=r.props,M="prototype"in ue&&ue.prototype.render,q=(x=ue.contextType)&&o[x.__c],$=x?q?q.props.value:x.__:o,l.__c?R=(y=r.__c=l.__c).__=y.__E:(M?r.__c=y=new ue(T,$):(r.__c=y=new cn(T,$),y.constructor=ue,y.render=D1),q&&q.sub(y),y.state||(y.state={}),y.__n=o,_=y.__d=!0,y.__h=[],y._sb=[]),M&&y.__s==null&&(y.__s=y.state),M&&ue.getDerivedStateFromProps!=null&&(y.__s==y.state&&(y.__s=In({},y.__s)),In(y.__s,ue.getDerivedStateFromProps(T,y.__s))),S=y.props,k=y.state,y.__v=r,_)M&&ue.getDerivedStateFromProps==null&&y.componentWillMount!=null&&y.componentWillMount(),M&&y.componentDidMount!=null&&y.__h.push(y.componentDidMount);else{if(M&&ue.getDerivedStateFromProps==null&&T!==S&&y.componentWillReceiveProps!=null&&y.componentWillReceiveProps(T,$),r.__v==l.__v||!y.__e&&y.shouldComponentUpdate!=null&&y.shouldComponentUpdate(T,y.__s,$)===!1){for(r.__v!=l.__v&&(y.props=T,y.state=y.__s,y.__d=!1),r.__e=l.__e,r.__k=l.__k,r.__k.some(function(re){re&&(re.__=r)}),Z=0;Z<y._sb.length;Z++)y.__h.push(y._sb[Z]);y._sb=[],y.__h.length&&h.push(y);break e}y.componentWillUpdate!=null&&y.componentWillUpdate(T,y.__s,$),M&&y.componentDidUpdate!=null&&y.__h.push(function(){y.componentDidUpdate(S,k,z)})}if(y.context=$,y.props=T,y.__P=a,y.__e=!1,K=ge.__r,P=0,M){for(y.state=y.__s,y.__d=!1,K&&K(r),x=y.render(y.props,y.state,y.context),he=0;he<y._sb.length;he++)y.__h.push(y._sb[he]);y._sb=[]}else do y.__d=!1,K&&K(r),x=y.render(y.props,y.state,y.context),y.state=y.__s;while(y.__d&&++P<25);y.state=y.__s,y.getChildContext!=null&&(o=In(In({},o),y.getChildContext())),M&&!_&&y.getSnapshotBeforeUpdate!=null&&(z=y.getSnapshotBeforeUpdate(S,k)),ce=x,x!=null&&x.type===ze&&x.key==null&&(ce=v0(x.props.children)),p=p0(a,zl(ce)?ce:[ce],r,l,o,u,d,h,p,m,v),y.base=r.__e,r.__u&=-161,y.__h.length&&h.push(y),R&&(y.__E=y.__=null)}catch(re){if(r.__v=null,m||d!=null)if(re.then){for(r.__u|=m?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;d[d.indexOf(p)]=null,r.__e=p}else{for(ye=d.length;ye--;)cf(d[ye]);jd(r)}else r.__e=l.__e,r.__k=l.__k,re.then||jd(r);ge.__e(re,r,l)}else d==null&&r.__v==l.__v?(r.__k=l.__k,r.__e=l.__e):p=r.__e=M1(l.__e,r,l,o,u,d,h,m,v);return(x=ge.diffed)&&x(r),128&r.__u?void 0:p}function jd(a){a&&a.__c&&(a.__c.__e=!0),a&&a.__k&&a.__k.forEach(jd)}function g0(a,r,l){for(var o=0;o<l.length;o++)df(l[o],l[++o],l[++o]);ge.__c&&ge.__c(r,a),a.some(function(u){try{a=u.__h,u.__h=[],a.some(function(d){d.call(u)})}catch(d){ge.__e(d,u.__v)}})}function v0(a){return typeof a!="object"||a==null||a.__b&&a.__b>0?a:zl(a)?a.map(v0):In({},a)}function M1(a,r,l,o,u,d,h,p,m){var v,x,y,_,S,k,z,R=l.props||bl,T=r.props,M=r.type;if(M=="svg"?u="http://www.w3.org/2000/svg":M=="math"?u="http://www.w3.org/1998/Math/MathML":u||(u="http://www.w3.org/1999/xhtml"),d!=null){for(v=0;v<d.length;v++)if((S=d[v])&&"setAttribute"in S==!!M&&(M?S.localName==M:S.nodeType==3)){a=S,d[v]=null;break}}if(a==null){if(M==null)return document.createTextNode(T);a=document.createElementNS(u,M,T.is&&T),p&&(ge.__m&&ge.__m(r,d),p=!1),d=null}if(M==null)R===T||p&&a.data==T||(a.data=T);else{if(d=d&&Ds.call(a.childNodes),!p&&d!=null)for(R={},v=0;v<a.attributes.length;v++)R[(S=a.attributes[v]).name]=S.value;for(v in R)if(S=R[v],v!="children"){if(v=="dangerouslySetInnerHTML")y=S;else if(!(v in T)){if(v=="value"&&"defaultValue"in T||v=="checked"&&"defaultChecked"in T)continue;Jo(a,v,null,S,u)}}for(v in T)S=T[v],v=="children"?_=S:v=="dangerouslySetInnerHTML"?x=S:v=="value"?k=S:v=="checked"?z=S:p&&typeof S!="function"||R[v]===S||Jo(a,v,S,R[v],u);if(x)p||y&&(x.__html==y.__html||x.__html==a.innerHTML)||(a.innerHTML=x.__html),r.__k=[];else if(y&&(a.innerHTML=""),p0(r.type=="template"?a.content:a,zl(_)?_:[_],r,l,o,M=="foreignObject"?"http://www.w3.org/1999/xhtml":u,d,h,d?d[0]:l.__k&&li(l,0),p,m),d!=null)for(v=d.length;v--;)cf(d[v]);p||(v="value",M=="progress"&&k==null?a.removeAttribute("value"):k!=null&&(k!==a[v]||M=="progress"&&!k||M=="option"&&k!=R[v])&&Jo(a,v,k,R[v],u),v="checked",z!=null&&z!=a[v]&&Jo(a,v,z,R[v],u))}return a}function df(a,r,l){try{if(typeof a=="function"){var o=typeof a.__u=="function";o&&a.__u(),o&&r==null||(a.__u=a(r))}else a.current=r}catch(u){ge.__e(u,l)}}function y0(a,r,l){var o,u;if(ge.unmount&&ge.unmount(a),(o=a.ref)&&(o.current&&o.current!=a.__e||df(o,null,r)),(o=a.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(d){ge.__e(d,r)}o.base=o.__P=null}if(o=a.__k)for(u=0;u<o.length;u++)o[u]&&y0(o[u],r,l||typeof a.type!="function");l||cf(a.__e),a.__c=a.__=a.__e=void 0}function D1(a,r,l){return this.constructor(a,l)}function hl(a,r,l){var o,u,d,h;r==document&&(r=document.documentElement),ge.__&&ge.__(a,r),u=(o=!1)?null:r.__k,d=[],h=[],uf(r,a=r.__k=rr(ze,null,[a]),u||bl,bl,r.namespaceURI,u?null:r.firstChild?Ds.call(r.childNodes):null,d,u?u.__e:r.firstChild,o,h),g0(d,a,h)}function b0(a){function r(l){var o,u;return this.getChildContext||(o=new Set,(u={})[r.__c]=this,this.getChildContext=function(){return u},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(d){this.props.value!=d.value&&o.forEach(function(h){h.__e=!0,Hd(h)})},this.sub=function(d){o.add(d);var h=d.componentWillUnmount;d.componentWillUnmount=function(){o&&o.delete(d),h&&h.call(d)}}),l.children}return r.__c="__cC"+d0++,r.__=a,r.Provider=r.__l=(r.Consumer=function(l,o){return l.children(o)}).contextType=r,r}Ds=f0.slice,ge={__e:function(a,r,l,o){for(var u,d,h;r=r.__;)if((u=r.__c)&&!u.__)try{if((d=u.constructor)&&d.getDerivedStateFromError!=null&&(u.setState(d.getDerivedStateFromError(a)),h=u.__d),u.componentDidCatch!=null&&(u.componentDidCatch(a,o||{}),h=u.__d),h)return u.__E=u}catch(p){a=p}throw a}},l0=0,o0=function(a){return a!=null&&a.constructor===void 0},cn.prototype.setState=function(a,r){var l;l=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=In({},this.state),typeof a=="function"&&(a=a(In({},l),this.props)),a&&In(l,a),a!=null&&this.__v&&(r&&this._sb.push(r),Hd(this))},cn.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),Hd(this))},cn.prototype.render=ze,Pa=[],s0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c0=function(a,r){return a.__v.__b-r.__v.__b},ps.__r=0,u0=/(PointerCapture)$|Capture$/i,sf=0,Rd=Vg(!1),Ud=Vg(!0),d0=0;var ir,Pe,td,Fg,wl=0,w0=[],ot=ge,Gg=ot.__b,$g=ot.__r,Qg=ot.diffed,Zg=ot.__c,Ig=ot.unmount,Jg=ot.__;function Al(a,r){ot.__h&&ot.__h(Pe,a,wl||r),wl=0;var l=Pe.__H||(Pe.__H={__:[],__h:[]});return a>=l.__.length&&l.__.push({}),l.__[a]}function Se(a){return wl=1,O1(x0,a)}function O1(a,r,l){var o=Al(ir++,2);if(o.t=a,!o.__c&&(o.__=[l?l(r):x0(void 0,r),function(p){var m=o.__N?o.__N[0]:o.__[0],v=o.t(m,p);m!==v&&(o.__N=[v,o.__[1]],o.__c.setState({}))}],o.__c=Pe,!Pe.__f)){var u=function(p,m,v){if(!o.__c.__H)return!0;var x=o.__c.__H.__.filter(function(_){return!!_.__c});if(x.every(function(_){return!_.__N}))return!d||d.call(this,p,m,v);var y=o.__c.props!==p;return x.forEach(function(_){if(_.__N){var S=_.__[0];_.__=_.__N,_.__N=void 0,S!==_.__[0]&&(y=!0)}}),d&&d.call(this,p,m,v)||y};Pe.__f=!0;var d=Pe.shouldComponentUpdate,h=Pe.componentWillUpdate;Pe.componentWillUpdate=function(p,m,v){if(this.__e){var x=d;d=void 0,u(p,m,v),d=x}h&&h.call(this,p,m,v)},Pe.shouldComponentUpdate=u}return o.__N||o.__}function _e(a,r){var l=Al(ir++,3);!ot.__s&&pf(l.__H,r)&&(l.__=a,l.u=r,Pe.__H.__h.push(l))}function ff(a,r){var l=Al(ir++,4);!ot.__s&&pf(l.__H,r)&&(l.__=a,l.u=r,Pe.__h.push(l))}function oe(a){return wl=5,yn(function(){return{current:a}},[])}function yn(a,r){var l=Al(ir++,7);return pf(l.__H,r)&&(l.__=a(),l.__H=r,l.__h=a),l.__}function lt(a,r){return wl=8,yn(function(){return a},r)}function hf(a){var r=Pe.context[a.__c],l=Al(ir++,9);return l.c=a,r?(l.__==null&&(l.__=!0,r.sub(Pe)),r.props.value):a.__}function R1(){for(var a;a=w0.shift();)if(a.__P&&a.__H)try{a.__H.__h.forEach(cs),a.__H.__h.forEach(Ld),a.__H.__h=[]}catch(r){a.__H.__h=[],ot.__e(r,a.__v)}}ot.__b=function(a){Pe=null,Gg&&Gg(a)},ot.__=function(a,r){a&&r.__k&&r.__k.__m&&(a.__m=r.__k.__m),Jg&&Jg(a,r)},ot.__r=function(a){$g&&$g(a),ir=0;var r=(Pe=a.__c).__H;r&&(td===Pe?(r.__h=[],Pe.__h=[],r.__.forEach(function(l){l.__N&&(l.__=l.__N),l.u=l.__N=void 0})):(r.__h.forEach(cs),r.__h.forEach(Ld),r.__h=[],ir=0)),td=Pe},ot.diffed=function(a){Qg&&Qg(a);var r=a.__c;r&&r.__H&&(r.__H.__h.length&&(w0.push(r)!==1&&Fg===ot.requestAnimationFrame||((Fg=ot.requestAnimationFrame)||U1)(R1)),r.__H.__.forEach(function(l){l.u&&(l.__H=l.u),l.u=void 0})),td=Pe=null},ot.__c=function(a,r){r.some(function(l){try{l.__h.forEach(cs),l.__h=l.__h.filter(function(o){return!o.__||Ld(o)})}catch(o){r.some(function(u){u.__h&&(u.__h=[])}),r=[],ot.__e(o,l.__v)}}),Zg&&Zg(a,r)},ot.unmount=function(a){Ig&&Ig(a);var r,l=a.__c;l&&l.__H&&(l.__H.__.forEach(function(o){try{cs(o)}catch(u){r=u}}),l.__H=void 0,r&&ot.__e(r,l.__v))};var Kg=typeof requestAnimationFrame=="function";function U1(a){var r,l=function(){clearTimeout(o),Kg&&cancelAnimationFrame(r),setTimeout(a)},o=setTimeout(l,35);Kg&&(r=requestAnimationFrame(l))}function cs(a){var r=Pe,l=a.__c;typeof l=="function"&&(a.__c=void 0,l()),Pe=r}function Ld(a){var r=Pe;a.__c=a.__(),Pe=r}function pf(a,r){return!a||a.length!==r.length||r.some(function(l,o){return l!==a[o]})}function x0(a,r){return typeof r=="function"?r(a):r}var H1=Symbol.for("preact-signals");function mf(){if(ei>1)ei--;else{for(var a,r=!1;pl!==void 0;){var l=pl;for(pl=void 0,Bd++;l!==void 0;){var o=l.o;if(l.o=void 0,l.f&=-3,!(8&l.f)&&S0(l))try{l.c()}catch(u){r||(a=u,r=!0)}l=o}}if(Bd=0,ei--,r)throw a}}var He=void 0;function xl(a){var r=He;He=void 0;try{return a()}finally{He=r}}var pl=void 0,ei=0,Bd=0,gs=0;function _0(a){if(He!==void 0){var r=a.n;if(r===void 0||r.t!==He)return r={i:0,S:a,p:He.s,n:void 0,t:He,e:void 0,x:void 0,r},He.s!==void 0&&(He.s.n=r),He.s=r,a.n=r,32&He.f&&a.S(r),r;if(r.i===-1)return r.i=0,r.n!==void 0&&(r.n.p=r.p,r.p!==void 0&&(r.p.n=r.n),r.p=He.s,r.n=void 0,He.s.n=r,He.s=r),r}}function kt(a,r){this.v=a,this.i=0,this.n=void 0,this.t=void 0,this.W=r?.watched,this.Z=r?.unwatched,this.name=r?.name}kt.prototype.brand=H1;kt.prototype.h=function(){return!0};kt.prototype.S=function(a){var r=this,l=this.t;l!==a&&a.e===void 0&&(a.x=l,this.t=a,l!==void 0?l.e=a:xl(function(){var o;(o=r.W)==null||o.call(r)}))};kt.prototype.U=function(a){var r=this;if(this.t!==void 0){var l=a.e,o=a.x;l!==void 0&&(l.x=o,a.e=void 0),o!==void 0&&(o.e=l,a.x=void 0),a===this.t&&(this.t=o,o===void 0&&xl(function(){var u;(u=r.Z)==null||u.call(r)}))}};kt.prototype.subscribe=function(a){var r=this;return Os(function(){var l=r.value,o=He;He=void 0;try{a(l)}finally{He=o}},{name:"sub"})};kt.prototype.valueOf=function(){return this.value};kt.prototype.toString=function(){return this.value+""};kt.prototype.toJSON=function(){return this.value};kt.prototype.peek=function(){var a=He;He=void 0;try{return this.value}finally{He=a}};Object.defineProperty(kt.prototype,"value",{get:function(){var a=_0(this);return a!==void 0&&(a.i=this.i),this.v},set:function(a){if(a!==this.v){if(Bd>100)throw new Error("Cycle detected");this.v=a,this.i++,gs++,ei++;try{for(var r=this.t;r!==void 0;r=r.x)r.t.N()}finally{mf()}}}});function ht(a,r){return new kt(a,r)}function S0(a){for(var r=a.s;r!==void 0;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function T0(a){for(var r=a.s;r!==void 0;r=r.n){var l=r.S.n;if(l!==void 0&&(r.r=l),r.S.n=r,r.i=-1,r.n===void 0){a.s=r;break}}}function C0(a){for(var r=a.s,l=void 0;r!==void 0;){var o=r.p;r.i===-1?(r.S.U(r),o!==void 0&&(o.n=r.n),r.n!==void 0&&(r.n.p=o)):l=r,r.S.n=r.r,r.r!==void 0&&(r.r=void 0),r=o}a.s=l}function sr(a,r){kt.call(this,void 0),this.x=a,this.s=void 0,this.g=gs-1,this.f=4,this.W=r?.watched,this.Z=r?.unwatched,this.name=r?.name}sr.prototype=new kt;sr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===gs))return!0;if(this.g=gs,this.f|=1,this.i>0&&!S0(this))return this.f&=-2,!0;var a=He;try{T0(this),He=this;var r=this.x();(16&this.f||this.v!==r||this.i===0)&&(this.v=r,this.f&=-17,this.i++)}catch(l){this.v=l,this.f|=16,this.i++}return He=a,C0(this),this.f&=-2,!0};sr.prototype.S=function(a){if(this.t===void 0){this.f|=36;for(var r=this.s;r!==void 0;r=r.n)r.S.S(r)}kt.prototype.S.call(this,a)};sr.prototype.U=function(a){if(this.t!==void 0&&(kt.prototype.U.call(this,a),this.t===void 0)){this.f&=-33;for(var r=this.s;r!==void 0;r=r.n)r.S.U(r)}};sr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var a=this.t;a!==void 0;a=a.x)a.t.N()}};Object.defineProperty(sr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var a=_0(this);if(this.h(),a!==void 0&&(a.i=this.i),16&this.f)throw this.v;return this.v}});function cr(a,r){return new sr(a,r)}function k0(a){var r=a.u;if(a.u=void 0,typeof r=="function"){ei++;var l=He;He=void 0;try{r()}catch(o){throw a.f&=-2,a.f|=8,gf(a),o}finally{He=l,mf()}}}function gf(a){for(var r=a.s;r!==void 0;r=r.n)r.S.U(r);a.x=void 0,a.s=void 0,k0(a)}function j1(a){if(He!==this)throw new Error("Out-of-order effect");C0(this),He=a,this.f&=-2,8&this.f&&gf(this),mf()}function si(a,r){this.x=a,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=r?.name}si.prototype.c=function(){var a=this.S();try{if(8&this.f||this.x===void 0)return;var r=this.x();typeof r=="function"&&(this.u=r)}finally{a()}};si.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,k0(this),T0(this),ei++;var a=He;return He=this,j1.bind(this,a)};si.prototype.N=function(){2&this.f||(this.f|=2,this.o=pl,pl=this)};si.prototype.d=function(){this.f|=8,1&this.f||gf(this)};si.prototype.dispose=function(){this.d()};function Os(a,r){var l=new si(a,r);try{l.c()}catch(u){throw l.d(),u}var o=l.d.bind(l);return o[Symbol.dispose]=o,o}var Ko;function ci(a,r){ge[a]=r.bind(null,ge[a]||function(){})}function vs(a){if(Ko){var r=Ko;Ko=void 0,r()}Ko=a&&a.S()}function E0(a){var r=this,l=a.data,o=B1(l);o.value=l;var u=yn(function(){for(var d=r.__v;d=d.__;)if(d.__c){d.__c.__$f|=4;break}return r.__$u.c=function(){var h,p=r.__$u.S(),m=u.value;p(),o0(m)||((h=r.base)==null?void 0:h.nodeType)!==3?(r.__$f|=1,r.setState({})):r.base.data=m},cr(function(){var h=o.value.value;return h===0?0:h===!0?"":h||""})},[]);return u.value}E0.displayName="_st";Object.defineProperties(kt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:E0},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ci("__b",function(a,r){if(typeof r.type=="string"){var l,o=r.props;for(var u in o)if(u!=="children"){var d=o[u];d instanceof kt&&(l||(r.__np=l={}),l[u]=d,o[u]=d.peek())}}a(r)});ci("__r",function(a,r){a(r),vs();var l,o=r.__c;o&&(o.__$f&=-2,(l=o.__$u)===void 0&&(o.__$u=l=(function(u){var d;return Os(function(){d=this}),d.c=function(){o.__$f|=1,o.setState({})},d})())),vs(l)});ci("__e",function(a,r,l,o){vs(),a(r,l,o)});ci("diffed",function(a,r){vs();var l;if(typeof r.type=="string"&&(l=r.__e)){var o=r.__np,u=r.props;if(o){var d=l.U;if(d)for(var h in d){var p=d[h];p!==void 0&&!(h in o)&&(p.d(),d[h]=void 0)}else l.U=d={};for(var m in o){var v=d[m],x=o[m];v===void 0?(v=L1(l,m,x,u),d[m]=v):v.o(x,u)}}}a(r)});function L1(a,r,l,o){var u=r in a&&a.ownerSVGElement===void 0,d=ht(l);return{o:function(h,p){d.value=h,o=p},d:Os(function(){var h=d.value.value;o[r]!==h&&(o[r]=h,u?a[r]=h:h?a.setAttribute(r,h):a.removeAttribute(r))})}}ci("unmount",function(a,r){if(typeof r.type=="string"){var l=r.__e;if(l){var o=l.U;if(o){l.U=void 0;for(var u in o){var d=o[u];d&&d.d()}}}}else{var h=r.__c;if(h){var p=h.__$u;p&&(h.__$u=void 0,p.d())}}a(r)});ci("__h",function(a,r,l,o){(o<3||o===9)&&(r.__$f|=2),a(r,l,o)});cn.prototype.shouldComponentUpdate=function(a,r){if(this.__R)return!0;var l=this.__$u,o=l&&l.s!==void 0;for(var u in r)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(o||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(o||4&this.__$f)||3&this.__$f)return!0;for(var d in a)if(d!=="__source"&&a[d]!==this.props[d])return!0;for(var h in this.props)if(!(h in a))return!0;return!1};function B1(a){return yn(function(){return ht(a)},[])}function _l(a){var r=oe(a);r.current=a,_e(function(){return Os(function(){return r.current()})},[])}function N0(a,r){for(var l in r)a[l]=r[l];return a}function Yd(a,r){for(var l in a)if(l!=="__source"&&!(l in r))return!0;for(var o in r)if(o!=="__source"&&a[o]!==r[o])return!0;return!1}function Y1(a,r){var l=r(),o=Se({t:{__:l,u:r}}),u=o[0].t,d=o[1];return ff(function(){u.__=l,u.u=r,nd(u)&&d({t:u})},[a,l,r]),_e(function(){return nd(u)&&d({t:u}),a(function(){nd(u)&&d({t:u})})},[a]),l}function nd(a){var r,l,o=a.u,u=a.__;try{var d=o();return!((r=u)===(l=d)&&(r!==0||1/r==1/l)||r!=r&&l!=l)}catch{return!0}}function Wg(a,r){this.props=a,this.context=r}function Rs(a,r){function l(u){var d=this.props.ref,h=d==u.ref;return!h&&d&&(d.call?d(null):d.current=null),r?!r(this.props,u)||!h:Yd(this.props,u)}function o(u){return this.shouldComponentUpdate=l,rr(a,u)}return o.displayName="Memo("+(a.displayName||a.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o.type=a,o}(Wg.prototype=new cn).isPureReactComponent=!0,Wg.prototype.shouldComponentUpdate=function(a,r){return Yd(this.props,a)||Yd(this.state,r)};var Pg=ge.__b;ge.__b=function(a){a.type&&a.type.__f&&a.ref&&(a.props.ref=a.ref,a.ref=null),Pg&&Pg(a)};var X1=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function vf(a){function r(l){var o=N0({},l);return delete o.ref,a(o,l.ref||null)}return r.$$typeof=X1,r.render=a,r.prototype.isReactComponent=r.__f=!0,r.displayName="ForwardRef("+(a.displayName||a.name)+")",r}var q1=ge.__e;ge.__e=function(a,r,l,o){if(a.then){for(var u,d=r;d=d.__;)if((u=d.__c)&&u.__c)return r.__e==null&&(r.__e=l.__e,r.__k=l.__k),u.__c(a,r)}q1(a,r,l,o)};var ev=ge.unmount;function z0(a,r,l){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),a.__c.__H=null),(a=N0({},a)).__c!=null&&(a.__c.__P===l&&(a.__c.__P=r),a.__c.__e=!0,a.__c=null),a.__k=a.__k&&a.__k.map(function(o){return z0(o,r,l)})),a}function A0(a,r,l){return a&&l&&(a.__v=null,a.__k=a.__k&&a.__k.map(function(o){return A0(o,r,l)}),a.__c&&a.__c.__P===r&&(a.__e&&l.appendChild(a.__e),a.__c.__e=!0,a.__c.__P=l)),a}function ad(){this.__u=0,this.o=null,this.__b=null}function M0(a){if(!a.__)return null;var r=a.__.__c;return r&&r.__a&&r.__a(a)}function Wo(){this.i=null,this.l=null}ge.unmount=function(a){var r=a.__c;r&&(r.__z=!0),r&&r.__R&&r.__R(),r&&32&a.__u&&(a.type=null),ev&&ev(a)},(ad.prototype=new cn).__c=function(a,r){var l=r.__c,o=this;o.o==null&&(o.o=[]),o.o.push(l);var u=M0(o.__v),d=!1,h=function(){d||o.__z||(d=!0,l.__R=null,u?u(m):m())};l.__R=h;var p=l.__P;l.__P=null;var m=function(){if(!--o.__u){if(o.state.__a){var v=o.state.__a;o.__v.__k[0]=A0(v,v.__c.__P,v.__c.__O)}var x;for(o.setState({__a:o.__b=null});x=o.o.pop();)x.__P=p,x.forceUpdate()}};o.__u++||32&r.__u||o.setState({__a:o.__b=o.__v.__k[0]}),a.then(h,h)},ad.prototype.componentWillUnmount=function(){this.o=[]},ad.prototype.render=function(a,r){if(this.__b){if(this.__v.__k){var l=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=z0(this.__b,l,o.__O=o.__P)}this.__b=null}var u=r.__a&&rr(ze,null,a.fallback);return u&&(u.__u&=-33),[rr(ze,null,r.__a?null:a.children),u]};var tv=function(a,r,l){if(++l[1]===l[0]&&a.l.delete(r),a.props.revealOrder&&(a.props.revealOrder[0]!=="t"||!a.l.size))for(l=a.i;l;){for(;l.length>3;)l.pop()();if(l[1]<l[0])break;a.i=l=l[2]}};function V1(a){return this.getChildContext=function(){return a.context},a.children}function F1(a){var r=this,l=a.h;if(r.componentWillUnmount=function(){hl(null,r.v),r.v=null,r.h=null},r.h&&r.h!==l&&r.componentWillUnmount(),!r.v){for(var o=r.__v;o!==null&&!o.__m&&o.__!==null;)o=o.__;r.h=l,r.v={nodeType:1,parentNode:l,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},namespaceURI:l.namespaceURI,insertBefore:function(u,d){this.childNodes.push(u),r.h.insertBefore(u,d)},removeChild:function(u){this.childNodes.splice(this.childNodes.indexOf(u)>>>1,1),r.h.removeChild(u)}}}hl(rr(V1,{context:r.context},a.__v),r.v)}function G1(a,r){var l=rr(F1,{__v:a,h:r});return l.containerInfo=r,l}(Wo.prototype=new cn).__a=function(a){var r=this,l=M0(r.__v),o=r.l.get(a);return o[0]++,function(u){var d=function(){r.props.revealOrder?(o.push(u),tv(r,a,o)):u()};l?l(d):d()}},Wo.prototype.render=function(a){this.i=null,this.l=new Map;var r=ms(a.children);a.revealOrder&&a.revealOrder[0]==="b"&&r.reverse();for(var l=r.length;l--;)this.l.set(r[l],this.i=[1,0,this.i]);return a.children},Wo.prototype.componentDidUpdate=Wo.prototype.componentDidMount=function(){var a=this;this.l.forEach(function(r,l){tv(a,l,r)})};var $1=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Q1=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z1=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,I1=/[A-Z0-9]/g,J1=typeof document<"u",K1=function(a){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(a)};cn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(a){Object.defineProperty(cn.prototype,a,{configurable:!0,get:function(){return this["UNSAFE_"+a]},set:function(r){Object.defineProperty(this,a,{configurable:!0,writable:!0,value:r})}})});var nv=ge.event;function W1(){}function P1(){return this.cancelBubble}function ex(){return this.defaultPrevented}ge.event=function(a){return nv&&(a=nv(a)),a.persist=W1,a.isPropagationStopped=P1,a.isDefaultPrevented=ex,a.nativeEvent=a};var tx={enumerable:!1,configurable:!0,get:function(){return this.class}},av=ge.vnode;ge.vnode=function(a){typeof a.type=="string"&&(function(r){var l=r.props,o=r.type,u={},d=o.indexOf("-")===-1;for(var h in l){var p=l[h];if(!(h==="value"&&"defaultValue"in l&&p==null||J1&&h==="children"&&o==="noscript"||h==="class"||h==="className")){var m=h.toLowerCase();h==="defaultValue"&&"value"in l&&l.value==null?h="value":h==="download"&&p===!0?p="":m==="translate"&&p==="no"?p=!1:m[0]==="o"&&m[1]==="n"?m==="ondoubleclick"?h="ondblclick":m!=="onchange"||o!=="input"&&o!=="textarea"||K1(l.type)?m==="onfocus"?h="onfocusin":m==="onblur"?h="onfocusout":Z1.test(h)&&(h=m):m=h="oninput":d&&Q1.test(h)?h=h.replace(I1,"-$&").toLowerCase():p===null&&(p=void 0),m==="oninput"&&u[h=m]&&(h="oninputCapture"),u[h]=p}}o=="select"&&u.multiple&&Array.isArray(u.value)&&(u.value=ms(l.children).forEach(function(v){v.props.selected=u.value.indexOf(v.props.value)!=-1})),o=="select"&&u.defaultValue!=null&&(u.value=ms(l.children).forEach(function(v){v.props.selected=u.multiple?u.defaultValue.indexOf(v.props.value)!=-1:u.defaultValue==v.props.value})),l.class&&!l.className?(u.class=l.class,Object.defineProperty(u,"className",tx)):(l.className&&!l.class||l.class&&l.className)&&(u.class=u.className=l.className),r.props=u})(a),a.$$typeof=$1,av&&av(a)};var rv=ge.__r;ge.__r=function(a){rv&&rv(a),a.__c};var iv=ge.diffed;ge.diffed=function(a){iv&&iv(a);var r=a.props,l=a.__e;l!=null&&a.type==="textarea"&&"value"in r&&r.value!==l.value&&(l.value=r.value==null?"":r.value)};var nx=0;function f(a,r,l,o,u,d){r||(r={});var h,p,m=r;if("ref"in m)for(p in m={},r)p=="ref"?h=r[p]:m[p]=r[p];var v={type:a,props:m,key:l,ref:h,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--nx,__i:-1,__u:0,__source:u,__self:d};if(typeof a=="function"&&(h=a.defaultProps))for(p in h)m[p]===void 0&&(m[p]=h[p]);return ge.vnode&&ge.vnode(v),v}var rd={exports:{}},pe={};var lv;function ax(){if(lv)return pe;lv=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),_=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,R={};function T(C,H,F){this.props=C,this.context=H,this.refs=R,this.updater=F||k}T.prototype.isReactComponent={},T.prototype.setState=function(C,H){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,H,"setState")},T.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function M(){}M.prototype=T.prototype;function q(C,H,F){this.props=C,this.context=H,this.refs=R,this.updater=F||k}var $=q.prototype=new M;$.constructor=q,z($,T.prototype),$.isPureReactComponent=!0;var Z=Array.isArray;function K(){}var P={H:null,A:null,T:null,S:null},he=Object.prototype.hasOwnProperty;function ce(C,H,F){var I=F.ref;return{$$typeof:a,type:C,key:H,ref:I!==void 0?I:null,props:F}}function ye(C,H){return ce(C.type,H,C.props)}function ue(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function re(C){var H={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(F){return H[F]})}var Xe=/\/+/g;function je(C,H){return typeof C=="object"&&C!==null&&C.key!=null?re(""+C.key):H.toString(36)}function Ue(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(K,K):(C.status="pending",C.then(function(H){C.status==="pending"&&(C.status="fulfilled",C.value=H)},function(H){C.status==="pending"&&(C.status="rejected",C.reason=H)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function w(C,H,F,I,W){var ae=typeof C;(ae==="undefined"||ae==="boolean")&&(C=null);var fe=!1;if(C===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(C.$$typeof){case a:case r:fe=!0;break;case x:return fe=C._init,w(fe(C._payload),H,F,I,W)}}if(fe)return W=W(C),fe=I===""?"."+je(C,0):I,Z(W)?(F="",fe!=null&&(F=fe.replace(Xe,"$&/")+"/"),w(W,H,F,"",function(pt){return pt})):W!=null&&(ue(W)&&(W=ye(W,F+(W.key==null||C&&C.key===W.key?"":(""+W.key).replace(Xe,"$&/")+"/")+fe)),H.push(W)),1;fe=0;var Me=I===""?".":I+":";if(Z(C))for(var be=0;be<C.length;be++)I=C[be],ae=Me+je(I,be),fe+=w(I,H,F,ae,W);else if(be=S(C),typeof be=="function")for(C=be.call(C),be=0;!(I=C.next()).done;)I=I.value,ae=Me+je(I,be++),fe+=w(I,H,F,ae,W);else if(ae==="object"){if(typeof C.then=="function")return w(Ue(C),H,F,I,W);throw H=String(C),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return fe}function N(C,H,F){if(C==null)return C;var I=[],W=0;return w(C,I,"","",function(ae){return H.call(F,ae,W++)}),I}function U(C){if(C._status===-1){var H=C._result;H=H(),H.then(function(F){(C._status===0||C._status===-1)&&(C._status=1,C._result=F)},function(F){(C._status===0||C._status===-1)&&(C._status=2,C._result=F)}),C._status===-1&&(C._status=0,C._result=H)}if(C._status===1)return C._result.default;throw C._result}var Q=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},J={map:N,forEach:function(C,H,F){N(C,function(){H.apply(this,arguments)},F)},count:function(C){var H=0;return N(C,function(){H++}),H},toArray:function(C){return N(C,function(H){return H})||[]},only:function(C){if(!ue(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return pe.Activity=y,pe.Children=J,pe.Component=T,pe.Fragment=l,pe.Profiler=u,pe.PureComponent=q,pe.StrictMode=o,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,pe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return P.H.useMemoCache(C)}},pe.cache=function(C){return function(){return C.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(C,H,F){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var I=z({},C.props),W=C.key;if(H!=null)for(ae in H.key!==void 0&&(W=""+H.key),H)!he.call(H,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&H.ref===void 0||(I[ae]=H[ae]);var ae=arguments.length-2;if(ae===1)I.children=F;else if(1<ae){for(var fe=Array(ae),Me=0;Me<ae;Me++)fe[Me]=arguments[Me+2];I.children=fe}return ce(C.type,W,I)},pe.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:d,_context:C},C},pe.createElement=function(C,H,F){var I,W={},ae=null;if(H!=null)for(I in H.key!==void 0&&(ae=""+H.key),H)he.call(H,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(W[I]=H[I]);var fe=arguments.length-2;if(fe===1)W.children=F;else if(1<fe){for(var Me=Array(fe),be=0;be<fe;be++)Me[be]=arguments[be+2];W.children=Me}if(C&&C.defaultProps)for(I in fe=C.defaultProps,fe)W[I]===void 0&&(W[I]=fe[I]);return ce(C,ae,W)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(C){return{$$typeof:p,render:C}},pe.isValidElement=ue,pe.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:U}},pe.memo=function(C,H){return{$$typeof:v,type:C,compare:H===void 0?null:H}},pe.startTransition=function(C){var H=P.T,F={};P.T=F;try{var I=C(),W=P.S;W!==null&&W(F,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(K,Q)}catch(ae){Q(ae)}finally{H!==null&&F.types!==null&&(H.types=F.types),P.T=H}},pe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},pe.use=function(C){return P.H.use(C)},pe.useActionState=function(C,H,F){return P.H.useActionState(C,H,F)},pe.useCallback=function(C,H){return P.H.useCallback(C,H)},pe.useContext=function(C){return P.H.useContext(C)},pe.useDebugValue=function(){},pe.useDeferredValue=function(C,H){return P.H.useDeferredValue(C,H)},pe.useEffect=function(C,H){return P.H.useEffect(C,H)},pe.useEffectEvent=function(C){return P.H.useEffectEvent(C)},pe.useId=function(){return P.H.useId()},pe.useImperativeHandle=function(C,H,F){return P.H.useImperativeHandle(C,H,F)},pe.useInsertionEffect=function(C,H){return P.H.useInsertionEffect(C,H)},pe.useLayoutEffect=function(C,H){return P.H.useLayoutEffect(C,H)},pe.useMemo=function(C,H){return P.H.useMemo(C,H)},pe.useOptimistic=function(C,H){return P.H.useOptimistic(C,H)},pe.useReducer=function(C,H,F){return P.H.useReducer(C,H,F)},pe.useRef=function(C){return P.H.useRef(C)},pe.useState=function(C){return P.H.useState(C)},pe.useSyncExternalStore=function(C,H,F){return P.H.useSyncExternalStore(C,H,F)},pe.useTransition=function(){return P.H.useTransition()},pe.version="19.2.4",pe}var ov;function yf(){return ov||(ov=1,rd.exports=ax()),rd.exports}var Ye=yf();Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(a){return[...this].sort(a)},writable:!0,configurable:!0});function rx(a,r){return r-a}function ix(a){let r=a[0].name;const l=a.length,o=Math.min(4,l);for(let u=1;u<o;u++)r+=`, ${a[u].name}`;return r}function lx(a){let r=a[0].time;for(let l=1,o=a.length;l<o;l++)r+=a[l].time;return r}function ox(a){for(let r=0,l=a.length;r<l;r++)if(a[r].forget)return!0;return!1}var sx=a=>{let r="";const l=new Map;for(const h of a){const{forget:p,time:m,aggregatedCount:v,name:x}=h;l.has(v)||l.set(v,[]);const y=l.get(v);y&&y.push({name:x,forget:p,time:m??0})}const o=Array.from(l.keys()).sort(rx),u=[];let d=0;for(const h of o){const p=l.get(h);if(!p)continue;let m=ix(p);const v=lx(p),x=ox(p);d+=v,p.length>4&&(m+="…"),h>1&&(m+=` × ${h}`),x&&(m=`✨${m}`),u.push(m)}return r=u.join(", "),r.length?(r.length>40&&(r=`${r.slice(0,40)}…`),d>=.01&&(r+=` (${Number(d.toFixed(2))}ms)`),r):null};function Aa(a,r){return a===r||a!==a&&r!==r}var bf=a=>{const r=a.createOscillator(),l=a.createGain();r.connect(l),l.connect(a.destination);const o={type:"sine",freq:[392,600],duration:.3,gain:.12},u=o.freq,d=o.duration/u.length;u.forEach((h,p)=>{r.frequency.setValueAtTime(h,a.currentTime+p*d)}),r.type=o.type,l.gain.setValueAtTime(o.gain,a.currentTime),l.gain.setTargetAtTime(0,a.currentTime+o.duration*.7,.05),r.start(),r.stop(a.currentTime+o.duration)},cx=a=>new Promise(r=>{const l=new Map,o=new IntersectionObserver(u=>{for(const d of u){const h=d.target,p=d.boundingClientRect;l.set(h,p)}o.disconnect(),r(l)});for(const u of a)o.observe(u)}),ux={mount:1,update:2,unmount:4},nt=vf(({size:a=15,name:r,fill:l="currentColor",stroke:o="currentColor",className:u,externalURL:d="",style:h},p)=>{const m=Array.isArray(a)?a[0]:a,v=Array.isArray(a)?a[1]||a[0]:a,x=`${d}#${r}`;return f("svg",{ref:p,width:`${m}px`,height:`${v}px`,fill:l,stroke:o,className:u,style:{...h,minWidth:`${m}px`,maxWidth:`${m}px`,minHeight:`${v}px`,maxHeight:`${v}px`},children:[f("title",{children:r}),f("use",{href:x})]})}),me=24,ft={width:550,height:350,initialHeight:400},gn=240,Jn="react-scan-widget-settings-v2",us="react-scan-widget-collapsed-v1",Zr="react-scan-widget-last-view-v1",En=typeof window<"u";function D0(a){var r,l,o="";if(typeof a=="string"||typeof a=="number")o+=a;else if(typeof a=="object")if(Array.isArray(a)){var u=a.length;for(r=0;r<u;r++)a[r]&&(l=D0(a[r]))&&(o&&(o+=" "),o+=l)}else for(l in a)a[l]&&(o&&(o+=" "),o+=l);return o}function dx(){for(var a,r,l=0,o="",u=arguments.length;l<u;l++)(a=arguments[l])&&(r=D0(a))&&(o&&(o+=" "),o+=r);return o}var wf="-",fx=a=>{const r=px(a),{conflictingClassGroups:l,conflictingClassGroupModifiers:o}=a;return{getClassGroupId:h=>{const p=h.split(wf);return p[0]===""&&p.length!==1&&p.shift(),O0(p,r)||hx(h)},getConflictingClassGroupIds:(h,p)=>{const m=l[h]||[];return p&&o[h]?[...m,...o[h]]:m}}},O0=(a,r)=>{if(a.length===0)return r.classGroupId;const l=a[0],o=r.nextPart.get(l),u=o?O0(a.slice(1),o):void 0;if(u)return u;if(r.validators.length===0)return;const d=a.join(wf);return r.validators.find(({validator:h})=>h(d))?.classGroupId},sv=/^\[(.+)\]$/,hx=a=>{if(sv.test(a)){const r=sv.exec(a)[1],l=r?.substring(0,r.indexOf(":"));if(l)return"arbitrary.."+l}},px=a=>{const{theme:r,prefix:l}=a,o={nextPart:new Map,validators:[]};return gx(Object.entries(a.classGroups),l).forEach(([d,h])=>{Xd(h,o,d,r)}),o},Xd=(a,r,l,o)=>{a.forEach(u=>{if(typeof u=="string"){const d=u===""?r:cv(r,u);d.classGroupId=l;return}if(typeof u=="function"){if(mx(u)){Xd(u(o),r,l,o);return}r.validators.push({validator:u,classGroupId:l});return}Object.entries(u).forEach(([d,h])=>{Xd(h,cv(r,d),l,o)})})},cv=(a,r)=>{let l=a;return r.split(wf).forEach(o=>{l.nextPart.has(o)||l.nextPart.set(o,{nextPart:new Map,validators:[]}),l=l.nextPart.get(o)}),l},mx=a=>a.isThemeGetter,gx=(a,r)=>r?a.map(([l,o])=>{const u=o.map(d=>typeof d=="string"?r+d:typeof d=="object"?Object.fromEntries(Object.entries(d).map(([h,p])=>[r+h,p])):d);return[l,u]}):a,vx=a=>{if(a<1)return{get:()=>{},set:()=>{}};let r=0,l=new Map,o=new Map;const u=(d,h)=>{l.set(d,h),r++,r>a&&(r=0,o=l,l=new Map)};return{get(d){let h=l.get(d);if(h!==void 0)return h;if((h=o.get(d))!==void 0)return u(d,h),h},set(d,h){l.has(d)?l.set(d,h):u(d,h)}}},R0="!",yx=a=>{const{separator:r,experimentalParseClassName:l}=a,o=r.length===1,u=r[0],d=r.length,h=p=>{const m=[];let v=0,x=0,y;for(let R=0;R<p.length;R++){let T=p[R];if(v===0){if(T===u&&(o||p.slice(R,R+d)===r)){m.push(p.slice(x,R)),x=R+d;continue}if(T==="/"){y=R;continue}}T==="["?v++:T==="]"&&v--}const _=m.length===0?p:p.substring(x),S=_.startsWith(R0),k=S?_.substring(1):_,z=y&&y>x?y-x:void 0;return{modifiers:m,hasImportantModifier:S,baseClassName:k,maybePostfixModifierPosition:z}};return l?p=>l({className:p,parseClassName:h}):h},bx=a=>{if(a.length<=1)return a;const r=[];let l=[];return a.forEach(o=>{o[0]==="["?(r.push(...l.sort(),o),l=[]):l.push(o)}),r.push(...l.sort()),r},wx=a=>({cache:vx(a.cacheSize),parseClassName:yx(a),...fx(a)}),xx=/\s+/,_x=(a,r)=>{const{parseClassName:l,getClassGroupId:o,getConflictingClassGroupIds:u}=r,d=[],h=a.trim().split(xx);let p="";for(let m=h.length-1;m>=0;m-=1){const v=h[m],{modifiers:x,hasImportantModifier:y,baseClassName:_,maybePostfixModifierPosition:S}=l(v);let k=!!S,z=o(k?_.substring(0,S):_);if(!z){if(!k){p=v+(p.length>0?" "+p:p);continue}if(z=o(_),!z){p=v+(p.length>0?" "+p:p);continue}k=!1}const R=bx(x).join(":"),T=y?R+R0:R,M=T+z;if(d.includes(M))continue;d.push(M);const q=u(z,k);for(let $=0;$<q.length;++$){const Z=q[$];d.push(T+Z)}p=v+(p.length>0?" "+p:p)}return p};function Sx(){let a=0,r,l,o="";for(;a<arguments.length;)(r=arguments[a++])&&(l=U0(r))&&(o&&(o+=" "),o+=l);return o}var U0=a=>{if(typeof a=="string")return a;let r,l="";for(let o=0;o<a.length;o++)a[o]&&(r=U0(a[o]))&&(l&&(l+=" "),l+=r);return l};function Tx(a,...r){let l,o,u,d=h;function h(m){const v=r.reduce((x,y)=>y(x),a());return l=wx(v),o=l.cache.get,u=l.cache.set,d=p,p(m)}function p(m){const v=o(m);if(v)return v;const x=_x(m,l);return u(m,x),x}return function(){return d(Sx.apply(null,arguments))}}var Je=a=>{const r=l=>l[a]||[];return r.isThemeGetter=!0,r},H0=/^\[(?:([a-z-]+):)?(.+)\]$/i,Cx=/^\d+\/\d+$/,kx=new Set(["px","full","screen"]),Ex=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Nx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ax=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Mx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Qn=a=>ti(a)||kx.has(a)||Cx.test(a),Ta=a=>ui(a,"length",Bx),ti=a=>!!a&&!Number.isNaN(Number(a)),id=a=>ui(a,"number",ti),rl=a=>!!a&&Number.isInteger(Number(a)),Dx=a=>a.endsWith("%")&&ti(a.slice(0,-1)),xe=a=>H0.test(a),Ca=a=>Ex.test(a),Ox=new Set(["length","size","percentage"]),Rx=a=>ui(a,Ox,j0),Ux=a=>ui(a,"position",j0),Hx=new Set(["image","url"]),jx=a=>ui(a,Hx,Xx),Lx=a=>ui(a,"",Yx),il=()=>!0,ui=(a,r,l)=>{const o=H0.exec(a);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):l(o[2]):!1},Bx=a=>Nx.test(a)&&!zx.test(a),j0=()=>!1,Yx=a=>Ax.test(a),Xx=a=>Mx.test(a),qx=()=>{const a=Je("colors"),r=Je("spacing"),l=Je("blur"),o=Je("brightness"),u=Je("borderColor"),d=Je("borderRadius"),h=Je("borderSpacing"),p=Je("borderWidth"),m=Je("contrast"),v=Je("grayscale"),x=Je("hueRotate"),y=Je("invert"),_=Je("gap"),S=Je("gradientColorStops"),k=Je("gradientColorStopPositions"),z=Je("inset"),R=Je("margin"),T=Je("opacity"),M=Je("padding"),q=Je("saturate"),$=Je("scale"),Z=Je("sepia"),K=Je("skew"),P=Je("space"),he=Je("translate"),ce=()=>["auto","contain","none"],ye=()=>["auto","hidden","clip","visible","scroll"],ue=()=>["auto",xe,r],re=()=>[xe,r],Xe=()=>["",Qn,Ta],je=()=>["auto",ti,xe],Ue=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],w=()=>["solid","dashed","dotted","double","none"],N=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",xe],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],C=()=>[ti,xe];return{cacheSize:500,separator:":",theme:{colors:[il],spacing:[Qn,Ta],blur:["none","",Ca,xe],brightness:C(),borderColor:[a],borderRadius:["none","","full",Ca,xe],borderSpacing:re(),borderWidth:Xe(),contrast:C(),grayscale:Q(),hueRotate:C(),invert:Q(),gap:re(),gradientColorStops:[a],gradientColorStopPositions:[Dx,Ta],inset:ue(),margin:ue(),opacity:C(),padding:re(),saturate:C(),scale:C(),sepia:Q(),skew:C(),space:re(),translate:re()},classGroups:{aspect:[{aspect:["auto","square","video",xe]}],container:["container"],columns:[{columns:[Ca]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ue(),xe]}],overflow:[{overflow:ye()}],"overflow-x":[{"overflow-x":ye()}],"overflow-y":[{"overflow-y":ye()}],overscroll:[{overscroll:ce()}],"overscroll-x":[{"overscroll-x":ce()}],"overscroll-y":[{"overscroll-y":ce()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[z]}],"inset-x":[{"inset-x":[z]}],"inset-y":[{"inset-y":[z]}],start:[{start:[z]}],end:[{end:[z]}],top:[{top:[z]}],right:[{right:[z]}],bottom:[{bottom:[z]}],left:[{left:[z]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",rl,xe]}],basis:[{basis:ue()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",xe]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",rl,xe]}],"grid-cols":[{"grid-cols":[il]}],"col-start-end":[{col:["auto",{span:["full",rl,xe]},xe]}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":[il]}],"row-start-end":[{row:["auto",{span:[rl,xe]},xe]}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",xe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",xe]}],gap:[{gap:[_]}],"gap-x":[{"gap-x":[_]}],"gap-y":[{"gap-y":[_]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[R]}],mx:[{mx:[R]}],my:[{my:[R]}],ms:[{ms:[R]}],me:[{me:[R]}],mt:[{mt:[R]}],mr:[{mr:[R]}],mb:[{mb:[R]}],ml:[{ml:[R]}],"space-x":[{"space-x":[P]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[P]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",xe,r]}],"min-w":[{"min-w":[xe,r,"min","max","fit"]}],"max-w":[{"max-w":[xe,r,"none","full","min","max","fit","prose",{screen:[Ca]},Ca]}],h:[{h:[xe,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[xe,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[xe,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[xe,r,"auto","min","max","fit"]}],"font-size":[{text:["base",Ca,Ta]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",id]}],"font-family":[{font:[il]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",xe]}],"line-clamp":[{"line-clamp":["none",ti,id]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Qn,xe]}],"list-image":[{"list-image":["none",xe]}],"list-style-type":[{list:["none","disc","decimal",xe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[T]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...w(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Qn,Ta]}],"underline-offset":[{"underline-offset":["auto",Qn,xe]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:re()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[T]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ue(),Ux]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Rx]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},jx]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[d]}],"rounded-s":[{"rounded-s":[d]}],"rounded-e":[{"rounded-e":[d]}],"rounded-t":[{"rounded-t":[d]}],"rounded-r":[{"rounded-r":[d]}],"rounded-b":[{"rounded-b":[d]}],"rounded-l":[{"rounded-l":[d]}],"rounded-ss":[{"rounded-ss":[d]}],"rounded-se":[{"rounded-se":[d]}],"rounded-ee":[{"rounded-ee":[d]}],"rounded-es":[{"rounded-es":[d]}],"rounded-tl":[{"rounded-tl":[d]}],"rounded-tr":[{"rounded-tr":[d]}],"rounded-br":[{"rounded-br":[d]}],"rounded-bl":[{"rounded-bl":[d]}],"border-w":[{border:[p]}],"border-w-x":[{"border-x":[p]}],"border-w-y":[{"border-y":[p]}],"border-w-s":[{"border-s":[p]}],"border-w-e":[{"border-e":[p]}],"border-w-t":[{"border-t":[p]}],"border-w-r":[{"border-r":[p]}],"border-w-b":[{"border-b":[p]}],"border-w-l":[{"border-l":[p]}],"border-opacity":[{"border-opacity":[T]}],"border-style":[{border:[...w(),"hidden"]}],"divide-x":[{"divide-x":[p]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[p]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[T]}],"divide-style":[{divide:w()}],"border-color":[{border:[u]}],"border-color-x":[{"border-x":[u]}],"border-color-y":[{"border-y":[u]}],"border-color-s":[{"border-s":[u]}],"border-color-e":[{"border-e":[u]}],"border-color-t":[{"border-t":[u]}],"border-color-r":[{"border-r":[u]}],"border-color-b":[{"border-b":[u]}],"border-color-l":[{"border-l":[u]}],"divide-color":[{divide:[u]}],"outline-style":[{outline:["",...w()]}],"outline-offset":[{"outline-offset":[Qn,xe]}],"outline-w":[{outline:[Qn,Ta]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:Xe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[T]}],"ring-offset-w":[{"ring-offset":[Qn,Ta]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",Ca,Lx]}],"shadow-color":[{shadow:[il]}],opacity:[{opacity:[T]}],"mix-blend":[{"mix-blend":[...N(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":N()}],filter:[{filter:["","none"]}],blur:[{blur:[l]}],brightness:[{brightness:[o]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Ca,xe]}],grayscale:[{grayscale:[v]}],"hue-rotate":[{"hue-rotate":[x]}],invert:[{invert:[y]}],saturate:[{saturate:[q]}],sepia:[{sepia:[Z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[l]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[v]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[x]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[T]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[h]}],"border-spacing-x":[{"border-spacing-x":[h]}],"border-spacing-y":[{"border-spacing-y":[h]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",xe]}],duration:[{duration:C()}],ease:[{ease:["linear","in","out","in-out",xe]}],delay:[{delay:C()}],animate:[{animate:["none","spin","ping","pulse","bounce",xe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[rl,xe]}],"translate-x":[{"translate-x":[he]}],"translate-y":[{"translate-y":[he]}],"skew-x":[{"skew-x":[K]}],"skew-y":[{"skew-y":[K]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",xe]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",xe]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":re()}],"scroll-mx":[{"scroll-mx":re()}],"scroll-my":[{"scroll-my":re()}],"scroll-ms":[{"scroll-ms":re()}],"scroll-me":[{"scroll-me":re()}],"scroll-mt":[{"scroll-mt":re()}],"scroll-mr":[{"scroll-mr":re()}],"scroll-mb":[{"scroll-mb":re()}],"scroll-ml":[{"scroll-ml":re()}],"scroll-p":[{"scroll-p":re()}],"scroll-px":[{"scroll-px":re()}],"scroll-py":[{"scroll-py":re()}],"scroll-ps":[{"scroll-ps":re()}],"scroll-pe":[{"scroll-pe":re()}],"scroll-pt":[{"scroll-pt":re()}],"scroll-pr":[{"scroll-pr":re()}],"scroll-pb":[{"scroll-pb":re()}],"scroll-pl":[{"scroll-pl":re()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",xe]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[Qn,Ta,id]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Vx=Tx(qx),D=(...a)=>Vx(dx(a));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var L0=(a,r)=>{let l=0;return o=>{const u=Date.now();if(u-l>=r)return l=u,a(o)}},Kn=a=>{if(!En)return null;try{const r=localStorage.getItem(a);return r?JSON.parse(r):null}catch{return null}},Lt=(a,r)=>{if(En)try{window.localStorage.setItem(a,JSON.stringify(r))}catch{}},uv=a=>{if(En)try{window.localStorage.removeItem(a)}catch{}},Fx=24,Gx=12,Sl=a=>{if(!a)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:r,type:l,elementType:o}=a;let u=bt(l);const d=[],h=[];if(yl(a)||r===Nl||r===El||l?.$$typeof===Symbol.for("react.memo")||o?.$$typeof===Symbol.for("react.memo")){const p=yl(a);h.push({type:"memo",title:p?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:p})}if(r===Fx&&h.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),r===As&&h.push({type:"suspense",title:"Component that can suspend while content is loading"}),r===Gx&&h.push({type:"profiler",title:"Component that measures rendering performance"}),typeof u=="string"){const p=/^(\w+)\((.*)\)$/;let m=u;for(;p.test(m);){const v=m.match(p);if(v?.[1]&&v?.[2])d.unshift(v[1]),m=v[2];else break}u=m}return{name:u||"Unknown",wrappers:d,wrapperTypes:h}},Us=ht(!1),qd=ht(null),Tn={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:ft.width,height:ft.height,position:{x:me,y:me}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:ft.width,height:ft.height,position:{x:me,y:me}},componentsTree:{width:gn}},$x=()=>{const a=Kn(Jn);return a?{corner:a.corner??Tn.corner,dimensions:a.dimensions??Tn.dimensions,lastDimensions:a.lastDimensions??a.dimensions??Tn.lastDimensions,componentsTree:a.componentsTree??Tn.componentsTree}:(Lt(Jn,{corner:Tn.corner,dimensions:Tn.dimensions,lastDimensions:Tn.lastDimensions,componentsTree:Tn.componentsTree}),Tn)},ne=ht($x()),ld=()=>{if(!En)return;const{dimensions:a}=ne.value,{width:r,height:l,position:o}=a;ne.value={...ne.value,dimensions:{isFullWidth:r>=window.innerWidth-me*2,isFullHeight:l>=window.innerHeight-me*2,width:r,height:l,position:o}}},Qe=ht({view:"none"}),Qx=Kn(us),It=ht(Qx??null);function Zx(){return!1}function xf(a){function r(l){return this.shouldComponentUpdate=Zx,rr(a,l)}return r.displayName=`Memo(${a.displayName||a.name})`,r.prototype.isReactComponent=!0,r._forwarded=!0,r}var Ix=a=>{const{count:r,getScrollElement:l,estimateSize:o,overscan:u=5}=a,[d,h]=Se(0),[p,m]=Se(0),v=oe(),x=oe(null),y=oe(null),_=o(),S=lt(T=>{if(!x.current)return;const M=T?.[0]?.contentRect.height??x.current.getBoundingClientRect().height;m(M)},[]),k=lt(()=>{y.current!==null&&cancelAnimationFrame(y.current),y.current=requestAnimationFrame(()=>{S(),y.current=null})},[S]);_e(()=>{const T=l();if(!T)return;x.current=T;const M=()=>{x.current&&h(x.current.scrollTop)};S(),v.current||(v.current=new ResizeObserver(()=>{k()})),v.current.observe(T),T.addEventListener("scroll",M,{passive:!0});const q=new MutationObserver(k);return q.observe(T,{attributes:!0,childList:!0,subtree:!0}),()=>{T.removeEventListener("scroll",M),v.current&&v.current.disconnect(),q.disconnect(),y.current!==null&&cancelAnimationFrame(y.current)}},[l,S,k]);const z=yn(()=>{const T=Math.floor(d/_),M=Math.ceil(p/_);return{start:Math.max(0,T-u),end:Math.min(r,T+M+u)}},[d,_,p,r,u]);return{virtualItems:yn(()=>{const T=[];for(let M=z.start;M<z.end;M++)T.push({key:M,index:M,start:M*_});return T},[z,_]),totalSize:r*_,scrollTop:d,containerHeight:p}};Kn("react-scann-pinned");var Jx=a=>{const r=[];let l=a;for(;l;){const o=l.elementType,u=typeof o=="function"?o.displayName||o.name:typeof o=="string"?o:"Unknown",d=l.index!==void 0?`[${l.index}]`:"";r.unshift(`${u}${d}`),l=l.return??null}return r.join("::")},Ja=new WeakMap,Kx=(a,r)=>{const l=r.bind(null,a);return document.addEventListener("scroll",l,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",l,{capture:!0})}},Wx={activeFlashes:new Map,create(a){const r=a.querySelector(".react-scan-flash-overlay"),l=r instanceof HTMLElement?r:(()=>{const u=document.createElement("div");u.className="react-scan-flash-overlay",a.appendChild(u);const d=Kx(a,()=>{a.querySelector(".react-scan-flash-overlay")&&this.create(a)});return this.activeFlashes.set(a,{element:a,overlay:u,scrollCleanup:d}),u})(),o=Ja.get(l);o&&(clearTimeout(o),Ja.delete(l)),requestAnimationFrame(()=>{l.style.transition="none",l.style.opacity="0.9";const u=setTimeout(()=>{l.style.transition="opacity 150ms ease-out",l.style.opacity="0";const d=setTimeout(()=>{l.parentNode&&l.parentNode.removeChild(l);const h=this.activeFlashes.get(a);h?.scrollCleanup&&h.scrollCleanup(),this.activeFlashes.delete(a),Ja.delete(l)},150);Ja.set(l,d)},300);Ja.set(l,u)})},cleanup(a){const r=this.activeFlashes.get(a);if(r){const l=Ja.get(r.overlay);l&&(clearTimeout(l),Ja.delete(r.overlay)),r.overlay.parentNode&&r.overlay.parentNode.removeChild(r.overlay),r.scrollCleanup&&r.scrollCleanup(),this.activeFlashes.delete(a)}},cleanupAll(){for(const[,a]of this.activeFlashes)this.cleanup(a.element)}},dv=1e3,B0={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},At=ht(B0),_f=ht(0),tr=[],Ka=null,Px=()=>{if(tr.length===0)return;const a=[...tr],{updates:r,totalUpdates:l,currentIndex:o,isViewingHistory:u}=At.value,d=[...r];let h=l;for(const{update:x}of a)d.length>=dv&&d.shift(),d.push(x),h++;const p=Math.max(0,h-dv);let m;u?o===l-1?m=d.length-1:o===0?m=0:p===0?m=o:m=o-1:m=d.length-1;const v=a[a.length-1];At.value={...At.value,latestFiber:v.fiber,updates:d,totalUpdates:h,windowOffset:p,currentIndex:m,isViewingHistory:u},tr=tr.slice(a.length)},Y0={showTimeline:()=>{At.value={...At.value,isVisible:!0}},hideTimeline:()=>{At.value={...At.value,isVisible:!1,currentIndex:At.value.updates.length-1}},updateFrame:(a,r)=>{At.value={...At.value,currentIndex:a,isViewingHistory:r}},updatePlaybackSpeed:a=>{At.value={...At.value,playbackSpeed:a}},addUpdate:(a,r)=>{if(tr.push({update:a,fiber:r}),!Ka){const l=()=>{Px(),Ka=null,tr.length>0&&(Ka=setTimeout(l,96))};Ka=setTimeout(l,96)}},reset:()=>{Ka&&(clearTimeout(Ka),Ka=null),tr=[],At.value=B0}},Et=ht({query:"",matches:[],currentMatchIndex:-1}),od=ht(!1),X0=(a,r=0,l=null)=>a.reduce((o,u,d)=>{const h=u.element?Jx(u.fiber):`${l}-${d}`,p=u.fiber?.type?P0(u.fiber):void 0,m={...u,depth:r,nodeId:h,parentId:l,fiber:u.fiber,renderData:p};return o.push(m),u.children?.length&&o.push(...X0(u.children,r+1,h)),o},[]),e2=a=>a.reduce((r,l)=>Math.max(r,l.depth),0),t2=(a,r)=>{if(r<=0)return 24;const d=Math.max(0,a-gn);if(d<24)return 0;const p=Math.min(d*.3,r*24)/r;return Math.max(0,Math.min(24,p))},n2=["memo","forwardRef","lazy","suspense"],q0=a=>{const r=a.match(/\[(.*?)\]/);if(!r)return null;const l=[],o=r[1].split(",");for(const u of o){const d=u.trim().toLowerCase();d&&l.push(d)}return l},a2=a=>{if(a.length===0)return!1;for(const r of a){let l=!1;for(const o of n2)if(o.toLowerCase().includes(r)){l=!0;break}if(!l)return!1}return!0},V0=(a,r)=>{if(a.length===0)return!0;if(!r.length)return!1;for(const l of a){let o=!1;for(const u of r)if(u.type.toLowerCase().includes(l)){o=!0;break}if(!o)return!1}return!0},r2=(a,r)=>yn(()=>{const{query:l,matches:o}=r,u=o.some(v=>v.nodeId===a.nodeId),d=q0(l)||[],h=l?l.replace(/\[.*?\]/,"").trim():"";if(!l||!u)return{highlightedText:f("span",{className:"truncate",children:a.label}),typeHighlight:!1};let p=!0;if(d.length>0)if(!a.fiber)p=!1;else{const{wrapperTypes:v}=Sl(a.fiber);p=V0(d,v)}let m=f("span",{className:"truncate",children:a.label});if(h)try{if(h.startsWith("/")&&h.endsWith("/")){const v=h.slice(1,-1),x=new RegExp(`(${v})`,"i"),y=a.label.split(x);m=f("span",{className:"tree-node-search-highlight",children:y.map((_,S)=>x.test(_)?f("span",{className:D("regex",{start:x.test(_)&&S===0,middle:x.test(_)&&S%2===1,end:x.test(_)&&S===y.length-1,"!ml-0":S===1}),children:_},`${a.nodeId}-${_}`):_)})}else{const v=a.label.toLowerCase(),x=h.toLowerCase(),y=v.indexOf(x);y>=0&&(m=f("span",{className:"tree-node-search-highlight",children:[a.label.slice(0,y),f("span",{className:"single",children:a.label.slice(y,y+h.length)}),a.label.slice(y+h.length)]}))}}catch{}return{highlightedText:m,typeHighlight:p&&d.length>0}},[a.label,a.nodeId,a.fiber,r]),fv=a=>a>0?a<.1-Number.EPSILON?"< 0.1":a<1e3?Number(a.toFixed(1)).toString():`${(a/1e3).toFixed(1)}k`:"0",i2=({node:a,nodeIndex:r,hasChildren:l,isCollapsed:o,handleTreeNodeClick:u,handleTreeNodeToggle:d,searchValue:h})=>{const p=oe(null),m=oe(a.renderData?.renderCount??0),{highlightedText:v,typeHighlight:x}=r2(a,h);_e(()=>{const S=a.renderData?.renderCount,k=p.current;!k||!m.current||!S||m.current===S||(k.classList.remove("count-flash"),k.offsetWidth,k.classList.add("count-flash"),m.current=S)},[a.renderData?.renderCount]);const y=yn(()=>{if(!a.renderData)return null;const{selfTime:S,totalTime:k,renderCount:z}=a.renderData;return z?f("span",{className:D("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:f("span",{ref:p,title:`Self time: ${fv(S)}ms
Total time: ${fv(k)}ms`,className:"count-badge",children:["×",z]})}):null},[a.renderData]),_=yn(()=>{if(!a.fiber)return null;const{wrapperTypes:S}=Sl(a.fiber),k=S[0];return f("span",{className:D("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[k&&f(ze,{children:[f("span",{title:k?.title,className:D("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",k.type==="memo"&&"bg-[#8e61e3] text-white",x&&"bg-yellow-300 text-black"),children:k.type},k.type),k.compiler&&f("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),S.length>1&&`×${S.length}`,y]})},[a.fiber,x,y]);return f("button",{type:"button",title:a.title,"data-index":r,className:D("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:u,children:[f("button",{type:"button","data-index":r,onClick:d,className:D("w-6 h-6 flex items-center justify-center","text-left"),children:l&&f(nt,{name:"icon-chevron-right",size:12,className:D("transition-transform",!o&&"rotate-90")})}),v,_]})},l2=()=>{const a=oe(null),r=oe(null),l=oe(null),o=oe(null),u=oe(null),d=oe(0),h=oe(!1),p=oe(!1),m=oe(null),[v,x]=Se([]),[y,_]=Se(new Set),[S,k]=Se(void 0),[z,R]=Se(Et.value),T=yn(()=>{const w=[],N=v,U=new Map(N.map(Q=>[Q.nodeId,Q]));for(const Q of N){let J=!0,C=Q;for(;C.parentId;){const H=U.get(C.parentId);if(!H)break;if(y.has(H.nodeId)){J=!1;break}C=H}J&&w.push(Q)}return w},[y,v]),M=28,{virtualItems:q,totalSize:$}=Ix({count:T.length,getScrollElement:()=>a.current,estimateSize:()=>M,overscan:5}),Z=lt(w=>{h.current=!0,o.current?.blur(),od.value=!0;const{parentCompositeFiber:N}=nr(w);if(!N)return;ee.inspectState.value={kind:"focused",focusedDomElement:w,fiber:N};const U=T.findIndex(Q=>Q.element===w);if(U!==-1){k(U);const Q=U*M,J=a.current;if(J){const C=J.clientHeight,H=J.scrollTop;(Q<H||Q+M>H+C)&&J.scrollTo({top:Math.max(0,Q-C/2),behavior:"instant"})}}},[T]),K=lt(w=>{const N=w.currentTarget,U=Number(N.dataset.index);if(Number.isNaN(U))return;const Q=T[U].element;Q&&Z(Q)},[T,Z]),P=lt(w=>{_(N=>{const U=new Set(N);return U.has(w)?U.delete(w):U.add(w),U})},[]),he=lt(w=>{w.stopPropagation();const N=w.target,U=Number(N.dataset.index);if(Number.isNaN(U))return;const Q=T[U].nodeId;P(Q)},[T,P]),ce=lt(w=>{l.current?.classList.remove("!border-red-500");const N=[];if(!w){Et.value={query:w,matches:N,currentMatchIndex:-1};return}if(w.includes("[")&&!w.includes("]")&&w.length>w.indexOf("[")+1){l.current?.classList.add("!border-red-500");return}const U=q0(w)||[];if(w.includes("[")&&!a2(U)){l.current?.classList.add("!border-red-500");return}const Q=w.replace(/\[.*?\]/,"").trim(),J=/^\/.*\/$/.test(Q);let C=H=>!1;if(Q.startsWith("/")&&!J&&Q.length>1){l.current?.classList.add("!border-red-500");return}if(J)try{const H=Q.slice(1,-1),F=new RegExp(H,"i");C=I=>F.test(I)}catch{l.current?.classList.add("!border-red-500");return}else if(Q){const H=Q.toLowerCase();C=F=>F.toLowerCase().includes(H)}for(const H of v){let F=!0;if(Q&&(F=C(H.label)),F&&U.length>0)if(!H.fiber)F=!1;else{const{wrapperTypes:I}=Sl(H.fiber);F=V0(U,I)}F&&N.push(H)}if(Et.value={query:w,matches:N,currentMatchIndex:N.length>0?0:-1},N.length>0){const H=N[0],F=T.findIndex(I=>I.nodeId===H.nodeId);if(F!==-1){const I=F*M,W=a.current;if(W){const ae=W.clientHeight;W.scrollTo({top:Math.max(0,I-ae/2),behavior:"instant"})}}}},[v,T]),ye=lt(w=>{const N=w.currentTarget;N&&ce(N.value)},[ce]),ue=lt(w=>{const{matches:N,currentMatchIndex:U}=Et.value;if(N.length===0)return;const Q=w==="next"?(U+1)%N.length:(U-1+N.length)%N.length;Et.value={...Et.value,currentMatchIndex:Q};const J=N[Q],C=T.findIndex(H=>H.nodeId===J.nodeId);if(C!==-1){k(C);const H=C*M,F=a.current;if(F){const I=F.clientHeight;F.scrollTo({top:Math.max(0,H-I/2),behavior:"instant"})}}},[T]),re=lt(w=>{if(r.current&&(r.current.style.width=`${w}px`),a.current){a.current.style.width=`${w}px`;const N=t2(w,d.current);a.current.style.setProperty("--indentation-size",`${N}px`)}},[]),Xe=lt(w=>{if(!m.current)return;const N=ne.value.dimensions.width,U=Math.floor(N-gn/2);m.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),w<=gn?m.current.classList.add("cursor-w-resize"):w>=U?m.current.classList.add("cursor-e-resize"):m.current.classList.add("cursor-ew-resize")},[]),je=lt(w=>{if(w.preventDefault(),w.stopPropagation(),!a.current)return;a.current.style.setProperty("pointer-events","none"),p.current=!0;const N=w.clientX,U=a.current.offsetWidth,Q=ne.value.dimensions.width,J=Math.floor(Q-gn/2);Xe(U);const C=F=>{const I=N-F.clientX,W=U+I;Xe(W);const ae=Math.min(J,Math.max(gn,W));re(ae)},H=()=>{a.current&&(a.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",H),ne.value={...ne.value,componentsTree:{...ne.value.componentsTree,width:a.current.offsetWidth}},Lt(Jn,ne.value),p.current=!1)};document.addEventListener("pointermove",C),document.addEventListener("pointerup",H)},[re,Xe]);_e(()=>{if(!a.current)return;const w=a.current.offsetWidth;return Xe(w),ne.subscribe(()=>{a.current&&Xe(a.current.offsetWidth)})},[Xe]);const Ue=lt(()=>{h.current=!1},[]);return _e(()=>{let w=!0;const N=H=>{const F=new Map,I=[];for(const{element:W,name:ae,fiber:fe}of H){if(!W)continue;let Me=ae;const{name:be,wrappers:pt}=Sl(fe);be&&(pt.length>0?Me=`${pt.join("(")}(${be})${")".repeat(pt.length)}`:Me=be),F.set(W,{label:be||ae,title:Me,children:[],element:W,fiber:fe})}for(const{element:W,depth:ae}of H){if(!W)continue;const fe=F.get(W);if(fe)if(ae===0)I.push(fe);else{let Me=W.parentElement;for(;Me;){const be=F.get(Me);if(be){be.children=be.children||[],be.children.push(fe);break}Me=Me.parentElement}}}return I},U=()=>{const H=u.current;if(!H)return;const F=k2(),I=N(F);if(I.length>0){const W=X0(I),ae=e2(W);if(d.current=ae,re(ne.value.componentsTree.width),x(W),w){w=!1;const fe=W.findIndex(Me=>Me.element===H);if(fe!==-1){const Me=fe*M,be=a.current;be&&setTimeout(()=>{be.scrollTo({top:Me,behavior:"instant"})},96)}}}},Q=ee.inspectState.subscribe(H=>{if(H.kind==="focused"){if(od.value)return;ce(""),u.current=H.focusedDomElement,U()}});let J=0;const C=_f.subscribe(()=>{if(ee.inspectState.value.kind==="focused"){if(cancelAnimationFrame(J),p.current)return;J=requestAnimationFrame(()=>{od.value=!1,U()})}});return()=>{Q(),C(),Et.value={query:"",matches:[],currentMatchIndex:-1}}},[]),_e(()=>{const w=N=>{if(h.current&&S)switch(N.key){case"ArrowUp":{if(N.preventDefault(),N.stopPropagation(),S>0){const U=T[S-1];U?.element&&Z(U.element)}return}case"ArrowDown":{if(N.preventDefault(),N.stopPropagation(),S<T.length-1){const U=T[S+1];U?.element&&Z(U.element)}return}case"ArrowLeft":{N.preventDefault(),N.stopPropagation();const U=T[S];U?.nodeId&&P(U.nodeId);return}case"ArrowRight":{N.preventDefault(),N.stopPropagation();const U=T[S];U?.nodeId&&P(U.nodeId);return}}};return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[S,T,Z,P]),_e(()=>Et.subscribe(R),[]),_e(()=>ne.subscribe(N=>{r.current?.style.setProperty("transition","width 0.1s"),re(N.componentsTree.width),setTimeout(()=>{r.current?.style.removeProperty("transition")},500)}),[]),f("div",{className:"react-scan-components-tree flex",children:[f("div",{ref:m,onPointerDown:je,className:"relative resize-v-line",children:f("span",{children:f(nt,{name:"icon-ellipsis",size:18})})}),f("div",{ref:r,className:"flex flex-col h-full",children:[f("div",{className:"p-2 border-b border-[#1e1e1e]",children:f("div",{ref:l,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:D("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[f(nt,{name:"icon-search",size:12,className:" text-neutral-500"}),f("div",{className:"relative flex-1 h-7 overflow-hidden",children:f("input",{ref:o,type:"text",value:Et.value.query,onClick:w=>{w.stopPropagation(),w.currentTarget.focus()},onPointerDown:w=>{w.stopPropagation()},onKeyDown:w=>{w.key==="Escape"&&w.currentTarget.blur(),Et.value.matches.length&&(w.key==="Enter"&&w.shiftKey?ue("prev"):w.key==="Enter"&&(w.metaKey||w.ctrlKey?(w.preventDefault(),w.stopPropagation(),Z(Et.value.matches[Et.value.currentMatchIndex].element),w.currentTarget.focus()):ue("next")))},onChange:ye,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),Et.value.query?f(ze,{children:[f("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[Et.value.currentMatchIndex+1,"|",Et.value.matches.length]}),!!Et.value.matches.length&&f(ze,{children:[f("button",{type:"button",onClick:w=>{w.stopPropagation(),ue("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),f("button",{type:"button",onClick:w=>{w.stopPropagation(),ue("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),f("button",{type:"button",onClick:w=>{w.stopPropagation(),ce("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-close",size:12})})]}):!!v.length&&f("span",{className:"text-xs text-neutral-500",children:v.length})]})}),f("div",{className:"flex-1 overflow-hidden",children:f("div",{ref:a,onPointerLeave:Ue,className:"tree h-full overflow-auto will-change-transform",children:f("div",{className:"relative w-full",style:{height:$},children:q.map(w=>{const N=T[w.index];if(!N)return null;const U=ee.inspectState.value.kind==="focused"&&N.element===ee.inspectState.value.focusedDomElement,Q=w.index===S;return f("div",{className:D("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(U||Q)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:w.start,height:M},children:f("div",{className:"w-full h-full",style:{paddingLeft:`calc(${N.depth} * var(--indentation-size))`},children:f(i2,{node:N,nodeIndex:w.index,hasChildren:!!N.children?.length,isCollapsed:y.has(N.nodeId),handleTreeNodeClick:K,handleTreeNodeToggle:he,searchValue:z})})},N.nodeId)})})})})]})]})},ys=Rs(({text:a,children:r,onCopy:l,className:o,iconSize:u=14})=>{const[d,h]=Se(!1);_e(()=>{if(d){const v=setTimeout(()=>h(!1),600);return()=>{clearTimeout(v)}}},[d]);const p=lt(v=>{v.preventDefault(),v.stopPropagation(),navigator.clipboard.writeText(a).then(()=>{h(!0),l?.(!0,a)},()=>{l?.(!1,a)})},[a,l]),m=f("button",{onClick:p,type:"button",className:D("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${u}px]`,o),children:f(nt,{name:`icon-${d?"check":"copy"}`,size:[u],className:D(d&&"text-green-500")})});return r?r({ClipboardIcon:m,onClick:p}):m}),o2=({length:a,expanded:r,onToggle:l,isNegative:o})=>f("div",{className:"flex items-center gap-1",children:[f("button",{type:"button",onClick:l,className:"flex items-center p-0 opacity-50",children:f(nt,{name:"icon-chevron-right",size:12,className:D("transition-[color,transform]",o?"text-[#f87171]":"text-[#4ade80]",r&&"rotate-90")})}),f("span",{children:["Array(",a,")"]})]}),Vd=({value:a,path:r,isNegative:l})=>{const[o,u]=Se(!1);if(!(a!==null&&typeof a=="object"&&!(a instanceof Date)))return f("div",{className:"flex items-center gap-1",children:[f("span",{className:"text-gray-500",children:[r,":"]}),f("span",{className:"truncate",children:_s(a)})]});const h=Object.entries(a);return f("div",{className:"flex flex-col",children:[f("div",{className:"flex items-center gap-1",children:[f("button",{type:"button",onClick:()=>u(!o),className:"flex items-center p-0 opacity-50",children:f(nt,{name:"icon-chevron-right",size:12,className:D("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",o&&"rotate-90")})}),f("span",{className:"text-gray-500",children:[r,":"]}),!o&&f("span",{className:"truncate",children:a instanceof Date?_s(a):`{${Object.keys(a).join(", ")}}`})]}),o&&f("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:h.map(([p,m])=>f(Vd,{value:m,path:p,isNegative:l},p))})]})},bs=({value:a,expanded:r,onToggle:l,isNegative:o})=>{const{value:u,error:d}=z2(a);return d?f("span",{className:"text-gray-500 font-italic",children:d}):u!==null&&typeof u=="object"&&!(u instanceof Promise)?Array.isArray(u)?f("div",{className:"flex flex-col gap-1 relative",children:[f(o2,{length:u.length,expanded:r,onToggle:l,isNegative:o}),r&&f("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map((p,m)=>f(Vd,{value:p,path:m.toString(),isNegative:o},m.toString()))}),f(ys,{text:vv(u),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:p})=>f(ze,{children:p})})]}):f("div",{className:"flex items-start gap-1 relative",children:[f("button",{type:"button",onClick:l,className:D("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:f(nt,{name:"icon-chevron-right",size:12,className:D("transition-[color,transform]",o?"text-[#f87171]":"text-[#4ade80]",r&&"rotate-90")})}),f("div",{className:"flex-1",children:r?f("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(u).map(([p,m])=>f(Vd,{value:m,path:p,isNegative:o},p))}):f("span",{children:_s(u)})}),f(ys,{text:vv(u),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:p})=>f(ze,{children:p})})]}):f("span",{children:_s(u)})},s2=50;ht({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Fd=a=>{switch(a.kind){case"initialized":return a.changes.currentValue;case"partially-initialized":return a.value}},hv=(a,r)=>{for(const l of a){const o=r.get(l.name);if(o){r.set(o.name,{count:o.count+1,currentValue:l.value,id:o.name,lastUpdated:Date.now(),name:o.name,previousValue:l.prevValue});continue}r.set(l.name,{count:1,currentValue:l.value,id:l.name,lastUpdated:Date.now(),name:l.name,previousValue:l.prevValue})}},c2=(a,r)=>{for(const l of a){const o=r.contextChanges.get(l.contextType);if(o){if(Aa(Fd(o),l.value))continue;if(o.kind==="partially-initialized"){r.contextChanges.set(l.contextType,{kind:"initialized",changes:{count:1,currentValue:l.value,id:l.contextType.toString(),lastUpdated:Date.now(),name:l.name,previousValue:o.value}});continue}r.contextChanges.set(l.contextType,{kind:"initialized",changes:{count:o.changes.count+1,currentValue:l.value,id:l.contextType.toString(),lastUpdated:Date.now(),name:l.name,previousValue:o.changes.currentValue}});continue}r.contextChanges.set(l.contextType,{kind:"partially-initialized",id:l.contextType.toString(),lastUpdated:Date.now(),name:l.name,value:l.value})}},u2=a=>{const r={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return a.forEach(l=>{c2(l.contextChanges,r),hv(l.stateChanges,r.stateChanges),hv(l.propsChanges,r.propsChanges)}),r},pv=(a,r)=>{const l=new Map;return a.forEach((o,u)=>{l.set(u,o)}),r.forEach((o,u)=>{const d=l.get(u);if(!d){l.set(u,o);return}l.set(u,{count:d.count+o.count,currentValue:o.currentValue,id:o.id,lastUpdated:o.lastUpdated,name:o.name,previousValue:o.previousValue})}),l},d2=(a,r)=>{const l=new Map;return a.contextChanges.forEach((o,u)=>{l.set(u,o)}),r.contextChanges.forEach((o,u)=>{const d=l.get(u);if(!d){l.set(u,o);return}if(Fd(o)!==Fd(d))switch(d.kind){case"initialized":switch(o.kind){case"initialized":{l.set(u,{kind:"initialized",changes:{...o.changes,count:o.changes.count+d.changes.count+1,currentValue:o.changes.currentValue,previousValue:o.changes.previousValue}});return}case"partially-initialized":{l.set(u,{kind:"initialized",changes:{count:d.changes.count+1,currentValue:o.value,id:o.id,lastUpdated:o.lastUpdated,name:o.name,previousValue:d.changes.currentValue}});return}}case"partially-initialized":switch(o.kind){case"initialized":{l.set(u,{kind:"initialized",changes:{count:o.changes.count+1,currentValue:o.changes.currentValue,id:o.changes.id,lastUpdated:o.changes.lastUpdated,name:o.changes.name,previousValue:d.value}});return}case"partially-initialized":{l.set(u,{kind:"initialized",changes:{count:1,currentValue:o.value,id:o.id,lastUpdated:o.lastUpdated,name:o.name,previousValue:d.value}});return}}}}),l},f2=(a,r)=>{const l=d2(a,r),o=pv(a.propsChanges,r.propsChanges),u=pv(a.stateChanges,r.stateChanges);return{contextChanges:l,propsChanges:o,stateChanges:u}},Gd=a=>Array.from(a.propsChanges.values()).reduce((r,l)=>r+l.count,0)+Array.from(a.stateChanges.values()).reduce((r,l)=>r+l.count,0)+Array.from(a.contextChanges.values()).filter(r=>r.kind==="initialized").reduce((r,l)=>r+l.changes.count,0),h2=a=>{const r=oe({queue:[]}),[l,o]=Se({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),u=ee.inspectState.value.kind==="focused"?ee.inspectState.value.fiber:null,d=u?za(u):null;return _e(()=>{const h=setInterval(()=>{r.current.queue.length!==0&&(o(p=>{const m=u2(r.current.queue),v=f2(p,m);return Gd(p),Gd(v),v}),r.current.queue=[])},s2);return()=>{clearInterval(h)}},[u]),_e(()=>{if(!d)return;const h=m=>{r.current?.queue.push(m)};let p=ee.changesListeners.get(d);return p||(p=[],ee.changesListeners.set(d,p)),p.push(h),()=>{o({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),r.current.queue=[],ee.changesListeners.set(d,ee.changesListeners.get(d)?.filter(m=>m!==h)??[])}},[d]),_e(()=>()=>{o({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),r.current.queue=[]},[d]),l},ws=a=>{if(a==null)return{value:a};if(typeof a=="function")return{value:a};if(typeof a!="object")return{value:a};if(ai(a))return{value:"Promise"};try{const r=Object.getPrototypeOf(a);return r===Promise.prototype||r?.constructor?.name==="Promise"?{value:"Promise"}:{value:a}}catch{return{value:null,error:"Error accessing value"}}},p2=Rs(()=>{const[a,r]=Se(!0),l=h2(),[o,u]=Se(!1),d=Gd(l)>0;_e(()=>{if(!o&&d){const m=setTimeout(()=>{u(!0),requestAnimationFrame(()=>{r(!0)})},0);return()=>clearTimeout(m)}},[o,d]);const h=new Map(Array.from(l.contextChanges.entries()).filter(([,m])=>m.kind==="initialized").map(([m,v])=>[m,v.kind==="partially-initialized"?null:v.changes])),p=ee.inspectState.value.kind==="focused"?ee.inspectState.value.fiber:null;if(p)return f(ze,{children:[f(g2,{}),f("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[f("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[f("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",f("span",{className:"text-[#A855F7]",children:bt(p)})," ","render?"]}),!d&&f("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[f("div",{children:"No changes detected since selecting"}),f("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),f("div",{className:D("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[f(sd,{changes:l.propsChanges,title:"Changed Props",isExpanded:a}),f(sd,{renderName:m=>m2(m,bt(or(p))??"Unknown Component"),changes:l.stateChanges,title:"Changed State",isExpanded:a}),f(sd,{changes:h,title:"Changed Context",isExpanded:a})]})]})]})}),m2=(a,r)=>{if(Number.isNaN(Number(a)))return a;const l=Number.parseInt(a);return f("span",{className:"truncate",children:[f("span",{className:"text-white",children:[l,(u=>{const d=u%10,h=u%100;if(h>=11&&h<=13)return"th";switch(d){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(l)," hook"," "]}),f("span",{style:{color:"#666"},children:["called in ",f("i",{className:"text-[#A855F7] truncate",children:r})]})]})},g2=Rs(()=>{const a=oe(null),r=oe(null),l=oe(null),o=oe({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return _e(()=>{const u=L0(()=>{const h=[];a.current?.dataset.flash==="true"&&h.push(a.current),r.current?.dataset.flash==="true"&&h.push(r.current),l.current?.dataset.flash==="true"&&h.push(l.current);for(const p of h)p.classList.remove("count-flash-white"),p.offsetWidth,p.classList.add("count-flash-white")},400);return At.subscribe(h=>{if(!a.current||!r.current||!l.current)return;const{currentIndex:p,updates:m}=h,v=m[p];!v||p===0||(u(),o.current={isPropsChanged:(v.props?.changes?.size??0)>0,isStateChanged:(v.state?.changes?.size??0)>0,isContextChanged:(v.context?.changes?.size??0)>0},a.current.dataset.flash!=="true"&&(a.current.dataset.flash=o.current.isPropsChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=o.current.isStateChanged.toString()),l.current.dataset.flash!=="true"&&(l.current.dataset.flash=o.current.isContextChanged.toString()))})},[]),f("button",{type:"button",className:D("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:f("div",{className:D("flex-1 react-scan-expandable"),children:f("div",{className:"overflow-hidden",children:f("div",{className:"flex items-center whitespace-nowrap",children:[f("div",{className:"flex items-center gap-x-2",children:"What changed?"}),f("div",{className:D("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[f("div",{ref:a,children:"props"}),f("div",{ref:r,children:"state"}),f("div",{ref:l,children:"context"})]})]})})})})}),v2=a=>a,sd=Rs(({title:a,changes:r,renderName:l=v2})=>{const[o,u]=Se(new Set),[d,h]=Se(new Set),p=Array.from(r.entries());return r.size===0?null:f("div",{children:[f("div",{className:"text-xs text-[#888] mb-1.5",children:a}),f("div",{className:"flex flex-col gap-2",children:p.map(([m,v])=>{const x=d.has(String(m)),{value:y,error:_}=ws(v.previousValue),{value:S,error:k}=ws(v.currentValue),z=Q0(y,S);return f("div",{children:[f("button",{onClick:()=>{h(R=>{const T=new Set(R);return T.has(String(m))?T.delete(String(m)):T.add(String(m)),T})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:f("div",{className:"flex items-center gap-1.5 flex-1",children:[f(nt,{name:"icon-chevron-right",size:12,className:D("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":x})}),f("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[l(v.name),f(x2,{count:v.count,isFunction:typeof v.currentValue=="function",showWarning:z.changes.length===0,forceFlash:!0})]})]})}),f("div",{className:D("react-scan-expandable",{"react-scan-expanded":x}),children:f("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:f("div",{className:"flex flex-col gap-0.5",children:_||k?f(y2,{currError:k,prevError:_}):z.changes.length>0?f(b2,{change:v,diff:z,expandedFns:o,renderName:l,setExpandedFns:u,title:a}):f(w2,{currValue:S,entryKey:m,expandedFns:o,prevValue:y,setExpandedFns:u})})})})]},m)})})]})}),y2=({prevError:a,currError:r})=>f(ze,{children:[a&&f("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:a}),r&&f("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:r})]}),b2=({diff:a,title:r,renderName:l,change:o,expandedFns:u,setExpandedFns:d})=>a.changes.map((h,p)=>{const{value:m,error:v}=ws(h.prevValue),{value:x,error:y}=ws(h.currentValue),_=typeof m=="function"||typeof x=="function";let S;return r==="Props"&&(S=h.path.length>0?`${l(String(o.name))}.${hn(h.path)}`:void 0),r==="State"&&h.path.length>0&&(S=`state.${hn(h.path)}`),S||(S=hn(h.path)),f("div",{className:D("flex flex-col gap-y-1",p<a.changes.length-1&&"mb-4"),children:[S&&f("div",{className:"text-[#666] text-[10px]",children:S}),f("button",{type:"button",className:D("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",_&&"cursor-pointer"),onClick:_?()=>{const k=`${hn(h.path)}-prev`;d(z=>{const R=new Set(z);return R.has(k)?R.delete(k):R.add(k),R})}:void 0,children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),f("span",{className:"flex-1 whitespace-nowrap font-mono",children:v?f("span",{className:"italic text-[#f87171]",children:v}):_?f("div",{className:"flex gap-1 items-start flex-col",children:[f("div",{className:"flex gap-1 items-start w-full",children:[f("span",{className:"flex-1 max-h-40",children:Qd(m,u.has(`${hn(h.path)}-prev`))}),typeof m=="function"&&f(ys,{text:m.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:k})=>f(ze,{children:k})})]}),m?.toString()===x?.toString()&&f("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):f(bs,{value:m,expanded:u.has(`${hn(h.path)}-prev`),onToggle:()=>{const k=`${hn(h.path)}-prev`;d(z=>{const R=new Set(z);return R.has(k)?R.delete(k):R.add(k),R})},isNegative:!0})})]}),f("button",{type:"button",className:D("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",_&&"cursor-pointer"),onClick:_?()=>{const k=`${hn(h.path)}-current`;d(z=>{const R=new Set(z);return R.has(k)?R.delete(k):R.add(k),R})}:void 0,children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),f("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:y?f("span",{className:"italic text-[#4ade80]",children:y}):_?f("div",{className:"flex gap-1 items-start flex-col",children:[f("div",{className:"flex gap-1 items-start w-full",children:[f("span",{className:"flex-1",children:Qd(x,u.has(`${hn(h.path)}-current`))}),typeof x=="function"&&f(ys,{text:x.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:k})=>f(ze,{children:k})})]}),m?.toString()===x?.toString()&&f("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):f(bs,{value:x,expanded:u.has(`${hn(h.path)}-current`),onToggle:()=>{const k=`${hn(h.path)}-current`;d(z=>{const R=new Set(z);return R.has(k)?R.delete(k):R.add(k),R})},isNegative:!1})})]})]},`${S}-${o.name}-${p}`)}),w2=({prevValue:a,currValue:r,entryKey:l,expandedFns:o,setExpandedFns:u})=>f(ze,{children:[f("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),f("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:f(bs,{value:a,expanded:o.has(`${String(l)}-prev`),onToggle:()=>{const d=`${String(l)}-prev`;u(h=>{const p=new Set(h);return p.has(d)?p.delete(d):p.add(d),p})},isNegative:!0})})]}),f("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),f("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:f(bs,{value:r,expanded:o.has(`${String(l)}-current`),onToggle:()=>{const d=`${String(l)}-current`;u(h=>{const p=new Set(h);return p.has(d)?p.delete(d):p.add(d),p})},isNegative:!1})})]}),typeof r=="object"&&r!==null&&f("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[f(nt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),f("span",{children:"Reference changed but objects are structurally the same"})]})]}),x2=({count:a,forceFlash:r,isFunction:l,showWarning:o})=>{const u=oe(!0),d=oe(null),h=oe(a);return _e(()=>{const p=d.current;!p||h.current===a||(p.classList.remove("count-flash"),p.offsetWidth,p.classList.add("count-flash"),h.current=a)},[a]),_e(()=>{if(u.current){u.current=!1;return}if(r){let p=setTimeout(()=>{d.current?.classList.add("count-flash-white"),p=setTimeout(()=>{d.current?.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(p)}}},[r]),f("div",{ref:d,className:"count-badge",children:[o&&f(nt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),l&&f(nt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",a]})},Ea={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Ea.lastRendered.clear(),Ea.expandedPaths.clear(),Wx.cleanupAll(),O2(),Y0.reset()}},F0=class extends cn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Ea.cleanup()}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){return this.state.hasError?f("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[f("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[f(nt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),f("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),f("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},_2=cr(()=>D("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Us.value&&"opacity-100 delay-300 pointer-events-auto")),S2=xf(()=>{const a=oe(null),r=l=>{if(!l)return;a.current=l;const{data:o,shouldUpdate:u}=U2(l);if(u){const d={timestamp:Date.now(),fiberInfo:A2(l),props:o.fiberProps,state:o.fiberState,context:o.fiberContext,stateNames:D2(l)};Y0.addUpdate(d,l)}};return _l(()=>{const l=ee.inspectState.value;xl(()=>{if(l.kind!=="focused"||!l.focusedDomElement){a.current=null,Ea.cleanup();return}l.kind==="focused"&&(Us.value=!1);const{parentCompositeFiber:o}=gv(l.focusedDomElement,l.fiber);if(!o){ee.inspectState.value={kind:"inspect-off"},Qe.value={view:"none"};return}a.current?.type!==o.type&&(a.current=o,Ea.cleanup(),r(o))})}),_l(()=>{_f.value,xl(()=>{const l=ee.inspectState.value;if(l.kind!=="focused"||!l.focusedDomElement){a.current=null,Ea.cleanup();return}const{parentCompositeFiber:o}=gv(l.focusedDomElement,l.fiber);if(!o){ee.inspectState.value={kind:"inspect-off"},Qe.value={view:"none"};return}r(o),l.focusedDomElement.isConnected||(a.current=null,Ea.cleanup(),ee.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),_e(()=>()=>{Ea.cleanup()},[]),f(F0,{children:f("div",{className:_2,children:f("div",{className:"w-full h-full",children:f(p2,{})})})})}),T2=xf(()=>ee.inspectState.value.kind!=="focused"?null:f(F0,{children:[f(S2,{}),f(l2,{})]})),G0=a=>{if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!r?.renderers)return null;for(const[,l]of Array.from(r.renderers))try{const o=l.findFiberByHostInstance?.(a);if(o)return o}catch{}}if("_reactRootContainer"in a)return a._reactRootContainer?._internalRoot?.current?.child??null;for(const r in a)if(r.startsWith("__reactInternalInstance$")||r.startsWith("__reactFiber"))return a[r];return null},Sf=a=>{let r=a;for(;r;){if(r.stateNode instanceof Element)return r.stateNode;if(!r.child)break;r=r.child}for(;r;){if(r.stateNode instanceof Element)return r.stateNode;if(!r.return)break;r=r.return}return null},Tf=a=>{if(!a)return null;try{const r=G0(a);if(!r)return null;const l=ni(r);return l?l[0]:null}catch{return null}},ni=a=>{let r=a,l=null;for(;r;){if(Ms(r))return[r,l];vl(r)&&!l&&(l=r),r=r.return}return null},mv=(a,r)=>!!t0(r,o=>o===a),C2=async a=>{const r=Tf(a);if(!r)return null;const l=Sf(r);if(!l)return null;const o=(await cx([l])).get(l);return o||null},nr=a=>{const r=Tf(a);if(!r)return{};if(!Sf(r))return{};const o=ni(r);if(!o)return{};const[u]=o;return{parentCompositeFiber:u}},gv=(a,r)=>{if(!a.isConnected)return{};let l=r??Tf(a);if(!l)return{};let o=l,u=null,d=null;for(;o;){if(!o.stateNode){o=o.return;continue}if(Ae.instrumentation?.fiberRoots.has(o.stateNode)){u=o,d=o.stateNode.current;break}o=o.return}if(!u||!d)return{};if(l=mv(l,d)?l:l.alternate??l,!l)return{};if(!Sf(l))return{};const h=ni(l)?.[0];return h?{parentCompositeFiber:mv(h,d)?h:h.alternate??h}:{}},$0=a=>{const r=a.memoizedProps??{},l=a.alternate?.memoizedProps??{},o=[];for(const u in r){if(u==="children")continue;const d=r[u],h=l[u];Aa(d,h)||o.push({name:u,value:d,prevValue:h,type:1})}return o},$d=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),xs=(a,r=!0)=>{if(a.stateNode&&"nodeType"in a.stateNode){const o=a.stateNode;return r&&o.tagName&&$d.has(o.tagName.toLowerCase())?null:o}let l=a.child;for(;l;){const o=xs(l,r);if(o)return o;l=l.sibling}return null},k2=(a=document.body)=>{const r=[],l=u=>{if(!u)return null;const{parentCompositeFiber:d}=nr(u);return d&&xs(d)===u?u:null},o=(u,d=0)=>{const h=l(u);if(h){const{parentCompositeFiber:p}=nr(h);if(!p)return;r.push({element:h,depth:d,name:bt(p.type)??"Unknown",fiber:p})}for(const p of Array.from(u.children))o(p,h?d+1:d)};return o(a),r},vv=a=>{try{if(a===null)return"null";if(a===void 0)return"undefined";if(ai(a))return"Promise";if(typeof a=="function"){const r=a.toString();try{return r.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return r}}switch(!0){case a instanceof Date:return a.toISOString();case a instanceof RegExp:return a.toString();case a instanceof Error:return`${a.name}: ${a.message}`;case a instanceof Map:return JSON.stringify(Array.from(a.entries()),null,2);case a instanceof Set:return JSON.stringify(Array.from(a),null,2);case a instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(a.buffer)),null,2);case a instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(a)),null,2);case(ArrayBuffer.isView(a)&&"length"in a):return JSON.stringify(Array.from(a),null,2);case Array.isArray(a):return JSON.stringify(a,null,2);case typeof a=="object":return JSON.stringify(a,null,2);default:return String(a)}}catch{return String(a)}},E2=(a,r)=>{try{return typeof a!="function"||typeof r!="function"?!1:a.toString()===r.toString()}catch{return!1}},Q0=(a,r,l=[],o=new WeakSet)=>{if(a===r)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof a=="function"&&typeof r=="function"){const v=E2(a,r);return{type:"primitive",changes:[{path:l,prevValue:a,currentValue:r,sameFunction:v}],hasDeepChanges:!v}}if(a===null||r===null||a===void 0||r===void 0||typeof a!="object"||typeof r!="object")return{type:"primitive",changes:[{path:l,prevValue:a,currentValue:r}],hasDeepChanges:!0};if(o.has(a)||o.has(r))return{type:"object",changes:[{path:l,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};o.add(a),o.add(r);const u=a,d=r,h=new Set([...Object.keys(u),...Object.keys(d)]),p=[];let m=!1;for(const v of h){const x=u[v],y=d[v];if(x!==y)if(typeof x=="object"&&typeof y=="object"&&x!==null&&y!==null){const _=Q0(x,y,[...l,v],o);p.push(..._.changes),_.hasDeepChanges&&(m=!0)}else p.push({path:[...l,v],prevValue:x,currentValue:y}),m=!0}return{type:"object",changes:p,hasDeepChanges:m}},hn=a=>a.length===0?"":a.reduce((r,l,o)=>/^\d+$/.test(l)?`${r}[${l}]`:o===0?l:`${r}.${l}`,"");function N2(a){const r=a.replace(/\s+/g," ").trim(),l=[];let o="";for(let T=0;T<r.length;T++){const M=r[T];if(M==="="&&r[T+1]===">"){o.trim()&&l.push(o.trim()),l.push("=>"),o="",T++;continue}/[(){}[\];,<>:\?!]/.test(M)?(o.trim()&&l.push(o.trim()),l.push(M),o=""):/\s/.test(M)?(o.trim()&&l.push(o.trim()),o=""):o+=M}o.trim()&&l.push(o.trim());const u=[];for(let T=0;T<l.length;T++){const M=l[T],q=l[T+1];M==="("&&q===")"||M==="["&&q==="]"||M==="{"&&q==="}"||M==="<"&&q===">"?(u.push(M+q),T++):u.push(M)}const d=new Set,h=new Set;function p(T,M,q){let $=0;for(let Z=q;Z<u.length;Z++){const K=u[Z];if(K===T)$++;else if(K===M&&($--,$===0))return Z}return-1}for(let T=0;T<u.length;T++)if(u[T]==="("){const q=p("(",")",T);if(q!==-1&&u[q+1]==="=>")for(let $=T;$<=q;$++)d.add($)}for(let T=1;T<u.length;T++){const M=u[T-1],q=u[T];if(/^[a-zA-Z0-9_$]+$/.test(M)&&q==="<"){const $=p("<",">",T);if($!==-1)for(let Z=T;Z<=$;Z++)h.add(Z)}}let m=0;const v="  ",x=[];let y="";function _(){y.trim()&&x.push(y.replace(/\s+$/,"")),y=""}function S(){_(),y=v.repeat(m)}const k=[];function z(){return k.length?k[k.length-1]:null}function R(T,M=!1){y.trim()?M||/^[),;:\].}>]$/.test(T)?y+=T:y+=` ${T}`:y+=T}for(let T=0;T<u.length;T++){const M=u[T],q=u[T+1]||"";if(["(","{","[","<"].includes(M)){if(R(M),k.push(M),M==="{")m++,S();else if((M==="("||M==="["||M==="<")&&!(d.has(T)&&M==="("||h.has(T)&&M==="<")){const $={"(":")","[":"]","<":">"}[M];q!==$&&q!=="()"&&q!=="[]"&&q!=="<>"&&(m++,S())}}else if([")","}","]",">"].includes(M)){const $=z();M===")"&&$==="("||M==="]"&&$==="["||M===">"&&$==="<"?!(d.has(T)&&M===")")&&!(h.has(T)&&M===">")&&(m=Math.max(m-1,0),S()):M==="}"&&$==="{"&&(m=Math.max(m-1,0),S()),k.pop(),R(M),M==="}"&&S()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(M))R(M);else if(M==="=>")R(M);else if(M===";")R(M,!0),S();else if(M===","){R(M,!0);const $=z();!(d.has(T)&&$==="(")&&!(h.has(T)&&$==="<")&&$&&["{","[","(","<"].includes($)&&S()}else R(M)}return _(),x.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var Qd=(a,r=!1)=>{try{const l=a.toString(),o=l.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!o)return"ƒ";const d=(o[1]||o[2]||"").replace(/\s+/g,"");return r?N2(l):`ƒ (${d}) => ...`}catch{return"ƒ"}},_s=a=>{if(a===null)return"null";if(a===void 0)return"undefined";if(typeof a=="string")return`"${a.length>150?`${a.slice(0,20)}...`:a}"`;if(typeof a=="number"||typeof a=="boolean")return String(a);if(typeof a=="function")return Qd(a);if(Array.isArray(a))return`Array(${a.length})`;if(a instanceof Map)return`Map(${a.size})`;if(a instanceof Set)return`Set(${a.size})`;if(a instanceof Date)return a.toISOString();if(a instanceof RegExp)return a.toString();if(a instanceof Error)return`${a.name}: ${a.message}`;if(typeof a=="object"){const r=Object.keys(a);return`{${r.length>2?`${r.slice(0,2).join(", ")}, ...`:r.join(", ")}}`}return String(a)},z2=a=>{if(a==null)return{value:a};if(typeof a=="function")return{value:a};if(typeof a!="object")return{value:a};if(a instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(a);return r===Promise.prototype||r?.constructor?.name==="Promise"?{value:"Promise"}:{value:a}}catch{return{value:null,error:"Error accessing value"}}},ai=a=>!!a&&(a instanceof Promise||typeof a=="object"&&"then"in a),A2=a=>{const r=er(a);return{displayName:bt(a)||"Unknown",type:a.type,key:a.key,id:a.index,selfTime:r?.selfTime??null,totalTime:r?.totalTime??null}},Cf=new Map,Z0=new Map,kf=new Map,Zd=null,M2=/\[(?<name>\w+),\s*set\w+\]/g,D2=a=>{const r=a.type?.toString?.()||"";return r?Array.from(r.matchAll(M2),l=>l.groups?.name??""):[]},O2=()=>{Cf.clear(),Z0.clear(),kf.clear(),Zd=null},R2=a=>{const r=a.type!==Zd;return Zd=a.type,r},cd=(a,r,l,o)=>{const u=a.get(r),d=a===Cf||a===kf,h=!Aa(l,o);if(!u)return a.set(r,{count:h&&d?1:0,currentValue:l,previousValue:o,lastUpdated:Date.now()}),{hasChanged:h,count:h&&d?1:d?0:1};if(!Aa(u.currentValue,l)){const p=u.count+1;return a.set(r,{count:p,currentValue:l,previousValue:u.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:p}}return{hasChanged:!1,count:u.count}},yv=a=>{if(!a)return{};if(a.tag===Ns||a.tag===zs||a.tag===Nl||a.tag===El){let r=a.memoizedState;const l={};let o=0;for(;r;)r.queue&&r.memoizedState!==void 0&&(l[o]=r.memoizedState),r=r.next,o++;return l}return a.tag===lr?a.memoizedState||{}:{}},Ef=a=>{const r=a.memoizedProps||{},l=a.alternate?.memoizedProps||{},o={},u={},d=Object.keys(r);for(const p of d)p in r&&(o[p]=r[p],u[p]=l[p]);const h=$0(a).map(p=>({name:p.name,value:p.value,prevValue:p.prevValue}));return{current:o,prev:u,changes:h}},Nf=a=>{const r=yv(a),l=a.alternate?yv(a.alternate):{},o=[];for(const[u,d]of Object.entries(r)){const h=a.tag===lr?u:Number(u);a.alternate&&!Aa(l[u],d)&&o.push({name:h,value:d,prevValue:l[u]})}return{current:r,prev:l,changes:o}},zf=a=>{const r=wv(a),l=a.alternate?wv(a.alternate):new Map,o={},u={},d=[],h=new Set;for(const[p,m]of r){const v=m.displayName,x=p;if(h.has(x))continue;h.add(x),o[v]=m.value;const y=l.get(p);y&&(u[v]=y.value,Aa(y.value,m.value)||d.push({name:v,value:m.value,prevValue:y.value,contextType:p}))}return{current:o,prev:u,changes:d}},U2=a=>{const r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!a)return{data:{fiberProps:r(),fiberState:r(),fiberContext:r()},shouldUpdate:!1};let l=!1;const o=R2(a),u=r();if(a.memoizedProps){const{current:y,changes:_}=Ef(a);for(const[S,k]of Object.entries(y))u.current.push({name:S,value:ai(k)?{type:"promise",displayValue:"Promise"}:k});for(const S of _){const{hasChanged:k,count:z}=cd(Cf,S.name,S.value,S.prevValue);k&&(l=!0,u.changes.add(S.name),u.changesCounts.set(S.name,z))}}const d=r(),{current:h,changes:p}=Nf(a);for(const[y,_]of Object.entries(h)){const S=a.tag===lr?y:Number(y);d.current.push({name:S,value:_})}for(const y of p){const{hasChanged:_,count:S}=cd(Z0,y.name,y.value,y.prevValue);_&&(l=!0,d.changes.add(y.name),d.changesCounts.set(y.name,S))}const m=r(),{current:v,changes:x}=zf(a);for(const[y,_]of Object.entries(v))m.current.push({name:y,value:_});if(!o)for(const y of x){const{hasChanged:_,count:S}=cd(kf,y.name,y.value,y.prevValue);_&&(l=!0,m.changes.add(y.name),m.changesCounts.set(y.name,S))}return!l&&!o&&(u.changes.clear(),d.changes.clear(),m.changes.clear()),{data:{fiberProps:u,fiberState:d,fiberContext:m},shouldUpdate:l||o}},bv=new WeakMap,wv=a=>{if(!a)return new Map;const r=bv.get(a);if(r)return r;const l=new Map;let o=a;for(;o;){const u=o.dependencies;if(u?.firstContext){let d=u.firstContext;for(;d;){const h=d.memoizedValue,p=d.context?.displayName;if(l.has(h)||l.set(d.context,{value:h,displayName:p??"UnnamedContext",contextType:null}),d===d.next)break;d=d.next}}o=o.return}return bv.set(a,l),l},xv=a=>{const r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!a)return{fiberProps:r(),fiberState:r(),fiberContext:r()};const l=r();if(a.memoizedProps){const{current:p,changes:m}=Ef(a);for(const[v,x]of Object.entries(p))l.current.push({name:v,value:ai(x)?{type:"promise",displayValue:"Promise"}:x});for(const v of m)l.changes.add(v.name),l.changesCounts.set(v.name,1)}const o=r();if(a.memoizedState){const{current:p,changes:m}=Nf(a);for(const[v,x]of Object.entries(p))o.current.push({name:v,value:ai(x)?{type:"promise",displayValue:"Promise"}:x});for(const v of m)o.changes.add(v.name),o.changesCounts.set(v.name,1)}const u=r(),{current:d,changes:h}=zf(a);for(const[p,m]of Object.entries(d))u.current.push({name:p,value:ai(m)?{type:"promise",displayValue:"Promise"}:m});for(const p of h)u.changes.add(p.name),u.changesCounts.set(p.name,1);return{fiberProps:l,fiberState:o,fiberContext:u}},Id=0,_v=performance.now(),ud=0,Sv=!1,I0=()=>{ud++;const a=performance.now();a-_v>=1e3&&(Id=ud,ud=0,_v=a),requestAnimationFrame(I0)},J0=()=>(Sv||(Sv=!0,I0(),Id=60),Id),H2=a=>{if(!a)return[];const r=[];if(a.tag===Ns||a.tag===zs||a.tag===Nl||a.tag===El){let l=a.memoizedState,o=a.alternate?.memoizedState,u=0;for(;l;){if(l.queue&&l.memoizedState!==void 0){const d={type:2,name:u.toString(),value:l.memoizedState,prevValue:o?.memoizedState};Aa(d.prevValue,d.value)||r.push(d)}l=l.next,o=o?.next,u++}return r}if(a.tag===lr){const l={type:3,name:"state",value:a.memoizedState,prevValue:a.alternate?.memoizedState};return Aa(l.prevValue,l.value)||r.push(l),r}return r},dd=0,Tv=new WeakMap,j2=a=>{const r=Tv.get(a);return r||(dd++,Tv.set(a,dd),dd)};function L2(a,r){if(!a||!r)return;const l=a.memoizedValue,o={type:4,name:a.context.displayName??"Context.Provider",value:l,contextType:j2(a.context)};this.push(o)}var B2=a=>{const r=[];return b1(a,L2.bind(r)),r},K0=new Map,Cv=!1,fd=()=>Array.from(K0.values()),Y2=16,Jd=new WeakMap;function W0(a){return String(za(a))}function P0(a){const r=W0(a),l=Jd.get(or(a));if(l)return l.get(r)}function X2(a,r){const l=or(a.type),o=W0(a);let u=Jd.get(l);u||(u=new Map,Jd.set(l,u)),u.set(o,r)}var q2=(a,r,l,o,u)=>{const d=Date.now(),h=P0(a);if((o||u)&&(!h||d-(h.lastRenderTimestamp||0)>Y2)){const p=h||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:d};p.renderCount=(p.renderCount||0)+1,p.selfTime=r||0,p.totalTime=l||0,p.lastRenderTimestamp=d,X2(a,{...p})}},V2=(a,r)=>{const l={isPaused:ht(!Ae.options.value.enabled),fiberRoots:new WeakSet};return K0.set(a,{key:a,config:r,instrumentation:l}),Cv||(Cv=!0,E1({name:"react-scan",onActive:r.onActive,onCommitFiberRoot(o,u){l.fiberRoots.add(u);const d=fd();for(const h of d)h.config.onCommitStart();k1(u.current,(h,p)=>{const m=or(h.type);if(!m)return null;const v=fd(),x=[];for(let M=0,q=v.length;M<q;M++)v[M].config.isValidFiber(h)&&x.push(M);if(!x.length)return null;const y=[];if(v.some(M=>M.config.trackChanges)){const M=Ef(h).changes,q=Nf(h).changes,$=zf(h).changes;y.push.apply(null,M.map(Z=>({type:1,name:Z.name,value:Z.value})));for(const Z of q)h.tag===lr?y.push({type:3,name:Z.name.toString(),value:Z.value}):y.push({type:2,name:Z.name.toString(),value:Z.value});y.push.apply(null,$.map(Z=>({type:4,name:Z.name,value:Z.value,contextType:Number(Z.contextType)})))}const{selfTime:_,totalTime:S}=er(h),k=J0(),z={phase:ux[p],componentName:bt(m),count:1,changes:y,time:_,forget:yl(h),unnecessary:null,didCommit:lf(h),fps:k},R=y.length>0,T=w1(h).length>0;p==="update"&&q2(h,_,S,R,T);for(let M=0,q=x.length;M<q;M++){const $=x[M];v[$].config.onRender(h,[z])}});for(const h of d)h.config.onCommitFinish()},onPostCommitFiberRoot(){const o=fd();for(const u of o)u.config.onPostCommitFiberRoot()}})),l},F2=a=>{const r=new Map;for(let l=0,o=a.length;l<o;l++){const u=a[l];if(!u.componentName)continue;const d=r.get(u.componentName)??[],h=sx([{aggregatedCount:1,computedKey:null,name:u.componentName,frame:null,...u,changes:{type:u.changes.reduce((v,x)=>v|x.type,0),unstable:u.changes.some(v=>v.unstable)},phase:u.phase,computedCurrent:null}]);if(!h)continue;let p=null,m=null;if(u.changes)for(let v=0,x=u.changes.length;v<x;v++){const{name:y,prevValue:_,nextValue:S,unstable:k,type:z}=u.changes[v];z===1?(p??={},m??={},p[`${k?"⚠️":""}${y} (prev)`]=_,m[`${k?"⚠️":""}${y} (next)`]=S):d.push({prev:_,next:S,type:z===4?"context":"state",unstable:k??!1})}p&&m&&d.push({prev:p,next:m,type:"props",unstable:!1}),r.set(h,d)}for(const[l,o]of Array.from(r.entries())){console.group(`%c${l}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:u,prev:d,next:h,unstable:p}of o)console.log(`${u}:`,p?"⚠️":"",d,"!==",h);console.groupEnd()}},G2=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},kv=7,$2="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",Q2=.1,Po=(a,r)=>Math.floor(a+(r-a)*Q2),Z2=4,Ss=40,hd=45,pd="115,97,230";function I2(a,r){return r[0]-a[0]}function J2(a){return[...a.entries()].sort(I2)}function Ev([a,r]){let l=`${r.slice(0,Z2).join(", ")} ×${a}`;return l.length>Ss&&(l=`${l.slice(0,Ss)}…`),l}var Nv=a=>{const r=new Map;for(const{name:d,count:h}of a)r.set(d,(r.get(d)||0)+h);const l=new Map;for(const[d,h]of r){const p=l.get(h);p?p.push(d):l.set(h,[d])}const o=J2(l);let u=Ev(o[0]);for(let d=1,h=o.length;d<h;d++)u+=", "+Ev(o[d]);return u.length>Ss?`${u.slice(0,Ss)}…`:u},zv=a=>{let r=0;for(const l of a)r+=l.width*l.height;return r},K2=(a,r)=>{for(const{id:l,name:o,count:u,x:d,y:h,width:p,height:m,didCommit:v}of r){const x={id:l,name:o,count:u,x:d,y:h,width:p,height:m,frame:0,targetX:d,targetY:h,targetWidth:p,targetHeight:m,didCommit:v},y=String(x.id),_=a.get(y);_?(_.count++,_.frame=0,_.targetX=d,_.targetY=h,_.targetWidth=p,_.targetHeight=m,_.didCommit=v):a.set(y,x)}},W2=(a,r,l)=>{for(const o of a.values()){const u=o.x-r,d=o.y-l;o.targetX=u,o.targetY=d}},P2=(a,r)=>{const l=a.getContext("2d",{alpha:!0});return l&&l.scale(r,r),l},e_=(a,r,l,o)=>{a.clearRect(0,0,r.width/l,r.height/l);const u=new Map,d=new Map;for(const m of o.values()){const{x:v,y:x,width:y,height:_,targetX:S,targetY:k,targetWidth:z,targetHeight:R,frame:T}=m;S!==v&&(m.x=Po(v,S)),k!==x&&(m.y=Po(x,k)),z!==y&&(m.width=Po(y,z)),R!==_&&(m.height=Po(_,R));const M=`${S??v},${k??x}`,q=`${M},${z??y},${R??_}`,$=u.get(M);$?$.push(m):u.set(M,[m]);const Z=1-T/hd;m.frame++;const K=d.get(q)||{x:v,y:x,width:y,height:_,alpha:Z};Z>K.alpha&&(K.alpha=Z),d.set(q,K)}for(const{x:m,y:v,width:x,height:y,alpha:_}of d.values())a.strokeStyle=`rgba(${pd},${_})`,a.lineWidth=1,a.beginPath(),a.rect(m,v,x,y),a.stroke(),a.fillStyle=`rgba(${pd},${_*.1})`,a.fill();a.font=`11px ${$2}`;const h=new Map;a.textRendering="optimizeSpeed";for(const m of u.values()){const v=m[0],{x,y,frame:_}=v,S=1-_/hd,k=Nv(m),{width:z}=a.measureText(k);if(h.set(`${x},${y},${z},${k}`,{text:k,width:z,height:11,alpha:S,x,y,outlines:m}),_>hd)for(const T of m)o.delete(String(T.id))}const p=Array.from(h.entries()).sort(([m,v],[x,y])=>zv(y.outlines)-zv(v.outlines));for(const[m,v]of p)if(h.has(m))for(const[x,y]of h.entries()){if(m===x)continue;const{x:_,y:S,width:k,height:z}=v,{x:R,y:T,width:M,height:q}=y;_+k>R&&R+M>_&&S+z>T&&T+q>S&&(v.text=Nv(v.outlines.concat(y.outlines)),v.width=a.measureText(v.text).width,h.delete(x))}for(const m of h.values()){const{x:v,y:x,alpha:y,width:_,height:S,text:k}=m;let z=x-S-4;z<0&&(z=0),a.fillStyle=`rgba(${pd},${y})`,a.fillRect(v,z,_+4,S+4),a.fillStyle=`rgba(255,255,255,${y})`,a.fillText(k,v+2,z+S)}return o.size>0},t_='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',kn=null,Ts=null,ar=null,sn=1,Cs=null,Af=new Map,ml=new Map,Pr=new Set,n_=a=>{if(!Ms(a))return;const r=typeof a.type=="string"?a.type:bt(a);if(!r)return;const l=ml.get(a),o=x1(a),u=lf(a);l?l.count++:(ml.set(a,{name:r,count:1,elements:o.map(d=>d.stateNode),didCommit:u?1:0}),Pr.add(a))},a_=a=>{const r=a[0];if(a.length===1)return r;let l,o,u,d;for(let h=0,p=a.length;h<p;h++){const m=a[h];l=l==null?m.x:Math.min(l,m.x),o=o==null?m.y:Math.min(o,m.y),u=u==null?m.x+m.width:Math.max(u,m.x+m.width),d=d==null?m.y+m.height:Math.max(d,m.y+m.height)}return l==null||o==null||u==null||d==null?a[0]:new DOMRect(l,o,u-l,d-o)};function r_(a,r){const l=[];for(const o of a){const u=o.target;this.seenElements.has(u)||(this.seenElements.add(u),l.push(o))}l.length>0&&this.resolveNext&&(this.resolveNext(l),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(r.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var ey=async function*(a){const r={uniqueElements:new Set(a),seenElements:new Set,resolveNext:null,done:!1},l=new IntersectionObserver(r_.bind(r));for(const o of r.uniqueElements)l.observe(o);for(;!r.done;){const o=await new Promise(u=>{r.resolveNext=u});o.length>0&&(yield o)}},i_=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,l_=async()=>{const a=[];for(const l of Pr){const o=ml.get(l);if(o)for(let u=0;u<o.elements.length;u++)o.elements[u]instanceof Element&&a.push(o.elements[u])}const r=new Map;for await(const l of ey(a)){for(const h of l){const p=h.target,m=h.intersectionRect;h.isIntersecting&&m.width&&m.height&&r.set(p,m)}const o=[],u=[],d=[];for(const h of Pr){const p=ml.get(h);if(!p)continue;const m=[];for(let v=0;v<p.elements.length;v++){const x=p.elements[v],y=r.get(x);y&&m.push(y)}m.length&&(o.push(p),u.push(a_(m)),d.push(za(h)))}if(o.length>0){const h=new i_(o.length*kv*4),p=new Float32Array(h),m=new Array(o.length);let v;for(let x=0,y=o.length;x<y;x++){const _=o[x],S=d[x],{x:k,y:z,width:R,height:T}=u[x],{count:M,name:q,didCommit:$}=_;if(kn){const Z=x*kv;p[Z]=S,p[Z+1]=M,p[Z+2]=k,p[Z+3]=z,p[Z+4]=R,p[Z+5]=T,p[Z+6]=$,m[x]=q}else v||=new Array(o.length),v[x]={id:S,name:q,count:M,x:k,y:z,width:R,height:T,didCommit:$}}kn?kn.postMessage({type:"draw-outlines",data:h,names:m}):Ts&&ar&&v&&(K2(Af,v),Cs||(Cs=requestAnimationFrame(Mf)))}}for(const l of Pr)ml.delete(l),Pr.delete(l)},Mf=()=>{if(!ar||!Ts)return;e_(ar,Ts,sn,Af)?Cs=requestAnimationFrame(Mf):Cs=null},o_=typeof OffscreenCanvas<"u"&&typeof Worker<"u",Av=()=>Math.min(window.devicePixelRatio||1,2),s_=()=>{c_();const a=document.createElement("div");a.setAttribute("data-react-scan","true");const r=a.attachShadow({mode:"open"}),l=document.createElement("canvas");if(l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.pointerEvents="none",l.style.zIndex="2147483646",l.setAttribute("aria-hidden","true"),r.appendChild(l),!l)return null;sn=Av(),Ts=l;const{innerWidth:o,innerHeight:u}=window;l.style.width=`${o}px`,l.style.height=`${u}px`;const d=o*sn,h=u*sn;if(l.width=d,l.height=h,o_&&!window.__REACT_SCAN_EXTENSION__)try{kn=new Worker(URL.createObjectURL(new Blob([t_],{type:"application/javascript"})));const y=l.transferControlToOffscreen();kn?.postMessage({type:"init",canvas:y,width:l.width,height:l.height,dpr:sn},[y])}catch(y){console.warn("Failed to initialize OffscreenCanvas worker:",y)}kn||(ar=P2(l,sn));let p=!1;window.addEventListener("resize",()=>{p||(p=!0,setTimeout(()=>{const y=window.innerWidth,_=window.innerHeight;sn=Av(),l.style.width=`${y}px`,l.style.height=`${_}px`,kn?kn.postMessage({type:"resize",width:y,height:_,dpr:sn}):(l.width=y*sn,l.height=_*sn,ar&&(ar.resetTransform(),ar.scale(sn,sn)),Mf()),p=!1}))});let m=window.scrollX,v=window.scrollY,x=!1;return window.addEventListener("scroll",()=>{x||(x=!0,setTimeout(()=>{const{scrollX:y,scrollY:_}=window,S=y-m,k=_-v;m=y,v=_,kn?kn.postMessage({type:"scroll",deltaX:S,deltaY:k}):requestAnimationFrame(W2.bind(null,Af,S,k)),x=!1},32))}),setInterval(()=>{Pr.size&&requestAnimationFrame(l_)},32),r.appendChild(l),a},Mv=()=>globalThis.__REACT_SCAN_STOP__,c_=()=>{const a=document.querySelector("[data-react-scan]");a&&a.remove()},u_=a=>{if(Ms(a)&&Ae.options.value.showToolbar!==!1&&ee.inspectState.value.kind==="focused"){const r=a,{selfTime:l}=er(a),o=bt(a.type),u=za(r),d=ee.reportData.get(u),h=d?.count??0,p=d?.time??0,m=[],v=ee.changesListeners.get(za(a));if(v?.length){const y=$0(a).map(z=>({type:1,name:z.name,value:z.value,prevValue:z.prevValue,unstable:!1})),_=H2(a),k=B2(a).map(z=>({name:z.name,type:4,value:z.value,contextType:z.contextType}));v.forEach(z=>{z({propsChanges:y,stateChanges:_,contextChanges:k})})}const x={count:h+1,time:p+l||0,renders:[],displayName:o,type:or(a.type)||null,changes:m};ee.reportData.set(u,x),Kd=!0}},Kd=!1,Dv,d_=()=>{clearInterval(Dv),Dv=setInterval(()=>{Kd&&(ee.lastReportTime.value=Date.now(),Kd=!1)},50)},f_=a=>!rT.has(a.memoizedProps),h_=a=>{if(Mv())return;let r,l=!1;const o=()=>{l||(r&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{l=!0;const d=s_();d&&document.documentElement.appendChild(d),a()}))},u=V2("react-scan-devtools-0.1.0",{onCommitStart:()=>{Ae.options.value.onCommitStart?.()},onActive:()=>{Mv()||(o(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Ae}),d_(),G2())},onError:()=>{},isValidFiber:f_,onRender:(d,h)=>{Ms(d)&&ee.interactionListeningForRenders?.(d,h);const p=Ae.instrumentation?.isPaused.value,m=ee.inspectState.value.kind==="inspect-off"||ee.inspectState.value.kind==="uninitialized";p&&m||(p||n_(d),Ae.options.value.log&&F2(h),ee.inspectState.value.kind==="focused"&&(_f.value=Date.now()),m||u_(d),Ae.options.value.onRender?.(d,h))},onCommitFinish:()=>{o(),Ae.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){o()},trackChanges:!1});Ae.instrumentation=u},p_=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,m_=(a,r,l=r)=>{const[o,u]=Se(a);return _e(()=>{if(a===o)return;const h=setTimeout(()=>u(a),a?r:l);return()=>clearTimeout(h)},[a,r,l]),o},g_=cr(()=>D("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Us.value&&"-translate-y-[200%]")),v_=()=>{const a=oe(null),r=oe(null),[l,o]=Se(null);_l(()=>{const d=ee.inspectState.value;d.kind==="focused"&&o(d.fiber)}),_l(()=>{const d=At.value;xl(()=>{if(ee.inspectState.value.kind!=="focused"||!a.current||!r.current)return;const{totalUpdates:h,currentIndex:p,updates:m,isVisible:v,windowOffset:x}=d,y=Math.max(0,h-1),_=v?`#${x+p} Re-render`:y>0?`×${y}`:"";let S;if(y>0&&p>=0&&p<m.length){const k=m[p]?.fiberInfo?.selfTime;S=k>0?k<.1-Number.EPSILON?"< 0.1ms":`${Number(k.toFixed(1))}ms`:void 0}a.current.dataset.text=_?` • ${_}`:"",r.current.dataset.text=S?` • ${S}`:""})});const u=yn(()=>{if(!l)return null;const{name:d,wrappers:h,wrapperTypes:p}=Sl(l),m=h.length?`${h.join("(")}(${d})${")".repeat(h.length)}`:d??"",v=p[0];return f("span",{title:m,className:"flex items-center gap-x-1",children:[d??"Unknown",f("span",{title:v?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!v&&f(ze,{children:[f("span",{className:D("rounded py-[1px] px-1","truncate",v.compiler&&"bg-purple-800 text-neutral-400",!v.compiler&&"bg-neutral-700 text-neutral-300",v.type==="memo"&&"bg-[#5f3f9a] text-white"),children:v.type},v.type),v.compiler&&f("span",{className:"text-yellow-300",children:"✨"})]})}),p.length>1&&f("span",{className:"text-[10px] text-neutral-400",children:["×",p.length-1]})]})},[l]);return f("div",{className:g_,children:[u,f("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[f("span",{ref:a,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),f("span",{ref:r,className:"with-data-text !overflow-visible"})]})]})},y_=()=>{const a=m_(ee.inspectState.value.kind==="focused",150,0),r=()=>{Qe.value={view:"none"},ee.inspectState.value={kind:"inspect-off"}};if(Qe.value.view!=="notifications")return f("div",{className:"react-scan-header",children:[f("div",{className:"relative flex-1 h-full",children:f("div",{className:D("react-scan-header-item is-visible",!a&&"!duration-0"),children:f(v_,{})})}),f("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:r,children:f(nt,{name:"icon-close"})})]})},b_=({className:a,...r})=>f("div",{className:D("react-scan-toggle",a),children:[f("input",{type:"checkbox",...r}),f("div",{})]}),w_=({fps:a})=>{const r=l=>l<30?"#EF4444":l<50?"#F59E0B":"rgb(214,132,245)";return f("div",{className:D("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[f("div",{style:{color:r(a)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:a}),f("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},x_=()=>{const[a,r]=Se(null);return _e(()=>{const l=setInterval(()=>{r(J0())},200);return()=>clearInterval(l)},[]),f("div",{className:D("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:a===null?f(ze,{children:"️"}):f(w_,{fps:a})})},mn=()=>En?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",vn=a=>a(),gt=class ty extends Array{constructor(r=25){super(),this.capacity=r}push(...r){const l=super.push(...r);for(;this.length>this.capacity;)this.shift();return l}static fromArray(r,l){const o=new ty(l);return o.push(...r),o}},__=class{constructor(a){this.subscribers=new Set,this.currentValue=a}subscribe(a){return this.subscribers.add(a),a(this.currentValue),()=>{this.subscribers.delete(a)}}setState(a){this.currentValue=a,this.subscribers.forEach(r=>r(a))}getCurrentState(){return this.currentValue}},ny=150,Ov=new __(new gt(ny)),Cn=50,S_=class{constructor(){this.channels={}}publish(a,r,l=!0){const o=this.channels[r];if(!o){if(!l)return;this.channels[r]={callbacks:new gt(Cn),state:new gt(Cn)},this.channels[r].state.push(a);return}o.state.push(a),o.callbacks.forEach(u=>u(a))}getAvailableChannels(){return gt.fromArray(Object.keys(this.channels),Cn)}subscribe(a,r,l=!1){const o=()=>(l||this.channels[a].state.forEach(d=>{r(d)}),()=>{const d=this.channels[a].callbacks.filter(h=>h!==r);this.channels[a].callbacks=gt.fromArray(d,Cn)}),u=this.channels[a];return u?(u.callbacks.push(r),o()):(this.channels[a]={callbacks:new gt(Cn),state:new gt(Cn)},this.channels[a].callbacks.push(r),o())}updateChannelState(a,r,l=!0){const o=this.channels[a];if(!o){if(!l)return;const u=new gt(Cn),d={callbacks:new gt(Cn),state:u};this.channels[a]=d,d.state=r(u);return}o.state=r(o.state)}getChannelState(a){return this.channels[a].state??new gt(Cn)}},ks=new S_,ay={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},ll={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},T_=(a,r=ay)=>{const l=[];return r.skipProviders&&l.push(...ll.providers),r.skipHocs&&l.push(...ll.hocs),r.skipContainers&&l.push(...ll.containers),r.skipUtilities&&l.push(...ll.utilities),r.skipBoundaries&&l.push(...ll.boundaries),!l.some(o=>o.test(a))},Rv=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],C_=a=>{for(let d=0;d<Rv.length;d++)if(Rv[d].test(a))return!0;const r=!/[aeiou]/i.test(a),l=(a.match(/\d/g)?.length??0)>a.length/2,o=/^[a-z]+$/.test(a),u=/[$_]{2,}/.test(a);return Number(r)+Number(l)+Number(o)+Number(u)>=2},k_=(a,r=ay)=>{if(!a)return[];if(!bt(a.type))return[];const o=new Array;let u=a;for(;u.return;){const h=E_(u.type);h&&!C_(h)&&T_(h,r)&&h.toLowerCase()!==h&&o.push(h),u=u.return}const d=new Array(o.length);for(let h=0;h<o.length;h++)d[h]=o[o.length-h-1];return d},E_=a=>{const r=bt(a);return r?r.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},N_=(a,r=()=>!0)=>{let l=a;for(;l;){const o=bt(l.type);if(o&&r(o))return o;l=l.return}return null},Uv,Wd="never-hidden",z_=()=>{Uv?.();const a=()=>{document.hidden&&(Wd=Date.now())};document.addEventListener("visibilitychange",a),Uv=()=>{document.removeEventListener("visibilitychange",a)}},A_=a=>["pointerup","click"].includes(a)?"pointer":(a.includes("key"),["keydown","keyup"].includes(a)?"keyboard":null),md=null,M_=a=>{z_();const r=new Map,l=new Map,o=d=>{if(!d.interactionId)return;if(d.interactionId&&d.target&&!l.has(d.interactionId)&&l.set(d.interactionId,d.target),d.target){let p=d.target;for(;p;){if(p.id==="react-scan-toolbar-root"||p.id==="react-scan-root")return;p=p.parentElement}}const h=r.get(d.interactionId);if(h)d.duration>h.latency?(h.entries=[d],h.latency=d.duration):d.duration===h.latency&&d.startTime===h.entries[0].startTime&&h.entries.push(d);else{const p=A_(d.name);if(!p)return;const m={id:d.interactionId,latency:d.duration,entries:[d],target:d.target,type:p,startTime:d.startTime,endTime:Date.now(),processingStart:d.processingStart,processingEnd:d.processingEnd,duration:d.duration,inputDelay:d.processingStart-d.startTime,processingDuration:d.processingEnd-d.processingStart,presentationDelay:d.duration-(d.processingEnd-d.startTime),timestamp:Date.now(),timeSinceTabInactive:Wd==="never-hidden"?"never-hidden":Date.now()-Wd,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};r.set(m.id,m),md||(md=requestAnimationFrame(()=>{requestAnimationFrame(()=>{a(r.get(m.id)),md=null})}))}},u=new PerformanceObserver(d=>{const h=d.getEntries();for(let p=0,m=h.length;p<m;p++){const v=h[p];o(v)}});try{u.observe({type:"event",buffered:!0,durationThreshold:16}),u.observe({type:"first-input",buffered:!0})}catch{}return()=>u.disconnect()},D_=()=>M_(a=>{ks.publish({kind:"entry-received",entry:a},"recording")}),ds=25,Zn=new gt(ds),O_=(a,r)=>{let l=null;for(const o of r){if(o.type!==a.type)continue;if(l===null){l=o;continue}const u=(d,h)=>Math.abs(d.startDateTime)-(h.startTime+h.timeOrigin);u(o,a)<u(l,a)&&(l=o)}return l},R_=a=>ks.subscribe("recording",l=>{const o=l.kind==="auto-complete-race"?Zn.find(d=>d.interactionUUID===l.interactionUUID):O_(l.entry,Zn);if(!o)return;const u=o.completeInteraction(l);a(u)}),U_=({onMicroTask:a,onRAF:r,onTimeout:l,abort:o})=>{queueMicrotask(()=>{o?.()!==!0&&a()&&requestAnimationFrame(()=>{o?.()!==!0&&r()&&setTimeout(()=>{o?.()!==!0&&l()},0)})})},H_=a=>{const r=G0(a);if(!r)return;let l=r?bt(r?.type):"N/A";return l||(l=N_(r,u=>u.length>2)??"N/A"),l?{componentPath:k_(r),childrenTree:{},componentName:l,elementFiber:r}:void 0},Hv=(a,r)=>{let l=null;const o=m=>{switch(a){case"pointer":return m.phase==="start"?"pointerup":m.target instanceof HTMLInputElement||m.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return m.phase==="start"?"keydown":"change"}},u={current:{kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a}},d=m=>{if(m.composedPath().some(z=>z instanceof Element&&z.id==="react-scan-toolbar-root")||(Date.now()-u.current.stageStart>2e3&&(u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a}),u.current.kind!=="uninitialized-stage"))return;const x=performance.now();r?.onStart?.(u.current.interactionUUID);const y=H_(m.target);if(!y){r?.onError?.(u.current.interactionUUID);return}const _={},S=ry(_);u.current={...u.current,interactionType:a,blockingTimeStart:Date.now(),childrenTree:y.childrenTree,componentName:y.componentName,componentPath:y.componentPath,fiberRenders:_,kind:"interaction-start",interactionStartDetail:x,stopListeningForRenders:S};const k=o({phase:"end",target:m.target});document.addEventListener(k,h,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(k,h)})};document.addEventListener(o({phase:"start"}),d,{capture:!0});const h=(m,v,x)=>{if(u.current.kind!=="interaction-start"&&v===l){if(a==="pointer"&&m.target instanceof HTMLSelectElement){u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}r?.onError?.(u.current.interactionUUID),u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}l=v,U_({abort:x,onMicroTask:()=>u.current.kind==="uninitialized-stage"?!1:(u.current={...u.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>u.current.kind!=="js-end-stage"&&u.current.kind!=="raf-stage"?(r?.onError?.(u.current.interactionUUID),u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a},!1):(u.current={...u.current,kind:"raf-stage",rafStart:performance.now()},!0),onTimeout:()=>{if(u.current.kind!=="raf-stage"){r?.onError?.(u.current.interactionUUID),u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}const y=Date.now(),_=Object.freeze({...u.current,kind:"timeout-stage",blockingTimeEnd:y,commitEnd:performance.now()});u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:y,interactionType:a};let S=!1;const k=R=>{S=!0;const T=R.kind==="auto-complete-race"?R.detailedTiming.commitEnd-R.detailedTiming.interactionStartDetail:R.entry.latency,M={detailedTiming:_,latency:T,completedAt:Date.now(),flushNeeded:!0};r?.onComplete?.(_.interactionUUID,M,R);const q=Zn.filter($=>$.interactionUUID!==_.interactionUUID);return Zn=gt.fromArray(q,ds),M},z={completeInteraction:k,endDateTime:Date.now(),startDateTime:_.blockingTimeStart,type:a,interactionUUID:_.interactionUUID};if(Zn.push(z),j_())setTimeout(()=>{if(S)return;k({kind:"auto-complete-race",detailedTiming:_,interactionUUID:_.interactionUUID});const R=Zn.filter(T=>T.interactionUUID!==_.interactionUUID);Zn=gt.fromArray(R,ds)},1e3);else{const R=Zn.filter(T=>T.interactionUUID!==_.interactionUUID);Zn=gt.fromArray(R,ds),k({kind:"auto-complete-race",detailedTiming:_,interactionUUID:_.interactionUUID})}}})},p=m=>{const v=mn();h(m,v,()=>v!==l)};return a==="keyboard"&&document.addEventListener("keypress",p),()=>{document.removeEventListener(o({phase:"start"}),d,{capture:!0}),document.removeEventListener("keypress",p)}},jv=a=>t0(a,r=>{if(vl(r))return!0})?.stateNode,j_=()=>"PerformanceEventTiming"in globalThis,ry=a=>{const r=l=>{const o=bt(l.type);if(!o)return;const u=a[o];if(!u){const x=new Set,y=l.return&&ni(l.return),_=y&&bt(y[0]);_&&x.add(_);const{selfTime:S,totalTime:k}=er(l),z=xv(l),R={current:[],changes:new Set,changesCounts:new Map},T={fiberProps:z.fiberProps||R,fiberState:z.fiberState||R,fiberContext:z.fiberContext||R};a[o]={renderCount:1,hasMemoCache:yl(l),wasFiberRenderMount:Lv(l),parents:x,selfTime:S,totalTime:k,nodeInfo:[{element:jv(l),name:bt(l.type)??"Unknown",selfTime:er(l).selfTime}],changes:T};return}if(ni(l)?.[0]?.type){const x=l.return&&ni(l.return),y=x&&bt(x[0]);y&&u.parents.add(y)}const{selfTime:h,totalTime:p}=er(l),m=xv(l);if(!m)return;const v={current:[],changes:new Set,changesCounts:new Map};u.wasFiberRenderMount=u.wasFiberRenderMount||Lv(l),u.hasMemoCache=u.hasMemoCache||yl(l),u.changes={fiberProps:gd(u.changes?.fiberProps||v,m.fiberProps||v),fiberState:gd(u.changes?.fiberState||v,m.fiberState||v),fiberContext:gd(u.changes?.fiberContext||v,m.fiberContext||v)},u.renderCount+=1,u.selfTime+=h,u.totalTime+=p,u.nodeInfo.push({element:jv(l),name:bt(l.type)??"Unknown",selfTime:er(l).selfTime})};return ee.interactionListeningForRenders=r,()=>{ee.interactionListeningForRenders===r&&(ee.interactionListeningForRenders=null)}},gd=(a,r)=>{const l={current:[...a.current],changes:new Set,changesCounts:new Map};for(const o of r.current)l.current.some(u=>u.name===o.name)||l.current.push(o);for(const o of r.changes)if(typeof o=="string"||typeof o=="number"){l.changes.add(o);const u=a.changesCounts.get(o)||0,d=r.changesCounts.get(o)||0;l.changesCounts.set(o,u+d)}return l},Lv=a=>{if(!a.alternate)return!0;const r=a.alternate,l=r&&r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0,o=a.memoizedState!=null&&a.memoizedState.element!=null&&a.memoizedState.isDehydrated!==!0;return!l&&o},L_=a=>{let r;const l=new Set,o=(v,x)=>{const y=typeof v=="function"?v(r):v;if(!Object.is(y,r)){const _=r;r=x??(typeof y!="object"||y===null)?y:Object.assign({},r,y),l.forEach(S=>S(r,_))}},u=()=>r,p={setState:o,getState:u,getInitialState:()=>m,subscribe:(v,x)=>{let y,_;x?(y=v,_=x):_=v;let S=y?y(r):void 0;const k=(z,R)=>{if(y){const T=y(z),M=y(R);Object.is(S,T)||(S=T,_(T,M))}else _(z,R)};return l.add(k),()=>l.delete(k)}},m=r=a(o,u,p);return p},iy=a=>L_,es=null;iy()(a=>({state:{events:[]},actions:{addEvent:r=>{a(l=>({state:{events:[...l.state.events,r]}}))},clear:()=>{a({state:{events:[]}})}}}));var vd=200,Tl=iy()((a,r)=>{const l=new Set;return{state:{events:new gt(vd)},actions:{addEvent:o=>{l.forEach(m=>m(o));const u=[...r().state.events,o],d=(m,v)=>{const x=u.find(y=>{if(y.kind!=="long-render"&&y.id!==m.id&&(m.data.startAt<=y.data.startAt&&m.data.endAt<=y.data.endAt&&m.data.endAt>=y.data.startAt||y.data.startAt<=m.data.startAt&&y.data.endAt>=m.data.startAt||m.data.startAt<=y.data.startAt&&m.data.endAt>=y.data.endAt))return!0});x&&v(x)},h=new Set;u.forEach(m=>{m.kind!=="interaction"&&d(m,()=>{h.add(m.id)})});const p=u.filter(m=>!h.has(m.id));a(()=>({state:{events:gt.fromArray(p,vd)}}))},addListener:o=>(l.add(o),()=>{l.delete(o)}),clear:()=>{a({state:{events:new gt(vd)}})}}}}),B_=()=>Y1(Tl.subscribe,Tl.getState),fs=null,hs=null,yd=null,Pd,Y_=()=>{const a=r=>{Pd=r.composedPath().map(l=>l.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",a),yd=a,()=>{yd&&document.removeEventListener("mouseover",yd)}},X_=()=>{const a=()=>{fs=performance.now(),hs=performance.timeOrigin};return document.addEventListener("visibilitychange",a),()=>{document.removeEventListener("visibilitychange",a)}},ly=150,bd=[];function q_(){let a,r;function l(){let u=null;es=null,es={},u=ry(es);const d=performance.timeOrigin,h=performance.now();return a=requestAnimationFrame(()=>{r=setTimeout(()=>{const p=performance.now(),m=p-h,v=performance.timeOrigin;bd.push(p+v);const x=bd.filter(k=>p+v-k<=1e3),y=x.length;bd=x;const _=fs!==null&&hs!==null?p+v-(hs+fs)<100:null,S=Pd!==null&&Pd;if(m>ly&&!_&&document.visibilityState==="visible"&&!S){const k=v+p,z=h+d;Tl.getState().actions.addEvent({kind:"long-render",id:mn(),data:{endAt:k,startAt:z,meta:{fiberRenders:es,latency:m,fps:y}}})}fs=null,hs=null,u?.(),l()},0)}),u}const o=l();return()=>{o(),cancelAnimationFrame(a),clearTimeout(r)}}var V_=()=>{const a=D_(),r=Y_(),l=X_(),o=q_(),u=async(m,v,x)=>{Tl.getState().actions.addEvent({kind:"interaction",id:mn(),data:{startAt:v.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...v,kind:x.kind}}});const y=ks.getChannelState("recording");v.detailedTiming.stopListeningForRenders(),y.length&&ks.updateChannelState("recording",()=>new gt(Cn))},d=Hv("pointer",{onComplete:u}),h=Hv("keyboard",{onComplete:u}),p=R_(m=>{Ov.setState(gt.fromArray(Ov.getCurrentState().concat(m),ny))});return()=>{r(),l(),o(),a(),d(),p(),h()}},Cl=a=>{const r=a.filter(l=>l.length>2);return r.length===0?a.at(-1)??"Unknown":r.at(-1)},wt=a=>{switch(a.kind){case"interaction":{const{renderTime:r,otherJSTime:l,framePreparation:o,frameConstruction:u,frameDraw:d}=a;return r+l+o+u+(d??0)}case"dropped-frames":return a.otherTime+a.renderTime}},F_=a=>a.wasFiberRenderMount||a.hasMemoCache?!1:a.changes.context.length===0&&a.changes.props.length===0&&a.changes.state.length===0,Ml=a=>{const r=wt(a.timing);switch(a.kind){case"interaction":return r<200?"low":r<500?"needs-improvement":"high";case"dropped-frames":return r<50?"low":r<ly?"needs-improvement":"high"}},Jt=()=>hf(oy),oy=b0(null),sy=({size:a=24,className:r})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:D(["lucide lucide-chevron-right",r]),children:f("path",{d:"m9 18 6-6-6-6"})}),G_=({className:a="",size:r=24,events:l=[]})=>{const o=l.includes(!0),u=l.filter(p=>p).length,d=u>99?">99":u,h=o?Math.max(r*.6,14):Math.max(r*.4,6);return f("div",{className:"relative",children:[f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${a}`,children:[f("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),f("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),l.length>0&&u>0&&Ae.options.value.showNotificationCount&&f("div",{className:D(["absolute",o?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",o?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${h}px`,height:`${h}px`,padding:o?"0.5px":"0"},children:o&&d})]})},Es=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M18 6 6 18"}),f("path",{d:"m6 6 12 12"})]}),$_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),f("path",{d:"M16 9a5 5 0 0 1 0 6"}),f("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),Q_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),f("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),f("path",{d:"m2 2 20 20"}),f("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),f("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),Z_=({size:a=24,className:r})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:D(["lucide lucide-arrow-left",r]),children:[f("path",{d:"m12 19-7-7 7-7"}),f("path",{d:"M19 12H5"})]}),I_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M14 4.1 12 6"}),f("path",{d:"m5.1 8-2.9-.8"}),f("path",{d:"m6 12-1.9 2"}),f("path",{d:"M7.2 2.2 8 5.1"}),f("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),J_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M10 8h.01"}),f("path",{d:"M12 12h.01"}),f("path",{d:"M14 8h.01"}),f("path",{d:"M16 12h.01"}),f("path",{d:"M18 8h.01"}),f("path",{d:"M6 8h.01"}),f("path",{d:"M7 16h10"}),f("path",{d:"M8 12h.01"}),f("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),K_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,style:{transform:"rotate(180deg)"},children:[f("circle",{cx:"12",cy:"12",r:"10"}),f("path",{d:"m4.9 4.9 14.2 14.2"})]}),W_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:a,children:[f("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),f("polyline",{points:"16 17 22 17 22 11"})]}),cy=({children:a,triggerContent:r,wrapperProps:l})=>{const[o,u]=Se("closed"),[d,h]=Se(null),[p,m]=Se({width:window.innerWidth,height:window.innerHeight}),v=oe(null),x=oe(null),y=hf(Df),_=oe(!1);_e(()=>{const T=()=>{m({width:window.innerWidth,height:window.innerHeight}),S()};return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const S=()=>{if(v.current&&y){const T=v.current.getBoundingClientRect(),M=y.getBoundingClientRect(),q=T.left+T.width/2,$=T.top,Z=new DOMRect(q-M.left,$-M.top,T.width,T.height);h(Z)}};_e(()=>{S()},[v.current]),_e(()=>{if(o==="opening"){const T=setTimeout(()=>u("open"),120);return()=>clearTimeout(T)}else if(o==="closing"){const T=setTimeout(()=>u("closed"),120);return()=>clearTimeout(T)}},[o]),_e(()=>{const T=setInterval(()=>{!_.current&&o!=="closed"&&u("closing")},1e3);return()=>clearInterval(T)},[o]);const k=()=>{_.current=!0,S(),u("opening")},z=()=>{_.current=!1,S(),u("closing")},R=()=>{if(!d||!y)return{top:0,left:0};const T=y.getBoundingClientRect(),M=175,q=x.current?.offsetHeight||40,$=5,Z=d.x+T.left,K=d.y+T.top;let P=Z,he=K-4;return P-M/2<$?P=$+M/2:P+M/2>p.width-$&&(P=p.width-$-M/2),he-q<$&&(he=K+d.height+4),{top:he-T.top,left:P-T.left}};return f(ze,{children:[y&&d&&o!=="closed"&&G1(f("div",{ref:x,className:D(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",o==="opening"||o==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:R().top+"px",left:R().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:a}),y),f("div",{ref:v,onMouseEnter:k,onMouseLeave:z,...l,children:r})]})},P_=({selectedEvent:a})=>{const{notificationState:r,setNotificationState:l,setRoute:o}=Jt();return f("div",{className:D(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[f("div",{className:D(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[f("button",{onClick:()=>{o({route:"render-visualization",routeMessage:null})},className:D(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="render-visualization"||r.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),f("button",{onClick:()=>{o({route:"other-visualization",routeMessage:null})},className:D(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),f("button",{onClick:()=>{o({route:"optimize",routeMessage:null})},className:D(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:f("span",{children:"Prompts"})})]}),f(cy,{triggerContent:f("button",{onClick:()=>{l(u=>{u.audioNotificationsOptions.enabled&&u.audioNotificationsOptions.audioContext.state!=="closed"&&u.audioNotificationsOptions.audioContext.close();const d=u.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!d));const h=new AudioContext;return u.audioNotificationsOptions.enabled||bf(h),d&&h.close(),{...u,audioNotificationsOptions:d?{audioContext:null,enabled:!1}:{audioContext:h,enabled:!0}}})},className:"ml-auto",children:f("div",{className:D(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[f("span",{children:"Alerts"}),r.audioNotificationsOptions.enabled?f($_,{size:16,className:"text-[#6E6E77]"}):f(Q_,{size:16,className:"text-[#6E6E77]"})]})}),children:f(ze,{children:"Play a chime when a slowdown is recorded"})})]})},Ir=a=>{let r="";return a.toSorted((o,u)=>u.totalTime-o.totalTime).slice(0,30).filter(o=>o.totalTime>5).forEach(o=>{let u="";u+="Component Name:",u+=o.name,u+=`
`,u+=`Rendered: ${o.count} times
`,u+=`Sum of self times for ${o.name} is ${o.totalTime.toFixed(0)}ms
`,o.changes.props.length>0&&(u+=`Changed props for all ${o.name} instances ("name:count" pairs)
`,o.changes.props.forEach(d=>{u+=`${d.name}:${d.count}x
`})),o.changes.state.length>0&&(u+=`Changed state for all ${o.name} instances ("hook index:count" pairs)
`,o.changes.state.forEach(d=>{u+=`${d.index}:${d.count}x
`})),o.changes.context.length>0&&(u+=`Changed context for all ${o.name} instances ("context display name (if exists):count" pairs)
`,o.changes.context.forEach(d=>{u+=`${d.name}:${d.count}x
`})),r+=u,r+=`
`}),r},eS=({renderTime:a,eHandlerTimeExcludingRenders:r,toRafTime:l,commitTime:o,framePresentTime:u,formattedReactData:d})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${a.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${r.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${l.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${u===null?"":`- how long it took from dom commit for the frame to be presented: ${u.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${d}`,tS=({interactionType:a,name:r,componentPath:l,time:o,renderTime:u,eHandlerTimeExcludingRenders:d,toRafTime:h,commitTime:p,framePresentTime:m,formattedReactData:v})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${a} on the component named ${r}. This component has the following ancestors ${l}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${o.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${u.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${d.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${h.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${p.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${m===null?"":`- how long it took from dom commit for the frame to be presented: ${m.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${v}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,nS=({renderTime:a,otherTime:r,formattedReactData:l})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${a.toFixed(0)}ms
- other time: ${r}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,aS=({renderTime:a,otherTime:r,formattedReactData:l})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${a.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${r}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,rS=({renderTime:a,otherTime:r,formattedReactData:l})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${a.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${r}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${l}`,iS=({interactionType:a,name:r,time:l,renderTime:o,eHandlerTimeExcludingRenders:u,toRafTime:d,commitTime:h,framePresentTime:p,formattedReactData:m})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${a} on a component named ${r}. This means, roughly, the component that handled the ${a} event was named ${r}.

We have a set of high level, and low level data about the performance issue.

The click took ${l.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${o.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${u.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${d.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${h.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${p===null?"":`- how long it took from dom commit for the frame to be presented: ${p.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${m}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,ef=(a,r)=>vn(()=>{switch(a){case"data":switch(r.kind){case"dropped-frames":return rS({formattedReactData:Ir(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return eS({commitTime:r.timing.frameConstruction,eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Ir(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,renderTime:r.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),toRafTime:r.timing.framePreparation})}case"explanation":switch(r.kind){case"dropped-frames":return aS({formattedReactData:Ir(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return iS({commitTime:r.timing.frameConstruction,eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Ir(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,interactionType:r.type,name:Cl(r.componentPath),renderTime:r.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),time:wt(r.timing),toRafTime:r.timing.framePreparation})}case"fix":switch(r.kind){case"dropped-frames":return nS({formattedReactData:Ir(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return tS({commitTime:r.timing.frameConstruction,componentPath:r.componentPath.join(">"),eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Ir(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,interactionType:r.type,name:Cl(r.componentPath),renderTime:r.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),time:wt(r.timing),toRafTime:r.timing.framePreparation})}}}),lS=({selectedEvent:a})=>{const[r,l]=Se("fix"),[o,u]=Se(!1);return f("div",{className:D(["w-full h-full"]),children:[f("div",{className:D(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[f("div",{className:D(["bg-[#18181B] p-1 rounded-t-sm"]),children:f("div",{className:D(["flex items-center gap-x-1"]),children:[f("button",{onClick:()=>l("fix"),className:D(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),f("button",{onClick:()=>l("explanation"),className:D(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),f("button",{onClick:()=>l("data"),className:D(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),f("div",{className:D(["overflow-y-auto h-full"]),children:f("pre",{className:D(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:ef(r,a)})})]}),f("button",{onClick:async()=>{const d=ef(r,a);await navigator.clipboard.writeText(d),u(!0),setTimeout(()=>u(!1),1e3)},className:D(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[f("span",{children:o?"Copied!":"Copy Prompt"}),f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:D(["transition-transform duration-200",o&&"scale-110"]),children:o?f("path",{d:"M20 6L9 17l-5-5"}):f(ze,{children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},oS=(a,r)=>{switch(a.kind){case"dropped-frames":return[...r?[{name:"Total Processing Time",time:wt(a.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:a.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:a.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...r?[]:[{name:"Renders",time:a.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:r?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:a.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:wt(a.timing)-a.timing.renderTime-a.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},sS=({selectedEvent:a})=>{const[r]=Se(Hs()??!1),{notificationState:l}=Jt(),[o,u]=Se(l.routeMessage?.name?[l.routeMessage.name]:[]),d=oS(a,r),h=hf(Df);_e(()=>{if(l.routeMessage?.name){const m=h?.querySelector("#overview-scroll-container"),v=h?.querySelector(`#react-scan-overview-bar-${l.routeMessage.name}`);if(m&&v){const x=v.getBoundingClientRect().top,y=m.getBoundingClientRect().top,_=x-y;m.scrollTop=m.scrollTop+_}}},[l.route]),_e(()=>{l.route==="other-visualization"&&u(m=>l.routeMessage?.name?[l.routeMessage.name]:m)},[l.route]);const p=d.reduce((m,v)=>m+v.time,0);return f("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[f("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:f("div",{className:"flex items-center justify-between",children:[f("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),f("span",{className:"text-xs text-zinc-400",children:["Total: ",p.toFixed(0),"ms"]})]})}),f("div",{className:"divide-y divide-zinc-800",children:d.map(m=>{const v=o.includes(m.kind);return f("div",{id:`react-scan-overview-bar-${m.kind}`,children:[f("button",{onClick:()=>u(x=>x.includes(m.kind)?x.filter(y=>y!==m.kind):[...x,m.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:f("div",{className:"flex-1",children:[f("div",{className:"flex items-center justify-between mb-2",children:[f("div",{className:"flex items-center gap-0.5",children:[f("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${v?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),f("span",{className:"font-medium flex items-center text-left",children:m.name})]}),f("span",{className:" text-zinc-400",children:[m.time.toFixed(0),"ms"]})]}),f("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:f("div",{className:`h-full ${m.color} transition-all`,style:{width:`${m.time/p*100}%`}})})]})}),v&&f("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:f("p",{className:" text-zinc-400 mb-4 text-xs",children:vn(()=>{switch(a.kind){case"interaction":switch(m.kind){case"render":return f(Jr,{input:uS(a)});case"other-javascript":return f(Jr,{input:dS(a)});case"other-not-javascript":return f(Jr,{input:cS(a)})}case"dropped-frames":switch(m.kind){case"total-processing-time":return f(Jr,{input:{kind:"total-processing",data:{time:wt(a.timing)}}});case"render":return f(ze,{children:f(Jr,{input:{kind:"render",data:{topByTime:a.groupedFiberRenders.toSorted((x,y)=>y.totalTime-x.totalTime).slice(0,3).map(x=>({name:x.name,percentage:x.totalTime/wt(a.timing)}))}}})});case"other-frame-drop":return f(Jr,{input:{kind:"other"}})}}})})})]},m.kind)})})]})},cS=a=>{const r=a.groupedFiberRenders.reduce((d,h)=>d+h.count,0),l=a.timing.renderTime,o=wt(a.timing),u=l/o*100;return r>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:r,percentageOfTotal:u,copyButton:f(Bv,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:f(Bv,{})}}},Bv=()=>{const[a,r]=Se(!1),{notificationState:l}=Jt();return f("button",{onClick:async()=>{l.selectedEvent&&(await navigator.clipboard.writeText(ef("explanation",l.selectedEvent)),r(!0),setTimeout(()=>r(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[f("span",{children:a?"Copied!":"Copy Prompt"}),f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:D(["transition-transform duration-200",a&&"scale-110"]),children:a?f("path",{d:"M20 6L9 17l-5-5"}):f(ze,{children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},uS=a=>a.timing.renderTime/wt(a.timing)>.3?{kind:"render",data:{topByTime:a.groupedFiberRenders.toSorted((r,l)=>l.totalTime-r.totalTime).slice(0,3).map(r=>({percentage:r.totalTime/wt(a.timing),name:r.name}))}}:{kind:"other"},dS=a=>{const r=a.groupedFiberRenders.reduce((l,o)=>l+o.count,0);return a.timing.otherJSTime/wt(a.timing)<.2?{kind:"js-explanation-base"}:a.groupedFiberRenders.find(l=>l.count>200)||a.groupedFiberRenders.reduce((l,o)=>l+o.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:r,topByCount:a.groupedFiberRenders.filter(l=>l.count>100).toSorted((l,o)=>o.count-l.count).slice(0,3)}}:a.timing.otherJSTime/wt(a.timing)>.3?a.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:r}}:{kind:"js-explanation-base"}},Jr=({input:a})=>{switch(a.kind){case"total-processing":return f("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),f("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),f("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),f("p",{children:["To understand precisely what caused the slowdown while in production, use the ",f("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),f("p",{})]});case"render":return f("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),f("div",{className:D(["flex flex-col"]),children:[f("p",{children:"The slowest components for this time period were:"}),a.data.topByTime.map(r=>f("div",{children:[f("strong",{children:r.name}),":"," ",(r.percentage*100).toFixed(0),"% of total"]},r.name))]}),f("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),f("p",{children:'The "Ranked" tab shows the render times of every component.'}),f("p",{children:"The render times of the same components are grouped together into one bar."}),f("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return f("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),f("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",f("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",f("code",{children:"'onclick'"}),", ",f("code",{children:"'onchange'"}),") that performed expensive computation."]}),f("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),f("p",{children:["You should profile your app using the"," ",f("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return f("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),a.data.renderCount===0?f(ze,{children:[f("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),f("p",{children:["You should try to reproduce the slowdown while profiling your website with the",f("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):f(ze,{children:[" ",f("p",{children:["There were ",f("strong",{children:a.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",f("code",{children:"useEffects"}),"."]}),f("div",{className:D(["flex flex-col"]),children:[f("p",{children:"You should try optimizing the renders of:"}),a.data.topByCount.map(r=>f("div",{children:["- ",f("strong",{children:r.name})," (rendered ",r.count,"x)"]},r.name))]}),"and then checking if the problem still exists.",f("p",{children:["You can also try profiling your app using the"," ",f("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return f("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),f("p",{children:["There were only ",f("strong",{children:a.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",f("code",{children:"useEffect"}),"/",f("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),f("p",{children:["To understand precisely what caused the slowdown, use the"," ",f("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return f("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),f("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),f("p",{children:["During this interaction, there were"," ",f("strong",{children:a.data.count})," renders, which was"," ",f("strong",{children:[a.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),f("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),f("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),f("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),f("p",{children:a.data.copyButton}),f("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),f("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return f("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),f("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),f("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),f("p",{children:a.data.copyButton}),f("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),f("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return f("div",{className:D(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",f("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),f("p",{children:["To get a better picture of what happened, profile your app using the"," ",f("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},We=null,it=null,$e=ht({kind:"idle",current:null}),wd=null,ri=()=>{wd&&cancelAnimationFrame(wd),wd=requestAnimationFrame(()=>{if(!We||!it)return;it.clearRect(0,0,We.width,We.height);const a="hsl(271, 76%, 53%)",r=$e.value,{alpha:l,current:o}=vn(()=>{switch(r.kind){case"transition":{const u=r.current?.alpha&&r.current.alpha>0?r.current:r.transitionTo;return{alpha:u?u.alpha:0,current:u}}case"move-out":return{alpha:r.current?.alpha??0,current:r.current};case"idle":return{alpha:1,current:r.current}}});switch(o?.rects.forEach(u=>{it&&(it.shadowColor=a,it.shadowBlur=6,it.strokeStyle=a,it.lineWidth=2,it.globalAlpha=l,it.beginPath(),it.rect(u.left,u.top,u.width,u.height),it.stroke(),it.shadowBlur=0,it.beginPath(),it.rect(u.left,u.top,u.width,u.height),it.stroke())}),r.kind){case"move-out":{if(r.current.alpha===0){$e.value={kind:"idle",current:null};return}r.current.alpha<=.01&&(r.current.alpha=0),r.current.alpha=Math.max(0,r.current.alpha-.03),ri();return}case"transition":{if(r.current&&r.current.alpha>0){r.current.alpha=Math.max(0,r.current.alpha-.03),ri();return}if(r.transitionTo.alpha===1){$e.value={kind:"idle",current:r.transitionTo};return}r.transitionTo.alpha=Math.min(r.transitionTo.alpha+.03,1),ri()}case"idle":return}})},xd=null,fS=a=>{if(We=document.createElement("canvas"),it=We.getContext("2d",{alpha:!0}),!it)return null;const r=window.devicePixelRatio||1,{innerWidth:l,innerHeight:o}=window;We.style.width=`${l}px`,We.style.height=`${o}px`,We.width=l*r,We.height=o*r,We.style.position="fixed",We.style.left="0",We.style.top="0",We.style.pointerEvents="none",We.style.zIndex="2147483600",it.scale(r,r),a.appendChild(We),xd&&window.removeEventListener("resize",xd);const u=()=>{if(!We||!it)return;const d=window.devicePixelRatio||1,{innerWidth:h,innerHeight:p}=window;We.style.width=`${h}px`,We.style.height=`${p}px`,We.width=h*d,We.height=p*d,it.scale(d,d),ri()};return xd=u,window.addEventListener("resize",u),$e.subscribe(()=>{requestAnimationFrame(()=>{ri()})}),hS};function hS(){We?.parentNode&&We.parentNode.removeChild(We),We=null,it=null}var fl=()=>{const a=$e.value.current?$e.value.current:$e.value.kind==="transition"?$e.value.transitionTo:null;if(a){if($e.value.kind==="transition"){$e.value={kind:"move-out",current:$e.value.current?.alpha===0?$e.value.transitionTo:$e.value.current??$e.value.transitionTo};return}$e.value={kind:"move-out",current:{alpha:0,...a}}}},pS=({selectedEvent:a})=>{const r=wt(a.timing),l=r-a.timing.renderTime,[o]=Se(Hs()),d=a.groupedFiberRenders.map(v=>({event:v,kind:"render",totalTime:o?v.count:v.totalTime})),h=vn(()=>{switch(a.kind){case"dropped-frames":return a.timing.renderTime/r<.1;case"interaction":return(a.timing.otherJSTime+a.timing.renderTime)/r<.2}});a.kind==="interaction"&&!o&&d.push({kind:"other-javascript",totalTime:a.timing.otherJSTime}),h&&!o&&(a.kind==="interaction"?d.push({kind:"other-not-javascript",totalTime:wt(a.timing)-a.timing.renderTime-a.timing.otherJSTime}):d.push({kind:"other-frame-drop",totalTime:l}));const p=oe({lastCallAt:null,timer:null}),m=d.reduce((v,x)=>v+x.totalTime,0);return f("div",{className:D(["flex flex-col h-full w-full gap-y-1"]),children:[vn(()=>{if(o&&d.length===0)return f("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[f("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),f("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(d.length===0)return f("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[f("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),f("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),d.toSorted((v,x)=>x.totalTime-v.totalTime).map(v=>f(uy,{bars:d,bar:v,debouncedMouseEnter:p,totalBarTime:m,isProduction:o},v.kind==="render"?v.event.id:v.kind))]})},mS=a=>a.current&&a.current.alpha>0?"fading-out":"fading-in",uy=({bar:a,debouncedMouseEnter:r,totalBarTime:l,isProduction:o,bars:u,depth:d=0})=>{const{setNotificationState:h,setRoute:p}=Jt(),[m,v]=Se(!1),x=a.kind==="render"?a.event.parents.size===0:!0,y=u.filter(k=>k.kind==="render"&&a.kind==="render"?a.event.parents.has(k.event.name)&&k.event.name!==a.event.name:!1),_=a.kind==="render"?Array.from(a.event.parents).filter(k=>!u.some(z=>z.kind==="render"&&z.event.name===k)):[],S=()=>{a.kind==="render"?(h(k=>({...k,selectedFiber:a.event})),p({route:"render-explanation",routeMessage:null})):p({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:a.kind}})};return f("div",{className:"w-full",children:[f("div",{className:D(["w-full flex items-center relative text-xs min-w-0"]),children:[f("button",{onMouseLeave:()=>{r.current.timer&&clearTimeout(r.current.timer),fl()},onMouseEnter:async()=>{const k=async()=>{if(r.current.lastCallAt=Date.now(),a.kind!=="render"){const q=$e.value.current?$e.value.current:$e.value.kind==="transition"?$e.value.transitionTo:null;if(!q){$e.value={kind:"idle",current:null};return}$e.value={kind:"move-out",current:{alpha:0,...q}};return}const z=$e.value,R=vn(()=>{switch(z.kind){case"transition":return z.transitionTo;case"idle":case"move-out":return z.current}}),T=[];if(z.kind==="transition"){const q=mS(z);vn(()=>{switch(q){case"fading-in":{$e.value={kind:"transition",current:z.transitionTo,transitionTo:{rects:T,alpha:0,name:a.event.name}};return}case"fading-out":{$e.value={kind:"transition",current:$e.value.current?{alpha:0,...$e.value.current}:null,transitionTo:{rects:T,alpha:0,name:a.event.name}};return}}})}else $e.value={kind:"transition",transitionTo:{rects:T,alpha:0,name:a.event.name},current:R?{alpha:0,...R}:null};const M=a.event.elements.filter(q=>q instanceof Element);for await(const q of ey(M))q.forEach(({boundingClientRect:$})=>{T.push($)}),ri()};if(r.current.lastCallAt&&Date.now()-r.current.lastCallAt<200){r.current.timer&&clearTimeout(r.current.timer),r.current.timer=setTimeout(()=>{k()},200);return}k()},onClick:S,className:D(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[f("div",{style:{minWidth:"fit-content",width:`${a.totalTime/l*100}%`},className:D(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",a.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",a.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",a.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",a.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),f("div",{className:D(["absolute inset-0 flex items-center px-2","min-w-0"]),children:f("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[f("span",{className:D(["truncate"]),children:vn(()=>{switch(a.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return a.event.name}})}),a.kind==="render"&&F_(a.event)&&f("div",{style:{lineHeight:"10px"},className:D(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),f("button",{onClick:()=>a.kind==="render"&&!x&&v(!m),className:D(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!x&&"hover:bg-[#0f0f0f]",a.kind==="render"&&!x?"cursor-pointer":"cursor-default"]),children:[f("div",{className:"w-[20px] flex items-center justify-center",children:a.kind==="render"&&!x&&f(sy,{className:D("transition-transform",m&&"rotate-90"),size:16})}),f("div",{style:{minWidth:x?"fit-content":o?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[a.kind==="render"&&f("span",{className:D(["text-[10px]"]),children:["x",a.event.count]}),(a.kind!=="render"||!o)&&f("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[a.totalTime<1?"<1":a.totalTime.toFixed(0),"ms"]})]})]}),d===0&&f("div",{className:D(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),m&&(y.length>0||_.length>0)&&f("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[y.toSorted((k,z)=>z.totalTime-k.totalTime).map((k,z)=>f(uy,{depth:d+1,bar:k,debouncedMouseEnter:r,totalBarTime:l,isProduction:o,bars:u},z)),_.map(k=>f("div",{className:"w-full",children:f("div",{className:"w-full flex items-center relative text-xs",children:f("div",{className:"h-full w-full flex items-center relative",children:[f("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),f("div",{className:"absolute inset-0 flex items-center px-2",children:f("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:k})})]})})},k))]})]})},gS=({selectedEvent:a,selectedFiber:r})=>{const{setRoute:l}=Jt(),[o,u]=Se(!0),[d]=Se(Hs());ff(()=>{const p=localStorage.getItem("react-scan-tip-shown"),m=p==="true"?!0:p==="false"?!1:null;if(m===null){u(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}m||u(!1)},[]);const h=r.changes.context.length===0&&r.changes.props.length===0&&r.changes.state.length===0;return f("div",{className:D(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[f("div",{className:D(["flex items-start gap-x-4 "]),children:[f("button",{onClick:()=>{l({route:"render-visualization",routeMessage:null})},className:D(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[f(Z_,{size:14})," ",f("span",{children:"Overview"})]}),f("div",{className:D(["flex flex-col gap-y-1"]),children:[f("div",{className:D(["text-sm font-bold text-white overflow-x-hidden"]),children:f("div",{className:"flex items-center gap-x-2 truncate",children:r.name})}),f("div",{className:D(["flex gap-x-2"]),children:[!d&&f(ze,{children:f("div",{className:D(["text-xs text-gray-400"]),children:["• Render time: ",r.totalTime.toFixed(0),"ms"]})}),f("div",{className:D(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",r.count,"x"]})]})]})]}),o&&!h&&f("div",{className:D(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[f("button",{onClick:()=>{u(!1),localStorage.setItem("react-scan-tip-shown","false")},className:D(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:f(Es,{size:12})}),f("div",{className:D(["w-1 bg-[#d36cff]"])}),f("div",{className:D(["flex-1"]),children:[f("div",{className:D(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),f("div",{className:D(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),h&&f("div",{className:D(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[f("div",{className:D(["w-1 bg-[#d36cff]"])}),f("div",{className:D(["flex-1"]),children:[f("div",{className:D(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),f("div",{className:D(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),f("div",{className:D(["flex w-full"]),children:[f("div",{className:D(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[f("div",{className:D(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),r.changes.props.length>0?r.changes.props.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:D(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[f("span",{className:D(["text-white "]),children:p.name}),f("div",{className:D([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[p.count,"/",r.count,"x"]})]},p.name)):f("div",{className:D(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),f("div",{className:D(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[f("div",{className:D([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),r.changes.state.length>0?r.changes.state.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:D(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[f("span",{className:D(["text-white "]),children:["index ",p.index]}),f("div",{className:D(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[p.count,"/",r.count,"x"]})]},p.index)):f("div",{className:D(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),f("div",{className:D(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[f("div",{className:D([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),r.changes.context.length>0?r.changes.context.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:D(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[f("span",{className:D(["text-white "]),children:p.name}),f("div",{className:D(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[p.count,"/",r.count,"x"]})]},p.name)):f("div",{className:D(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},vS=()=>{const{notificationState:a,setNotificationState:r}=Jt(),[l,o]=Se("..."),u=oe(null);if(_e(()=>{const d=setInterval(()=>{o(h=>h==="..."?"":h+".")},500);return()=>clearInterval(d)},[]),!a.selectedEvent)return f("div",{ref:u,className:D(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[f("div",{className:D(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},children:f(Es,{size:18,className:"text-[#6F6F78]"})})}),f("div",{className:D(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:f("div",{className:D(["flex flex-col items-start gap-y-4"]),children:[f("div",{className:D(["flex items-center"]),children:f("span",{className:D(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",l]})}),a.events.length!==0&&f("p",{className:D(["text-xs"]),children:["Click on an item in the"," ",f("span",{className:D(["text-purple-400"]),children:"History"})," list to get started"]}),f("p",{className:D(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),f("p",{className:D(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),f("button",{onClick:()=>{if(a.audioNotificationsOptions.enabled){r(h=>(h.audioNotificationsOptions.audioContext?.state!=="closed"&&h.audioNotificationsOptions.audioContext?.close(),localStorage.setItem("react-scan-notifications-audio","false"),{...h,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem("react-scan-notifications-audio","true");const d=new AudioContext;bf(d),r(h=>({...h,audioNotificationsOptions:{enabled:!0,audioContext:d}}))},className:D(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:a.audioNotificationsOptions.enabled?f(ze,{children:f("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):f(ze,{children:f("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(a.route){case"render-visualization":return f(ts,{children:f(pS,{selectedEvent:a.selectedEvent})});case"render-explanation":{if(!a.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return f(ts,{children:f(gS,{selectedFiber:a.selectedFiber,selectedEvent:a.selectedEvent})})}case"other-visualization":return f(ts,{children:f("div",{className:D(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:f(sS,{selectedEvent:a.selectedEvent})})});case"optimize":return f(ts,{children:f(lS,{selectedEvent:a.selectedEvent})})}a.route},ts=({children:a})=>{const{notificationState:r}=Jt();if(!r.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return f("div",{className:D(["w-full h-full flex flex-col gap-y-2"]),children:[f("div",{className:D(["h-[50px] w-full"]),children:f(P_,{selectedEvent:r.selectedEvent})}),f("div",{className:D(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:a})]})},yS=({selectedEvent:a})=>{const r=Ml(a);switch(a.kind){case"interaction":return f("div",{className:D(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:f("div",{className:D(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[f("div",{className:D(["flex items-center gap-x-2 "]),children:[f("span",{className:D(["text-[#5a5a5a] mr-0.5"]),children:a.type==="click"?"Clicked ":"Typed in "}),f("span",{children:Cl(a.componentPath)}),f("div",{className:D(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",r==="low"&&"bg-green-500/50",r==="needs-improvement"&&"bg-[#b77116]",r==="high"&&"bg-[#b94040]"]),children:[wt(a.timing).toFixed(0),"ms processing time"]})]}),f("div",{className:D(["flex items-center gap-x-2  justify-end ml-auto"]),children:f("div",{className:D(["p-2 flex justify-center items-center border-[#27272A]"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},title:"Close",children:f(Es,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return f("div",{className:D(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:f("div",{className:D(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[f("div",{className:D(["flex items-center gap-x-2 "]),children:["FPS Drop",f("div",{className:D(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",r==="low"&&"bg-green-500/50",r==="needs-improvement"&&"bg-[#b77116]",r==="high"&&"bg-[#b94040]"]),children:["dropped to ",a.fps," FPS"]})]}),f("div",{className:D(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:f("div",{className:D(["p-2 flex justify-center items-center border-[#27272A]"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},children:f(Es,{size:18,className:"text-[#6F6F78]"})})})})]})})}},bS=({flashingItemsCount:a,totalEvents:r})=>{const[l,o]=Se(!1),u=oe(0),d=oe(0);return _e(()=>{if(u.current>=r)return;const h=Date.now(),p=250,m=h-d.current;if(m>=p){o(!1);const v=setTimeout(()=>{u.current=r,d.current=Date.now(),o(!0),setTimeout(()=>{o(!1)},2e3)},50);return()=>clearTimeout(v)}else{const v=p-m,x=setTimeout(()=>{o(!1),setTimeout(()=>{u.current=r,d.current=Date.now(),o(!0),setTimeout(()=>{o(!1)},2e3)},50)},v);return()=>clearTimeout(x)}},[a]),l},Yv=({item:a,shouldFlash:r})=>{const[l,o]=Se(!1),u=a.events.map(Ml).reduce((p,m)=>{switch(m){case"high":return"high";case"needs-improvement":return p==="high"?"high":"needs-improvement";case"low":return p}},"low"),d=a.events.reduce((p,m)=>r(m.id)?p+1:p,0),h=bS({flashingItemsCount:d,totalEvents:a.events.length});return f("div",{className:D(["flex flex-col gap-y-0.5"]),children:[f("button",{onClick:()=>o(p=>!p),className:D(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",h&&!l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:D(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[f("span",{className:D(["min-w-fit"]),children:f(sy,{className:D(["text-[#A1A1AA] transition-transform",l?"rotate-90":""]),size:14},`chevron-${a.timestamp}`)}),f("span",{className:D(["text-xs"]),children:a.kind==="collapsed-frame-drops"?"FPS Drops":Cl(a.events.at(0)?.componentPath??[])})]}),f("div",{className:D(["ml-auto min-w-fit flex justify-end items-center"]),children:f("div",{style:{lineHeight:"10px"},className:D(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",u==="low"&&"bg-green-500/60",u==="needs-improvement"&&"bg-[#b77116] text-[10px]",u==="high"&&"bg-[#b94040]"]),children:["x",a.events.length]})})]}),l&&f(wS,{children:a.events.toSorted((p,m)=>m.timestamp-p.timestamp).map(p=>f(dy,{event:p,shouldFlash:r(p.id)}))})]})},wS=({children:a})=>f("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[f("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),a]}),xS=a=>{const r=oe([]),[l,o]=Se(new Set),u=oe(!0);return _e(()=>{if(u.current){u.current=!1,r.current=a;return}const d=new Set(a.map(m=>m.id)),h=new Set(r.current.map(m=>m.id)),p=new Set;d.forEach(m=>{h.has(m)||p.add(m)}),p.size>0&&(o(p),setTimeout(()=>{o(new Set)},2e3)),r.current=a},[a]),d=>l.has(d)},_S=({shouldFlash:a})=>{const[r,l]=Se(a);return _e(()=>{if(a){l(!0);const o=setTimeout(()=>{l(!1)},1e3);return()=>clearTimeout(o)}},[a]),r},dy=({event:a,shouldFlash:r})=>{const{notificationState:l,setNotificationState:o}=Jt(),u=Ml(a),d=_S({shouldFlash:r});switch(a.kind){case"interaction":return f("button",{onClick:()=>{o(h=>({...h,selectedEvent:a,route:"render-visualization",selectedFiber:null}))},className:D(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",a.id===l.selectedEvent?.id&&"bg-[#18181B]",d&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:D(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[f("span",{className:D(["min-w-fit text-xs"]),children:vn(()=>{switch(a.type){case"click":return f(I_,{size:14});case"keyboard":return f(J_,{size:14})}})}),f("span",{className:D(["text-xs pr-1 truncate"]),children:Cl(a.componentPath)})]}),f("div",{className:D([" min-w-fit flex justify-end items-center ml-auto"]),children:f("div",{style:{lineHeight:"10px"},className:D(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",u==="low"&&"bg-green-500/50",u==="needs-improvement"&&"bg-[#b77116] text-[10px]",u==="high"&&"bg-[#b94040]"]),children:f("div",{style:{lineHeight:"10px"},className:D(["text-[10px] text-white flex items-end"]),children:[wt(a.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return f("button",{onClick:()=>{o(h=>({...h,selectedEvent:a,route:"render-visualization",selectedFiber:null}))},className:D(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",a.id===l.selectedEvent?.id&&"bg-[#18181B]",d&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:D(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[f(W_,{size:14,className:"mr-1.5"})," FPS Drop"]}),f("div",{className:D([" min-w-fit flex justify-end items-center ml-auto"]),children:f("div",{style:{lineHeight:"10px"},className:D(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",u==="low"&&"bg-green-500/60",u==="needs-improvement"&&"bg-[#b77116] text-[10px]",u==="high"&&"bg-[#b94040]"]),children:[a.fps," FPS"]})})]})}},SS=a=>a.reduce((l,o)=>{const u=l.at(-1);if(!u)return[{kind:"single",event:o,timestamp:o.timestamp}];switch(u.kind){case"collapsed-keyboard":return o.kind==="interaction"&&o.type==="keyboard"&&o.componentPath.join("-")===u.events[0].componentPath.join("-")?[...l.filter(h=>h!==u),{kind:"collapsed-keyboard",events:[...u.events,o],timestamp:Math.max(...[...u.events,o].map(h=>h.timestamp))}]:[...l,{kind:"single",event:o,timestamp:o.timestamp}];case"single":return u.event.kind==="interaction"&&u.event.type==="keyboard"&&o.kind==="interaction"&&o.type==="keyboard"&&u.event.componentPath.join("-")===o.componentPath.join("-")?[...l.filter(h=>h!==u),{kind:"collapsed-keyboard",events:[u.event,o],timestamp:Math.max(u.event.timestamp,o.timestamp)}]:u.event.kind==="dropped-frames"&&o.kind==="dropped-frames"?[...l.filter(h=>h!==u),{kind:"collapsed-frame-drops",events:[u.event,o],timestamp:Math.max(u.event.timestamp,o.timestamp)}]:[...l,{kind:"single",event:o,timestamp:o.timestamp}];case"collapsed-frame-drops":return o.kind==="dropped-frames"?[...l.filter(h=>h!==u),{kind:"collapsed-frame-drops",events:[...u.events,o],timestamp:Math.max(...[...u.events,o].map(h=>h.timestamp))}]:[...l,{kind:"single",event:o,timestamp:o.timestamp}]}},[]),fy=(a=150)=>{const{notificationState:r}=Jt(),[l,o]=Se(r.events);return _e(()=>{setTimeout(()=>{o(r.events)},a)},[r.events]),[l,o]},TS=()=>{const{notificationState:a,setNotificationState:r}=Jt(),l=xS(a.events),[o,u]=fy(),d=SS(o).toSorted((h,p)=>p.timestamp-h.timestamp);return f("div",{className:D(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[f("div",{className:D(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[f("span",{children:"History"}),f(cy,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:f("button",{className:D(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{Tl.getState().actions.clear(),r(h=>({...h,selectedEvent:null,selectedFiber:null,route:h.route==="other-visualization"?"other-visualization":"render-visualization"})),u([])},children:f(K_,{className:D([""]),size:16})}),children:f("div",{className:D(["w-full flex justify-center"]),children:"Clear all events"})})]}),f("div",{className:D(["flex flex-col px-1 gap-y-1"]),children:[d.length===0&&f("div",{className:D(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),d.map(h=>vn(()=>{switch(h.kind){case"collapsed-keyboard":return f(Yv,{shouldFlash:l,item:h});case"single":return f(dy,{event:h.event,shouldFlash:l(h.event.id)},h.event.id);case"collapsed-frame-drops":return f(Yv,{shouldFlash:l,item:h})}}))]})]})},CS=a=>Object.values(a).map(l=>({id:mn(),totalTime:l.nodeInfo.reduce((o,u)=>o+u.selfTime,0),count:l.nodeInfo.length,name:l.nodeInfo[0].name,deletedAll:!1,parents:l.parents,hasMemoCache:l.hasMemoCache,wasFiberRenderMount:l.wasFiberRenderMount,elements:l.nodeInfo.map(o=>o.element),changes:{context:l.changes.fiberContext.current.filter(o=>l.changes.fiberContext.changesCounts.get(o.name)).map(o=>({name:String(o.name),count:l.changes.fiberContext.changesCounts.get(o.name)??0})),props:l.changes.fiberProps.current.filter(o=>l.changes.fiberProps.changesCounts.get(o.name)).map(o=>({name:String(o.name),count:l.changes.fiberProps.changesCounts.get(o.name)??0})),state:l.changes.fiberState.current.filter(o=>l.changes.fiberState.changesCounts.get(Number(o.name))).map(o=>({index:o.name,count:l.changes.fiberState.changesCounts.get(Number(o.name))??0}))}})),kS=a=>{_e(()=>{const l=setInterval(()=>{a.forEach(o=>{o.groupedFiberRenders&&o.groupedFiberRenders.forEach(u=>{if(u.deletedAll)return;if(!u.elements||u.elements.length===0){u.deletedAll=!0;return}const d=u.elements.length;u.elements=u.elements.filter(h=>h&&h.isConnected),u.elements.length===0&&d>0&&(u.deletedAll=!0)})})},5e3);return()=>{clearInterval(l)}},[a])},hy=()=>{const a=B_(),r=[];return kS(r),a.state.events.forEach(l=>{const o=l.kind==="interaction"?l.data.meta.detailedTiming.fiberRenders:l.data.meta.fiberRenders,u=CS(o),d=u.reduce((h,p)=>h+p.totalTime,0);switch(l.kind){case"interaction":{const{commitEnd:h,jsEndDetail:p,interactionStartDetail:m,rafStart:v}=l.data.meta.detailedTiming,x=Math.max(0,p-m-d),y=Math.max(l.data.meta.latency-(h-m),0);r.push({componentPath:l.data.meta.detailedTiming.componentPath,groupedFiberRenders:u,id:l.id,kind:"interaction",memory:null,timestamp:l.data.startAt,type:l.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:d,kind:"interaction",otherJSTime:x,framePreparation:v-p,frameConstruction:h-v,frameDraw:y}});return}case"long-render":{r.push({kind:"dropped-frames",id:l.id,memory:null,timing:{kind:"dropped-frames",renderTime:d,otherTime:l.data.meta.latency},groupedFiberRenders:u,timestamp:l.data.startAt,fps:l.data.meta.fps});return}}}),r},ES=1e3,NS=()=>{const{notificationState:a,setNotificationState:r}=Jt(),l=oe(null),o=oe(null),u=oe(0),[d]=fy(),h=d.filter(p=>Ml(p)==="high").length;return _e(()=>{const p=localStorage.getItem("react-scan-notifications-audio");if(p!=="false"&&p!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(p!=="false"){r(v=>v.audioNotificationsOptions.enabled?v:{...v,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),_e(()=>{const{audioNotificationsOptions:p}=a;if(!p.enabled||h===0||l.current&&l.current>=h)return;o.current&&clearTimeout(o.current);const v=Date.now()-u.current,x=Math.max(0,ES-v);o.current=setTimeout(()=>{bf(p.audioContext),l.current=h,u.current=Date.now(),o.current=null},x)},[h]),_e(()=>{h===0&&(l.current=null)},[h]),_e(()=>()=>{o.current&&clearTimeout(o.current)},[]),null},zS=vf((a,r)=>{const l=hy(),[o,u]=Se({detailsExpanded:!1,events:l,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:l.toSorted((d,h)=>d.timestamp-h.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return o.events=l,f(oy.Provider,{value:{notificationState:o,setNotificationState:u,setRoute:({route:d,routeMessage:h})=>{u(p=>{const m={...p,route:d,routeMessage:h};switch(d){case"render-visualization":return fl(),{...m,selectedFiber:null};case"optimize":return fl(),{...m,selectedFiber:null};case"other-visualization":return fl(),{...m,selectedFiber:null};case"render-explanation":return fl(),m}})}},children:[f(NS,{}),f(AS,{ref:r})]})}),AS=vf((a,r)=>{const{notificationState:l}=Jt();return f("div",{ref:r,className:D(["h-full w-full flex flex-col"]),children:[l.selectedEvent&&f("div",{className:D(["w-full h-[48px] flex flex-col",l.moreInfoExpanded&&"h-[235px]",l.moreInfoExpanded&&l.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[f(yS,{selectedEvent:l.selectedEvent}),l.moreInfoExpanded&&f(MS,{})]}),f("div",{className:D(["flex ",l.selectedEvent?"h-[calc(100%-48px)]":"h-full",l.moreInfoExpanded&&"h-[calc(100%-200px)]",l.moreInfoExpanded&&l.selectedEvent?.kind==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[f("div",{className:D(["h-full min-w-[200px]"]),children:f(TS,{})}),f("div",{className:D(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:f(vS,{})})]})]})}),MS=()=>{const{notificationState:a}=Jt();if(!a.selectedEvent)throw new Error("Invariant must have selected event for more info");const r=a.selectedEvent;return f("div",{className:D(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",r.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:f("div",{className:D(["flex flex-col gap-y-4 h-full"]),children:vn(()=>{switch(r.kind){case"interaction":return f(ze,{children:[f("div",{className:D(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:r.type==="click"?"Clicked component location":"Typed in component location"}),f("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:r.componentPath.toReversed().map((l,o)=>f(ze,{children:[f("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:l},l),o<r.componentPath.length-1&&f("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),f("div",{className:D(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[wt(r.timing).toFixed(0),"ms"]})]}),f("div",{className:D(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-r.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return f(ze,{children:[f("div",{className:D(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[wt(r.timing).toFixed(0),"ms"]})]}),f("div",{className:D(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-r.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},DS=xf(()=>{const a=hy(),[r,l]=Se(a);_e(()=>{const _=setTimeout(()=>{l(a)},600);return()=>{clearTimeout(_)}},[a]);const o=ee.inspectState,u=o.value.kind==="inspecting",d=o.value.kind==="focused",[h,p]=Se([]),m=lt(()=>{switch(ee.inspectState.value.kind){case"inspecting":{Qe.value={view:"none"},ee.inspectState.value={kind:"inspect-off"};return}case"focused":{Qe.value={view:"inspector"},ee.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Qe.value={view:"none"},ee.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),v=lt(_=>{if(_.preventDefault(),_.stopPropagation(),!Ae.instrumentation)return;const S=!Ae.instrumentation.isPaused.value;Ae.instrumentation.isPaused.value=S;const k=Kn("react-scan-options");Lt("react-scan-options",{...k,enabled:!S})},[]);_l(()=>{ee.inspectState.value.kind==="uninitialized"&&(ee.inspectState.value={kind:"inspect-off"})});let x=null,y="#999";return u?(x=f(nt,{name:"icon-inspect"}),y="#8e61e3"):d?(x=f(nt,{name:"icon-focus"}),y="#8e61e3"):(x=f(nt,{name:"icon-inspect"}),y="#999"),ff(()=>{if(Qe.value.view!=="notifications")return;const _=new Set(a.map(S=>S.id));p([..._.values()])},[a.length,Qe.value.view]),f("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[f("div",{className:"h-full flex items-center min-w-fit",children:f("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:m,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:y},children:x})}),f("div",{className:"h-full flex items-center justify-center",children:f("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ee.inspectState.value.kind!=="inspect-off"&&(ee.inspectState.value={kind:"inspect-off"}),Qe.value.view){case"inspector":{ee.inspectState.value={kind:"inspect-off"};const _=new Set(a.map(S=>S.id));p([..._.values()]),Qe.value={view:"notifications"};return}case"notifications":{Qe.value={view:"none"};return}case"none":{const _=new Set(a.map(S=>S.id));p([..._.values()]),Qe.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:y},children:f(G_,{events:r.filter(_=>!h.includes(_.id)).map(_=>Ml(_)==="high"),size:16,className:D(["text-[#999]",Qe.value.view==="notifications"&&"text-[#8E61E3]"])})})}),f(b_,{checked:!Ae.instrumentation?.isPaused.value,onChange:v,className:"place-self-center",title:"Outline Re-renders"}),Ae.options.value.showFPS&&f(x_,{})]})}),OS=cr(()=>ee.inspectState.value.kind==="inspecting"),RS=cr(()=>D("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",OS.value&&"opacity-0 duration-0 delay-0")),US=cr(()=>Qe.value.view==="inspector"),HS=cr(()=>Qe.value.view==="notifications"),jS=()=>f("div",{className:D("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[f("div",{className:RS,children:[f(y_,{}),f("div",{className:D("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[f(Xv,{isOpen:US,children:f(T2,{})}),f(Xv,{isOpen:HS,children:f(zS,{})})]})]}),f(DS,{})]}),Xv=({isOpen:a,children:r})=>f("div",{className:D("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",a.value&&"opacity-100 delay-150 pointer-events-auto"),children:f("div",{className:"absolute inset-0 flex",children:r})}),ns=(a,r,l)=>a+(r-a)*l,_d={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Kr=En&&window.devicePixelRatio||1,LS=()=>{const a=oe(null),r=oe(null),l=oe(null),o=oe(null),u=oe(null),d=oe(0),h=oe(),p=oe(new Map),m=oe(!1),v=oe(0),x=(w,N,U,Q)=>{w.save(),w.strokeStyle="white",w.fillStyle="white",w.lineWidth=1.5;const J=Q*.6,C=Q*.5,H=N+(Q-J)/2,F=U;w.beginPath(),w.arc(H+J/2,F+C/2,J/2,Math.PI,0,!1),w.stroke();const I=Q*.8,W=Q*.5,ae=N+(Q-I)/2,fe=U+C/2;w.fillRect(ae,fe,I,W),w.restore()},y=(w,N,U,Q)=>{if(!Q)return;const J=24,C=8,F=(Q?.type&&bt(Q.type))??"Unknown";w.save(),w.font="12px system-ui, -apple-system, sans-serif";const W=w.measureText(F).width,ae=U==="locked"?14:0,fe=U==="locked"?6:0,Me=W+C*2+ae+fe,be=N.left,pt=N.top-J-4;if(w.fillStyle="rgb(37, 37, 38, .75)",w.beginPath(),w.roundRect(be,pt,Me,J,3),w.fill(),U==="locked"){const Wn=be+C,Ma=pt+(J-ae)/2+2;x(w,Wn,Ma,ae),o.current={x:Wn,y:Ma,width:ae,height:ae}}else o.current=null;w.fillStyle="white",w.textBaseline="middle";const Nn=be+C+(U==="locked"?ae+fe:0);w.fillText(F,Nn,pt+J/2),w.restore()},_=(w,N,U,Q)=>{if(!l.current)return;const J=l.current;N.clearRect(0,0,w.width,w.height),N.strokeStyle="rgba(142, 97, 227, 0.5)",N.fillStyle="rgba(173, 97, 230, 0.10)",U==="locked"?N.setLineDash([]):N.setLineDash([4]),N.lineWidth=1,N.fillRect(J.left,J.top,J.width,J.height),N.strokeRect(J.left,J.top,J.width,J.height),y(N,J,U,Q)},S=(w,N,U,Q,J,C)=>{const H=Ae.options.value.animationSpeed,F=_d.speeds[H]??_d.speeds.off,I=W=>{if(W-v.current<_d.frameInterval){d.current=requestAnimationFrame(I);return}if(v.current=W,!l.current){cancelAnimationFrame(d.current);return}l.current={left:ns(l.current.left,U.left,F),top:ns(l.current.top,U.top,F),width:ns(l.current.width,U.width,F),height:ns(l.current.height,U.height,F)},_(w,N,Q,J),Math.abs(l.current.left-U.left)>.1||Math.abs(l.current.top-U.top)>.1||Math.abs(l.current.width-U.width)>.1||Math.abs(l.current.height-U.height)>.1?d.current=requestAnimationFrame(I):(l.current=U,_(w,N,Q,J),cancelAnimationFrame(d.current),N.restore())};cancelAnimationFrame(d.current),clearTimeout(h.current),d.current=requestAnimationFrame(I),h.current=setTimeout(()=>{cancelAnimationFrame(d.current),l.current=U,_(w,N,Q,J),N.restore()},1e3)},k=(w,N,U,Q,J)=>{if(N.save(),!l.current){l.current=U,_(w,N,Q,J),N.restore();return}S(w,N,U,Q,J)},z=async(w,N,U,Q)=>{if(!w||!N||!U)return;const{parentCompositeFiber:J}=nr(w),C=await C2(w);!J||!C||k(N,U,C,Q,J)},R=()=>{for(const w of p.current.values())w?.()},T=w=>{const N=w.getContext("2d");N&&N.clearRect(0,0,w.width,w.height),l.current=null,o.current=null,u.current=null,w.classList.remove("fade-in"),m.current=!1},M=w=>{if(!a.current||m.current)return;const N=Q=>{!a.current||Q.propertyName!=="opacity"||!m.current||(a.current.removeEventListener("transitionend",N),T(a.current),w?.())},U=p.current.get("fade-out");U&&(U(),p.current.delete("fade-out")),a.current.addEventListener("transitionend",N),p.current.set("fade-out",()=>{a.current?.removeEventListener("transitionend",N)}),m.current=!0,a.current.classList.remove("fade-in"),requestAnimationFrame(()=>{a.current?.classList.add("fade-out")})},q=()=>{a.current&&(m.current=!1,a.current.classList.remove("fade-out"),requestAnimationFrame(()=>{a.current?.classList.add("fade-in")}))},$=w=>{w!==u.current&&(u.current=w,$d.has(w.tagName)?M():q(),ee.inspectState.value={kind:"inspecting",hoveredDomElement:w})},Z=()=>{!l.current||!a.current||m.current||M()},K=L0(w=>{if(ee.inspectState.peek().kind!=="inspecting"||!r.current)return;r.current.style.pointerEvents="none";const U=document.elementFromPoint(w?.clientX??0,w?.clientY??0);if(r.current.style.removeProperty("pointer-events"),clearTimeout(h.current),U&&U!==a.current){const{parentCompositeFiber:Q}=nr(U);if(Q){const J=xs(Q);if(J){$(J);return}}}Z()},32),P=(w,N)=>{const U=o.current;if(!U)return!1;const Q=N.getBoundingClientRect(),J=N.width/Q.width,C=N.height/Q.height,H=(w.clientX-Q.left)*J,F=(w.clientY-Q.top)*C,I=H/Kr,W=F/Kr;return I>=U.x&&I<=U.x+U.width&&W>=U.y&&W<=U.y+U.height},he=w=>{w.kind==="focused"&&(ee.inspectState.value={kind:"inspecting",hoveredDomElement:w.focusedDomElement})},ce=w=>{const N=["react-scan-inspect-element","react-scan-power"];if(w.target instanceof HTMLElement&&N.includes(w.target.id))return;const U=u.current?.tagName;if(U&&$d.has(U))return;w.preventDefault(),w.stopPropagation();const Q=u.current??document.elementFromPoint(w.clientX,w.clientY);if(!Q)return;const J=w.composedPath().at(0);if(J instanceof HTMLElement&&N.includes(J.id)){const F=new MouseEvent(w.type,w);F.__reactScanSyntheticEvent=!0,J.dispatchEvent(F);return}const{parentCompositeFiber:C}=nr(Q);if(!C)return;const H=xs(C);if(!H){u.current=null,ee.inspectState.value={kind:"inspect-off"};return}ee.inspectState.value={kind:"focused",focusedDomElement:H,fiber:C}},ye=w=>{if(w.__reactScanSyntheticEvent)return;const N=ee.inspectState.peek(),U=a.current;if(!(!U||!r.current)){if(P(w,U)){w.preventDefault(),w.stopPropagation(),he(N);return}N.kind==="inspecting"&&ce(w)}},ue=w=>{if(w.key!=="Escape")return;const N=ee.inspectState.peek();if(a.current&&document.activeElement?.id!=="react-scan-root"&&(Qe.value={view:"none"},N.kind==="focused"||N.kind==="inspecting"))switch(w.preventDefault(),w.stopPropagation(),N.kind){case"focused":{q(),l.current=null,u.current=N.focusedDomElement,ee.inspectState.value={kind:"inspecting",hoveredDomElement:N.focusedDomElement};break}case"inspecting":{M(()=>{Us.value=!1,ee.inspectState.value={kind:"inspect-off"}});break}}},re=(w,N,U)=>{p.current.get(w.kind)?.(),r.current&&w.kind!=="inspecting"&&(r.current.style.pointerEvents="none"),d.current&&cancelAnimationFrame(d.current);let Q;switch(w.kind){case"inspect-off":M();return;case"inspecting":z(w.hoveredDomElement,N,U,"inspecting");break;case"focused":if(!w.focusedDomElement)return;u.current!==w.focusedDomElement&&(u.current=w.focusedDomElement),Qe.value={view:"inspector"},z(w.focusedDomElement,N,U,"locked"),Q=ee.lastReportTime.subscribe(()=>{if(d.current&&l.current){const{parentCompositeFiber:J}=nr(w.focusedDomElement);J&&z(w.focusedDomElement,N,U,"locked")}}),Q&&p.current.set(w.kind,Q);break}},Xe=(w,N)=>{const U=w.getBoundingClientRect();w.width=U.width*Kr,w.height=U.height*Kr,N.scale(Kr,Kr),N.save()},je=()=>{const w=ee.inspectState.peek(),N=a.current;if(!N)return;const U=N?.getContext("2d");U&&(cancelAnimationFrame(d.current),clearTimeout(h.current),Xe(N,U),l.current=null,w.kind==="focused"&&w.focusedDomElement?z(w.focusedDomElement,N,U,"locked"):w.kind==="inspecting"&&w.hoveredDomElement&&z(w.hoveredDomElement,N,U,"inspecting"))},Ue=w=>{const N=ee.inspectState.peek(),U=a.current;U&&(N.kind==="inspecting"||P(w,U))&&(w.preventDefault(),w.stopPropagation(),w.stopImmediatePropagation())};return _e(()=>{const w=a.current;if(!w)return;const N=w?.getContext("2d");if(!N)return;Xe(w,N);const U=ee.inspectState.subscribe(Q=>{re(Q,w,N)});return window.addEventListener("scroll",je,{passive:!0}),window.addEventListener("resize",je,{passive:!0}),document.addEventListener("pointermove",K,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Ue,{capture:!0}),document.addEventListener("click",ye,{capture:!0}),document.addEventListener("keydown",ue,{capture:!0}),()=>{R(),U(),window.removeEventListener("scroll",je),window.removeEventListener("resize",je),document.removeEventListener("pointermove",K,{capture:!0}),document.removeEventListener("click",ye,{capture:!0}),document.removeEventListener("pointerdown",Ue,{capture:!0}),document.removeEventListener("keydown",ue,{capture:!0}),d.current&&cancelAnimationFrame(d.current),clearTimeout(h.current)}},[]),f(ze,{children:[f("div",{ref:r,className:D("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),f("canvas",{ref:a,dir:"ltr",className:D("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},BS=class{constructor(a,r){this.width=a,this.height=r,this.maxWidth=a-me*2,this.maxHeight=r-me*2}rightEdge(a){return this.width-a-me}bottomEdge(a){return this.height-a-me}isFullWidth(a){return a>=this.maxWidth}isFullHeight(a){return a>=this.maxHeight}},Wr,kl=()=>{const a=window.innerWidth,r=window.innerHeight;return Wr&&Wr.width===a&&Wr.height===r||(Wr=new BS(a,r)),Wr},YS=(a,r,l,o,u)=>{if(l){if(a==="top-left")return"bottom-right";if(a==="top-right")return"bottom-left";if(a==="bottom-left")return"top-right";if(a==="bottom-right")return"top-left";const[d,h]=r.split("-");if(a==="left")return`${d}-right`;if(a==="right")return`${d}-left`;if(a==="top")return`bottom-${h}`;if(a==="bottom")return`top-${h}`}if(o){if(a==="left")return`${r.split("-")[0]}-right`;if(a==="right")return`${r.split("-")[0]}-left`}if(u){if(a==="top")return`bottom-${r.split("-")[1]}`;if(a==="bottom")return`top-${r.split("-")[1]}`}return r},gl=(a,r,l)=>{const o=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth,d=window.innerHeight,h=r===ft.width,p=h?r:Math.min(r,u-me*2),m=h?l:Math.min(l,d-me*2);let v,x,y=me,_=u-p-me,S=me,k=d-m-me;switch(a){case"top-right":v=o?-y:_,x=S;break;case"bottom-right":v=o?-y:_,x=k;break;case"bottom-left":v=o?-_:y,x=k;break;case"top-left":v=o?-_:y,x=S;break;default:v=y,x=S;break}return h&&(o?v=Math.min(-y,Math.max(v,-_)):v=Math.max(y,Math.min(v,_)),x=Math.max(S,Math.min(x,k))),{x:v,y:x}},XS=(a,r)=>{const[l,o]=r.split("-");return a!==l&&a!==o},qS=(a,r,l,o)=>l&&o?!0:!l&&!o?XS(a,r):l?a!==r.split("-")[0]:o?a!==r.split("-")[1]:!1,as=(a,r,l)=>{const o=l?ft.width:ft.initialHeight,u=l?kl().maxWidth:kl().maxHeight,d=a+r;return Math.min(Math.max(o,d),u)},VS=(a,r,l,o,u)=>{const d=getComputedStyle(document.body).direction==="rtl",h=window.innerWidth-me*2,p=window.innerHeight-me*2;let m=r.width,v=r.height,x=l.x,y=l.y;if(d&&a.includes("right")){const R=-l.x+r.width-me,T=Math.min(r.width+o,R);m=Math.min(h,Math.max(ft.width,T)),x=l.x+(m-r.width)}if(d&&a.includes("left")){const R=window.innerWidth-l.x-me,T=Math.min(r.width-o,R);m=Math.min(h,Math.max(ft.width,T))}if(!d&&a.includes("right")){const R=window.innerWidth-l.x-me,T=Math.min(r.width+o,R);m=Math.min(h,Math.max(ft.width,T))}if(!d&&a.includes("left")){const R=l.x+r.width-me,T=Math.min(r.width-o,R);m=Math.min(h,Math.max(ft.width,T)),x=l.x-(m-r.width)}if(a.includes("bottom")){const R=window.innerHeight-l.y-me,T=Math.min(r.height+u,R);v=Math.min(p,Math.max(ft.initialHeight,T))}if(a.includes("top")){const R=l.y+r.height-me,T=Math.min(r.height-u,R);v=Math.min(p,Math.max(ft.initialHeight,T)),y=l.y-(v-r.height)}let _=me,S=window.innerWidth-me-m,k=me,z=window.innerHeight-me-v;return d?x=Math.min(-_,Math.max(x,-S)):x=Math.max(_,Math.min(x,S)),y=Math.max(k,Math.min(y,z)),{newSize:{width:m,height:v},newPosition:{x,y}}},FS=a=>{const r=kl(),l={"top-left":Math.hypot(a.x,a.y),"top-right":Math.hypot(r.maxWidth-a.x,a.y),"bottom-left":Math.hypot(a.x,r.maxHeight-a.y),"bottom-right":Math.hypot(r.maxWidth-a.x,r.maxHeight-a.y)};let o="top-left";for(const u in l)l[u]<l[o]&&(o=u);return o},GS=(a,r,l,o,u=100)=>{const d=l!==void 0?a-l:0,h=o!==void 0?r-o:0,p=window.innerWidth/2,m=window.innerHeight/2,v=d>u,x=d<-u,y=h>u,_=h<-u;if(v||x){const S=r>m;return v?S?"bottom-right":"top-right":S?"bottom-left":"top-left"}if(y||_){const S=a>p;return y?S?"bottom-right":"bottom-left":S?"top-right":"top-left"}return a>p?r>m?"bottom-right":"top-right":r>m?"bottom-left":"top-left"},rs=({position:a})=>{const r=oe(null),l=oe(null),o=oe(null),u=oe(null);_e(()=>{const p=r.current;if(!p)return;const m=()=>{p.classList.remove("pointer-events-none");const y=ee.inspectState.value.kind==="focused",_=Qe.value.view!=="none";(y||_)&&qS(a,ne.value.corner,ne.value.dimensions.isFullWidth,ne.value.dimensions.isFullHeight)?p.classList.remove("hidden","pointer-events-none","opacity-0"):p.classList.add("hidden","pointer-events-none","opacity-0")},v=ne.subscribe(y=>{l.current!==null&&o.current!==null&&u.current!==null&&y.dimensions.width===l.current&&y.dimensions.height===o.current&&y.corner===u.current||(m(),l.current=y.dimensions.width,o.current=y.dimensions.height,u.current=y.corner)}),x=ee.inspectState.subscribe(()=>{m()});return()=>{v(),x(),l.current=null,o.current=null,u.current=null}},[]);const d=lt(p=>{p.preventDefault(),p.stopPropagation();const m=qd.value;if(!m)return;const v=m.style,{dimensions:x}=ne.value,y=p.clientX,_=p.clientY,S=x.width,k=x.height,z=x.position;ne.value={...ne.value,dimensions:{...x,isFullWidth:!1,isFullHeight:!1,width:S,height:k,position:z}};let R=null;const T=q=>{R||(v.transition="none",R=requestAnimationFrame(()=>{const{newSize:$,newPosition:Z}=VS(a,{width:S,height:k},z,q.clientX-y,q.clientY-_);v.transform=`translate3d(${Z.x}px, ${Z.y}px, 0)`,v.width=`${$.width}px`,v.height=`${$.height}px`;const K=Math.floor($.width-gn/2),P=ne.value.componentsTree.width,he=Math.min(K,Math.max(gn,P));ne.value={...ne.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:$.width,height:$.height,position:Z},componentsTree:{...ne.value.componentsTree,width:he}},R=null}))},M=()=>{R&&(cancelAnimationFrame(R),R=null),document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",M);const{dimensions:q,corner:$}=ne.value,Z=kl(),K=Z.isFullWidth(q.width),P=Z.isFullHeight(q.height),he=K&&P;let ce=$;(he||K||P)&&(ce=FS(q.position));const ye=gl(ce,q.width,q.height),ue=()=>{m.removeEventListener("transitionend",ue)};m.addEventListener("transitionend",ue),v.transform=`translate3d(${ye.x}px, ${ye.y}px, 0)`,ne.value={...ne.value,corner:ce,dimensions:{isFullWidth:K,isFullHeight:P,width:q.width,height:q.height,position:ye},lastDimensions:{isFullWidth:K,isFullHeight:P,width:q.width,height:q.height,position:ye}},Lt(Jn,{corner:ce,dimensions:ne.value.dimensions,lastDimensions:ne.value.lastDimensions,componentsTree:ne.value.componentsTree})};document.addEventListener("pointermove",T,{passive:!0}),document.addEventListener("pointerup",M)},[]),h=lt(p=>{p.preventDefault(),p.stopPropagation();const m=qd.value;if(!m)return;const v=m.style,{dimensions:x,corner:y}=ne.value,_=kl(),S=_.isFullWidth(x.width),k=_.isFullHeight(x.height),z=S&&k,R=(S||k)&&!z;let T=x.width,M=x.height;const q=YS(a,y,z,S,k);a==="left"||a==="right"?(T=S?x.width:_.maxWidth,R&&(T=S?ft.width:_.maxWidth)):(M=k?x.height:_.maxHeight,R&&(M=k?ft.initialHeight:_.maxHeight)),z&&(a==="left"||a==="right"?T=ft.width:M=ft.initialHeight);const $=gl(q,T,M),Z={isFullWidth:_.isFullWidth(T),isFullHeight:_.isFullHeight(M),width:T,height:M,position:$},K=Math.floor(T-ft.width/2),P=ne.value.componentsTree.width,he=Math.floor(T*.3),ce=S?gn:(a==="left"||a==="right")&&!S?Math.min(K,Math.max(gn,he)):Math.min(K,Math.max(gn,P));requestAnimationFrame(()=>{ne.value={corner:q,dimensions:Z,lastDimensions:x,componentsTree:{...ne.value.componentsTree,width:ce}},v.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",v.width=`${T}px`,v.height=`${M}px`,v.transform=`translate3d(${$.x}px, ${$.y}px, 0)`}),Lt(Jn,{corner:q,dimensions:Z,lastDimensions:x,componentsTree:{...ne.value.componentsTree,width:ce}})},[]);return f("div",{ref:r,onPointerDown:d,onDblClick:h,className:D("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":a==="left","resize-right peer/right z-10":a==="right","resize-top peer/top":a==="top","resize-bottom peer/bottom":a==="bottom"}),children:f("span",{className:"resize-line-wrapper",children:f("span",{className:"resize-line",children:f(nt,{name:"icon-ellipsis",size:18,className:D("text-neutral-400",(a==="left"||a==="right")&&"rotate-90")})})})})},qv={horizontal:{width:20,height:48},vertical:{width:48,height:20}},$S=()=>{const a=oe(null),r=oe(!1),l=oe(0),o=oe(0),u=oe(!1),d=lt((_=!0)=>{if(!a.current)return;const{corner:S}=ne.value;let k,z;if(It.value){const ce=It.value.orientation||"horizontal",ye=qv[ce];k=ye.width,z=ye.height}else if(r.current){const ce=ne.value.lastDimensions;k=as(ce.width,0,!0),z=as(ce.height,0,!1),u.current&&(u.current=!1)}else k=l.current,z=o.current;let T=gl(S,k,z);if(It.value){const{corner:ce,orientation:ye="horizontal"}=It.value,ue=qv[ye];switch(ce){case"top-left":T=ye==="horizontal"?{x:-1,y:me}:{x:me,y:-1};break;case"bottom-left":T=ye==="horizontal"?{x:-1,y:window.innerHeight-ue.height-me}:{x:me,y:window.innerHeight-ue.height+1};break;case"top-right":T=ye==="horizontal"?{x:window.innerWidth-ue.width+1,y:me}:{x:window.innerWidth-ue.width-me,y:-1};break;default:T=ye==="horizontal"?{x:window.innerWidth-ue.width+1,y:window.innerHeight-ue.height-me}:{x:window.innerWidth-ue.width-me,y:window.innerHeight-ue.height+1};break}}const M=k<ft.width||z<ft.initialHeight,q=_&&!M,$=a.current,Z=$.style;let K=null;const P=()=>{ld(),$.removeEventListener("transitionend",P),K&&(cancelAnimationFrame(K),K=null)};$.addEventListener("transitionend",P),Z.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",K=requestAnimationFrame(()=>{Z.width=`${k}px`,Z.height=`${z}px`,Z.transform=`translate3d(${T.x}px, ${T.y}px, 0)`,K=null});const he={isFullWidth:k>=window.innerWidth-me*2,isFullHeight:z>=window.innerHeight-me*2,width:k,height:z,position:T};ne.value={corner:S,dimensions:he,lastDimensions:r?ne.value.lastDimensions:k>l.current?he:ne.value.lastDimensions,componentsTree:ne.value.componentsTree},q&&Lt(Jn,{corner:ne.value.corner,dimensions:ne.value.dimensions,lastDimensions:ne.value.lastDimensions,componentsTree:ne.value.componentsTree}),ld()},[]),h=lt(_=>{if(_.preventDefault(),!a.current||_.target.closest("button"))return;const S=a.current,k=S.style,{dimensions:z}=ne.value,R=_.clientX,T=_.clientY,M=z.position.x,q=z.position.y;let $=M,Z=q,K=null,P=!1,he=R,ce=T;const ye=re=>{K||(P=!0,he=re.clientX,ce=re.clientY,K=requestAnimationFrame(()=>{const Xe=he-R,je=ce-T;$=Number(M)+Xe,Z=Number(q)+je,k.transition="none",k.transform=`translate3d(${$}px, ${Z}px, 0)`;const Ue=$+z.width,w=Z+z.height,N=Math.max(0,-$),U=Math.max(0,Ue-window.innerWidth),Q=Math.max(0,-Z),J=Math.max(0,w-window.innerHeight),C=Math.min(z.width,N+U),H=Math.min(z.height,Q+J),F=C*z.height+H*z.width-C*H,I=z.width*z.height;let W=F>I*.35;if(!W&&Ae.options.value.showFPS){const ae=$+z.width,fe=ae-100;W=ae<=0||fe>=window.innerWidth||Z+z.height<=0||Z>=window.innerHeight}if(W){const ae=$+z.width/2,fe=Z+z.height/2,Me=window.innerWidth/2,be=window.innerHeight/2;let pt;ae<Me?pt=fe<be?"top-left":"bottom-left":pt=fe<be?"top-right":"bottom-right";let Nn;const Wn=Math.max(N,U),Ma=Math.max(Q,J);Nn=Wn>Ma?"horizontal":"vertical",ne.value={...ne.value,corner:pt,lastDimensions:{...z,position:gl(pt,z.width,z.height)}};const bn={corner:pt,orientation:Nn};It.value=bn,Lt(us,bn),Lt(Jn,ne.value),d(!1),document.removeEventListener("pointermove",ye),document.removeEventListener("pointerup",ue),K&&(cancelAnimationFrame(K),K=null)}K=null}))},ue=()=>{if(!S)return;K&&(cancelAnimationFrame(K),K=null),document.removeEventListener("pointermove",ye),document.removeEventListener("pointerup",ue);const re=Math.abs(he-R),Xe=Math.abs(ce-T),je=Math.sqrt(re*re+Xe*Xe);if(!P||je<60)return;const Ue=GS(he,ce,R,T,ee.inspectState.value.kind==="focused"?80:40);if(Ue===ne.value.corner){k.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const U=ne.value.dimensions.position;requestAnimationFrame(()=>{k.transform=`translate3d(${U.x}px, ${U.y}px, 0)`});return}const w=gl(Ue,z.width,z.height);if($===M&&Z===q)return;const N=()=>{k.transition="none",ld(),S.removeEventListener("transitionend",N),K&&(cancelAnimationFrame(K),K=null)};S.addEventListener("transitionend",N),k.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{k.transform=`translate3d(${w.x}px, ${w.y}px, 0)`}),ne.value={corner:Ue,dimensions:{isFullWidth:z.isFullWidth,isFullHeight:z.isFullHeight,width:z.width,height:z.height,position:w},lastDimensions:ne.value.lastDimensions,componentsTree:ne.value.componentsTree},Lt(Jn,{corner:Ue,dimensions:ne.value.dimensions,lastDimensions:ne.value.lastDimensions,componentsTree:ne.value.componentsTree})};document.addEventListener("pointermove",ye),document.addEventListener("pointerup",ue)},[]),p=lt(_=>{if(_.preventDefault(),!a.current||!It.value)return;const{corner:S,orientation:k="horizontal"}=It.value,z=_.clientX,R=_.clientY;let T=null,M=!1;const q=50,$=K=>{if(M||T)return;const P=K.clientX-z,he=K.clientY-R;let ce=!1;if(k==="horizontal"?(S.endsWith("left")&&P>q||S.endsWith("right")&&P<-q)&&(ce=!0):(S.startsWith("top")&&he>q||S.startsWith("bottom")&&he<-q)&&(ce=!0),ce){if(M=!0,It.value=null,Lt(us,null),l.current===0&&a.current)requestAnimationFrame(()=>{if(a.current){a.current.style.width="min-content";const ye=a.current.offsetWidth;l.current=ye||300;const ue=ne.value.lastDimensions,re=as(ue.width,0,!0),Xe=as(ue.height,0,!1);let je=K.clientX-re/2,Ue=K.clientY-Xe/2;je=Math.max(me,Math.min(je,window.innerWidth-re-me)),Ue=Math.max(me,Math.min(Ue,window.innerHeight-Xe-me)),ne.value={...ne.value,dimensions:{...ne.value.dimensions,position:{x:je,y:Ue}}},d(!0);const w=Kn(Zr);Qe.value=w||{view:"none"},setTimeout(()=>{if(a.current){const N=new PointerEvent("pointerdown",{clientX:K.clientX,clientY:K.clientY,pointerId:K.pointerId,bubbles:!0});a.current.dispatchEvent(N)}},100)}});else{d(!0);const ye=Kn(Zr);Qe.value=ye||{view:"none"}}document.removeEventListener("pointermove",$),document.removeEventListener("pointerup",Z)}},Z=()=>{document.removeEventListener("pointermove",$),document.removeEventListener("pointerup",Z)};document.addEventListener("pointermove",$),document.addEventListener("pointerup",Z)},[]);_e(()=>{if(!a.current)return;uv(Zr),It.value?(o.current=36,l.current=0):(a.current.style.width="min-content",o.current=36,l.current=a.current.offsetWidth),a.current.style.maxWidth=`calc(100vw - ${me*2}px)`,a.current.style.maxHeight=`calc(100vh - ${me*2}px)`,d(),ee.inspectState.value.kind!=="focused"&&!It.value&&!u.current&&(ne.value={...ne.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:l.current,height:o.current,position:ne.value.dimensions.position}}),qd.value=a.current;const _=ne.subscribe(R=>{if(!a.current)return;const{x:T,y:M}=R.dimensions.position,{width:q,height:$}=R.dimensions,Z=a.current;requestAnimationFrame(()=>{Z.style.transform=`translate3d(${T}px, ${M}px, 0)`,Z.style.width=`${q}px`,Z.style.height=`${$}px`})}),S=Qe.subscribe(R=>{r.current=R.view!=="none",d(),It.value||(R.view!=="none"?Lt(Zr,R):uv(Zr))}),k=ee.inspectState.subscribe(R=>{r.current=R.kind==="focused",d()}),z=()=>{d(!0)};return window.addEventListener("resize",z,{passive:!0}),()=>{window.removeEventListener("resize",z),S(),k(),_(),Lt(Jn,{...Tn,corner:ne.value.corner})}},[]);const[m,v]=Se(!1);_e(()=>{v(!0)},[]);const x=It.value;let y="";if(x){const{orientation:_="horizontal",corner:S}=x;_==="horizontal"?y=S?.endsWith("right")?"rotate-180":"":y=S?.startsWith("bottom")?"-rotate-90":"rotate-90"}return f(ze,{children:[f(LS,{}),f(Df.Provider,{value:a.current,children:f("div",{id:"react-scan-toolbar",dir:"ltr",ref:a,onPointerDown:x?p:h,className:D("fixed inset-0",x?(()=>{const{orientation:_="horizontal",corner:S}=x;return _==="horizontal"?S?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":S?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",x?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:x?f("button",{type:"button",onClick:()=>{It.value=null,Lt(us,null),l.current===0&&a.current&&requestAnimationFrame(()=>{if(a.current){a.current.style.width="min-content";const S=a.current.offsetWidth;l.current=S||300,d(!0)}});const _=Kn(Zr);Qe.value=_||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:f(nt,{name:"icon-chevron-right",size:16,className:D("transition-transform",y)})}):f(ze,{children:[f(rs,{position:"top"}),f(rs,{position:"bottom"}),f(rs,{position:"left"}),f(rs,{position:"right"}),f(jS,{})]})})})]})},Df=b0(null),QS=()=>f("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[f("title",{children:"React Scan Icons"}),f("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),f("path",{d:"M5 3a2 2 0 0 0-2 2"}),f("path",{d:"M19 3a2 2 0 0 1 2 2"}),f("path",{d:"M5 21a2 2 0 0 1-2-2"}),f("path",{d:"M9 3h1"}),f("path",{d:"M9 21h2"}),f("path",{d:"M14 3h1"}),f("path",{d:"M3 9v1"}),f("path",{d:"M21 9v2"}),f("path",{d:"M3 14v1"})]}),f("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),f("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),f("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),f("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),f("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),f("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),f("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),f("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),f("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),f("circle",{cx:"12",cy:"12",r:"1"}),f("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),f("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("circle",{cx:"12",cy:"12",r:"1"}),f("circle",{cx:"19",cy:"12",r:"1"}),f("circle",{cx:"5",cy:"12",r:"1"})]}),f("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),f("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M20 6 9 17l-5-5"})}),f("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"m9 18 6-6-6-6"})}),f("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),f("circle",{cx:"12",cy:"12",r:"3"})]}),f("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:f("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),f("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),f("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),f("path",{d:"M9 11.2h5.7"})]}),f("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),f("path",{d:"M12 9v4"}),f("path",{d:"M12 17h.01"})]}),f("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M2 7v10"}),f("path",{d:"M6 5v14"}),f("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),f("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("circle",{cx:"11",cy:"11",r:"8"}),f("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),f("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),f("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),f("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),f("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),f("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),f("circle",{cx:"10",cy:"13",r:"8"}),f("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),f("path",{d:"M18 3 19.1 5.2"})]})]}),ZS=class extends cn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){return this.state.hasError?f("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:f("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[f("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[f(nt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),f("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),f("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},IS=a=>{const r=document.createElement("div");r.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=r,a.appendChild(r),hl(f(ZS,{children:f(ze,{children:[f(QS,{}),f($S,{})]})}),r);const l=r.remove.bind(r);return r.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,r.hasChildNodes()&&(hl(null,r),hl(null,r)),l()},r},JS={version:"0.4.3"},Wa=null,ol=null,KS=()=>{if(Wa&&ol)return{rootContainer:Wa,shadowRoot:ol};Wa=document.createElement("div"),Wa.id="react-scan-root",ol=Wa.attachShadow({mode:"open"});const a=document.createElement("style");return a.textContent=p_,ol.appendChild(a),document.documentElement.appendChild(Wa),{rootContainer:Wa,shadowRoot:ol}},ee={wasDetailsOpen:ht(!0),isInIframe:ht(En&&window.self!==window.top),inspectState:ht({kind:"uninitialized"}),monitor:ht(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:ht(0),interactionListeningForRenders:null,changesListeners:new Map},Ae={instrumentation:null,componentAllowList:null,options:ht({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ee,version:JS.version};En&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Ae.version);function WS(a){return a in Ae.options.value}var py=a=>{const r=[],l={};for(const o in a){if(!WS(o))continue;const u=a[o];switch(o){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof u!="boolean"?r.push(`- ${o} must be a boolean. Got "${u}"`):l[o]=u;break;case"animationSpeed":["slow","fast","off"].includes(u)?l[o]=u:r.push(`- Invalid animation speed "${u}". Using default "fast"`);break;case"onCommitStart":typeof u!="function"?r.push(`- ${o} must be a function. Got "${u}"`):l.onCommitStart=u;break;case"onCommitFinish":typeof u!="function"?r.push(`- ${o} must be a function. Got "${u}"`):l.onCommitFinish=u;break;case"onRender":typeof u!="function"?r.push(`- ${o} must be a function. Got "${u}"`):l.onRender=u;break;case"onPaintStart":case"onPaintFinish":typeof u!="function"?r.push(`- ${o} must be a function. Got "${u}"`):l[o]=u;break;default:r.push(`- Unknown option "${o}"`)}}return r.length>0&&console.warn(`[React Scan] Invalid options:
${r.join(`
`)}`),l},PS=a=>{try{const r=py(a);if(Object.keys(r).length===0)return;const l="showToolbar"in r&&r.showToolbar!==void 0,o={...Ae.options.value,...r},{instrumentation:u}=Ae;u&&"enabled"in r&&(u.isPaused.value=r.enabled===!1),Ae.options.value=o;try{const d=Kn("react-scan-options")?.enabled;typeof d=="boolean"&&(o.enabled=d)}catch(d){Ae.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",d)}return Lt("react-scan-options",o),l&&my(!!o.showToolbar),o}catch(r){Ae.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},eT=()=>Ae.options,is=null,Vv,Hs=()=>{if(is!==null)return is;Vv??=oi();for(const a of Vv.renderers.values())_1(a)==="production"&&(is=!0);return is},tT=()=>{try{if(!En||!Ae.runInAllEnvironments&&Hs()&&!Ae.options.value.dangerouslyForceRunInProduction)return;const a=Kn("react-scan-options");if(a){const l=py(a);Object.keys(l).length>0&&(Ae.options.value={...Ae.options.value,...l})}const r=eT();h_(()=>{my(!!r.value.showToolbar)}),!ee.monitor.value&&En&&setTimeout(()=>{S1()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(a){Ae.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},my=a=>{window.reactScanCleanupListeners?.();const r=V_(),l=nT();window.reactScanCleanupListeners=()=>{r(),l?.()};const o=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!a){o?.remove();return}o?.remove();const{shadowRoot:u}=KS();IS(u)},nT=()=>{try{const a=document.documentElement;return fS(a)}catch(a){Ae.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},aT=(a={})=>{PS(a),!(ee.isInIframe.value&&!Ae.options.value.allowInIframe&&!Ae.runInAllEnvironments)&&(a.enabled===!1&&a.showToolbar!==!0||tT())},rT=new WeakSet,Sd={exports:{}},sl={},Td={exports:{}},Cd={};var Fv;function iT(){return Fv||(Fv=1,(function(a){function r(w,N){var U=w.length;w.push(N);e:for(;0<U;){var Q=U-1>>>1,J=w[Q];if(0<u(J,N))w[Q]=N,w[U]=J,U=Q;else break e}}function l(w){return w.length===0?null:w[0]}function o(w){if(w.length===0)return null;var N=w[0],U=w.pop();if(U!==N){w[0]=U;e:for(var Q=0,J=w.length,C=J>>>1;Q<C;){var H=2*(Q+1)-1,F=w[H],I=H+1,W=w[I];if(0>u(F,U))I<J&&0>u(W,F)?(w[Q]=W,w[I]=U,Q=I):(w[Q]=F,w[H]=U,Q=H);else if(I<J&&0>u(W,U))w[Q]=W,w[I]=U,Q=I;else break e}}return N}function u(w,N){var U=w.sortIndex-N.sortIndex;return U!==0?U:w.id-N.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var m=[],v=[],x=1,y=null,_=3,S=!1,k=!1,z=!1,R=!1,T=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function $(w){for(var N=l(v);N!==null;){if(N.callback===null)o(v);else if(N.startTime<=w)o(v),N.sortIndex=N.expirationTime,r(m,N);else break;N=l(v)}}function Z(w){if(z=!1,$(w),!k)if(l(m)!==null)k=!0,K||(K=!0,re());else{var N=l(v);N!==null&&Ue(Z,N.startTime-w)}}var K=!1,P=-1,he=5,ce=-1;function ye(){return R?!0:!(a.unstable_now()-ce<he)}function ue(){if(R=!1,K){var w=a.unstable_now();ce=w;var N=!0;try{e:{k=!1,z&&(z=!1,M(P),P=-1),S=!0;var U=_;try{t:{for($(w),y=l(m);y!==null&&!(y.expirationTime>w&&ye());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,_=y.priorityLevel;var J=Q(y.expirationTime<=w);if(w=a.unstable_now(),typeof J=="function"){y.callback=J,$(w),N=!0;break t}y===l(m)&&o(m),$(w)}else o(m);y=l(m)}if(y!==null)N=!0;else{var C=l(v);C!==null&&Ue(Z,C.startTime-w),N=!1}}break e}finally{y=null,_=U,S=!1}N=void 0}}finally{N?re():K=!1}}}var re;if(typeof q=="function")re=function(){q(ue)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,je=Xe.port2;Xe.port1.onmessage=ue,re=function(){je.postMessage(null)}}else re=function(){T(ue,0)};function Ue(w,N){P=T(function(){w(a.unstable_now())},N)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(w){w.callback=null},a.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<w?Math.floor(1e3/w):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(w){switch(_){case 1:case 2:case 3:var N=3;break;default:N=_}var U=_;_=N;try{return w()}finally{_=U}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(w,N){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var U=_;_=w;try{return N()}finally{_=U}},a.unstable_scheduleCallback=function(w,N,U){var Q=a.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Q+U:Q):U=Q,w){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=U+J,w={id:x++,callback:N,priorityLevel:w,startTime:U,expirationTime:J,sortIndex:-1},U>Q?(w.sortIndex=U,r(v,w),l(m)===null&&w===l(v)&&(z?(M(P),P=-1):z=!0,Ue(Z,U-Q))):(w.sortIndex=J,r(m,w),k||S||(k=!0,K||(K=!0,re()))),w},a.unstable_shouldYield=ye,a.unstable_wrapCallback=function(w){var N=_;return function(){var U=_;_=N;try{return w.apply(this,arguments)}finally{_=U}}}})(Cd)),Cd}var Gv;function lT(){return Gv||(Gv=1,Td.exports=iT()),Td.exports}var kd={exports:{}},Nt={};var $v;function oT(){if($v)return Nt;$v=1;var a=yf();function r(m){var v="https://react.dev/errors/"+m;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)v+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(m,v,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:m,containerInfo:v,implementation:x}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,v){if(m==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Nt.createPortal=function(m,v){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(r(299));return d(m,v,null,x)},Nt.flushSync=function(m){var v=h.T,x=o.p;try{if(h.T=null,o.p=2,m)return m()}finally{h.T=v,o.p=x,o.d.f()}},Nt.preconnect=function(m,v){typeof m=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,o.d.C(m,v))},Nt.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Nt.preinit=function(m,v){if(typeof m=="string"&&v&&typeof v.as=="string"){var x=v.as,y=p(x,v.crossOrigin),_=typeof v.integrity=="string"?v.integrity:void 0,S=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;x==="style"?o.d.S(m,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:S}):x==="script"&&o.d.X(m,{crossOrigin:y,integrity:_,fetchPriority:S,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Nt.preinitModule=function(m,v){if(typeof m=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var x=p(v.as,v.crossOrigin);o.d.M(m,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&o.d.M(m)},Nt.preload=function(m,v){if(typeof m=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var x=v.as,y=p(x,v.crossOrigin);o.d.L(m,x,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Nt.preloadModule=function(m,v){if(typeof m=="string")if(v){var x=p(v.as,v.crossOrigin);o.d.m(m,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else o.d.m(m)},Nt.requestFormReset=function(m){o.d.r(m)},Nt.unstable_batchedUpdates=function(m,v){return m(v)},Nt.useFormState=function(m,v,x){return h.H.useFormState(m,v,x)},Nt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nt.version="19.2.4",Nt}var Qv;function sT(){if(Qv)return kd.exports;Qv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),kd.exports=oT(),kd.exports}var Zv;function cT(){if(Zv)return sl;Zv=1;var a=lT(),r=yf(),l=sT();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(d(e)!==e)throw Error(o(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return m(s),e;if(c===i)return m(s),t;c=c.sibling}throw Error(o(188))}if(n.return!==i.return)n=s,i=c;else{for(var g=!1,b=s.child;b;){if(b===n){g=!0,n=s,i=c;break}if(b===i){g=!0,i=s,n=c;break}b=b.sibling}if(!g){for(b=c.child;b;){if(b===n){g=!0,n=c,i=s;break}if(b===i){g=!0,i=c,n=s;break}b=b.sibling}if(!g)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),q=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var Xe=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case T:return"Profiler";case R:return"StrictMode";case Z:return"Suspense";case K:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case q:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:je(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return je(e(t))}catch{}}return null}var Ue=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},Q=[],J=-1;function C(e){return{current:e}}function H(e){0>J||(e.current=Q[J],Q[J]=null,J--)}function F(e,t){J++,Q[J]=e.current,e.current=t}var I=C(null),W=C(null),ae=C(null),fe=C(null);function Me(e,t){switch(F(ae,t),F(W,e),F(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ng(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ng(t),e=ag(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(I),F(I,e)}function be(){H(I),H(W),H(ae)}function pt(e){e.memoizedState!==null&&F(fe,e);var t=I.current,n=ag(t,e.type);t!==n&&(F(W,e),F(I,n))}function Nn(e){W.current===e&&(H(I),H(W)),fe.current===e&&(H(fe),Pi._currentValue=U)}var Wn,Ma;function bn(e){if(Wn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wn=t&&t[1]||"",Ma=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wn+e+Ma}var js=!1;function Ls(e,t){if(!e||js)return"";js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(Y){var B=Y}Reflect.construct(e,[],G)}else{try{G.call()}catch(Y){B=Y}e.call(G.prototype)}}else{try{throw Error()}catch(Y){B=Y}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(Y){if(Y&&B&&typeof Y.stack=="string")return[Y.stack,B.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),g=c[0],b=c[1];if(g&&b){var E=g.split(`
`),L=b.split(`
`);for(s=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(i===E.length||s===L.length)for(i=E.length-1,s=L.length-1;1<=i&&0<=s&&E[i]!==L[s];)s--;for(;1<=i&&0<=s;i--,s--)if(E[i]!==L[s]){if(i!==1||s!==1)do if(i--,s--,0>s||E[i]!==L[s]){var X=`
`+E[i].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=i&&0<=s);break}}}finally{js=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?bn(n):""}function Sy(e,t){switch(e.tag){case 26:case 27:case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return e.child!==t&&t!==null?bn("Suspense Fallback"):bn("Suspense");case 19:return bn("SuspenseList");case 0:case 15:return Ls(e.type,!1);case 11:return Ls(e.type.render,!1);case 1:return Ls(e.type,!0);case 31:return bn("Activity");default:return""}}function Of(e){try{var t="",n=null;do t+=Sy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Bs=Object.prototype.hasOwnProperty,Ys=a.unstable_scheduleCallback,Xs=a.unstable_cancelCallback,Ty=a.unstable_shouldYield,Cy=a.unstable_requestPaint,Bt=a.unstable_now,ky=a.unstable_getCurrentPriorityLevel,Rf=a.unstable_ImmediatePriority,Uf=a.unstable_UserBlockingPriority,Dl=a.unstable_NormalPriority,Ey=a.unstable_LowPriority,Hf=a.unstable_IdlePriority,Ny=a.log,zy=a.unstable_setDisableYieldValue,di=null,Yt=null;function Pn(e){if(typeof Ny=="function"&&zy(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(di,e)}catch{}}var Xt=Math.clz32?Math.clz32:Dy,Ay=Math.log,My=Math.LN2;function Dy(e){return e>>>=0,e===0?32:31-(Ay(e)/My|0)|0}var Ol=256,Rl=262144,Ul=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hl(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~c,i!==0?s=Da(i):(g&=b,g!==0?s=Da(g):n||(n=b&~e,n!==0&&(s=Da(n))))):(b=i&~c,b!==0?s=Da(b):g!==0?s=Da(g):n||(n=i&~e,n!==0&&(s=Da(n)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:s}function fi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Oy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(){var e=Ul;return Ul<<=1,(Ul&62914560)===0&&(Ul=4194304),e}function qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ry(e,t,n,i,s,c){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,E=e.expirationTimes,L=e.hiddenUpdates;for(n=g&~n;0<n;){var X=31-Xt(n),G=1<<X;b[X]=0,E[X]=-1;var B=L[X];if(B!==null)for(L[X]=null,X=0;X<B.length;X++){var Y=B[X];Y!==null&&(Y.lane&=-536870913)}n&=~G}i!==0&&Lf(e,i,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(g&~t))}function Lf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Xt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Bf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Xt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Yf(e,t){var n=t&-t;return n=(n&42)!==0?1:Vs(n),(n&(e.suspendedLanes|t))!==0?0:n}function Vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xf(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:kg(e.type))}function qf(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var ea=Math.random().toString(36).slice(2),xt="__reactFiber$"+ea,Mt="__reactProps$"+ea,ur="__reactContainer$"+ea,Gs="__reactEvents$"+ea,Uy="__reactListeners$"+ea,Hy="__reactHandles$"+ea,Vf="__reactResources$"+ea,pi="__reactMarker$"+ea;function $s(e){delete e[xt],delete e[Mt],delete e[Gs],delete e[Uy],delete e[Hy]}function dr(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ur]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ug(e);e!==null;){if(n=e[xt])return n;e=ug(e)}return t}e=n,n=e.parentNode}return null}function fr(e){if(e=e[xt]||e[ur]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function mi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function hr(e){var t=e[Vf];return t||(t=e[Vf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[pi]=!0}var Ff=new Set,Gf={};function Oa(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(Gf[e]=t,e=0;e<t.length;e++)Ff.add(t[e])}var jy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$f={},Qf={};function Ly(e){return Bs.call(Qf,e)?!0:Bs.call($f,e)?!1:jy.test(e)?Qf[e]=!0:($f[e]=!0,!1)}function jl(e,t,n){if(Ly(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ll(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function zn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function By(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(g){n=""+g,c.call(this,g)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qs(e){if(!e._valueTracker){var t=Zf(e)?"checked":"value";e._valueTracker=By(e,t,""+e[t])}}function If(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Zf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yy=/[\n"\\]/g;function Wt(e){return e.replace(Yy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zs(e,t,n,i,s,c,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kt(t)):e.value!==""+Kt(t)&&(e.value=""+Kt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Is(e,g,Kt(t)):n!=null?Is(e,g,Kt(n)):i!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Kt(b):e.removeAttribute("name")}function Jf(e,t,n,i,s,c,g,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Qs(e);return}n=n!=null?""+Kt(n):"",t=t!=null?""+Kt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Qs(e)}function Is(e,t,n){t==="number"&&Bl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function mr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Kf(e,t,n){if(t!=null&&(t=""+Kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Kt(n):""}function Wf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(Ue(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Kt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Qs(e)}function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Xy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function eh(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Pf(e,s,i)}else for(var c in t)t.hasOwnProperty(c)&&Pf(e,c,t[c])}function Js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(e){return Vy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var Ks=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vr=null,yr=null;function th(e){var t=fr(e);if(t&&(e=t.stateNode)){var n=e[Mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Mt]||null;if(!s)throw Error(o(90));Zs(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&If(i)}break e;case"textarea":Kf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}}}var Ps=!1;function nh(e,t,n){if(Ps)return e(t,n);Ps=!0;try{var i=e(t);return i}finally{if(Ps=!1,(vr!==null||yr!==null)&&(No(),vr&&(t=vr,e=yr,yr=vr=null,th(t),e)))for(t=0;t<e.length;t++)th(e[t])}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Mt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ec=!1;if(Mn)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){ec=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{ec=!1}var ta=null,tc=null,Xl=null;function ah(){if(Xl)return Xl;var e,t=tc,n=t.length,i,s="value"in ta?ta.value:ta.textContent,c=s.length;for(e=0;e<n&&t[e]===s[e];e++);var g=n-e;for(i=1;i<=g&&t[n-i]===s[c-i];i++);return Xl=s.slice(e,1<i?1-i:void 0)}function ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function rh(){return!1}function Dt(e){function t(n,i,s,c,g){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Vl:rh,this.isPropagationStopped=rh,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Dt(Ra),yi=y({},Ra,{view:0,detail:0}),Fy=Dt(yi),nc,ac,bi,Gl=y({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(nc=e.screenX-bi.screenX,ac=e.screenY-bi.screenY):ac=nc=0,bi=e),nc)},movementY:function(e){return"movementY"in e?e.movementY:ac}}),ih=Dt(Gl),Gy=y({},Gl,{dataTransfer:0}),$y=Dt(Gy),Qy=y({},yi,{relatedTarget:0}),rc=Dt(Qy),Zy=y({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=Dt(Zy),Jy=y({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ky=Dt(Jy),Wy=y({},Ra,{data:0}),lh=Dt(Wy),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tb[e])?!!t[e]:!1}function ic(){return nb}var ab=y({},yi,{key:function(e){if(e.key){var t=Py[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rb=Dt(ab),ib=y({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=Dt(ib),lb=y({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),ob=Dt(lb),sb=y({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),cb=Dt(sb),ub=y({},Gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),db=Dt(ub),fb=y({},Ra,{newState:0,oldState:0}),hb=Dt(fb),pb=[9,13,27,32],lc=Mn&&"CompositionEvent"in window,wi=null;Mn&&"documentMode"in document&&(wi=document.documentMode);var mb=Mn&&"TextEvent"in window&&!wi,sh=Mn&&(!lc||wi&&8<wi&&11>=wi),ch=" ",uh=!1;function dh(e,t){switch(e){case"keyup":return pb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function gb(e,t){switch(e){case"compositionend":return fh(t);case"keypress":return t.which!==32?null:(uh=!0,ch);case"textInput":return e=t.data,e===ch&&uh?null:e;default:return null}}function vb(e,t){if(br)return e==="compositionend"||!lc&&dh(e,t)?(e=ah(),Xl=tc=ta=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sh&&t.locale!=="ko"?null:t.data;default:return null}}var yb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yb[e.type]:t==="textarea"}function ph(e,t,n,i){vr?yr?yr.push(i):yr=[i]:vr=i,t=Uo(t,"onChange"),0<t.length&&(n=new Fl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var xi=null,_i=null;function bb(e){Jm(e,0)}function $l(e){var t=mi(e);if(If(t))return e}function mh(e,t){if(e==="change")return t}var gh=!1;if(Mn){var oc;if(Mn){var sc="oninput"in document;if(!sc){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),sc=typeof vh.oninput=="function"}oc=sc}else oc=!1;gh=oc&&(!document.documentMode||9<document.documentMode)}function yh(){xi&&(xi.detachEvent("onpropertychange",bh),_i=xi=null)}function bh(e){if(e.propertyName==="value"&&$l(_i)){var t=[];ph(t,_i,e,Ws(e)),nh(bb,t)}}function wb(e,t,n){e==="focusin"?(yh(),xi=t,_i=n,xi.attachEvent("onpropertychange",bh)):e==="focusout"&&yh()}function xb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(_i)}function _b(e,t){if(e==="click")return $l(t)}function Sb(e,t){if(e==="input"||e==="change")return $l(t)}function Tb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Tb;function Si(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Bs.call(t,s)||!qt(e[s],t[s]))return!1}return!0}function wh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xh(e,t){var n=wh(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wh(n)}}function _h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bl(e.document)}return t}function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cb=Mn&&"documentMode"in document&&11>=document.documentMode,wr=null,uc=null,Ti=null,dc=!1;function Th(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||wr==null||wr!==Bl(i)||(i=wr,"selectionStart"in i&&cc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ti&&Si(Ti,i)||(Ti=i,i=Uo(uc,"onSelect"),0<i.length&&(t=new Fl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=wr)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},fc={},Ch={};Mn&&(Ch=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Ha(e){if(fc[e])return fc[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ch)return fc[e]=t[n];return e}var kh=Ha("animationend"),Eh=Ha("animationiteration"),Nh=Ha("animationstart"),kb=Ha("transitionrun"),Eb=Ha("transitionstart"),Nb=Ha("transitioncancel"),zh=Ha("transitionend"),Ah=new Map,hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hc.push("scrollEnd");function un(e,t){Ah.set(e,t),Oa(t,[e])}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pt=[],_r=0,pc=0;function Zl(){for(var e=_r,t=pc=_r=0;t<e;){var n=Pt[t];Pt[t++]=null;var i=Pt[t];Pt[t++]=null;var s=Pt[t];Pt[t++]=null;var c=Pt[t];if(Pt[t++]=null,i!==null&&s!==null){var g=i.pending;g===null?s.next=s:(s.next=g.next,g.next=s),i.pending=s}c!==0&&Mh(n,s,c)}}function Il(e,t,n,i){Pt[_r++]=e,Pt[_r++]=t,Pt[_r++]=n,Pt[_r++]=i,pc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function mc(e,t,n,i){return Il(e,t,n,i),Jl(e)}function ja(e,t){return Il(e,null,null,t),Jl(e)}function Mh(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-Xt(n),e=c.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),c):null}function Jl(e){if(50<$i)throw $i=0,Tu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sr={};function zb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,i){return new zb(e,t,n,i)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dn(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Dh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kl(e,t,n,i,s,c){var g=0;if(i=e,typeof e=="function")gc(e)&&(g=1);else if(typeof e=="string")g=Rw(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=Vt(31,n,t,s),e.elementType=ce,e.lanes=c,e;case z:return La(n.children,s,c,t);case R:g=8,s|=24;break;case T:return e=Vt(12,n,t,s|2),e.elementType=T,e.lanes=c,e;case Z:return e=Vt(13,n,t,s),e.elementType=Z,e.lanes=c,e;case K:return e=Vt(19,n,t,s),e.elementType=K,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:g=10;break e;case M:g=9;break e;case $:g=11;break e;case P:g=14;break e;case he:g=16,i=null;break e}g=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Vt(g,n,t,s),t.elementType=e,t.type=i,t.lanes=c,t}function La(e,t,n,i){return e=Vt(7,e,i,t),e.lanes=n,e}function vc(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function Oh(e){var t=Vt(18,null,null,0);return t.stateNode=e,t}function yc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Rh=new WeakMap;function en(e,t){if(typeof e=="object"&&e!==null){var n=Rh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Of(t)},Rh.set(e,t),t)}return{value:e,source:t,stack:Of(t)}}var Tr=[],Cr=0,Wl=null,Ci=0,tn=[],nn=0,na=null,wn=1,xn="";function On(e,t){Tr[Cr++]=Ci,Tr[Cr++]=Wl,Wl=e,Ci=t}function Uh(e,t,n){tn[nn++]=wn,tn[nn++]=xn,tn[nn++]=na,na=e;var i=wn;e=xn;var s=32-Xt(i)-1;i&=~(1<<s),n+=1;var c=32-Xt(t)+s;if(30<c){var g=s-s%5;c=(i&(1<<g)-1).toString(32),i>>=g,s-=g,wn=1<<32-Xt(t)+s|n<<s|i,xn=c+e}else wn=1<<c|n<<s|i,xn=e}function bc(e){e.return!==null&&(On(e,1),Uh(e,1,0))}function wc(e){for(;e===Wl;)Wl=Tr[--Cr],Tr[Cr]=null,Ci=Tr[--Cr],Tr[Cr]=null;for(;e===na;)na=tn[--nn],tn[nn]=null,xn=tn[--nn],tn[nn]=null,wn=tn[--nn],tn[nn]=null}function Hh(e,t){tn[nn++]=wn,tn[nn++]=xn,tn[nn++]=na,wn=t.id,xn=t.overflow,na=e}var _t=null,Ze=null,Ne=!1,aa=null,an=!1,xc=Error(o(519));function ra(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ki(en(t,e)),xc}function jh(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[xt]=e,t[Mt]=i,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<Zi.length;n++)Ce(Zi[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Jf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Wf(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||eg(t.textContent,n)?(i.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),i.onScroll!=null&&Ce("scroll",t),i.onScrollEnd!=null&&Ce("scrollend",t),i.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||ra(e,!0)}function Lh(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 31:case 13:an=!1;return;case 27:case 3:an=!0;return;default:_t=_t.return}}function kr(e){if(e!==_t)return!1;if(!Ne)return Lh(e),Ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Bu(e.type,e.memoizedProps)),n=!n),n&&Ze&&ra(e),Lh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ze=cg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ze=cg(e)}else t===27?(t=Ze,ya(e.type)?(e=Fu,Fu=null,Ze=e):Ze=t):Ze=_t?ln(e.stateNode.nextSibling):null;return!0}function Ba(){Ze=_t=null,Ne=!1}function _c(){var e=aa;return e!==null&&(Ht===null?Ht=e:Ht.push.apply(Ht,e),aa=null),e}function ki(e){aa===null?aa=[e]:aa.push(e)}var Sc=C(null),Ya=null,Rn=null;function ia(e,t,n){F(Sc,t._currentValue),t._currentValue=n}function Un(e){e._currentValue=Sc.current,H(Sc)}function Tc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Cc(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var g=s.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=s;for(var E=0;E<t.length;E++)if(b.context===t[E]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),Tc(c.return,n,e),i||(g=null);break e}c=b.next}}else if(s.tag===18){if(g=s.return,g===null)throw Error(o(341));g.lanes|=n,c=g.alternate,c!==null&&(c.lanes|=n),Tc(g,n,e),g=null}else g=s.child;if(g!==null)g.return=s;else for(g=s;g!==null;){if(g===e){g=null;break}if(s=g.sibling,s!==null){s.return=g.return,g=s;break}g=g.return}s=g}}function Er(e,t,n,i){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var g=s.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var b=s.type;qt(s.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(s===fe.current){if(g=s.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Pi):e=[Pi])}s=s.return}e!==null&&Cc(t,e,n,i),t.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Ya=e,Rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Bh(Ya,e)}function eo(e,t){return Ya===null&&Xa(e),Bh(e,t)}function Bh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rn===null){if(e===null)throw Error(o(308));Rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rn=Rn.next=t;return n}var Ab=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Mb=a.unstable_scheduleCallback,Db=a.unstable_NormalPriority,st={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kc(){return{controller:new Ab,data:new Map,refCount:0}}function Ei(e){e.refCount--,e.refCount===0&&Mb(Db,function(){e.controller.abort()})}var Ni=null,Ec=0,Nr=0,zr=null;function Ob(e,t){if(Ni===null){var n=Ni=[];Ec=0,Nr=Au(),zr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ec++,t.then(Yh,Yh),t}function Yh(){if(--Ec===0&&Ni!==null){zr!==null&&(zr.status="fulfilled");var e=Ni;Ni=null,Nr=0,zr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Xh=w.S;w.S=function(e,t){Tm=Bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ob(e,t),Xh!==null&&Xh(e,t)};var qa=C(null);function Nc(){var e=qa.current;return e!==null?e:Ge.pooledCache}function to(e,t){t===null?F(qa,qa.current):F(qa,t.pool)}function qh(){var e=Nc();return e===null?null:{parent:st._currentValue,pool:e}}var Ar=Error(o(460)),zc=Error(o(474)),no=Error(o(542)),ao={then:function(){}};function Vh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$h(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$h(e),e}throw Fa=t,Ar}}function Va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Fa=n,Ar):n}}var Fa=null;function Gh(){if(Fa===null)throw Error(o(459));var e=Fa;return Fa=null,e}function $h(e){if(e===Ar||e===no)throw Error(o(483))}var Mr=null,zi=0;function ro(e){var t=zi;return zi+=1,Mr===null&&(Mr=[]),Fh(Mr,e,t)}function Ai(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function io(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qh(e){function t(O,A){if(e){var j=O.deletions;j===null?(O.deletions=[A],O.flags|=16):j.push(A)}}function n(O,A){if(!e)return null;for(;A!==null;)t(O,A),A=A.sibling;return null}function i(O){for(var A=new Map;O!==null;)O.key!==null?A.set(O.key,O):A.set(O.index,O),O=O.sibling;return A}function s(O,A){return O=Dn(O,A),O.index=0,O.sibling=null,O}function c(O,A,j){return O.index=j,e?(j=O.alternate,j!==null?(j=j.index,j<A?(O.flags|=67108866,A):j):(O.flags|=67108866,A)):(O.flags|=1048576,A)}function g(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function b(O,A,j,V){return A===null||A.tag!==6?(A=vc(j,O.mode,V),A.return=O,A):(A=s(A,j),A.return=O,A)}function E(O,A,j,V){var se=j.type;return se===z?X(O,A,j.props.children,V,j.key):A!==null&&(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===he&&Va(se)===A.type)?(A=s(A,j.props),Ai(A,j),A.return=O,A):(A=Kl(j.type,j.key,j.props,null,O.mode,V),Ai(A,j),A.return=O,A)}function L(O,A,j,V){return A===null||A.tag!==4||A.stateNode.containerInfo!==j.containerInfo||A.stateNode.implementation!==j.implementation?(A=yc(j,O.mode,V),A.return=O,A):(A=s(A,j.children||[]),A.return=O,A)}function X(O,A,j,V,se){return A===null||A.tag!==7?(A=La(j,O.mode,V,se),A.return=O,A):(A=s(A,j),A.return=O,A)}function G(O,A,j){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=vc(""+A,O.mode,j),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return j=Kl(A.type,A.key,A.props,null,O.mode,j),Ai(j,A),j.return=O,j;case k:return A=yc(A,O.mode,j),A.return=O,A;case he:return A=Va(A),G(O,A,j)}if(Ue(A)||re(A))return A=La(A,O.mode,j,null),A.return=O,A;if(typeof A.then=="function")return G(O,ro(A),j);if(A.$$typeof===q)return G(O,eo(O,A),j);io(O,A)}return null}function B(O,A,j,V){var se=A!==null?A.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return se!==null?null:b(O,A,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return j.key===se?E(O,A,j,V):null;case k:return j.key===se?L(O,A,j,V):null;case he:return j=Va(j),B(O,A,j,V)}if(Ue(j)||re(j))return se!==null?null:X(O,A,j,V,null);if(typeof j.then=="function")return B(O,A,ro(j),V);if(j.$$typeof===q)return B(O,A,eo(O,j),V);io(O,j)}return null}function Y(O,A,j,V,se){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return O=O.get(j)||null,b(A,O,""+V,se);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return O=O.get(V.key===null?j:V.key)||null,E(A,O,V,se);case k:return O=O.get(V.key===null?j:V.key)||null,L(A,O,V,se);case he:return V=Va(V),Y(O,A,j,V,se)}if(Ue(V)||re(V))return O=O.get(j)||null,X(A,O,V,se,null);if(typeof V.then=="function")return Y(O,A,j,ro(V),se);if(V.$$typeof===q)return Y(O,A,j,eo(A,V),se);io(A,V)}return null}function te(O,A,j,V){for(var se=null,De=null,ie=A,we=A=0,Ee=null;ie!==null&&we<j.length;we++){ie.index>we?(Ee=ie,ie=null):Ee=ie.sibling;var Oe=B(O,ie,j[we],V);if(Oe===null){ie===null&&(ie=Ee);break}e&&ie&&Oe.alternate===null&&t(O,ie),A=c(Oe,A,we),De===null?se=Oe:De.sibling=Oe,De=Oe,ie=Ee}if(we===j.length)return n(O,ie),Ne&&On(O,we),se;if(ie===null){for(;we<j.length;we++)ie=G(O,j[we],V),ie!==null&&(A=c(ie,A,we),De===null?se=ie:De.sibling=ie,De=ie);return Ne&&On(O,we),se}for(ie=i(ie);we<j.length;we++)Ee=Y(ie,O,we,j[we],V),Ee!==null&&(e&&Ee.alternate!==null&&ie.delete(Ee.key===null?we:Ee.key),A=c(Ee,A,we),De===null?se=Ee:De.sibling=Ee,De=Ee);return e&&ie.forEach(function(Sa){return t(O,Sa)}),Ne&&On(O,we),se}function de(O,A,j,V){if(j==null)throw Error(o(151));for(var se=null,De=null,ie=A,we=A=0,Ee=null,Oe=j.next();ie!==null&&!Oe.done;we++,Oe=j.next()){ie.index>we?(Ee=ie,ie=null):Ee=ie.sibling;var Sa=B(O,ie,Oe.value,V);if(Sa===null){ie===null&&(ie=Ee);break}e&&ie&&Sa.alternate===null&&t(O,ie),A=c(Sa,A,we),De===null?se=Sa:De.sibling=Sa,De=Sa,ie=Ee}if(Oe.done)return n(O,ie),Ne&&On(O,we),se;if(ie===null){for(;!Oe.done;we++,Oe=j.next())Oe=G(O,Oe.value,V),Oe!==null&&(A=c(Oe,A,we),De===null?se=Oe:De.sibling=Oe,De=Oe);return Ne&&On(O,we),se}for(ie=i(ie);!Oe.done;we++,Oe=j.next())Oe=Y(ie,O,we,Oe.value,V),Oe!==null&&(e&&Oe.alternate!==null&&ie.delete(Oe.key===null?we:Oe.key),A=c(Oe,A,we),De===null?se=Oe:De.sibling=Oe,De=Oe);return e&&ie.forEach(function(Gw){return t(O,Gw)}),Ne&&On(O,we),se}function Fe(O,A,j,V){if(typeof j=="object"&&j!==null&&j.type===z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case S:e:{for(var se=j.key;A!==null;){if(A.key===se){if(se=j.type,se===z){if(A.tag===7){n(O,A.sibling),V=s(A,j.props.children),V.return=O,O=V;break e}}else if(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===he&&Va(se)===A.type){n(O,A.sibling),V=s(A,j.props),Ai(V,j),V.return=O,O=V;break e}n(O,A);break}else t(O,A);A=A.sibling}j.type===z?(V=La(j.props.children,O.mode,V,j.key),V.return=O,O=V):(V=Kl(j.type,j.key,j.props,null,O.mode,V),Ai(V,j),V.return=O,O=V)}return g(O);case k:e:{for(se=j.key;A!==null;){if(A.key===se)if(A.tag===4&&A.stateNode.containerInfo===j.containerInfo&&A.stateNode.implementation===j.implementation){n(O,A.sibling),V=s(A,j.children||[]),V.return=O,O=V;break e}else{n(O,A);break}else t(O,A);A=A.sibling}V=yc(j,O.mode,V),V.return=O,O=V}return g(O);case he:return j=Va(j),Fe(O,A,j,V)}if(Ue(j))return te(O,A,j,V);if(re(j)){if(se=re(j),typeof se!="function")throw Error(o(150));return j=se.call(j),de(O,A,j,V)}if(typeof j.then=="function")return Fe(O,A,ro(j),V);if(j.$$typeof===q)return Fe(O,A,eo(O,j),V);io(O,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,A!==null&&A.tag===6?(n(O,A.sibling),V=s(A,j),V.return=O,O=V):(n(O,A),V=vc(j,O.mode,V),V.return=O,O=V),g(O)):n(O,A)}return function(O,A,j,V){try{zi=0;var se=Fe(O,A,j,V);return Mr=null,se}catch(ie){if(ie===Ar||ie===no)throw ie;var De=Vt(29,ie,null,O.mode);return De.lanes=V,De.return=O,De}}}var Ga=Qh(!0),Zh=Qh(!1),la=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Jl(e),Mh(e,null,n),t}return Il(e,i,t,n),Jl(e)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Bf(e,n)}}function Dc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?s=c=g:c=c.next=g,n=n.next}while(n!==null);c===null?s=c=t:c=c.next=t}else s=c=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Oc=!1;function Di(){if(Oc){var e=zr;if(e!==null)throw e}}function Oi(e,t,n,i){Oc=!1;var s=e.updateQueue;la=!1;var c=s.firstBaseUpdate,g=s.lastBaseUpdate,b=s.shared.pending;if(b!==null){s.shared.pending=null;var E=b,L=E.next;E.next=null,g===null?c=L:g.next=L,g=E;var X=e.alternate;X!==null&&(X=X.updateQueue,b=X.lastBaseUpdate,b!==g&&(b===null?X.firstBaseUpdate=L:b.next=L,X.lastBaseUpdate=E))}if(c!==null){var G=s.baseState;g=0,X=L=E=null,b=c;do{var B=b.lane&-536870913,Y=B!==b.lane;if(Y?(ke&B)===B:(i&B)===B){B!==0&&B===Nr&&(Oc=!0),X!==null&&(X=X.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var te=e,de=b;B=t;var Fe=n;switch(de.tag){case 1:if(te=de.payload,typeof te=="function"){G=te.call(Fe,G,B);break e}G=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=de.payload,B=typeof te=="function"?te.call(Fe,G,B):te,B==null)break e;G=y({},G,B);break e;case 2:la=!0}}B=b.callback,B!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=s.callbacks,Y===null?s.callbacks=[B]:Y.push(B))}else Y={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},X===null?(L=X=Y,E=G):X=X.next=Y,g|=B;if(b=b.next,b===null){if(b=s.shared.pending,b===null)break;Y=b,b=Y.next,Y.next=null,s.lastBaseUpdate=Y,s.shared.pending=null}}while(!0);X===null&&(E=G),s.baseState=E,s.firstBaseUpdate=L,s.lastBaseUpdate=X,c===null&&(s.shared.lanes=0),ha|=g,e.lanes=g,e.memoizedState=G}}function Ih(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Jh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ih(n[e],t)}var Dr=C(null),lo=C(0);function Kh(e,t){e=Fn,F(lo,e),F(Dr,t),Fn=e|t.baseLanes}function Rc(){F(lo,Fn),F(Dr,Dr.current)}function Uc(){Fn=lo.current,H(Dr),H(lo)}var Ft=C(null),rn=null;function ca(e){var t=e.alternate;F(at,at.current&1),F(Ft,e),rn===null&&(t===null||Dr.current!==null||t.memoizedState!==null)&&(rn=e)}function Hc(e){F(at,at.current),F(Ft,e),rn===null&&(rn=e)}function Wh(e){e.tag===22?(F(at,at.current),F(Ft,e),rn===null&&(rn=e)):ua()}function ua(){F(at,at.current),F(Ft,Ft.current)}function Gt(e){H(Ft),rn===e&&(rn=null),H(at)}var at=C(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qu(n)||Vu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hn=0,ve=null,qe=null,ct=null,so=!1,Or=!1,$a=!1,co=0,Ri=0,Rr=null,Ub=0;function et(){throw Error(o(321))}function jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function Lc(e,t,n,i,s,c){return Hn=c,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Up:Pc,$a=!1,c=n(i,s),$a=!1,Or&&(c=ep(t,n,i,s)),Ph(e),c}function Ph(e){w.H=ji;var t=qe!==null&&qe.next!==null;if(Hn=0,ct=qe=ve=null,so=!1,Ri=0,Rr=null,t)throw Error(o(300));e===null||ut||(e=e.dependencies,e!==null&&Pl(e)&&(ut=!0))}function ep(e,t,n,i){ve=e;var s=0;do{if(Or&&(Rr=null),Ri=0,Or=!1,25<=s)throw Error(o(301));if(s+=1,ct=qe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}w.H=Hp,c=t(n,i)}while(Or);return c}function Hb(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?Ui(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(ve.flags|=1024),t}function Bc(){var e=co!==0;return co=0,e}function Yc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xc(e){if(so){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}so=!1}Hn=0,ct=qe=ve=null,Or=!1,Ri=co=0,Rr=null}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?ve.memoizedState=ct=e:ct=ct.next=e,ct}function rt(){if(qe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=ct===null?ve.memoizedState:ct.next;if(t!==null)ct=t,qe=e;else{if(e===null)throw ve.alternate===null?Error(o(467)):Error(o(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ct===null?ve.memoizedState=ct=e:ct=ct.next=e}return ct}function uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ui(e){var t=Ri;return Ri+=1,Rr===null&&(Rr=[]),e=Fh(Rr,e,t),t=ve,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Up:Pc),e}function fo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ui(e);if(e.$$typeof===q)return St(e)}throw Error(o(438,String(e)))}function qc(e){var t=null,n=ve.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ve.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=uo(),ve.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ye;return t.index++,n}function jn(e,t){return typeof t=="function"?t(e):t}function ho(e){var t=rt();return Vc(t,qe,e)}function Vc(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var s=e.baseQueue,c=i.pending;if(c!==null){if(s!==null){var g=s.next;s.next=c.next,c.next=g}t.baseQueue=s=c,i.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var b=g=null,E=null,L=t,X=!1;do{var G=L.lane&-536870913;if(G!==L.lane?(ke&G)===G:(Hn&G)===G){var B=L.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),G===Nr&&(X=!0);else if((Hn&B)===B){L=L.next,B===Nr&&(X=!0);continue}else G={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(b=E=G,g=c):E=E.next=G,ve.lanes|=B,ha|=B;G=L.action,$a&&n(c,G),c=L.hasEagerState?L.eagerState:n(c,G)}else B={lane:G,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(b=E=B,g=c):E=E.next=B,ve.lanes|=G,ha|=G;L=L.next}while(L!==null&&L!==t);if(E===null?g=c:E.next=b,!qt(c,e.memoizedState)&&(ut=!0,X&&(n=zr,n!==null)))throw n;e.memoizedState=c,e.baseState=g,e.baseQueue=E,i.lastRenderedState=c}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Fc(e){var t=rt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,c=t.memoizedState;if(s!==null){n.pending=null;var g=s=s.next;do c=e(c,g.action),g=g.next;while(g!==s);qt(c,t.memoizedState)||(ut=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function tp(e,t,n){var i=ve,s=rt(),c=Ne;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var g=!qt((qe||s).memoizedState,n);if(g&&(s.memoizedState=n,ut=!0),s=s.queue,Qc(rp.bind(null,i,s,e),[e]),s.getSnapshot!==t||g||ct!==null&&ct.memoizedState.tag&1){if(i.flags|=2048,Ur(9,{destroy:void 0},ap.bind(null,i,s,n,t),null),Ge===null)throw Error(o(349));c||(Hn&127)!==0||np(i,t,n)}return n}function np(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t=uo(),ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ap(e,t,n,i){t.value=n,t.getSnapshot=i,ip(t)&&lp(e)}function rp(e,t,n){return n(function(){ip(t)&&lp(e)})}function ip(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function lp(e){var t=ja(e,2);t!==null&&jt(t,e,2)}function Gc(e){var t=zt();if(typeof e=="function"){var n=e;if(e=n(),$a){Pn(!0);try{n()}finally{Pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function op(e,t,n,i){return e.baseState=n,Vc(e,qe,typeof i=="function"?i:jn)}function jb(e,t,n,i,s){if(go(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};w.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,sp(t,c)):(c.next=n.next,t.pending=n.next=c)}}function sp(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var c=w.T,g={};w.T=g;try{var b=n(s,i),E=w.S;E!==null&&E(g,b),cp(e,t,b)}catch(L){$c(e,t,L)}finally{c!==null&&g.types!==null&&(c.types=g.types),w.T=c}}else try{c=n(s,i),cp(e,t,c)}catch(L){$c(e,t,L)}}function cp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){up(e,t,i)},function(i){return $c(e,t,i)}):up(e,t,n)}function up(e,t,n){t.status="fulfilled",t.value=n,dp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,sp(e,n)))}function $c(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,dp(t),t=t.next;while(t!==i)}e.action=null}function dp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fp(e,t){return t}function hp(e,t){if(Ne){var n=Ge.formState;if(n!==null){e:{var i=ve;if(Ne){if(Ze){t:{for(var s=Ze,c=an;s.nodeType!==8;){if(!c){s=null;break t}if(s=ln(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Ze=ln(s.nextSibling),i=s.data==="F!";break e}}ra(i)}i=!1}i&&(t=n[0])}}return n=zt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fp,lastRenderedState:t},n.queue=i,n=Dp.bind(null,ve,i),i.dispatch=n,i=Gc(!1),c=Wc.bind(null,ve,!1,i.queue),i=zt(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=jb.bind(null,ve,s,c,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function pp(e){var t=rt();return mp(t,qe,e)}function mp(e,t,n){if(t=Vc(e,t,fp)[0],e=ho(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ui(t)}catch(g){throw g===Ar?no:g}else i=t;t=rt();var s=t.queue,c=s.dispatch;return n!==t.memoizedState&&(ve.flags|=2048,Ur(9,{destroy:void 0},Lb.bind(null,s,n),null)),[i,c,e]}function Lb(e,t){e.action=t}function gp(e){var t=rt(),n=qe;if(n!==null)return mp(t,n,e);rt(),t=t.memoizedState,n=rt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ur(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ve.updateQueue,t===null&&(t=uo(),ve.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function vp(){return rt().memoizedState}function po(e,t,n,i){var s=zt();ve.flags|=e,s.memoizedState=Ur(1|t,{destroy:void 0},n,i===void 0?null:i)}function mo(e,t,n,i){var s=rt();i=i===void 0?null:i;var c=s.memoizedState.inst;qe!==null&&i!==null&&jc(i,qe.memoizedState.deps)?s.memoizedState=Ur(t,c,n,i):(ve.flags|=e,s.memoizedState=Ur(1|t,c,n,i))}function yp(e,t){po(8390656,8,e,t)}function Qc(e,t){mo(2048,8,e,t)}function Bb(e){ve.flags|=4;var t=ve.updateQueue;if(t===null)t=uo(),ve.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function bp(e){var t=rt().memoizedState;return Bb({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function wp(e,t){return mo(4,2,e,t)}function xp(e,t){return mo(4,4,e,t)}function _p(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,n){n=n!=null?n.concat([e]):null,mo(4,4,_p.bind(null,t,e),n)}function Zc(){}function Tp(e,t){var n=rt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&jc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Cp(e,t){var n=rt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&jc(t,i[1]))return i[0];if(i=e(),$a){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[i,t],i}function Ic(e,t,n){return n===void 0||(Hn&1073741824)!==0&&(ke&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=km(),ve.lanes|=e,ha|=e,n)}function kp(e,t,n,i){return qt(n,t)?n:Dr.current!==null?(e=Ic(e,n,i),qt(e,t)||(ut=!0),e):(Hn&42)===0||(Hn&1073741824)!==0&&(ke&261930)===0?(ut=!0,e.memoizedState=n):(e=km(),ve.lanes|=e,ha|=e,t)}function Ep(e,t,n,i,s){var c=N.p;N.p=c!==0&&8>c?c:8;var g=w.T,b={};w.T=b,Wc(e,!1,t,n);try{var E=s(),L=w.S;if(L!==null&&L(b,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var X=Rb(E,i);Hi(e,t,X,Zt(e))}else Hi(e,t,i,Zt(e))}catch(G){Hi(e,t,{then:function(){},status:"rejected",reason:G},Zt())}finally{N.p=c,g!==null&&b.types!==null&&(g.types=b.types),w.T=g}}function Yb(){}function Jc(e,t,n,i){if(e.tag!==5)throw Error(o(476));var s=Np(e).queue;Ep(e,s,t,U,n===null?Yb:function(){return zp(e),n(i)})}function Np(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:U},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zp(e){var t=Np(e);t.next===null&&(t=e.alternate.memoizedState),Hi(e,t.next.queue,{},Zt())}function Kc(){return St(Pi)}function Ap(){return rt().memoizedState}function Mp(){return rt().memoizedState}function Xb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zt();e=oa(n);var i=sa(t,e,n);i!==null&&(jt(i,t,n),Mi(i,t,n)),t={cache:kc()},e.payload=t;return}t=t.return}}function qb(e,t,n){var i=Zt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},go(e)?Op(t,n):(n=mc(e,t,n,i),n!==null&&(jt(n,e,i),Rp(n,t,i)))}function Dp(e,t,n){var i=Zt();Hi(e,t,n,i)}function Hi(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(go(e))Op(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var g=t.lastRenderedState,b=c(g,n);if(s.hasEagerState=!0,s.eagerState=b,qt(b,g))return Il(e,t,s,0),Ge===null&&Zl(),!1}catch{}if(n=mc(e,t,s,i),n!==null)return jt(n,e,i),Rp(n,t,i),!0}return!1}function Wc(e,t,n,i){if(i={lane:2,revertLane:Au(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},go(e)){if(t)throw Error(o(479))}else t=mc(e,n,i,2),t!==null&&jt(t,e,2)}function go(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Op(e,t){Or=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Bf(e,n)}}var ji={readContext:St,use:fo,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};ji.useEffectEvent=et;var Up={readContext:St,use:fo,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:yp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,po(4194308,4,_p.bind(null,t,e),n)},useLayoutEffect:function(e,t){return po(4194308,4,e,t)},useInsertionEffect:function(e,t){po(4,2,e,t)},useMemo:function(e,t){var n=zt();t=t===void 0?null:t;var i=e();if($a){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=zt();if(n!==void 0){var s=n(t);if($a){Pn(!0);try{n(t)}finally{Pn(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=qb.bind(null,ve,e),[i.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:function(e){e=Gc(e);var t=e.queue,n=Dp.bind(null,ve,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zc,useDeferredValue:function(e,t){var n=zt();return Ic(n,e,t)},useTransition:function(){var e=Gc(!1);return e=Ep.bind(null,ve,e.queue,!0,!1),zt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ve,s=zt();if(Ne){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ge===null)throw Error(o(349));(ke&127)!==0||np(i,t,n)}s.memoizedState=n;var c={value:n,getSnapshot:t};return s.queue=c,yp(rp.bind(null,i,c,e),[e]),i.flags|=2048,Ur(9,{destroy:void 0},ap.bind(null,i,c,n,t),null),n},useId:function(){var e=zt(),t=Ge.identifierPrefix;if(Ne){var n=xn,i=wn;n=(i&~(1<<32-Xt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=co++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ub++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Kc,useFormState:hp,useActionState:hp,useOptimistic:function(e){var t=zt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wc.bind(null,ve,!0,n),n.dispatch=t,[e,t]},useMemoCache:qc,useCacheRefresh:function(){return zt().memoizedState=Xb.bind(null,ve)},useEffectEvent:function(e){var t=zt(),n={impl:e};return t.memoizedState=n,function(){if((Re&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Pc={readContext:St,use:fo,useCallback:Tp,useContext:St,useEffect:Qc,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:xp,useMemo:Cp,useReducer:ho,useRef:vp,useState:function(){return ho(jn)},useDebugValue:Zc,useDeferredValue:function(e,t){var n=rt();return kp(n,qe.memoizedState,e,t)},useTransition:function(){var e=ho(jn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:Ui(e),t]},useSyncExternalStore:tp,useId:Ap,useHostTransitionStatus:Kc,useFormState:pp,useActionState:pp,useOptimistic:function(e,t){var n=rt();return op(n,qe,e,t)},useMemoCache:qc,useCacheRefresh:Mp};Pc.useEffectEvent=bp;var Hp={readContext:St,use:fo,useCallback:Tp,useContext:St,useEffect:Qc,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:xp,useMemo:Cp,useReducer:Fc,useRef:vp,useState:function(){return Fc(jn)},useDebugValue:Zc,useDeferredValue:function(e,t){var n=rt();return qe===null?Ic(n,e,t):kp(n,qe.memoizedState,e,t)},useTransition:function(){var e=Fc(jn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:Ui(e),t]},useSyncExternalStore:tp,useId:Ap,useHostTransitionStatus:Kc,useFormState:gp,useActionState:gp,useOptimistic:function(e,t){var n=rt();return qe!==null?op(n,qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:qc,useCacheRefresh:Mp};Hp.useEffectEvent=bp;function eu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tu={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Zt(),s=oa(i);s.payload=t,n!=null&&(s.callback=n),t=sa(e,s,i),t!==null&&(jt(t,e,i),Mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Zt(),s=oa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sa(e,s,i),t!==null&&(jt(t,e,i),Mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zt(),i=oa(n);i.tag=2,t!=null&&(i.callback=t),t=sa(e,i,n),t!==null&&(jt(t,e,n),Mi(t,e,n))}};function jp(e,t,n,i,s,c,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,g):t.prototype&&t.prototype.isPureReactComponent?!Si(n,i)||!Si(s,c):!0}function Lp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&tu.enqueueReplaceState(t,t.state,null)}function Qa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Bp(e){Ql(e)}function Yp(e){console.error(e)}function Xp(e){Ql(e)}function vo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function qp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function nu(e,t,n){return n=oa(n),n.tag=3,n.payload={element:null},n.callback=function(){vo(e,t)},n}function Vp(e){return e=oa(e),e.tag=3,e}function Fp(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var c=i.value;e.payload=function(){return s(c)},e.callback=function(){qp(t,n,i)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){qp(t,n,i),typeof s!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Vb(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Er(t,n,s,!0),n=Ft.current,n!==null){switch(n.tag){case 31:case 13:return rn===null?zo():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===ao?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Eu(e,i,s)),!1;case 22:return n.flags|=65536,i===ao?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Eu(e,i,s)),!1}throw Error(o(435,n.tag))}return Eu(e,i,s),zo(),!1}if(Ne)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==xc&&(e=Error(o(422),{cause:i}),ki(en(e,n)))):(i!==xc&&(t=Error(o(423),{cause:i}),ki(en(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=en(i,n),s=nu(e.stateNode,i,s),Dc(e,s),tt!==4&&(tt=2)),!1;var c=Error(o(520),{cause:i});if(c=en(c,n),Gi===null?Gi=[c]:Gi.push(c),tt!==4&&(tt=2),t===null)return!0;i=en(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=nu(n.stateNode,i,e),Dc(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(pa===null||!pa.has(c))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Vp(s),Fp(s,e,n,i),Dc(n,s),!1}n=n.return}while(n!==null);return!1}var au=Error(o(461)),ut=!1;function Tt(e,t,n,i){t.child=e===null?Zh(t,null,n,i):Ga(t,e.child,n,i)}function Gp(e,t,n,i,s){n=n.render;var c=t.ref;if("ref"in i){var g={};for(var b in i)b!=="ref"&&(g[b]=i[b])}else g=i;return Xa(t),i=Lc(e,t,n,g,c,s),b=Bc(),e!==null&&!ut?(Yc(e,t,s),Ln(e,t,s)):(Ne&&b&&bc(t),t.flags|=1,Tt(e,t,i,s),t.child)}function $p(e,t,n,i,s){if(e===null){var c=n.type;return typeof c=="function"&&!gc(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Qp(e,t,c,i,s)):(e=Kl(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!du(e,s)){var g=c.memoizedProps;if(n=n.compare,n=n!==null?n:Si,n(g,i)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=Dn(c,i),e.ref=t.ref,e.return=t,t.child=e}function Qp(e,t,n,i,s){if(e!==null){var c=e.memoizedProps;if(Si(c,i)&&e.ref===t.ref)if(ut=!1,t.pendingProps=i=c,du(e,s))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return ru(e,t,n,i,s)}function Zp(e,t,n,i){var s=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~c}else i=0,t.child=null;return Ip(e,t,c,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&to(t,c!==null?c.cachePool:null),c!==null?Kh(t,c):Rc(),Wh(t);else return i=t.lanes=536870912,Ip(e,t,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(to(t,c.cachePool),Kh(t,c),ua(),t.memoizedState=null):(e!==null&&to(t,null),Rc(),ua());return Tt(e,t,s,n),t.child}function Li(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ip(e,t,n,i,s){var c=Nc();return c=c===null?null:{parent:st._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&to(t,null),Rc(),Wh(t),e!==null&&Er(e,t,i,!0),t.childLanes=s,null}function yo(e,t){return t=wo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jp(e,t,n){return Ga(t,e.child,null,n),e=yo(t,t.pendingProps),e.flags|=2,Gt(t),t.memoizedState=null,e}function Fb(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(i.mode==="hidden")return e=yo(t,i),t.lanes=536870912,Li(null,e);if(Hc(t),(e=Ze)?(e=sg(e,an),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Oh(e),n.return=t,t.child=n,_t=t,Ze=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return yo(t,i)}var c=e.memoizedState;if(c!==null){var g=c.dehydrated;if(Hc(t),s)if(t.flags&256)t.flags&=-257,t=Jp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(ut||Er(e,t,n,!1),s=(n&e.childLanes)!==0,ut||s){if(i=Ge,i!==null&&(g=Yf(i,n),g!==0&&g!==c.retryLane))throw c.retryLane=g,ja(e,g),jt(i,e,g),au;zo(),t=Jp(e,t,n)}else e=c.treeContext,Ze=ln(g.nextSibling),_t=t,Ne=!0,aa=null,an=!1,e!==null&&Hh(t,e),t=yo(t,i),t.flags|=4096;return t}return e=Dn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function bo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ru(e,t,n,i,s){return Xa(t),n=Lc(e,t,n,i,void 0,s),i=Bc(),e!==null&&!ut?(Yc(e,t,s),Ln(e,t,s)):(Ne&&i&&bc(t),t.flags|=1,Tt(e,t,n,s),t.child)}function Kp(e,t,n,i,s,c){return Xa(t),t.updateQueue=null,n=ep(t,i,n,s),Ph(e),i=Bc(),e!==null&&!ut?(Yc(e,t,c),Ln(e,t,c)):(Ne&&i&&bc(t),t.flags|=1,Tt(e,t,n,c),t.child)}function Wp(e,t,n,i,s){if(Xa(t),t.stateNode===null){var c=Sr,g=n.contextType;typeof g=="object"&&g!==null&&(c=St(g)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=tu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},Ac(t),g=n.contextType,c.context=typeof g=="object"&&g!==null?St(g):Sr,c.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(eu(t,n,g,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&tu.enqueueReplaceState(c,c.state,null),Oi(t,i,c,s),Di(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,E=Qa(n,b);c.props=E;var L=c.context,X=n.contextType;g=Sr,typeof X=="object"&&X!==null&&(g=St(X));var G=n.getDerivedStateFromProps;X=typeof G=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,X||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||L!==g)&&Lp(t,c,i,g),la=!1;var B=t.memoizedState;c.state=B,Oi(t,i,c,s),Di(),L=t.memoizedState,b||B!==L||la?(typeof G=="function"&&(eu(t,n,G,i),L=t.memoizedState),(E=la||jp(t,n,E,i,B,L,g))?(X||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=L),c.props=i,c.state=L,c.context=g,i=E):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Mc(e,t),g=t.memoizedProps,X=Qa(n,g),c.props=X,G=t.pendingProps,B=c.context,L=n.contextType,E=Sr,typeof L=="object"&&L!==null&&(E=St(L)),b=n.getDerivedStateFromProps,(L=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==G||B!==E)&&Lp(t,c,i,E),la=!1,B=t.memoizedState,c.state=B,Oi(t,i,c,s),Di();var Y=t.memoizedState;g!==G||B!==Y||la||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof b=="function"&&(eu(t,n,b,i),Y=t.memoizedState),(X=la||jp(t,n,X,i,B,Y,E)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,Y,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,Y,E)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Y),c.props=i,c.state=Y,c.context=E,i=X):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,bo(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=Ga(t,e.child,null,s),t.child=Ga(t,null,n,s)):Tt(e,t,n,s),t.memoizedState=c.state,e=t.child):e=Ln(e,t,s),e}function Pp(e,t,n,i){return Ba(),t.flags|=256,Tt(e,t,n,i),t.child}var iu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lu(e){return{baseLanes:e,cachePool:qh()}}function ou(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function em(e,t,n){var i=t.pendingProps,s=!1,c=(t.flags&128)!==0,g;if((g=c)||(g=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),g&&(s=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(s?ca(t):ua(),(e=Ze)?(e=sg(e,an),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Oh(e),n.return=t,t.child=n,_t=t,Ze=null)):e=null,e===null)throw ra(t);return Vu(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,s?(ua(),s=t.mode,b=wo({mode:"hidden",children:b},s),i=La(i,s,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=lu(n),i.childLanes=ou(e,g,n),t.memoizedState=iu,Li(null,i)):(ca(t),su(t,b))}var E=e.memoizedState;if(E!==null&&(b=E.dehydrated,b!==null)){if(c)t.flags&256?(ca(t),t.flags&=-257,t=cu(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),b=i.fallback,s=t.mode,i=wo({mode:"visible",children:i.children},s),b=La(b,s,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,Ga(t,e.child,null,n),i=t.child,i.memoizedState=lu(n),i.childLanes=ou(e,g,n),t.memoizedState=iu,t=Li(null,i));else if(ca(t),Vu(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var L=g.dgst;g=L,i=Error(o(419)),i.stack="",i.digest=g,ki({value:i,source:null,stack:null}),t=cu(e,t,n)}else if(ut||Er(e,t,n,!1),g=(n&e.childLanes)!==0,ut||g){if(g=Ge,g!==null&&(i=Yf(g,n),i!==0&&i!==E.retryLane))throw E.retryLane=i,ja(e,i),jt(g,e,i),au;qu(b)||zo(),t=cu(e,t,n)}else qu(b)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Ze=ln(b.nextSibling),_t=t,Ne=!0,aa=null,an=!1,e!==null&&Hh(t,e),t=su(t,i.children),t.flags|=4096);return t}return s?(ua(),b=i.fallback,s=t.mode,E=e.child,L=E.sibling,i=Dn(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,L!==null?b=Dn(L,b):(b=La(b,s,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,Li(null,i),i=t.child,b=e.child.memoizedState,b===null?b=lu(n):(s=b.cachePool,s!==null?(E=st._currentValue,s=s.parent!==E?{parent:E,pool:E}:s):s=qh(),b={baseLanes:b.baseLanes|n,cachePool:s}),i.memoizedState=b,i.childLanes=ou(e,g,n),t.memoizedState=iu,Li(e.child,i)):(ca(t),n=e.child,e=n.sibling,n=Dn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function su(e,t){return t=wo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wo(e,t){return e=Vt(22,e,null,t),e.lanes=0,e}function cu(e,t,n){return Ga(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Tc(e.return,t,n)}function uu(e,t,n,i,s,c){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:c}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=i,g.tail=n,g.tailMode=s,g.treeForkCount=c)}function nm(e,t,n){var i=t.pendingProps,s=i.revealOrder,c=i.tail;i=i.children;var g=at.current,b=(g&2)!==0;if(b?(g=g&1|2,t.flags|=128):g&=1,F(at,g),Tt(e,t,i,n),i=Ne?Ci:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tm(e,n,t);else if(e.tag===19)tm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),uu(t,!1,s,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&oo(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}uu(t,!0,n,null,c,i);break;case"together":uu(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Er(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function du(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function Gb(e,t,n){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),ia(t,st,e.memoizedState.cache),Ba();break;case 27:case 5:pt(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Hc(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ca(t),t.flags|=128,null):(n&t.child.childLanes)!==0?em(e,t,n):(ca(t),e=Ln(e,t,n),e!==null?e.sibling:null);ca(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Er(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return nm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(at,at.current),i)break;return null;case 22:return t.lanes=0,Zp(e,t,n,t.pendingProps);case 24:ia(t,st,e.memoizedState.cache)}return Ln(e,t,n)}function am(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!du(e,n)&&(t.flags&128)===0)return ut=!1,Gb(e,t,n);ut=(e.flags&131072)!==0}else ut=!1,Ne&&(t.flags&1048576)!==0&&Uh(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")gc(e)?(i=Qa(e,i),t.tag=1,t=Wp(null,t,e,i,n)):(t.tag=0,t=ru(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===$){t.tag=11,t=Gp(null,t,e,i,n);break e}else if(s===P){t.tag=14,t=$p(null,t,e,i,n);break e}}throw t=je(e)||e,Error(o(306,t,""))}}return t;case 0:return ru(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Qa(i,t.pendingProps),Wp(e,t,i,s,n);case 3:e:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var c=t.memoizedState;s=c.element,Mc(e,t),Oi(t,i,null,n);var g=t.memoizedState;if(i=g.cache,ia(t,st,i),i!==c.cache&&Cc(t,[st],n,!0),Di(),i=g.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Pp(e,t,i,n);break e}else if(i!==s){s=en(Error(o(424)),t),ki(s),t=Pp(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=ln(e.firstChild),_t=t,Ne=!0,aa=null,an=!0,n=Zh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ba(),i===s){t=Ln(e,t,n);break e}Tt(e,t,i,n)}t=t.child}return t;case 26:return bo(e,t),e===null?(n=pg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ne||(n=t.type,e=t.pendingProps,i=Ho(ae.current).createElement(n),i[xt]=t,i[Mt]=e,Ct(i,n,e),vt(i),t.stateNode=i):t.memoizedState=pg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pt(t),e===null&&Ne&&(i=t.stateNode=dg(t.type,t.pendingProps,ae.current),_t=t,an=!0,s=Ze,ya(t.type)?(Fu=s,Ze=ln(i.firstChild)):Ze=s),Tt(e,t,t.pendingProps.children,n),bo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((s=i=Ze)&&(i=xw(i,t.type,t.pendingProps,an),i!==null?(t.stateNode=i,_t=t,Ze=ln(i.firstChild),an=!1,s=!0):s=!1),s||ra(t)),pt(t),s=t.type,c=t.pendingProps,g=e!==null?e.memoizedProps:null,i=c.children,Bu(s,c)?i=null:g!==null&&Bu(s,g)&&(t.flags|=32),t.memoizedState!==null&&(s=Lc(e,t,Hb,null,null,n),Pi._currentValue=s),bo(e,t),Tt(e,t,i,n),t.child;case 6:return e===null&&Ne&&((e=n=Ze)&&(n=_w(n,t.pendingProps,an),n!==null?(t.stateNode=n,_t=t,Ze=null,e=!0):e=!1),e||ra(t)),null;case 13:return em(e,t,n);case 4:return Me(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ga(t,null,i,n):Tt(e,t,i,n),t.child;case 11:return Gp(e,t,t.type,t.pendingProps,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ia(t,t.type,i.value),Tt(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Xa(t),s=St(s),i=i(s),t.flags|=1,Tt(e,t,i,n),t.child;case 14:return $p(e,t,t.type,t.pendingProps,n);case 15:return Qp(e,t,t.type,t.pendingProps,n);case 19:return nm(e,t,n);case 31:return Fb(e,t,n);case 22:return Zp(e,t,n,t.pendingProps);case 24:return Xa(t),i=St(st),e===null?(s=Nc(),s===null&&(s=Ge,c=kc(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=n),s=c),t.memoizedState={parent:i,cache:s},Ac(t),ia(t,st,s)):((e.lanes&n)!==0&&(Mc(e,t),Oi(t,null,null,n),Di()),s=e.memoizedState,c=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ia(t,st,i)):(i=c.cache,ia(t,st,i),i!==s.cache&&Cc(t,[st],n,!0))),Tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Bn(e){e.flags|=4}function fu(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Am())e.flags|=8192;else throw Fa=ao,zc}else e.flags&=-16777217}function rm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bg(t))if(Am())e.flags|=8192;else throw Fa=ao,zc}function xo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jf():536870912,e.lanes|=t,Br|=t)}function Bi(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $b(e,t,n){var i=t.pendingProps;switch(wc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ie(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Un(st),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(kr(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_c())),Ie(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(Bn(t),c!==null?(Ie(t),rm(t,c)):(Ie(t),fu(t,s,null,i,n))):c?c!==e.memoizedState?(Bn(t),Ie(t),rm(t,c)):(Ie(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bn(t),Ie(t),fu(t,s,e,i,n)),null;case 27:if(Nn(t),n=ae.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ie(t),null}e=I.current,kr(t)?jh(t):(e=dg(s,i,n),t.stateNode=e,Bn(t))}return Ie(t),null;case 5:if(Nn(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ie(t),null}if(c=I.current,kr(t))jh(t);else{var g=Ho(ae.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?g.createElement("select",{is:i.is}):g.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?g.createElement(s,{is:i.is}):g.createElement(s)}}c[xt]=t,c[Mt]=i;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=c;e:switch(Ct(c,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Bn(t)}}return Ie(t),fu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ae.current,kr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=_t,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||eg(e.nodeValue,n)),e||ra(t,!0)}else e=Ho(e).createTextNode(i),e[xt]=t,t.stateNode=e}return Ie(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=kr(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[xt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),e=!1}else n=_c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Gt(t),t):(Gt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ie(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=kr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[xt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),s=!1}else s=_c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Gt(t),t):(Gt(t),null)}return Gt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xo(t,t.updateQueue),Ie(t),null);case 4:return be(),e===null&&Ru(t.stateNode.containerInfo),Ie(t),null;case 10:return Un(t.type),Ie(t),null;case 19:if(H(at),i=t.memoizedState,i===null)return Ie(t),null;if(s=(t.flags&128)!==0,c=i.rendering,c===null)if(s)Bi(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=oo(e),c!==null){for(t.flags|=128,Bi(i,!1),e=c.updateQueue,t.updateQueue=e,xo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Dh(n,e),n=n.sibling;return F(at,at.current&1|2),Ne&&On(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Bt()>ko&&(t.flags|=128,s=!0,Bi(i,!1),t.lanes=4194304)}else{if(!s)if(e=oo(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,xo(t,e),Bi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Ne)return Ie(t),null}else 2*Bt()-i.renderingStartTime>ko&&n!==536870912&&(t.flags|=128,s=!0,Bi(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Bt(),e.sibling=null,n=at.current,F(at,s?n&1|2:n&1),Ne&&On(t,i.treeForkCount),e):(Ie(t),null);case 22:case 23:return Gt(t),Uc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),n=t.updateQueue,n!==null&&xo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&H(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Un(st),Ie(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Qb(e,t){switch(wc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(st),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nn(t),null;case 31:if(t.memoizedState!==null){if(Gt(t),t.alternate===null)throw Error(o(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(at),null;case 4:return be(),null;case 10:return Un(t.type),null;case 22:case 23:return Gt(t),Uc(),e!==null&&H(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Un(st),null;case 25:return null;default:return null}}function im(e,t){switch(wc(t),t.tag){case 3:Un(st),be();break;case 26:case 27:case 5:Nn(t);break;case 4:be();break;case 31:t.memoizedState!==null&&Gt(t);break;case 13:Gt(t);break;case 19:H(at);break;case 10:Un(t.type);break;case 22:case 23:Gt(t),Uc(),e!==null&&H(qa);break;case 24:Un(st)}}function Yi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var c=n.create,g=n.inst;i=c(),g.destroy=i}n=n.next}while(n!==s)}}catch(b){Be(t,t.return,b)}}function da(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&e)===e){var g=i.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,s=t;var E=n,L=b;try{L()}catch(X){Be(s,E,X)}}}i=i.next}while(i!==c)}}catch(X){Be(t,t.return,X)}}function lm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Jh(t,n)}catch(i){Be(e,e.return,i)}}}function om(e,t,n){n.props=Qa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Be(e,t,i)}}function Xi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){Be(e,t,s)}}function _n(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Be(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Be(e,t,s)}else n.current=null}function sm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Be(e,e.return,s)}}function hu(e,t,n){try{var i=e.stateNode;mw(i,e.type,n,t),i[Mt]=t}catch(s){Be(e,e.return,s)}}function cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}function _o(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(_o(e,t,n),e=e.sibling;e!==null;)_o(e,t,n),e=e.sibling}function um(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ct(t,i,n),t[xt]=e,t[Mt]=n}catch(c){Be(e,e.return,c)}}var Yn=!1,dt=!1,gu=!1,dm=typeof WeakSet=="function"?WeakSet:Set,yt=null;function Zb(e,t){if(e=e.containerInfo,ju=Vo,e=Sh(e),cc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var g=0,b=-1,E=-1,L=0,X=0,G=e,B=null;t:for(;;){for(var Y;G!==n||s!==0&&G.nodeType!==3||(b=g+s),G!==c||i!==0&&G.nodeType!==3||(E=g+i),G.nodeType===3&&(g+=G.nodeValue.length),(Y=G.firstChild)!==null;)B=G,G=Y;for(;;){if(G===e)break t;if(B===n&&++L===s&&(b=g),B===c&&++X===i&&(E=g),(Y=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=Y}n=b===-1||E===-1?null:{start:b,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:e,selectionRange:n},Vo=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,s=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var te=Qa(n.type,s);e=i.getSnapshotBeforeUpdate(te,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(de){Be(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Xu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function fm(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:qn(e,n),i&4&&Yi(5,n);break;case 1:if(qn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Be(n,n.return,g)}else{var s=Qa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(n,n.return,g)}}i&64&&lm(n),i&512&&Xi(n,n.return);break;case 3:if(qn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Jh(e,t)}catch(g){Be(n,n.return,g)}}break;case 27:t===null&&i&4&&um(n);case 26:case 5:qn(e,n),t===null&&i&4&&sm(n),i&512&&Xi(n,n.return);break;case 12:qn(e,n);break;case 31:qn(e,n),i&4&&mm(e,n);break;case 13:qn(e,n),i&4&&gm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=aw.bind(null,n),Sw(e,n))));break;case 22:if(i=n.memoizedState!==null||Yn,!i){t=t!==null&&t.memoizedState!==null||dt,s=Yn;var c=dt;Yn=i,(dt=t)&&!c?Vn(e,n,(n.subtreeFlags&8772)!==0):qn(e,n),Yn=s,dt=c}break;case 30:break;default:qn(e,n)}}function hm(e){var t=e.alternate;t!==null&&(e.alternate=null,hm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$s(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Ot=!1;function Xn(e,t,n){for(n=n.child;n!==null;)pm(e,t,n),n=n.sibling}function pm(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(di,n)}catch{}switch(n.tag){case 26:dt||_n(n,t),Xn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:dt||_n(n,t);var i=Ke,s=Ot;ya(n.type)&&(Ke=n.stateNode,Ot=!1),Xn(e,t,n),Ji(n.stateNode),Ke=i,Ot=s;break;case 5:dt||_n(n,t);case 6:if(i=Ke,s=Ot,Ke=null,Xn(e,t,n),Ke=i,Ot=s,Ke!==null)if(Ot)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(n.stateNode)}catch(c){Be(n,t,c)}else try{Ke.removeChild(n.stateNode)}catch(c){Be(n,t,c)}break;case 18:Ke!==null&&(Ot?(e=Ke,lg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Qr(e)):lg(Ke,n.stateNode));break;case 4:i=Ke,s=Ot,Ke=n.stateNode.containerInfo,Ot=!0,Xn(e,t,n),Ke=i,Ot=s;break;case 0:case 11:case 14:case 15:da(2,n,t),dt||da(4,n,t),Xn(e,t,n);break;case 1:dt||(_n(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&om(n,t,i)),Xn(e,t,n);break;case 21:Xn(e,t,n);break;case 22:dt=(i=dt)||n.memoizedState!==null,Xn(e,t,n),dt=i;break;default:Xn(e,t,n)}}function mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(n){Be(t,t.return,n)}}}function gm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(n){Be(t,t.return,n)}}function Ib(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new dm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new dm),t;default:throw Error(o(435,e.tag))}}function So(e,t){var n=Ib(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=rw.bind(null,e,i);i.then(s,s)}})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],c=e,g=t,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(ya(b.type)){Ke=b.stateNode,Ot=!1;break e}break;case 5:Ke=b.stateNode,Ot=!1;break e;case 3:case 4:Ke=b.stateNode.containerInfo,Ot=!0;break e}b=b.return}if(Ke===null)throw Error(o(160));pm(c,g,s),Ke=null,Ot=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vm(t,e),t=t.sibling}var dn=null;function vm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Ut(e),i&4&&(da(3,e,e.return),Yi(3,e),da(5,e,e.return));break;case 1:Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),i&64&&Yn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=dn;if(Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":c=s.getElementsByTagName("title")[0],(!c||c[pi]||c[xt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(i),s.head.insertBefore(c,s.querySelector("head > title"))),Ct(c,i,n),c[xt]=e,vt(c),i=c;break e;case"link":var g=vg("link","href",s).get(i+(n.href||""));if(g){for(var b=0;b<g.length;b++)if(c=g[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(b,1);break t}}c=s.createElement(i),Ct(c,i,n),s.head.appendChild(c);break;case"meta":if(g=vg("meta","content",s).get(i+(n.content||""))){for(b=0;b<g.length;b++)if(c=g[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(b,1);break t}}c=s.createElement(i),Ct(c,i,n),s.head.appendChild(c);break;default:throw Error(o(468,i))}c[xt]=e,vt(c),i=c}e.stateNode=i}else yg(s,e.type,e.stateNode);else e.stateNode=gg(s,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?yg(s,e.type,e.stateNode):gg(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&hu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),n!==null&&i&4&&hu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),e.flags&32){s=e.stateNode;try{gr(s,"")}catch(te){Be(e,e.return,te)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,hu(e,s,n!==null?n.memoizedProps:s)),i&1024&&(gu=!0);break;case 6:if(Rt(t,e),Ut(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(te){Be(e,e.return,te)}}break;case 3:if(Bo=null,s=dn,dn=jo(t.containerInfo),Rt(t,e),dn=s,Ut(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(te){Be(e,e.return,te)}gu&&(gu=!1,ym(e));break;case 4:i=dn,dn=jo(e.stateNode.containerInfo),Rt(t,e),Ut(e),dn=i;break;case 12:Rt(t,e),Ut(e);break;case 31:Rt(t,e),Ut(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,So(e,i)));break;case 13:Rt(t,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Co=Bt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,So(e,i)));break;case 22:s=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,L=Yn,X=dt;if(Yn=L||s,dt=X||E,Rt(t,e),dt=X,Yn=L,Ut(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||E||Yn||dt||Za(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(c=E.stateNode,s)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=E.stateNode;var G=E.memoizedProps.style,B=G!=null&&G.hasOwnProperty("display")?G.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(te){Be(E,E.return,te)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=s?"":E.memoizedProps}catch(te){Be(E,E.return,te)}}}else if(t.tag===18){if(n===null){E=t;try{var Y=E.stateNode;s?og(Y,!0):og(E.stateNode,!1)}catch(te){Be(E,E.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,So(e,n))));break;case 19:Rt(t,e),Ut(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,So(e,i)));break;case 30:break;case 21:break;default:Rt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(cm(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var s=n.stateNode,c=pu(e);_o(e,c,s);break;case 5:var g=n.stateNode;n.flags&32&&(gr(g,""),n.flags&=-33);var b=pu(e);_o(e,b,g);break;case 3:case 4:var E=n.stateNode.containerInfo,L=pu(e);mu(e,L,E);break;default:throw Error(o(161))}}catch(X){Be(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ym(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fm(e,t.alternate,t),t=t.sibling}function Za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Za(t);break;case 1:_n(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&om(t,t.return,n),Za(t);break;case 27:Ji(t.stateNode);case 26:case 5:_n(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}e=e.sibling}}function Vn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,c=t,g=c.flags;switch(c.tag){case 0:case 11:case 15:Vn(s,c,n),Yi(4,c);break;case 1:if(Vn(s,c,n),i=c,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(L){Be(i,i.return,L)}if(i=c,s=i.updateQueue,s!==null){var b=i.stateNode;try{var E=s.shared.hiddenCallbacks;if(E!==null)for(s.shared.hiddenCallbacks=null,s=0;s<E.length;s++)Ih(E[s],b)}catch(L){Be(i,i.return,L)}}n&&g&64&&lm(c),Xi(c,c.return);break;case 27:um(c);case 26:case 5:Vn(s,c,n),n&&i===null&&g&4&&sm(c),Xi(c,c.return);break;case 12:Vn(s,c,n);break;case 31:Vn(s,c,n),n&&g&4&&mm(s,c);break;case 13:Vn(s,c,n),n&&g&4&&gm(s,c);break;case 22:c.memoizedState===null&&Vn(s,c,n),Xi(c,c.return);break;case 30:break;default:Vn(s,c,n)}t=t.sibling}}function vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ei(n))}function yu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ei(e))}function fn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bm(e,t,n,i),t=t.sibling}function bm(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:fn(e,t,n,i),s&2048&&Yi(9,t);break;case 1:fn(e,t,n,i);break;case 3:fn(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ei(e)));break;case 12:if(s&2048){fn(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,g=c.id,b=c.onPostCommit;typeof b=="function"&&b(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Be(t,t.return,E)}}else fn(e,t,n,i);break;case 31:fn(e,t,n,i);break;case 13:fn(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,g=t.alternate,t.memoizedState!==null?c._visibility&2?fn(e,t,n,i):qi(e,t):c._visibility&2?fn(e,t,n,i):(c._visibility|=2,Hr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&vu(g,t);break;case 24:fn(e,t,n,i),s&2048&&yu(t.alternate,t);break;default:fn(e,t,n,i)}}function Hr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,g=t,b=n,E=i,L=g.flags;switch(g.tag){case 0:case 11:case 15:Hr(c,g,b,E,s),Yi(8,g);break;case 23:break;case 22:var X=g.stateNode;g.memoizedState!==null?X._visibility&2?Hr(c,g,b,E,s):qi(c,g):(X._visibility|=2,Hr(c,g,b,E,s)),s&&L&2048&&vu(g.alternate,g);break;case 24:Hr(c,g,b,E,s),s&&L&2048&&yu(g.alternate,g);break;default:Hr(c,g,b,E,s)}t=t.sibling}}function qi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:qi(n,i),s&2048&&vu(i.alternate,i);break;case 24:qi(n,i),s&2048&&yu(i.alternate,i);break;default:qi(n,i)}t=t.sibling}}var Vi=8192;function jr(e,t,n){if(e.subtreeFlags&Vi)for(e=e.child;e!==null;)wm(e,t,n),e=e.sibling}function wm(e,t,n){switch(e.tag){case 26:jr(e,t,n),e.flags&Vi&&e.memoizedState!==null&&Uw(n,dn,e.memoizedState,e.memoizedProps);break;case 5:jr(e,t,n);break;case 3:case 4:var i=dn;dn=jo(e.stateNode.containerInfo),jr(e,t,n),dn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Vi,Vi=16777216,jr(e,t,n),Vi=i):jr(e,t,n));break;default:jr(e,t,n)}}function xm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];yt=i,Sm(i,e)}xm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_m(e),e=e.sibling}function _m(e){switch(e.tag){case 0:case 11:case 15:Fi(e),e.flags&2048&&da(9,e,e.return);break;case 3:Fi(e);break;case 12:Fi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,To(e)):Fi(e);break;default:Fi(e)}}function To(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];yt=i,Sm(i,e)}xm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),To(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,To(t));break;default:To(t)}e=e.sibling}}function Sm(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ei(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,yt=i;else e:for(n=e;yt!==null;){i=yt;var s=i.sibling,c=i.return;if(hm(i),i===n){yt=null;break e}if(s!==null){s.return=c,yt=s;break e}yt=c}}}var Jb={getCacheForType:function(e){var t=St(st),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return St(st).controller.signal}},Kb=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ge=null,Te=null,ke=0,Le=0,$t=null,fa=!1,Lr=!1,bu=!1,Fn=0,tt=0,ha=0,Ia=0,wu=0,Qt=0,Br=0,Gi=null,Ht=null,xu=!1,Co=0,Tm=0,ko=1/0,Eo=null,pa=null,mt=0,ma=null,Yr=null,Gn=0,_u=0,Su=null,Cm=null,$i=0,Tu=null;function Zt(){return(Re&2)!==0&&ke!==0?ke&-ke:w.T!==null?Au():Xf()}function km(){if(Qt===0)if((ke&536870912)===0||Ne){var e=Rl;Rl<<=1,(Rl&3932160)===0&&(Rl=262144),Qt=e}else Qt=536870912;return e=Ft.current,e!==null&&(e.flags|=32),Qt}function jt(e,t,n){(e===Ge&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Xr(e,0),ga(e,ke,Qt,!1)),hi(e,n),((Re&2)===0||e!==Ge)&&(e===Ge&&((Re&2)===0&&(Ia|=n),tt===4&&ga(e,ke,Qt,!1)),Sn(e))}function Em(e,t,n){if((Re&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||fi(e,t),s=i?ew(e,t):ku(e,t,!0),c=i;do{if(s===0){Lr&&!i&&ga(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Wb(n)){s=ku(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var b=e;s=Gi;var E=b.current.memoizedState.isDehydrated;if(E&&(Xr(b,g).flags|=256),g=ku(b,g,!1),g!==2){if(bu&&!E){b.errorRecoveryDisabledLanes|=c,Ia|=c,s=4;break e}c=Ht,Ht=s,c!==null&&(Ht===null?Ht=c:Ht.push.apply(Ht,c))}s=g}if(c=!1,s!==2)continue}}if(s===1){Xr(e,0),ga(e,t,0,!0);break}e:{switch(i=e,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ga(i,t,Qt,!fa);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=Co+300-Bt(),10<s)){if(ga(i,t,Qt,!fa),Hl(i,0,!0)!==0)break e;Gn=t,i.timeoutHandle=rg(Nm.bind(null,i,n,Ht,Eo,xu,t,Qt,Ia,Br,fa,c,"Throttled",-0,0),s);break e}Nm(i,n,Ht,Eo,xu,t,Qt,Ia,Br,fa,c,null,-0,0)}}break}while(!0);Sn(e)}function Nm(e,t,n,i,s,c,g,b,E,L,X,G,B,Y){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},wm(t,c,G);var te=(c&62914560)===c?Co-Bt():(c&4194048)===c?Tm-Bt():0;if(te=Hw(G,te),te!==null){Gn=c,e.cancelPendingCommit=te(Hm.bind(null,e,t,c,n,i,s,g,b,E,X,G,null,B,Y)),ga(e,c,g,!L);return}}Hm(e,t,c,n,i,s,g,b,E)}function Wb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],c=s.getSnapshot;s=s.value;try{if(!qt(c(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,n,i){t&=~wu,t&=~Ia,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var c=31-Xt(s),g=1<<c;i[c]=-1,s&=~g}n!==0&&Lf(e,n,t)}function No(){return(Re&6)===0?(Qi(0),!1):!0}function Cu(){if(Te!==null){if(Le===0)var e=Te.return;else e=Te,Rn=Ya=null,Xc(e),Mr=null,zi=0,e=Te;for(;e!==null;)im(e.alternate,e),e=e.return;Te=null}}function Xr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,yw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gn=0,Cu(),Ge=e,Te=n=Dn(e.current,null),ke=t,Le=0,$t=null,fa=!1,Lr=fi(e,t),bu=!1,Br=Qt=wu=Ia=ha=tt=0,Ht=Gi=null,xu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Xt(i),c=1<<s;t|=e[s],i&=~c}return Fn=t,Zl(),n}function zm(e,t){ve=null,w.H=ji,t===Ar||t===no?(t=Gh(),Le=3):t===zc?(t=Gh(),Le=4):Le=t===au?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$t=t,Te===null&&(tt=1,vo(e,en(t,e.current)))}function Am(){var e=Ft.current;return e===null?!0:(ke&4194048)===ke?rn===null:(ke&62914560)===ke||(ke&536870912)!==0?e===rn:!1}function Mm(){var e=w.H;return w.H=ji,e===null?ji:e}function Dm(){var e=w.A;return w.A=Jb,e}function zo(){tt=4,fa||(ke&4194048)!==ke&&Ft.current!==null||(Lr=!0),(ha&134217727)===0&&(Ia&134217727)===0||Ge===null||ga(Ge,ke,Qt,!1)}function ku(e,t,n){var i=Re;Re|=2;var s=Mm(),c=Dm();(Ge!==e||ke!==t)&&(Eo=null,Xr(e,t)),t=!1;var g=tt;e:do try{if(Le!==0&&Te!==null){var b=Te,E=$t;switch(Le){case 8:Cu(),g=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var L=Le;if(Le=0,$t=null,qr(e,b,E,L),n&&Lr){g=0;break e}break;default:L=Le,Le=0,$t=null,qr(e,b,E,L)}}Pb(),g=tt;break}catch(X){zm(e,X)}while(!0);return t&&e.shellSuspendCounter++,Rn=Ya=null,Re=i,w.H=s,w.A=c,Te===null&&(Ge=null,ke=0,Zl()),g}function Pb(){for(;Te!==null;)Om(Te)}function ew(e,t){var n=Re;Re|=2;var i=Mm(),s=Dm();Ge!==e||ke!==t?(Eo=null,ko=Bt()+500,Xr(e,t)):Lr=fi(e,t);e:do try{if(Le!==0&&Te!==null){t=Te;var c=$t;t:switch(Le){case 1:Le=0,$t=null,qr(e,t,c,1);break;case 2:case 9:if(Vh(c)){Le=0,$t=null,Rm(t);break}t=function(){Le!==2&&Le!==9||Ge!==e||(Le=7),Sn(e)},c.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Vh(c)?(Le=0,$t=null,Rm(t)):(Le=0,$t=null,qr(e,t,c,7));break;case 5:var g=null;switch(Te.tag){case 26:g=Te.memoizedState;case 5:case 27:var b=Te;if(g?bg(g):b.stateNode.complete){Le=0,$t=null;var E=b.sibling;if(E!==null)Te=E;else{var L=b.return;L!==null?(Te=L,Ao(L)):Te=null}break t}}Le=0,$t=null,qr(e,t,c,5);break;case 6:Le=0,$t=null,qr(e,t,c,6);break;case 8:Cu(),tt=6;break e;default:throw Error(o(462))}}tw();break}catch(X){zm(e,X)}while(!0);return Rn=Ya=null,w.H=i,w.A=s,Re=n,Te!==null?0:(Ge=null,ke=0,Zl(),tt)}function tw(){for(;Te!==null&&!Ty();)Om(Te)}function Om(e){var t=am(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,t===null?Ao(e):Te=t}function Rm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Kp(n,t,t.pendingProps,t.type,void 0,ke);break;case 11:t=Kp(n,t,t.pendingProps,t.type.render,t.ref,ke);break;case 5:Xc(t);default:im(n,t),t=Te=Dh(t,Fn),t=am(n,t,Fn)}e.memoizedProps=e.pendingProps,t===null?Ao(e):Te=t}function qr(e,t,n,i){Rn=Ya=null,Xc(t),Mr=null,zi=0;var s=t.return;try{if(Vb(e,s,t,n,ke)){tt=1,vo(e,en(n,e.current)),Te=null;return}}catch(c){if(s!==null)throw Te=s,c;tt=1,vo(e,en(n,e.current)),Te=null;return}t.flags&32768?(Ne||i===1?e=!0:Lr||(ke&536870912)!==0?e=!1:(fa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ft.current,i!==null&&i.tag===13&&(i.flags|=16384))),Um(t,e)):Ao(t)}function Ao(e){var t=e;do{if((t.flags&32768)!==0){Um(t,fa);return}e=t.return;var n=$b(t.alternate,t,Fn);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);tt===0&&(tt=5)}function Um(e,t){do{var n=Qb(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);tt=6,Te=null}function Hm(e,t,n,i,s,c,g,b,E){e.cancelPendingCommit=null;do Mo();while(mt!==0);if((Re&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=pc,Ry(e,n,c,g,b,E),e===Ge&&(Te=Ge=null,ke=0),Yr=t,ma=e,Gn=n,_u=c,Su=s,Cm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iw(Dl,function(){return Xm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=w.T,w.T=null,s=N.p,N.p=2,g=Re,Re|=4;try{Zb(e,t,n)}finally{Re=g,N.p=s,w.T=i}}mt=1,jm(),Lm(),Bm()}}function jm(){if(mt===1){mt=0;var e=ma,t=Yr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=w.T,w.T=null;var i=N.p;N.p=2;var s=Re;Re|=4;try{vm(t,e);var c=Lu,g=Sh(e.containerInfo),b=c.focusedElem,E=c.selectionRange;if(g!==b&&b&&b.ownerDocument&&_h(b.ownerDocument.documentElement,b)){if(E!==null&&cc(b)){var L=E.start,X=E.end;if(X===void 0&&(X=L),"selectionStart"in b)b.selectionStart=L,b.selectionEnd=Math.min(X,b.value.length);else{var G=b.ownerDocument||document,B=G&&G.defaultView||window;if(B.getSelection){var Y=B.getSelection(),te=b.textContent.length,de=Math.min(E.start,te),Fe=E.end===void 0?de:Math.min(E.end,te);!Y.extend&&de>Fe&&(g=Fe,Fe=de,de=g);var O=xh(b,de),A=xh(b,Fe);if(O&&A&&(Y.rangeCount!==1||Y.anchorNode!==O.node||Y.anchorOffset!==O.offset||Y.focusNode!==A.node||Y.focusOffset!==A.offset)){var j=G.createRange();j.setStart(O.node,O.offset),Y.removeAllRanges(),de>Fe?(Y.addRange(j),Y.extend(A.node,A.offset)):(j.setEnd(A.node,A.offset),Y.addRange(j))}}}}for(G=[],Y=b;Y=Y.parentNode;)Y.nodeType===1&&G.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<G.length;b++){var V=G[b];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Vo=!!ju,Lu=ju=null}finally{Re=s,N.p=i,w.T=n}}e.current=t,mt=2}}function Lm(){if(mt===2){mt=0;var e=ma,t=Yr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=w.T,w.T=null;var i=N.p;N.p=2;var s=Re;Re|=4;try{fm(e,t.alternate,t)}finally{Re=s,N.p=i,w.T=n}}mt=3}}function Bm(){if(mt===4||mt===3){mt=0,Cy();var e=ma,t=Yr,n=Gn,i=Cm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mt=5:(mt=0,Yr=ma=null,Ym(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(pa=null),Fs(n),t=t.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(di,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=w.T,s=N.p,N.p=2,w.T=null;try{for(var c=e.onRecoverableError,g=0;g<i.length;g++){var b=i[g];c(b.value,{componentStack:b.stack})}}finally{w.T=t,N.p=s}}(Gn&3)!==0&&Mo(),Sn(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Tu?$i++:($i=0,Tu=e):$i=0,Qi(0)}}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ei(t)))}function Mo(){return jm(),Lm(),Bm(),Xm()}function Xm(){if(mt!==5)return!1;var e=ma,t=_u;_u=0;var n=Fs(Gn),i=w.T,s=N.p;try{N.p=32>n?32:n,w.T=null,n=Su,Su=null;var c=ma,g=Gn;if(mt=0,Yr=ma=null,Gn=0,(Re&6)!==0)throw Error(o(331));var b=Re;if(Re|=4,_m(c.current),bm(c,c.current,g,n),Re=b,Qi(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(di,c)}catch{}return!0}finally{N.p=s,w.T=i,Ym(e,t)}}function qm(e,t,n){t=en(n,t),t=nu(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(hi(e,2),Sn(e))}function Be(e,t,n){if(e.tag===3)qm(e,e,n);else for(;t!==null;){if(t.tag===3){qm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))){e=en(n,e),n=Vp(2),i=sa(t,n,2),i!==null&&(Fp(n,i,t,e),hi(i,2),Sn(i));break}}t=t.return}}function Eu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Kb;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(bu=!0,s.add(n),e=nw.bind(null,e,t,n),t.then(e,e))}function nw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ge===e&&(ke&n)===n&&(tt===4||tt===3&&(ke&62914560)===ke&&300>Bt()-Co?(Re&2)===0&&Xr(e,0):wu|=n,Br===ke&&(Br=0)),Sn(e)}function Vm(e,t){t===0&&(t=jf()),e=ja(e,t),e!==null&&(hi(e,t),Sn(e))}function aw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vm(e,n)}function rw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Vm(e,n)}function iw(e,t){return Ys(e,t)}var Do=null,Vr=null,Nu=!1,Oo=!1,zu=!1,va=0;function Sn(e){e!==Vr&&e.next===null&&(Vr===null?Do=Vr=e:Vr=Vr.next=e),Oo=!0,Nu||(Nu=!0,ow())}function Qi(e,t){if(!zu&&Oo){zu=!0;do for(var n=!1,i=Do;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var c=0;else{var g=i.suspendedLanes,b=i.pingedLanes;c=(1<<31-Xt(42|e)+1)-1,c&=s&~(g&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Qm(i,c))}else c=ke,c=Hl(i,i===Ge?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||fi(i,c)||(n=!0,Qm(i,c));i=i.next}while(n);zu=!1}}function lw(){Fm()}function Fm(){Oo=Nu=!1;var e=0;va!==0&&vw()&&(e=va);for(var t=Bt(),n=null,i=Do;i!==null;){var s=i.next,c=Gm(i,t);c===0?(i.next=null,n===null?Do=s:n.next=s,s===null&&(Vr=n)):(n=i,(e!==0||(c&3)!==0)&&(Oo=!0)),i=s}mt!==0&&mt!==5||Qi(e),va!==0&&(va=0)}function Gm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var g=31-Xt(c),b=1<<g,E=s[g];E===-1?((b&n)===0||(b&i)!==0)&&(s[g]=Oy(b,t)):E<=t&&(e.expiredLanes|=b),c&=~b}if(t=Ge,n=ke,n=Hl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Xs(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||fi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Xs(i),Fs(n)){case 2:case 8:n=Uf;break;case 32:n=Dl;break;case 268435456:n=Hf;break;default:n=Dl}return i=$m.bind(null,e),n=Ys(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Xs(i),e.callbackPriority=2,e.callbackNode=null,2}function $m(e,t){if(mt!==0&&mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Mo()&&e.callbackNode!==n)return null;var i=ke;return i=Hl(e,e===Ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Em(e,i,t),Gm(e,Bt()),e.callbackNode!=null&&e.callbackNode===n?$m.bind(null,e):null)}function Qm(e,t){if(Mo())return null;Em(e,t,!0)}function ow(){bw(function(){(Re&6)!==0?Ys(Rf,lw):Fm()})}function Au(){if(va===0){var e=Nr;e===0&&(e=Ol,Ol<<=1,(Ol&261888)===0&&(Ol=256)),va=e}return va}function Zm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yl(""+e)}function Im(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function sw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var c=Zm((s[Mt]||null).action),g=i.submitter;g&&(t=(t=g[Mt]||null)?Zm(t.formAction):g.getAttribute("formAction"),t!==null&&(c=t,g=null));var b=new Fl("action","action",null,i,s);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(va!==0){var E=g?Im(s,g):new FormData(s);Jc(n,{pending:!0,data:E,method:s.method,action:c},null,E)}}else typeof c=="function"&&(b.preventDefault(),E=g?Im(s,g):new FormData(s),Jc(n,{pending:!0,data:E,method:s.method,action:c},c,E))},currentTarget:s}]})}}for(var Mu=0;Mu<hc.length;Mu++){var Du=hc[Mu],cw=Du.toLowerCase(),uw=Du[0].toUpperCase()+Du.slice(1);un(cw,"on"+uw)}un(kh,"onAnimationEnd"),un(Eh,"onAnimationIteration"),un(Nh,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(kb,"onTransitionRun"),un(Eb,"onTransitionStart"),un(Nb,"onTransitionCancel"),un(zh,"onTransitionEnd"),pr("onMouseEnter",["mouseout","mouseover"]),pr("onMouseLeave",["mouseout","mouseover"]),pr("onPointerEnter",["pointerout","pointerover"]),pr("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zi));function Jm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var g=i.length-1;0<=g;g--){var b=i[g],E=b.instance,L=b.currentTarget;if(b=b.listener,E!==c&&s.isPropagationStopped())break e;c=b,s.currentTarget=L;try{c(s)}catch(X){Ql(X)}s.currentTarget=null,c=E}else for(g=0;g<i.length;g++){if(b=i[g],E=b.instance,L=b.currentTarget,b=b.listener,E!==c&&s.isPropagationStopped())break e;c=b,s.currentTarget=L;try{c(s)}catch(X){Ql(X)}s.currentTarget=null,c=E}}}}function Ce(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var i=e+"__bubble";n.has(i)||(Km(t,e,2,!1),n.add(i))}function Ou(e,t,n){var i=0;t&&(i|=4),Km(n,e,i,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Ru(e){if(!e[Ro]){e[Ro]=!0,Ff.forEach(function(n){n!=="selectionchange"&&(dw.has(n)||Ou(n,!1,e),Ou(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,Ou("selectionchange",!1,t))}}function Km(e,t,n,i){switch(kg(t)){case 2:var s=Bw;break;case 8:s=Yw;break;default:s=Iu}n=s.bind(null,t,n,e),s=void 0,!ec||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Uu(e,t,n,i,s){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var b=i.stateNode.containerInfo;if(b===s)break;if(g===4)for(g=i.return;g!==null;){var E=g.tag;if((E===3||E===4)&&g.stateNode.containerInfo===s)return;g=g.return}for(;b!==null;){if(g=dr(b),g===null)return;if(E=g.tag,E===5||E===6||E===26||E===27){i=c=g;continue e}b=b.parentNode}}i=i.return}nh(function(){var L=c,X=Ws(n),G=[];e:{var B=Ah.get(e);if(B!==void 0){var Y=Fl,te=e;switch(e){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":Y=rb;break;case"focusin":te="focus",Y=rc;break;case"focusout":te="blur",Y=rc;break;case"beforeblur":case"afterblur":Y=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=ob;break;case kh:case Eh:case Nh:Y=Iy;break;case zh:Y=cb;break;case"scroll":case"scrollend":Y=Fy;break;case"wheel":Y=db;break;case"copy":case"cut":case"paste":Y=Ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=oh;break;case"toggle":case"beforetoggle":Y=hb}var de=(t&4)!==0,Fe=!de&&(e==="scroll"||e==="scrollend"),O=de?B!==null?B+"Capture":null:B;de=[];for(var A=L,j;A!==null;){var V=A;if(j=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||j===null||O===null||(V=gi(A,O),V!=null&&de.push(Ii(A,V,j))),Fe)break;A=A.return}0<de.length&&(B=new Y(B,te,null,n,X),G.push({event:B,listeners:de}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",B&&n!==Ks&&(te=n.relatedTarget||n.fromElement)&&(dr(te)||te[ur]))break e;if((Y||B)&&(B=X.window===X?X:(B=X.ownerDocument)?B.defaultView||B.parentWindow:window,Y?(te=n.relatedTarget||n.toElement,Y=L,te=te?dr(te):null,te!==null&&(Fe=d(te),de=te.tag,te!==Fe||de!==5&&de!==27&&de!==6)&&(te=null)):(Y=null,te=L),Y!==te)){if(de=ih,V="onMouseLeave",O="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(de=oh,V="onPointerLeave",O="onPointerEnter",A="pointer"),Fe=Y==null?B:mi(Y),j=te==null?B:mi(te),B=new de(V,A+"leave",Y,n,X),B.target=Fe,B.relatedTarget=j,V=null,dr(X)===L&&(de=new de(O,A+"enter",te,n,X),de.target=j,de.relatedTarget=Fe,V=de),Fe=V,Y&&te)t:{for(de=fw,O=Y,A=te,j=0,V=O;V;V=de(V))j++;V=0;for(var se=A;se;se=de(se))V++;for(;0<j-V;)O=de(O),j--;for(;0<V-j;)A=de(A),V--;for(;j--;){if(O===A||A!==null&&O===A.alternate){de=O;break t}O=de(O),A=de(A)}de=null}else de=null;Y!==null&&Wm(G,B,Y,de,!1),te!==null&&Fe!==null&&Wm(G,Fe,te,de,!0)}}e:{if(B=L?mi(L):window,Y=B.nodeName&&B.nodeName.toLowerCase(),Y==="select"||Y==="input"&&B.type==="file")var De=mh;else if(hh(B))if(gh)De=Sb;else{De=xb;var ie=wb}else Y=B.nodeName,!Y||Y.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?L&&Js(L.elementType)&&(De=mh):De=_b;if(De&&(De=De(e,L))){ph(G,De,n,X);break e}ie&&ie(e,B,L),e==="focusout"&&L&&B.type==="number"&&L.memoizedProps.value!=null&&Is(B,"number",B.value)}switch(ie=L?mi(L):window,e){case"focusin":(hh(ie)||ie.contentEditable==="true")&&(wr=ie,uc=L,Ti=null);break;case"focusout":Ti=uc=wr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Th(G,n,X);break;case"selectionchange":if(Cb)break;case"keydown":case"keyup":Th(G,n,X)}var we;if(lc)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else br?dh(e,n)&&(Ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ee="onCompositionStart");Ee&&(sh&&n.locale!=="ko"&&(br||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&br&&(we=ah()):(ta=X,tc="value"in ta?ta.value:ta.textContent,br=!0)),ie=Uo(L,Ee),0<ie.length&&(Ee=new lh(Ee,e,null,n,X),G.push({event:Ee,listeners:ie}),we?Ee.data=we:(we=fh(n),we!==null&&(Ee.data=we)))),(we=mb?gb(e,n):vb(e,n))&&(Ee=Uo(L,"onBeforeInput"),0<Ee.length&&(ie=new lh("onBeforeInput","beforeinput",null,n,X),G.push({event:ie,listeners:Ee}),ie.data=we)),sw(G,e,L,n,X)}Jm(G,t)})}function Ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uo(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=gi(e,n),s!=null&&i.unshift(Ii(e,s,c)),s=gi(e,t),s!=null&&i.push(Ii(e,s,c))),e.tag===3)return i;e=e.return}return[]}function fw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wm(e,t,n,i,s){for(var c=t._reactName,g=[];n!==null&&n!==i;){var b=n,E=b.alternate,L=b.stateNode;if(b=b.tag,E!==null&&E===i)break;b!==5&&b!==26&&b!==27||L===null||(E=L,s?(L=gi(n,c),L!=null&&g.unshift(Ii(n,L,E))):s||(L=gi(n,c),L!=null&&g.push(Ii(n,L,E)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var hw=/\r\n?/g,pw=/\u0000|\uFFFD/g;function Pm(e){return(typeof e=="string"?e:""+e).replace(hw,`
`).replace(pw,"")}function eg(e,t){return t=Pm(t),Pm(e)===t}function Ve(e,t,n,i,s,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||gr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&gr(e,""+i);break;case"className":Ll(e,"class",i);break;case"tabIndex":Ll(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ll(e,n,i);break;case"style":eh(e,i,c);break;case"data":if(t!=="object"){Ll(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ve(e,t,"name",s.name,s,null),Ve(e,t,"formEncType",s.formEncType,s,null),Ve(e,t,"formMethod",s.formMethod,s,null),Ve(e,t,"formTarget",s.formTarget,s,null)):(Ve(e,t,"encType",s.encType,s,null),Ve(e,t,"method",s.method,s,null),Ve(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=An);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Yl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),jl(e,"popover",i);break;case"xlinkActuate":zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":zn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":zn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":zn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":zn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":jl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qy.get(n)||n,jl(e,n,i))}}function Hu(e,t,n,i,s,c){switch(n){case"style":eh(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?gr(e,i):(typeof i=="number"||typeof i=="bigint")&&gr(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),c=e[Mt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):jl(e,n,i)}}}function Ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,s=!1,c;for(c in n)if(n.hasOwnProperty(c)){var g=n[c];if(g!=null)switch(c){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ve(e,t,c,g,n,null)}}s&&Ve(e,t,"srcSet",n.srcSet,n,null),i&&Ve(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var b=c=g=s=null,E=null,L=null;for(i in n)if(n.hasOwnProperty(i)){var X=n[i];if(X!=null)switch(i){case"name":s=X;break;case"type":g=X;break;case"checked":E=X;break;case"defaultChecked":L=X;break;case"value":c=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(o(137,t));break;default:Ve(e,t,i,X,n,null)}}Jf(e,c,b,E,L,g,s,!1);return;case"select":Ce("invalid",e),i=g=c=null;for(s in n)if(n.hasOwnProperty(s)&&(b=n[s],b!=null))switch(s){case"value":c=b;break;case"defaultValue":g=b;break;case"multiple":i=b;default:Ve(e,t,s,b,n,null)}t=c,n=g,e.multiple=!!i,t!=null?mr(e,!!i,t,!1):n!=null&&mr(e,!!i,n,!0);return;case"textarea":Ce("invalid",e),c=s=i=null;for(g in n)if(n.hasOwnProperty(g)&&(b=n[g],b!=null))switch(g){case"value":i=b;break;case"defaultValue":s=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:Ve(e,t,g,b,n,null)}Wf(e,i,s,c);return;case"option":for(E in n)n.hasOwnProperty(E)&&(i=n[E],i!=null)&&(E==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ve(e,t,E,i,n,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<Zi.length;i++)Ce(Zi[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(i=n[L],i!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ve(e,t,L,i,n,null)}return;default:if(Js(t)){for(X in n)n.hasOwnProperty(X)&&(i=n[X],i!==void 0&&Hu(e,t,X,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&Ve(e,t,b,i,n,null))}function mw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,g=null,b=null,E=null,L=null,X=null;for(Y in n){var G=n[Y];if(n.hasOwnProperty(Y)&&G!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":E=G;default:i.hasOwnProperty(Y)||Ve(e,t,Y,null,i,G)}}for(var B in i){var Y=i[B];if(G=n[B],i.hasOwnProperty(B)&&(Y!=null||G!=null))switch(B){case"type":c=Y;break;case"name":s=Y;break;case"checked":L=Y;break;case"defaultChecked":X=Y;break;case"value":g=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Y!==G&&Ve(e,t,B,Y,i,G)}}Zs(e,g,b,E,L,X,c,s);return;case"select":Y=g=b=B=null;for(c in n)if(E=n[c],n.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":Y=E;default:i.hasOwnProperty(c)||Ve(e,t,c,null,i,E)}for(s in i)if(c=i[s],E=n[s],i.hasOwnProperty(s)&&(c!=null||E!=null))switch(s){case"value":B=c;break;case"defaultValue":b=c;break;case"multiple":g=c;default:c!==E&&Ve(e,t,s,c,i,E)}t=b,n=g,i=Y,B!=null?mr(e,!!n,B,!1):!!i!=!!n&&(t!=null?mr(e,!!n,t,!0):mr(e,!!n,n?[]:"",!1));return;case"textarea":Y=B=null;for(b in n)if(s=n[b],n.hasOwnProperty(b)&&s!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ve(e,t,b,null,i,s)}for(g in i)if(s=i[g],c=n[g],i.hasOwnProperty(g)&&(s!=null||c!=null))switch(g){case"value":B=s;break;case"defaultValue":Y=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&Ve(e,t,g,s,i,c)}Kf(e,B,Y);return;case"option":for(var te in n)B=n[te],n.hasOwnProperty(te)&&B!=null&&!i.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:Ve(e,t,te,null,i,B));for(E in i)B=i[E],Y=n[E],i.hasOwnProperty(E)&&B!==Y&&(B!=null||Y!=null)&&(E==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":Ve(e,t,E,B,i,Y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)B=n[de],n.hasOwnProperty(de)&&B!=null&&!i.hasOwnProperty(de)&&Ve(e,t,de,null,i,B);for(L in i)if(B=i[L],Y=n[L],i.hasOwnProperty(L)&&B!==Y&&(B!=null||Y!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:Ve(e,t,L,B,i,Y)}return;default:if(Js(t)){for(var Fe in n)B=n[Fe],n.hasOwnProperty(Fe)&&B!==void 0&&!i.hasOwnProperty(Fe)&&Hu(e,t,Fe,void 0,i,B);for(X in i)B=i[X],Y=n[X],!i.hasOwnProperty(X)||B===Y||B===void 0&&Y===void 0||Hu(e,t,X,B,i,Y);return}}for(var O in n)B=n[O],n.hasOwnProperty(O)&&B!=null&&!i.hasOwnProperty(O)&&Ve(e,t,O,null,i,B);for(G in i)B=i[G],Y=n[G],!i.hasOwnProperty(G)||B===Y||B==null&&Y==null||Ve(e,t,G,B,i,Y)}function tg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],c=s.transferSize,g=s.initiatorType,b=s.duration;if(c&&b&&tg(g)){for(g=0,b=s.responseEnd,i+=1;i<n.length;i++){var E=n[i],L=E.startTime;if(L>b)break;var X=E.transferSize,G=E.initiatorType;X&&tg(G)&&(E=E.responseEnd,g+=X*(E<b?1:(b-L)/(E-L)))}if(--i,t+=8*(c+g)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ju=null,Lu=null;function Ho(e){return e.nodeType===9?e:e.ownerDocument}function ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Bu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yu=null;function vw(){var e=window.event;return e&&e.type==="popstate"?e===Yu?!1:(Yu=e,!0):(Yu=null,!1)}var rg=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,bw=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(ww)}:rg;function ww(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function lg(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Qr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ji(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ji(n);for(var c=n.firstChild;c;){var g=c.nextSibling,b=c.nodeName;c[pi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=g}}else n==="body"&&Ji(e.ownerDocument.body);n=s}while(n);Qr(t)}function og(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Xu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Xu(n),$s(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[pi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=ln(e.nextSibling),e===null)break}return null}function _w(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ln(e.nextSibling),e===null))return null;return e}function sg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ln(e.nextSibling),e===null))return null;return e}function qu(e){return e.data==="$?"||e.data==="$~"}function Vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Sw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fu=null;function cg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ln(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ug(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function dg(e,t,n){switch(t=Ho(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ji(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$s(e)}var on=new Map,fg=new Set;function jo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=N.d;N.d={f:Tw,r:Cw,D:kw,C:Ew,L:Nw,m:zw,X:Mw,S:Aw,M:Dw};function Tw(){var e=$n.f(),t=No();return e||t}function Cw(e){var t=fr(e);t!==null&&t.tag===5&&t.type==="form"?zp(t):$n.r(e)}var Fr=typeof document>"u"?null:document;function hg(e,t,n){var i=Fr;if(i&&typeof t=="string"&&t){var s=Wt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),fg.has(s)||(fg.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Ct(t,"link",e),vt(t),i.head.appendChild(t)))}}function kw(e){$n.D(e),hg("dns-prefetch",e,null)}function Ew(e,t){$n.C(e,t),hg("preconnect",e,t)}function Nw(e,t,n){$n.L(e,t,n);var i=Fr;if(i&&e&&t){var s='link[rel="preload"][as="'+Wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Wt(n.imageSizes)+'"]')):s+='[href="'+Wt(e)+'"]';var c=s;switch(t){case"style":c=Gr(e);break;case"script":c=$r(e)}on.has(c)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),on.set(c,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Ki(c))||t==="script"&&i.querySelector(Wi(c))||(t=i.createElement("link"),Ct(t,"link",e),vt(t),i.head.appendChild(t)))}}function zw(e,t){$n.m(e,t);var n=Fr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Wt(i)+'"][href="'+Wt(e)+'"]',c=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=$r(e)}if(!on.has(c)&&(e=y({rel:"modulepreload",href:e},t),on.set(c,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wi(c)))return}i=n.createElement("link"),Ct(i,"link",e),vt(i),n.head.appendChild(i)}}}function Aw(e,t,n){$n.S(e,t,n);var i=Fr;if(i&&e){var s=hr(i).hoistableStyles,c=Gr(e);t=t||"default";var g=s.get(c);if(!g){var b={loading:0,preload:null};if(g=i.querySelector(Ki(c)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=on.get(c))&&Gu(e,n);var E=g=i.createElement("link");vt(E),Ct(E,"link",e),E._p=new Promise(function(L,X){E.onload=L,E.onerror=X}),E.addEventListener("load",function(){b.loading|=1}),E.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Lo(g,t,i)}g={type:"stylesheet",instance:g,count:1,state:b},s.set(c,g)}}}function Mw(e,t){$n.X(e,t);var n=Fr;if(n&&e){var i=hr(n).hoistableScripts,s=$r(e),c=i.get(s);c||(c=n.querySelector(Wi(s)),c||(e=y({src:e,async:!0},t),(t=on.get(s))&&$u(e,t),c=n.createElement("script"),vt(c),Ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function Dw(e,t){$n.M(e,t);var n=Fr;if(n&&e){var i=hr(n).hoistableScripts,s=$r(e),c=i.get(s);c||(c=n.querySelector(Wi(s)),c||(e=y({src:e,async:!0,type:"module"},t),(t=on.get(s))&&$u(e,t),c=n.createElement("script"),vt(c),Ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function pg(e,t,n,i){var s=(s=ae.current)?jo(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Gr(n.href),n=hr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Gr(n.href);var c=hr(s).hoistableStyles,g=c.get(e);if(g||(s=s.ownerDocument||s,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,g),(c=s.querySelector(Ki(e)))&&!c._p&&(g.instance=c,g.state.loading=5),on.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},on.set(e,n),c||Ow(s,e,n,g.state))),t&&i===null)throw Error(o(528,""));return g}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$r(n),n=hr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Gr(e){return'href="'+Wt(e)+'"'}function Ki(e){return'link[rel="stylesheet"]['+e+"]"}function mg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Ow(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ct(t,"link",n),vt(t),e.head.appendChild(t))}function $r(e){return'[src="'+Wt(e)+'"]'}function Wi(e){return"script[async]"+e}function gg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Wt(n.href)+'"]');if(i)return t.instance=i,vt(i),i;var s=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),vt(i),Ct(i,"style",s),Lo(i,n.precedence,e),t.instance=i;case"stylesheet":s=Gr(n.href);var c=e.querySelector(Ki(s));if(c)return t.state.loading|=4,t.instance=c,vt(c),c;i=mg(n),(s=on.get(s))&&Gu(i,s),c=(e.ownerDocument||e).createElement("link"),vt(c);var g=c;return g._p=new Promise(function(b,E){g.onload=b,g.onerror=E}),Ct(c,"link",i),t.state.loading|=4,Lo(c,n.precedence,e),t.instance=c;case"script":return c=$r(n.src),(s=e.querySelector(Wi(c)))?(t.instance=s,vt(s),s):(i=n,(s=on.get(c))&&(i=y({},n),$u(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),vt(s),Ct(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Lo(i,n.precedence,e));return t.instance}function Lo(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,c=s,g=0;g<i.length;g++){var b=i[g];if(b.dataset.precedence===t)c=b;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bo=null;function vg(e,t,n){if(Bo===null){var i=new Map,s=Bo=new Map;s.set(n,i)}else s=Bo,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var c=n[s];if(!(c[pi]||c[xt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(t)||"";g=e+g;var b=i.get(g);b?b.push(c):i.set(g,[c])}}return i}function yg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Rw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Gr(i.href),c=t.querySelector(Ki(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,vt(c);return}c=t.ownerDocument||t,i=mg(i),(s=on.get(s))&&Gu(i,s),c=c.createElement("link"),vt(c);var g=c;g._p=new Promise(function(b,E){g.onload=b,g.onerror=E}),Ct(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Yo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Qu=0;function Hw(e,t){return e.stylesheets&&e.count===0&&qo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&qo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Qu===0&&(Qu=62500*gw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Qu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Yo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xo=null;function qo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xo=new Map,t.forEach(jw,e),Xo=null,Yo.call(e))}function jw(e,t){if(!(t.state.loading&4)){var n=Xo.get(e);if(n)var i=n.get(null);else{n=new Map,Xo.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var g=s[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),i=g)}i&&n.set(null,i)}s=t.instance,g=s.getAttribute("data-precedence"),c=n.get(g)||i,c===i&&n.set(null,s),n.set(g,s),this.count++,i=Yo.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Pi={$$typeof:q,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Lw(e,t,n,i,s,c,g,b,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.hiddenUpdates=qs(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function wg(e,t,n,i,s,c,g,b,E,L,X,G){return e=new Lw(e,t,n,g,E,L,X,G,b),t=1,c===!0&&(t|=24),c=Vt(3,null,null,t),e.current=c,c.stateNode=e,t=kc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},Ac(c),e}function xg(e){return e?(e=Sr,e):Sr}function _g(e,t,n,i,s,c){s=xg(s),i.context===null?i.context=s:i.pendingContext=s,i=oa(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=sa(e,i,t),n!==null&&(jt(n,e,t),Mi(n,e,t))}function Sg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zu(e,t){Sg(e,t),(e=e.alternate)&&Sg(e,t)}function Tg(e){if(e.tag===13||e.tag===31){var t=ja(e,67108864);t!==null&&jt(t,e,67108864),Zu(e,67108864)}}function Cg(e){if(e.tag===13||e.tag===31){var t=Zt();t=Vs(t);var n=ja(e,t);n!==null&&jt(n,e,t),Zu(e,t)}}var Vo=!0;function Bw(e,t,n,i){var s=w.T;w.T=null;var c=N.p;try{N.p=2,Iu(e,t,n,i)}finally{N.p=c,w.T=s}}function Yw(e,t,n,i){var s=w.T;w.T=null;var c=N.p;try{N.p=8,Iu(e,t,n,i)}finally{N.p=c,w.T=s}}function Iu(e,t,n,i){if(Vo){var s=Ju(i);if(s===null)Uu(e,t,i,Fo,n),Eg(e,i);else if(qw(s,e,t,n,i))i.stopPropagation();else if(Eg(e,i),t&4&&-1<Xw.indexOf(e)){for(;s!==null;){var c=fr(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=Da(c.pendingLanes);if(g!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var E=1<<31-Xt(g);b.entanglements[1]|=E,g&=~E}Sn(c),(Re&6)===0&&(ko=Bt()+500,Qi(0))}}break;case 31:case 13:b=ja(c,2),b!==null&&jt(b,c,2),No(),Zu(c,2)}if(c=Ju(i),c===null&&Uu(e,t,i,Fo,n),c===s)break;s=c}s!==null&&i.stopPropagation()}else Uu(e,t,i,null,n)}}function Ju(e){return e=Ws(e),Ku(e)}var Fo=null;function Ku(e){if(Fo=null,e=dr(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fo=e,null}function kg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ky()){case Rf:return 2;case Uf:return 8;case Dl:case Ey:return 32;case Hf:return 268435456;default:return 32}default:return 32}}var Wu=!1,ba=null,wa=null,xa=null,el=new Map,tl=new Map,_a=[],Xw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eg(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":el.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(t.pointerId)}}function nl(e,t,n,i,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},t!==null&&(t=fr(t),t!==null&&Tg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function qw(e,t,n,i,s){switch(t){case"focusin":return ba=nl(ba,e,t,n,i,s),!0;case"dragenter":return wa=nl(wa,e,t,n,i,s),!0;case"mouseover":return xa=nl(xa,e,t,n,i,s),!0;case"pointerover":var c=s.pointerId;return el.set(c,nl(el.get(c)||null,e,t,n,i,s)),!0;case"gotpointercapture":return c=s.pointerId,tl.set(c,nl(tl.get(c)||null,e,t,n,i,s)),!0}return!1}function Ng(e){var t=dr(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,qf(e.priority,function(){Cg(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,qf(e.priority,function(){Cg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ju(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ks=i,n.target.dispatchEvent(i),Ks=null}else return t=fr(n),t!==null&&Tg(t),e.blockedOn=n,!1;t.shift()}return!0}function zg(e,t,n){Go(e)&&n.delete(t)}function Vw(){Wu=!1,ba!==null&&Go(ba)&&(ba=null),wa!==null&&Go(wa)&&(wa=null),xa!==null&&Go(xa)&&(xa=null),el.forEach(zg),tl.forEach(zg)}function $o(e,t){e.blockedOn===t&&(e.blockedOn=null,Wu||(Wu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Vw)))}var Qo=null;function Ag(e){Qo!==e&&(Qo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Qo===e&&(Qo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Ku(i||n)===null)continue;break}var c=fr(n);c!==null&&(e.splice(t,3),t-=3,Jc(c,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Qr(e){function t(E){return $o(E,e)}ba!==null&&$o(ba,e),wa!==null&&$o(wa,e),xa!==null&&$o(xa,e),el.forEach(t),tl.forEach(t);for(var n=0;n<_a.length;n++){var i=_a[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<_a.length&&(n=_a[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&_a.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],c=n[i+1],g=s[Mt]||null;if(typeof c=="function")g||Ag(n);else if(g){var b=null;if(c&&c.hasAttribute("formAction")){if(s=c,g=c[Mt]||null)b=g.formAction;else if(Ku(s)!==null)continue}else b=g.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),Ag(n)}}}function Mg(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return s=g})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Pu(e){this._internalRoot=e}Zo.prototype.render=Pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Zt();_g(n,i,e,t,null,null)},Zo.prototype.unmount=Pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_g(e.current,2,null,e,null,null),No(),t[ur]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_a.length&&t!==0&&t<_a[n].priority;n++);_a.splice(n,0,e),n===0&&Ng(e)}};var Dg=r.version;if(Dg!=="19.2.4")throw Error(o(527,Dg,"19.2.4"));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=v(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Fw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{di=Io.inject(Fw),Yt=Io}catch{}}return sl.createRoot=function(e,t){if(!u(e))throw Error(o(299));var n=!1,i="",s=Bp,c=Yp,g=Xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=wg(e,1,!1,null,null,n,i,null,s,c,g,Mg),e[ur]=t.current,Ru(e),new Pu(t)},sl.hydrateRoot=function(e,t,n){if(!u(e))throw Error(o(299));var i=!1,s="",c=Bp,g=Yp,b=Xp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=wg(e,1,!0,t,n??null,i,s,E,c,g,b,Mg),t.context=xg(null),n=t.current,i=Zt(),i=Vs(i),s=oa(i),s.callback=null,sa(n,s,i),n=i,t.current.lanes=n,hi(t,n),Sn(t),e[ur]=t.current,Ru(e),new Zo(t)},sl.version="19.2.4",sl}var Iv;function uT(){if(Iv)return Sd.exports;Iv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Sd.exports=cT(),Sd.exports}var dT=uT();const fT=()=>{const[a,r]=Ye.useState(null),[l,o]=Ye.useState(!0),[u,d]=Ye.useState(null);return Ye.useEffect(()=>{(async()=>{o(!0);try{const p=await fetch("/react-performance/data/owid-co2-data.json");if(!p.ok)throw new Error("Failed to fetch CO2 data");const m=await p.json(),v=Object.entries(m).map(([x,y])=>{const _=y;return{id:x,iso_code:_.iso_code,data:_.data}});r(v),d(null)}catch(p){console.error(p),d(p instanceof Error?p.message:"Unknown error"),r(null)}finally{o(!1)}})()},[]),{data:a,isLoading:l,error:u}},hT="_container_1m5gd_1",pT={container:hT},gy=Ye.memo(()=>le.jsx("div",{className:pT.container,children:le.jsx("div",{className:"spinner",children:"Loading CO2 data..."})}));gy.displayName="LoadingSpinner";const mT="_container_16mu1_1",gT="_label_16mu1_5",vT="_input_16mu1_9",Ed={container:mT,label:gT,input:vT},vy=Ye.memo(({value:a,onChange:r})=>le.jsxs("div",{className:Ed.container,children:[le.jsx("label",{htmlFor:"search",className:Ed.label,children:"Search countries:"}),le.jsx("input",{id:"search",type:"text",value:a,onChange:l=>r(l.target.value),placeholder:"Type to search...",className:Ed.input})]}));vy.displayName="SearchBar";const yT="_container_8lebf_1",bT="_label_8lebf_5",wT="_select_8lebf_9",Nd={container:yT,label:bT,select:wT},yy=Ye.memo(({year:a,years:r,onChange:l})=>le.jsxs("div",{className:Nd.container,children:[le.jsx("label",{htmlFor:"year",className:Nd.label,children:"Select year:"}),le.jsx("select",{id:"year",value:a,onChange:o=>l(Number(o.target.value)),className:Nd.select,children:r.map(o=>le.jsx("option",{value:o,children:o},o))})]}));yy.displayName="YearSelector";const tf=(a,r)=>a==null?"N/A":a.toLocaleString("en-US",r??{maximumFractionDigits:0}),xT="_table_117q5_1",_T="_row_117q5_7",ST="_labelCell_117q5_11",TT="_valueCell_117q5_17",CT="_noData_117q5_21",cl={table:xT,row:_T,labelCell:ST,valueCell:TT,noData:CT},by=Ye.memo(({record:a,year:r,columns:l})=>a?le.jsx("table",{className:cl.table,children:le.jsx("tbody",{children:l.map(o=>le.jsxs("tr",{className:cl.row,children:[le.jsx("td",{className:cl.labelCell,children:o.replace(/_/g," ").toUpperCase()}),le.jsx("td",{className:cl.valueCell,children:tf(a[o],{maximumFractionDigits:2})})]},o))})}):le.jsxs("div",{className:cl.noData,children:["No data available for year ",r]}));by.displayName="DataTable";const kT=()=>["year","population","co2","co2_per_capita","cement_co2","cement_co2_per_capita","coal_co2","coal_co2_per_capita","gas_co2","gas_co2_per_capita","oil_co2","oil_co2_per_capita","methane","methane_per_capita","nitrous_oxide","nitrous_oxide_per_capita","temperature_change_from_co2","total_ghg","total_ghg_per_capita"],ET=a=>{const r=new Map;return a.forEach(l=>{r.set(l.year,l)}),r},nf=(a,r)=>a.get(r)?.population,NT=(a,r)=>a.get(r)?.co2,zT=a=>{const r=new Set;return a.forEach(l=>{l.data.forEach(o=>{r.add(o.year)})}),Array.from(r).sort((l,o)=>l-o)},AT="_card_16s5s_1",MT="_header_16s5s_9",DT="_title_16s5s_16",OT="_isoCode_16s5s_20",RT="_stats_16s5s_27",ul={card:AT,header:MT,title:DT,isoCode:OT,stats:RT},wy=Ye.memo(({country:a,selectedYear:r,selectedColumns:l})=>{const o=nf(a.yearDataMap,r),u=NT(a.yearDataMap,r);return le.jsxs("div",{className:ul.card,children:[le.jsxs("div",{className:ul.header,children:[le.jsx("h3",{className:ul.title,children:a.id}),a.iso_code&&le.jsx("span",{className:ul.isoCode,children:a.iso_code})]}),le.jsxs("div",{className:ul.stats,children:[le.jsxs("div",{children:["Population (",r,"): ",tf(o)]}),le.jsxs("div",{children:["CO₂ Emissions (",r,"): ",tf(u)," tonnes"]})]}),le.jsx(by,{record:a.yearDataMap.get(r),year:r,columns:l})]})});wy.displayName="CountryCard";const UT="_countryList_1ijy6_1",HT="_virtualSpacer_1ijy6_8",jT="_virtualItem_1ijy6_13",LT="_noResults_1ijy6_20",ls={countryList:UT,virtualSpacer:HT,virtualItem:jT,noResults:LT},BT=700,YT=150,XT=38,Jv=5,xy=Ye.memo(({countries:a,searchQuery:r,selectedColumns:l,selectedRegion:o,selectedYear:u,sortField:d,sortOrder:h})=>{const[p,m]=Ye.useState(0),v=Ye.useMemo(()=>a.map(R=>({...R,yearDataMap:ET(R.data)})),[a]),x=Ye.useMemo(()=>{const R=r.toLowerCase();return v.filter(T=>{const M=T.id.toLowerCase().includes(R),q=!o||T.data.some($=>$.region===o);return M&&q}).slice().sort((T,M)=>{if(d==="name")return h==="asc"?T.id.localeCompare(M.id):M.id.localeCompare(T.id);const q=nf(T.yearDataMap,u)??0,$=nf(M.yearDataMap,u)??0;return h==="asc"?q-$:$-q})},[v,r,o,u,d,h]),y=Ye.useMemo(()=>YT+l.length*XT,[l.length]),_=x.length*y,S=Ye.useMemo(()=>{const R=Math.max(0,Math.floor(p/y)-Jv),T=Math.ceil(BT/y),M=Math.min(x.length,R+T+Jv*2);return{startIndex:R,endIndex:M}},[x.length,y,p]),k=Ye.useMemo(()=>x.slice(S.startIndex,S.endIndex),[x,S.endIndex,S.startIndex]),z=Ye.useCallback(R=>{m(R.currentTarget.scrollTop)},[]);return x.length===0?le.jsx("div",{className:ls.noResults,children:"No countries found."}):le.jsx("div",{className:ls.countryList,onScroll:z,children:le.jsx("div",{className:ls.virtualSpacer,style:{height:_},children:k.map((R,T)=>{const M=S.startIndex+T;return le.jsx("div",{className:ls.virtualItem,style:{height:y,transform:`translateY(${M*y}px)`},children:le.jsx(wy,{country:R,selectedYear:u,selectedColumns:l})},R.id)})})})});xy.displayName="CountryList";const qT="_overlay_zpkao_1",VT="_modal_zpkao_14",FT="_title_zpkao_23",GT="_columnList_zpkao_28",$T="_columnItem_zpkao_32",QT="_checkbox_zpkao_36",ZT="_buttonContainer_zpkao_40",IT="_closeButton_zpkao_46",ka={overlay:qT,modal:VT,title:FT,columnList:GT,columnItem:$T,checkbox:QT,buttonContainer:ZT,closeButton:IT},_y=Ye.memo(({isOpen:a,availableColumns:r,selectedColumns:l,onToggle:o,onClose:u})=>a?le.jsx("div",{className:ka.overlay,children:le.jsxs("div",{className:ka.modal,children:[le.jsx("h2",{className:ka.title,children:"Select columns to display"}),le.jsx("div",{className:ka.columnList,children:r.map(d=>le.jsx("div",{className:ka.columnItem,children:le.jsxs("label",{children:[le.jsx("input",{type:"checkbox",checked:l.includes(d),onChange:()=>o(d),className:ka.checkbox}),d]})},d))}),le.jsx("div",{className:ka.buttonContainer,children:le.jsx("button",{onClick:u,className:ka.closeButton,children:"Close"})})]})}):null);_y.displayName="ColumnModal";const JT="_container_kqzw8_1",KT="_title_kqzw8_7",WT="_controls_kqzw8_12",PT="_sortContainer_kqzw8_19",e4="_sortLabel_kqzw8_23",t4="_sortSelect_kqzw8_27",n4="_sortButton_kqzw8_33",a4="_columnButtonContainer_kqzw8_39",r4="_columnButton_kqzw8_39",i4="_errorMessage_kqzw8_49",l4="_noDataMessage_kqzw8_54",pn={container:JT,title:KT,controls:WT,sortContainer:PT,sortLabel:e4,sortSelect:t4,sortButton:n4,columnButtonContainer:a4,columnButton:r4,errorMessage:i4,noDataMessage:l4},o4=()=>{const{data:a,isLoading:r,error:l}=fT(),[o,u]=Ye.useState({searchQuery:"",selectedRegion:"",selectedYear:2020,sortField:"population",sortOrder:"desc",selectedColumns:["year","population","co2","co2_per_capita"],isColumnModalOpen:!1}),d=Ye.useMemo(()=>a?zT(a):[],[a]),h=Ye.useMemo(()=>kT(),[]),p=Ye.useCallback(k=>{u(z=>z.searchQuery===k?z:{...z,searchQuery:k})},[]),m=Ye.useCallback(k=>{u(z=>z.selectedYear===k?z:{...z,selectedYear:k})},[]),v=Ye.useCallback(k=>{u(z=>z.sortField===k?z:{...z,sortField:k})},[]),x=Ye.useCallback(k=>{v(k.target.value)},[v]),y=Ye.useCallback(()=>{u(k=>({...k,sortOrder:k.sortOrder==="asc"?"desc":"asc"}))},[]),_=Ye.useCallback(k=>{u(z=>{const R=z.selectedColumns.includes(k);return{...z,selectedColumns:R?z.selectedColumns.filter(T=>T!==k):[...z.selectedColumns,k]}})},[]),S=Ye.useCallback(()=>{u(k=>({...k,isColumnModalOpen:!k.isColumnModalOpen}))},[]);return r?le.jsx(gy,{}):l?le.jsxs("div",{className:pn.errorMessage,children:["Error: ",l]}):a?le.jsxs("div",{className:pn.container,children:[le.jsx("h1",{className:pn.title,children:"CO₂ Emissions Data Explorer"}),le.jsxs("div",{className:pn.controls,children:[le.jsx(vy,{value:o.searchQuery,onChange:p}),le.jsx(yy,{year:o.selectedYear,years:d,onChange:m}),le.jsxs("div",{className:pn.sortContainer,children:[le.jsx("label",{className:pn.sortLabel,children:"Sort by:"}),le.jsxs("select",{value:o.sortField,onChange:x,className:pn.sortSelect,children:[le.jsx("option",{value:"population",children:"Population"}),le.jsx("option",{value:"name",children:"Name"})]}),le.jsx("button",{onClick:y,className:pn.sortButton,children:o.sortOrder==="asc"?"Ascending":"Descending"})]}),le.jsx("div",{className:pn.columnButtonContainer,children:le.jsxs("button",{onClick:S,className:pn.columnButton,children:["Select columns (",o.selectedColumns.length," selected)"]})})]}),le.jsx(xy,{countries:a,searchQuery:o.searchQuery,selectedColumns:o.selectedColumns,selectedRegion:o.selectedRegion,selectedYear:o.selectedYear,sortField:o.sortField,sortOrder:o.sortOrder}),le.jsx(_y,{isOpen:o.isColumnModalOpen,availableColumns:h,selectedColumns:o.selectedColumns,onToggle:_,onClose:S})]}):le.jsx("div",{className:pn.noDataMessage,children:"No data available"})};aT({enabled:!1});dT.createRoot(document.getElementById("root")).render(le.jsx(Ye.StrictMode,{children:le.jsx(o4,{})}));
