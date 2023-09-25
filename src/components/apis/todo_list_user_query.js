import { useQuery } from "react-query";
import axios from "axios";

const TodoList = () => {
  const getData = async () => {
    console.log("is get calling");
    return await axios.get("https://jsonplaceholder.typicode.com/todos/");
  };

  const { data, isLoading, isError } = useQuery("todos", getData, {
    refetchOnWindowFocus: false,
    staleTime: 60000,
  });

  if (isLoading) {
    return <div>Loading...........</div>;
  }

  if (isError) {
    return <div>Error Fetching data.........</div>;
  }

  return (
    <ul>
      {data?.data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
export default TodoList;
