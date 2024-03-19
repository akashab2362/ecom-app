import { ErrorHandler } from "../utils/errorHandler.js";
import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import { User } from "../models/userModels.js";
import { sendToken } from "../utils/jwtToken.js";

// Register a User
export const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilepicUrl",
    },
  });
  sendToken(user, 201, res);
});

//Login a User
export const loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  //Checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or password", 401));
  }
  const isPasswordMatched = user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or password", 401));
  }

  sendToken(user, 200, res);
});

// Logout User
export const logout = catchAsyncError(async(req, res, next)=>{

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly:true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
})