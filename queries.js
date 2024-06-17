const axios = require("axios");

const queries = {
  todos: async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return data;
  },
  users: async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  },
  oneTodo: async (_, { id }) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return data;
  },
};

module.exports = { queries };
