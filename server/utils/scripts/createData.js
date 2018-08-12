module.exports = [
  {
    tableName: 'users',
    column: `
      idUser serial NOT NULL PRIMARY KEY,
      name json NOT NULL,
      login char(20) NOT NULL,
      passwordHash text NOT NULL,
      email char(50) NOT NULL,
      homePoint json,
      driveHoursPerDay double precision,
      driveStopPeriod double precision,
      eatStopPeriod double precision,
      online boolean,
      acountStatus boolean,
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
  },
  {
    tableName: 'trips',
    column: `
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    name CHAR(30),
    color CHAR(15),
    distance json,
    start_address CHAR(200),
    end_address CHAR(200),
    duration CHAR(30),
    time CHAR(50)
    `
  }
];
