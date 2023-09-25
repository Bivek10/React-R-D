import React from "react";
import Header from "./Header";
import TodoList from "../apis/todo_list_user_query";

function Home() {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}

export default Home;
