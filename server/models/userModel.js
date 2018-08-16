const UserModel = {};

UserModel.getUser = (idUser) => {
  const query = {
    text: `SELECT name, email, homePoint, driveHoursPerDay, driveStopPeriod, eatStopPeriod, online, acount_status, is_activated, activation_id, avatar FROM users WHERE idUser=${idUser}`,
  };
  return query;
};

UserModel.getAllUsers = () => {
  const query = {
    text: `SELECT iduser, name, avatar, acount_status FROM users`,
  };
  return query;
};

UserModel.deleteUser = (iduser) => {
  const query = {
    text: `DELETE FROM users WHERE iduser = ${iduser}`,
  };
  return query;
};

UserModel.unblockUser = (iduser, status) => {
  const query = {
    text: `UPDATE users SET acount_status = ${status} WHERE iduser = ${iduser}`,
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
  iduser,
  nameCar,
  tankVolume,
  maxPassengersCount,
  avgGasCost,
  baggageVolume,
  avgSpeed 
}) => {
  const query = {
    text: `INSERT INTO cars (userId, nameCar, tankVolume, maxPassengersCount, avgGasCost, baggageVolume, avgSpeed) VALUES(${iduser}, '${nameCar}', ${tankVolume}, ${maxPassengersCount}, ${avgGasCost}, ${baggageVolume}, ${avgSpeed})`
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
