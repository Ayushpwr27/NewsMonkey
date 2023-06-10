import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize =5;
  apiKey = process.env.REACT_APP_NEWS_APP
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
            <Route path="/home" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='general' pageSize = {this.pageSize}  country="in" category="general"/>}>
            </Route>
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='business' pageSize = {this.pageSize}  country="in" category="business"/>}>
            </Route>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='entertainment' pageSize = {this.pageSize}  country="in" category="entertainment"/>}>
            </Route>
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='general' pageSize = {this.pageSize}  country="in" category="general"/>}>
            </Route>
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='health' pageSize = {this.pageSize}  country="in" category="health"/>}>
            </Route>
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='science' pageSize = {this.pageSize}  country="in" category="science"/>}>
            </Route>
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='sports' pageSize = {this.pageSize}  country="in" category="sports"/>}>
            </Route>
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='technology' pageSize = {this.pageSize}  country="in" category="technology"/>}>
            </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
