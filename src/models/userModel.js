import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: {
        type: String,
        default: ''
    },
    forgotPasswordExpires: {
        type: Date,
        default: ''
    },
    verifyTokenExpiry: {
        type: Date,
        default: ''
    },
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;