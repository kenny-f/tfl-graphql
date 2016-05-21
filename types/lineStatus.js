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
    id: { type: GraphQLInt, },
    lineId: { type: GraphQLString, },
    statusSeverity: { type: GraphQLString, },
    statusSeverityDescription: { type: GraphQLString, },
    reason: { type: GraphQLString, },
    created: { type: GraphQLString, },
    validityPeriods: { type: new GraphQLList(validityPeriodType), },
    disruption: { type: disruptionType, },
  })
});
