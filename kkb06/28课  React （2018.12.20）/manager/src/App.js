import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {SET_NAME, ADD_AGE} from './actions';


import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Cmp1 from './Cmp1';
import Cmp2 from './Cmp2';

class App extends Component {
  fn(){
    this.props.setName('zhangsan');
  }

  fn2(){
    this.props.addAge(6);
  }

  render() {
    return (
      <Router>
        <div>
          <div className="nav-bar">
            <Link className="nav-item" to="/">首页</Link>
            <Link className="nav-item" to="/news/guoji">新闻1</Link>
          </div>

          <Route path="/" exact component={Cmp1} />
          <Route path="/news" component={Cmp2} />
        </div>
      </Router>
    );
  }
}

//export default App;
export default connect(function (state, props){
  /*return {
    ...state,
    name: [state.name, props.name]
  };*/
  return state.user;
}, {
  setName(name){
    return {
      type: SET_NAME,
      name
    };
  },
  addAge(n){
    return {
      type: ADD_AGE,
      n
    }
  }
})(App);
