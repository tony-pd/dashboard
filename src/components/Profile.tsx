import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/plots';
import {
    EllipsisOutlined,
    InfoCircleOutlined
  } from '@ant-design/icons';
import {  
    Col, 
    Row, 
    Avatar,
    Cascader,
    Divider
   } from 'antd';
import pic from '../images/profile.jpg';

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

const options: Option[] = [
    {
        value: 'action',
        label: 'Action' 
    },
    {
        value: 'action2',
        label: 'Action 2',
    },
];

export default function Profile(props:any){
    const [text, setText] = useState('Unselect');

    const config = {
        percent: 0.75,
        range: {
          color: 'l(0) 0:#B8E1FF 1:#3D76DD',
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
          title: {
            offsetY: 0,
            style: {
              fontSize: '24px',
              color: '#4B535E',
            },
            formatter: () => '70%',
          },
        },
    };

    const onChange = (_: string[], selectedOptions: Option[]) => {
      setText(selectedOptions.map((o) => o.label).join(', '));
    };  

    return (     
        <Col span={24} className='profile'>
             <Row className={'dots'}>
                <Col span={24}>
                    <Cascader options={options} onChange={onChange}>
                        <EllipsisOutlined  />
                    </Cascader>      
                </Col> 
            </Row>
            <Row className='align-center'>
                <Col span={24}>
                    <Avatar size={100} src={pic} />  
                    <h3>Jennifer Bennett</h3>
                    <p>Product Designer</p>         
                </Col> 
            </Row>       
            <Row className='align-center'>
                <Col span={12}>                
                    <h3>1,269</h3>
                    <p>Products</p>         
                </Col> 
                <Col span={12}>                
                    <h3>5.2k</h3>
                    <p>Followers</p>         
                </Col> 
            </Row>          
            <Divider/>
            <Row>
                <Col span={12}>                
                    <p>Earning</p>
                </Col> 
                <Col className='align-right' span={12}>                
                    <InfoCircleOutlined />
                </Col> 
            </Row>
            <Row className='align-center'>
                <Col className='guage' span={24}>                
                    <Gauge {...config} />;    
                </Col>              
            </Row>  
            <Row className='align-center'>
                <Col span={24}>                
                    <h3>$26,256</h3>
                    <p>Earning this Month</p>
                    <span>+ 2.65% From previous period</span>         
                </Col>              
            </Row>    
            <Divider/>
            <Row>
                <Col span={24}>                
                    <h3>Recent Activity</h3>
                </Col>             
            </Row>
            <br/>
            <Row>
                <Col className='align-center box' span={5}>                
                    <h3>12 Sep</h3>
                </Col>
                <Col className='text' span={18}>                
                    <p>Responded to need “Volunteer Activities"</p>
                </Col>              
            </Row>
            <br/>
            <Row>
                <Col className='align-center box' span={5}>                
                    <h3>11 Sep</h3>
                </Col>
                <Col className='text' span={18}>                
                    <p>Everyone realizes would be desirable</p>
                </Col>              
            </Row>
            <br/>
            <Row>
                <Col className='align-center box' span={5}>                
                    <h3>10 Sep</h3>
                </Col>
                <Col className='text' span={18}>                
                    <p>Joined the group “Boardsmanship Forum”</p>
                </Col>              
            </Row>
        </Col>       
    )
}