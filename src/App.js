import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  // apiKey="4908b4e326794f738cfd031a44e07925"
  apiKey=process.env.REACT_APP_NEWS_API
  state={
     progress:0
  }
  setProgress=(progress)=>{
      this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        {/* <News setProgress={this.state.setProgress}  pageSize={8} country="in" category="sports"/> */}
        <Switch>
          <Route exact path="/">
            <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={8} country="in" category="general"/>
          </Route>
          <Route exact path="/general">
            <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={8} country="in" category="general"/>
          </Route>
          <Route exact path="/sports">
            <News setProgress={this.setProgress} apiKey={this.apiKey}   key="sports"pageSize={8} country="in" category="sports"/>
          </Route>
          <Route exact path="/technology">
            <News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={8} country="in" category="technology"/>
          </Route>
          <Route exact path="/science">
            <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={8} country="in" category="science"/>
          </Route>
          <Route exact path="/health">
            <News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={8} country="in" category="health"/>
          </Route>
          <Route exact path="/business">
            <News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={8} country="in" category="business"/>
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={8} country="in" category="entertainment"/>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

