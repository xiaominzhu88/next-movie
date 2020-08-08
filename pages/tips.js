import React, { useState } from 'react';
import Header from '../Components/Header';
//import Footer from '../Components/Footer';
import Head from 'next/head';
import { useFetch } from './useFetch';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import { toast, ToastContainer } from 'react-toastify';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

export default function Tips() {
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState(1);
  const apiKey = process.env.MovieKey;

  const data = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`,
  );

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

  console.log('TIP: ', data);

  const toggleShow = () => {
    setToggle(!toggle);
  };
  const notify = () => {
    toast('💞Thank you for your rating💞', {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      type: 'info',
      limit: 1,
    });
  };
  return (
    <div>
      <Head>
        <title>Tips and Ideas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description popular tv search" content="TV search" />
      </Head>
      <div className="TipsContainer">
        <Header />
        <div className="popButton">
          <button onClick={toggleShow}>Popular Movies</button>
          <button onClick={() => setPage(page + 1)}>more?</button>

          <div
            style={{
              display: toggle ? 'block' : 'none',
              margin: '1em',
            }}
            className="rate"
          >
            <Box style={{ width: '10vw', margin: '0 auto' }}>
              <StyledRating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? 's' : ''}`
                }
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
              />
            </Box>
            <button onClick={notify}>rate us here</button>
            <ToastContainer />
          </div>
        </div>

        <ul style={{ display: toggle ? 'flex' : 'none' }}>
          {data
            ? data.map((popData, i) => {
                return (
                  <li key={popData.id}>
                    <h2>{popData.title}</h2>
                    <p>
                      <span role="img" aria-label="emoji movie">
                        🎞
                      </span>
                      {popData.release_date}
                    </p>
                    <img
                      alt="pop movies"
                      src={
                        popData.poster_path
                          ? `https://image.tmdb.org/t/p/w342/${popData.poster_path}`
                          : '/imgError.jpg'
                      }
                    />
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      {/* <Footer /> */}
      <style jsx>{`
        .popButton {
          margin: 1em auto;
          text-align: center;
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
          height: 2.5em;
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
      `}</style>
    </div>
  );
}
