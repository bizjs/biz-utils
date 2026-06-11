const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/OpenUrl_1.LBZBwGVb.js","assets/chunks/index.DEiLmAtD.js","assets/chunks/framework.FZ064_OV.js","assets/chunks/index.BP1gAohC.js","assets/chunks/index.DVBQckXg.js","assets/chunks/index.ioe89niu.js","assets/chunks/GetQuery_1.Cr2LZONw.js","assets/chunks/DownloadBlob_1.D6Bzn4Vl.js","assets/chunks/useZIndex.fl-l7rph.js","assets/chunks/Download_1.CpGjDiKs.js","assets/chunks/CopyText_1.C6i5kJs3.js"])))=>i.map(i=>d[i]);
import{v as n,a1 as u,C as v,o as x,c as B,a0 as i,a2 as s,a3 as d,E as a,k as e,w as c,G as p,p as T}from"./chunks/framework.FZ064_OV.js";import{I as m,$ as h,r as y,c as b}from"./chunks/index.DEiLmAtD.js";const g=`import React, { Fragment, useState } from 'react';
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
`,W=`import React, { Fragment, useState } from 'react';
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
`,V=`import React, { useState } from 'react';
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
`,q=`import React, { useState } from 'react';
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
`,I=JSON.parse('{"title":"Browser Utils","description":"","frontmatter":{"title":"Browser Utils","order":5},"headers":[],"relativePath":"modules/browser-utils.md","filePath":"modules/browser-utils.md"}'),X={name:"modules/browser-utils.md"},M=Object.assign(X,{setup(A){const f=p();n(async()=>{f.value=(await u(async()=>{const{default:o}=await import("./chunks/OpenUrl_1.LBZBwGVb.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5]))).default});const _=p();n(async()=>{_.value=(await u(async()=>{const{default:o}=await import("./chunks/GetQuery_1.Cr2LZONw.js");return{default:o}},__vite__mapDeps([6,1,2,3,4,5]))).default});const C=p();n(async()=>{C.value=(await u(async()=>{const{default:o}=await import("./chunks/DownloadBlob_1.D6Bzn4Vl.js");return{default:o}},__vite__mapDeps([7,1,2,3,4,5,8]))).default});const R=p();n(async()=>{R.value=(await u(async()=>{const{default:o}=await import("./chunks/Download_1.CpGjDiKs.js");return{default:o}},__vite__mapDeps([9,1,2,3,4,5]))).default});const l=T(!0),w=p();return n(async()=>{w.value=(await u(async()=>{const{default:o}=await import("./chunks/CopyText_1.C6i5kJs3.js");return{default:o}},__vite__mapDeps([10,1,2,3,4,5,8]))).default}),(o,t)=>{const r=v("ClientOnly");return x(),B("div",null,[t[5]||(t[5]=i('<h1 id="浏览器相关业务工具函数" tabindex="-1">浏览器相关业务工具函数 <a class="header-anchor" href="#浏览器相关业务工具函数" aria-label="Permalink to &quot;浏览器相关业务工具函数&quot;">​</a></h1><h2 id="copytext-复制文本" tabindex="-1">copyText 复制文本 <a class="header-anchor" href="#copytext-复制文本" aria-label="Permalink to &quot;copyText 复制文本&quot;">​</a></h2><p>在浏览器中复制文本到剪贴板</p><h3 id="典型场景" tabindex="-1">典型场景 <a class="header-anchor" href="#典型场景" aria-label="Permalink to &quot;典型场景&quot;">​</a></h3><ol><li>点击按钮，复制特定文本到剪贴板</li></ol><h3 id="样例" tabindex="-1">样例 <a class="header-anchor" href="#样例" aria-label="Permalink to &quot;样例&quot;">​</a></h3>',6)),s(a(e(m),null,null,512),[[d,l.value]]),a(r,null,{default:c(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),reactCode:e(q),reactComponent:w.value,reactCreateRoot:e(b.createRoot),reactCreateElement:e(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[6]||(t[6]=i('<h2 id="download-常规下载" tabindex="-1">download 常规下载 <a class="header-anchor" href="#download-常规下载" aria-label="Permalink to &quot;download 常规下载&quot;">​</a></h2><p>通过浏览器进行文件下载</p><h3 id="典型场景-1" tabindex="-1">典型场景 <a class="header-anchor" href="#典型场景-1" aria-label="Permalink to &quot;典型场景&quot;">​</a></h3><ol><li>根据一个 URL 直接调用浏览器文件下载，使用中小型文件下载</li></ol><h3 id="样例-1" tabindex="-1">样例 <a class="header-anchor" href="#样例-1" aria-label="Permalink to &quot;样例&quot;">​</a></h3>',5)),s(a(e(m),null,null,512),[[d,l.value]]),a(r,null,{default:c(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{l.value=!1}),reactCode:e(V),reactComponent:R.value,reactCreateRoot:e(b.createRoot),reactCreateElement:e(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[7]||(t[7]=i('<h2 id="downloadblob-文件流下载" tabindex="-1">downloadBlob 文件流下载 <a class="header-anchor" href="#downloadblob-文件流下载" aria-label="Permalink to &quot;downloadBlob 文件流下载&quot;">​</a></h2><p>使用 XMLHttpRequest 下载文件 blob</p><h3 id="典型场景-2" tabindex="-1">典型场景 <a class="header-anchor" href="#典型场景-2" aria-label="Permalink to &quot;典型场景&quot;">​</a></h3><ol><li>当需要下载进度条时使用</li></ol><h3 id="样例-2" tabindex="-1">样例 <a class="header-anchor" href="#样例-2" aria-label="Permalink to &quot;样例&quot;">​</a></h3>',5)),s(a(e(m),null,null,512),[[d,l.value]]),a(r,null,{default:c(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{l.value=!1}),reactCode:e(k),reactComponent:C.value,reactCreateRoot:e(b.createRoot),reactCreateElement:e(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[8]||(t[8]=i('<h2 id="getquery-解析-url-query" tabindex="-1">getQuery 解析 URL Query <a class="header-anchor" href="#getquery-解析-url-query" aria-label="Permalink to &quot;getQuery 解析 URL Query&quot;">​</a></h2><p>解析 URL Query</p><h3 id="典型场景-3" tabindex="-1">典型场景 <a class="header-anchor" href="#典型场景-3" aria-label="Permalink to &quot;典型场景&quot;">​</a></h3><ol><li>直接获取 URL Qurey</li></ol><h3 id="样例-3" tabindex="-1">样例 <a class="header-anchor" href="#样例-3" aria-label="Permalink to &quot;样例&quot;">​</a></h3>',5)),s(a(e(m),null,null,512),[[d,l.value]]),a(r,null,{default:c(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[3]||(t[3]=()=>{l.value=!1}),reactCode:e(W),reactComponent:_.value,reactCreateRoot:e(b.createRoot),reactCreateElement:e(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[9]||(t[9]=i('<h2 id="openurl-打开地址" tabindex="-1">openUrl 打开地址 <a class="header-anchor" href="#openurl-打开地址" aria-label="Permalink to &quot;openUrl 打开地址&quot;">​</a></h2><p>打开地址</p><h3 id="典型场景-4" tabindex="-1">典型场景 <a class="header-anchor" href="#典型场景-4" aria-label="Permalink to &quot;典型场景&quot;">​</a></h3><ol><li>使用 JS 页面跳转</li><li>新窗口打开页面</li></ol><h3 id="样例-4" tabindex="-1">样例 <a class="header-anchor" href="#样例-4" aria-label="Permalink to &quot;样例&quot;">​</a></h3>',5)),s(a(e(m),null,null,512),[[d,l.value]]),a(r,null,{default:c(()=>[a(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[4]||(t[4]=()=>{l.value=!1}),reactCode:e(g),reactComponent:f.value,reactCreateRoot:e(b.createRoot),reactCreateElement:e(y.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1})])}}});export{I as __pageData,M as default};
