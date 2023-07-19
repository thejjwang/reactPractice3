import React from 'react';

const movies = [
  {
    title: 'Star Wars',
    director: 'George Lucas',
    yearReleased: 1977,
  },
  {
    title: 'Jurassic Park',
    director: 'Stephen Spielberg',
    yearReleased: 1993,
  },
  {
    title: 'Superbad',
    director: 'Greg Mottola',
    yearReleased: 2007,
  },
];

const MovieList = () => {
  return (
    <div>
      <h2>Movie List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Year Released</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.yearReleased}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
