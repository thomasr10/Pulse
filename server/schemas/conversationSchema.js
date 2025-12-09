const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const conversationSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuid,
        unique: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    type: {
        enum: ['dm', 'group']
    }
}, { timestamps: true});

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;