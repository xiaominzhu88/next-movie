import React, { useState } from 'react';
import useSWR from 'swr';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PopUp from '../Components/PopUp';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tv() {
  const apiKey = process.env.MovieKey;
  const [tvPage, setTvPage] = useState(1);
  const [showText, setShowText] = useState(false);
  const [warning, setWarning] = useState('');
  const [visible, setVisible] = useState(false);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=cn&page=${tvPage}`,
    fetcher,
  );
  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';

  console.log('TVDATA:', data);

  const togglePop = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };

  return (
    <div className="tv">
      <Header />
      <div className="wrapper">
        <h3>
          More Popular TVs? <br />
          more than 400 pages!{' '}
        </h3>
        <button
          onClick={() => {
            if (tvPage < 450) {
              setTvPage(tvPage + 1);
            } else {
              setWarning('No more Pages! ⛳️');
              togglePop();
            }
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            if (tvPage > 1) {
              setTvPage(tvPage - 1);
            } else {
              setWarning('Page starts from 1! 🈲');
              togglePop();
            }
          }}
        >
          Back
        </button>

        <p>Page: {tvPage}</p>
      </div>
      <div className="tv-container">
        <ul>
          {data.results.map((tv, i) => {
            return (
              <li key={tv.id}>
                <h2 onClick={() => setShowText(!showText)}>{tv.name}</h2>

                <div
                  className="overview"
                  style={{ display: showText ? 'block' : 'none' }}
                >
                  {tv.overview || (
                    <>
                      <p>
                        <span role="img" aria-label="language emoji">
                          🧚‍♀️
                        </span>
                        Language: {tv.original_language}
                      </p>
                      <p>
                        <span role="img" aria-label="language emoji">
                          🎗
                        </span>
                        Popularity: {tv.popularity}
                      </p>
                    </>
                  )}
                </div>
                <img
                  src={
                    tv.poster_path
                      ? `https://image.tmdb.org/t/p/w342/${tv.poster_path}`
                      : '/imgError.jpg'
                  }
                  alt="tv images"
                />
              </li>
            );
          })}
          <div className="popup">
            {visible ? (
              <PopUp toggle={togglePop} warning={warning} close={close} />
            ) : null}
          </div>
        </ul>
      </div>
      <Footer />
      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: flex-start;
          list-style: none;
          padding: 1em;
          margin: 0.2em 2em;
          background: #00bcd41a;
          border-radius: 10px;
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
          cursor: pointer;
          overflow-x: scroll;
          height: 2.2em;
          width: 20vw;
          font-size: 1em;
        }
        h2:hover {
          background-color: #f3f8fa;
          color: #618dbe;
        }
        img {
          width: 342px;
          height: 513px;
          box-shadow: 5px 11px 18px gray;
          margin: 0 auto;
        }
        .overview {
          background-color: #607d8bb8;
          width: 23vw;
          height: 6em;
          position: absolute;
          overflow: scroll;
          margin: -1em auto;
          borderradius: 5px;
          letterspacing: 0.1em;
          padding: 5px;
          border-radius: 5px;
        }
        .wrapper {
          background-image: url('/tvImage.jpeg');
          background-attachment: fixed;
          box-shadow: 3px 11px 18px #b3d1e9;
          padding: 0.5em;
          margin: 0 auto;
          text-align: center;
          color: #fff;
          font-family: monospace;
          font-size: 1em;
          font-weight: 700;
        }
        h3 {
          font-size: 1.5em;
          width: 40vw;
          margin: 0.5em auto;
          padding: 1em;
          background: #2196f357;
          color: #ce76dd;
        }
        p {
          text-align: center;
          font-family: monospace;
          color: #fff;
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
  );
}
