import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Link from 'next/link';
import { useFetch } from './useFetch';

export default function Home() {
  const [input, setInput] = useState('a');
  const [year, setYear] = useState(2020);

  //const apiKey = process.env.API_KEY;
  const apiKey = process.env.MovieKey;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const data = useFetch(
    // `https://api.themoviedb.org/3/movie/${input}?api_key=${apiKey}&language=en-US`,
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${input}&include_adult=false&region=us&year=${year}`,
  );

  return (
    <div className="App">
      <Head>
        <title>Movie Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <Header />
        <div className="main">
          <div className="main-image"></div>

          <div className="home">
            <p>
              "It's where I keep all my things. Get a lot of compliments on
              this. Plus, it's not a man-purse. It's called a satchel. Indiana
              Jones wears one." The Hangover (2009)
            </p>
            <div className="hr">
              <p>~~~~~~~~~~~~~~</p>
              <span role="img" aria-label="food emoji">
                🥗
              </span>
              <p>~~~~~~~~~~~~~~</p>
            </div>
            <div className="images">
              <p>Search your Movie:</p>
              <input
                type="text"
                value={input}
                onChange={(e) => handleInput(e)}
              />
              <p>Year: </p>
              <input
                type="text"
                min="0"
                max="100"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <ul>
                {data
                  ? data.map((item, i) => {
                      return (
                        <li key={item.id}>
                          <p>{item.original_title}</p>

                          <Link href="/search">
                            <a>
                              <p>{item.homepage}</p>
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
        .hr {
          display: flex;
          align-items: center;
          justify-content: center;
          color: gray;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          list-style: none;
          margin: 1em auto;
          padding: 1em;
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
        }
      `}</style>
    </div>
  );
}
