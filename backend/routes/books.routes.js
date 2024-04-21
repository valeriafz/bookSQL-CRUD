import express from "express";
import db from "../database/connection.js";

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM test.books";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  const query = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created");
  });
});

router.put("/:id", (req, res) => {
  const bookId = req.params.id;

  const query =
    "UPDATE books SET `title` = ?, `desc` = ?, `cover` = ? WHERE id = ?";

  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(query, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated");
  });
});

router.delete("/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "DELETE FROM books WHERE id = ?";
  db.query(query, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted");
  });
});

export default router;
