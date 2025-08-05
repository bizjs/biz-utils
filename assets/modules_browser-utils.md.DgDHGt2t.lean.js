const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/OpenUrl_1.zXE_wOFP.js","assets/chunks/index.8eXSU4Wm.js","assets/chunks/framework.TVOr6Jn9.js","assets/chunks/row.DB6eLNzN.js","assets/chunks/index.jLY0io2z.js","assets/chunks/browserUtils.DWItGC0u.js","assets/chunks/GetQuery_1.CF51tkoQ.js","assets/chunks/DownloadBlob_1.7bJT1KGQ.js","assets/chunks/useZIndex.CwbVz81H.js","assets/chunks/Download_1.Cxe0pfzQ.js","assets/chunks/CopyText_1.BDc1o6ET.js"])))=>i.map(i=>d[i]);
import{D as n,v as u,af as i,p as w,C as V,c as B,o as x,ae as s,ag as c,G as a,ah as d,k as e,w as m}from"./chunks/framework.TVOr6Jn9.js";import{R as p,k as h,r as f,c as _}from"./chunks/index.8eXSU4Wm.js";const T=`import React, { Fragment, useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { openUrl } from '@bizjs/biz-utils';

export default () => {
  const [url, setUrl] = useState('');

  function handleBtnClick() {
    openUrl(url);
  }
  return (
    <Fragment>
      <Row>
        <Col span={12}>
          <Input.Group compact>
            <Input
              value={url}
              placeholder="要打开的地址"
              onChange={e => setUrl(e.target.value)}
              style={{ width: 'calc(100% - 120px)' }}
            />
            <Button type="primary" onClick={handleBtnClick} style={{ width: 120 }}>
              点我打开 URL
            </Button>
          </Input.Group>
        </Col>
      </Row>
    </Fragment>
  );
};
`,g=`import React, { Fragment, useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { getQuery } from '@bizjs/biz-utils';

export default () => {
  const [url, setUrl] = useState('');
  const [urlQuery, setUrlQuery] = useState('');

  function handleBtnClick() {
    const query = getQuery(url);
    setUrlQuery(JSON.stringify(query));
  }

  function handleBtn2Click() {
    const query = getQuery();
    setUrlQuery(JSON.stringify(query));
  }

  return (
    <Fragment>
      <Row>
        <Col span={16}>
          <Input.Group compact>
            <Input
              value={url}
              placeholder="要获取 Query 的 URL"
              onChange={e => setUrl(e.target.value)}
              style={{ width: 'calc(100% - 310px)' }}
            />
            <Button type="primary" onClick={handleBtnClick} style={{ width: 120 }}>
              点我获取 Query
            </Button>
            <span style={{ marginLeft: 10 }}>
              <Button type="primary" onClick={handleBtn2Click} style={{ width: 180 }}>
                获取当前 URl Query
              </Button>
            </span>
          </Input.Group>
        </Col>
      </Row>
      <Row>
        <Col>{urlQuery}</Col>
      </Row>
    </Fragment>
  );
};
`,k=`import React, { Fragment, useState } from 'react';
import { Row, Col, Input, Button, Progress } from 'antd';
import { downloadBlob } from '@bizjs/biz-utils';

export default () => {
  const [fileUrl, setFileUrl] = useState('');
  const [downloadProgress, setDownloadProgress] = useState(0);

  function handleBtnClick() {
    setDownloadProgress(0);
    downloadBlob(fileUrl, {
      onProgress(total, loaded) {
        const progressVal = (loaded / total).toFixed(2);
        setDownloadProgress(Number(progressVal));
      },
    });
  }
  return (
    <Fragment>
      <Row>
        <Col span={12}>
          <Input.Group compact>
            <Input
              value={fileUrl}
              placeholder="要下载的文件地址"
              onChange={e => setFileUrl(e.target.value)}
              style={{ width: 'calc(100% - 100px)' }}
            />
            <Button type="primary" onClick={handleBtnClick} style={{ width: 100 }}>
              点我下载
            </Button>
          </Input.Group>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          下载进度：
          <Progress percent={downloadProgress} />
        </Col>
      </Row>
    </Fragment>
  );
};
`,q=`import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { download } from '@bizjs/biz-utils';

export default () => {
  const [fileUrl, setFileUrl] = useState('');

  function handleBtnClick() {
    download(fileUrl);
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={fileUrl}
            placeholder="要下载的文件地址"
            onChange={e => setFileUrl(e.target.value)}
            style={{ width: 'calc(100% - 100px)' }}
          />
          <Button type="primary" onClick={handleBtnClick} style={{ width: 100 }}>
            点我下载
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};
`,W=`import React, { useState } from 'react';
import { Row, Col, Input, Button, message } from 'antd';
import { copyText } from '@bizjs/biz-utils';

export default () => {
  const [text, setText] = useState('');

  function handleCopyBtnClick() {
    copyText(text)
      .then(() => {
        message.success('复制成功');
      })
      .catch(() => {
        message.error('复制失败');
      });
  }
  return (
    <Row>
      <Col span={12}>
        <Input.Group compact>
          <Input
            value={text}
            placeholder="输入文本进行复制"
            onChange={e => setText(e.target.value)}
            style={{ width: 'calc(100% - 100px)' }}
          />
          <Button type="primary" onClick={handleCopyBtnClick} style={{ width: 100 }}>
            复制
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};
`,E=JSON.parse('{"title":"Browser Utils","description":"","frontmatter":{"title":"Browser Utils","order":5},"headers":[],"relativePath":"modules/browser-utils.md","filePath":"modules/browser-utils.md"}'),M={name:"modules/browser-utils.md"},L=Object.assign(M,{setup(U){const C=n();u(async()=>{C.value=(await i(async()=>{const{default:o}=await import("./chunks/OpenUrl_1.zXE_wOFP.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5]))).default});const b=n();u(async()=>{b.value=(await i(async()=>{const{default:o}=await import("./chunks/GetQuery_1.CF51tkoQ.js");return{default:o}},__vite__mapDeps([6,1,2,3,4,5]))).default});const y=n();u(async()=>{y.value=(await i(async()=>{const{default:o}=await import("./chunks/DownloadBlob_1.7bJT1KGQ.js");return{default:o}},__vite__mapDeps([7,1,2,3,4,8,5]))).default});const R=n();u(async()=>{R.value=(await i(async()=>{const{default:o}=await import("./chunks/Download_1.Cxe0pfzQ.js");return{default:o}},__vite__mapDeps([9,1,2,3,4,5]))).default});const l=w(!0),v=n();return u(async()=>{v.value=(await i(async()=>{const{default:o}=await import("./chunks/CopyText_1.BDc1o6ET.js");return{default:o}},__vite__mapDeps([10,1,2,3,4,5,8]))).default}),(o,t)=>{const r=V("ClientOnly");return x(),B("div",null,[t[5]||(t[5]=s("",6)),c(a(e(p),null,null,512),[[d,l.value]]),a(r,null,{default:m(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),reactCode:e(W),reactComponent:v.value,reactCreateRoot:e(_),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[6]||(t[6]=s("",5)),c(a(e(p),null,null,512),[[d,l.value]]),a(r,null,{default:m(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[1]||(t[1]=()=>{l.value=!1}),reactCode:e(q),reactComponent:R.value,reactCreateRoot:e(_),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[7]||(t[7]=s("",5)),c(a(e(p),null,null,512),[[d,l.value]]),a(r,null,{default:m(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[2]||(t[2]=()=>{l.value=!1}),reactCode:e(k),reactComponent:y.value,reactCreateRoot:e(_),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[8]||(t[8]=s("",5)),c(a(e(p),null,null,512),[[d,l.value]]),a(r,null,{default:m(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[3]||(t[3]=()=>{l.value=!1}),reactCode:e(g),reactComponent:b.value,reactCreateRoot:e(_),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[9]||(t[9]=s("",5)),c(a(e(p),null,null,512),[[d,l.value]]),a(r,null,{default:m(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[4]||(t[4]=()=>{l.value=!1}),reactCode:e(T),reactComponent:C.value,reactCreateRoot:e(_),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1})])}}});export{E as __pageData,L as default};
