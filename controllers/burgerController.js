const express = require("express");
const router = express.Router();
const burger = require("../models/burger")


router.get("/", (req, res) => {
  burger.selectAll(data => {
    const hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne({ devoured: 1 }, condition,  result => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


router.delete("/api/burgers/:id", (req, res) => {
  burger.deleteOne("id", req.params.id, (data) => {
    res.json(data);
  });
});

module.exports = router;