exports.up = async (sql) => {
  const about = [
    {
      id: '1',
      title: 'Find movies by title and year 🌺',
      subtitle: 'Movie',
      videoSrc: '/movie.mp4',
      text:
        '"Chewie, we are home." \n\n--Star Wars Episode VII: The Force Awakens, 2015:',
    },
    {
      id: '2',
      title: 'Get TVs over 450 pages 🌼',
      subtitle: 'TV',
      videoSrc: '/TV.mp4',
      text:
        '"This is one time where television really fails to capture the true excitement of a large squirrel predicting the weather."\n\n--Groundhog Day(1993)\n\n --Phil Connors (Bill Murray) conveying his excitement about Punxsutawney Phils forecast.',
    },
    {
      id: '3',
      title: 'Search movie by actor 🍄',
      subtitle: 'Actor',
      videoSrc: '/Actor.mp4',
      text:
        '"There are 106 miles to Chicago, we have a full tank of gas, half a pack of cigarettes, it is dark, and we are wearing sunglasses."\n\n--The Blues Brothers(1980)\n\n --Elwood (Dan Aykroyd) to Jake (John Belushi) as they try to make it to their gig on time.',
    },
    {
      id: '4',
      title: 'View popular movies and tvs 🌻',
      subtitle: 'Tips',
      videoSrc: '/tips.mp4',
      text:
        '"Roads? Where we are going, we do not need roads." \n\n --Back to the Future (1985)',
    },
    {
      id: '5',
      title: 'View your favourite movies 💐',
      subtitle: 'Favourite',
      videoSrc: '/Favo.mp4',
      text:
        '“Some people can’t believe in themselves until someone else believes in them first.” \n\n–-Sean Maguire, Good Will Hunting',
    },
  ];
  await sql`
	
	INSERT INTO about ${sql(about, 'title', 'subtitle', 'videoSrc', 'text')}
	`;
};

exports.down = async (sql) => {
  sql`
DELETE FROM about WHERE id = 1 and id = 2 and id = 3 and id = 4 and id = 5`;
};
