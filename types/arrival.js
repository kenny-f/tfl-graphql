import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Arrival',
  description: 'arrival of train',
  fields: () => ({
    currentLocation: { type: GraphQLString, },
    destinationName: { type: GraphQLString, },
    destinationNaptanId: { type: GraphQLString, },
    expectedArrival: { type: GraphQLString, },
    lineId: { type: GraphQLString, },
    lineName: { type: GraphQLString, },
    modeName: { type: GraphQLString, },
    naptanId: { type: GraphQLString, },
    platformName: { type: GraphQLString, },
    stationName: { type: GraphQLString, },
    timeToLive: { type: GraphQLString, },
    timeToStation: { type: GraphQLString, },
    timestamp: { type: GraphQLString, },
    towards: { type: GraphQLString, },
    vehicleId: { type: GraphQLString, }
  })
});
