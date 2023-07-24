const express = require("express");
const { getAllArticles, getArticle, createArticle, updateArticle, deleteArticle } = require("../controllers/newsArticle");
const { createUser, loginUser } = require("../controllers/users");
const router = express.Router();


router.route('/').get(getAllArticles).post(createArticle);
router.route('/:id').get(getArticle).put(updateArticle).delete(deleteArticle);

router.route('/singup').post(createUser);
router.route('/login').post(loginUser);

module.exports = router;