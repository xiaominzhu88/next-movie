import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const navLinks = [
    { name: 'About', url: '/' },
    { name: 'Movie', url: '/movie' }, //useDebounce
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
        {/* <p>SIGN UP | LOG IN</p> */}
      </div>
      <style jsx>{`
        h1 {
          letter-spacing: 0.2em;
          font-family: monospace;
          text-shadow: 6px 5px 11px rgb(143 193 233);
          color: #578fbc;
          font-size: 2.5em;
        }
        .typing h1 {
          animation-name: movelok;
          animation-duration: 8s;
          animation-iteration-count: infinite;
        }
        @keyframes movelok {
          from {
            transform: translateX(5vw);
          }
          to {
            transform: translateX(25vw);
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
          display: flex;
        }
        .links {
          display: flex;
          height: 3.8em;
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

        @media (max-width: 800px) {
          h1 {
            font-size: 1.6em;
            text-shadow: 1px 2px 3px rgb(143 193 233);
          }

          p {
            font-size: 0.7em;
          }
          .links {
            font-size: 0.8em;
            letter-spacing: 0.2em;
            padding: 1em;
            flex-direction: column;
            height: auto;
          }
          a {
            line-height: 1.5em;
          }
          .typing h1 {
            animation-name: movelok;
            animation-duration: 4s;
            animation-iteration-count: infinite;
          }
          @keyframes movelok {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(5vw);
            }
          }
        }
      `}</style>
    </div>
  );
}
