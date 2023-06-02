import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { _signOut } from "../redux/user/auth";
import { SignOut } from "../api/authencation/auth";

const Profile: React.FC = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleLogout = async () => {
    const logout =await SignOut();
    console.log(logout);
    dispatch(_signOut())
    history("/");
  };
  return (
    <div className="Profile">
      <div className="container">
        <div className="Profile__warpper">
          <p>Update in future </p>
          <div className="Profile__warpper_button" onClick={()=>handleLogout()}>Logout</div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
