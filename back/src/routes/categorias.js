import express from "express";
import Category from "./../models/category";
import verifyToken from "../middleware/middleware";

var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  Category.find((error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

router.delete("/:id", function(req, res, next) {
  Category.findOneAndDelete(
    {
      _id: req.params.id
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

router.post("/", function(req, res, next) {
  const newCategory = new Category({
    nombre: req.body.nombre
  });
  newCategory.save((error, item) => {
    if (error) {
      res.send(error);
    } else {
      res.send(item);
    }
  });
});


export default router;
