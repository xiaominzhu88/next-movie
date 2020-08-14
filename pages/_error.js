import React from 'react';
import Router from 'next/router';

export default function Custom404() {
  return (
    <div className="404page">
      <h1>500 - It's our fault, we will fix it soon</h1>
      <img
        src="/error500.gif"
        alt="error gif Showing a properly dog according the status code"
      />
      <div className="linkButton">
        <button onClick={() => Router.push('/')}>back</button>
      </div>
      <style jsx>{`
        .404page {
          background-image: url('/error.gif');
          background-size: cover;
        }
        h1 {
          font-size: 3em;
          color: red;
          text-align: center;
        }
        .linkButton {
          text-align: center;
          margin: 1em;
        }
        img {
          margin: 0 auto;
          width: 100vw;
        }
        button {
          width: 8em;
          height: 3em;
          background-color: #f44336;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          font-size: 1em;
          color: #fff;
        }
        button:hover {
          background-color: lightblue;
          color: red;
          border: 1px solid red;
        }
      `}</style>
    </div>
  );
}
