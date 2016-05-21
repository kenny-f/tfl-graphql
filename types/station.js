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
  name: 'Station',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID of station',
    },
    commonName: {
      type: GraphQLString,
      description: 'name of station',
    },
    lat: {
      type: GraphQLFloat,
      description: 'latitude',
    },
    lon: {
      type: GraphQLFloat,
      description: 'longitude',
    },
    naptanId: {
      type: GraphQLString,
      description: 'Naptan ID of station',
    },
    placeType: {
      type: GraphQLString,
    },
  })
});
