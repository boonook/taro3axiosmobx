import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './login.less'
import React from 'react';
import { AtActionSheet, AtActionSheetItem,AtButton } from "taro-ui"
type PageStateProps = {
  UserStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function,
    changeIsLogin:Function
  }
}

interface Login {
  props: PageStateProps;
}

class Login extends Component {
  state = {
    value: '登陆界面',
    userName: '',
    userPwd:'',
    loading:false,
    isOpened:false
  };

  componentWillMount () { }


  componentDidMount () {

  }

  componentWillUnmount () { }

  handleChange=(value)=>{
    this.setState({
      userName:value
    })
  };

  UserPwdChange=(value)=>{
    this.setState({
      userPwd:value
    })
  }

  onLogin=()=>{
    let {userName,userPwd} = this.state;
    if(userName+''!==''&&userPwd+''!==''){
      if(userPwd.length<6){
        Taro.atMessage({
          'message': '密码长度不能小于6位！',
          'type': 'error',
        })
      }else{
        Taro.switchTab({
          url: '/pages/index/index'
        })
      }
    }else{
      Taro.atMessage({
        'message': '用户名或密码不能为空！',
        'type': 'error',
      })
    }
  }

  onLoginOut=()=>{
    this.setState({
      isOpened:true
    })
  };

  handleClick=()=>{
    this.setState({
      isOpened:false
    })
  }

  handleCancel=()=>{
    this.setState({
      isOpened:false
    })
  }

  handleClose=()=>{
    this.setState({
      isOpened:false
    })
  }

  render () {
    return (
      <View className='container'>
        <View>
          <AtButton onClick={this.onLoginOut} type='primary'>退出登录</AtButton>
        </View>
        <Text>登录界面</Text>
        <AtActionSheet isOpened={this.state.isOpened} cancelText='取消' title='头部标题可以用通过转义字符换行' onCancel={ this.handleCancel } onClose={ this.handleClose }>
          <AtActionSheetItem onClick={ this.handleClick }>
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem onClick={ this.handleClick }>
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}

export default Login
