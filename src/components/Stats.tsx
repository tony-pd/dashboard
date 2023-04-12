import React, { useState } from 'react';
import {
    PieChartTwoTone
  } from '@ant-design/icons';
import {  
    Col, 
    Row, 
    Avatar, 
    Badge 
   } from 'antd';

export default function Stats(props:any){
    const {name, value, icon, percent} = props;

    return (     
        <Col span={24} className={typeof(icon) == 'string' ? 'products' : 'blocks'}>
            <Row>
                <Col className='align-center' span={4}>
                    <Avatar shape='square' size='large' icon={icon} />              
                </Col>                 
                <Col className={'spacing'} span={16}>
                    <Row>
                        <Col span={24}>{name}</Col>
                    </Row>
                    <Row>                
                        <Col span={24}><b>{value}</b></Col>                            
                    </Row>           
                </Col>
                <Col span={4} >
                    <Row>     
                        <Col span={24}>&nbsp;</Col>               
                    </Row>
                    <Row>                
                        <Col className='align-right' span={24}>                         
                            <Badge count={percent} showZero color='#bfbfbe' />
                        </Col>             
                    </Row>           
                </Col>
            </Row>                
        </Col>       
    )
}