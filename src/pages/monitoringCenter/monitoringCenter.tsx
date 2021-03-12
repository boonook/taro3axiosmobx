import Taro  from "@tarojs/taro";
import { View } from "@tarojs/components";
import ListView from "../../components/list-view";
import React,{Component} from "react";

const blankList = [
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  },
  {
    author: {},
    title: "this is a example"
  }
];

let pageIndex = 1;

export default class MonitoringCenter extends Component {
  state = {
    isLoaded: false,
    error: false,
    hasMore: false,
    isEmpty: false,
    list: blankList
  };

  getData = async (pIndex = pageIndex) => {
    if (pIndex === 1) this.setState({ isLoaded: false });
    const {
      data: { data }
    } = await Taro.request({
      url: "https://cnodejs.org/api/v1/topics",
      data: {
        limit: 10,
        page: pIndex
      }
    });
    console.log({ data });
    return { list: data, hasMore: false, isLoaded: pIndex === 1 };
  };

  componentDidMount() {
    // this.refList.fetchInit();
  }

  pullDownRefresh = async () => {
    pageIndex = 1;
    const res = await this.getData(1);
    this.setState(res);
  };

  onScrollToLower = async fn => {
    const { list } = this.state;
    const { list: newList, hasMore } = await this.getData(++pageIndex);
    this.setState({
      list: list.concat(newList),
      hasMore
    });
    fn();
  };

  refList = {};

  insRef = node => {
    this.refList = node;
  };

  render() {
    const { isLoaded, error, hasMore, isEmpty, list } = this.state;
    return (
      <View className="skeleton lazy-view">
        <ListView
          lazy
          ref={node => this.insRef(node)}
          isLoaded={isLoaded}
          isError={error}
          hasMore={hasMore}
          style={{ height: "100vh" }}
          isEmpty={isEmpty}
          onPullDownRefresh={this.pullDownRefresh}
          onScrollToLower={this.onScrollToLower}
          lazyStorage='lazyView'
        >
          {list.map((item, index) => {
            return (
              <View className="item skeleton-bg" key={index}>
                <View className="title skeleton-rect">{item.title}</View>
              </View>
            );
          })}
        </ListView>
      </View>
    );
  }
}
