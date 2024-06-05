export default {
  Query: {
    clinic: async (_, { id }, { dataSources }) => {
      return dataSources.inMem
        .getClinics()
        .find(({ id: clinicId }) => clinicId === id);
    },
    clinics: async (_, __, { dataSources }) => {
      return [...dataSources.inMem.getClinics(), null];
    },
  },
  Clinic: {
    vets: async (parent, _, { dataSources }, info) => {
      return dataSources.inMem
        .getVets()
        .filter(({ id }) => parent.vetIds.includes(id));
    },
  },
};
