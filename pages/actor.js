import React, { useState } from 'react';
import Head from 'next/head';
//import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Namelist from '../Components/Namelist';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import { useFetch } from './useFetch';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Search() {
  const [name, setName] = useState('brad');
  const classes = useStyles();

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
          <div className="searchActor">
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              style={{
                margin: '0 auto',
                textAlign: 'center',
                padding: '1em',
              }}
            >
              <TextField
                className={classes.margin}
                label="Search Actor"
                variant="outlined"
                id="outlined-basic"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </form>
          </div>
          <Namelist nameData={nameData} />
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
