import DashboardBox from "./DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosTimer } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { Button, Checkbox, Pagination } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Chart } from "react-google-charts";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MyContext } from "../../App";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  backgroundColor: "transparent",
  chartArea: { width: "100%", height: "100%" },
  is3D: true,
};

const Dashboard = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const ITEM_HEIGHT = 48;

  const context = useContext(MyContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [catBy, setCatBy] = useState("");
  const [brandBy, setBrandBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
    context.setIsHideSidebarAndHeader(false)
    window.scrollTo(0,0);
  },[])

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<IoMdCart />}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<MdShoppingBag />}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<GiStarsStack />}
              />
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex align-items-center  w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={handleClick}>
                    <HiDotsVertical />
                  </Button>
                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer />
                      Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer />
                      Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer />
                      Last MOnth
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer />
                      Last Year
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="text-white font-weight-bold">$3,87,202.00</h3>
              <p>3.67.202.00</p>
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"170px"}
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>
          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>Show By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-helper-label"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Category By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={catBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-helper-label"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Brand by</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={brandBy}
                  onChange={(e) => setBrandBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-helper-label"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Search By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={searchBy}
                  onChange={(e) => setSearchBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-helper-label"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3 ">
            <table className="table table-bordered table-striped v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>CATEGORY </th>
                  <th>IMAGE </th>
                  <th>COLOR </th>
                  <th>PRICE </th>
                  <th>STOCK </th>
                  <th>RATING </th>
                  <th>ORDER </th>
                  <th>SALES </th>
                  <th>ACTION </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
<Checkbox {...label}/> <span> #1</span>
                    </div>
                   </td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            className="w-100"
                            src="https://www.jiomart.com/images/product/original/490017829/suhana-pav-bhaji-masala-100-g-product-images-o490017829-p490017829-0-202203160345.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Masala & spices...</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, tempore.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Masala</td>
                  <td>Everest</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>49(16)</td>
                  <td>280</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>

                  <div className="d-flex align-items-center">
<Checkbox {...label}/> <span> #2</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            className="w-100"
                            src="https://www.jiomart.com/images/product/original/490017829/suhana-pav-bhaji-masala-100-g-product-images-o490017829-p490017829-0-202203160345.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Masala & spices...</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, tempore.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Masala</td>
                  <td>Everest</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>49(16)</td>
                  <td>280</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                  <div className="d-flex align-items-center">
<Checkbox {...label}/> <span> #3</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            className="w-100"
                            src="https://www.jiomart.com/images/product/original/490017829/suhana-pav-bhaji-masala-100-g-product-images-o490017829-p490017829-0-202203160345.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Masala & spices...</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, tempore.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Masala</td>
                  <td>Everest</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>49(16)</td>
                  <td>280</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>

                  <div className="d-flex align-items-center">
<Checkbox {...label}/> <span> #4</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            className="w-100"
                            src="https://www.jiomart.com/images/product/original/490017829/suhana-pav-bhaji-masala-100-g-product-images-o490017829-p490017829-0-202203160345.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Masala & spices...</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, tempore.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Masala</td>
                  <td>Everest</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>49(16)</td>
                  <td>280</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td> <div className="d-flex align-items-center">
<Checkbox {...label}/> <span> #5</span>
                    </div></td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            className="w-100"
                            src="https://www.jiomart.com/images/product/original/490017829/suhana-pav-bhaji-masala-100-g-product-images-o490017829-p490017829-0-202203160345.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Masala & spices...</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, tempore.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Masala</td>
                  <td>Everest</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>49(16)</td>
                  <td>280</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td> <div className="d-flex align-items-center">
<Checkbox {...label}/> <span> #6</span>
                    </div></td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            className="w-100"
                            src="https://www.jiomart.com/images/product/original/490017829/suhana-pav-bhaji-masala-100-g-product-images-o490017829-p490017829-0-202203160345.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Masala & spices...</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, tempore.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Masala</td>
                  <td>Everest</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>49(16)</td>
                  <td>280</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td> <div className="d-flex align-items-center">
<Checkbox {...label}/> <span> #7</span>
                    </div></td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            className="w-100"
                            src="https://www.jiomart.com/images/product/original/490017829/suhana-pav-bhaji-masala-100-g-product-images-o490017829-p490017829-0-202203160345.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Masala & spices...</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, tempore.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Masala</td>
                  <td>Everest</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>49(16)</td>
                  <td>280</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td> <div className="d-flex align-items-center">
<Checkbox {...label}/> <span> #8</span>
                    </div></td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            className="w-100"
                            src="https://www.jiomart.com/images/product/original/490017829/suhana-pav-bhaji-masala-100-g-product-images-o490017829-p490017829-0-202203160345.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Masala & spices...</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, tempore.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Masala</td>
                  <td>Everest</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>49(16)</td>
                  <td>280</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
        
          
              </tbody>  
            </table>

            <div className="d-flex tableFooter">
              <p className="mt-2">Showing <b>12</b> of <b>60</b> </p>
                <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
