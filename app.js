const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

if (!process.argv[2]) {
  console.log(chalk.bgRed('Please provide location'));
} else {
  geocode(process.argv[2], (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log('Geocode data - ' + location);
      console.log('Forecast data - ' + forecastData);
    });
  });
}
