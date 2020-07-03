const router = require("express").Router();
const rental = require("../models/current_rental");

router.post("/", async (req, res) => {
  const isbn = req.body.isbn;
  const cardNumber = req.body.cardNumber;
  rental
    .findOneAndDelete({
      cardNumber: cardNumber,
      isbn: isbn,
    })
    .then((user) => res.json('the entry of the returned book is deleted'))
    .catch((err) => console.log(err));
});
module.exports = router;
