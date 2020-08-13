import { useEffect, useState } from 'react';

export const useFetch = (url, ref) => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
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

          setData(dataResults || []);
        })
        .catch((err) => err);
    }

    fetchData();
  }, [url]);
  return data;
};
