const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const channelSchema = mongoose.Schema({
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
        enum: ['dm', 'group', 'channel']
    }
}, { timestamps: true});

const Channel = mongoose.model('Channel', channelSchema);
module.exports = Channel;