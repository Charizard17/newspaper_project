import React, { Component } from "react";

class Business extends Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    const url =
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5eb1dc002c884411a1fec931c5f74be0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles, loading: false });
    console.log(data.articles[0]);
  }

  render() {
    return (
      <div className="pt-5">
        <img
          style={{ width: "100%", height: "350px" }}
          src="https://camc.com.sa/wp-content/uploads/2016/08/team-banner.jpg"
          className="img-fluid"
          alt="Responsive image"
        ></img>
        <div className="pt-2 px-2">
          <div>
            {this.state.loading || !this.state.articles ? (
              <div>Loading..</div>
            ) : (
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      className="card-img"
                      src={this.state.articles[0].urlToImage}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {this.state.articles[0].title}
                      </h5>
                      <p className="card-text">
                        {this.state.articles[0].description}
                      </p>
                      <p className="card-text">
                        {this.state.articles[0].content}
                      </p>
                      <p>{this.state.articles[0].author}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Published at {this.state.articles[0].publishedAt}
                        </small>
                      </p>
                      <p className="card-text">
                        Source: {this.state.articles[0].source.name} -{" "}
                        {this.state.articles[0].url}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pt-2 px-2">
          <div>
            {this.state.loading || !this.state.articles ? (
              <div>Loading..</div>
            ) : (
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      className="card-img"
                      src={this.state.articles[1].urlToImage}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {this.state.articles[1].title}
                      </h5>
                      <p className="card-text">
                        {this.state.articles[1].description}
                      </p>
                      <p className="card-text">
                        {this.state.articles[1].content}
                      </p>
                      <p>{this.state.articles[1].author}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Published at {this.state.articles[1].publishedAt}
                        </small>
                      </p>
                      <p className="card-text">
                        Source: {this.state.articles[1].source.name} -{" "}
                        {this.state.articles[1].url}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pt-2 px-2">
          <div>
            {this.state.loading || !this.state.articles ? (
              <div>Loading..</div>
            ) : (
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      className="card-img"
                      src={this.state.articles[2].urlToImage}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {this.state.articles[2].title}
                      </h5>
                      <p className="card-text">
                        {this.state.articles[2].description}
                      </p>
                      <p className="card-text">
                        {this.state.articles[2].content}
                      </p>
                      <p>{this.state.articles[2].author}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Published at {this.state.articles[2].publishedAt}
                        </small>
                      </p>
                      <p className="card-text">
                        Source: {this.state.articles[2].source.name} -{" "}
                        {this.state.articles[2].url}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pt-2 px-2">
          <div>
            {this.state.loading || !this.state.articles ? (
              <div>Loading..</div>
            ) : (
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      className="card-img"
                      src={this.state.articles[3].urlToImage}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {this.state.articles[3].title}
                      </h5>
                      <p className="card-text">
                        {this.state.articles[3].description}
                      </p>
                      <p className="card-text">
                        {this.state.articles[3].content}
                      </p>
                      <p>{this.state.articles[3].author}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Published at {this.state.articles[3].publishedAt}
                        </small>
                      </p>
                      <p className="card-text">
                        Source: {this.state.articles[3].source.name} -{" "}
                        {this.state.articles[3].url}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pt-2 px-2">
          <div>
            {this.state.loading || !this.state.articles ? (
              <div>Loading..</div>
            ) : (
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      className="card-img"
                      src={this.state.articles[4].urlToImage}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {this.state.articles[4].title}
                      </h5>
                      <p className="card-text">
                        {this.state.articles[4].description}
                      </p>
                      <p className="card-text">
                        {this.state.articles[4].content}
                      </p>
                      <p>{this.state.articles[4].author}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Published at {this.state.articles[4].publishedAt}
                        </small>
                      </p>
                      <p className="card-text">
                        Source: {this.state.articles[4].source.name} -{" "}
                        {this.state.articles[4].url}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <p>Powered by NewsApi.org</p>
      </div>
    );
  }
}

export default Business;
