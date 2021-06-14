const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./db');
app.use(express.json());
const book= require('./books');
/* ==================== */

app.post("/books", book.insertNewBook );
app.get("/books", book.getAllBooks );
app.get("/books/dec",book.booksDescending)
app.get("/books/noPrice",book.getBookWithoutPrice)
app.get("/books/price",book.getBookWithPrice)
app.put("/books/:book_id", book.updateBookById );



/* ==================== */

const PORT = 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});
