var express = require('express');
var router = express.Router();

let books = [{name: "Pippi", borrowed: false}, {name: "Spöket laban", borrowed: false}];

router.get("/", function(req, res){
    res.json(books)
 });

module.exports = router;

/* STEG
FÖRSTA SIDAN
Lista alla böcker som finns
+ lånad eller ej
- lånad som boolean i arrayen
- Gör så de står utlånad eller något istället för true eller false
+ Låna
- knapp

Länk till lägg till ny bok
+ knapp som leder till en annan sida

KLICKA IN PÅ EN BOK
 Visa information om en specifik bok

 LÄGG TILL BOK SIDAN
 lägg till en ny bok
 */