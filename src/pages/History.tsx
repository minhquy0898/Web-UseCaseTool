import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProjectByUid } from "../api/database/UseCaseTool";
import { formatTimestamptoDate } from "../utils/Format";
import { selectorAuth } from "../redux/user/auth";
import { useAppSelector } from "../hooks/redux.hook";

const History: React.FC = (props) => {
  const [history, setHistory] = useState<any>([]);
  const user = useAppSelector(selectorAuth);
  useEffect(() => {
    const getdata = async () => {
      if(user.uid){
        const data: any = await getProjectByUid(user.uid);
        console.log(data);
        setHistory([...data]);
      }
    };
    getdata();
  }, [user]);
  console.log(history);
  const handleId = (pid: string) => {
    localStorage.setItem("Pid", pid);
  };
  return (
    <div className="History">
      <div className="container">
        <div className="History__list">
          {history.length > 0 &&
            history.map((item: any, index: any) => {
              return (
                <Link
                  to={"/Tool/Result"}
                  className="History__item"
                  onClick={() => handleId(item.Pid)}
                  key={`item__${index}`}
                >
                  <div className="History__item__left">
                    <div className="id">{item.Pid}</div>
                    <div className="name">{item.Info.NameProject}</div>
                    <div className="date">
                      {formatTimestamptoDate(item.Info.CreatedDate.toDate())}
                    </div>
                  </div>
                  <div className="History__right">
                    <div className="History__number">{`${index + 1}`}</div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

History.propTypes = {};

export default History;
