import{l as U,ap as j,bh as z,d as q,h as _,o as u,F as f,w as a,a as o,e as l,u as t,I as S,au as v,N as h,aw as k,_ as b,r as B,c as I}from"./app-971ef0b1.js";import{N as g}from"./Button-8a761736.js";import{N as y}from"./Alert-c52e1937.js";import{N as R}from"./Image-4afe4cf8.js";import"./browser-564d0f5d.js";import"./arrayReduce-865b0d3f.js";function A(){const d=U(z,null);return d===null&&j("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),d}const N="https://alist.nn.ci/tool/aliyundrive/callback",Q="76917ccccd4441c39457a04f6084fb2f",T=q({__name:"Request",setup(d){function w(){const e=new URL("https://open.aliyundrive.com/oauth/authorize");e.searchParams.set("client_id",Q),e.searchParams.set("redirect_uri",N),e.searchParams.set("scope","user:base,file:all:read,file:all:write"),e.searchParams.set("response_type","code"),e.searchParams.set("state",""),window.open(e.toString(),"_blank")}const s=_(),i=_(!1);async function P(){try{i.value=!0;const n=await(await fetch(k()+"/alist/ali_open/qr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})})).json();s.value=n}catch(e){console.log(e),s.value={error:"error",qrCodeUrl:"",sid:""}}finally{i.value=!1}}const p=_(),m=_(!1),C=A();async function x(){var e;try{m.value=!0;const r=await(await fetch(`${k()}/proxy/https://open.aliyundrive.com/oauth/qrcode/${(e=s.value)==null?void 0:e.sid}/status`)).json();if(p.value=r,r.status==="LoginSuccess"){const c=new URL(N);c.searchParams.set("code",r.authCode),window.open(c.toString(),"_blank")}else C.warning(r.status)}catch(n){console.log(n),C.error(String(n))}finally{m.value=!1}}return(e,n)=>(u(),f(t(h),{vertical:"",size:"large"},{default:a(()=>{var r,c;return[o(t(g),{size:"large",type:"primary",onClick:w,block:""},{default:a(()=>[l("Go to login")]),_:1}),o(t(g),{size:"large",type:"info",onClick:P,block:"",loading:i.value,disabled:!!s.value},{default:a(()=>[l("Scan QrCode ")]),_:1},8,["loading","disabled"]),(r=s.value)!=null&&r.error?(u(),f(t(y),{key:0,title:"Error",type:"error"},{default:a(()=>[l(S(s.value.error),1)]),_:1})):v("v-if",!0),(c=s.value)!=null&&c.qrCodeUrl?(u(),f(t(h),{key:1,vertical:""},{default:a(()=>[o(t(h),{justify:"center"},{default:a(()=>[o(t(R),{width:"300",src:s.value.qrCodeUrl},null,8,["src"])]),_:1}),o(t(y),{title:"Scan the QrCode",type:"info"},{default:a(()=>[l("Use AliyunDrive APP To Scan Then Click the Button Below")]),_:1}),o(t(g),{size:"large",onClick:x,type:"info",block:"",loading:m.value},{default:a(()=>[l("I have scan")]),_:1},8,["loading"])]),_:1})):v("v-if",!0),p.value&&p.value.status!=="LoginSuccess"?(u(),f(t(y),{key:2,title:"Warning",type:"warning"},{default:a(()=>[l(S(p.value.status),1)]),_:1})):v("v-if",!0)]}),_:1}))}});const L=b(T,[["__scopeId","data-v-2145f3c9"],["__file","Request.vue"]]),E=q({__name:"request.html",setup(d){return(w,s)=>{const i=B("NaiveClient");return u(),I("div",null,[o(i,null,{default:a(()=>[o(t(L))]),_:1})])}}}),F=b(E,[["__file","request.html.vue"]]);export{F as default};