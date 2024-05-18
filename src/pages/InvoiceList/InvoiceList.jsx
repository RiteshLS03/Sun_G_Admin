

import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import { Button, Checkbox, Pagination } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { IoMdDownload  } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";

import { MdAccountBalance } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { useState } from "react";


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const InvoiceList = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [statusBy, setStatusBy] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return <>
  <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Invoices</h5>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              className="ml-auto breadcrumbs_"
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb label="Invoice List" component="a" href="#" />
          </Breadcrumbs>

       
        </div>
      </div>


      {/* <div className="card shadow border-0 p-3 mt-4"> */}
<div className="row p-3">
  <div className="col-lg-4 col-md-6">
<div className="invoice-float-card lg green">
<h3>$78,593.00</h3>
<p>recieved amount</p>
<i className="material-icons"><MdAccountBalance />
</i>
</div>
  </div>
  <div className="col-lg-4 col-md-6">
<div className="invoice-float-card lg blue">
<h3>$78,593.00</h3>
<p>Drafts Amount</p>
<i className="material-icons"><MdDrafts  />
</i>
</div>
  </div>
  <div className="col-lg-4 col-md-6">
<div className="invoice-float-card lg purple">
<h3>$53,617.00
</h3>
<p>Pending Amount</p>
<i className="material-icons"><MdOutlinePending />

</i>
</div>
  </div>
{/* </div> */}

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
              <h4>Status By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={statusBy}
                  onChange={(e) => setStatusBy(e.target.value)}
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
              <h4>Issued by</h4>
              <FormControl size="small" className="w-100">
              <TextField id="outlined-basic"   value={issuedBy} type="date" size="small"  variant="outlined"  onChange={(e) => setIssuedBy(e.target.value)} />
              
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Search By</h4>
              <FormControl size="small" className="w-100">
              <TextField id="outlined-basic"   value={searchBy}  size="small" label='id / email / name' variant="outlined"   onChange={(e) => setSearchBy(e.target.value)} />

              </FormControl>
            </div>
            </div>

            <div className="table-responsive mt-3 ">
            <table className="table table-bordered table-striped v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>CLIENT </th>
                  <th>EMAIL </th>
                  <th>AMOUNT </th>
                  <th>STATUS </th>
                  <th>ISSUE DATE </th>
                  
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
                      <div className="userImg ">
                        <div className="rounded-circle">
                          <img
                            className="w-100"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6 className="ml-2">Nikita...</h6>
                                              </div>
                    </div>
                  </td>
                  <td>nikita@gmail.com</td>
                  <td>$5,689.00	
</td>
                  {/* <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$19.00</del>
                      <span className="new text-danger">$17.00</span>
                    </div>
                  </td> */}
             
             <td>
             <p className="invoice-table-badge green">recieved</p></td>
                  <td>29/03/2024 14.02</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <IoMdDownload  />
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
                      <div className="userImg ">
                        <div className="rounded-circle">
                          <img
                            className="w-100"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6  className="ml-2">Nikita...</h6>
                      
                      </div>
                    </div>
                  </td>
                  <td>nikita@gmail.com</td>
                  <td>$5,689.00	
</td>
                  
             
                  <td>
             <p className="invoice-table-badge blue">Drafts</p></td>
                  <td>29/03/2024 14.02</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <IoMdDownload  />
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
                      <div className="userImg ">
                        <div className="rounded-circle">
                          <img
                            className="w-100"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6  className="ml-2">Nikita...</h6>
                       
                      </div>
                    </div>
                  </td>
                  <td>nikita@gmail.com</td>
                  <td>$5,689.00	
</td>
             
                  <td>
             <p className="invoice-table-badge purple">Pending</p></td>
                  <td>29/03/2024 14.02</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <IoMdDownload  />
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
                      <div className="userImg ">
                        <div className="rounded-circle">
                          <img
                            className="w-100"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6  className="ml-2">Nikita...</h6>
                       
                      </div>
                    </div>
                  </td>
                  <td>nikita@gmail.com</td>
                  <td>$5,689.00	
</td>
             
                  <td>
             <p className="invoice-table-badge green">recieved</p></td>
                  <td>29/03/2024 14.02</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <IoMdDownload  />
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
                      <div className="userImg ">
                        <div className="rounded-circle">
                          <img
                            className="w-100"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6  className="ml-2">Nikita...</h6>
                       
                      </div>
                    </div>
                  </td>
                  <td>nikita@gmail.com</td>
                  <td>$5,689.00	
</td>
             
                  <td>
             <p className="invoice-table-badge blue">Drafts</p></td>
                  <td>29/03/2024 14.02</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <IoMdDownload  />
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
                      <div className="userImg ">
                        <div className="rounded-circle">
                          <img
                            className="w-100"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6  className="ml-2">Nikita...</h6>
                        
                      </div>
                    </div>
                  </td>
                  <td>nikita@gmail.com</td>
                  <td>$5,689.00	
</td>
             
                  <td>
             <p className="invoice-table-badge green">recieved</p></td>
                  <td>29/03/2024 14.02</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <IoMdDownload  />
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
                      <div className="userImg ">
                        <div className="rounded-circle">
                          <img
                            className="w-100"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6  className="ml-2">Nikita...</h6>
                       
                      </div>
                    </div>
                  </td>
                  <td>nikita@gmail.com</td>
                  <td>$5,689.00	
</td>
             
                  <td>
             <p className="invoice-table-badge green">recieved</p></td>
                  <td>29/03/2024 14.02</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <IoMdDownload  />
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
                      <div className="userImg ">
                        <div className="rounded-circle">
                          <img
                            className="w-100"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6  className="ml-2">Nikita...</h6>
                       
                      </div>
                    </div>
                  </td>
                  <td>nikita@gmail.com</td>
                  <td>$5,689.00	
</td>
             
                  <td>
             <p className="invoice-table-badge green">recieved</p></td>
                  <td>29/03/2024  &nbsp; 14.02</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <IoMdDownload  />
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
  </>
}

export default InvoiceList