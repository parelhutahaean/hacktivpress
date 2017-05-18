# hacktivpress

This web app is a simple Content Management System (CMS) or blogging. I use ExpressJS as a backend framework and MongoDB as database (using ODM Mongoose). As users, we can post, edit, and delete articles, add category on each article.


## List of basic routes:


| Routes | HTTP | Description |
| --------------- | ------------- | --------------------------- |
| /signup/ | POST | Sign up as a new user |
| /signin/ | POST | Sign in to access the articles |
| /articles/ | POST | Insert new articles |
| /articles/ | GET | Get all articles |
| /articles/:id | GET | Get articles by id |
| /articles/user/:id | GET | Get articles by author (user) |
| /articles/category/:category | GET | Get articles by category |
| /articles/:id | DELETE | Delete articles by id |
| /articles/:id | PUT | Update articles by id |

# Usage:

## with only npm:

npm install

npm start

Access the website via http://localhost:3000
