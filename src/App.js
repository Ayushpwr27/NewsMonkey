import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
export default class App extends Component {
  c = 'Jhon';
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/home" element={<News key='general' pageSize = {10}  country="in" category="general"/>}>
            </Route>
            <Route path="/business" element={<News key='business' pageSize = {10}  country="in" category="business"/>}>
            </Route>
            <Route path="/entertainment" element={<News key='entertainment' pageSize = {10}  country="in" category="entertainment"/>}>
            </Route>
            <Route path="/general" element={<News key='general' pageSize = {10}  country="in" category="general"/>}>
            </Route>
            <Route path="/health" element={<News key='health' pageSize = {10}  country="in" category="health"/>}>
            </Route>
            <Route path="/science" element={<News key='science' pageSize = {10}  country="in" category="science"/>}>
            </Route>
            <Route path="/sports" element={<News key='sports' pageSize = {10}  country="in" category="sports"/>}>
            </Route>
            <Route path="/technology" element={<News key='technology' pageSize = {10}  country="in" category="technology"/>}>
            </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
