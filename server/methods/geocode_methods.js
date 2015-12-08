Meteor.methods({
  findAddress(zipcode) {
    let response = geo.geocode(zipcode);
    let place = response[0];
    return {
      address: place.formattedAddress,
      location: {
        latitude: place.latitude,
        longitude: place.longitude
      }
    };
  }
});
