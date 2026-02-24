const userModel = require('../models/user.model');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('Please fill all the required fields');
    }

    const user = await userModel.create({  // also add await here
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}

module.exports.getUserByEmail = async (email) => {
    return await userModel.findOne({ email });
}