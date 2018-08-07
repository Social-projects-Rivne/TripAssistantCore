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

module.exports = {
  users,
  cars
};
