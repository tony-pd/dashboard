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
    Statistic 
   } from 'antd';
import { Area } from '@ant-design/plots';

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

export default function Activity(props:any){
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };

    const config = {
        data,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
        range: [0, 1],
        tickCount: 5,
        },
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
        },
    };

    return ( 
        <Row className='blocks'>
            <Col span={24}>
                <Row>            
                    <Col span={12}>
                        <h3>User Activity</h3>         
                    </Col>  
                    <Col className={'align-right'} span={12}>                          
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>         
                                    Weekly                       
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>     
                    </Col>  
                </Row> 
                <Row className='miniStats'>            
                    <Col span={24}>                      
                        <Statistic title="This Month" value={'16,543'} />
                    </Col>                    
                </Row>     
                <Row className='graph'>            
                    <Col span={24}>                      
                        <Area {...config} />;
                    </Col>                    
                </Row>    
            </Col>
        </Row>
    )
}