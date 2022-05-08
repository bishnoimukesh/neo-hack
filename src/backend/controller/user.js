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
    project: { type: Array, default: [] },
}, {
    timestamps: true
}
)

const userModal = mongoose.model('users', userSchema)

module.exports = userModal;