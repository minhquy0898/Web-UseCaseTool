import React from "react";
import PropTypes from "prop-types";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="title">
      <img
        src="https://kinhmatanna.com/wp-content/uploads//2022/08/Vector-3-1.svg"
        alt=""
        className="title__image"
      />
      <p>{title}</p>
    </div>
  );
};

Title.propTypes = {};

export default Title;
