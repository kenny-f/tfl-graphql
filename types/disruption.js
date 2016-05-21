import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Distruption',
  description: 'Distruption',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    category: { type: GraphQLString, },
    categoryDescription: { type: GraphQLString, },
    description: { type: GraphQLString, },
    created: { type: GraphQLString, },
    isBlocking: { type: GraphQLBoolean, },
    closureText: { type: GraphQLString, },
  }),
});
