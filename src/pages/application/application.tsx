import React,{ Component } from 'react'
import { View,ScrollView } from "@tarojs/components";
import { AtMessage,AtActivityIndicator } from 'taro-ui'
import './application.less'


class Application extends Component {

  state = {
    loading:false,
    refesh:false
  };


  componentDidMount() {

  }

  onScrollToUpper=(e)=>{
    debugger
    console.log(e);
    this.setState({
      refesh:true
    },()=>{
      setTimeout(()=>{
        this.setState({
          refesh:false
        })
      },2000)
    })
  };

  onScrollToLower=()=>{
    this.setState({
      loading:true
    },()=>{
      setTimeout(()=>{
        this.setState({
          loading:false
        })
      },2000)
    })
  };
  render () {
      const scrollStyle = {
        height: '100vh'
      };
      const scrollTop = 0;
      const Threshold = 50;
      const vStyleA = {
        height: '150px',
        width:'100%',
        'background-color': 'rgb(26, 173, 25)'
      };
      const vStyleB = {
        height: '150px',
        width:'100%',
        'background-color': 'rgb(39,130,215)'
      };
      const vStyleC = {
        height: '150px',
        width:'100%',
        'background-color': 'rgb(241,241,241)',
        color: '#333'
      };
      return (
        <View className="skeleton lazy-view">
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            refresherThreshold={50}
            onScrollToLower={this.onScrollToLower}
            onScrollToUpper={this.onScrollToUpper}
          >
            {this.state.refesh?<View className={'active'}><AtActivityIndicator content='刷新中...'/></View>:false}
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
            {this.state.loading?<View className={'active'}><AtActivityIndicator content='加载中...'/></View>:false}
          </ScrollView>
          <AtMessage/>
        </View>
      );
    }
}

export default Application
