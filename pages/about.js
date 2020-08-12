import React from 'react';
import Head from 'next/head';
import Header from '../Components/Header';
import Link from 'next/link';

export default function About({ description }) {
  return (
    <>
      <div className="App">
        <Head>
          <title>Movie Next</title>
          <link rel="icon" href="/favicon.jpg" />
          <meta
            name="description search movie with names and years"
            content="movie search with names and years"
          />
        </Head>
        <div>
          <Header />
          <div>
            <h1>about us</h1>
            <h3>
              Use your own words, or search with titles, actors, genres etc. We
              find movies for you 🎞
            </h3>
          </div>
          <ul>
            {description.map((item, i) => {
              return (
                <li key={i} className={item.className}>
                  <h2>{item.name}</h2>
                  <Link href={item.url}>
                    <a>
                      <img
                        src={item.src}
                        alt="description"
                        width="500px"
                        height="300px"
                      />
                    </a>
                  </Link>
                  <h2>{item.description}</h2>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const { getDescriptions } = await import('../db.js');
  const description = getDescriptions();

  console.log('DESCRIPTION: ', description);

  return {
    props: {
      description: description === null ? {} : description,
    },
  };
}
