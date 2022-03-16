const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const a_user = jwt.verify(token, process.env.JWTKEY);
    
    // verficate token 

    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate first" });
  }
};

module.exports = auth;