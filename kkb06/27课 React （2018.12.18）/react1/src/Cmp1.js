import React, {Component} from 'react';
import axios from 'axios';

class Cmp1 extends Component{
  constructor(...args){
    super(...args);

    this.state={
      users: []
    }
  }

  async componentDidMount(){
    try{
      let {data}=await axios.get('/data/1.json');

      this.setState({
        users: data
      });
    }catch(e){
      alert('刷新');
    }
  }

  /*async componentDidMount(){
    let res=await fetch('/data/1.json');
    let data=await res.json();

    this.setState({
      users: data
    });
  }*/

  render(){
    return (
      <ul>
        {this.state.users.map((user, index)=>(
          <li key={index}>{user.user}, {user.password}</li>
        ))}
      </ul>
    );
  }
}

export default Cmp1;
