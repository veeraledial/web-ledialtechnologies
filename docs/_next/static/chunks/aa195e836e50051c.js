(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28977,t=>{"use strict";var e=t.i(47167),a=t.i(43476);let n=e.default.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;function o(){return n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${n}`}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${n}', { send_page_view: true });
            window.gtag = gtag;
          `}})]}):null}t.s(["Analytics",()=>o])},18566,(t,e,a)=>{e.exports=t.r(76562)},45438,t=>{"use strict";var e=t.i(71645),a=t.i(18566);function n(){let t=(0,a.usePathname)();return(0,e.useEffect)(()=>{if(window.location.hash)return;let t=document.documentElement,e=t.style.scrollBehavior;t.style.scrollBehavior="auto",window.scrollTo({top:0,left:0,behavior:"auto"}),requestAnimationFrame(()=>{t.style.scrollBehavior=e})},[t]),null}t.s(["RouteScrollManager",()=>n])}]);