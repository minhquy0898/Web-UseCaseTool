import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Home__1 from "../assets/Images/Image2.png";
import bg from "../assets/Images/2.jpg";
import Title from "../components/Title";
import { url } from "inspector";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hook";
import { _useCasePointEcfFectch, _useCasePointTcfFectch, _useCasePointUawFectch, _useCasePointUucpFectch } from "../redux/mainFuture";
import { selectorTcf, selectorUaw, selectorUseCasePoint, selectorUucp } from "../redux/mainFuture/selector";

const Home: React.FC = (props) => {
  const newLocal = `${bg}`;

  // const dispatch = useAppDispatch();
  // const index =  useAppSelector(selectorUucp)
  // const index1 =  useAppSelector(state => state)
  // console.log("+++++++++",index);
  // useEffect(()=>{
  //   dispatch(_useCasePointUucpFectch({
  //         average:1,
  //         complex:1,
  //         simple:1
  //       }))
  // },[])


  
  return (
    <div className="Home">
      <div className="container">
        <div className="Home__wrapper">
          <div className="Home__border">
            <div className="shape">Team 1</div>
          </div>
          <div className="Home__content">
            <h1 className="Home__content__title">UseCaseTool</h1>
            <p className="Home__content__desc">
              This application calculates the number of Use Case Points (UCP)
              for a project. Please note that Use Cases need to be created in
              order to use this tool. Use Case Points are used to estimate the
              effort of a software project.
            </p>
            <div className="Home__contact">
              <div className="Home__contact__item">
                <i className="bx bxl-facebook-square"></i>
              </div>
              <div className="Home__contact__item">
                <i className="bx bxl-github"></i>
              </div>
              <div className="Home__contact__item">
                <i className="bx bxl-figma"></i>
              </div>
              <div className="Home__contact__item">
                <i className="bx bxl-telegram"></i>
              </div>
            </div>
            <button className="Button Home--button">Start Now</button>
          </div>
        </div>
      </div>
      {/* infomation  */}
      <div
        className="infomation"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="infomation__warpper">
          <div className="container">
            <Title title="About Me"></Title>
            <div className="infomation__content">
              <ul>
                <h2 className="infomation__content__title">
                  The UCP formula uses four elements:
                </h2>
                <li>
                  <p>Unadjusted Use Case Weight (UUCW)</p>
                </li>
                <li>
                  <p>Unadjusted Actor Weight (UAW)</p>
                </li>
                <li>
                  <p>Technical Complexity Factor (TCF)</p>
                </li>
                <li>
                  <p>Environmental Complexity Factor (ECF)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* readME */}
      <div className="readme">
        <div className="container">
          <Title title="UUCW"></Title>
          <p>
            UUCW is the Unadjusted Use Case Weight for a project. Determining
            the impact that each Use Case will have on a system is critical to
            the project size. The number of transactions a Use Case handles will
            need to be found for each Use Case. There are three classifications
            that a Use Case can be: Simple, Average or Complex.
          </p>
          <ul>
            <h3 className="readme__title">Calculation Guide</h3>
            <li>
              Step 1: Categorize each Use Case in your project by determining
              how many transactions are in it.
            </li>
            <li>
              Step 2: Enter the total number of Use Cases belonging to that
              particular category in the Input Text Field provided.
            </li>
            <li>Step 3: Select the Calculate button to display Total UUCW.</li>
          </ul>
        </div>
      </div>
      {/* readME */}
      <div className="readme">
        <div className="container">
          <Title title="UUCW"></Title>
          <p>
            UAW is the Unadjusted Actor Weight for a program. Actors contribute
            to the size of the project, therefore all Actors must be well
            thought out for the entire system. There are three classifications
            which an Actor can be: Simple, Average and Complex.
          </p>
          <ul>
            <h3 className="readme__title">Calculation Guide</h3>
            <li>
              Step 1: Classify each Actor for your program by determining which
              “Type of Actor” description it fits in.
            </li>
            <li>
              Step 2: Enter the total number of Actors that fall under that
              classification in the Input Text Fields provided.
            </li>
            <li>
              Step 3: Select the Calculate button to display the UAW Total.
            </li>
          </ul>
        </div>
      </div>
      {/* readME */}
      <div className="readme">
        <div className="container">
          <Title title="UUCW"></Title>
          <p>
            TCF is the Technical Complexity Factor for a project that takes into
            consideration any technical requirements that will be implemented.
            Each of the 13 listed factors needs to be rated on a scale of 0
            (irrelevant) to 5 (essential).
          </p>
          <ul>
            <h3 className="readme__title">Calculation Guide</h3>
            <li>
              Step 1: Rate each technical consideration by selecting a rating
              value for each category below.
            </li>
            <li>
              Step 1: Rate each technical consideration by selecting a rating
              value for each category below.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
