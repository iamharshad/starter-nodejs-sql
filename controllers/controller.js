const Movies = require("../models/movies");

exports.index = (req, res) => {
  Movies.getAllMovies().then(([rows, fieldData]) => {
    res.render("index", {
      movies: rows,
      pageTitle: "Index Page",
      path: "/",
    });
  });
};

exports.add = (req, res) => {
  res.render("add", {});
};

exports.post = (req, res) => {
  Movies.addMovie(
    req.body.title,
    req.body.ratings,
    req.body.posterUrl,
    req.body.trailerUrl,
    req.body.releaseYear,
    req.body.language,
    req.body.genre
  )
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
