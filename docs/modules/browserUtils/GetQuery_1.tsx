import React, { Fragment, useState } from 'react';
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
