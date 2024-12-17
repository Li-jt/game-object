import{d as P,s as ft,u as mt,o as M,c as pt,I as J,i as b,r as j,a as m,m as $,n as yt,t as A,b as Tt,e as jt,f as g,g as At,h as It,F as wt,j as B,k as D,w as V,l as Ut,p as Dt,q as X,v as zt,x as gt,y as Ht,_ as Gt}from"./index-CCS8AJ-2.js";var Wt=typeof global=="object"&&global&&global.Object===Object&&global,Vt=typeof self=="object"&&self&&self.Object===Object&&self,Xt=Wt||Vt||Function("return this")(),Q=Xt.Symbol,Nt=Object.prototype,Kt=Nt.hasOwnProperty,Yt=Nt.toString,z=Q?Q.toStringTag:void 0;function Zt(t){var e=Kt.call(t,z),n=t[z];try{t[z]=void 0;var o=!0}catch{}var i=Yt.call(t);return o&&(e?t[z]=n:delete t[z]),i}var Jt=Object.prototype,Qt=Jt.toString;function te(t){return Qt.call(t)}var ee="[object Null]",ne="[object Undefined]",Et=Q?Q.toStringTag:void 0;function Ot(t){return t==null?t===void 0?ne:ee:Et&&Et in Object(t)?Zt(t):te(t)}function oe(t){return t!=null&&typeof t=="object"}var ie="[object Symbol]";function ae(t){return typeof t=="symbol"||oe(t)&&Ot(t)==ie}var re=/\s/;function se(t){for(var e=t.length;e--&&re.test(t.charAt(e)););return e}var le=/^\s+/;function de(t){return t&&t.slice(0,se(t)+1).replace(le,"")}function tt(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var St=NaN,ce=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,me=parseInt;function pe(t){if(typeof t=="number")return t;if(ae(t))return St;if(tt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=tt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=de(t);var n=ue.test(t);return n||fe.test(t)?me(t.slice(2),n?2:8):ce.test(t)?St:+t}var _t=1/0,ye=17976931348623157e292;function bt(t){if(!t)return t===0?t:0;if(t=pe(t),t===_t||t===-_t){var e=t<0?-1:1;return e*ye}return t===t?t:0}var ve="[object AsyncFunction]",ge="[object Function]",Ee="[object GeneratorFunction]",Se="[object Proxy]";function _e(t){if(!tt(t))return!1;var e=Ot(t);return e==ge||e==Ee||e==ve||e==Se}var be=9007199254740991,he=/^(?:0|[1-9]\d*)$/;function Ce(t,e){var n=typeof t;return e=e??be,!!e&&(n=="number"||n!="symbol"&&he.test(t))&&t>-1&&t%1==0&&t<e}function Te(t,e){return t===e||t!==t&&e!==e}var Ae=9007199254740991;function Ie(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Ae}function Ne(t){return t!=null&&Ie(t.length)&&!_e(t)}function Oe(t,e,n){if(!tt(n))return!1;var o=typeof e;return(o=="number"?Ne(n)&&Ce(e,n.length):o=="string"&&e in n)?Te(n[e],t):!1}var Le=Math.floor,Pe=Math.random;function $e(t,e){return t+Le(Pe()*(e-t+1))}var xe=parseFloat,Me=Math.min,Be=Math.random;function Lt(t,e,n){if(n&&typeof n!="boolean"&&Oe(t,e,n)&&(e=n=void 0),n===void 0&&(typeof e=="boolean"?(n=e,e=void 0):typeof t=="boolean"&&(n=t,t=void 0)),t===void 0&&e===void 0?(t=0,e=1):(t=bt(t),e===void 0?(e=t,t=0):e=bt(e)),t>e){var o=t;t=e,e=o}if(n||t%1||e%1){var i=Be();return Me(t+i*(e-t+xe("1e-"+((i+"").length-1))),e)}return $e(t,e)}const qe=P({__name:"index",setup(t){const e=ft(),n=mt(),o=a=>{const r=n.getItem(b.Wood);n.setItem(b.Wood,{name:"木头",icon:"🪵",type:b.Wood,...r,count:r!=null&&r.count?r.count+Lt(1,3):1}),a()},i=()=>{e.value.startAnima?e.value.end():e.value.start()};return(a,r)=>(M(),pt(J,{name:"🌲",ref_key:"itemRef",ref:e,onClick:i,timer:5,onAnimationEnd:o},null,512))}}),W={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},k={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},S={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Fe={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},Pt={dangerouslyHTMLString:!1,multiple:!0,position:W.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},ke={rtl:!1,newestOnTop:!1,toastClassName:""},$t={...Pt,...ke};({...Pt,type:S.DEFAULT});var s=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(s||{}),rt=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(rt||{});const Re={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},je={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},we={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Ue={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},ht="Toastify--animate Toastify__none-enter";function xt(t,e=!1){var n;let o=Re;if(!t||typeof t=="string")switch(t){case"flip":o=Ue;break;case"zoom":o=we;break;case"slide":o=je;break}else o=t;if(e)o.enter=ht;else if(o.enter===ht){const i=(n=o.exit.split("__")[1])==null?void 0:n.split("-")[0];o.enter=`Toastify--animate Toastify__${i}-enter`}return o}function De(t){return t.containerId||String(t.position)}const nt="will-unmount";function ze(t=W.TOP_RIGHT){return!!document.querySelector(`.${s.CSS_NAMESPACE}__toast-container--${t}`)}function He(t=W.TOP_RIGHT){return`${s.CSS_NAMESPACE}__toast-container--${t}`}function Ge(t,e,n=!1){const o=[`${s.CSS_NAMESPACE}__toast-container`,`${s.CSS_NAMESPACE}__toast-container--${t}`,n?`${s.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return F(e)?e({position:t,rtl:n,defaultClassName:o}):`${o} ${e||""}`}function We(t){var e;const{position:n,containerClassName:o,rtl:i=!1,style:a={}}=t,r=s.CSS_NAMESPACE,_=He(n),p=document.querySelector(`.${r}`),h=document.querySelector(`.${_}`),l=!!h&&!((e=h.className)!=null&&e.includes(nt)),d=p||document.createElement("div"),u=document.createElement("div");u.className=Ge(n,o,i),u.dataset.testid=`${s.CSS_NAMESPACE}__toast-container--${n}`,u.id=De(t);for(const f in a)if(Object.prototype.hasOwnProperty.call(a,f)){const y=a[f];u.style[f]=y}return p||(d.className=s.CSS_NAMESPACE,document.body.appendChild(d)),l||d.appendChild(u),u}function st(t){var e,n,o;const i=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),a=document.getElementById(i);a&&a.removeEventListener("animationend",st,!1);try{G[i].unmount(),(o=document.getElementById(i))==null||o.remove(),delete G[i],delete v[i]}catch{}}const G=j({});function Ve(t,e){const n=document.getElementById(String(e));n&&(G[n.id]=t)}function lt(t,e=!0){const n=String(t);if(!G[n])return;const o=document.getElementById(n);o&&o.classList.add(nt),e?(Ke(t),o&&o.addEventListener("animationend",st,!1)):st(n),I.items=I.items.filter(i=>i.containerId!==t)}function Xe(t){for(const e in G)lt(e,t);I.items=[]}function Mt(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o={...o,...xt(o.transition)};const i=o.appendPosition?`${o.exit}--${o.position}`:o.exit;n.className+=` ${i}`,e&&e(n)}}function Ke(t){for(const e in v)if(e===t)for(const n of v[e]||[])Mt(n)}function Ye(t){const e=R().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function vt(t){return document.getElementById(t)}function Ze(t){const e=vt(t.containerId);return e&&e.classList.contains(nt)}function Ct(t){var e;const n=Tt(t.content)?A(t.content.props):null;return n??A((e=t.data)!=null?e:{})}function Je(t){return t?I.items.filter(e=>e.containerId===t).length>0:I.items.length>0}function Qe(){if(I.items.length>0){const t=I.items.shift();K(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const v=j({}),I=j({items:[]});function R(){const t=A(v);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function tn(t){return R().find(e=>e.toastId===t)}function K(t,e={}){if(Ze(e)){const n=vt(e.containerId);n&&n.addEventListener("animationend",dt.bind(null,t,e),!1)}else dt(t,e)}function dt(t,e={}){const n=vt(e.containerId);n&&n.removeEventListener("animationend",dt.bind(null,t,e),!1);const o=v[e.containerId]||[],i=o.length>0;if(!i&&!ze(e.position)){const a=We(e),r=jt(_n,e);r.mount(a),Ve(r,a.id)}i&&!e.updateId&&(e.position=o[0].position),yt(()=>{e.updateId?C.update(e):C.add(t,e)})}const C={add(t,e){const{containerId:n=""}=e;n&&(v[n]=v[n]||[],v[n].find(o=>o.toastId===e.toastId)||setTimeout(()=>{var o,i;e.newestOnTop?(o=v[n])==null||o.unshift(e):(i=v[n])==null||i.push(e),e.onOpen&&e.onOpen(Ct(e))},e.delay||0))},remove(t){if(t){const e=Ye(t);if(e){const n=v[e];let o=n.find(i=>i.toastId===t);v[e]=n.filter(i=>i.toastId!==t),!v[e].length&&!Je(e)&&lt(e,!1),Qe(),yt(()=>{o!=null&&o.onClose&&(o.onClose(Ct(o)),o=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){v[e]=v[e]||[];const n=v[e].find(a=>a.toastId===t.toastId),o=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,i={...t,disabledEnterTransition:!o,updateId:void 0};C.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{c(i.content,i)},t.delay||0)}},clear(t,e=!0){t?lt(t,e):Xe(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",C.dismissCallback,!1),setTimeout(()=>{C.remove(n)}))},dismiss(t){if(t){const e=R();for(const n of e)if(n.toastId===t){Mt(n,o=>{o.addEventListener("animationend",C.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=R();for(const n of e)if(n.toastId===t){const o=document.getElementById(t);o&&(o.remove(),o.removeEventListener("animationend",C.dismissCallback,!1),C.remove(t));break}}}},Bt=j({}),et=j({});function qt(){return Math.random().toString(36).substring(2,9)}function en(t){return typeof t=="number"&&!isNaN(t)}function ct(t){return typeof t=="string"}function F(t){return typeof t=="function"}function ot(...t){return $(...t)}function Y(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function nn(t={}){Bt[`${s.CSS_NAMESPACE}-default-options`]=t}function on(){return Bt[`${s.CSS_NAMESPACE}-default-options`]||$t}function an(){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return document.documentElement.classList.contains("dark")||t?"dark":"light"}var Z=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(Z||{});const Ft={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:W.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:k.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:S.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""},contentProps:{type:Object,required:!1,default:null}},rn={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:S.DEFAULT},theme:{type:String,required:!1,default:k.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},sn=P({name:"ProgressBar",props:rn,setup(t,{attrs:e}){const n=B(),o=g(()=>t.hide?"true":"false"),i=g(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),a=g(()=>[`${s.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${s.CSS_NAMESPACE}__progress-bar--controlled`:`${s.CSS_NAMESPACE}__progress-bar--animated`,`${s.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${s.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${s.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),r=g(()=>`${a.value} ${(e==null?void 0:e.class)||""}`),_=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},p=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),_())},h=g(()=>t.controlledProgress?null:p),l=g(()=>t.controlledProgress?p:null);return V(()=>{n.value&&(_(),n.value.onanimationend=h.value,n.value.ontransitionend=l.value)}),()=>m("div",{ref:n,role:"progressbar","aria-hidden":o.value,"aria-label":"notification timer",class:r.value,style:i.value},null)}}),ln=P({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:k.AUTO},type:{type:String,required:!1,default:k.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>m("button",{class:`${s.CSS_NAMESPACE}__close-button ${s.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[m("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[m("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),it=({theme:t,type:e,path:n,...o})=>m("svg",$({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},o),[m("path",{d:n},null)]);function dn(t){return m(it,$(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function cn(t){return m(it,$(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function un(t){return m(it,$(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function fn(t){return m(it,$(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function mn(){return m("div",{class:`${s.CSS_NAMESPACE}__spinner`},null)}const ut={info:cn,warning:dn,success:un,error:fn,spinner:mn},pn=t=>t in ut;function yn({theme:t,type:e,isLoading:n,icon:o}){let i;const a={theme:t,type:e};return n?i=ut.spinner():o===!1?i=void 0:Y(o)?i=A(o):F(o)?i=o(a):Tt(o)?i=Ut(o,a):ct(o)||en(o)?i=o:pn(e)&&(i=ut[e](a)),i}const vn=()=>{};function gn(t,e,n=s.COLLAPSE_DURATION){const{scrollHeight:o,style:i}=t,a=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=o+"px",i.transition=`all ${a}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,a)})})}function En(t){const e=B(!1),n=B(!1),o=B(!1),i=B(Z.Enter),a=j({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||s.COLLAPSE_DURATION}),r=a.done||vn,_=g(()=>a.appendPosition?`${a.enter}--${a.position}`:a.enter),p=g(()=>a.appendPosition?`${a.exit}--${a.position}`:a.exit),h=g(()=>t.pauseOnHover?{onMouseenter:N,onMouseleave:E}:{});function l(){const T=_.value.split(" ");u().addEventListener(rt.ENTRANCE_ANIMATION_END,E,{once:!0});const O=q=>{const U=u();q.target===U&&(U.dispatchEvent(new Event(rt.ENTRANCE_ANIMATION_END)),U.removeEventListener("animationend",O),U.removeEventListener("animationcancel",O),i.value===Z.Enter&&q.type!=="animationcancel"&&U.classList.remove(...T))},L=()=>{const q=u();q.classList.add(...T),q.addEventListener("animationend",O),q.addEventListener("animationcancel",O)};t.pauseOnFocusLoss&&f(),L()}function d(){if(!u())return;const T=()=>{const L=u();L.removeEventListener("animationend",T),a.collapse?gn(L,r,a.collapseDuration):r()},O=()=>{const L=u();i.value=Z.Exit,L&&(L.className+=` ${p.value}`,L.addEventListener("animationend",T))};n.value||(o.value?T():setTimeout(O))}function u(){return t.toastRef.value}function f(){document.hasFocus()||N(),window.addEventListener("focus",E),window.addEventListener("blur",N)}function y(){window.removeEventListener("focus",E),window.removeEventListener("blur",N)}function E(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function N(){e.value=!1}function w(T){T&&(T.stopPropagation(),T.preventDefault()),n.value=!1}return V(d),V(()=>{const T=R();n.value=T.findIndex(O=>O.toastId===a.toastId)>-1}),V(()=>{t.isLoading!==void 0&&(t.loading.value?N():E())}),At(l),It(()=>{t.pauseOnFocusLoss&&y()}),{isIn:n,isRunning:e,hideToast:w,eventHandlers:h}}const Sn=P({name:"ToastItem",inheritAttrs:!1,props:Ft,setup(t){const e=B(),n=g(()=>!!t.isLoading),o=g(()=>t.progress!==void 0&&t.progress!==null),i=g(()=>yn(t)),a=g(()=>[`${s.CSS_NAMESPACE}__toast`,`${s.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${s.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${s.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:r,isIn:_,hideToast:p,eventHandlers:h}=En({toastRef:e,loading:n,done:()=>{C.remove(t.toastId)},...xt(t.transition,t.disabledEnterTransition),...t});return()=>m("div",$({id:t.toastId,class:a.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:l=>{t.closeOnClick&&p(),t.onClick&&t.onClick(l)}},h.value),[m("div",{role:t.role,"data-testid":"toast-body",class:`${s.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[i.value!=null&&m("div",{"data-testid":`toast-icon-${t.type}`,class:[`${s.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${s.CSS_NAMESPACE}--animate-icon ${s.CSS_NAMESPACE}__zoom-enter`].join(" ")},[Y(i.value)?D(A(i.value),{theme:t.theme,type:t.type}):F(i.value)?i.value({theme:t.theme,type:t.type}):i.value]),t.contentProps?m("div",{"data-testid":"toast-content"},[D(A(t.content),{contentProps:t.contentProps})]):m("div",{"data-testid":"toast-content"},[Y(t.content)?D(A(t.content),{toastProps:A(t),closeToast:p,data:t.data}):F(t.content)?t.content({toastProps:A(t),closeToast:p,data:t.data}):t.dangerouslyHTMLString?D("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&m(ln,{theme:t.theme,closeToast:l=>{l.stopPropagation(),l.preventDefault(),p()}},null),Y(t.closeButton)?D(A(t.closeButton),{closeToast:p,type:t.type,theme:t.theme}):F(t.closeButton)?t.closeButton({closeToast:p,type:t.type,theme:t.theme}):null,m(sn,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:_.value,type:t.type,hide:t.hideProgressBar,isRunning:r.value,autoClose:t.autoClose,controlledProgress:o.value,progress:t.progress,closeToast:t.isLoading?void 0:p},null)])}});let H=0;function kt(){typeof window>"u"||(H&&window.cancelAnimationFrame(H),H=window.requestAnimationFrame(kt),et.lastUrl!==window.location.href&&(et.lastUrl=window.location.href,C.clear()))}const _n=P({name:"ToastifyContainer",inheritAttrs:!1,props:Ft,setup(t){const e=g(()=>t.containerId),n=g(()=>v[e.value]||[]),o=g(()=>n.value.filter(i=>i.position===t.position));return At(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(kt)}),It(()=>{typeof window<"u"&&H&&(window.cancelAnimationFrame(H),et.lastUrl="")}),()=>m(wt,null,[o.value.map(i=>{const{toastId:a=""}=i;return m(Sn,$({key:a},i),null)})])}});let at=!1;function Rt(){const t=[];return R().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(nt)&&t.push(e)}),t}function bn(t){const e=Rt().length,n=t??0;return n>0&&e+I.items.length>=n}function hn(t){bn(t.limit)&&!t.updateId&&I.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function x(t,e,n={}){if(at)return;n=ot(on(),{type:e},A(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=qt()),n={...n,content:t,containerId:n.containerId||String(n.position)};const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=an()),hn(n),et.lastUrl=window.location.href,n.multiple?I.items.length?n.updateId&&K(t,n):K(t,n):(at=!0,c.clearAll(void 0,!1),setTimeout(()=>{K(t,n)},0),setTimeout(()=>{at=!1},390)),n.toastId}const c=(t,e)=>x(t,S.DEFAULT,e);c.info=(t,e)=>x(t,S.DEFAULT,{...e,type:S.INFO});c.error=(t,e)=>x(t,S.DEFAULT,{...e,type:S.ERROR});c.warning=(t,e)=>x(t,S.DEFAULT,{...e,type:S.WARNING});c.warn=c.warning;c.success=(t,e)=>x(t,S.DEFAULT,{...e,type:S.SUCCESS});c.loading=(t,e)=>x(t,S.DEFAULT,ot(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));c.dark=(t,e)=>x(t,S.DEFAULT,ot(e,{theme:k.DARK}));c.remove=t=>{t?C.dismiss(t):C.clear()};c.clearAll=(t,e)=>{yt(()=>{C.clear(t,e)})};c.isActive=t=>{let e=!1;return e=Rt().findIndex(n=>n.toastId===t)>-1,e};c.update=(t,e={})=>{setTimeout(()=>{const n=tn(t);if(n){const o=A(n),{content:i}=o,a={...o,...e,toastId:e.toastId||t,updateId:qt()},r=a.render||i;delete a.render,x(r,a.type,a)}},0)};c.done=t=>{c.update(t,{isLoading:!1,progress:1})};c.promise=Cn;function Cn(t,{pending:e,error:n,success:o},i){var a,r,_;let p;const h={...i||{},autoClose:!1};e&&(p=ct(e)?c.loading(e,h):c.loading(e.render,{...h,...e}));const l={autoClose:(a=i==null?void 0:i.autoClose)!=null?a:!0,closeOnClick:(r=i==null?void 0:i.closeOnClick)!=null?r:!0,closeButton:(_=i==null?void 0:i.autoClose)!=null?_:null,isLoading:void 0,draggable:null,delay:100},d=(f,y,E)=>{if(y==null){c.remove(p);return}const N={type:f,...l,...i,data:E},w=ct(y)?{render:y}:y;return p?c.update(p,{...N,...w,isLoading:!1}):c(w.render,{...N,...w,isLoading:!1}),E},u=F(t)?t():t;return u.then(f=>{d("success",o,f)}).catch(f=>{d("error",n,f)}),u}c.POSITION=W;c.THEME=k;c.TYPE=S;c.TRANSITIONS=Fe;const Tn={install(t,e={}){An(e)}};typeof window<"u"&&(window.Vue3Toastify=Tn);function An(t={}){const e=ot($t,t);nn(e)}const In={class:"relative"},Nn=P({__name:"index",setup(t){const e={1:{items:[{[b.Stone]:16}]}},n=ft(),o=mt(),{state:i}=Dt(o),a=l=>{const d=o.getItem(b.Wood);d.count-=1,(d==null?void 0:d.count)>0&&l()},r=()=>{if(n.value.startAnima)n.value.end();else{const l=o.getItem(b.Wood);(l==null?void 0:l.count)>0?n.value.start():c(`没有${(l==null?void 0:l.icon)||"🪵"}`,{position:"top-center",theme:"dark"})}},_=()=>{var u,f;const l=o.getItem(b.Fire),d=(u=e[l==null?void 0:l.level])==null?void 0:u.items;if(!d)return!1;for(let y=0;y<(d==null?void 0:d.length);y++)if(((f=o.getItem(Object.keys(d[y])[0]))==null?void 0:f.count)<d[y][Object.keys(d[y])[0]])return!1;return!0},p=B(!0),h=()=>{var d;if(_()){const u=o.getItem(b.Fire),f=(d=e[u==null?void 0:u.level])==null?void 0:d.items;let y={};for(let E=0;E<(f==null?void 0:f.length);E++)y=o.getItem(Number(Object.keys(f[E])[0])),o.setItem(Object.keys(f[E])[0],{...y,count:y.count-=f[E][Object.keys(f[E])[0]]})}const l=o.getItem(b.Fire);o.setItem(b.Fire,{...l,level:l.level+=1})};return(l,d)=>{var u,f,y;return M(),X("div",In,[_()?(M(),X("div",{key:0,class:"absolute z-10 text-[rgb(174,18,18)] text-[12px] bg-[#ccc] rounded-[4px] px-[4px] right-[-10px] top-[-10px] cursor-pointer",onClick:h},"升级")):zt("",!0),((y=(f=(u=gt(i))==null?void 0:u.item)==null?void 0:f[gt(b).Fire])==null?void 0:y.level)==2&&p.value?(M(),X("div",{key:1,class:"relative",onClick:r},[d[0]||(d[0]=Ht('<div class="absolute w-[100%] h-[100%] upgrade cursor-pointer" data-v-44c6a64b><div class="absolute top-[-10px] z-[1] text-[12px]" data-v-44c6a64b>🪨🪨🪨🪨🪨</div><div class="absolute top-[-10%] z-[1] text-[12px]" data-v-44c6a64b>🪨</div><div class="absolute top-[-10%] right-[0] z-[1] text-[12px]" data-v-44c6a64b>🪨</div><div class="absolute top-[12%] z-[1] text-[12px]" data-v-44c6a64b>🪨</div><div class="absolute top-[12%] right-[0] z-[1] text-[12px]" data-v-44c6a64b>🪨</div><div class="absolute top-[40%] z-[1] text-[12px]" data-v-44c6a64b>🪨</div><div class="absolute top-[40%] right-[0] z-[1] text-[12px]" data-v-44c6a64b>🪨</div><div class="absolute bottom-[-7px] z-[2] text-[12px]" data-v-44c6a64b>🪨🪨🪨🪨🪨</div></div>',1)),m(J,{name:"🔥",ref_key:"itemRef",ref:n,timer:1,onAnimationEnd:a},null,512)])):(M(),pt(J,{key:2,name:"🔥",ref_key:"itemRef",ref:n,timer:1,onClick:r,onAnimationEnd:a},null,512))])}}}),On=Gt(Nn,[["__scopeId","data-v-44c6a64b"]]),Ln=P({__name:"index",setup(t){const e=ft(),n=mt(),o=a=>{const r=n.getItem(b.Stone);n.setItem(b.Stone,{name:"石头",icon:"🪨",type:b.Stone,...r,count:r!=null&&r.count?r.count+Lt(1,2):1}),a()},i=()=>{e.value.startAnima?e.value.end():e.value.start()};return(a,r)=>(M(),pt(J,{name:"🪨",ref_key:"itemRef",ref:e,onClick:i,timer:10,onAnimationEnd:o},null,512))}}),Pn={class:"",style:{width:"max-content"}},xn=P({__name:"game",setup(t){return(e,n)=>(M(),X("div",Pn,[m(On),m(qe),m(Ln)]))}});export{xn as default};