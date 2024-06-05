export default {
  Query: {
    pets: async (_, __, { dataSources }) => {
      return dataSources.inMem.getPets();
    },
  },
  Mutation: {
    createPet: async (_, { name, type }, { dataSources }) => {
      console.log("pet data incoming:", name, type);
      return true;
    },
  },
};
