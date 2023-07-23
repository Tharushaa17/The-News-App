const Article = require('../models/newsArticle');
const asyncWrapper = require('../middelware/async')

const getAllArticles = asyncWrapper(async (req, res) => {
    const articles = await Article.find({})
    res.status(200).json({ articles })
})

const createArticle = asyncWrapper(async (req, res) => {
    const article = await Article.create(req.body);
    res.status(201).json({article});
})

const getArticle = asyncWrapper(async (req, res, next) => {
    const { id:articleID} = req.params;
    const singleArticle = await Article.findOne({_id:articleID});
        if(!singleArticle){
            const error = new Error('Not Found')
            error.status = 404
            return next(error)
            // return res.status(404).json({ msg: `No Article in ${articleID}`});
        }
    res.status(200).json({singleArticle});  
})

const updateArticle = asyncWrapper(async(req, res) => {
    const { id:articleID} = req.params;
    const updarticle = await Article.findByIdAndUpdate({ _id:articleID}, req.params,{
        new: true,
        runValidators: true,
    });
        if(!updarticle){
            return res.status(404).json({ msg: `no article in ${articleID}`})
        }
})

const deleteArticle = asyncWrapper(async(req, res) => {
    const { id:articleID } = req.params;
    const delarticle = await Article.findOneAndDelete({ _id:articleID });
        if(!delarticle){
            return res.status(404).json({ msg: `no article in ${articleID}`});
        }
    res.status(200).json({delarticle});
  
})

module.exports = {
    getAllArticles,getArticle,createArticle,updateArticle,deleteArticle
}