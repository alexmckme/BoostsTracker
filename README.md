# Boosts Tracker

Boosts Tracker is a full-stack web application whose goal is to help teams of the client organization follow the progress of their work. Once finalized, this app will replace the current Google Sheets file that was used for this purpose, and will be used in production by about 30+ people in the organization.

**Link to project:**  [https://booststracker.cyclic.app/]

## How It's Made:

**Tech used:** 
- Backend with **Node.js** and **Express**
- Frontend with **EJS**,
- Using **MongoDB Atlas** database
- Hosted on **Cyclic.sh** (Heroku competitor)

**This application went through several iterations :**

_Step one_: I created the first version of the API with Express. All of the server code that allows to connect to the MongoDB database, as well as all the routes and actions, were in a single file. From that, I got a fully functioning variant of a "todo list", that was tweaked to suit the specific desired use case of the end users.

_Step two_: In order to organize the code, all the code was then refactored to use an MVC architecture. What used to be just a single file was split into different folders containing routes, controllers, models and views. This has the tremendous benefit of making further feature addition and refactors easier in the longer run.


## Optimizations

This application is still a work in progress, and **will** eventually be used by a team of about 30+ people in the client organization.

**Features to be added:**

- _User authentication with Passport.js_: everyone in the team will have to have their personal user space once they log in
- _Administrator / Managers dashboard_: adding and deleting an item to the list will need to be only accessible to the managers of the team
- _Ability to create comments for each item on the list and storing them on a seperate MongoDB collection_: users need to comment on each item on the list when needed

**Other Improvements planned**:

- _Design overhaul_: overall, the current design is very bare-bones. When the app's main features are functional, creating the design will be the next priority
- _Refactoring with React_: currently, the app uses server-side rendering by serving EJS files. Using client-side rendering with React will be the last important improvement, that will not only make for a better user experience (less page reloads), but also improve the app's performance (less API calls).

## Lessons Learned:

The first lesson I learned is purely contextual: the teams I work with didn't have a way to track their progress on a specific task they have to do monthly, and resorted to using Google Sheets with a ton of tabs, that had only drawbacks. I am merely applying my knowledge on creating API's to solve real-life issues in a creative way.

The second set of lessons I learned stem from building a full-stack web application from scratch: from having a functional app with disorganized code, to applying the MVC pattern, while debugging a lot of errors that came along the way.

The project is still in development, and will be released in the upcoming weeks.

