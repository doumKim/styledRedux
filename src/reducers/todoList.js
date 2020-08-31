import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [
    {
      todoText: '프로젝트 생성하기',
      id: 1,
      done: true,
    },
    {
      todoText: '컴포넌트 스타일링 하기',
      id: 2,
      done: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
