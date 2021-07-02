const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'user_id'
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
});

// adding comment association
Comment.belongsTo(Blogpost, {
    foreignKey: 'blogpost_id'
});

Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id'
});

//test comment to user ass.
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id'
});


module.exports = { User, Blogpost, Comment };
