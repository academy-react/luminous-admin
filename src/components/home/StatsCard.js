// ** Third Party Components
import classnames from "classnames";
import { TrendingUp, User, Box, DollarSign } from "react-feather";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { useEffect, useState } from "react";
import { landingReport } from "../../core/services/api/get/get-landing-report.api";

const StatsCard = ({ cols }) => {
  const data = [
    {
      count: "1",
      subtitle: "تعداد اساتید",
      color: "light-primary",
      icon: <TrendingUp size={24} />,
    },
    {
      count: "1",
      subtitle: "تعداد دانشجویان",
      color: "light-info",
      icon: <User size={24} />,
    },
    {
      count: "1",
      subtitle: "تعداد دروس",
      color: "light-danger",
      icon: <Box size={24} />,
    },
    {
      count: "1",
      subtitle: "تعداد اخبار",
      color: "light-success",
      icon: <DollarSign size={24} />,
    },
  ];
  const [landingData, setLandingData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await landingReport();
        console.log(response);
        const totalData = data.map((obj, index) => {
          let key = Object.keys(response)[index];
          console.log(key);
          return { ...obj, count: response[key] };
        });
        console.log(totalData);
        setLandingData(totalData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getData();
  }, []);
  const renderData = () => {
    return landingData.map((item, index) => {
      const colMargin = Object.keys(cols);
      const margin = index === 2 ? "sm" : colMargin[0];
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1,
          })}
        >
          <div className="d-flex align-items-center">
            <Avatar color={item.color} icon={item.icon} className="me-2" />
            <div className="my-auto">
              <h4 className="fw-bolder mb-0">{item.count}</h4>
              <CardText className="font-small-12 mb-0">
                {item.subtitle}
              </CardText>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <Card className="card-statistics">
      <CardHeader>
        <CardTitle tag="h4">وضعیت</CardTitle>
        <CardText className="card-text font-small-2 me-25 mb-0"></CardText>
      </CardHeader>
      <CardBody className="statistics-body">
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  );
};

export default StatsCard;
