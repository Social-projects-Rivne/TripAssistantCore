const SignupModel = {};

SignupModel.getEmail = (email) => {
  const query = {
    text: `SELECT email FROM users WHERE email = '${email}'`,
  };
  return query;
};

SignupModel.inserNewUser = (fname, lname, email, password, activationId) => {
  const query = {
    text: `INSERT INTO users (name, email, passwordHash, is_activated, activation_id) VALUES ('{ "first": "${fname}", "last": "${lname}" }', '${email}', '${password}', FALSE, '${activationId}')`,
  };
  return query;
};

SignupModel.updateIsActivated = activationId => `UPDATE users SET is_activated='true' WHERE activation_id='${activationId}' RETURNING iduser, role`;

module.exports = SignupModel;
