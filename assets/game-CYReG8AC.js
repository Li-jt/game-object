import{d as $,s as Et,u as St,o as dt,c as _t,I as Tt,i as D,r as w,a as d,m as L,n as ut,t as E,b as Ct,e as Rt,f as m,g as At,h as ht,F as wt,j as B,k as U,w as W,l as kt,p as jt}from"./index-ChKUNWV2.js";var Ut=typeof global=="object"&&global&&global.Object===Object&&global,xt=typeof self=="object"&&self&&self.Object===Object&&self,Dt=Ut||xt||Function("return this")(),Y=Dt.Symbol,bt=Object.prototype,Ht=bt.hasOwnProperty,zt=bt.toString,x=Y?Y.toStringTag:void 0;function Gt(t){var e=Ht.call(t,x),n=t[x];try{t[x]=void 0;var o=!0}catch{}var i=zt.call(t);return o&&(e?t[x]=n:delete t[x]),i}var Wt=Object.prototype,Vt=Wt.toString;function Xt(t){return Vt.call(t)}var Kt="[object Null]",Yt="[object Undefined]",ft=Y?Y.toStringTag:void 0;function It(t){return t==null?t===void 0?Yt:Kt:ft&&ft in Object(t)?Gt(t):Xt(t)}function Zt(t){return t!=null&&typeof t=="object"}var Jt="[object Symbol]";function Qt(t){return typeof t=="symbol"||Zt(t)&&It(t)==Jt}var te=/\s/;function ee(t){for(var e=t.length;e--&&te.test(t.charAt(e)););return e}var ne=/^\s+/;function oe(t){return t&&t.slice(0,ee(t)+1).replace(ne,"")}function Z(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var mt=NaN,ie=/^[-+]0x[0-9a-f]+$/i,ae=/^0b[01]+$/i,re=/^0o[0-7]+$/i,se=parseInt;function le(t){if(typeof t=="number")return t;if(Qt(t))return mt;if(Z(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Z(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=oe(t);var n=ae.test(t);return n||re.test(t)?se(t.slice(2),n?2:8):ie.test(t)?mt:+t}var pt=1/0,de=17976931348623157e292;function yt(t){if(!t)return t===0?t:0;if(t=le(t),t===pt||t===-pt){var e=t<0?-1:1;return e*de}return t===t?t:0}var ue="[object AsyncFunction]",ce="[object Function]",fe="[object GeneratorFunction]",me="[object Proxy]";function pe(t){if(!Z(t))return!1;var e=It(t);return e==ce||e==fe||e==ue||e==me}var ye=9007199254740991,ge=/^(?:0|[1-9]\d*)$/;function ve(t,e){var n=typeof t;return e=e??ye,!!e&&(n=="number"||n!="symbol"&&ge.test(t))&&t>-1&&t%1==0&&t<e}function Ee(t,e){return t===e||t!==t&&e!==e}var Se=9007199254740991;function _e(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Se}function Te(t){return t!=null&&_e(t.length)&&!pe(t)}function Ce(t,e,n){if(!Z(n))return!1;var o=typeof e;return(o=="number"?Te(n)&&ve(e,n.length):o=="string"&&e in n)?Ee(n[e],t):!1}var Ae=Math.floor,he=Math.random;function be(t,e){return t+Ae(he()*(e-t+1))}var Ie=parseFloat,Ne=Math.min,Oe=Math.random;function Le(t,e,n){if(n&&typeof n!="boolean"&&Ce(t,e,n)&&(e=n=void 0),n===void 0&&(typeof e=="boolean"?(n=e,e=void 0):typeof t=="boolean"&&(n=t,t=void 0)),t===void 0&&e===void 0?(t=0,e=1):(t=yt(t),e===void 0?(e=t,t=0):e=yt(e)),t>e){var o=t;t=e,e=o}if(n||t%1||e%1){var i=Oe();return Ne(t+i*(e-t+Ie("1e-"+((i+"").length-1))),e)}return be(t,e)}const Pe=$({__name:"index",setup(t){const e=Et(),n=St(),o=a=>{const s=n.getItem(D.Wood);n.setItem(D.Wood,{name:"木头",icon:"🪵",type:D.Wood,...s,count:s!=null&&s.count?s.count+Le(1,3):1}),a()},i=()=>{e.value.startAnima?e.value.end():e.value.start()};return(a,s)=>(dt(),_t(Tt,{name:"🌲",ref_key:"itemRef",ref:e,onClick:i,timer:5,onAnimationEnd:o},null,512))}}),G={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},F={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},p={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},$e={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},Nt={dangerouslyHTMLString:!1,multiple:!0,position:G.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},Me={rtl:!1,newestOnTop:!1,toastClassName:""},Ot={...Nt,...Me};({...Nt,type:p.DEFAULT});var r=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(r||{}),ot=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(ot||{});const Be={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},qe={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Fe={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Re={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},gt="Toastify--animate Toastify__none-enter";function Lt(t,e=!1){var n;let o=Be;if(!t||typeof t=="string")switch(t){case"flip":o=Re;break;case"zoom":o=Fe;break;case"slide":o=qe;break}else o=t;if(e)o.enter=gt;else if(o.enter===gt){const i=(n=o.exit.split("__")[1])==null?void 0:n.split("-")[0];o.enter=`Toastify--animate Toastify__${i}-enter`}return o}function we(t){return t.containerId||String(t.position)}const Q="will-unmount";function ke(t=G.TOP_RIGHT){return!!document.querySelector(`.${r.CSS_NAMESPACE}__toast-container--${t}`)}function je(t=G.TOP_RIGHT){return`${r.CSS_NAMESPACE}__toast-container--${t}`}function Ue(t,e,n=!1){const o=[`${r.CSS_NAMESPACE}__toast-container`,`${r.CSS_NAMESPACE}__toast-container--${t}`,n?`${r.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return q(e)?e({position:t,rtl:n,defaultClassName:o}):`${o} ${e||""}`}function xe(t){var e;const{position:n,containerClassName:o,rtl:i=!1,style:a={}}=t,s=r.CSS_NAMESPACE,S=je(n),u=document.querySelector(`.${s}`),_=document.querySelector(`.${S}`),g=!!_&&!((e=_.className)!=null&&e.includes(Q)),A=u||document.createElement("div"),f=document.createElement("div");f.className=Ue(n,o,i),f.dataset.testid=`${r.CSS_NAMESPACE}__toast-container--${n}`,f.id=we(t);for(const T in a)if(Object.prototype.hasOwnProperty.call(a,T)){const h=a[T];f.style[T]=h}return u||(A.className=r.CSS_NAMESPACE,document.body.appendChild(A)),g||A.appendChild(f),f}function it(t){var e,n,o;const i=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),a=document.getElementById(i);a&&a.removeEventListener("animationend",it,!1);try{z[i].unmount(),(o=document.getElementById(i))==null||o.remove(),delete z[i],delete c[i]}catch{}}const z=w({});function De(t,e){const n=document.getElementById(String(e));n&&(z[n.id]=t)}function at(t,e=!0){const n=String(t);if(!z[n])return;const o=document.getElementById(n);o&&o.classList.add(Q),e?(ze(t),o&&o.addEventListener("animationend",it,!1)):it(n),C.items=C.items.filter(i=>i.containerId!==t)}function He(t){for(const e in z)at(e,t);C.items=[]}function Pt(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o={...o,...Lt(o.transition)};const i=o.appendPosition?`${o.exit}--${o.position}`:o.exit;n.className+=` ${i}`,e&&e(n)}}function ze(t){for(const e in c)if(e===t)for(const n of c[e]||[])Pt(n)}function Ge(t){const e=R().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function ct(t){return document.getElementById(t)}function We(t){const e=ct(t.containerId);return e&&e.classList.contains(Q)}function vt(t){var e;const n=Ct(t.content)?E(t.content.props):null;return n??E((e=t.data)!=null?e:{})}function Ve(t){return t?C.items.filter(e=>e.containerId===t).length>0:C.items.length>0}function Xe(){if(C.items.length>0){const t=C.items.shift();V(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const c=w({}),C=w({items:[]});function R(){const t=E(c);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function Ke(t){return R().find(e=>e.toastId===t)}function V(t,e={}){if(We(e)){const n=ct(e.containerId);n&&n.addEventListener("animationend",rt.bind(null,t,e),!1)}else rt(t,e)}function rt(t,e={}){const n=ct(e.containerId);n&&n.removeEventListener("animationend",rt.bind(null,t,e),!1);const o=c[e.containerId]||[],i=o.length>0;if(!i&&!ke(e.position)){const a=xe(e),s=Rt(yn,e);s.mount(a),De(s,a.id)}i&&!e.updateId&&(e.position=o[0].position),ut(()=>{e.updateId?y.update(e):y.add(t,e)})}const y={add(t,e){const{containerId:n=""}=e;n&&(c[n]=c[n]||[],c[n].find(o=>o.toastId===e.toastId)||setTimeout(()=>{var o,i;e.newestOnTop?(o=c[n])==null||o.unshift(e):(i=c[n])==null||i.push(e),e.onOpen&&e.onOpen(vt(e))},e.delay||0))},remove(t){if(t){const e=Ge(t);if(e){const n=c[e];let o=n.find(i=>i.toastId===t);c[e]=n.filter(i=>i.toastId!==t),!c[e].length&&!Ve(e)&&at(e,!1),Xe(),ut(()=>{o!=null&&o.onClose&&(o.onClose(vt(o)),o=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){c[e]=c[e]||[];const n=c[e].find(a=>a.toastId===t.toastId),o=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,i={...t,disabledEnterTransition:!o,updateId:void 0};y.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{l(i.content,i)},t.delay||0)}},clear(t,e=!0){t?at(t,e):He(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",y.dismissCallback,!1),setTimeout(()=>{y.remove(n)}))},dismiss(t){if(t){const e=R();for(const n of e)if(n.toastId===t){Pt(n,o=>{o.addEventListener("animationend",y.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=R();for(const n of e)if(n.toastId===t){const o=document.getElementById(t);o&&(o.remove(),o.removeEventListener("animationend",y.dismissCallback,!1),y.remove(t));break}}}},$t=w({}),J=w({});function Mt(){return Math.random().toString(36).substring(2,9)}function Ye(t){return typeof t=="number"&&!isNaN(t)}function st(t){return typeof t=="string"}function q(t){return typeof t=="function"}function tt(...t){return L(...t)}function X(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function Ze(t={}){$t[`${r.CSS_NAMESPACE}-default-options`]=t}function Je(){return $t[`${r.CSS_NAMESPACE}-default-options`]||Ot}function Qe(){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return document.documentElement.classList.contains("dark")||t?"dark":"light"}var K=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(K||{});const Bt={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:G.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:F.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:p.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""},contentProps:{type:Object,required:!1,default:null}},tn={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:p.DEFAULT},theme:{type:String,required:!1,default:F.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},en=$({name:"ProgressBar",props:tn,setup(t,{attrs:e}){const n=B(),o=m(()=>t.hide?"true":"false"),i=m(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),a=m(()=>[`${r.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${r.CSS_NAMESPACE}__progress-bar--controlled`:`${r.CSS_NAMESPACE}__progress-bar--animated`,`${r.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${r.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${r.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),s=m(()=>`${a.value} ${(e==null?void 0:e.class)||""}`),S=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},u=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),S())},_=m(()=>t.controlledProgress?null:u),g=m(()=>t.controlledProgress?u:null);return W(()=>{n.value&&(S(),n.value.onanimationend=_.value,n.value.ontransitionend=g.value)}),()=>d("div",{ref:n,role:"progressbar","aria-hidden":o.value,"aria-label":"notification timer",class:s.value,style:i.value},null)}}),nn=$({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:F.AUTO},type:{type:String,required:!1,default:F.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>d("button",{class:`${r.CSS_NAMESPACE}__close-button ${r.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[d("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[d("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),et=({theme:t,type:e,path:n,...o})=>d("svg",L({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},o),[d("path",{d:n},null)]);function on(t){return d(et,L(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function an(t){return d(et,L(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function rn(t){return d(et,L(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function sn(t){return d(et,L(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function ln(){return d("div",{class:`${r.CSS_NAMESPACE}__spinner`},null)}const lt={info:an,warning:on,success:rn,error:sn,spinner:ln},dn=t=>t in lt;function un({theme:t,type:e,isLoading:n,icon:o}){let i;const a={theme:t,type:e};return n?i=lt.spinner():o===!1?i=void 0:X(o)?i=E(o):q(o)?i=o(a):Ct(o)?i=kt(o,a):st(o)||Ye(o)?i=o:dn(e)&&(i=lt[e](a)),i}const cn=()=>{};function fn(t,e,n=r.COLLAPSE_DURATION){const{scrollHeight:o,style:i}=t,a=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=o+"px",i.transition=`all ${a}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,a)})})}function mn(t){const e=B(!1),n=B(!1),o=B(!1),i=B(K.Enter),a=w({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||r.COLLAPSE_DURATION}),s=a.done||cn,S=m(()=>a.appendPosition?`${a.enter}--${a.position}`:a.enter),u=m(()=>a.appendPosition?`${a.exit}--${a.position}`:a.exit),_=m(()=>t.pauseOnHover?{onMouseenter:I,onMouseleave:b}:{});function g(){const v=S.value.split(" ");f().addEventListener(ot.ENTRANCE_ANIMATION_END,b,{once:!0});const N=M=>{const j=f();M.target===j&&(j.dispatchEvent(new Event(ot.ENTRANCE_ANIMATION_END)),j.removeEventListener("animationend",N),j.removeEventListener("animationcancel",N),i.value===K.Enter&&M.type!=="animationcancel"&&j.classList.remove(...v))},O=()=>{const M=f();M.classList.add(...v),M.addEventListener("animationend",N),M.addEventListener("animationcancel",N)};t.pauseOnFocusLoss&&T(),O()}function A(){if(!f())return;const v=()=>{const O=f();O.removeEventListener("animationend",v),a.collapse?fn(O,s,a.collapseDuration):s()},N=()=>{const O=f();i.value=K.Exit,O&&(O.className+=` ${u.value}`,O.addEventListener("animationend",v))};n.value||(o.value?v():setTimeout(N))}function f(){return t.toastRef.value}function T(){document.hasFocus()||I(),window.addEventListener("focus",b),window.addEventListener("blur",I)}function h(){window.removeEventListener("focus",b),window.removeEventListener("blur",I)}function b(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function I(){e.value=!1}function k(v){v&&(v.stopPropagation(),v.preventDefault()),n.value=!1}return W(A),W(()=>{const v=R();n.value=v.findIndex(N=>N.toastId===a.toastId)>-1}),W(()=>{t.isLoading!==void 0&&(t.loading.value?I():b())}),At(g),ht(()=>{t.pauseOnFocusLoss&&h()}),{isIn:n,isRunning:e,hideToast:k,eventHandlers:_}}const pn=$({name:"ToastItem",inheritAttrs:!1,props:Bt,setup(t){const e=B(),n=m(()=>!!t.isLoading),o=m(()=>t.progress!==void 0&&t.progress!==null),i=m(()=>un(t)),a=m(()=>[`${r.CSS_NAMESPACE}__toast`,`${r.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${r.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${r.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:s,isIn:S,hideToast:u,eventHandlers:_}=mn({toastRef:e,loading:n,done:()=>{y.remove(t.toastId)},...Lt(t.transition,t.disabledEnterTransition),...t});return()=>d("div",L({id:t.toastId,class:a.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:g=>{t.closeOnClick&&u(),t.onClick&&t.onClick(g)}},_.value),[d("div",{role:t.role,"data-testid":"toast-body",class:`${r.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[i.value!=null&&d("div",{"data-testid":`toast-icon-${t.type}`,class:[`${r.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${r.CSS_NAMESPACE}--animate-icon ${r.CSS_NAMESPACE}__zoom-enter`].join(" ")},[X(i.value)?U(E(i.value),{theme:t.theme,type:t.type}):q(i.value)?i.value({theme:t.theme,type:t.type}):i.value]),t.contentProps?d("div",{"data-testid":"toast-content"},[U(E(t.content),{contentProps:t.contentProps})]):d("div",{"data-testid":"toast-content"},[X(t.content)?U(E(t.content),{toastProps:E(t),closeToast:u,data:t.data}):q(t.content)?t.content({toastProps:E(t),closeToast:u,data:t.data}):t.dangerouslyHTMLString?U("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&d(nn,{theme:t.theme,closeToast:g=>{g.stopPropagation(),g.preventDefault(),u()}},null),X(t.closeButton)?U(E(t.closeButton),{closeToast:u,type:t.type,theme:t.theme}):q(t.closeButton)?t.closeButton({closeToast:u,type:t.type,theme:t.theme}):null,d(en,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:S.value,type:t.type,hide:t.hideProgressBar,isRunning:s.value,autoClose:t.autoClose,controlledProgress:o.value,progress:t.progress,closeToast:t.isLoading?void 0:u},null)])}});let H=0;function qt(){typeof window>"u"||(H&&window.cancelAnimationFrame(H),H=window.requestAnimationFrame(qt),J.lastUrl!==window.location.href&&(J.lastUrl=window.location.href,y.clear()))}const yn=$({name:"ToastifyContainer",inheritAttrs:!1,props:Bt,setup(t){const e=m(()=>t.containerId),n=m(()=>c[e.value]||[]),o=m(()=>n.value.filter(i=>i.position===t.position));return At(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(qt)}),ht(()=>{typeof window<"u"&&H&&(window.cancelAnimationFrame(H),J.lastUrl="")}),()=>d(wt,null,[o.value.map(i=>{const{toastId:a=""}=i;return d(pn,L({key:a},i),null)})])}});let nt=!1;function Ft(){const t=[];return R().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(Q)&&t.push(e)}),t}function gn(t){const e=Ft().length,n=t??0;return n>0&&e+C.items.length>=n}function vn(t){gn(t.limit)&&!t.updateId&&C.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function P(t,e,n={}){if(nt)return;n=tt(Je(),{type:e},E(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Mt()),n={...n,content:t,containerId:n.containerId||String(n.position)};const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=Qe()),vn(n),J.lastUrl=window.location.href,n.multiple?C.items.length?n.updateId&&V(t,n):V(t,n):(nt=!0,l.clearAll(void 0,!1),setTimeout(()=>{V(t,n)},0),setTimeout(()=>{nt=!1},390)),n.toastId}const l=(t,e)=>P(t,p.DEFAULT,e);l.info=(t,e)=>P(t,p.DEFAULT,{...e,type:p.INFO});l.error=(t,e)=>P(t,p.DEFAULT,{...e,type:p.ERROR});l.warning=(t,e)=>P(t,p.DEFAULT,{...e,type:p.WARNING});l.warn=l.warning;l.success=(t,e)=>P(t,p.DEFAULT,{...e,type:p.SUCCESS});l.loading=(t,e)=>P(t,p.DEFAULT,tt(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));l.dark=(t,e)=>P(t,p.DEFAULT,tt(e,{theme:F.DARK}));l.remove=t=>{t?y.dismiss(t):y.clear()};l.clearAll=(t,e)=>{ut(()=>{y.clear(t,e)})};l.isActive=t=>{let e=!1;return e=Ft().findIndex(n=>n.toastId===t)>-1,e};l.update=(t,e={})=>{setTimeout(()=>{const n=Ke(t);if(n){const o=E(n),{content:i}=o,a={...o,...e,toastId:e.toastId||t,updateId:Mt()},s=a.render||i;delete a.render,P(s,a.type,a)}},0)};l.done=t=>{l.update(t,{isLoading:!1,progress:1})};l.promise=En;function En(t,{pending:e,error:n,success:o},i){var a,s,S;let u;const _={...i||{},autoClose:!1};e&&(u=st(e)?l.loading(e,_):l.loading(e.render,{..._,...e}));const g={autoClose:(a=i==null?void 0:i.autoClose)!=null?a:!0,closeOnClick:(s=i==null?void 0:i.closeOnClick)!=null?s:!0,closeButton:(S=i==null?void 0:i.autoClose)!=null?S:null,isLoading:void 0,draggable:null,delay:100},A=(T,h,b)=>{if(h==null){l.remove(u);return}const I={type:T,...g,...i,data:b},k=st(h)?{render:h}:h;return u?l.update(u,{...I,...k,isLoading:!1}):l(k.render,{...I,...k,isLoading:!1}),b},f=q(t)?t():t;return f.then(T=>{A("success",o,T)}).catch(T=>{A("error",n,T)}),f}l.POSITION=G;l.THEME=F;l.TYPE=p;l.TRANSITIONS=$e;const Sn={install(t,e={}){_n(e)}};typeof window<"u"&&(window.Vue3Toastify=Sn);function _n(t={}){const e=tt(Ot,t);Ze(e)}const Tn=$({__name:"index",setup(t){const e=Et(),n=St(),o=a=>{const s=n.getItem(D.Wood);s.count-=1,(s==null?void 0:s.count)>0&&a()},i=()=>{if(e.value.startAnima)e.value.end();else{const a=n.getItem(D.Wood);(a==null?void 0:a.count)>0?e.value.start():l(`没有${(a==null?void 0:a.icon)||"🪵"}`,{position:"top-center",theme:"dark"})}};return(a,s)=>(dt(),_t(Tt,{name:"🔥",ref_key:"itemRef",ref:e,timer:1,onClick:i,onAnimationEnd:o},null,512))}}),Cn={class:"",style:{width:"max-content"}},hn=$({__name:"game",setup(t){return(e,n)=>(dt(),jt("div",Cn,[d(Tn),d(Pe)]))}});export{hn as default};
