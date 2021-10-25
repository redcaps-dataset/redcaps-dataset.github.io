import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

import Col from "react-bootstrap/Col";


class ImageCard extends Component {

  render() {
    let fullLink = "//reddit.com/r/" + this.props.permalink;
    let fullUrl = "//i.redd.it/" + this.props.url;

    return (
      <Col md={4} sm={6} xs={12} style={{ padding: "5px" }}>
        <div className="card" style={{ height: "100%" }}>
          <a href={fullLink}>
            <img className="card-img-top img-fluid" src={fullUrl} alt={fullUrl} />
          </a>
          <div className="card-body bg-light" style={{ padding: "10px" }}>
            <span className="card-text" style={{ fontSize: "16px" }}>
              {this.props.caption}
            </span>
            <br />
          </div>
        </div>
      </Col>
    );
  }
}

class RedCapsExplore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annotations: null,
      page: 0,
      table: [],
      hasMoreItems: true,
    };
    this.pageLength = 12;
  }

  componentDidMount() {
    axios.get(this.props.dataPath)
      .then((response) => {
        this.setState({ annotations: this.shuffle(response.data.slice(0, 999)) });
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

  renderRows = () => {
    let table = this.state.table;
    let page = this.state.page;

    if (this.state.annotations) {
      // Outer loop to create parent
      const final_idx = Math.min((page + 1) * this.pageLength, this.state.annotations.length);

      for (let i = page * this.pageLength; i < final_idx; i++) {
        table.push(this.state.annotations[i]);
      }

      this.setState({
        table: table,
        page: page + 1,
        hasMoreItems: final_idx < this.state.annotations.length ? true : false
      });
    }
  }

  render() {
    const loader = <div className="loader">Loading ...</div>;
    var items = [];
    this.state.table.map((annotation) => {
      items.push(
        <ImageCard
          image_id={annotation[0]}
          url={annotation[1]}
          permalink={annotation[2]}
          caption={annotation[3]}
        />
      );
    });

    return (
      <InfiniteScroll
        className="row"
        pageStart={0}
        loadMore={this.renderRows}
        hasMore={this.state.hasMoreItems}
        loader={loader}>
        {items}
      </InfiniteScroll>
    );
  }
}

export default RedCapsExplore;
