
const users = {
  table: 'users',
  fields: 'name, passwordHash, email, homePoint, driveHoursPerDay, driveStopPeriod, eatStopPeriod, online, acount_status, is_activated, activation_id, role',
  values: [
      `'{ "first": "Admin", "last": "Adminovich" }', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin@email.com', null, null, null, null, true, true, true, 'qert45qtegwb34wb3645b645e45g4b5', 'admin'`,
      `'{ "first": "Oneill", "last": "Long" }', '5b421eedc4235617a7ca1c0f', 'oneill.long@email.net', '{ "city": "Cutter", "position": ["-71.644535", "-32.810064"] }', 15, 7, 3.7, true, true, true, 'qert45qtegwb34wb3645b645e45g4b5', 'user'`,
      `'{ "first": "Odessa", "last": "Mckee" }', '5b421eedc4235617a7ca1c0f', 'oneill.long@email.net', '{ "city": "Cutter", "position": ["-71.644535", "-32.810064"] }', 15, 7, 3.7, true, true, true, 'qert45qtegwb34wb3645b645e45g4b5', 'user'`,
      `'{ "first": "Calhoun", "last": "Wilkerson" }', '5b421eedc4235617a7ca1c0f', 'oneill.long@email.net', '{ "city": "Cutter", "position": ["-71.644535", "-32.810064"] }', 15, 7, 3.7, true, true, true, 'qert45qtegwb34wb3645b645e45g4b5', 'user'`,
      `'{ "first": "Rajesh", "last": "Koothrappali" }', '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5', 'email@mail.com', '{ "city": "Cutter", "position": ["-71.644535", "-32.810064"] }', 15, 7, 3.7, true, true, true, 'qert45qtegwb34wb3645b645e45g4b5', 'user'`,
  ]
};

const cars = {
  table: 'cars',
  fields: 'userId, nameCar, tankVolume, maxPassengersCount, avgGasCost, baggageVolume, avgSpeed',
  values: [
    `1, 'Peugeot', 50, 2, 7, 2, 80`,
    `1, 'Ford', 50, 2, 7, 2, 80`,
    `2, 'Peugeot', 50, 2, 7, 2, 80`,
    `2, 'Ford', 50, 2, 7, 2, 80`,
  ]
}

const trips = {
  table: 'trips',
  fields: 'user_id, name, color, distance, start_address, end_address, duration, time',
  values: [
    `1, 'Big trip to Lviv', 'teal', '{ "end": { "lat": 49.839683, "lng": 24.029717000000005 }, "start": { "lat": 50.5905728, "lng": 26.1526353 } }', 'М06 & Е40, Rivnenska oblast, Ukraine', 'Miskevycha Square, 9, Lviv, Lvivska oblast, Ukraine, 79000', '203 km', '2 hours 38 mins'`,
    `1, 'Fun trip to Lviv', 'purple', '{ "end": { "lat": 49.839683, "lng": 24.029717000000005 }, "start": { "lat": 50.5905728, "lng": 26.1526353 } }', 'М06 & Е40, Rivnenska oblast, Ukraine', 'Miskevycha Square, 9, Lviv, Lvivska oblast, Ukraine, 79000', '203 km', '2 hours 38 mins'`,
    `1, 'Fast trip to Lviv', 'green', '{ "end": { "lat": 49.839683, "lng": 24.029717000000005 }, "start": { "lat": 50.5905728, "lng": 26.1526353 } }', 'М06 & Е40, Rivnenska oblast, Ukraine', 'Miskevycha Square, 9, Lviv, Lvivska oblast, Ukraine, 79000', '203 km', '2 hours 38 mins'`
  ]
}

const feedback = {
  table: 'feedback',
  fields: 'user_id, trip_id, create_by, rating, text',
  values: [
    `1, 1, 2, 4.7, 'The driver was drunk! I liked everything! Quisque varius imperdiet auctor. In et dui elit. Nam metus lorem, imperdiet iaculis imperdiet sit amet, ullamcorper quis ipsum. Sed sed nisi vitae magna vestibulum commodo.'`,
    `1, 2, 3, 3, 'The driver was drunk! I liked everything! Quisque varius imperdiet auctor. In et dui elit. Nam metus lorem, imperdiet iaculis imperdiet sit amet, ullamcorper quis ipsum. Sed sed nisi vitae magna vestibulum commodo.'`,
    `1, 3, 5, 5, 'The driver was drunk! I liked everything! Quisque varius imperdiet auctor. In et dui elit. Nam metus lorem, imperdiet iaculis imperdiet sit amet, ullamcorper quis ipsum. Sed sed nisi vitae magna vestibulum commodo.'`
  ]
}

module.exports = [
  users,
  cars,
  trips,
  feedback
];
