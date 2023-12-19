import db from '../models/index';
require('dotenv').config();

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.doctorId || !data.timeType || !data.date) {
                resolve({
                    errCode: 1,
                    errMess: 'Missing parameter!',
                });
            } else {
                // upsert patient
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    default: {
                        email: data.email,
                        roleId: 'R3',
                    },
                });

                // create a booking record
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            patientId: user[0].id,
                            doctorId: data.doctorId,
                            date: data.date,
                            timeType: data.timeType,
                        },
                    });
                }

                resolve({
                    errCode: 0,
                    errMess: 'Save infor success',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    postBookAppointment,
};