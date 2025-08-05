const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/GetTDate_1.DQfCAIim.js","assets/chunks/index.8eXSU4Wm.js","assets/chunks/framework.TVOr6Jn9.js","assets/chunks/row.DB6eLNzN.js","assets/chunks/dateUtils.iM9ePSmG.js","assets/chunks/FormatDate_1.CvKZ-eXq.js"])))=>i.map(i=>d[i]);
import{D as i,v as d,af as m,p as R,C as b,c as v,o as T,ae as c,ag as u,G as a,ah as f,k as e,w as h}from"./chunks/framework.TVOr6Jn9.js";import{R as _,k as p,r as C,c as D}from"./chunks/index.8eXSU4Wm.js";const V=`import React from 'react';
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
`,k=`import React, { useEffect, useState } from 'react';
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
`,W=JSON.parse('{"title":"Date Utils","description":"","frontmatter":{"title":"Date Utils","order":10},"headers":[],"relativePath":"modules/date-utils.md","filePath":"modules/date-utils.md"}'),w={name:"modules/date-utils.md"},A=Object.assign(w,{setup(x){const r=i();d(async()=>{r.value=(await m(async()=>{const{default:o}=await import("./chunks/GetTDate_1.DQfCAIim.js");return{default:o}},__vite__mapDeps([0,1,2,3,4]))).default});const l=R(!0),n=i();return d(async()=>{n.value=(await m(async()=>{const{default:o}=await import("./chunks/FormatDate_1.CvKZ-eXq.js");return{default:o}},__vite__mapDeps([5,1,2,3,4]))).default}),(o,t)=>{const s=b("ClientOnly");return T(),v("div",null,[t[2]||(t[2]=c("",6)),u(a(e(_),null,null,512),[[f,l.value]]),a(s,null,{default:h(()=>[a(e(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),reactCode:e(k),reactComponent:n.value,reactCreateRoot:e(D),reactCreateElement:e(C.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[3]||(t[3]=c("",5)),u(a(e(_),null,null,512),[[f,l.value]]),a(s,null,{default:h(()=>[a(e(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[1]||(t[1]=()=>{l.value=!1}),reactCode:e(V),reactComponent:r.value,reactCreateRoot:e(D),reactCreateElement:e(C.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1})])}}});export{W as __pageData,A as default};
