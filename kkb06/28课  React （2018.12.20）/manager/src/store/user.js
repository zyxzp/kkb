import {SET_NAME, ADD_AGE} from '../actions';

//1.创建存储
function reducer1(state={name: 'blue', age: 18}, action){
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

export default reducer1;
