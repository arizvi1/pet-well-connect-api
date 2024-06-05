import { GraphQLScalarType, Kind } from "graphql";

const VALID_PET_TYPES = ["DOG", "CAT", "RABBIT", "BIRD", "HAMSTER"];

export default new GraphQLScalarType({
  name: "PetType",
  description: "aaa",
  serialize(value) {
    console.log("value", value);
    const upperCaseValue = value.toUpperCase();
    if (VALID_PET_TYPES.includes(upperCaseValue)) {
      return upperCaseValue.toLowerCase();
    }
    throw new Error(`Invalid PetType value: ${value}`);
  },
  parseValue(value) {
    const upperCaseValue = value.toUpperCase();
    if (VALID_PET_TYPES.includes(upperCaseValue)) {
      return upperCaseValue.toLowerCase();
    }

    throw new Error(`Invalid PetType value: ${value}`);
  },
});
