(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4369)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,i;var r,{src:o,sizes:p,unoptimized:v=!1,priority:w=!1,loading:b,className:y,quality:E,width:x,height:j,fill:S,style:C,onLoad:z,onLoadingComplete:O,placeholder:P="empty",blurDataURL:R,layout:k,objectFit:I,objectPosition:N,lazyBoundary:L,lazyRoot:M}=e,T=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=l.useContext(u.ImageConfigContext),D=l.useMemo(()=>{let e=g||A||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[A]),H=T,B=H.loader||f.default;if(delete H.loader,"__next_img_default"in B){if("custom"===D.loader)throw Error('Image with src "'.concat(o,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=B;B=e=>{let{config:t}=e,i=a(e,["config"]);return F(i)}}if(k){"fill"===k&&(S=!0);let G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];G&&(C=n({},C,G));let W={responsive:"100vw",fill:"100vw"}[k];W&&!p&&(p=W)}let q="",V=m(x),Z=m(j);if("object"==typeof(r=o)&&(h(r)||void 0!==r.src)){let J=h(o)?o.default:o;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(t=J.blurWidth,i=J.blurHeight,R=R||J.blurDataURL,q=J.src,!S){if(V||Z){if(V&&!Z){let U=V/J.width;Z=Math.round(J.height*U)}else if(!V&&Z){let Q=Z/J.height;V=Math.round(J.width*Q)}}else V=J.width,Z=J.height}}let X=!w&&("lazy"===b||void 0===b);((o="string"==typeof o?o:q).startsWith("data:")||o.startsWith("blob:"))&&(v=!0,X=!1),D.unoptimized&&(v=!0);let[K,Y]=l.useState(!1),[$,ee]=l.useState(!1),et=m(E),ei=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:N}:{},$?{}:{color:"transparent"},C),en="blur"===P&&R&&!K?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:Z,blurWidth:t,blurHeight:i,blurDataURL:R}),'")')}:{},er=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:o,sizes:a,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=o.exec(i);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:r.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:i,quality:o,width:s[d]})}}({config:D,src:o,unoptimized:v,width:V,quality:et,sizes:p,loader:B}),eo=o,ea={imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:H.crossOrigin},el=l.useRef(z);l.useEffect(()=>{el.current=z},[z]);let es=l.useRef(O);l.useEffect(()=>{es.current=O},[O]);let ec=n({isLazy:X,imgAttributes:er,heightInt:Z,widthInt:V,qualityInt:et,className:y,imgStyle:ei,blurStyle:en,loading:b,config:D,fill:S,unoptimized:v,placeholder:P,loader:B,srcString:eo,onLoadRef:el,onLoadingCompleteRef:es,setBlurComplete:Y,setShowAltText:ee},H);return l.default.createElement(l.default.Fragment,null,l.default.createElement(_,Object.assign({},ec)),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},ea))):null)};var n=i(6495).Z,r=i(2648).Z,o=i(1598).Z,a=i(7273).Z,l=o(i(7294)),s=r(i(3121)),c=i(2675),d=i(139),u=i(8730);i(7238);var f=r(i(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,r,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let _=e=>{var{imgAttributes:t,heightInt:i,widthInt:r,qualityInt:o,className:s,imgStyle:c,blurStyle:d,isLazy:u,fill:f,placeholder:g,loading:h,srcString:m,config:_,unoptimized:v,loader:w,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:E,setShowAltText:x,onLoad:j,onError:S}=e,C=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=u?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},C,t,{width:r,height:i,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:h,style:n({},c,d),ref:l.useCallback(e=>{e&&(S&&(e.src=e.src),e.complete&&p(e,m,g,b,y,E,v))},[m,g,b,y,E,S,v]),onLoad(e){let t=e.currentTarget;p(t,m,g,b,y,E,v)},onError(e){x(!0),"blur"===g&&E(!0),S&&S(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:o}=e,a=n||t,l=r||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},4369:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var n=i(5893);i(9008),i(5675);var r=i(7160),o=i.n(r);function a(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"R.J. Freund's Video Recordings of Singing"}),(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("p",{children:"On This Day by David Pomeranz"}),(0,n.jsx)("p",{children:"2022-11-19"}),(0,n.jsx)("video",{src:"IMG_8428_x264.mp4",controls:!0})]}),(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("p",{children:"Wonderful Tonight by Eric Clapton"}),(0,n.jsx)("p",{children:"2022-11-19"}),(0,n.jsx)("video",{src:"IMG_8429_x264.mp4",autoPlay:!0,controls:!0})]})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,i){i(3121)},5675:function(e,t,i){i(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);