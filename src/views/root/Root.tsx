import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'

interface RouterInfo {
  [key: string]: any
}
interface Props extends RouteComponentProps<RouterInfo> { }
interface State {
  [key: string]: any
}

class Root extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>1111111111</div>
    )
  }
}

export default Root