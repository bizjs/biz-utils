import React, { useState } from 'react';
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
