const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/NumberDiv_1.C_ZxuFXz.js","assets/chunks/index.DEiLmAtD.js","assets/chunks/framework.FZ064_OV.js","assets/chunks/index.DVBQckXg.js","assets/chunks/index.ioe89niu.js","assets/chunks/NumberMul_1.DgFqcqa9.js","assets/chunks/NumberSub_1.Cceh7qrB.js","assets/chunks/NumberAdd_1.Bwwb6-bt.js"])))=>i.map(i=>d[i]);
import{v as s,a1 as i,C as W,o as g,c as X,a0 as _,a2 as m,a3 as d,E as l,k as t,w as c,j as a,a as r,G as p,p as T}from"./chunks/framework.FZ064_OV.js";import{I as b,$ as h,r as y,c as C}from"./chunks/index.DEiLmAtD.js";const x=`import React, { useState } from 'react';
import { Row, Col, Input, Button, Space } from 'antd';
import { numberDiv } from '@bizjs/biz-utils';

export default () => {
  const [num1, setNum1] = useState('0.1');
  const [num2, setNum2] = useState('0.2');
  const [total, setTotal] = useState('');

  function doCalc() {
    const result = numberDiv(num1, num2);
    setTotal(result);
  }
  return (
    <Row>
      <Col span={24}>
        <Space.Compact>
          <Input
            value={num1}
            placeholder="第一个操作数"
            onChange={e => setNum1(e.target.value)}
            style={{ width: 150 }}
          />
          <span style={{ textAlign: 'center', width: 20, lineHeight: '32px' }}>÷</span>
          <Input
            value={num2}
            placeholder="第二个操作数"
            onChange={e => setNum2(e.target.value)}
            style={{ width: 150 }}
          />
          <Button type="primary" onClick={doCalc} style={{ width: 40, marginLeft: 10, marginRight: 10 }}>
            =
          </Button>
          <Input readOnly value={total} style={{ width: 200 }} />
        </Space.Compact>
      </Col>
    </Row>
  );
};
`,S=`import React, { useState } from 'react';
import { Row, Col, Input, Button, Space } from 'antd';
import { numberMul } from '@bizjs/biz-utils';

export default () => {
  const [num1, setNum1] = useState('0.1');
  const [num2, setNum2] = useState('0.1');
  const [total, setTotal] = useState('');

  function doCalc() {
    const result = numberMul(num1, num2);
    setTotal(result);
  }
  return (
    <Row>
      <Col span={24}>
        <Space.Compact>
          <Input
            value={num1}
            placeholder="第一个操作数"
            onChange={e => setNum1(e.target.value)}
            style={{ width: 150 }}
          />
          <span style={{ textAlign: 'center', width: 20, lineHeight: '32px' }}>×</span>
          <Input
            value={num2}
            placeholder="第二个操作数"
            onChange={e => setNum2(e.target.value)}
            style={{ width: 150 }}
          />
          <Button type="primary" onClick={doCalc} style={{ width: 40, marginLeft: 10, marginRight: 10 }}>
            =
          </Button>
          <Input readOnly value={total} style={{ width: 200 }} />
        </Space.Compact>
      </Col>
    </Row>
  );
};
`,V=`import React, { useState } from 'react';
import { Row, Col, Input, Button, Space } from 'antd';
import { numberSub } from '@bizjs/biz-utils';

export default () => {
  const [num1, setNum1] = useState('0.2');
  const [num2, setNum2] = useState('0.1');
  const [total, setTotal] = useState('');

  function doCalc() {
    const result = numberSub(num1, num2);
    setTotal(result);
  }
  return (
    <Row>
      <Col span={24}>
        <Space.Compact>
          <Input
            value={num1}
            placeholder="第一个操作数"
            onChange={e => setNum1(e.target.value)}
            style={{ width: 150 }}
          />
          <span style={{ textAlign: 'center', width: 20, lineHeight: '32px' }}>-</span>
          <Input
            value={num2}
            placeholder="第二个操作数"
            onChange={e => setNum2(e.target.value)}
            style={{ width: 150 }}
          />
          <Button type="primary" onClick={doCalc} style={{ width: 40, marginLeft: 10, marginRight: 10 }}>
            =
          </Button>
          <Input readOnly value={total} style={{ width: 200 }} />
        </Space.Compact>
      </Col>
    </Row>
  );
};
`,B=`import React, { useState } from 'react';
import { Row, Col, Input, Button, Space } from 'antd';
import { numberAdd } from '@bizjs/biz-utils';

export default () => {
  const [num1, setNum1] = useState('0.1');
  const [num2, setNum2] = useState('0.2');
  const [total, setTotal] = useState('');

  function doCalc() {
    const result = numberAdd(num1, num2);
    setTotal(result);
  }
  return (
    <Row>
      <Col span={24}>
        <Space.Compact>
          <Input
            value={num1}
            placeholder="第一个操作数"
            onChange={e => setNum1(e.target.value)}
            style={{ width: 150 }}
          />
          <span style={{ textAlign: 'center', width: 20, lineHeight: '32px' }}>+</span>
          <Input
            value={num2}
            placeholder="第二个操作数"
            onChange={e => setNum2(e.target.value)}
            style={{ width: 150 }}
          />
          <Button type="primary" onClick={doCalc} style={{ width: 40, marginLeft: 10, marginRight: 10 }}>
            =
          </Button>
          <Input readOnly value={total} style={{ width: 200 }} />
        </Space.Compact>
      </Col>
    </Row>
  );
};
`,M=JSON.parse('{"title":"Number Utils","description":"","frontmatter":{"title":"Number Utils","order":50},"headers":[],"relativePath":"modules/numeral-utils.md","filePath":"modules/numeral-utils.md"}'),E={name:"modules/numeral-utils.md"},I=Object.assign(E,{setup(k){const f=p();s(async()=>{f.value=(await i(async()=>{const{default:n}=await import("./chunks/NumberDiv_1.C_ZxuFXz.js");return{default:n}},__vite__mapDeps([0,1,2,3,4]))).default});const v=p();s(async()=>{v.value=(await i(async()=>{const{default:n}=await import("./chunks/NumberMul_1.DgFqcqa9.js");return{default:n}},__vite__mapDeps([5,1,2,3,4]))).default});const R=p();s(async()=>{R.value=(await i(async()=>{const{default:n}=await import("./chunks/NumberSub_1.Cceh7qrB.js");return{default:n}},__vite__mapDeps([6,1,2,3,4]))).default});const o=T(!0),w=p();return s(async()=>{w.value=(await i(async()=>{const{default:n}=await import("./chunks/NumberAdd_1.Bwwb6-bt.js");return{default:n}},__vite__mapDeps([7,1,2,3,4]))).default}),(n,e)=>{const u=W("ClientOnly");return g(),X("div",null,[e[4]||(e[4]=_('<h1 id="数字类业务工具函数" tabindex="-1">数字类业务工具函数 <a class="header-anchor" href="#数字类业务工具函数" aria-label="Permalink to &quot;数字类业务工具函数&quot;">​</a></h1><h2 id="numberadd-数值加法" tabindex="-1">numberAdd 数值加法 <a class="header-anchor" href="#numberadd-数值加法" aria-label="Permalink to &quot;numberAdd 数值加法&quot;">​</a></h2><p>加法运算</p><h3 id="样例" tabindex="-1">样例 <a class="header-anchor" href="#样例" aria-label="Permalink to &quot;样例&quot;">​</a></h3>',4)),m(l(t(b),null,null,512),[[d,o.value]]),l(u,null,{default:c(()=>[l(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),reactCode:t(B),reactComponent:w.value,reactCreateRoot:t(C.createRoot),reactCreateElement:t(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[5]||(e[5]=a("h2",{id:"numbersub-数值减法",tabindex:"-1"},[r("numberSub 数值减法 "),a("a",{class:"header-anchor",href:"#numbersub-数值减法","aria-label":'Permalink to "numberSub 数值减法"'},"​")],-1)),e[6]||(e[6]=a("p",null,"减法运算",-1)),e[7]||(e[7]=a("h3",{id:"样例-1",tabindex:"-1"},[r("样例 "),a("a",{class:"header-anchor",href:"#样例-1","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(b),null,null,512),[[d,o.value]]),l(u,null,{default:c(()=>[l(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),reactCode:t(V),reactComponent:R.value,reactCreateRoot:t(C.createRoot),reactCreateElement:t(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[8]||(e[8]=a("h2",{id:"numbermul-数值乘法",tabindex:"-1"},[r("numberMul 数值乘法 "),a("a",{class:"header-anchor",href:"#numbermul-数值乘法","aria-label":'Permalink to "numberMul 数值乘法"'},"​")],-1)),e[9]||(e[9]=a("p",null,"乘法运算",-1)),e[10]||(e[10]=a("h3",{id:"样例-2",tabindex:"-1"},[r("样例 "),a("a",{class:"header-anchor",href:"#样例-2","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(b),null,null,512),[[d,o.value]]),l(u,null,{default:c(()=>[l(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),reactCode:t(S),reactComponent:v.value,reactCreateRoot:t(C.createRoot),reactCreateElement:t(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[11]||(e[11]=a("h2",{id:"numberdiv-数值除法",tabindex:"-1"},[r("numberDiv 数值除法 "),a("a",{class:"header-anchor",href:"#numberdiv-数值除法","aria-label":'Permalink to "numberDiv 数值除法"'},"​")],-1)),e[12]||(e[12]=a("p",null,"除法运算",-1)),e[13]||(e[13]=a("h3",{id:"样例-3",tabindex:"-1"},[r("样例 "),a("a",{class:"header-anchor",href:"#样例-3","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(b),null,null,512),[[d,o.value]]),l(u,null,{default:c(()=>[l(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),reactCode:t(x),reactComponent:f.value,reactCreateRoot:t(C.createRoot),reactCreateElement:t(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1})])}}});export{M as __pageData,I as default};
