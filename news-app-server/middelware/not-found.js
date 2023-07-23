const notFound = (req, res, next) => {
      res.status(404).send("Sorry, Routes does not exist!")
}

module.exports = notFound;