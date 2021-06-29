const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
});

User.hasMany(Comment, {
})

Blogpost.belongsTo(User, {
})

Comment.belongsTo(User, {
})

module.exports = { User, Blogpost, Comment };
