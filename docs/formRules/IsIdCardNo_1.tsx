import React, { useState } from 'react';
import { Row, Col, Input, Button, message } from 'antd';
import 'antd/dist/antd.less';
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
