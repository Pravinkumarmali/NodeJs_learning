// <----- Seprate Middleware. ----->

module.exports = (req, res, next) => {
    if (!req.query.age) {
      res.send("Please provide age.");
    } else {
      res.send("Success");
      next();
    }
  };
  