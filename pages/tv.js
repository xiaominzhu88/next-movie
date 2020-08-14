import React, { useState } from 'react';
import useSWR from 'swr';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PopUp from '../Components/PopUp';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const fetcher = (url) => fetch(url).then((res) => res.json());

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
export default function Tv() {
  const api_key = process.env.NEXT_PUBLIC_api_key;
  const [tvPage, setTvPage] = useState(1);
  const [showText, setShowText] = useState(false);
  const [warning, setWarning] = useState('');
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=cn&page=${tvPage}`,
    fetcher,
  );
  if (error)
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
        <p>'An error has occurred.'</p>
      </div>
    );
  if (!data)
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

  //console.log('TVDATA:', data);

  const togglePop = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };

  return (
    <div className="tv">
      <Head>
        <title>TV search</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description get popular tvs " content="get popular tvs" />
      </Head>
      <div className="wrapper">
        <Header />
        <div className="info">
          <h3>
            More Popular TVs? <br />
            more than 400 pages!{' '}
          </h3>
          <Button
            className={classes.root}
            onClick={() => {
              if (tvPage < 450) {
                setTvPage((pre) => pre + 1);
              } else {
                setWarning('No more Pages! ⛳️');
                togglePop();
              }
            }}
          >
            Next
          </Button>
          <Button
            className={classes.root}
            onClick={() => {
              if (tvPage > 1) {
                setTvPage((pre) => pre - 1);
              } else {
                setWarning('Page starts from 1! 🈲');
                togglePop();
              }
            }}
          >
            Back
          </Button>

          <p className="spanNum">
            Page: <span>{tvPage}</span>
          </p>
        </div>
      </div>
      <div className="tv-container">
        <ul>
          {data
            ? data.results.map((tv, i) => {
                return (
                  <li key={tv.id}>
                    <h2 onClick={() => setShowText(!showText)}>{tv.name}</h2>
                    <div
                      className="overview"
                      style={{ display: showText ? 'block' : 'none' }}
                    >
                      {tv.overview || (
                        <div>
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
                        </div>
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
                    <div>
                      <Button
                        className={classes.root}
                        onClick={() => {
                          const favoTvs =
                            JSON.parse(
                              window.localStorage.getItem('favoTvs'),
                            ) || [];
                          if (favoTvs.indexOf(tv.name) === -1) {
                            window.localStorage.setItem(
                              'favoTvs',
                              JSON.stringify([...favoTvs, tv.name]),
                            );
                            alert('Saved to favourite page');
                          } else {
                            alert('Favourite already exist');
                          }
                        }}
                      >
                        add to favourite
                      </Button>{' '}
                    </div>
                  </li>
                );
              })
            : []}
          <div className="popup">
            {visible ? (
              <PopUp toggle={togglePop} warning={warning} close={close} />
            ) : null}
          </div>
        </ul>
      </div>
      <Footer />
      <style jsx>{`
        span {
          color: #ce76dd;
        }
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
          color: #fff;
          font-weight: 700;
          background-color: #3f51b5;
          padding: 10px;
          transition: all 0.5s ease;
          border-radius: 5px;
          font-family: monospace;
          cursor: pointer;
          overflow-x: scroll;
          height: 2.5em;
          width: 20vw;
          font-size: 1em;
          margin: 1.5em;
          text-align: center;
        }
        h2:hover {
          background-color: #f3f8fa;
          color: #618dbe;
          border: 1px solid #3f51b5;
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
          margin: 0 auto;
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
        .info {
          font-size: 1.5em;
          width: 40vw;
          margin: 0.5em auto;
          padding: 0.5em;
          background: #2196f357;
          color: #ce76dd;
        }

        .spanNum {
          text-align: center;
          font-family: monospace;
          color: #fff;
          border-top: 1px solid #00bcd4;
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
          .info {
            width: 65vw;
          }
          h3 {
            font-size: 0.6em;
          }
          ul {
            padding: 0.8em;
            margin: 0em auto;
            text-align: center;
          }
          img {
            width: 150px;
            height: 200px;
          }
          .overview {
            width: 35%;
          }
        }
      `}</style>
    </div>
  );
}
