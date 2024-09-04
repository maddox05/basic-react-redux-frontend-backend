import express from "express";
import { errLogging } from "../../helpers/utils.js";
import {
  common200ResponseJSON,
  commonErrorResponseJSON,
} from "../routerUtils.js";
import {
  createBook,
  deleteBookById,
  getAllBooks,
  updateBookById,
} from "../../models/books/index.js";
const router = express.Router();

router.post("/create", async function (req, res) {
  try {
    if (req.query.title) {
      const result = await createBook(req.query.title);
      res.status(200).json(result);
    } else {
      res
        .status(400)
        .json(
          commonErrorResponseJSON(400, "add a title query param", req.query)
        );
    }
  } catch (error) {
    errLogging(error, "failed to create book");
    res
      .status(500)
      .json(commonErrorResponseJSON(500, "failed to create book", req.query));
  }
});

router.delete("/delete", async function (req, res) {
  if (req.query.id) {
    try {
      const result = await deleteBookById(req.query.id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json(commonErrorResponseJSON(500, "failed to delete book", req.query));
    }
  } else {
    res
      .status(400)
      .json(commonErrorResponseJSON(400, "add a id query param", req.query));
  }
});

router.patch("/update", async function (req, res) {
  if (req.query.newTitle && req.query.id) {
    try {
      const result = await updateBookById(req.query.id, req.query.newTitle);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json(commonErrorResponseJSON(500, "failed to update book", req.query));
    }
  } else {
    res
      .status(400)
      .json(
        commonErrorResponseJSON(
          400,
          "add a id && newTitle query param",
          req.query
        )
      );
  }
});

router.get("/", async function (req, res) {
  try {
    const result = await getAllBooks();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(commonErrorResponseJSON(500, "failed to get books", req.query));
  }
});

export default router;
