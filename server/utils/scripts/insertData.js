const users = {
  table: 'users',
  fields: 'name, passwordHash, email, homePoint, driveHoursPerDay, driveStopPeriod, eatStopPeriod, online, acountStatus, is_activated, activation_id',
  values: [
      `'{ "first": "Oneill", "last": "Long" }', '5b421eedc4235617a7ca1c0f', 'oneill.long@email.net', '{ "city": "Cutter", "position": ["-71.644535", "-32.810064"] }', 15, 7, 3.7, true, true, true, 'qert45qtegwb34wb3645b645e45g4b5'`,
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

module.exports = {
  users,
  cars
};
