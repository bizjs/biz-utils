import React, { useState } from 'react';
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
