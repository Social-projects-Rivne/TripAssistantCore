module.exports = [
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
      acount_status boolean DEFAULT true,
      is_activated boolean,
      activation_id text,
      avatar char(100) DEFAULT NULL,
      role text DEFAULT 'user'
      `
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
    name TEXT,
    color TEXT,
    distance json,
    start_address TEXT,
    end_address TEXT,
    duration TEXT,
    time TEXT,
    active boolean NOT NULL DEFAULT true,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW()
    `
  },
  {
    tableName: 'feedback',
    column: `
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT,
    trip_id INT,
    create_by INT,
    rating NUMERIC,
    text TEXT
    `
  }
];