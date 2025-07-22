const express = require("express");
const { sendUserBasicInfoController, updateUserDetails, getUserDetails } = require("./controllers");

const usersRouter = express.Router();

usersRouter.get("/", sendUserBasicInfoController);

usersRouter.patch("/update", updateUserDetails);

usersRouter.get("/details", getUserDetails);

module.exports = { usersRouter };
