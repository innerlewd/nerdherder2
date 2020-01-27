const User = require('../models/users')


createUser = function (req, res) {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'all fields required'
        })
    }
    // const passwordBody = req.body.password

    // if (!passwordBody) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'You must provide a password'
    //     })
    // }
    // const emailBody = req.body.email

    // if (!emailBody) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'You must provide an email'
    //     })
    // }
    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }
    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'Account created!'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Account not created!'
            })
        })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No changes made.'
        })
    }
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'user not found'
            })
        }
        user.username = body.username
        user.email = body.email
        user.password = body.password
        user.games = body.gamelist
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'account info updated!'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'account not updated...'
                })
            })
    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: 'user not found' })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserByID = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: 'user not found' })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err})
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: 'user not found'})
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}


module.exports = {
    createUser,
    getUserByID,
    getUsers,
    updateUser,
    deleteUser
}