const express = require("express");
const { getAllArticles, getArticle, createArticle, updateArticle, deleteArticle } = require("../controllers/newsArticle");
const { createUser, loginUser } = require("../controllers/users");
const { validateUserSingup } = require("../middelware/auth");
const router = express.Router();
const multer = require('multer');
const storage = require('../middelware/storage');
const upload = multer({ storage: storage });


router.route('/').get(getAllArticles).post(createArticle);
router.route('/:id').get(getArticle).put(updateArticle).delete(deleteArticle);

router.route('/singup').post(upload.single('image'), validateUserSingup, createUser)
router.route('/login').post(loginUser);

module.exports = router;