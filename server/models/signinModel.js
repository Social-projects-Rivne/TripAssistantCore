const SigninModel = {};

SigninModel.findUserByEmail = (email) => {
  const query = {
    text: `SELECT iduser, email, passwordhash, is_activated, role FROM users WHERE email = '${email}'`,
  };
  return query;
};

SigninModel.getUserId = (iduser) => {
  const query = {
    text: `SELECT iduser FROM users WHERE iduser = ${iduser}`
  };
  return query;
}

module.exports = SigninModel;
