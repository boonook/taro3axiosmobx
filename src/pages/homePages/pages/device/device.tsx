import React,{ ComponentType } from 'react'
import { useState, useEffect } from 'react'
import { View,Text } from '@tarojs/components'
import './device.less';

function Device() {
  const [title,setTitle] = useState('测试');
  useEffect(()=>{
   setTitle('boonook')
  },[title])
  return (
    <View className='container'>
      <Text>{title}</Text>
    </View>
  )
}


export default Device  as ComponentType
