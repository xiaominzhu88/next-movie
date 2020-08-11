import React from 'react';

export default function Namelist({ nameData }) {
  return (
    <>
      {nameData
        ? nameData.map((el, i) => {
            const knownfor = el.known_for.map((film) => film.original_title);
            const paths = el.known_for.map((path) => path.poster_path);
            const department = el.known_for_department;

            return (
              <ul key={i}>
                <div
                  key={i - 1}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#03A9F4',
                  }}
                >
                  <h2
                    style={{
                      marginRight: '0.5em',
                      fontFamily: 'monospace',
                    }}
                  >
                    {el.name}
                  </h2>
                  ~~
                  {department && department}{' '}
                  <p style={{ marginLeft: '5px' }}>movie</p>
                </div>
                <div
                  key={`department_${el.id}`}
                  style={{
                    display: 'block',
                    color: 'hotpink',
                    fontFamily: 'monospace',
                  }}
                >
                  <span role="img" aria-label="emoji butterfly">
                    🦋
                  </span>{' '}
                  {knownfor
                    ? knownfor.map((item, k) => {
                        return (
                          <li key={k}>
                            <p>{item}</p>
                          </li>
                        );
                      })
                    : null}{' '}
                </div>
                <div className="imgs" key={i + 1}>
                  {paths &&
                    paths.map((path, j) => {
                      return (
                        <li key={j}>
                          <img
                            alt="actor known for"
                            src={
                              path
                                ? `https://image.tmdb.org/t/p/w342/${path}`
                                : '/imgError.jpg'
                            }
                          />
                        </li>
                      );
                    })}
                </div>
              </ul>
            );
          })
        : 'Search for Actor?'}

      <style jsx>{`
        .imgs {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: flex-start;
          list-style: none;
          margin: 1em auto;
        }
        ul {
          list-style: none;
        }
      `}</style>
    </>
  );
}
