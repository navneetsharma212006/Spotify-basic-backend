const jwt = require("jsonwebtoken");

async function authArtist(req, res, next) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "You dont have access to create a music "
            });
        }

        req.user = decoded;
        next();

    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            error: err.message
        });
    }   

}


async function authUser(req, res, next) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "user"&& decoded.role !== "artist") {
            return res.status(403).json({
                message: "You dont have access to listen music "
            });
        }

        req.user = decoded;
        next();
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            error: err.message
        });
    }   
}



module.exports = {
    authArtist,
    authUser
}