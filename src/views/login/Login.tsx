import React, { Component, ReactNode } from 'react'
import './Login.scss'
import { Card, Input, Button } from 'antd'
import { RouteComponentProps } from 'react-router'

interface RouterInfo {
  [key: string]: any
}
interface Props extends RouteComponentProps<RouterInfo> {}
interface State {
  name: string
  passWord: string
  [key: string]: any
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      passWord: ''
    }
  }
  goIndex() {
    this.props.history.push('/index')
  }
  render(): ReactNode {
    return (
      <Card className="login-content">
        <div className="login-item">
          <div className="label-content">账号</div><Input />
        </div>
        <div className="login-item">
          <div className="label-content">密码</div><Input />
        </div>
        <Button type="primary" block className="btn" onClick={this.goIndex.bind(this)}>
          登录
        </Button>
      </Card>
    )
  }
}

export default Login