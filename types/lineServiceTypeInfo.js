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

import disruptionType from './disruption';
import stationType from './station';
import * as api from '../api';

export default new GraphQLObjectType({
  name: 'LineServiceTypeInfo',
  description: 'info about a Line',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    name: { type: GraphQLString, },
    uri: { type: GraphQLString, },
  })
});
