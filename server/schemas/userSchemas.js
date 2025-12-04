const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuid,
        unique: true
    },
    pseudo: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
        minLength: [8, 'Le mot de passe doit contenir au moins 8 caractères !']
    },
    birthDate: {
        type: Date,
        required: true
    },
    friendList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    serverList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Server' 
    }],
    avatar: {
        type: String
    },
    bio: {
        type: String
    },
    status: {
        type: String,
        enum: ['online', 'offline', 'focus'],
        default: 'offline'
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;