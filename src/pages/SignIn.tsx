import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "../assets/Images/Image2.png";
import google from "../assets/Images/google.png";
import faceBook from "../assets/Images/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import { scrollTop } from "../utils/utils";
import { _signIn, selectorAuth, signIn } from "../redux/user/auth";
import { useDispatch, useSelector } from "react-redux";
import { Validator } from "../utils/Validator";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
import { Toast } from "../utils/Toast";
const initUser: signIn = {
  email: "",
  password: "",
};
const SignIn: React.FC = (props) => {
  useEffect(() => {
    scrollTop();
  }, []);
  const history = useNavigate();
  const dispach = useDispatch();
  const curUser = useSelector(selectorAuth);
  console.log("--------------", curUser);
  const [User, setUser] = useState<signIn>(initUser);
//----------------Login with email and password----------------
  const Login = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(User);

    const ValidateEmail = Validator.validateEmail({ email: User.email });
    const ValidatePassword = Validator.validatePassword({
      password: User.password,
    });

    if (ValidateEmail) {
      console.log(ValidateEmail);
      Toast.ToastError({
        Error:ValidateEmail,
      })
    } else if (ValidatePassword) {
      Toast.ToastError({
        Error:ValidatePassword,
      })
    }else{
      // -----------------get user in db----------- 
      const newUser = dispach(
        _signIn({
          email: User.email,
          password: User.password,
        })
      );  
      history("/");
      
    }
  };

  // const LoginWithGoogle = () => {};

  return (
    <div className="SignIn">
      <div className="container">
        <div className="SignIn__warpper">
          <div className="SignIn__content">
            <div className="form">
              <div className="form__nav">
                <Link
                  to={"/SignIn"}
                  className="form__nav__item form__nav--active"
                >
                  SignIn
                </Link>
                <Link to={"/SignUp"} className="form__nav__item">
                  SignUp
                </Link>
              </div>
              <div className="form__body">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Email.."
                    onChange={(e) =>
                      setUser({
                        ...User,
                        email: e.target.value,
                      })
                    }
                  />
                  <p></p>
                </div>
                <div className="group">
                  <input
                    type="text"
                    placeholder="Password..."
                    onChange={(e) =>
                      setUser({
                        ...User,
                        password: e.target.value,
                      })
                    }
                  />
                  <p></p>
                </div>
                <Link className="ForgetPassword" to={"/ForgetPassword"}>
                  ForgetPassword
                </Link>
                <button
                  className="button button--defause"
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => Login(e)}
                >
                  Login
                </button>
                <button className="button button--custom ">
                  <img src={google} alt="" />
                  <p>Google</p>
                </button>
                <button className="button button--custom ">
                  <img src={faceBook} alt="" />
                  <p>Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
