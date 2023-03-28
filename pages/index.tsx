import React from 'react';
import { Button, Result } from 'antd';

const Home: React.FC = () => (
  <Result
    className="translate-y-1/2"
    status="success"
    title="Successfully start project!"
    subTitle="Nextjs x Antd"
    extra={[
      <Button type="primary" key="console">
        Nice!
      </Button>,
    ]}
  />
);

export default Home;
