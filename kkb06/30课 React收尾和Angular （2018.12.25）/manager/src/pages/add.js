import React, {Component} from 'react';
import Table from '../components/Table';
import Panel from '../components/Panel';

class Add extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div>
        <Table/>
        <Panel/>
      </div>
    );
  }
}

export default Add;
