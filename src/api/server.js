console.log("running file");

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "../graphql/typeDefs.js";
import getResolvers from "../graphql/resolvers.js";
import inMemDataSource from "../data/inMemDataSource.js";

const standaloneServer = async () => {
  // configure datasources here i.e. ORM, API, MessagingQueue etc
  const resolvers = await getResolvers();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(
    server,
    {
      context: () => ({
        dataSources: {
          inMem: inMemDataSource,
        },
      }),
    },
    {
      listen: { port: 4000 },
    }
  );

  console.log(`🚀  Server ready at: ${url}`);
};

standaloneServer();
