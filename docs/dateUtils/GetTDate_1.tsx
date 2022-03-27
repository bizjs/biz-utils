import React from 'react';
import { Row, Col, message } from 'antd';
import 'antd/dist/antd.less';
import { getTDate, formatDate } from '@bizjs/biz-utils';

export default () => {
  return (
    <Row>
      <Col span={6}>T + 2 的日期：{formatDate(getTDate(2), 'date')}</Col>
      <Col span={6}>T - 2 的日期：{formatDate(getTDate(-2), 'date')}</Col>
    </Row>
  );
};
