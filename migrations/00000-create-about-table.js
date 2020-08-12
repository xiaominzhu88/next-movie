exports.up = async (sql) => {
  sql`
	CREATE TABLE about (
id SERIAL PRIMARY KEY,
title VARCHAR NOT NULL,
subtitle VARCHAR NOT NULL,
videoSrc VARCHAR NOT NULL,
text VARCHAR NOT NULL)
	`;
};

exports.down = async (sql) => {
  sql`
DROP TABLE about
`;
};
