import React from "react";
import Header from "./Header";
import CreateUserForm from "../apis/todo_list_use_mutate";

function Home() {
  return (
    <div>
      <Header />
      <CreateUserForm />
    </div>
  );
}

export default Home;
