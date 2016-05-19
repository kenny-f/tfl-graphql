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
  GraphQLID
} from 'graphql';

import * as api from './api';

const stationType = new GraphQLObjectType({
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

const stationsType = new GraphQLList(stationType);

const lineType = new GraphQLObjectType({
  name: 'Line',
  description: 'info about a Line',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    modeName: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    stations: {
      type: stationsType,
      description: 'stations of the line',
      resolve: (source, args) => api.fetchStations(source.id),
    }
  })
});

const linesType = new GraphQLList(lineType);

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    lines: {
      type: linesType,
      description: 'Gets all Tube lines',
      resolve: () => api.fetchLines(),
    }
  })
});

export const Schema = new GraphQLSchema({
  query: rootQuery,
});
