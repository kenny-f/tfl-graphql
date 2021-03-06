import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import disruptionType from './disruption';
import validityPeriodType from './validityPeriod';

export default new GraphQLObjectType({
  name: 'LineStatus',
  description: 'Status of a Line',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) {
        return obj.$type;
      },
    },
    id: { type: GraphQLString, },
    lineId: { type: GraphQLString, },
    statusSeverity: { type: GraphQLString, },
    statusSeverityDescription: { type: GraphQLString, },
    reason: { type: GraphQLString, },
    created: { type: GraphQLString, },
    validityPeriods: { type: new GraphQLList(validityPeriodType), },
    disruption: { type: disruptionType, },
  }),
});
