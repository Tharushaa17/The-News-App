const express = require("express");
const { getAllArticles, getArticle, createArticle, updateArticle, deleteArticle } = require("../controllers/newsArticle");
const { createUser } = require("../controllers/users");
const router = express.Router();


router.route('/').get(getAllArticles).post(createArticle);
router.route('/:id').get(getArticle).put(updateArticle).delete(deleteArticle);

router.route('/singup').post(createUser);

module.exports = router;