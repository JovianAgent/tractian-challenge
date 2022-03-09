"use strict";(self.webpackChunktractian_challenge=self.webpackChunktractian_challenge||[]).push([[383],{732:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1413),a=n(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},c=n(9726),i=function(e,t){return a.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};i.displayName="CloseOutlined";var l=a.forwardRef(i)},8295:function(e,t,n){n.d(t,{c4:function(){return o}});var r=n(4942),a=n(7462),o=["xxl","xl","lg","md","sm","xs"],c={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,l=-1,u={},s={matchHandlers:{},dispatch:function(e){return u=e,i.forEach((function(e){return e(u)})),i.size>=1},subscribe:function(e){return i.size||this.register(),l+=1,i.set(l,e),e(u),l},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(c).forEach((function(t){var n=c[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),i.clear()},register:function(){var e=this;Object.keys(c).forEach((function(t){var n=c[t],o=function(n){var o=n.matches;e.dispatch((0,a.Z)((0,a.Z)({},u),(0,r.Z)({},t,o)))},i=window.matchMedia(n);i.addListener(o),e.matchHandlers[n]={mql:i,listener:o},o(i)}))}};t.ZP=s},3383:function(e,t,n){n.d(t,{Z:function(){return se}});var r=n(4942),a=n(7462),o=n(2791),c=n(1694),i=n.n(c),l=n(1818),u=n(3785),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=function(e){var t=e.prefixCls,n=e.className,c=e.hoverable,l=void 0===c||c,f=s(e,["prefixCls","className","hoverable"]);return o.createElement(u.C,null,(function(e){var c=(0,e.getPrefixCls)("card",t),u=i()("".concat(c,"-grid"),n,(0,r.Z)({},"".concat(c,"-grid-hoverable"),l));return o.createElement("div",(0,a.Z)({},f,{className:u}))}))},d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=function(e){return o.createElement(u.C,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,c=e.className,l=e.avatar,u=e.title,s=e.description,f=d(e,["prefixCls","className","avatar","title","description"]),v=n("card",r),p=i()("".concat(v,"-meta"),c),m=l?o.createElement("div",{className:"".concat(v,"-meta-avatar")},l):null,b=u?o.createElement("div",{className:"".concat(v,"-meta-title")},u):null,h=s?o.createElement("div",{className:"".concat(v,"-meta-description")},s):null,y=b||h?o.createElement("div",{className:"".concat(v,"-meta-detail")},b,h):null;return o.createElement("div",(0,a.Z)({},f,{className:p}),m,y)}))},p=n(885),m=n(1002),b=n(4925),h=n(1413),y=n(5501),g=n(3786),Z=n(5179),E=n(2982),x=n(5314),w=n(8829);function C(e){var t=(0,o.useRef)(),n=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return function(){n.current=!0,x.Z.cancel(t.current)}}),[]),function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];n.current||(x.Z.cancel(t.current),t.current=(0,x.Z)((function(){e.apply(void 0,a)})))}}var N=n(1354);function k(e,t){var n,a=e.prefixCls,c=e.id,l=e.active,u=e.tab,s=u.key,f=u.tab,d=u.disabled,v=u.closeIcon,p=e.closable,m=e.renderWrapper,b=e.removeAriaLabel,h=e.editable,y=e.onClick,g=e.onRemove,Z=e.onFocus,E=e.style,x="".concat(a,"-tab");o.useEffect((function(){return g}),[]);var w=h&&!1!==p&&!d;function C(e){d||y(e)}var k=o.createElement("div",{key:s,ref:t,className:i()(x,(n={},(0,r.Z)(n,"".concat(x,"-with-remove"),w),(0,r.Z)(n,"".concat(x,"-active"),l),(0,r.Z)(n,"".concat(x,"-disabled"),d),n)),style:E,onClick:C},o.createElement("div",{role:"tab","aria-selected":l,id:c&&"".concat(c,"-tab-").concat(s),className:"".concat(x,"-btn"),"aria-controls":c&&"".concat(c,"-panel-").concat(s),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[N.Z.SPACE,N.Z.ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:Z},f),w&&o.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:s,event:t})}},v||h.removeIcon||"\xd7"));return m?m(k):k}var P=o.forwardRef(k),O={width:0,height:0,left:0,top:0};var S={width:0,height:0,left:0,top:0,right:0};var T=n(535),R=n(3241);function I(e,t){var n=e.prefixCls,r=e.editable,a=e.locale,c=e.style;return r&&!1!==r.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===a||void 0===a?void 0:a.addAriaLabel)||"Add tab",onClick:function(e){r.onEdit("add",{event:e})}},r.addIcon||"+"):null}var j=o.forwardRef(I);function A(e,t){var n=e.prefixCls,a=e.id,c=e.tabs,l=e.locale,u=e.mobile,s=e.moreIcon,f=void 0===s?"More":s,d=e.moreTransitionName,v=e.style,m=e.className,b=e.editable,h=e.tabBarGutter,y=e.rtl,g=e.removeAriaLabel,Z=e.onTabClick,E=(0,o.useState)(!1),x=(0,p.Z)(E,2),w=x[0],C=x[1],k=(0,o.useState)(null),P=(0,p.Z)(k,2),O=P[0],S=P[1],I="".concat(a,"-more-popup"),A="".concat(n,"-dropdown"),M=null!==O?"".concat(I,"-").concat(O):null,L=null===l||void 0===l?void 0:l.dropdownAriaLabel;var B=o.createElement(T.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;Z(t,n),C(!1)},id:I,tabIndex:-1,role:"listbox","aria-activedescendant":M,selectedKeys:[O],"aria-label":void 0!==L?L:"expanded dropdown"},c.map((function(e){var t=b&&!1!==e.closable&&!e.disabled;return o.createElement(T.sN,{key:e.key,id:"".concat(I,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},o.createElement("span",null,e.tab),t&&o.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(A,"-menu-item-remove"),onClick:function(t){var n,r;t.stopPropagation(),n=t,r=e.key,n.preventDefault(),n.stopPropagation(),b.onEdit("remove",{key:r,event:n})}},e.closeIcon||b.removeIcon||"\xd7"))})));function K(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===O}))||0,r=t.length,a=0;a<r;a+=1){var o=t[n=(n+e+r)%r];if(!o.disabled)return void S(o.key)}}(0,o.useEffect)((function(){var e=document.getElementById(M);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[O]),(0,o.useEffect)((function(){w||S(null)}),[w]);var D=(0,r.Z)({},y?"marginRight":"marginLeft",h);c.length||(D.visibility="hidden",D.order=1);var V=i()((0,r.Z)({},"".concat(A,"-rtl"),y)),W=u?null:o.createElement(R.Z,{prefixCls:A,overlay:B,trigger:["hover"],visible:w,transitionName:d,onVisibleChange:C,overlayClassName:V,mouseEnterDelay:.1,mouseLeaveDelay:.1},o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:D,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":I,id:"".concat(a,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case N.Z.UP:K(-1),e.preventDefault();break;case N.Z.DOWN:K(1),e.preventDefault();break;case N.Z.ESC:C(!1);break;case N.Z.SPACE:case N.Z.ENTER:null!==O&&Z(O,e)}else[N.Z.DOWN,N.Z.SPACE,N.Z.ENTER].includes(t)&&(C(!0),e.preventDefault())}},f));return o.createElement("div",{className:i()("".concat(n,"-nav-operations"),m),style:v,ref:t},W,o.createElement(j,{prefixCls:n,locale:l,editable:b}))}var M=o.memo(o.forwardRef(A),(function(e,t){return t.tabMoving})),L=(0,o.createContext)(null),B=Math.pow(.995,20);function K(e,t){var n=o.useRef(e),r=o.useState({}),a=(0,p.Z)(r,2)[1];return[n.current,function(e){var r="function"===typeof e?e(n.current):e;r!==n.current&&t(r,n.current),n.current=r,a({})}]}var D=function(e){var t,n=e.position,r=e.prefixCls,a=e.extra;if(!a)return null;var c={};return a&&"object"===(0,m.Z)(a)&&!o.isValidElement(a)?c=a:c.right=a,"right"===n&&(t=c.right),"left"===n&&(t=c.left),t?o.createElement("div",{className:"".concat(r,"-extra-content")},t):null};function V(e,t){var n,c=o.useContext(L),l=c.prefixCls,u=c.tabs,s=e.className,f=e.style,d=e.id,v=e.animated,m=e.activeKey,b=e.rtl,y=e.extra,g=e.editable,Z=e.locale,N=e.tabPosition,k=e.tabBarGutter,T=e.children,R=e.onTabClick,I=e.onTabScroll,A=(0,o.useRef)(),V=(0,o.useRef)(),W=(0,o.useRef)(),z=(0,o.useRef)(),q=function(){var e=(0,o.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,o.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),H=(0,p.Z)(q,2),G=H[0],_=H[1],F="top"===N||"bottom"===N,Y=K(0,(function(e,t){F&&I&&I({direction:e>t?"left":"right"})})),X=(0,p.Z)(Y,2),U=X[0],$=X[1],J=K(0,(function(e,t){!F&&I&&I({direction:e>t?"top":"bottom"})})),Q=(0,p.Z)(J,2),ee=Q[0],te=Q[1],ne=(0,o.useState)(0),re=(0,p.Z)(ne,2),ae=re[0],oe=re[1],ce=(0,o.useState)(0),ie=(0,p.Z)(ce,2),le=ie[0],ue=ie[1],se=(0,o.useState)(null),fe=(0,p.Z)(se,2),de=fe[0],ve=fe[1],pe=(0,o.useState)(null),me=(0,p.Z)(pe,2),be=me[0],he=me[1],ye=(0,o.useState)(0),ge=(0,p.Z)(ye,2),Ze=ge[0],Ee=ge[1],xe=(0,o.useState)(0),we=(0,p.Z)(xe,2),Ce=we[0],Ne=we[1],ke=function(e){var t=(0,o.useRef)([]),n=(0,o.useState)({}),r=(0,p.Z)(n,2)[1],a=(0,o.useRef)("function"===typeof e?e():e),c=C((function(){var e=a.current;t.current.forEach((function(t){e=t(e)})),t.current=[],a.current=e,r({})}));return[a.current,function(e){t.current.push(e),c()}]}(new Map),Pe=(0,p.Z)(ke,2),Oe=Pe[0],Se=Pe[1],Te=function(e,t,n){return(0,o.useMemo)((function(){for(var n,r=new Map,a=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||O,o=a.left+a.width,c=0;c<e.length;c+=1){var i,l=e[c].key,u=t.get(l);u||(u=t.get(null===(i=e[c-1])||void 0===i?void 0:i.key)||O);var s=r.get(l)||(0,h.Z)({},u);s.right=o-s.left-s.width,r.set(l,s)}return r}),[e.map((function(e){return e.key})).join("_"),t,n])}(u,Oe,ae),Re="".concat(l,"-nav-operations-hidden"),Ie=0,je=0;function Ae(e){return e<Ie?Ie:e>je?je:e}F?b?(Ie=0,je=Math.max(0,ae-de)):(Ie=Math.min(0,de-ae),je=0):(Ie=Math.min(0,be-le),je=0);var Me=(0,o.useRef)(),Le=(0,o.useState)(),Be=(0,p.Z)(Le,2),Ke=Be[0],De=Be[1];function Ve(){De(Date.now())}function We(){window.clearTimeout(Me.current)}function ze(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=Te.get(e)||{width:0,height:0,left:0,right:0,top:0};if(F){var n=U;b?t.right<U?n=t.right:t.right+t.width>U+de&&(n=t.right+t.width-de):t.left<-U?n=-t.left:t.left+t.width>-U+de&&(n=-(t.left+t.width-de)),te(0),$(Ae(n))}else{var r=ee;t.top<-ee?r=-t.top:t.top+t.height>-ee+be&&(r=-(t.top+t.height-be)),$(0),te(Ae(r))}}!function(e,t){var n=(0,o.useState)(),r=(0,p.Z)(n,2),a=r[0],c=r[1],i=(0,o.useState)(0),l=(0,p.Z)(i,2),u=l[0],s=l[1],f=(0,o.useState)(0),d=(0,p.Z)(f,2),v=d[0],m=d[1],b=(0,o.useState)(),h=(0,p.Z)(b,2),y=h[0],g=h[1],Z=(0,o.useRef)(),E=(0,o.useRef)(),x=(0,o.useRef)(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,r=t.screenY;c({x:n,y:r}),window.clearInterval(Z.current)},onTouchMove:function(e){if(a){e.preventDefault();var n=e.touches[0],r=n.screenX,o=n.screenY;c({x:r,y:o});var i=r-a.x,l=o-a.y;t(i,l);var f=Date.now();s(f),m(f-u),g({x:i,y:l})}},onTouchEnd:function(){if(a&&(c(null),g(null),y)){var e=y.x/v,n=y.y/v,r=Math.abs(e),o=Math.abs(n);if(Math.max(r,o)<.1)return;var i=e,l=n;Z.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(Z.current):t(20*(i*=B),20*(l*=B))}),20)}},onWheel:function(e){var n=e.deltaX,r=e.deltaY,a=0,o=Math.abs(n),c=Math.abs(r);o===c?a="x"===E.current?n:r:o>c?(a=n,E.current="x"):(a=r,E.current="y"),t(-a,-a)&&e.preventDefault()}},o.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(A,(function(e,t){function n(e,t){e((function(e){return Ae(e+t)}))}if(F){if(de>=ae)return!1;n($,e)}else{if(be>=le)return!1;n(te,t)}return We(),Ve(),!0})),(0,o.useEffect)((function(){return We(),Ke&&(Me.current=window.setTimeout((function(){De(0)}),100)),We}),[Ke]);var qe=function(e,t,n,r,a){var c,i,l,u=a.tabs,s=a.tabPosition,f=a.rtl;["top","bottom"].includes(s)?(c="width",i=f?"right":"left",l=Math.abs(t.left)):(c="height",i="top",l=-t.top);var d=t[c],v=n[c],p=r[c],m=d;return v+p>d&&v<d&&(m=d-p),(0,o.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,r=0;r<t;r+=1){var a=e.get(u[r].key)||S;if(a[i]+a[c]>l+m){n=r-1;break}}for(var o=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||S)[i]<l){o=s+1;break}return[o,n]}),[e,l,m,s,u.map((function(e){return e.key})).join("_"),f])}(Te,{width:de,height:be,left:U,top:ee},{width:ae,height:le},{width:Ze,height:Ce},(0,h.Z)((0,h.Z)({},e),{},{tabs:u})),He=(0,p.Z)(qe,2),Ge=He[0],_e=He[1],Fe={};"top"===N||"bottom"===N?Fe[b?"marginRight":"marginLeft"]=k:Fe.marginTop=k;var Ye=u.map((function(e,t){var n=e.key;return o.createElement(P,{id:d,prefixCls:l,key:n,tab:e,style:0===t?void 0:Fe,closable:e.closable,editable:g,active:n===m,renderWrapper:T,removeAriaLabel:null===Z||void 0===Z?void 0:Z.removeAriaLabel,ref:G(n),onClick:function(e){R(n,e)},onRemove:function(){_(n)},onFocus:function(){ze(n),Ve(),A.current&&(b||(A.current.scrollLeft=0),A.current.scrollTop=0)}})})),Xe=C((function(){var e,t,n,r,a,o,c=(null===(e=A.current)||void 0===e?void 0:e.offsetWidth)||0,i=(null===(t=A.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=z.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(r=z.current)||void 0===r?void 0:r.offsetHeight)||0;ve(c),he(i),Ee(l),Ne(s);var f=((null===(a=V.current)||void 0===a?void 0:a.offsetWidth)||0)-l,d=((null===(o=V.current)||void 0===o?void 0:o.offsetHeight)||0)-s;oe(f),ue(d),Se((function(){var e=new Map;return u.forEach((function(t){var n=t.key,r=G(n).current;r&&e.set(n,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})})),e}))})),Ue=u.slice(0,Ge),$e=u.slice(_e+1),Je=[].concat((0,E.Z)(Ue),(0,E.Z)($e)),Qe=(0,o.useState)(),et=(0,p.Z)(Qe,2),tt=et[0],nt=et[1],rt=Te.get(m),at=(0,o.useRef)();function ot(){x.Z.cancel(at.current)}(0,o.useEffect)((function(){var e={};return rt&&(F?(b?e.right=rt.right:e.left=rt.left,e.width=rt.width):(e.top=rt.top,e.height=rt.height)),ot(),at.current=(0,x.Z)((function(){nt(e)})),ot}),[rt,F,b]),(0,o.useEffect)((function(){ze()}),[m,rt,Te,F]),(0,o.useEffect)((function(){Xe()}),[b,k,m,u.map((function(e){return e.key})).join("_")]);var ct,it,lt,ut,st=!!Je.length,ft="".concat(l,"-nav-wrap");return F?b?(it=U>0,ct=U+de<ae):(ct=U<0,it=-U+de<ae):(lt=ee<0,ut=-ee+be<le),o.createElement("div",{ref:t,role:"tablist",className:i()("".concat(l,"-nav"),s),style:f,onKeyDown:function(){Ve()}},o.createElement(D,{position:"left",extra:y,prefixCls:l}),o.createElement(w.Z,{onResize:Xe},o.createElement("div",{className:i()(ft,(n={},(0,r.Z)(n,"".concat(ft,"-ping-left"),ct),(0,r.Z)(n,"".concat(ft,"-ping-right"),it),(0,r.Z)(n,"".concat(ft,"-ping-top"),lt),(0,r.Z)(n,"".concat(ft,"-ping-bottom"),ut),n)),ref:A},o.createElement(w.Z,{onResize:Xe},o.createElement("div",{ref:V,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:Ke?"none":void 0}},Ye,o.createElement(j,{ref:z,prefixCls:l,locale:Z,editable:g,style:(0,h.Z)((0,h.Z)({},0===Ye.length?void 0:Fe),{},{visibility:st?"hidden":null})}),o.createElement("div",{className:i()("".concat(l,"-ink-bar"),(0,r.Z)({},"".concat(l,"-ink-bar-animated"),v.inkBar)),style:tt}))))),o.createElement(M,(0,a.Z)({},e,{removeAriaLabel:null===Z||void 0===Z?void 0:Z.removeAriaLabel,ref:W,prefixCls:l,tabs:Je,className:!st&&Re,tabMoving:!!Ke})),o.createElement(D,{position:"right",extra:y,prefixCls:l}))}var W=o.forwardRef(V);function z(e){var t=e.id,n=e.activeKey,a=e.animated,c=e.tabPosition,l=e.rtl,u=e.destroyInactiveTabPane,s=o.useContext(L),f=s.prefixCls,d=s.tabs,v=a.tabPane,p=d.findIndex((function(e){return e.key===n}));return o.createElement("div",{className:i()("".concat(f,"-content-holder"))},o.createElement("div",{className:i()("".concat(f,"-content"),"".concat(f,"-content-").concat(c),(0,r.Z)({},"".concat(f,"-content-animated"),v)),style:p&&v?(0,r.Z)({},l?"marginRight":"marginLeft","-".concat(p,"00%")):null},d.map((function(e){return o.cloneElement(e.node,{key:e.key,prefixCls:f,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:u})}))))}function q(e){var t=e.prefixCls,n=e.forceRender,r=e.className,a=e.style,c=e.id,l=e.active,u=e.animated,s=e.destroyInactiveTabPane,f=e.tabKey,d=e.children,v=o.useState(n),m=(0,p.Z)(v,2),b=m[0],y=m[1];o.useEffect((function(){l?y(!0):s&&y(!1)}),[l,s]);var g={};return l||(u?(g.visibility="hidden",g.height=0,g.overflowY="hidden"):g.display="none"),o.createElement("div",{id:c&&"".concat(c,"-panel-").concat(f),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(f),"aria-hidden":!l,style:(0,h.Z)((0,h.Z)({},g),a),className:i()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),r)},(l||b||n)&&d)}var H=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],G=0;function _(e,t){var n,c,l=e.id,u=e.prefixCls,s=void 0===u?"rc-tabs":u,f=e.className,d=e.children,v=e.direction,E=e.activeKey,x=e.defaultActiveKey,w=e.editable,C=e.animated,N=void 0===C?{inkBar:!0,tabPane:!1}:C,k=e.tabPosition,P=void 0===k?"top":k,O=e.tabBarGutter,S=e.tabBarStyle,T=e.tabBarExtraContent,R=e.locale,I=e.moreIcon,j=e.moreTransitionName,A=e.destroyInactiveTabPane,M=e.renderTabBar,B=e.onChange,K=e.onTabClick,D=e.onTabScroll,V=(0,b.Z)(e,H),q=function(e){return(0,y.Z)(e).map((function(e){if(o.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,h.Z)((0,h.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(d),_="rtl"===v;c=!1===N?{inkBar:!1,tabPane:!1}:!0===N?{inkBar:!0,tabPane:!0}:(0,h.Z)({inkBar:!0,tabPane:!1},"object"===(0,m.Z)(N)?N:{});var F=(0,o.useState)(!1),Y=(0,p.Z)(F,2),X=Y[0],U=Y[1];(0,o.useEffect)((function(){U((0,g.Z)())}),[]);var $=(0,Z.Z)((function(){var e;return null===(e=q[0])||void 0===e?void 0:e.key}),{value:E,defaultValue:x}),J=(0,p.Z)($,2),Q=J[0],ee=J[1],te=(0,o.useState)((function(){return q.findIndex((function(e){return e.key===Q}))})),ne=(0,p.Z)(te,2),re=ne[0],ae=ne[1];(0,o.useEffect)((function(){var e,t=q.findIndex((function(e){return e.key===Q}));-1===t&&(t=Math.max(0,Math.min(re,q.length-1)),ee(null===(e=q[t])||void 0===e?void 0:e.key));ae(t)}),[q.map((function(e){return e.key})).join("_"),Q,re]);var oe=(0,Z.Z)(null,{value:l}),ce=(0,p.Z)(oe,2),ie=ce[0],le=ce[1],ue=P;X&&!["left","right"].includes(P)&&(ue="top"),(0,o.useEffect)((function(){l||(le("rc-tabs-".concat(G)),G+=1)}),[]);var se,fe={id:ie,activeKey:Q,animated:c,tabPosition:ue,rtl:_,mobile:X},de=(0,h.Z)((0,h.Z)({},fe),{},{editable:w,locale:R,moreIcon:I,moreTransitionName:j,tabBarGutter:O,onTabClick:function(e,t){null===K||void 0===K||K(e,t);var n=e!==Q;ee(e),n&&(null===B||void 0===B||B(e))},onTabScroll:D,extra:T,style:S,panes:d});return se=M?M(de,W):o.createElement(W,de),o.createElement(L.Provider,{value:{tabs:q,prefixCls:s}},o.createElement("div",(0,a.Z)({ref:t,id:l,className:i()(s,"".concat(s,"-").concat(ue),(n={},(0,r.Z)(n,"".concat(s,"-mobile"),X),(0,r.Z)(n,"".concat(s,"-editable"),w),(0,r.Z)(n,"".concat(s,"-rtl"),_),n),f)},V),se,o.createElement(z,(0,a.Z)({destroyInactiveTabPane:A},fe,{animated:c}))))}var F=o.forwardRef(_);F.TabPane=q;var Y=F,X=n(5033),U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},$=n(9726),J=function(e,t){return o.createElement($.Z,(0,h.Z)((0,h.Z)({},e),{},{ref:t,icon:U}))};J.displayName="PlusOutlined";var Q=o.forwardRef(J),ee=n(732),te=n(4824),ne=n(1815),re=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function ae(e){var t,n=e.type,c=e.className,l=e.size,s=e.onEdit,f=e.hideAdd,d=e.centered,v=e.addIcon,p=re(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),m=p.prefixCls,b=p.moreIcon,h=void 0===b?o.createElement(X.Z,null):b,y=o.useContext(u.E_),g=y.getPrefixCls,Z=y.direction,E=g("tabs",m);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,r=t.event;null===s||void 0===s||s("add"===e?r:n,e)},removeIcon:o.createElement(ee.Z,null),addIcon:v||o.createElement(Q,null),showAdd:!0!==f});var x=g();return(0,te.Z)(!("onPrevClick"in p)&&!("onNextClick"in p),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),o.createElement(ne.Z.Consumer,null,(function(e){var u,s=void 0!==l?l:e;return o.createElement(Y,(0,a.Z)({direction:Z,moreTransitionName:"".concat(x,"-slide-up")},p,{className:i()((u={},(0,r.Z)(u,"".concat(E,"-").concat(s),s),(0,r.Z)(u,"".concat(E,"-card"),["card","editable-card"].includes(n)),(0,r.Z)(u,"".concat(E,"-editable-card"),"editable-card"===n),(0,r.Z)(u,"".concat(E,"-centered"),d),u),c),editable:t,moreIcon:h,prefixCls:E}))}))}ae.TabPane=q;var oe=ae,ce=n(8786),ie=n(9603),le=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var ue=o.forwardRef((function(e,t){var n,c,s,d=o.useContext(u.E_),v=d.getPrefixCls,p=d.direction,m=o.useContext(ne.Z),b=e.prefixCls,h=e.className,y=e.extra,g=e.headStyle,Z=void 0===g?{}:g,E=e.bodyStyle,x=void 0===E?{}:E,w=e.title,C=e.loading,N=e.bordered,k=void 0===N||N,P=e.size,O=e.type,S=e.cover,T=e.actions,R=e.tabList,I=e.children,j=e.activeTabKey,A=e.defaultActiveTabKey,M=e.tabBarExtraContent,L=e.hoverable,B=e.tabProps,K=void 0===B?{}:B,D=le(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),V=v("card",b),W=0===x.padding||"0px"===x.padding?{padding:24}:void 0,z=o.createElement("div",{className:"".concat(V,"-loading-block")}),q=o.createElement("div",{className:"".concat(V,"-loading-content"),style:W},o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:22},z)),o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:8},z),o.createElement(ie.Z,{span:15},z)),o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:6},z),o.createElement(ie.Z,{span:18},z)),o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:13},z),o.createElement(ie.Z,{span:9},z)),o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:4},z),o.createElement(ie.Z,{span:3},z),o.createElement(ie.Z,{span:16},z))),H=void 0!==j,G=(0,a.Z)((0,a.Z)({},K),(n={},(0,r.Z)(n,H?"activeKey":"defaultActiveKey",H?j:A),(0,r.Z)(n,"tabBarExtraContent",M),n)),_=R&&R.length?o.createElement(oe,(0,a.Z)({size:"large"},G,{className:"".concat(V,"-head-tabs"),onChange:function(t){var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)}}),R.map((function(e){return o.createElement(oe.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(w||y||_)&&(s=o.createElement("div",{className:"".concat(V,"-head"),style:Z},o.createElement("div",{className:"".concat(V,"-head-wrapper")},w&&o.createElement("div",{className:"".concat(V,"-head-title")},w),y&&o.createElement("div",{className:"".concat(V,"-extra")},y)),_));var F=S?o.createElement("div",{className:"".concat(V,"-cover")},S):null,Y=o.createElement("div",{className:"".concat(V,"-body"),style:x},C?q:I),X=T&&T.length?o.createElement("ul",{className:"".concat(V,"-actions")},function(e){return e.map((function(t,n){return o.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},o.createElement("span",null,t))}))}(T)):null,U=(0,l.Z)(D,["onTabChange"]),$=P||m,J=i()(V,(c={},(0,r.Z)(c,"".concat(V,"-loading"),C),(0,r.Z)(c,"".concat(V,"-bordered"),k),(0,r.Z)(c,"".concat(V,"-hoverable"),L),(0,r.Z)(c,"".concat(V,"-contain-grid"),function(){var t;return o.Children.forEach(e.children,(function(e){e&&e.type&&e.type===f&&(t=!0)})),t}()),(0,r.Z)(c,"".concat(V,"-contain-tabs"),R&&R.length),(0,r.Z)(c,"".concat(V,"-").concat($),$),(0,r.Z)(c,"".concat(V,"-type-").concat(O),!!O),(0,r.Z)(c,"".concat(V,"-rtl"),"rtl"===p),c),h);return o.createElement("div",(0,a.Z)({ref:t},U,{className:J}),s,F,Y,X)}));ue.Grid=f,ue.Meta=v;var se=ue},9603:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(4942),a=n(7462),o=n(1002),c=n(2791),i=n(1694),l=n.n(i),u=n(9426),s=n(3785),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var d=["xs","sm","md","lg","xl","xxl"],v=c.forwardRef((function(e,t){var n,i=c.useContext(s.E_),v=i.getPrefixCls,p=i.direction,m=c.useContext(u.Z),b=m.gutter,h=m.wrap,y=m.supportFlexGap,g=e.prefixCls,Z=e.span,E=e.order,x=e.offset,w=e.push,C=e.pull,N=e.className,k=e.children,P=e.flex,O=e.style,S=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),T=v("col",g),R={};d.forEach((function(t){var n,c={},i=e[t];"number"===typeof i?c.span=i:"object"===(0,o.Z)(i)&&(c=i||{}),delete S[t],R=(0,a.Z)((0,a.Z)({},R),(n={},(0,r.Z)(n,"".concat(T,"-").concat(t,"-").concat(c.span),void 0!==c.span),(0,r.Z)(n,"".concat(T,"-").concat(t,"-order-").concat(c.order),c.order||0===c.order),(0,r.Z)(n,"".concat(T,"-").concat(t,"-offset-").concat(c.offset),c.offset||0===c.offset),(0,r.Z)(n,"".concat(T,"-").concat(t,"-push-").concat(c.push),c.push||0===c.push),(0,r.Z)(n,"".concat(T,"-").concat(t,"-pull-").concat(c.pull),c.pull||0===c.pull),(0,r.Z)(n,"".concat(T,"-rtl"),"rtl"===p),n))}));var I=l()(T,(n={},(0,r.Z)(n,"".concat(T,"-").concat(Z),void 0!==Z),(0,r.Z)(n,"".concat(T,"-order-").concat(E),E),(0,r.Z)(n,"".concat(T,"-offset-").concat(x),x),(0,r.Z)(n,"".concat(T,"-push-").concat(w),w),(0,r.Z)(n,"".concat(T,"-pull-").concat(C),C),n),N,R),j={};if(b&&b[0]>0){var A=b[0]/2;j.paddingLeft=A,j.paddingRight=A}if(b&&b[1]>0&&!y){var M=b[1]/2;j.paddingTop=M,j.paddingBottom=M}return P&&(j.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),!1!==h||j.minWidth||(j.minWidth=0)),c.createElement("div",(0,a.Z)({},S,{style:(0,a.Z)((0,a.Z)({},j),O),className:I,ref:t}),k)}));v.displayName="Col";var p=v},9426:function(e,t,n){var r=(0,n(2791).createContext)({});t.Z=r},8786:function(e,t,n){n.d(t,{Z:function(){return g}});var r,a=n(7462),o=n(4942),c=n(1002),i=n(885),l=n(2791),u=n(1694),s=n.n(u),f=n(3785),d=n(9426),v=n(9393),p=n(8295),m=n(4937),b=function(){if(!(0,m.Z)()||!window.document.documentElement)return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r},h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=((0,v.b)("top","middle","bottom","stretch"),(0,v.b)("start","end","center","space-around","space-between"),l.forwardRef((function(e,t){var n,r=e.prefixCls,u=e.justify,v=e.align,m=e.className,y=e.style,g=e.children,Z=e.gutter,E=void 0===Z?0:Z,x=e.wrap,w=h(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=l.useContext(f.E_),N=C.getPrefixCls,k=C.direction,P=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),O=(0,i.Z)(P,2),S=O[0],T=O[1],R=function(){var e=l.useState(!1),t=(0,i.Z)(e,2),n=t[0],r=t[1];return l.useEffect((function(){r(b())}),[]),n}(),I=l.useRef(E);l.useEffect((function(){var e=p.ZP.subscribe((function(e){var t=I.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&T(e)}));return function(){return p.ZP.unsubscribe(e)}}),[]);var j=N("row",r),A=function(){var e=[0,0];return(Array.isArray(E)?E:[E,0]).forEach((function(t,n){if("object"===(0,c.Z)(t))for(var r=0;r<p.c4.length;r++){var a=p.c4[r];if(S[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t||0})),e}(),M=s()(j,(n={},(0,o.Z)(n,"".concat(j,"-no-wrap"),!1===x),(0,o.Z)(n,"".concat(j,"-").concat(u),u),(0,o.Z)(n,"".concat(j,"-").concat(v),v),(0,o.Z)(n,"".concat(j,"-rtl"),"rtl"===k),n),m),L={},B=A[0]>0?A[0]/-2:void 0,K=A[1]>0?A[1]/-2:void 0;if(B&&(L.marginLeft=B,L.marginRight=B),R){var D=(0,i.Z)(A,2);L.rowGap=D[1]}else K&&(L.marginTop=K,L.marginBottom=K);var V=(0,i.Z)(A,2),W=V[0],z=V[1],q=l.useMemo((function(){return{gutter:[W,z],wrap:x,supportFlexGap:R}}),[W,z,x,R]);return l.createElement(d.Z.Provider,{value:q},l.createElement("div",(0,a.Z)({},w,{className:M,style:(0,a.Z)((0,a.Z)({},L),y),ref:t}),g))})));y.displayName="Row";var g=y},3241:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(4942),a=n(1413),o=n(885),c=n(4925),i=n(2791),l=n(34),u=n(1694),s=n.n(u),f={adjustX:1,adjustY:1},d=[0,0],v={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:d}},p=n(1354),m=p.Z.ESC,b=p.Z.TAB;function h(e){var t=e.visible,n=e.setTriggerVisible,r=e.triggerRef,a=e.menuRef,o=e.menuClassName,c=e.onVisibleChange,l=function(){t&&r.current&&(r.current.triggerRef.current&&r.current.triggerRef.current.focus(),n(!1),"function"===typeof c&&c(!1))},u=function(e){switch(e.keyCode){case m:case b:l()}};i.useEffect((function(){return t?(setTimeout((function(){!function(){if(a.current){var e,t,n,r=(null===(e=a.current.className)||void 0===e?void 0:e.includes(o))?a.current:null===(t=(n=a.current).querySelector)||void 0===t?void 0:t.call(n,o);r&&r.focus()}}(),window.addEventListener("keydown",u)}),100),function(){window.removeEventListener("keydown",u)}):function(){return null}}),[t]);return{returnFocus:function(){t&&r.current&&r.current.triggerRef.current&&setTimeout((function(){var e,t,n;null===(e=r.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||n.focus()}),100)}}}var y=n(8834),g=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"];function Z(e,t){var n=e.arrow,u=void 0!==n&&n,f=e.prefixCls,d=void 0===f?"rc-dropdown":f,p=e.transitionName,m=e.animation,b=e.align,Z=e.placement,E=void 0===Z?"bottomLeft":Z,x=e.placements,w=void 0===x?v:x,C=e.getPopupContainer,N=e.showAction,k=e.hideAction,P=e.overlayClassName,O=e.overlayStyle,S=e.visible,T=e.trigger,R=void 0===T?["hover"]:T,I=(0,c.Z)(e,g),j=i.useState(),A=(0,o.Z)(j,2),M=A[0],L=A[1],B="visible"in e?S:M,K=i.useRef(null);i.useImperativeHandle(t,(function(){return K.current}));var D=i.useRef(null),V="".concat(d,"-menu"),W=h({visible:B,setTriggerVisible:L,triggerRef:K,menuRef:D,menuClassName:V,onVisibleChange:e.onVisibleChange}).returnFocus,z=function(){var t=e.overlay;return"function"===typeof t?t():t},q=function(t){var n=e.onOverlayClick,r=z().props;L(!1),n&&n(t),r.onClick&&r.onClick(t),W()},H=function(){var e=z(),t={prefixCls:V,onClick:q,ref:(0,y.Yr)(e)?D:void 0};return"string"===typeof e.type&&delete t.prefixCls,i.createElement(i.Fragment,null,u&&i.createElement("div",{className:"".concat(d,"-arrow")}),i.cloneElement(e,t))},G=k;return G||-1===R.indexOf("contextMenu")||(G=["click"]),i.createElement(l.Z,(0,a.Z)((0,a.Z)({builtinPlacements:w},I),{},{prefixCls:d,ref:K,popupClassName:s()(P,(0,r.Z)({},"".concat(d,"-show-arrow"),u)),popupStyle:O,action:R,showAction:N,hideAction:G||[],popupPlacement:E,popupAlign:b,popupTransitionName:p,popupAnimation:m,popupVisible:B,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?H:H(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;L(t),"function"===typeof n&&n(t)},getPopupContainer:C}),function(){var t=e.children,n=t.props?t.props:{},r=s()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(d,"-open")}());return B&&t?i.cloneElement(t,{className:r}):t}())}var E=i.forwardRef(Z)}}]);
//# sourceMappingURL=383.e5df3ed1.chunk.js.map