const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const messageSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuid,
        unique: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
    },
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    }
}, { timestamps: true });

const MessageSchema = mongoose.model('Message', messageSchema);
module.exports = MessageSchema;