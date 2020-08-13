## This is a desktop app created with Next.js ☘️

# What is my movie? 📽

## Description

- This application helps the user to discover more than 10,000 movies and TVs. The user can search movies and TVs by name, year, actor or get constantly updated movies and TVs from the movie API, the use has also possibility to save them to the favourite list.

### As a user, you have possibility to

- About Page: You can refer to a short video to get in touch to each page

- Movie Page: You can use movie name and year to find movies you are interested, click on each movie title, you can view the description about each movie, you can also save them as favourite with 'add to favourite' button

- Tv Page: You can view more than 450 pages of TVs with 'next' or 'back' button, click on each tv title, you can view the language and popularity informations, you can also save them as favourite with 'add to favourite' button

- Search Actor Page: You are able to search movies by actor, you can get descriptions and images of famous movies by this actor

- Tips/Ideas page: You are able to view the list of more than 10,000 popular movies and TVs by switch the 'show' button and click the 'more?' button, you can also click on the heart to rate the suggestions on this page

## This project contains:

- frontend code
- backend code
- PostgreSQL database
- a readme with description, screenshots, technologies
- 404 page

## Technologies used

This project is a Next.js app which makes use of a PostgresQL database and API (themoviedb) Data fetching

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

-- you could use \connect <database name> to connect to an other database, but you have no permission for table product

Migrations are set up with Ley.

- [ ] [`ley`](https://github.com/lukeed/ley)

- [ ] [`postgres`](https://www.npmjs.com/package/postgres)

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

# PostgreSQL

- [Postgres.js](https://github.com/porsager/postgres) database client
- [Ley](https://github.com/lukeed/ley) for database migrations
