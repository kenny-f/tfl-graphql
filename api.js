import fetch from 'isomorphic-fetch';

const baseUrl = 'https://api.tfl.gov.uk';
const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;

export function fetchLineStatus(line) {
  return fetch(`${baseUrl}/Line/${line}/Status?app_id=${appId}&app_key=${appKey}`)
    .then(response => response.json())
    .then(json => json[0].lineStatuses)
}

export function fetchArrivals(line, stationCode) {
  return fetch(`${baseUrl}/Line/${line}/Arrivals?stopPointId=940GZZLU${stationCode}&app_id=${appId}&app_key=${appKey}`) // eslint-disable-line max-len
    .then(response => response.json())
    .then(json => json);
}

export function fetchLines() {
  return fetch(`${baseUrl}/Line/Mode/tube?app_id=${appId}&app_key=${appKey}`)
    .then(response => response.json())
    .then(json => json);
}

export function fetchStations(line) {
  return fetch(`${baseUrl}/Line/${line}/StopPoints?app_id=${appId}&app_key=${appKey}`)
    .then(response => response.json())
    .then(json => json);
}
