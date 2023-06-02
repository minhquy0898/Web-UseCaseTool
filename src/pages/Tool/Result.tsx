import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";
import { useAppSelector } from "../../hooks/redux.hook";
import {
  selectorCurrentEcf,
  selectorCurrentTcf,
  selectorCurrentUaw,
  selectorCurrentUucp,
  selectorEcf,
  selectorTcf,
  selectorUaw,
  selectorUucp,
} from "../../redux/mainFuture/selector";
import Uucp from "./UucpTab";
import { Toast } from "../../utils/Toast";

const Result: React.FC<any> = (props) => {
  const UUCW = useAppSelector(selectorUucp);
  const UAW = useAppSelector(selectorUaw);
  const TCF = useAppSelector(selectorTcf);
  const ECF = useAppSelector(selectorEcf);

  const CurUUCW = useAppSelector(selectorCurrentUucp);
  const CurUAW = useAppSelector(selectorCurrentUaw);
  const CurTCF = useAppSelector(selectorCurrentTcf);
  const CurEcf = useAppSelector(selectorCurrentEcf);

  console.log("current ",CurEcf,CurTCF)
  console.log("12222222", UUCW, UAW, TCF, ECF);
  // useEffect(() => {
  //   if (UUCW.uucp == 0) {
  //     Toast.ToastError({
  //       Error: "input UUCW",
  //     });
  //   } else if (UAW.uaw == 0) {
  //     console.log("uaw", UAW.uaw);
  //     Toast.ToastError({
  //       Error: "input UAW",
  //     });
  //   } else if (TCF.tcf == 0) {
  //     Toast.ToastError({
  //       Error: "input TCF",
  //     });
  //   } else if (ECF.ecf == 0) {
  //     Toast.ToastError({
  //       Error: "input ECF",
  //     });
  //   } else {
  //     Toast.ToastSuccess({
  //       Success: "Caculate complete",
  //     });
  //   }
  // }, []);

  return (
    <div className="Result">
      <div className="container">
        <div className="form">
          <Title title="Calculator Tool" />
          <div className="Result__form__body">
            <div className="Result__form__desc">
              Finally the UCP can be calculated once the unadjusted project size
              (UUCW and UAW), technical factor (TCF) and environmental factor
              (ECF) have been determined
            </div>
            <div className="Result__form__warpper">
              <p>
                The <strong>UCP </strong> is calculated based on the following
                formula:
              </p>
              <p>
                <strong>UCP</strong> = (UUCW + UAW) x TCF x ECF
              </p>
              <p>
                <strong>UCP</strong> ={" "}
                {`(${UUCW.uucp} + ${UAW.uaw}) x ${UAW.uaw} x ${ECF.ecf}`}
              </p>
              <p>
                <strong>UCP</strong> ={" "}
                {`${(UUCW.uucp + UAW.uaw) * TCF.tcf * ECF.ecf}`}
              </p>
            </div>
            {/* <div className="Result__form__tool">
              <button className="button">New Caculate</button>
              <button className="button">Save</button>
              <button className="button">export</button>
            </div> */}
          </div>
          <div className="Result__uucw">
            <Title title="UUCW" />
            <div className="table">
              <div className="row row__header">
                <div className="row__item uucp__UseCaseClassification">
                  Use Case Classification
                </div>
                <div className="row__item uucp__Weight">Weight</div>
                <div className="row__item uucp__x"></div>
                <div className="row__item uucp__numberCase">
                  Number of Use Cases
                </div>
                <div className="row__item uucp__Result">Result</div>
              </div>
              <div className="row ">
                <div className="row__item uucp__UseCaseClassification">
                  Simple
                </div>
                <div className="row__item uucp__Weight">5</div>
                <div className="row__item uucp__x">x</div>
                <div className="row__item uucp__numberCase">
                  {CurUUCW.simple}
                </div>
                <div className="row__item uucp__Result">{UUCW.simple}</div>
              </div>

              <div className="row ">
                <div className="row__item uucp__UseCaseClassification">
                  Average
                </div>
                <div className="row__item uucp__Weight">10</div>
                <div className="row__item uucp__x">x</div>
                <div className="row__item uucp__numberCase">
                  {CurUUCW.average}
                </div>
                <div className="row__item uucp__Result">{UUCW.average}</div>
              </div>

              <div className="row ">
                <div className="row__item uucp__UseCaseClassification">
                  Complex
                </div>
                <div className="row__item uucp__Weight">15</div>
                <div className="row__item uucp__x">x</div>
                <div className="row__item uucp__numberCase">
                  {CurUUCW.complex}
                </div>
                <div className="row__item uucp__Result">{UUCW.complex}</div>
              </div>
              <div className="row">
                <p>{`Total: ${UUCW.uucp}`}</p>
              </div>
            </div>
          </div>
          <div className="Result__uaw">
            <Title title="Uaw" />
            <div className="table">
              <div className="row row__header">
                <div className="row__item uaw__UseCaseClassification">
                  Use Case Classification
                </div>
                <div className="row__item uaw__Weight">Weight</div>
                <div className="row__item uaw__x"></div>
                <div className="row__item uaw__numberCase">
                  Number of Use Cases
                </div>
                <div className="row__item uaw__Result">Result</div>
              </div>
              <div className="row ">
                <div className="row__item uaw__UseCaseClassification">
                  Simple
                </div>
                <div className="row__item uaw__Weight">5</div>
                <div className="row__item uaw__x">x</div>
                <div className="row__item uaw__numberCase">{CurUAW.simple}</div>
                <div className="row__item uaw__Result">{UAW.simple}</div>
              </div>

              <div className="row ">
                <div className="row__item uaw__UseCaseClassification">
                  Average
                </div>
                <div className="row__item uaw__Weight">10</div>
                <div className="row__item uaw__x">x</div>
                <div className="row__item uaw__numberCase">
                  {CurUAW.average}
                </div>
                <div className="row__item uaw__Result">{UAW.average}</div>
              </div>

              <div className="row ">
                <div className="row__item uaw__UseCaseClassification">
                  Complex
                </div>
                <div className="row__item uaw__Weight">15</div>
                <div className="row__item uaw__x">x</div>
                <div className="row__item uaw__numberCase">
                  {CurUAW.complex}
                </div>
                <div className="row__item uaw__Result">{UAW.complex}</div>
              </div>
              <div className="row">
                <p>{`Total: ${UAW.uaw}`}</p>
              </div>
            </div>
          </div>
          <div className="Result__Tcf">
            <Title title="TCF" />
            <div className="table">
              <div className="row row__header">
                <div className="row__item tcf__factor">factor</div>
                <div className="row__item tcf__Description">Description</div>
                <div className="row__item tcf__Weight">Weight</div>

                <div className="row__item tcf__Rating">Rating</div>
              </div>
              {/* T1 */}
              <div className="row ">
                <div className="row__item tcf__factor">T1</div>
                <div className="row__item tcf__Description">
                  Distributed System
                </div>
                <div className="row__item tcf__Weight">2.0</div>

                <div className="row__item tcf__Rating">
                  {/* <select value={CurTCF.t1}></select> */}
                  <span>
                  {CurTCF.t1}
                  </span>
                </div>
              </div>
              {/* T2 */}
              <div className="row ">
                <div className="row__item tcf__factor">T2</div>
                <div className="row__item tcf__Description">
                  Response time/performance objectives
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t2}
                </div>
              </div>
              {/* T3 */}
              <div className="row ">
                <div className="row__item tcf__factor">T3</div>
                <div className="row__item tcf__Description">
                  End-user efficiency
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t3}
                </div>
              </div>
              {/* T4 */}
              <div className="row ">
                <div className="row__item tcf__factor">T4</div>
                <div className="row__item tcf__Description">
                  Internal processing complexity
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t4}
                </div>
              </div>
              {/* T5 */}
              <div className="row ">
                <div className="row__item tcf__factor">T5</div>
                <div className="row__item tcf__Description">
                  Code reusability
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t5}
                </div>
              </div>
              {/* T6 */}
              <div className="row ">
                <div className="row__item tcf__factor">T6</div>
                <div className="row__item tcf__Description">
                  Easy to install
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t6}
                </div>
              </div>
              {/* T7 */}
              <div className="row ">
                <div className="row__item tcf__factor">T7</div>
                <div className="row__item tcf__Description">Easy to use</div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t7}
                </div>
              </div>
              {/* T8 */}
              <div className="row ">
                <div className="row__item tcf__factor">T8</div>
                <div className="row__item tcf__Description">
                  Portability to other platforms
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t8}
                </div>
              </div>
              {/* T9 */}
              <div className="row ">
                <div className="row__item tcf__factor">T9</div>
                <div className="row__item tcf__Description">
                  Portability to other platforms
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t9}
                </div>
              </div>
              {/* T10*/}
              <div className="row ">
                <div className="row__item tcf__factor">T10</div>
                <div className="row__item tcf__Description">
                  Concurrent/parallel processing
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t10}
                </div>
              </div>
              {/* T11*/}
              <div className="row ">
                <div className="row__item tcf__factor">T11</div>
                <div className="row__item tcf__Description">
                  Security features
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                {CurTCF.t11}
                </div>
              </div>
              {/* T12*/}
              <div className="row ">
                <div className="row__item tcf__factor">T12</div>
                <div className="row__item tcf__Description">
                  Access for third parties
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
              
                  <span>  {CurTCF.t12}</span>
                </div>
              </div>
              {/* T13*/}
              <div className="row ">
                <div className="row__item tcf__factor">T13</div>
                <div className="row__item tcf__Description">
                  End user training
                </div>
                <div className="row__item tcf__Weight">1.0</div>

                <div className="row__item tcf__Rating">
                  {CurTCF.t13}
                </div>
              </div>
            </div>
          </div>
          <div className="Result__ecf">
          <Title title="ECF" />
            <div className="table">
              <div className="row row__header">
                <div className="row__item ecf__factor">factor</div>
                <div className="row__item ecf__Description">Description</div>
                <div className="row__item ecf__Weight">Weight</div>

                <div className="row__item ecf__Rating">Rating</div>
              </div>
              {/* T1 */}
              <div className="row ">
                <div className="row__item ecf__factor">E1</div>
                <div className="row__item ecf__Description">
                  Familiarity with development process used
                </div>
                <div className="row__item ecf__Weight">1.5</div>

                <div className="row__item ecf__Rating">
                  {CurEcf.e1}
                </div>
              </div>
              {/* T2 */}
              <div className="row ">
                <div className="row__item ecf__factor">E2</div>
                <div className="row__item ecf__Description">
                  Application experience
                </div>
                <div className="row__item ecf__Weight">0.5</div>

                <div className="row__item ecf__Rating">
                 {CurEcf.e2}
                </div>
              </div>
              {/* T3 */}
              <div className="row ">
                <div className="row__item ecf__factor">E3</div>
                <div className="row__item ecf__Description">
                  Lead analyst capability
                </div>
                <div className="row__item ecf__Weight">0.5</div>

                <div className="row__item ecf__Rating">
                {CurEcf.e3}
                </div>
              </div>
              {/* T4 */}
              <div className="row ">
                <div className="row__item ecf__factor">E4</div>
                <div className="row__item ecf__Description">
                  Object-oriented experience of team
                </div>
                <div className="row__item ecf__Weight">0.5</div>

                <div className="row__item ecf__Rating">
                 {CurEcf.e4}
                </div>
              </div>
              {/* T5 */}
              <div className="row ">
                <div className="row__item ecf__factor">E5</div>
                <div className="row__item ecf__Description">
                  Motivation of the team
                </div>
                <div className="row__item ecf__Weight">1.0</div>

                <div className="row__item ecf__Rating">
                {CurEcf.e5}
                </div>
              </div>
              {/* T6 */}
              <div className="row ">
                <div className="row__item ecf__factor">E6</div>
                <div className="row__item ecf__Description">
                  Stability of requirements
                </div>
                <div className="row__item ecf__Weight">2.0</div>

                <div className="row__item ecf__Rating">
                  {CurEcf.e6}
                </div>
              </div>
              {/* T7 */}
              <div className="row ">
                <div className="row__item ecf__factor">E7</div>
                <div className="row__item ecf__Description">
                  Stability of requirements
                </div>
                <div className="row__item ecf__Weight">-1.0</div>

                <div className="row__item ecf__Rating">
                 {CurEcf.e7}
                </div>
              </div>
              {/* T8 */}
              <div className="row ">
                <div className="row__item ecf__factor">E8</div>
                <div className="row__item ecf__Description">
                  Stability of requirements
                </div>
                <div className="row__item ecf__Weight">-1.0</div>

                <div className="row__item ecf__Rating">
                  {CurEcf.e8}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Result.propTypes = {};

export default Result;
