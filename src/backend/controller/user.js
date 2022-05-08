const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String, default: "" },
    middleName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, default: "" },
    twitter: { type: String, default: "" },
    portfolio: { type: String, default: "" },
    address: { type: String, default: "" },
    objective: { type: String, default: "" },
    experience: { type: Array, default: [] },
    skill: { type: Array, default: [] },
    project: { type: Array, default: [] }
    }, {
    timestamps: true
    }
)

// const detailsSchema = new mongoose.Schema({
//     experience: { type: Array, default: [] },
//     skill: { type: Array, default: [] },
//     project: { type: Array, default: [] },
// }, {
//     timestamps: true
//     }
// )

const userModal = mongoose.model('users', userSchema)
// const userModal2 = mongoose.model('users', detailsSchema);

module.exports = userModal;
// module.exports = userModal2;