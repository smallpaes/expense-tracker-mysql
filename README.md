# Expense Tracker 💰
A practical web application built with Node.js, Express, and MySQL for you to readily record, view, and manage your expense with an account: Create, view, edit, delete, filter expenses are as easy as pie 🥧


### Trial in this project 🤠
**Re-built with MySQL**
+ [MySQL](https://www.mysql.com/) is used as DBMS in this version, instead of MongoDB
+ [Sequelize](https://github.com/sequelize/sequelize) is used as ORM for MySQL

___

## Project First Look
![Application Screen Shot in GIF](expense-tracker.gif)


## Features
| Functions              | Detail                                            | URL                         |
| :--------------------: | ------------------------------------------------- | --------------------------- |
| Sign up for an account | 1. User can sign up an account by inputting name, email, password<br>2. User can get a warning message for invalid input format<br>3. User can be redirected to login page and receive a warning message for registered account<br>4. User can receive an email for successful registration | /users/register |
| Log in with email | 1. User can log in using registered email<br>2. User can get a warning message for incorrect password or unregistered account | /users/login |
| Log in with Facebook account | User can log in via Facebook with a Facebook account | /auth/facebook |
| Reset password | 1. User can choose to reset password by providing email<br>2. User can receive an email with reset link<br>3. User can reset email by visiting reset link | /users/reset |
| Log out | User can log out of an account | /users/logout |
| View all expenses | 1. User can view expense detail after login<br>2. User can get an error message when no expense to display after login | / |
| View total expense | 1. User can see total amount of all expense in number<br>2. User can see total amount of each category expense on bart chart | / |
| Create an expense | 1. User can add an expense with related info after login<br>2. User can get a warning message for invalid input format | /expenses/new |   
| Edit an expense | User can update detail info of an expense after login | /expenses/edit/:id |
| Delete an expense | 1. User can delete an expense after login<br>2. User can receive a warning message before actual delete | /expenses/delete/:id |
| Filter expenses | 1. User can filter expenses based on month and category after login | /search |
| Page not found | User can get an error message when travelling to a page not existing | /:any_other_URL |

___

## Installation
The following instructions will get you a copy of the project and all the setting needed to run it on your local machine:


### Prerequisites

- [npm](https://www.npmjs.com/get-npm)
- [Node.js v10.16.0](https://nodejs.org/en/download/)
- [MySQL v8.0.16](https://dev.mysql.com/downloads/mysql/)
- [MySQL Workbench v8.0.16](https://dev.mysql.com/downloads/workbench/)


### Clone

Clone this repository to your local machine

```
$ git clone https://github.com/smallpaes/expense-tracker-mysql.git
```

### Setup Datebase

**Create and use expense_tracker database via MySQL Workbench**

> Run the following code
```
drop database if exists expense_tracker;
create database expense_tracker;
use expense_tracker;
```

### Setup App

**1. Create an SendGrid & Facebook account**
- [https://signup.sendgrid.com/](https://signup.sendgrid.com/)
- [https://developers.facebook.com/](https://developers.facebook.com/)

**2. Create and get a SendGrid API Key**

```
Dashboard -> Settings -> API Keys -> Create API Key
```

**3. Create an Facebook App and get the App ID & Secret**

```
My Apps -> Create App -> Scenario: Integrate Facebook Login -> Settings -> Basic
```


**4. Enter the project folder**

```
$ cd expense-tracker-mysql
```

**5. Install npm packages**

```
$ npm install
```

**6. Create .env file**

```
$ touch .env
```

**7. Store API Key in .env file and save**

```
SENDGRID_KEY=<YOUR_SENDGRID_API_KEY>
FACEBOOK_ID=<YOUR_FACEBOOK_APP_ID>
FACEBOOK_SECRET=<YOUR_FACEBOOK_APP_SECRET>
FACEBOOK_CALLBACK=<YOUR_FACEBOOK_REDIRECT_URI>
```

**8. Edit password in config.json file**

> /config/config.json
```
"development": {
  "username": "root",
  "password": "<YOUR_WORKBENCH_PASSWORD>",
  "database": "expense_tracker",
  "host": "127.0.0.1",
  "dialect": "mysql",
  "operatorsAliases": false
}

```

**9. Create models**

> run the following code in console
```
$ npx sequelize db:migrate
```

**10. Activate the server**

```
$ npm run dev
```

**11. Find the message for successful activation**

```
> Express is listening on http://localhost:3000
```
You may visit the application on browser with the URL: http://localhost:3000

___


## Authors
[Mike Huang](https://github.com/smallpaes)
