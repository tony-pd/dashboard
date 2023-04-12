import React, { useState, useEffect } from 'react';
import {
    DownOutlined
  } from '@ant-design/icons';
import type, {  
    Col, 
    Row, 
    Dropdown,
    MenuProps,
    Space,
   } from 'antd';
import Stats from './Stats';

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

export default function Products(props:any){


    return ( 
        <Row className='blocks'>
            <Col span={24}>
                <Row>            
                    <Col span={12}>
                        <h3>Top Product</h3>         
                    </Col>  
                    <Col className={'align-right'} span={12}>                          
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>         
                                    Monthly                       
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>     
                    </Col>  
                </Row> 
                <Row>            
                    <Stats name={'Polo blue T-shir'} value={'$ 25.4'} icon={'#1'} percent={'3.82k'}/>
                    <Stats name={'Hoodie for men'} value={'$ 24.5'} icon={'#2'} percent={'3.14k'}/>
                    <Stats name={'Red color Cap'} value={'$ 22.5'} icon={'#3'} percent={'2.84k'}/>
                    <Stats name={'Pocket T-shirt'} value={'$ 21.5'} icon={'#4'} percent={'2.06k'}/>
                </Row>                 
            </Col>
        </Row>
    )
}