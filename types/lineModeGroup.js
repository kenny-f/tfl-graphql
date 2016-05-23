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
  name: 'lineModeGroup',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    modeName: { type: GraphQLString },
    lineIdentifier: { type: new GraphQLList(GraphQLString) },
  })
});
