const users = {
  table: 'users',
  fields: 'name, login, passwordHash, email, homePoint, driveHoursPerDay, driveStopPeriod, eatStopPeriod, online, acountStatus',
  values: [
      `'{ "first": "Oneill", "last": "Long" }', 'Oneill', '5b421eedc4235617a7ca1c0f', 'oneill.long@email.net', '{ "city": "Cutter", "position": ["-71.644535", "-32.810064"] }', 15, 7, 3.7, true, true`,
  ]
};

const cars = {
  table: 'cars',
  fields: 'userId, nameCar, tankVolume, maxPassengersCount, avgGasCost, baggageVolume, avgSpeed',
  values: [
    `1, 'Peugeot', 50, 2, 7, 2, 80`,
    `1, 'Ford', 50, 2, 7, 2, 80`,
  ]
}

const trips = {
  table: 'trips',
  fields: 'user_id, name, color, distance, start_address, end_address, duration, time',
  values: [
    `1, 'New Trip', 'teal', '{ "end": { "lat": 49.839683, "lng": 24.029717000000005 }, "start": { "lat": 50.5905728, "lng": 26.1526353 } }', 'М06 & Е40, Rivnenska oblast, Ukraine', 'Miskevycha Square, 9, Lviv, Lvivska oblast, Ukraine, 79000', '203 km', '2 hours 38 mins'`
  ]
}

module.exports = [
  users,
  cars,
  trips
];
