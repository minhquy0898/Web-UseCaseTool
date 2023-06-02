import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/redux.hook";
import { selectorLogin } from "../redux/user/auth";
import usePrivateRouter from "../components/PrivateRouter";
import PrivateRouter from "../components/PrivateRouter";
import AdminLayout from "../layouts/AdminLayout";
import Tool from "../pages/Tool/index";
import Uucp from "../pages/Tool/UucpTab";
import UawTab from "../pages/Tool/UawTab";
import TcfTab from "../pages/Tool/TcfTab";
import EcfTab from "../pages/Tool/EcfTab";
import Result from "../pages/Tool/Result";
import History from "../pages/History";

const Home = React.lazy(() => import("../pages/Home"));
const DefaultLayout = React.lazy(() => import("../layouts/DefaultLayout"));
const SignIn = React.lazy(() => import("../pages/SignIn"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const Profile = React.lazy(() => import("../pages/Profile"));

const MainRouter: React.FC = () => {
  const isLogin = useAppSelector(selectorLogin);
  return (
    <>
      {/* layout user */}
      <DefaultLayout>
        <Routes>
          {/* Public router */}
          <Route element={<Home />} index />
          <Route element={<SignIn />} path={"SignIn"} />
          <Route element={<SignUp />} path={"SignUp"} />
          <Route element={<PrivateRouter isLogin={isLogin} />} path={"History"}>
          <Route element={<History />} index />
           
          </Route>
         
          {/* private router */}
          <Route element={<PrivateRouter isLogin={isLogin} />} path={"Profile"}>
            
            <Route element={<Profile />} index />
          </Route>
          <Route element={<Tool />} path="/Tool">
            <Route element={<Uucp />} index />
            <Route element={<UawTab />} path="Uaw" />
            <Route element={<TcfTab />} path="Tcf" />
            <Route element={<EcfTab />} path="Ecf" />
            <Route element={<Result />} path="Result" />
          </Route>
        </Routes>
      </DefaultLayout>
      {/* add more layout is here */}
    </>
  );
};

export default MainRouter;
