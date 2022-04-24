const jwt = require("jsonwebtoken");
const clientModel = require("../models/clientModel");
const tokenCheck = require("../Middleware/auth");
const authorise= require("../Middleware/auth");

// Q NO 1
const createUser = async function (req, res) {
  try{  
  let data = req.body;
  let savedData = await clientModel.create(data);
res.status(201).send({ msg: savedData });
}catch (error){
  res.status(500).send(error.message)                
}};



// Q NO 2
const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await clientModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Uranium",
        organisation: "FUnctionUp",
      },
      "functionup-uranium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
  }catch(error){
    res.status(500).send(error.message)    
  }};

// Q no 3

  const getUserData = async function (req, res) {
    try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
   
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-uranium");
    if (!decodedToken)
      return res.staus(401).send({ status: false, msg: "token is invalid" });
      res.status(200).send({ status: true, msg: "token is valid" });
  }catch (error)
  {
    res.status(500).send(error.message)       
  }}; 

  // Q NO 4

const updateUser = async function (req, res) {
  try{
 let userId = req.params.userId;
    let user = await clientModel.findById(userId);
   
    if (!user) {
      return res.staus(400).send("No such user exists");
    }
  
    let userUpdatedNumber = req.body.mobile;
    let updatedUserMoblieNumber = await clientModel.findOneAndUpdate({_id:userId},{$set: {mobile:userUpdatedNumber}},{upsert:true,new:true});
    res.status(202).send({ status: true, data: updatedUserMoblieNumber });
  }catch(error)
  {
    res.status(500).send(error.message)                 
  }};
  
// Q NO 5
  const isdeletedUser = async function (req, res) {
    try{
    let isDeletedId = req.params.userId;
    let isDeletedProperty = await clientModel.findByIdAndUpdate({_id:isDeletedId},{$set: {isDeleted:true}},{new:true});
    res.status(202).send({ status: true, data: isDeletedProperty });
  }catch(error)
  {
    res.status(500).send(error.message)                 
  }};
  
// Q NO 6  

  const postMessage = async function (req, res) {
    try{
    let message = req.body.message
    

    // let token = req.headers["x-auth-token"]
    // if (!token) token = req.headers["x-auth-token"];
    // if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    // let decodedToken = jwt.verify(token, 'functionup-uranium')

    // if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    // let clientToBeModified = req.params.userId
    //    let clientLoggedIn = decodedToken.userId
    // if(clientToBeModified != clientLoggedIn) return res.send({status: false, msg: 'user logged is not allowed to modify the requested users data'})


    let client = await clientModel.findById(req.params.userId)
    if(!client) return res.status(400).send({status: false, msg: 'No such client exists'})
    
    let updatedPosts = client.posts
    updatedPosts.push(message)
    let updatedclient = await clientModel.findOneAndUpdate({_id: client._id},{posts: updatedPosts}, {new: true})
    return res.status(201).send({status: true, data: updatedclient})
}catch(error)
{
  res.status(500).send(error.message)                 
}};


module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser= updateUser
module.exports.isdeletedUser= isdeletedUser
module.exports.postMessage = postMessage


