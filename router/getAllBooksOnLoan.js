//this is considering the id of book is unique so finding by that
const router = require("express").Router();
const book = require("../models/book");
const rental = require("../models/current_rental");

router.get("/", async (req, res) => {
    const ans =[];

  rental
    .find()
    .stream()
    .on("data", function (doc) {
        ans.push(doc.book);
      console.log(doc.book);
    })
    .on("error", function (err) {
      res.json(err);
    }).on('end', function(){
        // final callback
        res.json(ans);
      });
});
module.exports = router;
