const adminauth = (req, res, next) => {
    console.log("admin is auth");
    const token = "xyz";
    const authadmin = token === 'xyz';
    
    if (authadmin) {
        next(); // Proceed to the next middleware/route
    } else {
        res.status(403).send("Unauthorized user"); // Return 403 Forbidden
    }
}
module.exports={adminauth,}