import React, { useState, useEffect } from 'react';
import Head from 'next/head';
//import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TextField from '@material-ui/core/TextField';
import dynamic from 'next/dynamic';
import useDebounce from '../hooks/useDebounce';

const Namelist = dynamic(() => import('../Components/Namelist'), {
  loading: () => (
    <div
      style={{
        textAlign: 'center',
        fontSize: '2em',
        margin: '5em auto',
        color: '#fff',
        fontFamily: 'monospace',
      }}
    >
      <p>Loading...</p>
    </div>
  ),
});

export default function Search() {
  const [name, setName] = useState('brad');
  const [data, setData] = useState([]);

  const api_key = process.env.api_key;

  const debouncedSearchTerm = useDebounce(name, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchResults = async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/person?api_key=${api_key}&language=en-US&query=${debouncedSearchTerm}&include_adult=false`,
        );
        const json = await res.json();
        const dataResults = json.results;

        setData(dataResults || []);
      };
      fetchResults();
    }
  }, [debouncedSearchTerm, api_key, name]);

  return (
    <div>
      <Head>
        <title>Search actor</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description search movies by actor"
          content="movies search by actor"
        />
      </Head>
      <main>
        <Header />

        <div className="search">
          <div className="searchActor">
            <form
              style={{
                margin: '0 auto',
                textAlign: 'center',
                padding: '2em',
              }}
            >
              <TextField
                style={{
                  borderBottom: '1px solid #fff',
                  width: '45vw',
                }}
                label="Search Actor"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </form>
          </div>

          <Namelist nameData={data} />
        </div>
      </main>
      <style jsx>{`
        .search {
          background: linear-gradient(
            -45deg,
            #00bcd4,
            #3f51b5,
            #9c27b0ab,
            #d44585
          );
          background-size: 300% 300%;
          animation: gradient 6s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 50% 100%;
          }

          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
