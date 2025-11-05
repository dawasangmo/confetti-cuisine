// controllers/errorController.js

const pageNotFoundError = (req, res) => {
  res.status(404);
  res.render("error");
};

const internalServerError = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500);
  res.send("500 - Server Error");
};

export default {
  pageNotFoundError,
  internalServerError
};
