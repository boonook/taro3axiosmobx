export default {
  pages: [
    'pages/index/index',
    'pages/myCenter/myCenter',
    'pages/login/login',
    'pages/application/application',
    'pages/monitoringCenter/monitoringCenter'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '航班管家',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/index/index",
      iconPath: "./assets/tab-bar/home.png",
      selectedIconPath: "./assets/tab-bar/home-active.png",
      text: "首页"
    },{
      pagePath: "pages/monitoringCenter/monitoringCenter",
      iconPath: "./assets/tab-bar/jiankongzhongxin.png",
      selectedIconPath: "./assets/tab-bar/jiankongzhongxin-active.png",
      text: "监控"
    },{
      pagePath: "pages/application/application",
      iconPath: "./assets/tab-bar/yingyong.png",
      selectedIconPath: "./assets/tab-bar/yingyong-active.png",
      text: "应用"
    },{
      pagePath: "pages/myCenter/myCenter",
      iconPath: "./assets/tab-bar/user.png",
      selectedIconPath: "./assets/tab-bar/user-active.png",
      text: "用户"
    }]
  },
  "subPackages": [
    {
      "root": "pages/homePages/",
      "pages": [
        'pages/device/device',
      ]
    },
    {
      "root": "pages/myCenterPage/",
      "pages": [
        'pages/orderList/orderList',
      ]
    }
  ]
}
