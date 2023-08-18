import { Todo } from '../actions';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/types';

const initialState: Todo[] = [];

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todosReducer;
