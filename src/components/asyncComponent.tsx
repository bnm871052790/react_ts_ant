import React, { Component, ReactNode } from 'react'

// 组件按需加载
interface State {
  [key: string]: any,
  C: keyof JSX.IntrinsicElements | null
}
interface Props {
  [key: string]: any
}
export default function asyncComponent(importComponent: () => Promise<any>) {
  class AsyncComponent extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state = {
        C: null
      }
    }
    async componentDidMount() {
      const mod: any = await importComponent()
      this.setState({
        C: mod.default || mod
      })
    }
    render(): ReactNode | null {
      const { C } = this.state
      return C ? <C {...this.props} /> : null
    }
  }
  return AsyncComponent
}