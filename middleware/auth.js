const user = require('../model/user.js');
const { getUser } = require('../Service/auth.js');

module.exports.restrictToLoggedInUserOnly = async (req, res, next )  =>{
    const userUid = req.cookies?.uid;

    if(!userUid) return res.redirect('/login');
    const user = getUser(userUid);

    if (!user) return res.redirect("/login");

    req.user = user;
    next();
}

module.exports.checkauth = async (req, res, next ) =>{
    const userUid = req.cookies?.uid;

    const user = getUser(userUid)

    req.user = user;

    next();

}