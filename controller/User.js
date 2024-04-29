const User = require('../models/User');

class UserController{
    static async getAll(req,res){
        try {
            const users = await User.find({}, {_id: false, __v:false});
            return res.status(200).send(users);
        } catch (error) {
            return res.status(500).send({ message: error.message })
        }
    }
}

module.exports = UserController;