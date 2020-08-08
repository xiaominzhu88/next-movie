import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      // setLoading(true);
      await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((jsonData) => {
          console.log('DATA:', jsonData);
          const dataResults = jsonData.results;

          // setLoading(false);
          setData(dataResults);
        })
        .catch((err) => err);
    }
    fetchData();
  }, [url]);
  return data;
};
