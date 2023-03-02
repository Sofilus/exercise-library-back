var express = require('express');
var router = express.Router();

let books = [{name: "Pippi", borrowed: false, id: 0}, {name: "Spöket laban", borrowed: false, id: 1}];

// Skickar våra böcker till frontend
router.get("/", function(req, res){
    res.json(books)
 });

 // Ändrar om boken är lånad eller ej
router.post("/borrow", function(req, res){
    let bookId = req.body.bookId;
    let borrowedBook = books.find((book) => {
        return (bookId == book.id)
    })
    borrowedBook.borrowed = true;
    res.send("Borrowed book")
    
})

router.post("/", function(req, res){
   let newBook = req.body;
   newBook.id = books.length;
   newBook.borrowed = false;
   books.push(newBook);
   
   res.json(books)
})

module.exports = router;

/* STEG

ta sig tillbaka till start när man lagt till en ny bok

KLICKA IN PÅ EN BOK
 Visa information om en specifik bok

 */