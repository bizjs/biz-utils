import React, { Fragment, useState } from 'react';
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
