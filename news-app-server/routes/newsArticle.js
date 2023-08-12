const express = require("express");
const { getAllArticles, getArticle, createArticle, updateArticle, deleteArticle } = require("../controllers/newsArticle");
const { createUser, loginUser } = require("../controllers/users");
const { validateUserSingup } = require("../middelware/auth");
const router = express.Router();


router.route('/').get(getAllArticles).post(createArticle);
router.route('/:id').get(getArticle).put(updateArticle).delete(deleteArticle);

// router.route('/singup').post(validateUserSingup, createUser);
router.post('/singup', validateUserSingup, createUser)
router.route('/login').post(loginUser);

module.exports = router;