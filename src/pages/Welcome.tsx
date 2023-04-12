import React, { useState } from 'react';
import {
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  PieChartTwoTone,
  FundTwoTone,
  DollarCircleTwoTone
} from '@ant-design/icons';
import { 
  MenuProps,
  Layout, 
  Menu, 
  theme,
  Col, 
  Row,
 } from 'antd';
import Stats from '@/components/Stats';
import Profile from '@/components/Profile';
import Controls from '@/components/Controls'; 
import Overview from '@/components/Overview';
import Activity from '@/components/Activity';
import Order from '@/components/Order';
import Products from '@/components/Products';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <AppstoreOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', '2', <TeamOutlined />),
];

const Welcome: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
       //breakpoint="sm"
       //collapsedWidth={window.innerWidth < 768 ? 0 : 80}
      collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16 }} />

        {/*  <MenuFoldOutlined  style={{ color: 'white' }}/>   */}
        <h3 style={{ margin: 16, color: 'grey' }}>MENU</h3>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header>
          <Row>
            <Col className={'title'} span={16}>
              <h2>Dashboard</h2>
            </Col>
            <Controls/>
          </Row>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col lg={18} md={24}>
                <Row align={'top'}>
                  <Col className='maxWidth' lg={8} md={24}>
                    <Stats name={'Revenue'} value={'$21,456'} icon={<PieChartTwoTone/>} percent={'+2.65%'} />      
                  </Col>
                  <Col className='maxWidth' lg={8} md={24}>
                    <Stats name={'Orders'} value={'5,643'} icon={<FundTwoTone/>} percent={'-0.82%'} />      
                  </Col>
                  <Col className='maxWidth' lg={8} md={24}>
                    <Stats name={'Customers'} value={'45,254'} icon={<DollarCircleTwoTone />} percent={'-1.04%'} />     
                  </Col>                                      
                </Row>
                <Overview/>
                <Row>
                  <Col lg={8} md={24}>
                    <Activity/> 
                  </Col>
                  <Col lg={8} md={24}>
                    <Order/> 
                  </Col>
                  <Col lg={8} md={24}>
                    <Products/> 
                  </Col>
                </Row>                  
              </Col>
              <Col lg={6} md={24}>
                <Profile/>
              </Col>
            </Row>           
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Welcome;
