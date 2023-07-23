const Users = require('../models/users');
const asyncWrapper = require('../middelware/async')

const getAllUsers = asyncWrapper(async (req, res) => {
    const users = await Users.find({})
    res.status(200).json({ users })
})

const createUser = asyncWrapper(async (req, res) => {3
    const user = await Users.create(req.body);
    res.status(201).json({user});
})

module.exports = {
    getAllUsers,createUser
}