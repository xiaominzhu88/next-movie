import React, { useState } from 'react';
import Head from 'next/head';
//import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Namelist from '../Components/Namelist';

import { useFetch } from './useFetch';

export default function Search() {
  const [name, setName] = useState('brad');
  const apiKey = process.env.MovieKey;

  const nameData = useFetch(
    `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${name}&include_adult=false`,
  );
  console.log('NAMEDATA: ', nameData);

  if (!nameData) {
    return (
      <div
        style={{
          textAlign: 'center',
          fontSize: '2em',
          margin: '5em auto',
          color: 'hotpink',
          fontFamily: 'monospace',
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Search actor</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description search movie with actor"
          content="movie search with actor"
        />
      </Head>
      <main>
        <Header />
        <div className="search">
          <input
            type="text"
            minlength="1"
            value={name}
            onChange={(e) => {
              return name.length > 0
                ? setName(e.target.value)
                : alert('please enter name');
            }}
          />
          <Namelist nameData={nameData} />
        </div>
      </main>
    </div>
  );
}
