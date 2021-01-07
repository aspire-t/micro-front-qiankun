import React from 'react'
// import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './views/home'

function App() {
  return (
    <BrowserRouter basename="/react">
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Route path="/" exact component={() => <Home></Home>}></Route>
      <Route path="/about" render={() => <h1>hello about</h1>}></Route>
    </BrowserRouter>
  )
}

export default App
