import React from 'react';

export default function PopUp(props) {
  const handleClick = () => {
    props.close();
  };

  return (
    <div className="popup">
      <div className="popup_inner">
        <span
          className="close"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          &times;{' '}
        </span>
        <p>{props.text}</p>
      </div>

      <style jsx>{`
        .popup_inner {
        }

        .popup {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          background-color: rgba(0, 0, 0, 0.2);
        }

        p {
          margin: 2.5em auto;
        }
        span {
          font-size: 3em;
          float: right;
        }

        .popup_inner {
          text-align: center;
          font-family: 'Fira Mono', monospace;
          color: rgb(221, 23, 90);
          background-color: #f6f0f0;
          width: 50%;
          margin: auto;
          padding: 1em;
          border-radius: 10px;
          position: absolute;
          left: 25%;
          right: 25%;
          top: 25%;
          bottom: 25%;
          animation: popupA 0.8s;
        }

        @keyframes popupA {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.4);
          }
          70% {
            transform: scale(1.2);
          }

          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
