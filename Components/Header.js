import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const navLinks = [
    { name: 'About', url: '/about' },
    { name: 'Movie', url: '/' }, //useDebounce
    { name: 'TV', url: '/tv' }, //useSWR
    { name: 'Search Actor', url: '/actor' }, //useDebounce
    { name: 'Tips&Ideas', url: '/tips' }, // useFetch
    { name: 'Favourite', url: '/favourite' },
  ];
  return (
    <div className="header">
      <div className="nav typing">
        <h1>What is my movie?</h1>
      </div>
      <div className="links">
        {navLinks.map((link, i) => {
          return (
            <Link href={link.url} key={i}>
              <a className={router.pathname === link.url ? 'active' : ''}>
                {link.name}
              </a>
            </Link>
          );
        })}
        <p>SIGN UP | LOG IN</p>
      </div>
      <style jsx>{`
        h1 {
          letter-spacing: 0.2em;
          font-family: serif;
          text-shadow: 6px 5px 13px rgb(143 193 233);
          color: #578fbc;
        }
        .typing h1 {
          overflow: hidden;
          animation: typing 3s steps(50, end);
        }
        @keyframes typing {
          from {
            width: 50%;
          }
          to {
            width: 100%;
          }
        }
        .nav {
          margin: 0 auto;
          font-weight: 800;
          background-image: url('/mainImage.jpg');
          background-attachment: fixed;
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
          background: #17465c;
        }

        p {
          font-size: 1em;
          color: #9e9e9e;
        }
        a {
          color: #578fbc;
          font-size: 1.2em;
          font-weight: 700;
          line-height: 1em;
          font-family: monospace;
        }
        a:hover,
        .active {
          color: #fff;
          text-decoration: underline;
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
