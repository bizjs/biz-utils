const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/IsURL_1.fbWHEFcE.js","assets/chunks/index.8eXSU4Wm.js","assets/chunks/framework.TVOr6Jn9.js","assets/chunks/row.DB6eLNzN.js","assets/chunks/index.jLY0io2z.js","assets/chunks/formRules.CNJZAt_H.js","assets/chunks/IsIpV6_1.kdLBF0-m.js","assets/chunks/IsIpV4_1.DrXmoVu7.js","assets/chunks/IsIdCardNo_1.B0mAqqxF.js","assets/chunks/IsEmail_1.DnE7X6Ar.js","assets/chunks/IsChinesePhoneNumber_1.C9t6S9WP.js","assets/chunks/IsChineseLandlineNumber_1.Dt9TO5om.js"])))=>i.map(i=>d[i]);
import{D as u,v as i,af as d,p as y,C as W,c as k,o as M,ae as X,ag as m,G as l,j as a,ah as c,k as t,w as p,a as n}from"./chunks/framework.TVOr6Jn9.js";import{R as h,k as C,r as f,c as b}from"./chunks/index.8eXSU4Wm.js";const T=`import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { isURL } from '@bizjs/biz-utils';

export default () => {
  const [text, setText] = useState('');
  const [judgeResult, setJudgeResult] = useState(false);

  function handleBtnClick() {
    const result = isURL(text);
    setJudgeResult(result);
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={text}
            placeholder="请输入要判断的内容"
            onChange={e => setText(e.target.value)}
            style={{ width: 'calc(100% - 160px)' }}
          />
          <Button type="primary" onClick={handleBtnClick} style={{ width: 160 }}>
            是否是 URL
          </Button>
        </Input.Group>
      </Col>
      <Col style={{ lineHeight: '32px' }}>判断结果：{String(judgeResult)}</Col>
    </Row>
  );
};
`,D=`import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { isIpV6 } from '@bizjs/biz-utils';

export default () => {
  const [text, setText] = useState('1030::C9B4:FF12:48AA:1A2B');
  const [judgeResult, setJudgeResult] = useState(false);

  function handleBtnClick() {
    const result = isIpV6(text);
    setJudgeResult(result);
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={text}
            placeholder="请输入要判断的内容"
            onChange={e => setText(e.target.value)}
            style={{ width: 'calc(100% - 160px)' }}
          />
          <Button type="primary" onClick={handleBtnClick} style={{ width: 160 }}>
            是否是 IP V6
          </Button>
        </Input.Group>
      </Col>
      <Col style={{ lineHeight: '32px' }}>判断结果：{String(judgeResult)}</Col>
    </Row>
  );
};
`,E=`import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { isIpV4 } from '@bizjs/biz-utils';

export default () => {
  const [text, setText] = useState('');
  const [judgeResult, setJudgeResult] = useState(false);

  function handleBtnClick() {
    const result = isIpV4(text);
    setJudgeResult(result);
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={text}
            placeholder="请输入要判断的内容"
            onChange={e => setText(e.target.value)}
            style={{ width: 'calc(100% - 160px)' }}
          />
          <Button type="primary" onClick={handleBtnClick} style={{ width: 160 }}>
            是否是 IP V4
          </Button>
        </Input.Group>
      </Col>
      <Col style={{ lineHeight: '32px' }}>判断结果：{String(judgeResult)}</Col>
    </Row>
  );
};
`,I=`import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { isIdCardNo } from '@bizjs/biz-utils';

export default () => {
  const [text, setText] = useState('');
  const [judgeResult, setJudgeResult] = useState(false);

  function handleBtnClick() {
    const result = isIdCardNo(text);
    setJudgeResult(result);
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={text}
            placeholder="请输入要判断的内容"
            onChange={e => setText(e.target.value)}
            style={{ width: 'calc(100% - 160px)' }}
          />
          <Button type="primary" onClick={handleBtnClick} style={{ width: 160 }}>
            是否是身份证号
          </Button>
        </Input.Group>
      </Col>
      <Col style={{ lineHeight: '32px' }}>判断结果：{String(judgeResult)}</Col>
    </Row>
  );
};
`,_=`import React, { useState } from 'react';
import { Row, Col, Input, Button, message } from 'antd';
import { isEmail } from '@bizjs/biz-utils';

export default () => {
  const [text, setText] = useState('');
  const [judgeResult, setJudgeResult] = useState(false);

  function handleBtnClick() {
    const result = isEmail(text);
    setJudgeResult(result);
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={text}
            placeholder="请输入要判断的内容"
            onChange={e => setText(e.target.value)}
            style={{ width: 'calc(100% - 160px)' }}
          />
          <Button type="primary" onClick={handleBtnClick} style={{ width: 160 }}>
            是否是邮箱地址
          </Button>
        </Input.Group>
      </Col>
      <Col style={{ lineHeight: '32px' }}>判断结果：{String(judgeResult)}</Col>
    </Row>
  );
};
`,L=`import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { isChinesePhoneNumber } from '@bizjs/biz-utils';

export default () => {
  const [text, setText] = useState('');
  const [judgeResult, setJudgeResult] = useState(false);

  function handleBtnClick() {
    const result = isChinesePhoneNumber(text);
    setJudgeResult(result);
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={text}
            placeholder="请输入要判断的内容"
            onChange={e => setText(e.target.value)}
            style={{ width: 'calc(100% - 160px)' }}
          />
          <Button type="primary" onClick={handleBtnClick} style={{ width: 160 }}>
            是否是手机号码
          </Button>
        </Input.Group>
      </Col>
      <Col style={{ lineHeight: '32px' }}>判断结果：{String(judgeResult)}</Col>
    </Row>
  );
};
`,A=`import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { isChineseLandlineNumber } from '@bizjs/biz-utils';

export default () => {
  const [text, setText] = useState('');
  const [judgeResult, setJudgeResult] = useState(false);

  function handleBtnClick() {
    const result = isChineseLandlineNumber(text);
    setJudgeResult(result);
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={text}
            placeholder="请输入要判断的内容"
            onChange={e => setText(e.target.value)}
            style={{ width: 'calc(100% - 160px)' }}
          />
          <Button type="primary" onClick={handleBtnClick} style={{ width: 160 }}>
            是否是座机号码
          </Button>
        </Input.Group>
      </Col>
      <Col style={{ lineHeight: '32px' }}>判断结果：{String(judgeResult)}</Col>
    </Row>
  );
};
`,z=JSON.parse('{"title":"Form Rules","description":"","frontmatter":{"title":"Form Rules","order":15},"headers":[],"relativePath":"modules/form-rules.md","filePath":"modules/form-rules.md"}'),J={name:"modules/form-rules.md"},P=Object.assign(J,{setup(N){const v=u();i(async()=>{v.value=(await d(async()=>{const{default:r}=await import("./chunks/IsURL_1.fbWHEFcE.js");return{default:r}},__vite__mapDeps([0,1,2,3,4,5]))).default});const x=u();i(async()=>{x.value=(await d(async()=>{const{default:r}=await import("./chunks/IsIpV6_1.kdLBF0-m.js");return{default:r}},__vite__mapDeps([6,1,2,3,4,5]))).default});const R=u();i(async()=>{R.value=(await d(async()=>{const{default:r}=await import("./chunks/IsIpV4_1.DrXmoVu7.js");return{default:r}},__vite__mapDeps([7,1,2,3,4,5]))).default});const V=u();i(async()=>{V.value=(await d(async()=>{const{default:r}=await import("./chunks/IsIdCardNo_1.B0mAqqxF.js");return{default:r}},__vite__mapDeps([8,1,2,3,4,5]))).default});const B=u();i(async()=>{B.value=(await d(async()=>{const{default:r}=await import("./chunks/IsEmail_1.DnE7X6Ar.js");return{default:r}},__vite__mapDeps([9,1,2,3,4,5]))).default});const w=u();i(async()=>{w.value=(await d(async()=>{const{default:r}=await import("./chunks/IsChinesePhoneNumber_1.C9t6S9WP.js");return{default:r}},__vite__mapDeps([10,1,2,3,4,5]))).default});const o=y(!0),g=u();return i(async()=>{g.value=(await d(async()=>{const{default:r}=await import("./chunks/IsChineseLandlineNumber_1.Dt9TO5om.js");return{default:r}},__vite__mapDeps([11,1,2,3,4,5]))).default}),(r,e)=>{const s=W("ClientOnly");return M(),k("div",null,[e[7]||(e[7]=X("",4)),m(l(t(h),null,null,512),[[c,o.value]]),l(s,null,{default:p(()=>[l(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),reactCode:t(A),reactComponent:g.value,reactCreateRoot:t(b),reactCreateElement:t(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[8]||(e[8]=a("h2",{id:"ischinesephonenumber-手机号码",tabindex:"-1"},[n("isChinesePhoneNumber 手机号码 "),a("a",{class:"header-anchor",href:"#ischinesephonenumber-手机号码","aria-label":'Permalink to "isChinesePhoneNumber 手机号码"'},"​")],-1)),e[9]||(e[9]=a("p",null,"判断是否是国内手机号码",-1)),e[10]||(e[10]=a("h3",{id:"样例-1",tabindex:"-1"},[n("样例 "),a("a",{class:"header-anchor",href:"#样例-1","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(h),null,null,512),[[c,o.value]]),l(s,null,{default:p(()=>[l(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),reactCode:t(L),reactComponent:w.value,reactCreateRoot:t(b),reactCreateElement:t(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[11]||(e[11]=a("h2",{id:"isemail-邮箱",tabindex:"-1"},[n("IsEmail 邮箱 "),a("a",{class:"header-anchor",href:"#isemail-邮箱","aria-label":'Permalink to "IsEmail 邮箱"'},"​")],-1)),e[12]||(e[12]=a("p",null,"判断是否是邮箱地址",-1)),e[13]||(e[13]=a("h3",{id:"样例-2",tabindex:"-1"},[n("样例 "),a("a",{class:"header-anchor",href:"#样例-2","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(h),null,null,512),[[c,o.value]]),l(s,null,{default:p(()=>[l(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),reactCode:t(_),reactComponent:B.value,reactCreateRoot:t(b),reactCreateElement:t(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[14]||(e[14]=a("h2",{id:"isidcardno-身份证号",tabindex:"-1"},[n("isIdCardNo 身份证号 "),a("a",{class:"header-anchor",href:"#isidcardno-身份证号","aria-label":'Permalink to "isIdCardNo 身份证号"'},"​")],-1)),e[15]||(e[15]=a("p",null,"判断是否是中国身份证号",-1)),e[16]||(e[16]=a("h3",{id:"样例-3",tabindex:"-1"},[n("样例 "),a("a",{class:"header-anchor",href:"#样例-3","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(h),null,null,512),[[c,o.value]]),l(s,null,{default:p(()=>[l(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),reactCode:t(I),reactComponent:V.value,reactCreateRoot:t(b),reactCreateElement:t(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[17]||(e[17]=a("h2",{id:"isipv4-ip-v4",tabindex:"-1"},[n("isIpV4 IP V4 "),a("a",{class:"header-anchor",href:"#isipv4-ip-v4","aria-label":'Permalink to "isIpV4 IP V4"'},"​")],-1)),e[18]||(e[18]=a("p",null,"判断是否是 IP V4",-1)),e[19]||(e[19]=a("h3",{id:"样例-4",tabindex:"-1"},[n("样例 "),a("a",{class:"header-anchor",href:"#样例-4","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(h),null,null,512),[[c,o.value]]),l(s,null,{default:p(()=>[l(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[4]||(e[4]=()=>{o.value=!1}),reactCode:t(E),reactComponent:R.value,reactCreateRoot:t(b),reactCreateElement:t(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[20]||(e[20]=a("h2",{id:"isipv6-ip-v6",tabindex:"-1"},[n("isIpV6 IP V6 "),a("a",{class:"header-anchor",href:"#isipv6-ip-v6","aria-label":'Permalink to "isIpV6 IP V6"'},"​")],-1)),e[21]||(e[21]=a("p",null,"判断是否是 IP V6",-1)),e[22]||(e[22]=a("h3",{id:"样例-5",tabindex:"-1"},[n("样例 "),a("a",{class:"header-anchor",href:"#样例-5","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(h),null,null,512),[[c,o.value]]),l(s,null,{default:p(()=>[l(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[5]||(e[5]=()=>{o.value=!1}),reactCode:t(D),reactComponent:x.value,reactCreateRoot:t(b),reactCreateElement:t(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),e[23]||(e[23]=a("h2",{id:"isurl-网址",tabindex:"-1"},[n("isURL 网址 "),a("a",{class:"header-anchor",href:"#isurl-网址","aria-label":'Permalink to "isURL 网址"'},"​")],-1)),e[24]||(e[24]=a("p",null,"判断是否是网址",-1)),e[25]||(e[25]=a("h3",{id:"样例-6",tabindex:"-1"},[n("样例 "),a("a",{class:"header-anchor",href:"#样例-6","aria-label":'Permalink to "样例"'},"​")],-1)),m(l(t(h),null,null,512),[[c,o.value]]),l(s,null,{default:p(()=>[l(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[6]||(e[6]=()=>{o.value=!1}),reactCode:t(T),reactComponent:v.value,reactCreateRoot:t(b),reactCreateElement:t(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1})])}}});export{z as __pageData,P as default};
