const typeDefs = `type User {
          id: ID!
          name: String!
          username: String!
        }
        type Todo {
          id: ID!
          title: String!
          completed: Boolean!
          userId: ID!
          user: User
        }

        type Query {
          todos: [Todo]
          users: [User]
          oneTodo(id: ID!): Todo
        }`;

module.exports = { typeDefs };
