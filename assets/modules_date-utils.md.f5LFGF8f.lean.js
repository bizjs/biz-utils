const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/GetTDate_1.Bs7OV_1t.js","assets/chunks/index.DEiLmAtD.js","assets/chunks/framework.FZ064_OV.js","assets/chunks/index.DVBQckXg.js","assets/chunks/FormatDate_1.1EJJVWzA.js"])))=>i.map(i=>d[i]);
import{v as i,a1 as d,C as R,o as D,c as T,a0 as u,a2 as c,a3 as m,E as a,k as e,w as f,G as p,p as v}from"./chunks/framework.FZ064_OV.js";import{I as h,$ as _,r as b,c as C}from"./chunks/index.DEiLmAtD.js";const y=`import React from 'react';
import { Row, Col } from 'antd';
import { getTDate, formatDate } from '@bizjs/biz-utils';

export default () => {
  return (
    <Row>
      <Col span={6}>T + 2 的日期：{formatDate(getTDate(2), 'date')}</Col>
      <Col span={6}>T - 2 的日期：{formatDate(getTDate(-2), 'date')}</Col>
    </Row>
  );
};
`,x=`import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { formatDate } from '@bizjs/biz-utils';

export default () => {
  const [d, setD] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setD(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Row>
      <Col span={6}>{formatDate(d, 'datetime')}</Col>
      <Col span={6}>{formatDate(d, 'date')}</Col>
      <Col span={6}>{formatDate(d, 'time')}</Col>
      <Col span={6}>{formatDate(d, 'YYYY/MM/DD HH:mm:ss.SSS')}</Col>
    </Row>
  );
};
`,V=JSON.parse('{"title":"Date Utils","description":"","frontmatter":{"title":"Date Utils","order":10},"headers":[],"relativePath":"modules/date-utils.md","filePath":"modules/date-utils.md"}'),W={name:"modules/date-utils.md"},X=Object.assign(W,{setup(k){const r=p();i(async()=>{r.value=(await d(async()=>{const{default:l}=await import("./chunks/GetTDate_1.Bs7OV_1t.js");return{default:l}},__vite__mapDeps([0,1,2,3]))).default});const o=v(!0),n=p();return i(async()=>{n.value=(await d(async()=>{const{default:l}=await import("./chunks/FormatDate_1.1EJJVWzA.js");return{default:l}},__vite__mapDeps([4,1,2,3]))).default}),(l,t)=>{const s=R("ClientOnly");return D(),T("div",null,[t[2]||(t[2]=u("",6)),c(a(e(h),null,null,512),[[m,o.value]]),a(s,null,{default:f(()=>[a(e(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),reactCode:e(x),reactComponent:n.value,reactCreateRoot:e(C.createRoot),reactCreateElement:e(b.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[3]||(t[3]=u("",5)),c(a(e(h),null,null,512),[[m,o.value]]),a(s,null,{default:f(()=>[a(e(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),reactCode:e(y),reactComponent:r.value,reactCreateRoot:e(C.createRoot),reactCreateElement:e(b.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1})])}}});export{V as __pageData,X as default};
