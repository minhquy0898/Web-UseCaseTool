import React ,{useEffect, useState}from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { scrollTop } from "../utils/utils";
import { useDispatch } from "react-redux";
import { _signUp, signUp } from "../redux/user/auth";
import { Validator } from "../utils/Validator";
import { Toast } from "../utils/Toast";


const SignUp: React.FC = (props) => {
  useEffect(() => {
    scrollTop();
  }, []);
  const dispatch =  useDispatch();
  const history = useNavigate();
  const [User,SetUser] =  useState<signUp>({
    FullName:'',
    Email: '', 
    password: '',
    confirmPassword:''
  })
  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    try{
      const validateFullName = Validator.validateName( {name: User.FullName})
      const validateEmail = Validator.validateEmail({email:User.Email})
      const validatepassword =  Validator.validatePassword({password:User.password})
      const validateconfirmPassword = Validator.validateConfirmPassword({confirmPassword:User.confirmPassword,password:User.password })
      if(validateEmail){
        Toast.ToastError({Error:validateEmail});
      }else if(validateFullName){
        Toast.ToastError({Error:validateFullName});
      } else if(validatepassword){
        Toast.ToastError({Error:validatepassword});
      } else if(validateconfirmPassword){
        Toast.ToastError({Error:validateconfirmPassword});
      }else{
        dispatch(_signUp({
          Email:User.Email,
          password:User.password,
          FullName:User.FullName,
        }))
        Toast.ToastSuccess({Success:'Sign Success'});
        history('/SignIn')
      }
    } catch(err){
      Toast.ToastError({Error:'errors '});
    }
    

  }
  return (
    <div className="SignUp">
      <div className="container">
        <div className="SignIn__warpper">
          <div className="SignIn__content">
            <div className="form">
              <div className="form__nav">
                <Link
                  to={"/SignIn"}
                  className="form__nav__item "
                >
                  SignIn
                </Link>
                <Link to={"/SignUp"} className="form__nav__item form__nav--active">
                  SignUp
                </Link>
              </div>
              <div className="form__body">
                <div className="group">
                  <input type="text" placeholder="FullName.." onChange={(e)=>SetUser({...User,FullName:e.target.value})}/>
                  <p></p>
                </div>
                <div className="group">
                  <input type="email" placeholder="Email..." onChange={(e)=>SetUser({...User,Email:e.target.value})}/>
                  <p></p>
                </div>
                <div className="group">
                  <input type="password" placeholder="Password..." onChange={(e)=>SetUser({...User,password:e.target.value})}/>
                  <p></p>
                </div>
                <div className="group">
                  <input type="password" placeholder="Confirm password..."  onChange={(e)=>SetUser({...User,confirmPassword:e.target.value})}/>
                  <p></p>
                </div>
                <button className="button button--defause" 
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => handleSignUp(e)}
                >SignUp</button>
                <p className="alert">
                Already have an account ? <Link to="/SignIn"> Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
