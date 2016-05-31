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

import lineStatusType from './lineStatus';
import lineServiceTypeInfo from './lineServiceTypeInfo';
import disruptionType from './disruption';
import matchedRouteType from './matchedRoute';
import stationType from './station';
import * as api from '../api';

export default new GraphQLObjectType({
  name: 'Line',
  description: 'info about a Line',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    id: { type: GraphQLString, },
    name: { type: GraphQLString, },
    modeName: { type: GraphQLString, },
    disruptions: { type: new GraphQLList(disruptionType), },
    created: { type: GraphQLString, },
    modified: { type: GraphQLString, },
    lineStatuses: {
      type: new GraphQLList(lineStatusType),
      resolve: (source) => api.fetchLineStatus(source.id),
    },
    routeSections: { type: new GraphQLList(matchedRouteType), },
    serviceTypes: { type: new GraphQLList(lineServiceTypeInfo) },
    stations: {
      type: new GraphQLList(stationType),
      description: 'stations of the line',
      resolve: (source, args) => api.fetchStations(source.id),
    }
  })
});
