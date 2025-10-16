import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

const generateToken = (id : string) => {
    const token = jwt.sign({id}, JWT_SECRET, {expiresIn: "1h"});
    return token;
}

const verifyToken = (token : string) => {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
}

export { generateToken, verifyToken };