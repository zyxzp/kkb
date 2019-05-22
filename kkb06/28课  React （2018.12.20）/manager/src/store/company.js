import {SET_NAME, ADD_AGE} from '../actions';

function reducer2(state={name: 'zhangsan', age: 25}, action){
  switch(action.type){
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case ADD_AGE:
      return {
        ...state,
        age: state.age+action.n
      };
    default:
      return state;
  }
}

export default reducer2;
