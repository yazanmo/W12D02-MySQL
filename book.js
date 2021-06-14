const db = require("./db");


const insertNewBook = (req, res) => {
  const { title, author, published_at, price } = req.body;

  const query = `INSERT INTO books  (title, author, published_at, price) VALUES (?,?,?,?);`;
  const arr = [title, author, published_at, price];

  db.query(query, arr, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
  });
};

const getAllBooks = (req, res) => {
  const query = `SELECT * FROM books`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

const updateBookById = (req, res) => {
  const { title, author, published_at, price } = req.body;
  const query = `UPDATE books SET title=?,author=? ,published_at=?, price=?  WHERE id = ?;`;
  const data = [title, author, published_at, price, req.params.book_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};


const booksDescending = (req,res)=>{
  const query = `SELECT * FROM books  ORDER BY price DESC;`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

const getBookWithoutPrice =(req,res)=>{
const query = ` SELECT * FROM books where price IS NULL;`
db.query(query, (err, result) => {
  if (err) throw err;
  res.status(200).json(result);
});
};
const getBookWithPrice =(req,res)=>{
  const query = ` SELECT * FROM books where price IS NOT NULL;`
db.query(query, (err, result) => {
  if (err) throw err;
  res.status(200).json(result);
});

};

module.exports = {
  insertNewBook,
  getAllBooks,
  updateBookById,
  booksDescending,
  getBookWithoutPrice,
  getBookWithPrice
};