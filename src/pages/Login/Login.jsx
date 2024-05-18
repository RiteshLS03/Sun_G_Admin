import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.webp";
import { MyContext } from "../../App";
import pattern from "../../assets/images/pattern.webp";
import { MdEmail } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import googleIcon from '../../assets/images/google.png'

const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  return (
    <>
      <img src={pattern} alt="" className="loginPattern" />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={Logo} alt="" width="60px" />
            <h5 className="font-weight-bold">Login to Sunglory</h5>
          </div>
          <div className="wrapper mt-3 card border ">
            <form action="">
              <div
                className={`form-group  position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Enter your Email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)} autoFocus
                />
              </div>
              <div
                className={`form-group  position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={`${isShowPassword === true ? 'text' : 'password'}`}
                  className="form-control"
                  placeholder=" Enter your Password"
                  onFocus={() => focusInput()}
                  onBlur={() => setInputIndex(null)}
                />
                <span
                  className="toggleShowPassword"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                    {
                        isShowPassword === true ?  <IoMdEye /> : <IoMdEyeOff />
                    }
                 
                </span>
              </div>

              <div className="form-group">
                <Button className="btn-blue btn-lg w-100 btn-big">Sign In</Button>
              </div>
              <div className="form-group text-center mb-0">
                <Link to={'/forget-password'} className="link">FORGET PASSWORD</Link>
                <div className="d-flex align-items-center justify-content-center or mt-3">
                    <span className="line"></span>
                    <span className="txt">Or</span>
                    <span className="line"></span>
                </div>
                <Button variant='outlined'  className='btn-lg btn-big loginWithGoogle mt-3'><img src={googleIcon} alt="" width='25px' /> &nbsp;
                    Sign In With Google</Button>

              </div>
            </form>
          </div>

          <div className="wrapper mt-3 card border p-3">
<span className="text-center">
    Don't have an account ?
    <Link to={'/signUp'} className="link color">Register</Link>
</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
