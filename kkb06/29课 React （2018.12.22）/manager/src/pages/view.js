import React, {Component} from 'react';
import Table from '../components/Table';
import Dialog from '../components/Dialog';
import {DEL_ITEM} from '../actions';
import {connect} from 'react-redux';
import data from '../data';

class View extends Component{
  constructor(...args){
    super(...args);
  }

  fn_del(ID){
    console.log(this.refs);
    let del_dialog=this.refs.del_dialog;

    del_dialog.open(async index=>{
      if(index==0){
        let {error}=await data.get(`del/${ID}`);

        del_dialog.close();
        this.props.delItem(ID);
      }else{
        del_dialog.close();
      }
    });
  }

  render(){
    return (
      <div>
        <Dialog title="删除" msg="是否删除此数据" buttons={[
          {title: '是'},
          {title: '否'}
        ]} ref="del_dialog" />
        <Table del_callback={this.fn_del.bind(this)} />
      </div>
    );
  }
}

export default connect(function (state, props){
  return state;
}, {
  delItem(ID){
    return {
      type: DEL_ITEM,
      ID
    }
  }
})(View);
