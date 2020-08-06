import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Link from 'next/link';
import { useFetch } from './useFetch';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    opacity: 0.9,
    backgroundColor: '#ffff',
    width: '23vw',
    height: '10em',
    color: '#3F51B5',
    position: 'absolute',
    overflow: 'scroll',
    margin: '-1em auto',
    borderRadius: '5px',
    letterSpacing: '0.1em',
    padding: theme.spacing(1),
  },
}));

export default function Home() {
  const [input, setInput] = useState('a');
  const [year, setYear] = useState(2020);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const apiKey = process.env.MovieKey;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const { data, loading } = useFetch(
    // `https://api.themoviedb.org/3/movie/${input}?api_key=${apiKey}&language=en-US`,
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${input}&include_adult=false&region=us&year=${year}`,
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="App">
        <Head>
          <title>Movie Next</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description search movie with names and years"
            content="movie search with names and years"
          />
        </Head>

        <main className="App">
          <Header />
          <div className="main">
            <div className="main-image"></div>

            <div className="home">
              <p className="quote">
                "It's where I keep all my things. Get a lot of compliments on
                this. Plus, it's not a man-purse. It's called a satchel. Indiana
                Jones wears one." The Hangover (2009)
              </p>
              <div className="hr">
                <span>~~~~~~~~~~~~~~</span>
                <span role="img" aria-label="food emoji">
                  🥃
                </span>
                <span>~~~~~~~~~~~~~~</span>
              </div>
              <div className="images">
                <p>Search your Movie:</p>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => handleInput(e)}
                />
                <p>Select Year: </p>
                <input
                  type="text"
                  min="0"
                  max="100"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
                {loading ? (
                  <p>Loadding...</p>
                ) : (
                  <ul>
                    {data
                      ? data.map((item, i) => {
                          return (
                            <li key={item.id}>
                              <h2
                                onClick={handleClick}
                                className={classes.root}
                                style={{ cursor: 'pointer' }}
                              >
                                {item.original_title}
                              </h2>
                              {open ? (
                                <div className={classes.dropdown} id="drowdown">
                                  {item.overview || 'Ops, no description'}
                                </div>
                              ) : null}

                              <Link href="/">
                                <a>
                                  <img
                                    src={
                                      item.poster_path
                                        ? `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                                        : '/imgError.jpg'
                                    }
                                    alt="images"
                                  />
                                </a>
                              </Link>
                            </li>
                          );
                        })
                      : 'No Search Result'}
                  </ul>
                )}
                )
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <style jsx>{`
          .App {
            display: flex;
            flex-direction: column;
            height: calc(100vh-10px);
          }
          .main-image {
            background-image: url('/mainImage.jpg');
            background-attachment: fixed;
            background-size: cover;
            height: 10em;
            box-shadow: 3px 11px 18px #b3d1e9;
          }
          .home {
            background-image: linear-gradient(45deg, #578fbc, #c5d9e9);
            width: 80vw;
            margin: -5em auto;
            padding: 1em;
            border-radius: 10px;
            font-family: monospace;
            line-height: 1.5em;
            text-align: center;
            letter-spacing: 0.3em;
            box-shadow: 5px 11px 18px #fff;
          }
          .quote {
            width: 40vw;
            margin: 1em auto;
            text-shadow: 1px 3px 3px #f5f5f5;
            color: #1063a5;
          }
          .hr {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #03a9f4;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: flex-start;
            list-style: none;
            margin: 1em auto;
            padding: 2em;
          }

          h2 {
            color: #f3f8fa;
            font-weight: 700;
            background-color: #618dbe;
            padding: 5px;
            transition: all 0.5s ease;
            border: 1px solid #fff;
            border-radius: 5px;
            font-family: monospace;
            overflow-x: scroll;
            height: 2em;
            width: 20vw;
            font-size: 1em;
          }
          h2:hover {
            background-color: #f3f8fa;
            color: #618dbe;
          }
          p {
            color: #09426f;
          }
          .main {
            background-image: url('/abstract.jpg');
          }
          img {
            width: 342px;
            height: 513px;
            box-shadow: 5px 11px 18px gray;
          }
          @media (max-width: 600px) {
            img {
              width: 160px;
              height: 240px;
            }
            h2 {
              font-weight: 500;
              height: 2.2em;
              width: 160px;
              font-size: 0.9em;
            }
          }
        `}</style>
      </div>
    </ClickAwayListener>
  );
}
