export default {
  Dog: {
    __isTypeOf: (parent) => {
      return parent.type === "Dog"
    }
  },
  Bird: {
    __isTypeOf: (parent) => {
      return parent.type === "Bird"
    }
  },
  Query: {
    pets: async (_, __, { dataSources }) => {
      return dataSources.inMem.getPets();
    },
    searchPets: async (_, {name}, { dataSources }, info) => {
      console.log("info", info.fieldNodes[0].selectionSet)
      return dataSources.inMem.getPets().filter((pet) => pet.name === name);
    },
  },
  Mutation: {
    createPet: async (_, { name, type }, { dataSources }) => {
      console.log("pet data incoming:", name, type);
      return true;
    },
  },
};
