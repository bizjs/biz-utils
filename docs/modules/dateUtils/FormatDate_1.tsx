import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { formatDate } from '@bizjs/biz-utils';

export default () => {
  const [d, setD] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setD(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Row>
      <Col span={6}>{formatDate(d, 'datetime')}</Col>
      <Col span={6}>{formatDate(d, 'date')}</Col>
      <Col span={6}>{formatDate(d, 'time')}</Col>
      <Col span={6}>{formatDate(d, 'YYYY/MM/DD HH:mm:ss.SSS')}</Col>
    </Row>
  );
};
