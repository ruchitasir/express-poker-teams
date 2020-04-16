cd# Express Poker Teams

Let's have a class poker tournament!

## Prerequisites

Students will need to have had the following lessons before attempting this assignment:

* Intro to Sequelize
* One to many relationships
* RESTful routing in Express

## Getting started

* Fork and clone this repository
* Run `npm install` to install the dependencies in `package.json`
* Stop and take a moment to read through the existing code. You should have a simple express app with a home route and a wildcard route (a catch-all that renders an error page) and basic setup of express-ejs-layouts.
* Run `nodemon` and ensure you can access that error page at `localhost:3000`.

## Directions

### 0. Take a look at the code already provided to you as starter code.

### 1. Make your controllers and stub your routes

**Part A**

Make a `controllers` folder. Then put a `teams.js` and a `players.js` file inside the `controllers` folder.

**Part B**

Make `teams.js` and `players.js` into Express Routers. Make sure to remember the `module.exports` statement~

**Part C**

Implement stubs (simple `res.send('xxx')` calls as placeholders) for each route below in their respective routers. Routes starting with `/teams` should go into the `teams.js` router, and routes starting with `/players` should go into the `players.js` router.

| HTTP Method | Path | Purpose |
| ----------- | ------------------------ | ---------------------------------------- |
| GET | `/` | Home page - has a large, poker-themed image |
| GET | `/teams` | Show a list of all teams |
| GET | `/teams/new` | Show a form for entering a new team |
| POST | `/teams` | Create a new team |
| GET | `/teams/:id` | Show a detail page for a specific team |
| GET | `/players` | Show a list of all players |
| GET | `/players/new` | Show a form for entering new layers |
| POST | `/players` | Create a new player |
| GET | `/players/:id` | Show a detail page for a specific player |

**Part D**

Make sure to include both controllers in your `index.js` file via the `app.use()` call.

### 2. Set up your database

* Create a new database called 'poker'
* Set up Sequelize:
  * `sequelize init`
  * Update your `config.json` according to directions from your Sequelize lessons
  
### 3. Create a team model

Using the `sequelize-cli` tool on the command line, use the `sequelize model:create` command to create a team model that contains the following fields:

| Column | Type | 
| ----------- | ------------------------ | 
| name | string | 
| description | string |
| pic | string |

### 4. Create a player model

**Part A**

Use the `sequelize model:create` command again to create a player model that contains the following fields:

| Column | Type | 
| ----------- | ------------------------ | 
| name | string | 
| wins | integer |
| losses | integer |
| pic | string |
| bio | text |
| teamId | integer |

**Part B**

Create the `belongsTo` and `hasMany` associations between teams and players.

* One team has many players.
* A player belongs to a team.

### 5. Run Sequelize Migrations

You can use the command `sequelize db:migrate`

### 6. Implement adding and viewing your teams

**Part A**

In your `new.ejs` file inside `views/teams` folder, implement a form to add a new team. Make sure your inputs have a name field that corresponds to the name in your SQL table (i.e., name, pic, and description in this case). Render this page when the url `/teams/new` is reached.

**Part B**

After this, implement your GET and POST routes for `/teams`. The POST route will use sequelize's `create` method (or if you don't want duplicate team names you can use `findOrCreate`). The GET route will just do a call to sequelize's `findAll` function to return all teams. Render the `views/teams/index.ejs` page to show all the team names.

### 7. Implement adding and viewing players

**Part A**

You will need to assign each player to a team when they are created. In order to accomplish this in the most graceful way possible, let's query the `team` model and make sure to get a list of all available teams passed into the render. You can make a dropdown list or radio buttons to select the player's team. Make sure that your dropdown list or radio button's value indicates the team ID while the display to the user is the name of the team.

**Part B**

Implement GET and POST routes for `/players`

#### 8. Make your show routes 

Make a `show.ejs` for both a specific team and a specific player. These ejs pages will be rendered by `/teams/:id` and `/players/:id` respectively. On the player page, make sure to display all the information about that player's team. On the team page, show a list of all the player's names on that team. This means using our associations and using the `include` keyword when we query for the data.

## Bonus

Implement these additional routes:

| HTTP Method | Path | Purpose |
| ----------- | ------------------------ | ---------------------------------------- |
| PUT | `/teams/:id` | Edit a specific team |
| DELETE | `/teams/:id` | Delete a specific team |
| PUT | `/players/:id` | Edit a specific player |
| DELETE | `/players/:id` | Delete a specific player |
