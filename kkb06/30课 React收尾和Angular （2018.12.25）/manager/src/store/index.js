//引入redux
import {createStore} from 'redux';
import {ADD_ITEM, DEL_ITEM, INIT_ITEM} from '../actions';

function reducer(state={items: []}, action){
  switch(action.type){
    case INIT_ITEM:
      return {
        ...state,
        items: action.items
      }
    case ADD_ITEM:
      //action.item
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      };
    case DEL_ITEM:
      return {
        ...state,
        items: state.items.filter(item=>item.ID!=action.ID)
      }
    default:
      return state;
  }
}

//2.创建存储对象
export default createStore(reducer);
