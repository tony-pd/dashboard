import React, { useState } from 'react';
import {
    DownOutlined
  } from '@ant-design/icons';
import type, {  
    Col, 
    Row, 
    MenuProps,
    Dropdown,
    Space,
    Statistic 
   } from 'antd';
import { Column } from '@ant-design/plots';

const items: MenuProps['items'] = [
    {
        label: 'Yearly',
        key: '1',
    },
    {
        label: 'Monthly',
        key: '2',
    },
    {
        label: 'Weekly',
        key: '3',
    },
    {
        label: 'Today',
        key: '4',
    },
];

const data = [
    {
        type: 'Feb',
        sales: 38,
    },
    {
        type: 'Mar',
        sales: 52,
    },
    {
        type: 'Apr',
        sales: 61,
    },
    {
        type: 'May',
        sales: 145,
    },
    {
        type: 'Jun',
        sales: 48,
    },
    {
        type: 'Jul',
        sales: 38,
    },
    {
        type: 'Aug',
        sales: 38,
    },
    {
        type: 'Sep',
        sales: 38,
    },
];

const config = {
    data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
        label: {
            autoHide: true,
            autoRotate: false,
        },
    },
    meta: {
        type: {
            alias: 'Type',
        },
        sales: {
            alias: 'Sales',
        },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
};

export default function Overview(props:any){
    return ( 
        <Row className='blocks'>
            <Col span={24}>
                <Row>            
                    <Col span={4}>
                        <h3>Overview</h3>         
                    </Col>  
                    <Col className={'align-right'} span={20}>                          
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>         
                                    Sort By: Yearly                       
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>     
                    </Col>  
                </Row> 
                <Row>            
                    <Col className='maxWidth' lg={6} md={24}>
                        <Statistic title="This Month" value={'$24,568'} />    
                        <Row className='miniStats'>            
                            <Col span={12}>
                                <Statistic title="Orders" value={'5,643'} />   
                            </Col>   
                            <Col span={12}>
                                <Statistic title="Sales" value={'16,273'} />   
                            </Col>                   
                        </Row>
                        <Row className='miniStats'>            
                            <Col span={12}>
                                <Statistic title="Order" value={'12.03 %'} />   
                            </Col>   
                            <Col span={12}>
                                <Statistic title="Customers" value={'21,456'} />   
                            </Col>                   
                        </Row>   
                        <Row className='miniStats'>            
                            <Col span={12}>
                                <Statistic title="Income" value={'$35,624'} />   
                            </Col>   
                            <Col span={12}>
                                <Statistic title="Expenses" value={'$12,248'} />   
                            </Col>                   
                        </Row> 
                    </Col>  
                    <Col lg={18} md={24}>
                        <Column {...config} />;        
                    </Col> 
                </Row>         
            </Col>
        </Row>
    )
}