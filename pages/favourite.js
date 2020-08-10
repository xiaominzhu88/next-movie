import React from 'react';
import Header from '../Components/Header';
import Router from 'next/router';

export default function Favourite() {
  let favoMovies = [];
  let favoTvs = [];
  let tips = [];

  if (typeof window !== 'undefined') {
    favoMovies = JSON.parse(window.localStorage.getItem('favoMovies')) || [];
    favoTvs = JSON.parse(window.localStorage.getItem('favoTvs')) || [];
    tips = JSON.parse(window.localStorage.getItem('tips')) || [];
  }

  return (
    <div className="recipes-page">
      <Header />
      <h2>Favourite</h2>
      <div className="favo-container">
        <div>
          <h3>Movies : </h3>

          {favoMovies.length === 0 ? (
            <p>No saved favourite</p>
          ) : (
            favoMovies.map((movie) => (
              <li>
                <span
                  role="img"
                  aria-label="emoji blue heart"
                  style={{ marginRight: '1em' }}
                >
                  💙
                </span>
                {movie}
              </li>
            ))
          )}
          <button
            onClick={() => {
              window.localStorage.removeItem('favoMovies');
              favoMovies.length = 0;
              window.location.reload();
            }}
            style={{ display: favoMovies.length !== 0 ? 'block' : 'none' }}
          >
            Remove Movies
          </button>
        </div>
        <div>
          <h3>TVs : </h3>

          {favoTvs.length === 0 ? (
            <p>No saved favourite</p>
          ) : (
            favoTvs.map((tv) => (
              <li>
                <span
                  role="img"
                  aria-label="emoji violet heart"
                  style={{ marginRight: '1em' }}
                >
                  💜
                </span>
                {tv}
              </li>
            ))
          )}
          <button
            onClick={() => {
              window.localStorage.removeItem('favoTvs');
              favoTvs.length = 0;
              window.location.reload();
            }}
            style={{ display: favoTvs.length !== 0 ? 'block' : 'none' }}
          >
            Remove Tvs
          </button>
        </div>
        <div>
          <h3>Tips : </h3>

          {tips.length === 0 ? (
            <p>No saved favourite</p>
          ) : (
            tips.map((tip) => (
              <li>
                <span
                  role="img"
                  aria-label="emoji yellow heart"
                  style={{ marginRight: '1em' }}
                >
                  💛
                </span>
                {tip}
              </li>
            ))
          )}
          <button
            onClick={() => {
              window.localStorage.removeItem('tips');
              tips.length = 0;
              window.location.reload();
            }}
            style={{ display: tips.length !== 0 ? 'block' : 'none' }}
          >
            Remove Tips
          </button>
        </div>
        <div className="linkButtons">
          <button onClick={() => Router.push('/')}>Back to Movie page</button>
          <button onClick={() => Router.push('/tv')}>Back to TV page</button>
          <button onClick={() => Router.push('/tips')}>
            Back to Tips&Ideas page
          </button>
          <button onClick={() => Router.push('/actor')}>
            Back to Search Actor page
          </button>
        </div>
      </div>
      <style jsx>{`
        h2 {
          text-align: center;
        }
        li {
          list-style: none;
        }
        .favo-container {
          padding: 2em;
        }
        button {
          margin: 2em;
        }
        .linkButtons {
          margin: 1em auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
