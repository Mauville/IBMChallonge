// Get EnvVars from .env file
require("dotenv").config();
// JSON API getter and parser
const superagent = require("superagent");
require("pretty-error").start();
// Safe API key handling
let kagui = process.env.LOCATIONIQ_KEY;

/**
 * Geocodes a zipcode to a pair of coordinates. Uses LocationIQ Geocoding API to perform the operation. Defaults all zip codes to Mexico.
 * @param {string} zipcode - A zipcode
 * @return {Object} An object containing lat and lon coordinates
 */
function getCoordinates(zipcode) {
  superagent
    .get("https://us1.locationiq.com/v1/search.php")
    //Query parameters    https://locationiq.com/docs-html/index.html?javascript#forward_query-parameters
    .query({
      key: kagui,
      country: "mexico",
      postalcode: zipcode,
      format: "json"
    })
    .then((res, err) => {
      if (err) {
        return console.log("Geocoding API Error", err);
      }
      // This debugging line costs a bit of time. Prints only when debug is enables in .env
      if (process.env.DEBUG === "true") {
        console.log("LOGGER: getCoordinates(" + zipcode + ")");
        console.dir(JSON.parse(res.text), { depth: null, colors: true });
      }
      return { lat: res.text.lat, lon: res.text.lon };
    });
}

/**
 * Fetches Sky Insolation Incidence on Horizontal Surface indexes from the NASA Power API
 * @param {double} lat - Latitude of the place to get irradiation data from
 * @param {double} lon - Longitude of the place to get irradiation data from
 * @param {string} startDate - A string denoting the startdate of the period in the form YYYYMMDD
 * @param {string} endDate - A string denoting the enddate of the period in the form YYYYMMDD
 * @returns {Object} An object containing ordered pairs of day of the year with their corresponding Sky Insolation Incidence on Horizontal Surface indexes
 */
function getIrradiation(lat, lon, startDate, endDate) {
  superagent
    .get("https://power.larc.nasa.gov/cgi-bin/v1/DataAccess.py")
    .query({
      // Info on request parameters https://power.larc.nasa.gov/docs/v1/
      request: "execute",
      identifier: "SinglePoint",
      user: "suaderoSolar",
      parameters: "ALLSKY_SFC_SW_DWN",
      startDate: startDate,
      endDate: endDate,
      userCommunity: "SSE",
      tempAverage: "DAILY",
      lat: lat,
      lon: lon,
      outputList: "JSON"
    })
    .then((res, err) => {
      if (err) {
        return console.log("NASA API Error", err);
      }
      // These debugging lines cost a bit of time. Prints only when debug is enables in .env
      if (process.env.DEBUG === "true") {
        var args = [].slice.call(arguments);
        console.log("LOGGER: getIrradiation(" + args + ")");
        console.dir(JSON.parse(res.text), { depth: null, colors: true });
      }

      // Data from the NASA comes in a special structure. Darn Rocket Scientists.
      // {
      //   features: [ { geometry: [Object], properties: [Object], type: 'Feature' } ],
      //   ...,
      //   ...,
      // }

      // It's on properties where the relevant irradiation data  is stored, further under parameter and ALLSKY_SFC_SW_DWN
      const rawdata = JSON.parse(res.text);
      const props = rawdata.features[0].properties;
      return props.parameter.ALLSKY_SFC_SW_DWN;
    });
}

const arr = [19.4881, -99.0884, 20190101, 20200101];
getIrradiation(...arr);
