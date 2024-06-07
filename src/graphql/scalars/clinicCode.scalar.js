import { GraphQLScalarType } from "graphql";

export default new GraphQLScalarType({
    name: "clinicCode",
    description: "I am clinic code scallar",
    serialize: (value) => {
        return value.toUpperCase();
    },
    parseValue: (value) => {
        if(value !== "CODE")
            throw new Error(`Invalid PetType value: ${value}`);
        
        return value
    }
})