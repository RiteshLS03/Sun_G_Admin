import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaCloudUploadAlt } from "react-icons/fa";

import { useState } from "react";
import { Button } from "@mui/material";
import { fetchDataFromApi, postData } from "../utils/api";

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

const CategoryAdd = () => {
  const [formFields, setFormFields] = useState({
    name :'',
    images :[],
    color :''
  });
 
const changeInput =(e)=>{
  setFormFields (()=>({
    ...formFields,
    [e.target.value]:e.target.value
  }))
}

const addCategory =(e)=>{
     e.preventDefault()
// console.log(formFields);
postData('/api/category/',formFields).then((res)=>{
  console.log(res);
})

// fetchDataFromApi('/api/category').then(res=>{
//   console.log(res);
// })
    }


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
            <StyledBreadcrumb label="Add Category" />
          </Breadcrumbs>
        </div>

        <form className="form" onSubmit={addCategory}>
          <div className="row">
            <div className="col-sm-9">
              <div className="card p-4">
                {/* <h5 className="mb-4">Basic Information</h5> */}
                <div className="form-group">
                  <h6>Category Name</h6>
                  <input onChange={changeInput} type="text" name='name' />
                </div>
                <div className="form-group">  
                  <h6>Image Url</h6>
                  <input onChange={changeInput} type="text"  name='images'/>
                </div>
                <div className="form-group">
                  <h6>Color</h6>
                  <input onChange={changeInput} type="text"  name='color'/>
                </div>

           <br />
<Button type="submit" className="btn-blue btn-lg btn-big"> <FaCloudUploadAlt />&nbsp;
 PUBLISH AND VIEW</Button>

              </div>
            </div>
           
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryAdd;
