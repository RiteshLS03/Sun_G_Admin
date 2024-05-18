import { useState } from "react";

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
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

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
const Category = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const editCategory = () => {
    setOpen(true);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Add Category</h5>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              className="ml-auto breadcrumbs_"
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb label="Category" component="a" href="#" />
          </Breadcrumbs>

          <Link to='/category/add'><Button className='btn-blue ml-3 pl-3 pr-3'>Add Category</Button></Link>
        </div>
      </div>

      <div className="card shadow border-0 p-3 mt-4">
        <div className="table-responsive mt-3 ">
          <table className="table table-bordered table-striped v-align">
            <thead className="thead-dark">
              <tr>
                <th>UID</th>
                <th style={{ width: "300px" }}>CATEGORY </th>
                <th>IMAGE </th>
                <th>COLOR </th>
                {/* <th>PRICE </th>
                  <th>STOCK </th>
                  <th>RATING </th>
                  <th>ORDER </th>
                  <th>SALES </th> */}
                <th>ACTION </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <Checkbox {...label} /> <span> #1</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, tempore.
                      </p>
                    </div>
                  </div>
                </td>
                <td>Masala</td>
                <td>#ccc</td>

                <td>
                  <div className="actions d-flex align-items-center">
                    <Button
                      className="success"
                      color="success"
                      onClick={editCategory}
                    >
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
                    <Checkbox {...label} /> <span> #2</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, tempore.
                      </p>
                    </div>
                  </div>
                </td>
                <td>Masala</td>
                <td>#ccc</td>

                <td>
                  <div className="actions d-flex align-items-center">
                    <Button
                      className="success"
                      color="success"
                      onClick={editCategory}
                    >
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
                    <Checkbox {...label} /> <span> #3</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, tempore.
                      </p>
                    </div>
                  </div>
                </td>
                <td>Masala</td>
                <td>#ccc</td>

                <td>
                  <div className="actions d-flex align-items-center">
                    <Button
                      className="success"
                      color="success"
                      onClick={editCategory}
                    >
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
                    <Checkbox {...label} /> <span> #4</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, tempore.
                      </p>
                    </div>
                  </div>
                </td>
                <td>Masala</td>
                <td>#ccc</td>

                <td>
                  <div className="actions d-flex align-items-center">
                    <Button
                      className="success"
                      color="success"
                      onClick={editCategory}
                    >
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
                  {" "}
                  <div className="d-flex align-items-center">
                    <Checkbox {...label} /> <span> #5</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, tempore.
                      </p>
                    </div>
                  </div>
                </td>
                <td>Masala</td>
                <td>#ccc</td>

                <td>
                  <div className="actions d-flex align-items-center">
                    <Button
                      className="success"
                      color="success"
                      onClick={editCategory}
                    >
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
                  {" "}
                  <div className="d-flex align-items-center">
                    <Checkbox {...label} /> <span> #6</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, tempore.
                      </p>
                    </div>
                  </div>
                </td>
                <td>Masala</td>
                <td>#ccc</td>

                <td>
                  <div className="actions d-flex align-items-center">
                    <Button
                      className="success"
                      color="success"
                      onClick={editCategory}
                    >
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
                  {" "}
                  <div className="d-flex align-items-center">
                    <Checkbox {...label} /> <span> #7</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, tempore.
                      </p>
                    </div>
                  </div>
                </td>
                <td>Masala</td>
                <td>#ccc</td>

                <td>
                  <div className="actions d-flex align-items-center">
                    <Button
                      className="success"
                      color="success"
                      onClick={editCategory}
                    >
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
                  {" "}
                  <div className="d-flex align-items-center">
                    <Checkbox {...label} /> <span> #8</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, tempore.
                      </p>
                    </div>
                  </div>
                </td>
                <td>Masala</td>
                <td>
                  {/* <span className='dot' style={{background : item.color}}></span> */}
                  #fff
                </td>

                <td>
                  <div className="actions d-flex align-items-center">
                    <Button
                      className="success"
                      color="success"
                      onClick={editCategory}
                    >
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
            <p className="mt-2">
              Showing <b>12</b> of <b>60</b>{" "}
            </p>
            <Pagination
              count={10}
              color="primary"
              className="pagination"
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>

      <Dialog
      className='editModal'
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Category Name"
            type="text"
            fullWidth
          
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="images"
            name="images"
            label="Category Images"
            type="text"
            fullWidth
           
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="color"
            name="color"
            label="Category Color"
            type="text"
            fullWidth
       
          />
        </DialogContent>

        <br />
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>Cancel</Button>
          <Button type="submit" variant='contained'>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Category;
