// Copyright (c) Facebook, Inc. and its affiliates.
import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import RedCapsExplore from "./explore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPageButtons: [],
      subreddit: ""
    };
  }

  componentDidMount() {
    axios.get("static/instance_counts.json")

      .then((response) => {

        response.data.map((subredditInfo, i) => {
          this.state.mainPageButtons.push(
            <Col md={3} sm={4} xs={12}>
              <button type="button"
                className="btn"
                style={{ margin: "5px", width: "90%", textAlign: "left", backgroundColor: subredditInfo[2] }}
                onClick={this.goToSubreddit}
                id={subredditInfo[0]}
              >
                {subredditInfo[0]} ({subredditInfo[1]})
              </button>
            </Col>
          );
        });

        this.setState({ mainPageButtons: this.state.mainPageButtons });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  goToMainPage = (e) => {
    this.setState({ subreddit: "" });
  }

  goToSubreddit = (e) => {
    console.log(e.target.id);
    this.setState({ subreddit: e.target.id });
  }

  render() {

    if (this.state.subreddit === "") {
      return (
        <Container style={{ paddingTop: "5px" }}>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h2 className="text-center">Select a subreddit to explore.</h2>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <Row>
                {this.state.mainPageButtons}
              </Row>
            </Col>
          </Row>
        </Container>
      );
    }
    else {
      return (
        <Container style={{ paddingTop: "5px" }}>
          <Row>
            <Col lg={11} md={11} sm={11}>
              <h2 className="text-center">r/{this.state.subreddit}</h2>
            </Col>
            <Col lg={1} md={1} sm={1}>
              <button type="button" className="btn btn-danger" onClick={this.goToMainPage}>
                Back
              </button>
            </Col>
          </Row>
          <RedCapsExplore dataPath={"static/explore/" + this.state.subreddit + ".json"} />
        </Container>
      );
    }
  }
}

const el = document.getElementById('root');
ReactDOM.render(<App />, el)
