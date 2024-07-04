import mongoose, { Schema } from 'mongoose'
interface Iuser {
    userName: string,
    email: string,
    password: string,
    isVerified: boolean,
    isAdmin: boolean,
    forgotPasswordToken: string,
    forgotPasswordTokenExpiry: string,
    verifyToken: string
    verifyTokenExpiry: string
}
const userSchema = new Schema<Iuser>({
    userName: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        index: true,

    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,

    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,



})
const User = mongoose.models?.User || mongoose.model("User", userSchema)
export default User;