const captianModel = require('../models/captain.model');




module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {

    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('Please fill all the required fields');
    }

    const captain = await captianModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;

}