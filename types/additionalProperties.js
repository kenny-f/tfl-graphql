import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'additionalProperties',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    category: { type: GraphQLString },
    key: { type: GraphQLString },
    sourceSystemKey: { type: GraphQLString },
    value: { type: GraphQLString },
  })
});
