import { useSelector } from "react-redux";
import Job from "./Job";
import { Container, Row, Col } from "react-bootstrap";

const Favourites = () => {
  const favComp = useSelector(state => state.favComp.content);

  return (
    <>
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-4">Favourites</h1>
            {favComp.map(elm => (
              <Job key={"f" + elm._id} job={elm} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favourites;
