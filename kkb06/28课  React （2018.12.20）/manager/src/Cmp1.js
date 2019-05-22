import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Cmp1 extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div>
        组件1：{this.props.name}
        <Link to="/news/shehui">跳到社会新闻</Link>
      </div>
    );
  }
}

export default connect((state, props)=>{
  return state.company;
})(Cmp1);
