const errorHandler = (err, req, res, next) => {
    res.status(404).send('Something went wrong!, Plaese try Again Later')
  }

module.exports = errorHandler;