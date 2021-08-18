# Blog
![alt text](assets/images/screenshot.png)

## Description
- A blogging platform which allows for creation, review, update, and deletion of blog posts, creation of users, sign-in authentication, and creation of comments

### The User Story for this project is as follows:
- AS A developer who writes about tech, I WANT a CMS-style blog site, SO THAT I can publish articles, blog posts, and my thoughts and opinions

### The codebase meets the following criteria for acceptance:
- WHEN I visit the site for the first time, THEN I am presented with the homepage which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option, THEN I am taken to the homepage
- WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up, THEN I am prompted to create a username and password
- WHEN I click on the sign-up button, THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password
- WHEN I am signed in to the site, THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post, THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post, THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post, THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard, THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation, THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time, THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

### Installation
- The project is uploaded to [GitHub](https://github.com/) at the following repository: [here](https://github.com/sourslaw/Technology_Blog)
- The project is deployed via [Heroku](https://www.heroku.com/) at the following link: [here](https://salty-plateau-85850.herokuapp.com/)

### Usage
- Visiting the deployed [Heroku site](https://salty-plateau-85850.herokuapp.com/), the user is able to create an account via the Login link
    - Once an account is created, the user is able to create posts, edit their posts, delete their posts, and create comments

### Credits
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/v3/)

### License
- Licensed under the [MIT](https://opensource.org/licenses/mit-license.php) license.
