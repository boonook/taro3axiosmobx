import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './login.less'
import React from 'react';

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
    loading:false
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

  tobegin=(res)=>{
    console.log(res)
  }

  render () {
    return (
      <View className='container'>
        <Text>登录界面</Text>
      </View>
    )
  }
}

export default Login
