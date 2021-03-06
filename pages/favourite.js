import React from 'react';
import Header from '../Components/Header';
import Head from 'next/head';
import Footer from '../Components/Footer';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #fe6bfd 15%, #3F51B5 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgb(204 192 206)',
    color: 'white',
    height: 28,
    padding: '0 30px',
    margin: '0.5em',
    fontSize: '0.8em',
    fontFamily: 'monospace',
  },
});

export default function Favourite() {
  const classes = useStyles();

  let favoMovies = [];
  let favoTvs = [];
  let tips = [];

  if (typeof window !== 'undefined') {
    favoMovies = JSON.parse(window.localStorage.getItem('favoMovies')) || [];
    favoTvs = JSON.parse(window.localStorage.getItem('favoTvs')) || [];
    tips = JSON.parse(window.localStorage.getItem('tips')) || [];
  }

  return (
    <div className="favo-page">
      <Head>
        <title>Favourite</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description view saved favourite"
          content="saved favourite view"
        />
      </Head>

      <Header />
      <h2>Favourite</h2>

      <div className="favo-container" suppressHydrationWarning={true}>
        <h3>Movies: </h3>
        {favoMovies.length === 0 ? (
          <p>No saved favourite</p>
        ) : (
          <div>
            {process.browser && (
              <ul>
                {favoMovies.map((movie, i) => {
                  return (
                    <li key={i}>
                      <span
                        role="img"
                        aria-label="emoji blue heart"
                        style={{ marginRight: '1em' }}
                      >
                        💙
                      </span>
                      {movie}
                    </li>
                  );
                })}
              </ul>
            )}
            <Button
              className={classes.root}
              onClick={() => {
                window.localStorage.removeItem('favoMovies');
                favoMovies.length = 0;
                window.location.reload();
              }}
              style={{
                display: favoMovies.length !== 0 ? 'block' : 'none',
              }}
            >
              Remove Movies
            </Button>
          </div>
        )}{' '}
        <div>
          <h3>TVs: </h3>
          {favoTvs.length === 0 ? (
            <p>No saved favourite</p>
          ) : (
            <div>
              {process.browser && (
                <ul>
                  {favoTvs.map((tv, i) => {
                    return (
                      <div key={i}>
                        <li key={tv}>
                          <span
                            role="img"
                            aria-label="emoji violet heart"
                            style={{ marginRight: '1em' }}
                          >
                            💜
                          </span>
                          {tv}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              )}
              <Button
                className={classes.root}
                onClick={() => {
                  window.localStorage.removeItem('favoTvs');
                  favoTvs.length = 0;
                  window.location.reload();
                }}
                style={{
                  display: favoTvs.length !== 0 ? 'block' : 'none',
                }}
              >
                Remove Tvs
              </Button>
            </div>
          )}
        </div>
        <div>
          <h3>Tips: </h3>
          {tips.length === 0 ? (
            <p>No saved favourite</p>
          ) : (
            <div>
              {process.browser && (
                <ul>
                  {tips.map((tip) => {
                    return (
                      <li key={tip}>
                        <span
                          role="img"
                          aria-label="emoji yellow heart"
                          style={{ marginRight: '1em' }}
                        >
                          💛
                        </span>
                        {tip}
                      </li>
                    );
                  })}
                </ul>
              )}
              <Button
                className={classes.root}
                onClick={() => {
                  window.localStorage.removeItem('tips');
                  tips.length = 0;
                  window.location.reload();
                }}
                style={{
                  display: tips.length !== 0 ? 'block' : 'none',
                }}
              >
                Remove Tips
              </Button>
            </div>
          )}
        </div>
      </div>

      <div
        className="linkButtons"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '0 auto',
          padding: '1em',
        }}
      >
        <button onClick={() => Router.push('/movie')}>Movie</button>
        <button onClick={() => Router.push('/tv')}>TV </button>
        <button onClick={() => Router.push('/tips')}>Tips&Ideas </button>
        <button onClick={() => Router.push('/actor')}>Actor</button>
      </div>

      <div style={{ margin: '1em auto' }}>
        <Footer />
      </div>

      <style jsx>{`
        .favo-page {
          color: #fff;
          font-family: monospace;
        }
        h2 {
          text-align: center;
          color: #f900ff;
          font-size: 2em;
          background-color: #020411;
          height: 2em;
          margin: 0;
          padding: 0.5em;
          border-bottom: 3px gray solid;
        }
        h3 {
          color: #f900ff;
        }
        li {
          list-style: none;
          color: #c5cace;
        }
        .favo-container {
          padding: 2em;
          background-image: url('/favoImage.jpg');
          background-size: cover;
        }

        button {
          width: 8em;
          height: 3em;
          background-color: #578ebc;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          font-size: 1em;
          color: #fff;
          margin: 1em;
          padding: 0.5em;
          font-family: monospace;
        }
        button:hover {
          background-color: #ced7dee3;
          color: #2196f3e3;
          border: 1px solid #2196f3e3;
        }
        @media (max-width: 600px) {
          ul {
            font-size: 0.8em;
            text-align: left;
          }
          h3 {
            font-size: 1.2em;
          }
          li {
            line-height: 1.8em;
          }
        }
      `}</style>
    </div>
  );
}
