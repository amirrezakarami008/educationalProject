import { useState } from "react";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap"
import { AiOutlineShopping } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
import { FaInstagram, FaRegComments, FaTelegram } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoVideo } from "react-icons/go";
import { GrBlog } from "react-icons/gr";
import { HiOutlineNewspaper, HiUserGroup } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuContact } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiContactlessPayment } from "react-icons/pi";
import { SiAppstore } from "react-icons/si";
import { VscPackage } from "react-icons/vsc";
import { HashLink } from "react-router-hash-link"

function Navbar(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [darkMode, setDarkMode] = useState()
    const ToggleHandler = ()=>{
        const Theme =  document.getElementById('theme')
        Theme.classList.toggle('dark')
    }
    return(
        <header className="bg-gray-300 dark:bg-gray-950 dark:text-gray-300 py-2">
      <Container className="px-3 m-auto">
        <Row>
          <Col xs={8} md={6} lg={10}>
            <ul className="d-none gap-x-6 d-xl-flex items-center list-none p-0 h-[100%] ">
             
              <li title="خانه">
                <HashLink
                  to="/#"
                  className="no-underline text-dark relative group"
                >
                  <span className="dark:text-gray-300">خانه</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                </HashLink>
              </li>
              <li title="دوره ها">
                <HashLink
                  to="/#packages"
                  className="no-underline text-dark relative group "
                >
                  <span className="dark:text-gray-300">دوره ها</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                </HashLink>
              </li>
              <li title="پادکست">
                <HashLink
                  to="/#intro-app"
                  className="no-underline text-dark relative group"
                >
                  <span className="dark:text-gray-300">پادکست</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                </HashLink>
              </li>
              <li title="سوال شما">
                <HashLink
                  to="/#team"
                  className="no-underline text-dark relative group"
                >
                  <span className="dark:text-gray-300">سوال شما</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                </HashLink>
              </li>
              <li title="بلاگ">
                <HashLink
                  to="/blog"
                  className="no-underline text-dark relative group"
                >
                  <span className="dark:text-gray-300">بلاگ</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                </HashLink>
              </li>
            </ul>
            <Button
              className="d-flex d-xl-none items-center gap-x-1"
              variant=""
              title="ورود |ثبت نام"
              onClick={handleShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 dark:!text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
              {/* <HashLink
                to="/login"
                className="no-underline"
              >
                <p title="ورود | ثبت نام" className="ms-4  no-underline cursor-pointer select-none text-white bg-[#8f17ff] px-3 py-2  rounded-lg text-center ">
                    <span className="dark:text-gray-300">
                        ورود
                    </span>
                    <span className="transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                </p>
              </HashLink> */}
            </Button>
            <Offcanvas
              show={show}
              onHide={handleClose}
              className="px-4 py-2 dark:!bg-gray-800 !w-[65%]"
            >
              <Offcanvas.Header
                closeButton
                id="close-button"
                className="dark:text-gray-300 justify-between"
              >
                <Offcanvas.Title className="p-0 fw-bold fs-4 flex items-center gap-x-3">
                  <span className="dark:text-gray-300">
                    <SiAppstore size="25px" />
                  </span>
                  <span className="dark:text-gray-300">Roobista</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
                <ul className="list-none">
                  <li className="my-4">
                    <HashLink
                      to="/#packages"
                      className="no-underline text-dark items-center gap-x-3 relative group inline-flex"
                      // onClick={() => setShow(false)}
                    >
                      <span className="dark:text-gray-300">
                        <VscPackage size="20px" />
                      </span>
                      <span className="dark:text-gray-300">پکیج ها</span>
                      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </HashLink>
                  </li>
                  <li className="my-4">
                    <HashLink
                      to="/#intro-app"
                      className="no-underline text-dark items-center gap-x-3 relative group inline-flex"
                    >
                      <span className="dark:text-gray-300">
                        <PiContactlessPayment size="20px" />
                      </span>
                      <span className="dark:text-gray-300">معرفی اپلیکیشن</span>
                      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </HashLink>
                  </li>
                  <li className="my-4">
                    <HashLink
                      to="/#team"
                      className="no-underline text-dark items-center gap-x-3 relative group inline-flex"
                    >
                      <span className="dark:text-gray-300">
                        <HiUserGroup size="20px" />
                      </span>
                      <span className="dark:text-gray-300">تیم ما</span>
                      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </HashLink>
                  </li>
                  <li className="my-4">
                    <HashLink
                      to="/#"
                      className="no-underline text-dark  items-center gap-x-3 relative group inline-flex"
                    >
                      <span className="dark:text-gray-300">
                        <HiOutlineNewspaper size="20px" />
                      </span>
                      <span className="dark:text-gray-300">اخبار اپلیکیشن</span>
                      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </HashLink>
                  </li>
                  <li className="my-4">
                    <HashLink
                      to="/blog"
                      className="no-underline text-dark items-center gap-x-3 relative group inline-flex"
                    >
                      <span className="dark:text-gray-300">
                        <GrBlog size="20px" />
                      </span>
                      <span className="dark:text-gray-300">بلاگ</span>
                      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </HashLink>
                  </li>
                  <li className="my-4">
                    <HashLink
                      to="/#contact"
                      className="no-underline text-dark items-center gap-x-3 relative group inline-flex"
                    >
                      <span className="dark:text-gray-300">
                        <LuContact size="20px" />
                      </span>
                      <span className="dark:text-gray-300">تماس با ما</span>
                      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </HashLink>
                  </li>
                  <li className="my-4">
                    <HashLink
                      to="/#comments"
                      className="no-underline text-dark items-center gap-x-3 relative group inline-flex"
                    >
                      <span className="dark:text-gray-300">
                        <FaRegComments size="20px" />
                      </span>
                      <span className="dark:text-gray-300">نظرات</span>
                      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </HashLink>
                  </li>
                  <li className="my-4">
                    <HashLink
                      to="/edu-video"
                      className="no-underline text-dark items-center gap-x-3 relative group inline-flex"
                    >
                      <span className="dark:text-gray-300">
                        <GoVideo size="20px" />
                      </span>
                      <span className="dark:text-gray-300">
                        ویدیو های آموزشی
                      </span>
                      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </HashLink>
                  </li>
                </ul>
                <hr className="mb-3" />
                <p className="flex justify-around items-center">
                  <HashLink
                    to="/#"
                    title="اینستاگرام"
                    className="no-underline text-blue-500"
                  >
                    <span>
                      <FaTelegram size="35px" className="hover:text-blue-700" />
                    </span>
                  </HashLink>
                  <HashLink
                    to="/#"
                    title="تلگرام"
                    className="no-underline text-red-500"
                  >
                    <span>
                      <FaInstagram size="35px" className="hover:text-red-700" />
                    </span>
                  </HashLink>
                  <HashLink
                    to="/#"
                    title="واتساپ"
                    className="no-underline text-green-500"
                  >
                    <span>
                      <IoLogoWhatsapp
                        size="35px"
                        className="hover:text-green-700"
                      />
                    </span>
                  </HashLink>
                  <HashLink
                    to="/#"
                    title="روبیکا"
                    className="no-underline text-yellow-400"
                  >
                    <span>
                      <img
                        src="https://web.rubika.ir/favicon.ico"
                        className="size-9 img-fluid hover:opacity-65"
                        alt=""
                      />
                    </span>
                  </HashLink>
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col xs={4} md={6} lg={2}>
                <ul className="d-none gap-x-6 d-lg-flex items-center list-none p-0 h-[100%] mt-1">
                    <p href="" onClick={ToggleHandler} className="no-underline text-gray-300">
                        <li>
                            <span><MdOutlineDarkMode  size={'30px'}/></span>
                        </li>
                    </p>
                    <a href="" className="no-underline text-gray-300">
                        <li>
                            <span><FiSearch  size={'30px'}/></span>
                        </li>
                    </a>
                    <a href="" className="no-underline text-gray-300">
                        <li>
                            <span><AiOutlineShopping  size={'30px'}/></span>
                        </li>
                    </a>
                    <li>
                        <p title="ورود | ثبت نام" className="no-underline cursor-pointer select-none text-white bg-[#8f17ff] px-3 py-2  rounded-lg text-center ">
                        <span className="dark:text-gray-300">
                            ورود
                        </span>
                        <span className="transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                        </p>
                    </li>
                    

                </ul>
          </Col>
        </Row>
      </Container>
    </header>
    )
}

export default Navbar