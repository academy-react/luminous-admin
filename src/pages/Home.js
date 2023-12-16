import { Col, Row } from "reactstrap";
import CardMedal from "../components/home/CardMedal";
import StatsCard from "../components/home/StatsCard";

const Home = () => {
  return (
    <div>
      <Row className=" match-height ">
        <Col xl="4" md="6" xs="12">
          <CardMedal />
        </Col>
        <Col xl="8" md="6" xs="12">
          <StatsCard cols={{ xl: "3", sm: "6" }} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
