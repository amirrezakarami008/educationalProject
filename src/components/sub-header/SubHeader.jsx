import { Col, Container, Row } from "react-bootstrap";
import "./SubHeader.css";
import development from "../../assets/images/development.png";
function SubHeader() {
  return (
    <section className="my-5">
      <Container className="text-gray-300 px-3 m-auto">
        <Row className="flex justify-center items-center">
          <Col md={6} className="flex flex-col gap-y-6">
            <h2 className="flex gap-x-2">
              <span>آموزش</span>
              <span className="text-[#8a2be2]">برنامه نویسی</span>
              <span>:</span>
            </h2>
            <h4>
              <span>پلی به دنیای کدنویسی و کارآفرینی دیجیتال!</span>
            </h4>
            <h6>
              <span>همه دوره هایی که برای موفق شدن نیاز دارید اینجاست.</span>
            </h6>
            <div className="flex justify-start gap-x-4 mt-3 items-center select-none">
              <button
                className="bg-[#8a2be2] rounded-lg px-4 py-2.5 hover:drop-shadow-custom"
                title="ورود"
              >
                ورود
              </button>
              <button
                title="مشاهده همه دوره ها"
                className="border border-[#8a2be2] bg-gray-800 hover:bg-[#8f17ff] drop-shadow-custom hover:border-0 transition delay-100 rounded-lg px-4 py-2.5"
              >
                مشاهده همه دوره ها
              </button>
            </div>
          </Col>
          <Col md={6} className="select-none">
            <img
              src={development}
              alt=""
              title="آموزش برنامه نویسی"
              className="object-cover img-fluid w-full h-full drop-shadow-custom"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SubHeader;
