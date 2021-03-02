import React,{ Component } from 'react'
import { View,Text } from '@tarojs/components'
import './orderList.less'

class OrderList extends Component {
  state = {
    value: '订单管理',
    userName: '',
    userPwd:'',
    loading:false
  };


  componentDidMount () {

  }




  render () {
    return (
      <View className='container'>
        <Text>订单管理</Text>
      </View>
    )
  }
}

export default OrderList
