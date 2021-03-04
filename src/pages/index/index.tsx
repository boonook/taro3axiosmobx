import React, { Component } from 'react';
import Taro from "@tarojs/taro";
import { View, Text,Image } from '@tarojs/components'
import './index.less'
class Index extends Component {
  state = {
    show:false
  };

  componentWillMount () { }

  componentDidMount () {
    Taro.startPullDownRefresh().then(res=>{
      console.log(res)
    })
  }

  componentWillUnmount () { }


  render () {
    return (
      <View className='index'>
        <View>
          <Image mode="widthFix" style={{width:'100%'}} src={require('@assets/home_banner.jpg')} />
        </View>
        <View className={'item_group_box'}>
          <View className={'item_group'}>
            <View className={'item_group_item'}>
              <Image  className="userImage"  src={require('@assets/tab-bar/jiankongzhongxin.png')} />
              <View><Text>监控</Text></View>
            </View>
            <View className={'item_group_item'}>
              <Image className="userImage"  src={require('@assets/shebei.png')} />
              <View><Text>设备</Text></View>
            </View>
            <View className={'item_group_item'}>
              <Image className="userImage"  src={require('@assets/chufaqi.png')} />
              <View><Text>触发器</Text></View>
            </View>
            <View className={'item_group_item'}>
              <Image className="userImage"  src={require('@assets/tab-bar/yingyong.png')} />
              <View><Text>应用</Text></View>
            </View>
          </View>
          <View className={'item_group'}>
            <View className={'item_group_item'}>
              <Image className="userImage"  src={require('@assets/dingshirenwu.png')} />
              <View><Text>任务</Text></View>
            </View>
            <View className={'item_group_item'}>
              <Image className="userImage"  src={require('@assets/download.png')} />
              <View><Text>数据下载</Text></View>
            </View>
            <View className={'item_group_item'}>
              <Image className="userImage"  src={require('@assets/liuliangCard.png')} />
              <View><Text>流量卡</Text></View>
            </View>
            <View className={'item_group_item'}>
              <Image className="userImage"  src={require('@assets/zidingyi.png')} />
              <View><Text>自定义</Text></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
