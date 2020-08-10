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
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const useStyles = makeStyles((theme) => ({
  root: {
    height: 48,
    background: 'linear-gradient(45deg, #F44336 15%, #03A9F4 95%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgb(204 192 206)',
    color: 'white',
    padding: '0 30px',
    margin: '0.5em',
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
}));

export default function Tips() {
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState(1);
  const [showText, setShowText] = useState(false);
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const apiKey = process.env.MovieKey;

  const handleChange = () => {
    setChecked((prev) => !prev);
    setToggle(true);
  };
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
              onClick={notify}
            />
          </Box>
          <ToastContainer />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '2em auto',
        }}
      >
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Button className={classes.root} onClick={() => setPage(page + 1)}>
          More ?
        </Button>
      </div>
      <div className={`${classes.container} ${classes.root}`}>
        <ul style={{ display: toggle ? 'flex' : 'none' }}>
          <Fade in={checked}>
            <Paper
              className={classes.paper}
              style={{
                display: toggle ? 'flex' : 'none',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}
            >
              {data
                ? data.map((popData, i) => {
                    return (
                      <li key={popData.id}>
                        <h2 onClick={() => setShowText(!showText)}>
                          {popData.title}
                        </h2>
                        <Button
                          className={classes.root}
                          style={{
                            width: '8em',
                            fontSize: '0.8em',
                            fontFamily: 'monospace',
                          }}
                          onClick={() => {
                            const tips =
                              JSON.parse(window.localStorage.getItem('tips')) ||
                              [];

                            window.localStorage.setItem(
                              'tips',
                              JSON.stringify([...tips, popData.title]),
                            );
                          }}
                        >
                          Add to Favourite
                        </Button>
                        <p>
                          <span role="img" aria-label="emoji movie">
                            🎞 Released:
                          </span>
                          {popData.release_date}
                        </p>
                        <p>
                          <span role="img" aria-label="emoji movie">
                            🏵 Popularity:
                          </span>
                          {popData.popularity}
                        </p>
                        <div className="parent">
                          <img
                            alt="pop movies"
                            src={
                              popData.poster_path
                                ? `https://image.tmdb.org/t/p/w342/${popData.poster_path}`
                                : '/imgError.jpg'
                            }
                          />
                          <div
                            className="text"
                            style={{
                              display: showText ? 'block' : 'none',
                              overflow: ' scroll',
                              height: '4.5em',
                              margin: '0.5em auto',
                            }}
                          >
                            {popData.overview}
                          </div>
                        </div>
                      </li>
                    );
                  })
                : null}
            </Paper>
          </Fade>
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
        li {
          margin: 1em;
        }
        h2 {
          color: #f3f8fa;
          font-weight: 700;
          background: linear-gradient(45deg, #586465 10%, #03a9f4 80%);
          padding: 5px;
          transition: all 0.5s ease;
          border: 1px solid #fff;
          border-radius: 5px;
          font-family: monospace;
          overflow-x: scroll;
          height: 2.5em;
          width: 20vw;
          font-size: 1em;
          cursor: pointer;
          text-align: center;
        }
        h2:hover {
          background: #cad1d3;
          color: #618dbe;
        }
        p {
          color: #09426f;
          font-family: monospace;
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
      `}</style>
    </div>
  );
}
