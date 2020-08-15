import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useDebounce from '../hooks/useDebounce';
import TextField from '@material-ui/core/TextField';
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
    margin: '1em',
    fontSize: '0.8em',
    fontFamily: 'monospace',
  },
});

export default function Movie() {
  const [input, setInput] = useState('minions');
  const [year, setYear] = useState(2019);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  // created .env.local file to store api_key
  // export modules with api_key from next.config.js file
  const api_key = process.env.NEXT_PUBLIC_api_key;

  //console.log('PROCESS: ', process.env.NEXT_PUBLIC_api_key);

  const debouncedSearchTerm = useDebounce(input, year, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchResults = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${debouncedSearchTerm}&include_adult=false&region=us&year=${year}`,
        );
        const json = await response.json();
        const dataResults = json.results;
        setData(dataResults || []);
      };
      fetchResults();
    }
  }, [debouncedSearchTerm, api_key, input, year]);

  //console.log('DATA:', data);

  // const data = useFetch(
  //   `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${input}&include_adult=false&region=us&year=${year}`,
  // );

  if (!data) {
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
        Loading...
      </div>
    );
  }

  return (
    <div className="App">
      <Head>
        <title>Movie</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description search movies by name and year"
          content="movies search by name and year"
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
              <p>Select Year: </p>
              <input
                className="selectYear"
                type="number"
                min="1900"
                max="2023"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <form
                style={{
                  margin: '0 auto',
                  textAlign: 'center',
                  padding: '2em',
                }}
              >
                <p>Search your Movie:</p>
                <TextField
                  type="text"
                  minLength="1"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    borderBottom: '1px solid rgb(209 39 224)',
                    width: '30vw',
                  }}
                />
              </form>
              <ul>
                {data.length !== 0 ? (
                  data.map((item, i) => {
                    return (
                      <li key={item.id}>
                        <div className="title">
                          <h2
                            onClick={() => {
                              setOpen((prev) => !prev);
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            {item.original_title}
                          </h2>
                        </div>
                        <div className="parent" key={item.id}>
                          <img
                            src={
                              item.poster_path
                                ? `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                                : '/imgError.jpg'
                            }
                            alt="movie images"
                          />
                          <div
                            key={item.id + 'movie'}
                            className="text"
                            style={{
                              display: open ? 'block' : 'none',
                              overflow: 'scroll',
                              height: '5em',
                              margin: '0.2em auto',
                            }}
                          >
                            {item.overview || 'Ops, no description'}
                            <br />
                            Year: {item.release_date}
                          </div>
                        </div>
                        <Button
                          key={item.id + item.original_title}
                          className={classes.root}
                          onClick={() => {
                            const favoMovies =
                              JSON.parse(
                                window.localStorage.getItem('favoMovies'),
                              ) || [];

                            if (
                              favoMovies.indexOf(item.original_title) === -1
                            ) {
                              window.localStorage.setItem(
                                'favoMovies',
                                JSON.stringify([
                                  ...favoMovies,
                                  item.original_title,
                                ]),
                              );
                              alert('Saved to favourite page');
                            } else {
                              alert('Favourite already exist');
                            }
                          }}
                        >
                          add to favourite
                        </Button>{' '}
                      </li>
                    );
                  })
                ) : (
                  <p
                    style={{
                      textShadow: 'rgb(112 110 110) 0px 2px 3px',
                      color: '#eb1f85',
                    }}
                  >
                    No results, search more movie?
                  </p>
                )}
              </ul>
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
          padding: 4em;
        }

        h2 {
          color: #f3f8fa;
          font-weight: 700;
          background-color: #618dbe;
          padding: 5px;
          transition: all 0.5s ease;
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
          border: 1px #618dbe solid;
        }
        .title {
          display: flex;
          justify-content: center;
        }
        p {
          color: #09426f;
        }
        .main {
          background-image: url('/abstract.jpg');
        }

        .parent {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .parent img {
          vertical-align: middle;
        }
        .parent .text {
          position: absolute;
          bottom: 0;
          background: rgb(0, 0, 0);
          background: rgba(0, 0, 0, 0.5);
          color: #ffffff;
          width: 100%;
          padding: 20px;
        }
        .selectYear {
          width: 6em;
          height: 2em;
          border-radius: 5px;
          border: 2px solid #618dbe;
        }
        .selectYear:focus {
          outline: none;
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
          p {
            font-size: 0.8em;
          }
          ul {
            margin: 4em auto;
            padding: 0.6em;
          }
          .home {
            width: 85vw;
            margin: -4em auto;
            padding: 0.8em;
          }
        }
      `}</style>
    </div>
  );
}
