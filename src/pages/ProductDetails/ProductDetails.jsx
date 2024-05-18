import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { FaReply } from "react-icons/fa";

import { IoIosPricetag } from "react-icons/io";
import { IoIosCheckbox } from "react-icons/io";

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Slider from "react-slick";
import UserAvatarImg from "../../components/UserAvatarImg/UserAvatarImg";
import { Button } from "@mui/material";
import { useRef } from "react";

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

const ProductDetails = () => {

  const productSliderBig = useRef();
  const productSliderSml = useRef();

  var ProductSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  var ProductSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
const goToSlide =(index)=>{
  productSliderBig.current.slickGoTo(index);
  productSliderSml.current.slickGoTo(index);
}

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product View</h5>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              className="ml-auto breadcrumbs_"
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb label="Products" component="a" href="#" />
            <StyledBreadcrumb label="Product view" />
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSection">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pb-3 pl-4 pr-4 pt-3">
                <h6 className="mb-2">Photo Gallery</h6>
                <Slider
                  {...ProductSliderOptions}
                  ref={productSliderBig}
                  className="sliderBig"
                >
                  <div className="item">
                    <img
                      className=" mb-4 w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-0-202305221342.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className=" mb-4 w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-0-202305221342.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className=" mb-4 w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-0-202305221342.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className=" mb-4 w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-0-202305221342.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className=" mb-4 w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-0-202305221342.jpg"
                      alt=""
                    />
                  </div>
                </Slider>

                <Slider
                  {...ProductSliderSmlOptions}
                  ref={productSliderSml}
                  className="sliderSml"
                >
                  <div className="item" onClick={() => goToSlide(0)}>
                    <img
                      className="w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-0-202305221342.jpg"
                      alt=""
                    />
                  </div>

                  <div className="item" onClick={() => goToSlide(1)}>
                    <img
                      className="w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-3-202404181454.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(2)}>
                    <img
                      className="w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-2-202404181454.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(3)}>
                    <img
                      className="w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-3-202404181454.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(4)}>
                    <img
                      className="w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-3-202404181454.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(5)}>
                    <img
                      className="w-100"
                      src="https://www.jiomart.com/images/product/original/rvtdov17il/ritually-pure-100-organic-yellow-moong-daal-moong-mogar-1-kg-pack-product-images-orvtdov17il-p601685005-3-202404181454.jpg"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-7">
              <div className="pb-3 pl-4 pr-4 pt-3">
                <h6 className="mb-4">Photo Details</h6>
                <h4>
                  Ritually Pure 100% Organic | Yellow Moong Daal | Moong Mogar |
                  1 Kg Pack
                </h4>

                <div className="productInfo mt-4">
                  <div className="row ">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Ritually pure</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategoryAlt />
                      </span>
                      <span className="name">Category</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Organic</span>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoIosSettings />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className=" list-inline-item">
                            <span>ORGANIC</span>
                          </li>
                          <li className=" list-inline-item">
                            <span>MOONG</span>
                          </li>
                          <li className=" list-inline-item">
                            <span>DAL</span>
                          </li>
                          <li className=" list-inline-item">
                            <span>PULSES</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  {/* <div className="row ">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                      <IoColorPalette />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Organic</span>
                    </div>
                  </div> */}
                  <div className="row ">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdPhotoSizeSelectActual />
                      </span>
                      <span className="name">Weight</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className=" list-inline-item">
                            <span>100g</span>
                          </li>
                          <li className=" list-inline-item">
                            <span>500g</span>
                          </li>
                          <li className=" list-inline-item">
                            <span>1kg</span>
                          </li>
                          <li className=" list-inline-item">
                            <span>2kg</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoIosPricetag />
                      </span>
                      <span className="name">Price</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>$32.00</span>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaCartShopping />
                      </span>
                      <span className="name">Stock</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>68(Piece)</span>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaStar />
                      </span>
                      <span className="name">Review</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>(03) Review</span>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoIosCheckbox />
                      </span>
                      <span className="name">Published</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>02-Feb-2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h5 className="mt-4 mb-3">Product Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              quisquam natus ea maxime in facilis. Sint illum quaerat impedit
              quisquam blanditiis, obcaecati eveniet rem dolores. Odio, ut
              distinctio dolorem odit recusandae, cum ea aperiam modi,
              temporibus nemo porro reprehenderit iure perspiciatis aut deserunt
              nihil. Vel ipsam itaque eligendi sint accusantium?
            </p>

            <br />
            <h6 className="mt-4 mb-4"> Rating Analytics</h6>
            <div className="ratingSection">
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">5 Star</span>
                <span className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </span>
                <span className="col3">(22)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">4 Star</span>
                <span className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </span>
                <span className="col3">(6)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">3 Star</span>
                <span className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </span>
                <span className="col3">(05)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">2 Star</span>
                <span className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </span>
                <span className="col3">(03)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">1 Star</span>
                <span className="col2">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "5%" }}></div>
                  </div>
                </span>
                <span className="col3">(02)</span>
              </div>
            </div>

            <br />
            <h6 className="mt-4 mb-4"> Customer Reviews</h6>
            <div className="reviewSection">
              <div className="reviewRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex align-items-center flex-column">
                      <div className="userInfo d-flex align-itmes-center mb-3">
                        <UserAvatarImg
                          img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          lg={true}
                        />

                        <div className="info pl-3">
                          <h6>Nikita basaiye</h6>
                          <span>25 Minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        {" "}
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem harum corrupti impedit totam error animi.
                  </p>
                </div>
              </div>

              <div className="reviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex align-items-center flex-column">
                      <div className="userInfo d-flex align-itmes-center mb-3">
                        <UserAvatarImg
                          img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          lg={true}
                        />

                        <div className="info pl-3">
                          <h6>Nikita basaiye</h6>
                          <span>25 Minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        {" "}
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem harum corrupti impedit totam error animi.
                  </p>
                </div>
              </div>

              <div className="reviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex align-items-center flex-column">
                      <div className="userInfo d-flex align-itmes-center mb-3">
                        <UserAvatarImg
                          img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          lg={true}
                        />

                        <div className="info pl-3">
                          <h6>Nikita basaiye</h6>
                          <span>25 Minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        {" "}
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem harum corrupti impedit totam error animi.
                  </p>
                </div>
              </div>

              <div className="reviewRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex align-items-center flex-column">
                      <div className="userInfo d-flex align-itmes-center mb-3">
                        <UserAvatarImg
                          img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          lg={true}
                        />

                        <div className="info pl-3">
                          <h6>Nikita basaiye</h6>
                          <span>25 Minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        {" "}
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem harum corrupti impedit totam error animi.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <h6 className="mt-4 mb-4"> Review Reply Form</h6>
            <form className="reviewForm">
              <textarea className="mb-4" placeholder="write here"></textarea>

              <Button className="btn-blue btn-big btn-lg w-100">
                Drop your Replies
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
