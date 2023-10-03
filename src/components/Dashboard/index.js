import React, { memo, useState } from 'react';

import { Col, Row } from 'antd';

import DashboardAddresses from './Addresses';
import DashboardSearch from './Search';
import DashboardTransactions from './Transactions';
import AffixFC from 'antd/lib/affix';

const Dashboard = memo(() => {
  const [selectedAddress, setSelectedAddress] = useState();

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <AffixFC offsetTop={20}>
          <Row gutter={[16, 16]}>
            <DashboardSearch />
            <DashboardAddresses setSelectedAddress={setSelectedAddress} />
          </Row>
        </AffixFC>
      </Col>
      <Col span={12}>
        <DashboardTransactions
          key={selectedAddress}
          selectedAddress={selectedAddress}
        />
      </Col>
    </Row>
  );
});

export default Dashboard;
