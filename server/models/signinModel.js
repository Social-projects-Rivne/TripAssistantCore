const signinModel = {};

signinModel.findUserByEmail = (email) => {
    const query = {
        text: `SELECT u.id, u.email, u.password
        FROM users u
        WHERE u.email = $1`,
        values: [email],
    };
    return query;
};


module.exports = signinModel;
