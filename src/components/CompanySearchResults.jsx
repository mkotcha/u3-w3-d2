import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobsAction } from "../redux/actions";

const CompanySearchResults = () => {
  const jobs = useSelector(state => state.jobs.content);
  const isLoading = useSelector(state => state.jobs.isLoading);
  const hasError = useSelector(state => state.jobs.hasError);
  const errorMessage = useSelector(state => state.jobs.errorMessage);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction(params.company, "company"));
  }, [dispatch, params.company]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {hasError ? (
            <Alert variant="danger" className="mt-3">
              {errorMessage}
            </Alert>
          ) : isLoading ? (
            <div className="mt-3">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            jobs.map(job => <Job key={"c" + job._id} job={job} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
