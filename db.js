require('./extractHerokuDatabaseEnvVars')();
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const postgres = require('postgres');

const sql =
  process.env.NODE_ENV === 'production'
    ? // Heroku needs SSL connections but
      // has an "unauthorized" certificate
      // https://devcenter.heroku.com/changelog-items/852
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

const descriptions = [
  {
    id: 1,
    className: 'movie',
    src: '/moviePage.png',
    url: '/about/1',
    name: 'Movie',
    description: 'Search movies with names and years',
  },
  {
    id: 2,
    className: 'tv',
    src: '/tvPage.png',
    url: '/about/2',
    name: 'Tv',
    description: 'Get Tvs with more than 450 pages',
  },
  {
    id: 3,
    className: 'search',
    src: '/searchPage.png',
    url: '/about/3',
    name: 'Search',
    description: 'Search actor with names',
  },
  {
    id: 4,
    className: 'tips',
    src: '/tipsPage.png',
    url: '/about/4',
    name: 'Tips',
    description: 'Get tips and ideas',
  },
  {
    id: 5,
    className: 'favo',
    src: '/favoPage.png',
    url: '/about/5',
    name: 'Favourite',
    description: 'Get saved favourites',
  },
];

export function getDescriptions() {
  return descriptions;
}

export async function getDescriptionById(id) {
  const info = await sql`
  select * from about WHERE id = ${id}
  `;
  return info;
}
