const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    type: {
        enum: ['dm', 'group', 'channel']
    }
}, { timestamps: true });

const Channel = mongoose.model('Channel', channelSchema);
module.exports = Channel;