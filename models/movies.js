const db = require("../util/database");
module.exports = class Movies {
  static getAllMovies() {
    return db.execute("SELECT * from movies");
  }

  static addMovie(
    title,
    ratings,
    posterUrl,
    trailerUrl,
    releaseYear,
    language,
    genre
  ) {
    return db.execute(
      "INSERT INTO movies (title,ratings,posterUrl,trailerUrl,releaseYear,language,genre) VALUES (?,?,?,?,?,?,?)",
      [title, ratings, posterUrl, trailerUrl, releaseYear, language, genre]
    );
  }
};
