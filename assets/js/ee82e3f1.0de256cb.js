"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[4940],{6508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"Cambria FTC/API/methods/GetMachineInfo","title":"GetMachineInfo","description":"Broadcast Manager Endpoint:","source":"@site/docs/Cambria FTC/03-API/methods/GetMachineInfo.md","sourceDirName":"Cambria FTC/03-API/methods","slug":"/Cambria FTC/API/methods/GetMachineInfo","permalink":"/CapellaDocumentsNewTest/docs/Cambria FTC/API/methods/GetMachineInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/03-API/methods/GetMachineInfo.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"GetEventsList","permalink":"/CapellaDocumentsNewTest/docs/Cambria FTC/API/methods/GetEventsList"},"next":{"title":"GetMachinesList","permalink":"/CapellaDocumentsNewTest/docs/Cambria FTC/API/methods/GetMachinesList"}}');var r=n(4848),i=n(8453);const d={},c="GetMachineInfo",a={},h=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"HTTP Method",id:"http-method",level:2},{value:"HTTP XML Response",id:"http-xml-response",level:2},{value:"HTTP Status Codes",id:"http-status-codes",level:2}];function o(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getmachineinfo",children:"GetMachineInfo"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Broadcast Manager Endpoint:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"http://machineName:8753/CambriaBM/v1/Machines/[MachineID]"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Stream Manager Endpoint:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"http://machineName:8757/CambriaLM/v1/Machines/[MachineID]"})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Retrieve detailed information about a specified machine, including its status, IP address, system uptime, license information, and other attributes."}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"No arguments."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"http-method",children:"HTTP Method"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"GET"})}),"\n",(0,r.jsx)(t.h2,{id:"http-xml-response",children:"HTTP XML Response"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element"}),(0,r.jsx)(t.th,{children:"Parent"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Content"})}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"Container of the response"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Status"})}),(0,r.jsx)(t.td,{children:"Content"}),(0,r.jsx)(t.td,{children:"Logs of the API call"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ServerRequest"})}),(0,r.jsx)(t.td,{children:"Status"}),(0,r.jsx)(t.td,{children:"Information about the request"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Error"})}),(0,r.jsx)(t.td,{children:"Status"}),(0,r.jsx)(t.td,{children:"Information about errors, if any exist"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Machine"})}),(0,r.jsx)(t.td,{children:"Content"}),(0,r.jsx)(t.td,{children:"Contains detailed information about the machine"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"http-status-codes",children:"HTTP Status Codes"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200"}),(0,r.jsx)(t.td,{children:"Successfully processed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"400"}),(0,r.jsx)(t.td,{children:"Invalid parameters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Machine not found"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5xx"}),(0,r.jsx)(t.td,{children:"Unable to retrieve machine info due to server error"})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);