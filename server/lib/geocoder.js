geo = new GeoCoder({
  geocoderProvider: 'google',
  httpAdapter: 'https',
  apiKey: Meteor.settings.GoogleAPIKey
});
