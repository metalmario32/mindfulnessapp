import React from "react";
import { Formik, Field, Form } from "formik";
import { Col, Container, FormGroup } from "reactstrap";

const Entries = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={{
          entryOne: "",
          entryTwo: "",
          entryThree: "",
          entryFour: "",
          entryFive: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup row>
            <Col>
              <Field
                name="entryOne"
                placeholder="I am grateful for..."
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Field
                name="entryTwo"
                placeholder="I am grateful for..."
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Field
                name="entryThree"
                placeholder="I am grateful for"
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Field
                name="entryFour"
                placeholder="I am grateful for..."
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Field
                name="entryFive"
                placeholder="I am grateful for.."
                className="form-control"
              />
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    </Container>
  );
};

export default Entries;
