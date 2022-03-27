import React, { Fragment, useState } from 'react';
import { Row, Col, Input, Button, Progress } from 'antd';
import 'antd/dist/antd.less';
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
