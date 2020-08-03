import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <p>About Us</p>
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
      `}</style>
    </div>
  );
}
