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
  name: 'MatchedRoute',
  description: 'matched route',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    id: { type: GraphQLString, },
    lineId: { type: GraphQLString, },
    routeCode: { type: GraphQLString, },
    name: { type: GraphQLString, },
    direction: { type: GraphQLString, },
    originationName: { type: GraphQLString, },
    destinationName: { type: GraphQLString, },
    originator: { type: GraphQLString, },
    destination: { type: GraphQLString, },
    serviceType: { type: GraphQLString, },
  }),
});
