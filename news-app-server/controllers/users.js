const Users = require('../models/users');
const asyncWrapper = require('../middelware/async');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const getAllUsers = asyncWrapper(async (req, res) => {
    const users = await Users.find({})
    res.status(200).json({ users })
})

const loginUser = asyncWrapper(async (req, res) => {
    const userInfo = await Users.findOne({ email : req.body.email});
    if(!userInfo) {
        return res.status(400).send('Please Enter valid Email!');
    }else{
        const authentication = await bcrypt.compare(req.body.password, userInfo.password);
        if(!authentication) {
            return res.status(400).send('Email or Password not matched!');
        }else{
            const token = jwt.sign({ _id : userInfo._id }, process.env.SECRET_KEY, { expiresIn : '5min' } )
            const { password, ...user } = Object.assign({}, userInfo.toJSON());
            res.header('auth-token', token).json({token, user, authStatus: true })
        }
    }
})  

const createUser = asyncWrapper(async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const register = new Users({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        image : req.body.image,
        email : req.body.email,
        password : hashedPassword
    })
    const user = await Users.create(register);
    res.status(201).send('User Registered Successfully!');
})

const getUser = asyncWrapper(async (req, res, next) => {
    const { id:userID} = req.params;
    const singleUser = await Users.findOne({_id:userID});
        if(!singleUser){
            const error = new Error('Not Found')
            error.status = 404
            return next(error)
        }
    res.status(200).json({singleUser});  
})

const updateUser = asyncWrapper(async(req, res) => {
    const { id:userID} = req.params;
    const updUser = await Users.findByIdAndUpdate({ _id:userID}, req.params,{
        new: true,
        runValidators: true,
    });
        if(!updUser){
            return res.status(404).json({ msg: `no article in ${userID}`})
        }
})

const deleteUser = asyncWrapper(async(req, res) => {
    const { id:userID } = req.params;
    const delUser = await Users.findOneAndDelete({ _id:userID });
        if(!delUser){
            return res.status(404).json({ msg: `no article in ${userID}`});
        }
    res.status(200).json({delUser});
})

module.exports = {
    getAllUsers,createUser,getUser,updateUser,deleteUser,loginUser
}