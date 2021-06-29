const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
});

User.hasMany(Comment, {
});

Blogpost.belongsTo(User, {
});

Comment.belongsTo(User, {
    // foreignKey: "user_id",
});

module.exports = { User, Blogpost, Comment };
