import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductUpload from "./pages/ProductUpload/ProductUpload";
import CategoryAdd from "./pages/CategoryAdd/CategoryAdd";
import Category from "./pages/Category/Category";
import InvoiceList from "./pages/InvoiceList/InvoiceList";
// import Users from "./pages/Users/Users"; // Causing BUG to create build
import UserProfile from "./pages/UserProfile/UserProfile";
const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {isHideSidebarAndHeader !== true && <Header />}
          <div className="main  d-flex">
            {isHideSidebarAndHeader !== true && (
              <div
                className={`sidebarWrapper ${
                  isToggleSidebar === true ? "toggle" : ""
                }`}
              >
                <Sidebar />
              </div>
            )}

            <div
              className={`content ${
                isHideSidebarAndHeader === true && "full"
              } ${isToggleSidebar === true ? "toggle" : ""}`}
            >
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/login" exact={true} element={<Login />} />
                {/* <Route path="/users" exact={true} element={<Users />} />{" "} */}
                {/* COMMENTED FOR NOW  */}
                <Route
                  path="/user/profile"
                  exact={true}
                  element={<UserProfile />}
                />
                <Route path="/products" exact={true} element={<Products />} />
                <Route
                  path="/product/details"
                  exact={true}
                  element={<ProductDetails />}
                />
                <Route
                  path="/product/upload"
                  exact={true}
                  element={<ProductUpload />}
                />
                <Route
                  path="/category/add"
                  exact={true}
                  element={<CategoryAdd />}
                />
                <Route path="/category" exact={true} element={<Category />} />
                <Route path="/invoice" exact={true} element={<InvoiceList />} />
              </Routes>
            </div>
          </div>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
