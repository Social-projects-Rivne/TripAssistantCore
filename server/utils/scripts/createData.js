const tablesData = [
  {
    tableName: 'users',
    column: `
      idUser serial NOT NULL PRIMARY KEY,
      name json NOT NULL,
      passwordHash text NOT NULL,
      email char(50) NOT NULL,
      homePoint json,
      driveHoursPerDay double precision,
      driveStopPeriod double precision,
      eatStopPeriod double precision,
      online boolean,
      acountStatus boolean,
      is_activated boolean,
      activation_id text,
      avatar char(100)`
  },
  {
    tableName: 'cars',
    column: `
      idCar SERIAL PRIMARY KEY NOT NULL,
      userId INT NOT NULL,
      nameCar CHAR(30),
      tankVolume INT,
      maxPassengersCount INT,
      avgGasCost DECIMAL,
      baggageVolume INT,
      avgSpeed INT`
  }
];

module.exports = {
  tablesData
};
