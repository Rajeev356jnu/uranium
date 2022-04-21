const jwt = require("jsonwebtoken");
const clientModel = require("../models/clientModel");

// Q NO 1
const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await clientModel.create(data);
res.send({ msg: savedData });
};
// Q NO 2
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await clientModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
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
    res.send({ status: true, data: token });
  };

// Q no 3

  const getUserData = async function (req, res) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
   
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-uranium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
      res.send({ status: true, msg: "token is valid" });
  }

  // Q NO 4

const updateUser = async function (req, res) {
 let userId = req.params.userId;
    let user = await clientModel.findById(userId);
   
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userUpdatedNumber = req.body.mobile;
    let updatedUserMoblieNumber = await clientModel.findOneAndUpdate({_id:userId},{$set: {mobile:userUpdatedNumber}},{upsert:true,new:true});
    res.send({ status: true, data: updatedUserMoblieNumber });
  };
// Q NO 5
  const isdeletedUser = async function (req, res) {
    let isDeletedId = req.params.userId;
    let isDeletedProperty = await clientModel.findByIdAndUpdate({_id:isDeletedId},{$set: {isDeleted:true}},{new:true});
    res.send({ status: true, data: isDeletedProperty });
  };

module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser= updateUser
module.exports.isdeletedUser= isdeletedUser


