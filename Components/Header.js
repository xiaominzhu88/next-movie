import React from 'react';
import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { name: 'Recipes', url: '/recipes' },
    { name: 'Search by ingredient', url: '/search' },
    { name: 'Tips&Ideas', url: '/tips' },
  ];
  return (
    <div className="header">
      <div className="nav">
        <h1>-----What to eat today?-----</h1>
      </div>
      <div className="links">
        {navLinks.map((link, i) => {
          return (
            <Link href={link.url} key={i}>
              <a>{link.name}</a>
            </Link>
          );
        })}
        <p>SIGN UP | LOG IN</p>
      </div>
      <style jsx>{`
        .nav {
          margin: 0 auto;
          font-weight: 800;
          background-image: url('/mainImage.jpg');
          background-attachment: fixed;
          background-size: cover;
          box-shadow: 3px 11px 18px #b3d1e9;
          text-align: center;
          padding: 25px;
        }
        .links {
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 1em;
          margin: 0 auto;
        }
        p {
          font-size: 1em;
          color: hotpink;
        }
        a {
          color: #578fbc;
          font-size: 1.2em;
          font-weight: 700;
          line-height: 1em;
          font-family: monospace;
        }
        @media (max-width: 700px) {
          h1 {
            font-size: 1.6em;
          }
          .nav {
            display: flex;
            flex-direction: column;
          }
          p {
            font-size: 0.7em;
          }
          .links {
            display: flex;
            flex-direction: column;
            align-content: space-between;
            font-size: 0.8em;
            letter-spacing: 0.2em;
          }
          a {
            line-height: 1.5em;
          }
        }
      `}</style>
    </div>
  );
}
