import React, { useState } from 'react';
import { Row, Col, Input, Button, message } from 'antd';
import 'antd/dist/antd.less';
import { numberDiv } from '@bizjs/biz-utils';

export default () => {
  const [num1, setNum1] = useState('0.1');
  const [num2, setNum2] = useState('0.2');
  const [total, setTotal] = useState('');

  function doCalc() {
    const result = numberDiv(num1, num2);
    setTotal(result);
  }
  return (
    <Row>
      <Col span={24}>
        <Input.Group compact>
          <Input
            value={num1}
            placeholder="第一个操作数"
            onChange={e => setNum1(e.target.value)}
            style={{ width: 150 }}
          />
          <span style={{ textAlign: 'center', width: 20, lineHeight: '32px' }}>÷</span>
          <Input
            value={num2}
            placeholder="第二个操作数"
            onChange={e => setNum2(e.target.value)}
            style={{ width: 150 }}
          />
          <Button type="primary" onClick={doCalc} style={{ width: 40, marginLeft: 10, marginRight: 10 }}>
            =
          </Button>
          <Input disabled value={total} style={{ width: 200 }} />
        </Input.Group>
      </Col>
    </Row>
  );
};
