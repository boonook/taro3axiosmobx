import React,{ Component } from 'react'
import {Text, View} from '@tarojs/components'
import './application.less'
class Application extends Component {

    state = {
        value: '',
        show: false
    };

    render () {
        return (
            <View className='application_content'>
              <Text>应用</Text>
            </View>
        )
    }
}

export default Application
