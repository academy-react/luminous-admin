// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from "reactstrap";

// ** Images
import medal from "@src/assets/images/illustration/badge.svg";

const CardMedal = () => {
  return (
    <Card className="card-congratulations-medal">
      <CardBody>
        <h5 style={{ marginTop: "2rem" }}>مبلغ کل فروش</h5>
        {/* <CardText className='font-small-3'>You have won gold medal</CardText> */}
        <h3 style={{ marginTop: "5rem" }}>
          {/* <a href="/" onClick={(e) => e.preventDefault()}> */}
          8200000 تومان
          {/* </a> */}
        </h3>
        {/* <Button color='primary'>View Sales</Button> */}
        {/* <img className="congratulation-medal" src={medal} alt="Medal Pic" /> */}
      </CardBody>
    </Card>
  );
};

export default CardMedal;
