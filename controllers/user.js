const User = require('../models/user');

function register(req, res) {
    res.render('users/register');
}

function login(req, res) {
    res.render('users/login');
}

async function add(req, res) {
    const { email, password } = req.body;

    const user = {
        email,
        password
    };

    await User.add(user);
    res.redirect(`/`);
}

async function proses_login(req, res) {
    const match = await User.login(req.body.email, req.body.password);

    if (match === true) {
        console.log('Login success');
        res.redirect('/');
    } else {
        console.log('Login Failed');
        res.redirect('/');
    }
}

module.exports = {
    register : register,
    add : add,
    login : login,
    proses_login : proses_login
};