/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdMenuOpen, MdOutlineLightMode, MdOutlineMenu } from "react-icons/md";
import Searchbox from "../Searchbox/Searchbox";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

// import {MdOutlineMenu} from 'react-icons/md'

// dropdown
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { IoShieldHalfOutline } from "react-icons/io5";
import { Divider } from "@mui/material";
import { MyContext } from "../../App";
import UserAvatarImg from "../UserAvatarImg/UserAvatarImg";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpennotificationDrop, setIsOpennotificationDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);

  

  const context = useContext(MyContext);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpenNavigationDrop = () => {
    setIsOpennotificationDrop(true);
  };
  const handleCloseNavigationDrop = () => {
    setIsOpennotificationDrop(false);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 part1">
              <Link to="/" className="d-flex align-items-center logo">
                <img src={logo} alt="" />
                <span className="ml-2">Admin</span>
              </Link>
            </div>

            <div className="col-sm-3  d-flex align-items-center part2 ">
              <Button
                className="rounded-circle mr-3"
                onClick={() =>
                  context.setIsToggleSidebar(!context.isToggleSidebar)
                }
              >
                {context.isToggleSidebar === false ? (
                  <MdMenuOpen />
                ) : (
                  <MdOutlineMenu />
                )}
              </Button>
              <Searchbox />
            </div>

            <div className="col-sm-7  d-flex align-items-center justify-content-end part3 ">
              <Button className="rounded-circle mr-3" onClick={()=>context.setThemeMode(!context.themeMode)}>
                <MdOutlineLightMode />
              </Button>
              <Button className="rounded-circle mr-3">
                <IoCartOutline />
              </Button>

              <Button className="rounded-circle mr-3">
                <MdOutlineMailOutline />
              </Button>
              <div className="dropdownWrapper position-relative">
                <Button
                  onClick={handleOpenNavigationDrop}
                  className="rounded-circle mr-3"
                >
                  <FaRegBell />
                </Button>
                <Menu
                  anchorEl={isOpennotificationDrop}
                  id="notifications"
                  className="notifications dropdown_list"
                  open={openNotifications}
                  onClose={handleCloseNavigationDrop}
                  onClick={handleCloseNavigationDrop}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>Orders (12)</h4>
                  </div>

                  <Divider className="mb-1" />

                  <div className="scroll">
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex">
                        <div>
                        <UserAvatarImg img={'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'}/>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikita</b>
                              Lorem ipsum dolor sit amet.{" "}
                              <b>Lorem ipsum dolor sit amet.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">Few Seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikita</b>
                              Lorem ipsum dolor sit amet.{" "}
                              <b>Lorem ipsum dolor sit amet.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">Few Seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikita</b>
                              Lorem ipsum dolor sit amet.{" "}
                              <b>Lorem ipsum dolor sit amet.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">Few Seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikita</b>
                              Lorem ipsum dolor sit amet.{" "}
                              <b>Lorem ipsum dolor sit amet.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">Few Seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>

                  <div className="pl-3 pr-3 pb-1 pt-2 w-100">
                    <Button className="btn-blue w-100">
                      View All Notifications
                    </Button>
                  </div>
                </Menu>
              </div>
              { context.isLogin !== true ? (
              <Link to={'/login'}> <Button className="btn-blue btn-lg btn-round">Sign In </Button></Link>
              ) : (
                <div className="myAccWrapper">
                  <Button
                    onClick={handleOpenMyAccDrop}
                    className="myAcc d-flex align-items-center"
                  >
                    <div className="userImg">
                      <span className="rounded-cirle">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2AgOEWgKj_pJ_G9Wfn_cywj0fQ_C3_ojKA&s"
                          alt=""
                        />
                      </span>
                    </div>

                    <div className="userInfo">
                      <h4 className="mb-0">Nikita Basaiye</h4>
                      <p>@nikii1104</p>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAcc}
                    onClose={handleCloseMyAccDrop}
                    onClick={handleCloseMyAccDrop}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      My Account{" "}
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <IoShieldHalfOutline />
                      </ListItemIcon>
                      Reset Password{" "}
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
