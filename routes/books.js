var express = require('express');
var router = express.Router();

let books = [{name: "Pippi", borrowed: false, id: 0}, {name: "Spöket laban", borrowed: false, id: 1}];

router.get("/", function(req, res){
    res.json(books)
 });

router.post("/borrow", function(req, res){
    let bookId = req.body.bookId;
    let borrowedBook = books.find((book) => {
        return (bookId == book.id)
    })
    borrowedBook.borrowed = true;
    res.send("Borrowed book")
    
})

module.exports = router;

/* STEG
FÖRSTA SIDAN
Lista alla böcker som finns
+ Låna
- knapp

Länk till lägg till ny bok
+ knapp som leder till en annan sida

KLICKA IN PÅ EN BOK
 Visa information om en specifik bok

 LÄGG TILL BOK SIDAN
 lägg till en ny bok
 */