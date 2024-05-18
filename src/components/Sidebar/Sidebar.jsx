/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from "../../App";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isToggeSubmenu, setIsToggeSubmenu] = useState(false)

  const context = useContext(MyContext)
  const isOpenSubmenu =(index)=>{
    setActiveTab(index)
    setIsToggeSubmenu(!isToggeSubmenu)
  }
  return (
    <>
      <div className="sidebar">
        <ul>
          <li className="mt-4">
            <Link to="/">
              <Button className={`w-100 mt-5 ${ activeTab === 0 ? 'active' : '' }`}  onClick={()=>isOpenSubmenu(0)}>
                <span className="icon">
                  <MdDashboard />
                </span>{" "}
                Dashboard
                {/* <span className="arrow">
                  <FaAngleRight />
                </span> */}
              </Button>
            </Link>
          </li>

          <li>
              <Button className={`w-100 ${ activeTab === 1   && isToggeSubmenu ===true ? 'active' : '' }`}  onClick={()=>isOpenSubmenu(1)}>
                <span className="icon">
                  <FaProductHunt />
                </span>
                Products
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
              <div className={`submenuWrapper ${activeTab === 1  && isToggeSubmenu ===true? 'colapse' : 'colapsed' }`}>
              <ul className="submenu">
                <li><Link to='/products'>Product List</Link></li>
                <li><Link to='/product/details'>Product View</Link></li>
                <li><Link to='/product/upload'>Product Upload</Link></li>
              </ul></div>
          </li>
          <li>
            <Button className={`w-100 ${ activeTab === 2 ? 'active' : '' }`}  onClick={()=>isOpenSubmenu(2)}>
                <span className="icon">
                  <FaCartArrowDown />
                </span>   
                Category
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>{" "}
              <div className={`submenuWrapper ${activeTab === 2  && isToggeSubmenu ===true? 'colapse' : 'colapsed' }`}>
              <ul className="submenu">
                <li><Link to='/category'>Category</Link></li>
                <li><Link to='/category/add'>Add Category</Link></li>
              </ul></div>
          </li>
          <li>
            {" "}
            <Link to="/">
            <Button className={`w-100 ${ activeTab === 1   && isToggeSubmenu ===true ? 'active' : '' }`} onClick={()=>isOpenSubmenu(3)}>
                <span className="icon">
                  <FaUserCircle  />
                </span>
                Users
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
              <div className={`submenuWrapper ${activeTab === 3  && isToggeSubmenu ===true? 'colapse' : 'colapsed' }`}>
              <ul className="submenu">
                <li><Link to='/users'>User  List</Link></li>
                <li><Link to='/user/details'>User View</Link></li>
                {/* <li><Link to='/account'>My Account</Link></li> */}
              </ul></div>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className={`w-100 ${ activeTab === 4 ? 'active' : '' }`}  onClick={()=>isOpenSubmenu(4)}>
                <span className="icon">
                  <FaBell />
                </span>
                Notifications
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className={`w-100 ${ activeTab === 5 ? 'active' : '' }`}  onClick={()=>isOpenSubmenu(5)}>
                <span className="icon">
                  <IoIosSettings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
          <Button className={`w-100 ${ activeTab === 6 ? 'active' : '' }`} onClick={()=>isOpenSubmenu(3)}>
              <span className="icon">
                <MdDashboard />
              </span>{" "}
              Invoice
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>

            <div className={`submenuWrapper ${activeTab === 3  && isToggeSubmenu ===true ? 'colapse' : 'colapsed' }`}>
              <ul className="submenu">
                <li><Link to='/invoice'>Invoice List</Link></li>
                <li><Link to='/invoice/details'>Invoice Details</Link></li>
              </ul></div>
          </li>
          <li>
          <Button className={`w-100 ${ activeTab === 7 ? 'active' : '' }`}>
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
          <Button className={`w-100 ${ activeTab === 8 ? 'active' : '' }`}>
              <span className="icon">
                <FaCartArrowDown />
              </span>
              Orders
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
          <Button className={`w-100 ${ activeTab === 9 ? 'active' : '' }`}>
              <span className="icon">
                <MdMessage />
              </span>
              Messages
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
          <Button className={`w-100 ${ activeTab === 10 ? 'active' : '' }`}>
              <span className="icon">
                <FaBell />
              </span>
              Notifications
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
          <Button className={`w-100 ${ activeTab === 11 ? 'active' : '' }`}>
              <span className="icon">
                <IoIosSettings />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
          <Button className={`w-100 ${ activeTab === 12 ? 'active' : '' }`}>
              <span className="icon">
                <MdMessage />
              </span>
              Messages
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <FaBell />
              </span>
              Notifications
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <IoIosSettings />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
        </ul>
        <br />
        <div className="logoutWrapper">
          <div className="logoutBox">
          <Button variant="contained"> <IoMdLogOut />
Logout</Button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
