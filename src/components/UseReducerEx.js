import React, { useReducer } from "react";
import './useReducerEx.css';

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id == action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const initalTodo = [
  {
    id: 1,
    titel: "Todo title 1",
    complete: false,
  },
  {
    id: 2,
    titel: "Todo title 2",
    complete: false,
  },
];

function UseReducerEx() {
  const [todos, dispatch] = useReducer(reducer, initalTodo);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return <div className="checkbox__div">
   { todos.map((todo)=>(
    <div key={todo.id}>
    <label>
        <input type="checkbox" checked={todo.complete} onChange={()=> handleComplete(todo)}></input>
        todo.titel
    </label>
    </div>
   ))}
    
    </div>;
}

export default UseReducerEx;
