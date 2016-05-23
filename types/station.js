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

import identifierType from './identifier';
import lineGroupType from './lineGroup';
import lineModeGroupType from './lineModeGroup';
import additionalPropertiesType from './additionalProperties';

const stationType = new GraphQLObjectType({
  name: 'Station',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    id: {
      type: GraphQLString,
      description: 'ID of station',
    },
    naptanId: {
      type: GraphQLString,
      description: 'Naptan ID of station',
    },
    modes: { type: new GraphQLList(GraphQLString) },
    icsCode: { type: GraphQLString },
    stopType: { type: GraphQLString },
    stationNaptan: { type: GraphQLString },
    lines: { type: new GraphQLList(identifierType) },
    lineGroup: { type: new GraphQLList(lineGroupType) },
    lineModeGroups: { type: new GraphQLList(lineModeGroupType) },
    status: { type: GraphQLString },
    placeType: { type: GraphQLString },
    additionalProperties: { type: new GraphQLList(additionalPropertiesType) },
    children: { type: new GraphQLList(stationType) },
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
  })
});

export default stationType;
