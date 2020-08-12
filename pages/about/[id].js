import React from 'react';
import Head from 'next/head';
import Header from '../../Components/Header';
import Router from 'next/router';
import Button from '@material-ui/core/Button';

export default function Description({ useInfo }) {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description about viewport" content=" description about" />
      </Head>
      <Header />
      <main>
        <h1>{useInfo.title}</h1>
        <h3>{useInfo.subtitle}</h3>
        <video
          height="420px"
          width="750px"
          controls
          autostart="true"
          autoPlay
          muted
          src={useInfo.videosrc}
        />

        <p>{useInfo.text}</p>
      </main>

      <div className="back" style={{ textAlign: 'center', padding: '1em' }}>
        <Button
          variant="contained"
          color="inherit"
          style={{ color: 'red', margin: '1em auto' }}
          onClick={() => Router.push('/about')}
        >
          Back{' '}
          <span role="img" aria-label="emoji" style={{ marginLeft: '0.5em' }}>
            💫
          </span>
        </Button>
      </div>
      <style jsx>{`
        main {
          text-align: center;
          margin: 1.5em auto;
        }
        p {
          width: 50vw;
          margin: 2em auto;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getDescriptionById } = await import('../../db.js');
  const useInfo = await getDescriptionById(context.params.id);

  console.log('PARAMS', useInfo);

  return {
    props: {
      useInfo: useInfo === null ? {} : useInfo[0],
    },
  };
}
