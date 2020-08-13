import React from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <div className="footer">
      <Link href="/about">
        <a>
          <p>About Us</p>
        </a>
      </Link>
      <p>Contact</p>
      <div>
        <p>@</p>
      </div>
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;
          font-weight: 800;
          background-color: gray;
          color: #fff;
          box-shadow: 5px 11px 18px rgba(0, 0, 0, 0.33);
          text-align: center;
          padding: 25px;
          flex: 1;
          width: 100vw;
          font-family: monospace;
        }
        @media (max-width: 600px) {
          .footer {
            bottom: 0;
            position: fixed;
            width: 100%;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}
