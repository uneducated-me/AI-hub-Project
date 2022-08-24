import { ReactComponent as FeedIcon } from "./icon/feed.svg"
import { ReactComponent as UploadIcon } from "./icon/upload.svg";
import { ReactComponent as CamarIcon } from "./icon/camar.svg"
import { useState, useEffect } from 'react';
// import Modalcom from "./pages/post/Modalcom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const Header = () => {

  const [cookies,setCookie,removeCookie] = useCookies(["userData"]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(!show)
  };
  const handleShow = () => {
    setShow(!show)
  };

  // useEffect(() => {
  //   if(cookies.userData === undefined){
  //       navigate("/");
  //   }
  // },[cookies])

    return (
      <header>
        <div className="px-3 py-2 text-bg-dark">
          <div className="cont">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <CamarIcon />
                &nbsp;&nbsp;<h2>인생샷 공작소</h2>
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                {
                  cookies.userData ?  (
                    <>
                    {/* <li>
                      <button className="nav-link text-white" style={{ backgroundColor: 'transparent', border: 0, outline: 0 }} onClick={handleShow}>
                         <Modalcom show={show} handleClose={handleClose} /> 
                        <UploadIcon />
                        Upload
                      </button>
                    </li> */}
                    <li>
                      <a href="/post/upload" className="nav-link text-white">
                        <UploadIcon width="24" height="24"/>
                        Upload
                      </a>
                    </li><li>
                      <a href="/post/list" className="nav-link text-white">
                        <FeedIcon width="24" height="24"/>
                        Feed
                      </a>
                    </li>
                    <li className="center">
                        <button type="button" className="btn btn-outline-danger" onClick={() => {
                          removeCookie("userData", { path: "/" });
                          navigate("/");
                        } }>logOut</button>
                      </li>
                </>) 
                :
                (
                  <li className="center">
                    <button type="button"className="btn btn-outline-info" onClick={() => navigate("/user")}>
                      <a href='/user'>logIn/signUp</a>
                    </button>
                  </li>
                ) 
                }
              </ul>
            </div>
          </div>
      </div>
    </header>
    )
}

export default Header;