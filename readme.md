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

#### 1. Stub the routes listed below

| HTTP Method | Path | Purpose |
| ----------- | ------------------------ | ---------------------------------------- |
| GET | `/` | Home page - should have a large, poker-themed image |
| GET | `/teams` | Show a list of all teams |
| GET | `/teams/new` | Show a form for entering a new team |
| POST | `/teams` | Create a new team |
| GET | `/teams/:id` | Show a detail page for a specific team |
| POST | `/teams/:id/win` | Assign a win to each player on a team |
| POST | `/teams/:id/lose` | Assign a loss to each player on a team |
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
| pic | string |

#### 4. Create a player model

Use the `sequelize model:create` command again to create a player model that contains the following fields:

| Column | Type | 
| ----------- | ------------------------ | 
| name | string | 
| wins | integer |
| losses | integer |
| pic | string |
| bio | text |

#### 5. Run Sequelize Migrations

You can use the command `sequelize db:migrate`

#### 6. Implement adding and viewing your teams

In your `new.ejs` file inside `views/teams` folder, implement a form to add a new team. Make sure your inputs have a name field that corresponds to the name in your SQL table (i.e., name, pic, and description in this case). Render this page when the url `/teams/new` is reached.

After this, implement your GET and POST routes for `/teams`. The POST route will use sequelize's `create` method (or if you don't want duplicate team names you can use `findOrCreate`). The GET route will just do a call to sequelize's `findAll` function to return all teams. Render the `views/teams/index.ejs` page to show all the team names.

## Bonus

Implement these additional routes:

| HTTP Method | Path | Purpose |
| ----------- | ------------------------ | ---------------------------------------- |
| GET | `/` | Home page - should have a large, poker-themed image |
| PUT | `/teams/:id` | Edit a specific team |
| DELETE | `/teams/:id` | Delete a specific team |
| PUT | `/players/:id` | Edit a specific player |
| DELETE | `/players/:id` | Delete a specific player |
