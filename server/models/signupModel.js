const signupModel = {};

signupModel.findEmail = email =>
    `SELECT email,is_deleted FROM users WHERE email = '${email}' LIMIT 1`;

signupModel.insertIntoUsers = (
    name,
    email,
    password
) =>
    `INSERT INTO users (name, email, password, activation_id) 
    VALUES ('${name}', '${email}', '${password}')`;


module.exports = signupModel;