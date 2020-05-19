import React, { Component, ReactNode } from 'react'
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import asyncComponent from './components/asyncComponent'
const Login = asyncComponent(() => import('./views/login/Login'))
const Index = asyncComponent(() => import('./views/index/Index'))
// import Login from './views/login/Login'
// import Index from './views/index/Index'
class App extends Component {
  render(): ReactNode {
    return (
      <BrowserRouter>
        <Route exact component={Login} path="/" />
        <Route exact component={Index} path="/index" />
      </BrowserRouter>
    );
  }
}

export default App;
