import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { useSelector } from "react-redux";
import {
  selectorCurrentTcf,
  selectorTcf,
} from "../../redux/mainFuture/selector";
import { IUseCasePointsTCF } from "../../redux/mainFuture/model/UseCasePointsTCF";
import Title from "../../components/Title";
import {
  _useCasePointCurrentTcfSuccess,
  _useCasePointTcfFectch,
} from "../../redux/mainFuture";
import { Toast } from "../../utils/Toast";

const listOpinion = [0, 1, 2, 3, 4, 5];


const TcfTab: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const useTcf = useSelector(selectorTcf);
  const Curnumber = useAppSelector(selectorCurrentTcf);
  const [tcf, setTcf] = useState<IUseCasePointsTCF>({
    t1: 0,
    t2: 0,
    t3: 0,
    t4: 0,
    t5: 0,
    t6: 0,
    t7: 0,
    t8: 0,
    t9: 0,
    t10: 0,
    t11: 0,
    t12: 0,
    t13: 0,
  });
  console.log("--------", Curnumber);
 

  const handleValue = (index: number) => {
    const curentValue = {
      t1: index,
      t2: index,
      t3: index,
      t4: index,
      t5: index,
      t6: index,
      t7: index,
      t8: index,
      t9: index,
      t10: index,
      t11: index,
      t12: index,
      t13: index,
    };
    setTcf(curentValue);
    dispatch(_useCasePointTcfFectch(curentValue));
    dispatch(
      _useCasePointCurrentTcfSuccess({
        tcf:{
          t1: index,
          t2: index,
          t3: index,
          t4: index,
          t5: index,
          t6: index,
          t7: index,
          t8: index,
          t9: index,
          t10: index,
          t11: index,
          t12: index,
          t13: index,
        }
      }
        )
    );

    Toast.ToastSuccess({
      Success: "TCF caculate complete",
    });
  };
  useEffect(() => {
    try{
      if (
        Curnumber.t1 != 0 ||
        Curnumber.t2 != 0 ||
        Curnumber.t3 != 0 ||
        Curnumber.t4 != 0 ||
        Curnumber.t5 != 0 ||
        Curnumber.t6 != 0 ||
        Curnumber.t7 != 0 ||
        Curnumber.t8 != 0 ||
        Curnumber.t9 != 0 ||
        Curnumber.t10 != 0 ||
        Curnumber.t11 != 0 ||
        Curnumber.t12 != 0 ||
        Curnumber.t13 != 0 
      ) {
        setTcf({
          t1:  Curnumber.t1,
          t2:  Curnumber.t2,
          t3:  Curnumber.t3,
          t4:  Curnumber.t4,
          t5:  Curnumber.t5,
          t6:  Curnumber.t6,
          t7:  Curnumber.t7,
          t8:  Curnumber.t8,
          t9:  Curnumber.t9,
          t10:  Curnumber.t10,
          t11:  Curnumber.t11,
          t12:  Curnumber.t12,
          t13:  Curnumber.t13,
        })
      }
    } catch(e){
      console.log(e);
    }
  }, []);
  const handleTcf = (e: any) => {
    dispatch(
      _useCasePointTcfFectch({
        t1: tcf.t1,
        t2: tcf.t2,
        t3: tcf.t3,
        t4: tcf.t4,
        t5: tcf.t5,
        t6: tcf.t6,
        t7: tcf.t7,
        t8: tcf.t8,
        t9: tcf.t9,
        t10: tcf.t10,
        t11: tcf.t11,
        t12: tcf.t12,
        t13: tcf.t13,
      })
    );
    Toast.ToastSuccess({
      Success: "TCF caculate complete",
    });
  };
  return (
    <div className="container tcf">
      <div className="tcf__left">
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
            <div className="row__item tcf__Description">Distributed System</div>
            <div className="row__item tcf__Weight">2.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t1}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t1: +e.target.value,
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
            <div className="row__item tcf__factor">T2</div>
            <div className="row__item tcf__Description">
              Response time/performance objectives
            </div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t2}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t2: +e.target.value,
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
            <div className="row__item tcf__factor">T3</div>
            <div className="row__item tcf__Description">
              End-user efficiency
            </div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t3}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t3: +e.target.value,
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
            <div className="row__item tcf__factor">T4</div>
            <div className="row__item tcf__Description">
              Internal processing complexity
            </div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t4}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t4: +e.target.value,
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
            <div className="row__item tcf__factor">T5</div>
            <div className="row__item tcf__Description">Code reusability</div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t5}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t5: +e.target.value,
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
            <div className="row__item tcf__factor">T6</div>
            <div className="row__item tcf__Description">Easy to install</div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t6}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t6: +e.target.value,
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
            <div className="row__item tcf__factor">T7</div>
            <div className="row__item tcf__Description">Easy to use</div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t7}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t7: +e.target.value,
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
            <div className="row__item tcf__factor">T8</div>
            <div className="row__item tcf__Description">
              Portability to other platforms
            </div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t8}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t8: +e.target.value,
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
          {/* T9 */}
          <div className="row ">
            <div className="row__item tcf__factor">T9</div>
            <div className="row__item tcf__Description">
              Portability to other platforms
            </div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t9}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t9: +e.target.value,
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
          {/* T10*/}
          <div className="row ">
            <div className="row__item tcf__factor">T10</div>
            <div className="row__item tcf__Description">
              Concurrent/parallel processing
            </div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t10}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t10: +e.target.value,
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
          {/* T11*/}
          <div className="row ">
            <div className="row__item tcf__factor">T11</div>
            <div className="row__item tcf__Description">Security features</div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t1}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t11: +e.target.value,
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
          {/* T12*/}
          <div className="row ">
            <div className="row__item tcf__factor">T12</div>
            <div className="row__item tcf__Description">
              Access for third parties
            </div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t12}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t12: +e.target.value,
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
          {/* T13*/}
          <div className="row ">
            <div className="row__item tcf__factor">T13</div>
            <div className="row__item tcf__Description">End user training</div>
            <div className="row__item tcf__Weight">1.0</div>

            <div className="row__item tcf__Rating">
              <select
                value={tcf.t13}
                onChange={(e) =>
                  setTcf({
                    ...tcf,
                    t13: +e.target.value,
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
      <div className="tcf__right">
        <div className="form">
          <Title title="TCF" />
          <div className="tcf__recipe">TCF = 0.6 + (TF/100)</div>
          {useTcf.tf != 0 && useTcf.tcf != 0 && (
            <div className="tcf__result">
              {`TCF = 0.6 + (${useTcf.tf}/100) = ${useTcf.tcf}`}
            </div>
          )}

          <button
            className="button button--defause"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleTcf(e)
            }
          >
            Caculate
          </button>
          <div className=" tcf__tool">
            <div className="tcf__tool__item">Tool:</div>
            <div className="tcf__tool__item " onClick={() => handleValue(0)}>
              <i className="bx bx-reset"></i>
            </div>
            <div className="tcf__tool__item" onClick={() => handleValue(1)}>
              1
            </div>
            <div className="tcf__tool__item" onClick={() => handleValue(2)}>
              2
            </div>
            <div className="tcf__tool__item" onClick={() => handleValue(3)}>
              3
            </div>
            <div className="tcf__tool__item" onClick={() => handleValue(4)}>
              4
            </div>
            <div className="tcf__tool__item" onClick={() => handleValue(5)}>
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TcfTab.propTypes = {};

export default TcfTab;
