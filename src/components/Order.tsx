import React, { useState, useEffect } from 'react';
import {
    EllipsisOutlined
  } from '@ant-design/icons';
import type, {  
    Col, 
    Row, 
    Dropdown,
    MenuProps,
    Space,
    Statistic 
   } from 'antd';
import { Pie } from '@ant-design/plots';

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
      type: 'Complete',
      value: 75,
    },
    {
      type: 'Pending',
      value: 25,
    },
    {
      type: 'Cancel',
      value: 20,
    }
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
};

export default function Order(props:any){   
    return ( 
        <Row className='blocks order'>
            <Col span={24}>
                <Row>            
                    <Col span={12}>
                        <h3>Order Stats</h3>         
                    </Col>  
                    <Col className={'align-right'} span={12}>                          
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>         
                                    <EllipsisOutlined /> 
                                </Space>
                            </a>
                        </Dropdown>     
                    </Col>  
                </Row> 
                <Row className='graph'>            
                    <Col span={24}>                      
                        <Pie {...config} />;
                    </Col>                    
                </Row>             
            </Col>
        </Row>
    )
}