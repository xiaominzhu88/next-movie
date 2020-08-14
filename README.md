## This is a desktop app created with Next.js ☘️

# What is my movie? 📽

## Description

- This application helps the user to discover more than 10,000 movies and TVs. The user can search movies and TVs by name, year, actor or get constantly updated movies and TVs from the movie API, the user has also possibility to save them to the favourite list.

### As a user, you have possibility to

- About Page: You can refer to a short video to get in touch to each page

- Movie Page: You can use movie name and year to find movies you are interested, click on each movie title, you can view the description about each movie, you can also save them as favourite with 'add to favourite' button

- Tv Page: You can view more than 450 pages of TVs with 'next' or 'back' button, click on each tv title, you can view the language and popularity informations, you can also save them as favourite with 'add to favourite' button

- Search Actor Page: You are able to search movies by actor, you can get descriptions and images of famous movies by this actor

- Tips/Ideas page: You are able to view the list of more than 10,000 popular movies and TVs by switch the 'show' button and click on the 'more?' button, you can click on the hearts to rate the suggestions on this page, you can also save them as favourite with 'add to favourite' button

- Favourite page: On this page you can view all the saved favourite movies and tvs

## This project contains:

- Matrial-Ui Components from [Matrial-Ui](https://material-ui.com/)
- Screen video recorder from [screencastify](https://www.screencastify.com/)
- React bootstrap from [React Bootstrap](https://react-bootstrap.github.io/)
- Icon from [react-share](https://www.npmjs.com/package/react-share)
- Icon from [react-feather](https://www.npmjs.com/package/react-feather)
- PostgreSQL database, migrations table
- a readme with description, screenshots, technologies
- 404 and error page

## Technologies used

This project is a Next.js app which makes use of a PostgresQL database and API (themoviedb) Data fetching

## Using API Key

- you should add environment variables to the JavaScript bundle, open next.config.js and add the env config
- Access process.env.customKey in code
- Next.js will replace process.env.customKey with 'my-value' at build time. Trying to destructure process.env variables won't work due to the nature of webpack DefinePlugin.

# PostgreSQL

- [Postgres.js](https://github.com/porsager/postgres) database client
- [Ley](https://github.com/lukeed/ley) for database migrations

## PostgreSQL Installation instructions

Follow the instructions from the PostgreSQL step in [UpLeveled's System Setup Instructions](https://github.com/upleveled/system-setup/blob/master/readme.md).

Run the following queries inside of `psql` to set up the database and the user:

```sql
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
```

Then, to connect to the database using this new user, quit `psql` and reconnect:

```sh
\q
psql -U <user name> <database name>
```

- you could use \connect <database name> to connect to an other database, but you have no permission for table product

Migrations are set up with Ley.

- [ ] [`ley`](https://github.com/lukeed/ley)

- [ ] [`postgres`](https://www.npmjs.com/package/postgres)

# Database migrations

- [ ] driver support:
  - [x] [`pg`](https://www.npmjs.com/package/pg)
  - [x] [`postgres`](https://www.npmjs.com/package/postgres)
  - [x] [`mysql`]()
  - [x] [`mysql2`]()
  - [x] [`better-sqlite3`](https://www.npmjs.com/package/better-sqlite3)
  - [ ] [`sqlite`](https://www.npmjs.com/package/sqlite)
- [ ] complete test coverage
- [ ] complete documentation

## Features

- **Agnostic**<br>
  _Supports [`postgres`](https://www.npmjs.com/package/postgres), [`pg`](https://www.npmjs.com/package/pg), [`better-sqlite3`](https://www.npmjs.com/package/better-sqlite3), [`sqlite`](https://www.npmjs.com/package/sqlite), [`mysql`](https://www.npmjs.com/package/mysql), and [`mysql2`](https://www.npmjs.com/package/mysql2)_

- **Lightweight**<br>
  _Does **not** include any driver dependencies._

- **Transactional**<br>
  _Runs all migration files within a transaction for rollback safety._

- **Familiar**<br>
  _Does **not** invent new syntax or abstractions.<br>You're always working directly with your driver of choice._

- **Flexible**<br>
  _Find the CLI to restrictive? You may require `ley` for your own scripting!_

## Install

```
$ npm install --save-dev ley or yarn add ley
```

## Usage

> Both [Programmatic](#programmatic) and [CLI](#cli) usages are supported.

### Setup

You must have a `migrations` directory created, preferably in your project's root.

> **Note:** You may configure the target directory and location.

Your filenames within this directory determine _the order of their execution._<br>
Because of this, it's often recommended to prefix migrations with a timestamp or numerical sequence.

**_Numerical Sequence_**

```
/migrations
  |-- 00000-users.js
  |-- 00001-teams.js
  |-- 00002-seats.js
```

> **Note**: You may create the next file via `ley new todos --length 3` where `todos` is a meaningful name.<br>The above command will create the `migrations/003-todos.js` filepath.

**_Timestamped_**

```
/migrations
  |-- 1581323445-users.js
  |-- 1581323453-teams.js
  |-- 1581323458-seats.js
```

Each migration file must have an `up` and a `down` task.<br>
These must be exported functions &mdash; `async` okay! &mdash; and will receive your pre-installed client driver as its only argument:

```js
exports.up = async function (DB) {
  // with `pg` :: DB === pg.Client
  await DB.query(`select * from users`);

  // with `postgres` :: DB === sql``
  await DB`select * from users`;
};

exports.down = async function (DB) {
  // My pre-configured "undo" function
};
```

### CLI

1. Add `ley` as one of your `package.json` scripts; `"migrate"`, for example:

   ```js
   // package.json
   {
     "scripts": {
       "migrate": "ley"
     }
   }
   ```

2. Add dotenv-cli with yarn add dotenv-cli, it will added to dependencies in package.json

3. Invoke `ley up` to apply new migrations, or `ley down` to rollback previous migrations.

   ```sh
   $ npm run migrate up
   $ yarn migrate up
   ```

4. Create table with `yarn ley new create-YOUR TABLE NAME-table`

5. Insert content into table with `yarn ley new insert-YOUR TABLE NAME`

### Programmatic

> **Note:** See [API](#api) for documentation

With programmatic/scripting usage, you will not inherit any of `ley`'s CLI tooling, which includes all colors and error formatting. Instead, you must manually catch & handle all thrown Errors.

```js
const ley = require('ley');

const successes = await ley.up({ ... });
```

## Page Screenshot:

About Page:

<img src="/public/screenShot-about.png" width="350" height="200" alt='about'>

<img src='/public/screenShot-aboutI.png' width='350' height='200'
alt='aboutEachPage'>

Tv page:

<img src="/public/screenShot-tv.png" width="350" height="200" alt='tv'>

Search page:

<img src="/public/screenShot-favo.png" width="350" height="200" alt='search'>

Tips page:

<img src="/public/screenShot-tips.png" width="350" height="200" alt='tips'>
