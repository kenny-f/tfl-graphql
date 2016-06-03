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

import * as api from './api';
import * as types from './types';

const linesType = new GraphQLList(types.lineType);

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    lines: {
      type: linesType,
      description: 'Gets all Tube lines',
      resolve: () => api.fetchLines(),
    },
    arrivals: {
      type: new GraphQLList(types.arrivalType),
      args: {
        station: { type: new GraphQLNonNull(GraphQLString), },
        line: { type: new GraphQLNonNull(GraphQLString), }
      },
      resolve: (source, { line, station }) => api.fetchArrivals(line, station),
    }
  })
});

export const Schema = new GraphQLSchema({
  query: rootQuery,
});
