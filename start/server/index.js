const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");
const Mutation = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,

  resolvers: {
    Query,
    Animal,
    Category,
    Mutation,
  },

  context: {
    mainCards,
    animals,
    categories,
  },

  csrfPrevention: true,

  cache: "bounded",

  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
