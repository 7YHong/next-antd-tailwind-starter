import { UserOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import defaultProps from './_defaultProps';

import Loading from '../loading';

const { ProLayout, PageContainer, SettingDrawer } = {
  ProLayout: dynamic(
    () => import('@ant-design/pro-components').then((pro) => pro.ProLayout),
    { ssr: false, loading: () => <Loading /> }
  ),
  PageContainer: dynamic(() =>
    import('@ant-design/pro-components').then((pro) => pro.PageContainer)
  ),
  SettingDrawer: dynamic(() =>
    import('@ant-design/pro-components').then((pro) => pro.SettingDrawer)
  ),
};

const Layout = ({ children }) => {
  const [settings, setSetting] = useState({
    fixSiderbar: true,
  });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <ProLayout
      {...defaultProps}
      title="发票打印"
      location={{
        pathname,
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
      avatarProps={{
        icon: <UserOutlined />,
        style: { backgroundColor: '#87d068' },
      }}
      {...settings}
    >
      <PageContainer
        waterMarkProps={{
          content: 'Pro Layout',
        }}
      >
        {children}
      </PageContainer>
    </ProLayout>
  );
};

export default Layout;
