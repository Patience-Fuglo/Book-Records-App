const BookController = require("../controllers/book.controller");
const router = require("express").Router();

router.get("/all", BookController.getAllBooks);
router.post("/add", BookController.createBook);
router.get("/get/:id", BookController.getOneBook);
router.put("/update/:id", BookController.updateBook);
router.delete("/delete/:id", BookController.deleteBook);
router.get("/fans", BookController.getFans);
router.patch("/update/:bookId", BookController.addFavourite);
// router.patch("/remove/:bookId", BookController.removeFavourite);
router.get("/isfav/:userId", BookController.checkFavourite);
module.exports = router;
