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
    clinicByCode: async () => {
      return { id: 12, name: "abc" }
    }
  },
  Clinic: {
    vets: async (parent, _, { dataSources }, info) => {
      return aws.inMem
        .getVets()
        .filter(({ id }) => parent.vetIds.includes(id));
    },
    clinicCode: async () => {
      return "code"
    }
  },
};
