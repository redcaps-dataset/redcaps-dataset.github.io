import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class ImageCard extends Component {

  render() {
    let fullLink = "//reddit.com/r/" + this.props.permalink;
    let fullUrl = "//i.redd.it/" + this.props.url;

    return (
      <Col  style={{ padding: "5px" }}>
        <div className="card" style={{ height: "100%" }}>
          <a href={fullLink}>
            <img className="card-img-top img-fluid" src={fullUrl} alt={fullUrl} style={{ maxHeight: "15rem", objectFit: "cover" }}/>
          </a>
          <div className="card-body bg-light" style={{ padding: "10px" }}>
            <span className="card-text" style={{ fontSize: "1rem" }}>
              <b>r/{this.props.subreddit}</b>: {this.props.caption}
            </span>
          </div>
        </div>
      </Col>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {annotations: []};
  }

  componentDidMount() {
    // Read instance counts per subreddit and make buttons for main page.
    axios.get("static/homepage_sample.json").then((response) => {
      response.data = this.shuffle(response.data).slice(0, 5);
      response.data.map((annotation) => {
        this.state.annotations.push(
          <ImageCard
            image_id={annotation[0]}
            url={annotation[1]}
            permalink={annotation[2]}
            caption={annotation[3]}
            subreddit={annotation[4]}
          />
        );
      });
      this.setState({ annotations: this.state.annotations });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  render() {
    return (
      <Container style={{ paddingTop: "5px" }}>
        <Row>
          {this.state.annotations}
        </Row>
      </Container>
    );
  }
}

const el = document.getElementById("root");
ReactDOM.render(<App />, el);
