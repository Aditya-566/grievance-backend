import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String }, // Optional for Google users
  name: { type: String },
  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
  },
  googleId: { type: String, unique: true, sparse: true }, // For Google OAuth
  avatar: { type: String }, // Profile picture URL
  isVerified: { type: Boolean, default: false }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)
