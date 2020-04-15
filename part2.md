# Part 2: Winning and Losing!

Poker isn't much fun unless there are stakes - even if those stakes are just bragging rights!

## Goal

Let's implement the following routes:

| HTTP Method | Path | Purpose |
| ----------- | ------------------------ | ---------------------------------------- |
| POST | `/teams/:id/win` | Assign a win to each player on a team |
| POST | `/teams/:id/lose` | Assign a loss to each player on a team |

Let's access these routes via buttons from the `show.ejs` and `index.ejs` page for each team.

## Directions

### 1. Stub out the two new routes

These should go into the teams folder

### 2. On a team's show page make a win button and a lose button

The team show page is accessed by the route `/teams/:id` and shows the details of one particular team. Make a win button and a lose button here.

### 3. Put win and lose buttons into forms

Make separate forms for the win and lose buttons. Put values for the method and action attributes of the form such that they access the routes we just created from step one.

### 4. Implement the win condition

You'll need to get each person associated with a team. This is one database call! Next you'll need to add a win for each player that team has.

### 5. Implement the lose condition

You'll need to get each person associated with a team. This is one database call! Next you'll need to add a loss for each player that team has.

## Bonus

Some user testing may be in order!
