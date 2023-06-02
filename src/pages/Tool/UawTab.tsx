import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { selectorCurrentUaw, selectorUaw } from '../../redux/mainFuture/selector';
import { IUseCasePointsUAW } from '../../redux/mainFuture/model/UseCasePointsUAW';
import { _useCasePointCurrentUawSuccess, _useCasePointUawFectch } from '../../redux/mainFuture';
import Title from '../../components/Title';
import { Toast } from '../../utils/Toast';


const UawTab:React.FC = props => {
    const useuaw = useAppSelector(selectorUaw);
  const dispach =  useAppDispatch();
  const Curnumber =  useAppSelector(selectorCurrentUaw);
  console.log("uucp", useuaw);
  const [uaw, setuaw] = useState<IUseCasePointsUAW>({
    average: 0,
    complex: 0,
    simple: 0,
    uaw: 0,

  });
console.log(Curnumber)
  const handleuaw =  (e:any)=>{
    dispach(_useCasePointUawFectch({
      average:uaw.average,
      simple:uaw.simple,
      complex:uaw.complex,
    }))
    dispach(_useCasePointCurrentUawSuccess({
      uaw:{
        average:uaw.average,
      simple:uaw.simple,
      complex:uaw.complex,
      } 
    }));
    Toast.ToastSuccess(
      {
        Success:"Uaw caculate complete",
      }
    )
    
  }
  useEffect(()=>{
    if(Curnumber.complex !=0 || Curnumber.average!=0 || Curnumber.simple !=0){
      setuaw({
        average:Curnumber.average,
        simple:Curnumber.simple,
        complex:Curnumber.complex,
      })
    }
  },[])
  return (
    <div className="uaw">
      <div className="uaw__left">
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
            <div className="row__item uaw__UseCaseClassification">Simple</div>
            <div className="row__item uaw__Weight">5</div>
            <div className="row__item uaw__x">x</div>
            <div className="row__item uaw__numberCase">{uaw.simple}</div>
            <div className="row__item uaw__Result">{useuaw.simple
        }</div>
          </div>

          <div className="row ">
            <div className="row__item uaw__UseCaseClassification">Average</div>
            <div className="row__item uaw__Weight">10</div>
            <div className="row__item uaw__x">x</div>
            <div className="row__item uaw__numberCase">{uaw.average}</div>
            <div className="row__item uaw__Result">{useuaw.average}</div>
          </div>

          <div className="row ">
            <div className="row__item uaw__UseCaseClassification">Complex</div>
            <div className="row__item uaw__Weight">15</div>
            <div className="row__item uaw__x">x</div>
            <div className="row__item uaw__numberCase">{uaw.complex}</div>
            <div className="row__item uaw__Result">{useuaw.complex}</div>
          </div>
          <div className="row">
          <p >
            {`Total: ${useuaw.uaw}`}
          </p>
        </div>
        </div>
        
      </div>
      <div className="uaw__right">
        <div className="form">
          <Title
          title="Uaw"
          ></Title>
          <div className="form__body">
            <div className="group">
              <input
                type="text"
                placeholder="Simple"
                onChange={(e) =>
                  setuaw({
                    ...uaw,
                    simple: +e.target.value,
                  })
                }
              />
              <p></p>
            </div>
            <div className="group">
              <input
                type="text"
                placeholder="average"
                onChange={(e) =>
                  setuaw({
                    ...uaw,
                    average: +e.target.value,
                  })
                }
              />
              <p></p>
            </div>
            <div className="group">
              <input
                type="text"
                placeholder="complex"
                onChange={(e) =>
                  setuaw({
                    ...uaw,
                    complex: +e.target.value,
                  })
                }
              />
             
            </div>
            <button
                  className="button button--defause"
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => handleuaw(e)}
                >
                  Caculate
                </button>
          </div>
        </div>
      </div>
    </div>
  )
}

UawTab.propTypes = {}

export default UawTab