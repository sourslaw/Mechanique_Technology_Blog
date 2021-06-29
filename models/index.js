const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    // foreignKey: "user_id",
});

module.exports = { User, Blogpost, Comment };