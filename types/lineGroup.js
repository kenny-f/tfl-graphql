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
  name: 'lineGroup',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    naptanIdReference: { type: GraphQLString },
    stationAtcoCode: { type: GraphQLString },
    lineIdentifier: { type: new GraphQLList(GraphQLString) },
  })
});
