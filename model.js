const mongoose = require('mongoose');
const Scheama = mongoose.Schema;

const userScheama = new Scheama({
    id: Number,
    name: String,
});

const User = mongoose.model('User', userScheama);

module.exports = User;