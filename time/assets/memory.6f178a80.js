import{_ as n,r as e,d as t,o as i,c as r,a as s,t as o}from"./index.758d4481.js";const l={class:"clock_container"},m={class:"remenber"},v={class:"tag"},u={class:"second"},f={class:"tag"},p={class:"second"},h={class:"clock_box"},y={class:"clock"},g={__name:"memory",setup(k){const c=e(""),a=e(""),_=e("");return function(){setInterval(()=>{c.value=t().format("YYYY-MM-DD HH:mm:ss"),a.value=t().diff("2023-02-23","day"),_.value=t().diff("2023-03-19","day")},1e3)}(),(d,x)=>(i(),r("div",l,[s("div",m,[s("div",v,[s("div",u,o(_.value),1)]),s("div",f,[s("div",p,o(a.value),1)])]),s("div",h,[s("div",y,o(c.value),1)])]))}},B=n(g,[["__scopeId","data-v-d57d0887"]]);export{B as default};
