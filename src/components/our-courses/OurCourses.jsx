import { Container, Row } from "react-bootstrap";
import "./OurCourses.css";
import { MdAppSettingsAlt, MdEventSeat } from "react-icons/md";
import OurCoursesItem from "./OurCoursesItem";
import { RiCodeSSlashLine } from "react-icons/ri";
import { SiTaichigraphics } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaWordpress } from "react-icons/fa";
function OurCourses() {
  const data = [
    {
      id: 1,
      icon: <MdEventSeat size="30px" />,
      title: "هوش مصنوعی",
      count: "5",
    },
    {
      id: 2,
      icon: <RiCodeSSlashLine size="30px" />,
      title: "برنامه نویسی",
      count: "10",
    },
    {
      id: 3,
      icon: <SiTaichigraphics size="30px" />,
      title: "گرافیک",
      count: "5",
    },
    {
      id: 4,
      icon: <CgWebsite size="30px" />,
      title: "طراحی سایت",
      count: "5",
    },
    {
      id: 5,
      icon: <LuLayoutDashboard size="30px" />,
      title: "Ui & Ux",
      count: "7",
    },
    {
      id: 6,
      icon: <FaWordpress size="30px" />,
      title: "وردپرس",
      count: "1",
    },
    {
      id: 7,
      icon: <MdAppSettingsAlt size="30px" />,
      title: "نرم افزار ها",
      count: "5",
    },
    {
      id: 8,
      icon: <MdEventSeat size="30px" />,
      title: "هوش مصنوعی",
      count: "5",
    },
  ];
  return (
    <section className="my-5">
      <Container className="text-gray-300 !px-3 m-auto">
        <Row className="flex justify-center items-center !my-12">
          <span className="our-courses text-center">دوره های ما</span>
        </Row>
        <Row className="flex justify-center items-center gap-y-2">
          {data.map((item) => (
            <OurCoursesItem {...item} key={item.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default OurCourses;
