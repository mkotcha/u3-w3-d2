import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavCompAction, removeFromFavCompAction } from "../redux/actions";

const Job = ({ job }) => {
  const favComp = useSelector(state => state.favComp.content);
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3 border rounded-2 shadow-sm">
      <Col xs={3}>
        <Link className="text-decoration-none text-reset" to={`/${job.company_name}`}>
          {job.company_name}
        </Link>
      </Col>
      <Col xs={8}>
        <a className="text-decoration-none text-info" href={job.url} target="_blank" rel="noreferrer">
          {job.title}
        </a>
      </Col>
      <Col xs={1}>
        {favComp.find(elm => elm._id === job._id) ? (
          <i className="bi bi-star-fill text-warning" onClick={() => dispatch(removeFromFavCompAction(job))}></i>
        ) : (
          <i className="bi bi-star" onClick={() => dispatch(addToFavCompAction(job))}></i>
        )}
      </Col>
    </Row>
  );
};

export default Job;
