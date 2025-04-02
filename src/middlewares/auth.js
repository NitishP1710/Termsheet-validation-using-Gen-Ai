const jwt=require('jsonwebtoken');
require('dotenv').config();

const auth=(req,res,next)=>{
    try{
        const token=req.body.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:'token missing'});
        }

        //verify token
        try{
            const decoded=jwt.veriffy(token,process.env.JWT_SECRET);
            console.log(decoded);
            //why this
            req.user=decoded.user;
        }
        catch(err){
            return res.status(401).json({
                success:false,
                message:'token is not valid'});
        }
        next();

    }
    catch{
        return res.status(500).json({
            success:false,
            message:'internal server error'});

    }
}
exports.isStudent=(req,res,next)=>{
    try{
        if(req.user.role!=='student'){
            return res.status(401).json({
                success:false,
                message:'access denied'});
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:'internal server error'});
    }
}
exports.isAdmin=(req,res,next)=>{
    try{
        if(req.user.role!=='admin'){
            return res.status(401).json({
                success:false,
                message:'access denied'});
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:'internal server error'});
    }
}