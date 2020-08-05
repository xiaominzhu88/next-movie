const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });
//const postgres = require('postgres');
// const sql =
//   process.env.NODE_ENV === 'production'
//     ? // Heroku needs SSL connections but
//       // has an "unauthorized" certificate
//       // https://devcenter.heroku.com/changelog-items/852
//       postgres({ ssl: { rejectUnauthorized: false } })
//     : postgres();


