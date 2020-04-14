# Express Poker Teams

Let's have a class poker tournament!

## Prerequisites

Students will need to have had the following lessons before attempting this assignment:

* Intro to Sequelize
* One to many relationships
* RESTful routing in Express

## Getting started

* Fork and clone this repository
* Run `npm install` to install the dependencies in `package.json`
* Stop and take a moment to read through the existing code. You should have a simple express app with a wildcard route (a catch-all that renders an error page) and basic setup of express-ejs-layouts.
* Run `nodemon` and ensure you can access that error page at `localhost:3000`.

## Requirements

#### 1. Implement the RESTful routes listed below

| HTTP Method | Path | Purpose |
| ----------- | ------------------------ | ---------------------------------------- |
| GET | `/` | Home page - should have a large, poker-themed image |
| GET | `/teams` | Show a list of all teams |
| GET | `/teams/new` | Show a form for entering a new team |
| POST | `/teams` | Create a new team |
| GET | `/teams/:id` | Show a detail page for a specific team |
| GET | `/players` | Show a list of all players |
| GET | `/players/new` | Show a form for entering new players |
| POST | `/players` | Create a new player |
| GET | `/players/:id` | Show a detail page for a specific player |

#### 2. Set up your database

* Create a new database called 'poker'
* Set up Sequelize:
  * `sequelize init`
  * Update your `config.json` according to directions from your Sequelize lessons
  
#### 3. Create a team model

Using the `sequelize-cli` tool on the command line, use the `sequelize model:create` command to create a team model that contains the following fields:

| Column | Type | 
| ----------- | ------------------------ | 
| name | string | 
| description | string |


#### 4. Create a player model

Use the `sequelize model:create` command again to create a player model that contains the following fields:

| Column | Type | 
| ----------- | ------------------------ | 
| name | string | 
| wins | integer |
| losses | integer |
| pic | text |
| bio | text |

## Bonus

Implement these additional routes:

| HTTP Method | Path | Purpose |
| ----------- | ------------------------ | ---------------------------------------- |
| GET | `/` | Home page - should have a large, poker-themed image |
| PUT | `/teams/:id` | Edit a specific team |
| DELETE | `/teams/:id` | Delete a specific team |
| PUT | `/players/:id` | Edit a specific player |
| DELETE | `/players/:id` | Delete a specific player |
