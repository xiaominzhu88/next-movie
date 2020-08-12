exports.up = async (sql) => {
  const about = [
    {
      id: '1',
      title: 'text',
      subtitle: 'Movie',
      videoSrc: '/movie.mp4',
      text: 'text here',
    },
    {
      id: '2',
      title: 'text',
      subtitle: 'TV',
      videoSrc: '/TV.mp4',
      text: 'text here',
    },
    {
      id: '3',
      title: 'text',
      subtitle: 'Actor',
      videoSrc: '/Actor.mp4',
      text: 'text here',
    },
    {
      id: '4',
      title: 'text',
      subtitle: 'Tips',
      videoSrc: '/tips.mp4',
      text: 'text here',
    },
    {
      id: '5',
      title: 'text',
      subtitle: 'Favourite',
      videoSrc: '/Favo.mp4',
      text: 'text here',
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
