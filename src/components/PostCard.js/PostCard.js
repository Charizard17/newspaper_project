import React, { Component } from "react";

class PostCard extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="pt-2 px-2">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img" src={this.props.urlToImage} alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <p className="card-text">{this.props.content}</p>
                <p>{this.props.author}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Published at {this.props.publishedAt}
                  </small>
                </p>
                <p className="card-text">
                  Source: {this.props.sourceName} - {this.props.url}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PostCard;
