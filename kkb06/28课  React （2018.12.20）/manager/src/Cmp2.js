import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Mod1 from './Cmp2_1';
import Mod2 from './Cmp2_2';

class Cmp2 extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    const path=this.props.match.path;

    return (
      <div>
        <h2>新闻</h2>

        <Link to={`${path}/guoji`}>国际</Link>
        <Link to={`${path}/shehui`}>社会</Link>

        <Route path={`${path}/guoji`} component={Mod1} />
        <Route path={`${path}/shehui`} component={Mod2} />
      </div>
    );
  }
}

export default Cmp2;
