//引入redux
import {createStore, combineReducers} from 'redux';
import user from './user';
import company from './company';

let arr=combineReducers({
  user: user,
  company: company
});

//2.创建存储对象
export default createStore(arr);
