import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import "boxicons";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import useTheme from "../../hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import Loading from "../Loading";
import { CaculateUAW, CaculateUUCW } from "../../utils/utils";
import { useAppSelector } from "../../hooks/redux.hook";
import { selectorAuth } from "../../redux/user/auth";
import { getUser } from "../../api/database/auth";

const navBar = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Tool",
    path: "/Tool",
  },
  {
    title: "History",
    path: "/History",
  },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avata, setAvatar] = useState<null | string>(null);
  const { handleThemeSwitch } = useTheme();
  const { pathname } = useLocation();
  const user = useAppSelector(selectorAuth);
  console.log("U", user);
  // useEffect(() => {
  //   const get = ()=>{
  //      const a =  CaculateUAW({
  //       average:1,
  //       complex:1,
  //       simple:1,
  //      });
  //      console.log(a);
  //   }
  //   get();
  // },[])
  useEffect(() => {
    const getAvatar = async () => {
      const initUser = await getUser({
        uid: `${user.uid}`,
      });
      setAvatar(initUser.data()?.photoUrl);
      console.log(initUser.data());
    };
    getAvatar();
  }, [user]);
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          {/* <img
            src="https://kinhmatanna.com/wp-content/uploads/2022/06/logo-anna.svg"
            alt=""
            className="header__logo__img"
          /> */}
          UserCaseTool
        </Link>
      </div>
      <div className="header__wrapper">
        <div className="header__nav ">
          {navBar &&
            navBar.map((item, index) => {
              return (
                <Link
                  key={`header${index}`}
                  to={`${item.path}`}
                  className={`header__nav__item header--hover ${
                    pathname == item.path ? "active" : ""
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
        </div>
        <div className="header__user">
          {avata ? (
            <Link to={"Profile"}>
              <div className="header__user__item">
                <img src={avata} alt="avatar" />
              </div>
            </Link>
          ) : (
            <Link to={"SignIn"}>
              <div className="header__user__item">
                <i className="bx bx-user header--hover"></i>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
