import React from 'react';

export default function Namelist({ nameData }) {
  return (
    <>
      {nameData
        ? nameData.map((el, i) => {
            const knownfor = el.known_for.map((film) => film.original_title);
            const paths = el.known_for.map((path) => path.poster_path);
            const ids = el.known_for.map((id) => id.id);

            return (
              <ul key={ids.map((id) => id)}>
                <h2>{el.name}</h2>
                <h3>Known for: </h3>

                {knownfor &&
                  knownfor.map((item, k) => {
                    return (
                      <li key={k}>
                        <p>{item}</p>
                      </li>
                    );
                  })}

                <div className="imgs" key={ids.map((id) => id + 1)}>
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
        : null}
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
