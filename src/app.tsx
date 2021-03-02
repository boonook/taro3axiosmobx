import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import store from './store/index'
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import './app.less'

class App extends Component {
  componentDidMount () {}
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
