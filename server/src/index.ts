import { createContext } from "./context";
import { createApolloServer } from "./server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = createApolloServer();

startStandaloneServer(server, {
  context: async () => createContext(),
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
