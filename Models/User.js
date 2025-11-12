import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilepic: { type: String, required: true, default: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" },
    Mobile: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    role: { type: String, enum: ["admin", "customer", "brand"] },
    address: [
        {
            street: { type: String },
            city: { type: String },
            state: { type: String },
            ZipCode: { type: String },
            Country: { type: String }
        }
    ]
},
    { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)