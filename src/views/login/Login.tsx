import React, { Component, ReactNode } from 'react'
import './Login.scss'
import { Card, Form, Input, Button, Checkbox } from 'antd'
import { RouteComponentProps } from 'react-router'

interface RouterInfo {
  [key: string]: any
}
interface Props extends RouteComponentProps<RouterInfo> { }
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
  onFinish(values: any) {
    console.log(values, 'onFinish')
    this.props.history.push('/index')
  }
  // onFinishFailed(errorInfo: any) {
  //   console.log(errorInfo, 'onFinishFailed')
  // }
  render(): ReactNode {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const tailLayout = {
      wrapperCol: { offset: 4, span: 20 },
    };
    return (
      <Card className="login-content">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish.bind(this)}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export default Login