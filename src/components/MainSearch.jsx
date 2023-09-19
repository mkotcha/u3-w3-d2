import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { getJobsAction, unsetJobsAction } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.content);
  const isLoading = useSelector(state => state.jobs.isLoading);
  const hasError = useSelector(state => state.jobs.hasError);
  const errorMessage = useSelector(state => state.jobs.errorMessage);
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(getJobsAction(query, "search"));
  };

  useEffect(() => {
    dispatch(unsetJobsAction());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
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
            jobs.map(job => <Job key={"m" + job._id} job={job} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
