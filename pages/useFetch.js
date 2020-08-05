import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: 'GET',
      headers: {
        'access-control-request-headers': 'x-rapidapi-key',
        'access-control-request-method': 'GET',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((jsonData) => {
        console.log('DATA:', jsonData);
        const dataResults = jsonData.results;

        setLoading(false);
        setData(dataResults);
      })
      .catch((err) => err);
  }, [url]);
  console.log('DDDDDD:', data);
  return data;
};
