import { Col } from "react-bootstrap";
import "./OurCourses.css";
import { GoArrowUpLeft } from "react-icons/go";
function OurCoursesItem({ icon, title, count }) {
  return (
    <Col md={6} lg={3} title={`آموزش ${title}`} className="p-2">
      <div className="bg-gray-800 hover:bg-[#8a2be2] hover:text-[#fff] flex flex-col rounded-lg cursor-pointer border border-gray-600 p-3">
        <div className="flex justify-between items-center text-[#fff]">
          <div className="courses-icon mb-2">{icon}</div>
          <div className="arrow-icon text-gray-800">
            <GoArrowUpLeft size="30px" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="title">آموزش {title}</span>
          <span className="count">{count} دوره آموزشی</span>
        </div>
      </div>
    </Col>
  );
}

export default OurCoursesItem;
