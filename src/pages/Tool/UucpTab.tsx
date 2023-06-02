import React, { useEffect, useState,ChangeEvent } from "react";
import PropTypes from "prop-types";
import { CSVLink, CSVDownload } from "react-csv";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import Papa from "papaparse";

import {
  selectorCurrentUucp,
  selectorUucp,
} from "../../redux/mainFuture/selector";
import { IUseCasePointsUUCP } from "../../redux/mainFuture/model/UseCasePointsUUCP";
import Title from "../../components/Title";
import {
  _useCasePointCurrentUucpSuccess,
  _useCasePointUucpFectch,
} from "../../redux/mainFuture";
import { Toast } from "../../utils/Toast";
import { Link } from "react-router-dom";
import { dataUUCP } from "../../utils/data";
const Uucp: React.FC = (props) => {
  const useUucp = useAppSelector(selectorUucp);
  const dispach = useAppDispatch();
  const Curnumber = useAppSelector(selectorCurrentUucp);
  const [data, setData] = useState<any[]>(dataUUCP);
  const [payLoad, setPayLoad] = useState<any[]>([]);
  const [Uucp, setUucp] = useState<IUseCasePointsUUCP>({
    average: 0,
    complex: 0,
    simple: 0,
    uucp: 0,
    
  });

 
  
  const handleUucp = (e: any) => {
    dispach(
      _useCasePointUucpFectch({
        average: Uucp.average,
        simple: Uucp.simple,
        complex: Uucp.complex,
      })
    );
    
    dispach(
      _useCasePointCurrentUucpSuccess({
        uucp: {
          average: Uucp.average,
          simple: Uucp.simple,
          complex: Uucp.complex,
        },
      })
    );
    const result: any[] = [];
    const dataSimple = data.filter((item) => item.UseCaseClassification === 'Simple')
    dataSimple.map((item) => {
      const object: any = {};
      object.UseCaseClassification = item.UseCaseClassification;
      object.Weight = item.Weight
      object.NumberOfUseCases = Uucp.simple
      result.push(object);
    })
    
    const dataAverage = data.filter((item) => item.UseCaseClassification === 'Average')
    dataAverage.map((item) => {
      const object: any = {};
      object.UseCaseClassification = item.UseCaseClassification;
      object.Weight = item.Weight
      object.NumberOfUseCases = Uucp.average
      result.push(object);
    })

    const dataComplex = data.filter((item) => item.UseCaseClassification === 'Complex')
    dataComplex.map((item) => {
      const object: any = {};
      object.UseCaseClassification = item.UseCaseClassification;
      object.Weight = item.Weight
      object.NumberOfUseCases = Uucp.complex
      result.push(object);
    })
    const dataResult: any = {};
    dataResult.UseCaseClassification = `Total: ${useUucp.uucp}`
    result.push(dataResult)
    setPayLoad(result)
    
    Toast.ToastSuccess({
      Success: "Uucw caculate complete",
    });
  };
  const handleImportCSV = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
  
      if (file && file.type !== 'text/csv') {
        console.log('Only accept csv files ...');
        return;
      }
      
      Papa.parse(file, {
        header: true,
        complete: function(result) {
          const dataCSV = result.data;
          dataCSV.pop()
          console.log('updated data', dataCSV);
          setData(dataCSV)
          
          console.log('updated data', data);
          

        },
      });
    }
  };
  
  useEffect(() => {
    setUucp({
      ...Uucp,
      simple: data.find((item) => item.UseCaseClassification === 'Simple')?.NumberOfUseCases,
      average: data.find((item) => item.UseCaseClassification === 'Average')?.NumberOfUseCases,
      complex: data.find((item) => item.UseCaseClassification === 'Complex')?.NumberOfUseCases,
    })
    console.log('updated data simple', data.find((item) => item.UseCaseClassification === 'Simple')?.NumberOfUseCases);
  },[data])
  useEffect(() => {
    if (
      Curnumber.complex !== 0 ||
      Curnumber.average !== 0 ||
      Curnumber.simple !== 0
    ) {
      setUucp({
        average: Curnumber.average,
        simple: Curnumber.simple,
        complex: Curnumber.complex,
      });
    }
  }, []);

  return (
    <div className="uucp">
      <div className="uucp__left">
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
          {data &&
            data.map((item, index) => {
              
              return (
                
                <div key={index} className="row">
                  <div className="row__item uucp__UseCaseClassification">
                    {item.UseCaseClassification}
                  </div>
                  <div className="row__item uucp__Weight">{item.Weight}</div>
                  <div className="row__item uucp__x">x</div>
                  <div className="row__item uucp__numberCase">
                    {item.UseCaseClassification === 'Simple' &&  (Uucp.simple || item.NumberOfUseCases)}
                    {item.UseCaseClassification === 'Average' && (Uucp.average || item.NumberOfUseCases)}
                    {item.UseCaseClassification === 'Complex' && (Uucp.complex || item.NumberOfUseCases)}
                    
                  </div>
                  <div className="row__item uucp__Result">
                    {item.UseCaseClassification === 'Simple' && useUucp.simple}
                    {item.UseCaseClassification === 'Average' && useUucp.average}
                    {item.UseCaseClassification === 'Complex' && useUucp.complex}
                   
                  </div>
                </div>
              );
            })}

          <div className="row">
            <p>{`Total: ${useUucp.uucp}`}</p>
          </div>
        </div>
      </div>
      <div className="uucp__right">
        <div className="form">
          <Title title="UUCP"></Title>
          <div className="form__body">
            <div className="group">
              <input
                type="text"
                placeholder="Simple"
                onChange={(e) =>
                  setUucp({
                    ...Uucp,
                    simple: +e.target.value ,
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
                  setUucp({
                    ...Uucp,
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
                  setUucp({
                    ...Uucp,
                    complex: +e.target.value,
                  })
                }
              />
              <p></p>
            </div>
            <button
              className="button button--defause"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleUucp(e)
              }
            >
              Caculate
            </button>
            {/* EXPORT CSV */}
            <CSVLink data={payLoad}  filename={"my-file.csv"} className="items-center flex justify-center bg-[#50C2C9] py-4 rounded-full font-semibold text-white hover:bg-white hover:text-[#50C2C9] border-4 border-transparent my-4 hover:border-[#50C2C9]">Xuất file csv</CSVLink>
            <div>
              <label htmlFor="import-csv" className="button button--defause text-center flex items-center justify-center" >Import Excel</label>
              <input type="file" hidden id="import-csv" onChange={handleImportCSV} />
            </div>
          </div>
        </div>
        {useUucp.uucp !== 0 && (
          <div className="form__nextPage">
            <Link to={"/Tool/Uaw"}>
              <span>Next Page</span>
              <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

Uucp.propTypes = {};

export default Uucp;
