import React, { useState } from 'react';
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
