import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shortURL: "" };
    this.getData = this.getData.bind(this);
  }

  async getData() {
    const valeurLongURL = document.getElementById("longURL").value;
    const apiKey = "69d2094e1a064a51b971277d17bdde5c";
    try {
      const response = await fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: apiKey },
        body: JSON.stringify({ destination: valeurLongURL }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        this.setState({ shortURL: jsonResponse.shortUrl });
        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Container>
          <Row className="text-center">
            <Col xs={12}>
              <h1>bytesize</h1>
            </Col>
          </Row>
          <Row className="text-center">
            <Col sm={{ span: 6, offset: 3 }} className="bg-primary py-5">
              <h2>Enter a URL</h2>
            </Col>
          </Row>
          <Row className="text-center">
            <Col sm={{ span: 6, offset: 3 }} className="bg-primary">
              <Form className="pb-5">
                <Form.Control
                  className="border border-dark bg-primary text-white"
                  type="text"
                  placeholder="https://www.google.com/"
                  id="longURL"
                />
              </Form>
            </Col>
          </Row>
          <Row className="text-center">
            <Col sm={{ span: 6, offset: 3 }} className="pb-5 bg-primary">
              <Button
                className="btn-primary border border-dark p-3"
                onClick={this.getData}
              >
                Shorten
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="text-center">
            <Col sm={{ span: 6, offset: 3 }} className="py-5  bg-primary">
              <div className="p-5 border border-white text-light">
                <p>Your shortened url is:</p>
                <p>{this.state.shortURL}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
