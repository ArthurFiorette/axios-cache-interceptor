import{u as i,c as l}from"./theme.iUfAk3PE.js";import{d as p,h as f,y as t,j as u,o as _,c as m,_ as b}from"./framework.GgSRXTh9.js";const v=p({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const{page:d}=i(),a=r.carbonAds,{isAsideEnabled:s}=l(),o=f();let n=!1;function c(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${a.code}&placement=${a.placement}`,e.async=!0,o.value.appendChild(e)}}return t(()=>d.value.relativePath,()=>{var e;n&&s.value&&((e=window._carbonads)==null||e.refresh())}),a&&u(()=>{s.value?c():t(s,e=>e&&c())}),(e,h)=>(_(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}}),j=b(v,[["__scopeId","data-v-0a7daecf"]]);export{j as default};
