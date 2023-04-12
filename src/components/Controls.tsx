import React, { useState } from 'react';
import {
    SearchOutlined,
    FlagOutlined,
    AppstoreOutlined,
    BellOutlined,
    SettingOutlined,    
  } from '@ant-design/icons';
import {  
    Col, 
    Button, 
    Avatar,
    Tooltip,
    Space
   } from 'antd';
import pic from '../images/profile.jpg';

export default function Controls(props:any){
    return (     
        <Col className={'controls align-right'} span={8} >
            <Space>
                <Tooltip title="Search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Tooltip title="Language">
                    <Button shape="circle" icon={<FlagOutlined />} />
                </Tooltip>
                <Tooltip title="Dashboard">
                    <Button shape="circle" icon={<AppstoreOutlined />} />
                </Tooltip>
                <Tooltip title="Notifications">
                    <Button shape="circle" icon={<BellOutlined />} />
                </Tooltip>
                <Tooltip title="Settings">
                    <Button shape="circle" icon={<SettingOutlined />} />
                </Tooltip>
                <Tooltip title="Profile">
                    <Avatar src={pic} />
                </Tooltip>
            </Space>
        </Col>      
    )
}