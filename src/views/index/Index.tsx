import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { SET_TEST_NAME } from '../../store/actions'
import { Route, Link } from 'react-router-dom'
import './Index.scss'
import asyncComponent from '../../components/asyncComponent'
const Root = asyncComponent(() => import('../root/Root'))
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

interface RouterInfo {
  [key: string]: any
}
interface Props extends RouteComponentProps<RouterInfo> {
  [key: string]: any
}
interface State {
  [key: string]: any
}

class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  fn() {
    this.props.setName('马健')
  }
  clickMenu({ key }: any) {
    this.props.history.push(key)
  }
  render() {
    return (
      <Layout className="layout-content">
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={this.clickMenu.bind(this)}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="/index">{this.props.data.name}</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Link to="/index">跳转测试</Link>
            <Route path="/index" exact component={Root} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    data: state.test
  };
};
const mapDispatchToProps = {
  setName(name: string) {
    return {
      type: SET_TEST_NAME,
      name
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Index)