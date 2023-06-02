import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";
import { IUseCasePointsECF } from "../../redux/mainFuture/model/UseCasePointsECF";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import {
  selectorCurrentEcf,
  selectorEcf,
} from "../../redux/mainFuture/selector";
import {
  _useCasePointCurrentEcfSuccess,
  _useCasePointEcfFectch,
} from "../../redux/mainFuture";
import { Toast } from "../../utils/Toast";

const listOpinion = [0, 1, 2, 3, 4, 5];

const EcfTab: React.FC = (props) => {
  const [ecf, setEcf] = useState<IUseCasePointsECF>({
    e1: 0,
    e2: 0,
    e3: 0,
    e4: 0,
    e5: 0,
    e6: 0,
    e7: 0,
    e8: 0,
  });
  const useEcf = useAppSelector(selectorEcf);
  const dispatch = useAppDispatch();
  console.log("ECF", useEcf);
  const Curnumber = useAppSelector(selectorCurrentEcf);
  const handleEcf = (e: any) => {
    dispatch(_useCasePointEcfFectch(ecf));
    Toast.ToastSuccess({
      Success: "ECF caculate complete",
    });
  };

  const handleValue = (index: number) => {
    const value = {
      e1: index,
      e2: index,
      e3: index,
      e4: index,
      e5: index,
      e6: index,
      e7: index,
      e8: index,
    };
    setEcf(value);
    dispatch(_useCasePointEcfFectch(value));
    dispatch(
      _useCasePointCurrentEcfSuccess({
        ecf: value,
      })
    );

    Toast.ToastSuccess({
      Success: "ECF caculate complete",
    });
  };
  useEffect(() => {
    try {
      if (
        Curnumber.e1 != 0 ||
        Curnumber.e2 != 0 ||
        Curnumber.e3 != 0 ||
        Curnumber.e4 != 0 ||
        Curnumber.e5 != 0 ||
        Curnumber.e6 != 0 ||
        Curnumber.e7 != 0 ||
        Curnumber.e8 != 0
      ) {
        setEcf({
          e1: Curnumber.e1,
          e2: Curnumber.e2,
          e3: Curnumber.e3,
          e4: Curnumber.e4,
          e5: Curnumber.e5,
          e6: Curnumber.e6,
          e7: Curnumber.e7,
          e8: Curnumber.e8,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="container ecf">
      <div className="ecf__left">
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
              <select
                value={ecf.e1}
                onChange={(e) =>
                  setEcf({
                    ...ecf,
                    e1: +e.target.value,
                  })
                }
              >
                {listOpinion &&
                  listOpinion.map((item, index) => {
                    return (
                      <option key={`opinion ${index}`} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
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
              <select
                value={ecf.e2}
                onChange={(e) =>
                  setEcf({
                    ...ecf,
                    e2: +e.target.value,
                  })
                }
              >
                {listOpinion &&
                  listOpinion.map((item, index) => {
                    return (
                      <option key={`opinion ${index}`} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
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
              <select
                value={ecf.e3}
                onChange={(e) =>
                  setEcf({
                    ...ecf,
                    e3: +e.target.value,
                  })
                }
              >
                {listOpinion &&
                  listOpinion.map((item, index) => {
                    return (
                      <option key={`opinion ${index}`} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
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
              <select
                value={ecf.e4}
                onChange={(e) =>
                  setEcf({
                    ...ecf,
                    e4: +e.target.value,
                  })
                }
              >
                {listOpinion &&
                  listOpinion.map((item, index) => {
                    return (
                      <option key={`opinion ${index}`} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
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
              <select
                value={ecf.e5}
                onChange={(e) =>
                  setEcf({
                    ...ecf,
                    e5: +e.target.value,
                  })
                }
              >
                {listOpinion &&
                  listOpinion.map((item, index) => {
                    return (
                      <option key={`opinion ${index}`} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
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
              <select
                value={ecf.e6}
                onChange={(e) =>
                  setEcf({
                    ...ecf,
                    e6: +e.target.value,
                  })
                }
              >
                {listOpinion &&
                  listOpinion.map((item, index) => {
                    return (
                      <option key={`opinion ${index}`} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
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
              <select
                value={ecf.e7}
                onChange={(e) =>
                  setEcf({
                    ...ecf,
                    e7: +e.target.value,
                  })
                }
              >
                {listOpinion &&
                  listOpinion.map((item, index) => {
                    return (
                      <option key={`opinion ${index}`} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
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
              <select
                value={ecf.e8}
                onChange={(e) =>
                  setEcf({
                    ...ecf,
                    e8: +e.target.value,
                  })
                }
              >
                {listOpinion &&
                  listOpinion.map((item, index) => {
                    return (
                      <option key={`opinion ${index}`} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="ecf__right">
        <div className="form">
          <Title title="ecf" />
          <div className="ecf__recipe">ecf = 1.4 + (-0.03 * Ef)</div>
          {useEcf.ef != 0 && useEcf.ecf != 0 && (
            <div className="ecf__result">
              {`ECF = 1.4 + (-0.03 * ${useEcf.ef}) = ${useEcf.ecf}`}
            </div>
          )}

          <button
            className="button button--defause"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEcf(e)
            }
          >
            Caculate
          </button>
          <div className=" ecf__tool">
            <div className="ecf__tool__item">Tool:</div>
            <div className="ecf__tool__item " onClick={() => handleValue(0)}>
              <i className="bx bx-reset"></i>
            </div>
            <div className="ecf__tool__item" onClick={() => handleValue(1)}>
              1
            </div>
            <div className="ecf__tool__item" onClick={() => handleValue(2)}>
              2
            </div>
            <div className="ecf__tool__item" onClick={() => handleValue(3)}>
              3
            </div>
            <div className="ecf__tool__item" onClick={() => handleValue(4)}>
              4
            </div>
            <div className="ecf__tool__item" onClick={() => handleValue(5)}>
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EcfTab.propTypes = {};

export default EcfTab;
