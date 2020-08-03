import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Home() {
  const [data, setData] = useState('');

  const apiKey = process.env.apiKey;

  const url = `https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': `${apiKey}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('DATA:', data);
        setData(result.data);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="App">
      <Head>
        <title>Food Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <Header />
        <div className="main">
          <div className="main-image"></div>

          <div className="recipes">
            <p>
              Find tonight's dinner faster with easy-to-browse collections, each
              stocked with all the simple dinner ideas your busy nights need.
            </p>
            <div className="hr">
              <p>~~~~~~~~~~~~~~</p>
              <span role="img" aria-label="food emoji">
                🥗
              </span>
              <p>~~~~~~~~~~~~~~</p>
            </div>
            <div className="images"></div>
          </div>
        </div>
      </main>

      <Footer />
      <style jsx>{`
        .App {
          display: flex;
          flex-direction: column;
          height: calc(100vh);
        }
        .main-image {
          background-image: url('/mainImage.jpg');
          background-attachment: fixed;
          background-size: cover;
          height: 10em;
          box-shadow: 3px 11px 18px #b3d1e9;
        }
        .recipes {
          background-color: #fff;
          width: 80vw;
          margin: -2.5em auto;
          padding: 1em;
          border-radius: 10px;
          font-family: monospace;
          line-height: 1.5em;
          text-align: center;
          letter-spacing: 0.3em;
        }
        .hr {
          display: flex;
          align-items: center;
          justify-content: center;
          color: gray;
        }
      `}</style>
    </div>
  );
}
