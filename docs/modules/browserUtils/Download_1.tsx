import React, { useState } from 'react';
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
