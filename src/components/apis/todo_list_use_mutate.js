import { useMutation } from "react-query";
import axios from "axios";

const createUser = async (userData) => {
  try {
    const response = await axios.post("/api/users", userData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

const CreateUserForm = () => {
  const { mutate, isLoading, isError, isSuccess, error } =
    useMutation(createUser);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    try {
      await mutate(userData);
      console.log("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <br />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create User"}
      </button>
      {isError && <div>Error: {error.message}</div>}
      {isSuccess && <div>User created successfully!</div>}
    </form>
  );
};

export default CreateUserForm;
