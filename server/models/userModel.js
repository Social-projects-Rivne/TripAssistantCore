const UserModel = {};

UserModel.getUser = (idUser) => {
  const query = {
    text: `SELECT name, email, homePoint, driveHoursPerDay, driveStopPeriod, eatStopPeriod, online, acountStatus, is_activated, activation_id, avatar FROM users WHERE idUser=${idUser}`,
  };
  return query;
};

UserModel.getUserCars = (idUser) => {
  const query = {
    text: `SELECT cars.idCar, cars.nameCar, cars.tankVolume, cars.maxPassengersCount, cars.avgGasCost, cars.baggageVolume, cars.avgSpeed FROM cars WHERE cars.userId = ${idUser} ORDER BY cars.idCar DESC`
  };
  return query;
};

UserModel.addNewCar = ({ 
  nameCar,
  tankVolume,
  maxPassengersCount,
  avgGasCost,
  baggageVolume,
  avgSpeed 
}, userId) => {
  const query = {
    text: `INSERT INTO cars (userId, nameCar, tankVolume, maxPassengersCount, avgGasCost, baggageVolume, avgSpeed) VALUES(${userId}, '${nameCar}', ${tankVolume}, ${maxPassengersCount}, ${avgGasCost}, ${baggageVolume}, ${avgSpeed})`
  };
  return query;
};

UserModel.deleteCar = (idCar) => {
  const query = {
    text: `DELETE FROM cars WHERE cars.idCar = ${idCar}`
  };
  return query;
};

UserModel.updateCar = ({
  idCar,
  nameCar,
  tankVolume,
  maxPassengersCount,
  avgGasCost,
  baggageVolume,
  avgSpeed 
}) => {
  const query = {
    text: `UPDATE cars SET nameCar = '${nameCar}', tankVolume = ${tankVolume}, maxPassengersCount = ${maxPassengersCount}, avgGasCost = ${avgGasCost}, baggageVolume = ${baggageVolume}, avgSpeed = ${avgSpeed} WHERE idCar = ${idCar}`
  };
  return query;
}

module.exports = UserModel;
