import React,{ Component } from 'react'
import Taro from '@tarojs/taro'
import {View, Text, Button} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import './myCenter.less'

class MyCenter extends Component {
  state = {
    show:false
  };

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  ///订单管理
  GoOrderManagePage=()=>{
    Taro.navigateTo({
      url: '/pages/myCenterPage/pages/orderList/orderList'
    })
  };

  GoDeviceManagePage=()=>{
    Taro.navigateTo({
      url: '/pages/homePages/pages/device/device'
    })
  };

  GoLoginPage=()=>{
    Taro.navigateTo({
      url: '/pages/login/login'
    })
  };

  render () {
    return (
      <View className='myCenterContainer'>
        <Button onClick={this.GoOrderManagePage}>订单管理</Button>
        <Button onClick={this.GoDeviceManagePage}>设备管理</Button>
        <Button onClick={this.GoLoginPage}>登录界面</Button>
        <View>
          <AtButton type='primary'>按钮文案</AtButton>
        </View>
        <Text>个人中心</Text>
      </View>
    )
  }
}

export default MyCenter
