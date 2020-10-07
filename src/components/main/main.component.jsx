import React, { useState } from "react";
import createTable from "../generate-table/generate-table.component";
import { Container, Row, Col, Table } from "reactstrap";
import { take, primes } from "../../lib/generate-primes";
import "./main.styles.scss";
import FormComponent from "../form/form.component";

export default function Main() {
  //Initial state
  const [primeRange, setPrime] = useState({
    start: 2,
    max: 10,
  });

  const [numbers, setNumbers] = useState([]);

  const [isLoading, setLoader] = useState(false);
  let primeNumbers;

  const handleChange = (event) => {
    event.preventDefault();
    setPrime({
      ...primeRange,
      [event.target.name]: event.target.value,
    });
  };

  // A function that manages the form on submit to
  // generate the multiplication table from the list of prime numbers

  const handleSubmit = (event) => {
    event.preventDefault();
    primeNumbers = [...take(primeRange.max, primes(primeRange.start))];
    setNumbers({
      numbers: primeNumbers,
    });

    setLoader(true);
  };

  let information =
    "Click the Generate Table button by the left to generate the first 10 prime numbers multiplicationtable";
  return (
    <Container fluid className="main">
      <Row>
        <Col sm={12} md={3} className="calc-card">
          <FormComponent
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            primeRange={primeRange}
          />
        </Col>
        <Col sm={12} md={9}>
          <div className="content">
            <h1>Prime Number Multiplication table</h1>
            <p>
              This calculator will allow you to build a set of primes based on
              your selections and display it in a table format of your choice.
              For example, you could create a list containing the first 10 prime
              numbers, or you would create a list of primes between 1 and 10.
            </p>

            {isLoading ? (
              <Table striped>{createTable(numbers)}</Table>
            ) : (
              <div style={{ color: "#dc2d3f", textAlign: "center" }}>
                {information}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
