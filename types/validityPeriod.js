import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'ValidityPeriod',
  description: 'Validity Period',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(obj) { return obj.$type; }
    },
    fromDate: { type: GraphQLString, },
    toDate: { type: GraphQLString, },
    isNow: { type: GraphQLBoolean, },
  }),
});
