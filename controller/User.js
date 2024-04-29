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

    static async getByID(req,res){
        const { id } = req.params;
        try{
            const user = await User.findById(id);
            if(!user) return res.status(404).send({message: "User not found"})
            return res.status(200).send(user);
        } catch (error){
            return res.status(500).send({message: error.message})
        }  
    }
}

module.exports = UserController;