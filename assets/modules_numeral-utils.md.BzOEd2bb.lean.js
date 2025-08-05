const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/NumberDiv_1.BSPnGaH4.js","assets/chunks/index.8eXSU4Wm.js","assets/chunks/framework.TVOr6Jn9.js","assets/chunks/row.DB6eLNzN.js","assets/chunks/numeralUtils.cZYShleN.js","assets/chunks/index.jLY0io2z.js","assets/chunks/NumberMul_1.Da81DdI0.js","assets/chunks/NumberSub_1.Bk1i7SKs.js","assets/chunks/NumberAdd_1.C4bpfk_T.js"])))=>i.map(i=>d[i]);
import{D as s,v as m,af as i,p as R,C as g,c as W,o as _,ae as T,ag as d,G as l,j as a,ah as c,k as t,w as p,a as r}from"./chunks/framework.TVOr6Jn9.js";import{R as h,k as b,r as C,c as v}from"./chunks/index.8eXSU4Wm.js";const x=`import React, { useState } from 'react';
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
`,B=`import React, { useState } from 'react';
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
`,M=`import React, { useState } from 'react';
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
`,D=`import React, { useState } from 'react';
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
`,X=JSON.parse('{"title":"Number Utils","description":"","frontmatter":{"title":"Number Utils","order":50},"headers":[],"relativePath":"modules/numeral-utils.md","filePath":"modules/numeral-utils.md"}'),A={name:"modules/numeral-utils.md"},L=Object.assign(A,{setup(E){const f=s();m(async()=>{f.value=(await i(async()=>{const{default:o}=await import("./chunks/NumberDiv_1.BSPnGaH4.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5]))).default});const y=s();m(async()=>{y.value=(await i(async()=>{const{default:o}=await import("./chunks/NumberMul_1.Da81DdI0.js");return{default:o}},__vite__mapDeps([6,1,2,3,4,5]))).default});const V=s();m(async()=>{V.value=(await i(async()=>{const{default:o}=await import("./chunks/NumberSub_1.Bk1i7SKs.js");return{default:o}},__vite__mapDeps([7,1,2,3,4,5]))).default});const n=R(!0),w=s();return m(async()=>{w.value=(await i(async()=>{const{default:o}=await import("./chunks/NumberAdd_1.C4bpfk_T.js");return{default:o}},__vite__mapDeps([8,1,2,3,4,5]))).default}),(o,e)=>{const u=g("ClientOnly");return _(),W("div",null,[e[4]||(e[4]=T("",4)),d(l(t(h),null,null,512),[[c,n.value]]),l(u,null,{default:p(()=>[l(t(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),reactCode:t(D),reactComponent:w.value,reactCreateRoot:t(v),reactCreateElement:t(C.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[5]||(e[5]=a("h2",{id:"numbersub-数值减法",tabindex:"-1"},[r("numberSub 数值减法 "),a("a",{class:"header-anchor",href:"#numbersub-数值减法","aria-label":'Permalink to "numberSub 数值减法"'},"​")],-1)),e[6]||(e[6]=a("p",null,"减法运算",-1)),e[7]||(e[7]=a("h3",{id:"样例-1",tabindex:"-1"},[r("样例 "),a("a",{class:"header-anchor",href:"#样例-1","aria-label":'Permalink to "样例"'},"​")],-1)),d(l(t(h),null,null,512),[[c,n.value]]),l(u,null,{default:p(()=>[l(t(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),reactCode:t(M),reactComponent:V.value,reactCreateRoot:t(v),reactCreateElement:t(C.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[8]||(e[8]=a("h2",{id:"numbermul-数值乘法",tabindex:"-1"},[r("numberMul 数值乘法 "),a("a",{class:"header-anchor",href:"#numbermul-数值乘法","aria-label":'Permalink to "numberMul 数值乘法"'},"​")],-1)),e[9]||(e[9]=a("p",null,"乘法运算",-1)),e[10]||(e[10]=a("h3",{id:"样例-2",tabindex:"-1"},[r("样例 "),a("a",{class:"header-anchor",href:"#样例-2","aria-label":'Permalink to "样例"'},"​")],-1)),d(l(t(h),null,null,512),[[c,n.value]]),l(u,null,{default:p(()=>[l(t(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),reactCode:t(B),reactComponent:y.value,reactCreateRoot:t(v),reactCreateElement:t(C.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[11]||(e[11]=a("h2",{id:"numberdiv-数值除法",tabindex:"-1"},[r("numberDiv 数值除法 "),a("a",{class:"header-anchor",href:"#numberdiv-数值除法","aria-label":'Permalink to "numberDiv 数值除法"'},"​")],-1)),e[12]||(e[12]=a("p",null,"除法运算",-1)),e[13]||(e[13]=a("h3",{id:"样例-3",tabindex:"-1"},[r("样例 "),a("a",{class:"header-anchor",href:"#样例-3","aria-label":'Permalink to "样例"'},"​")],-1)),d(l(t(h),null,null,512),[[c,n.value]]),l(u,null,{default:p(()=>[l(t(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),reactCode:t(x),reactComponent:f.value,reactCreateRoot:t(v),reactCreateElement:t(C.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1})])}}});export{X as __pageData,L as default};
