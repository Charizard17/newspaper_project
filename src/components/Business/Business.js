import React, { Component } from "react";
import PostCard from "../PostCard.js/PostCard";

class Business extends Component {
  state = {
    loading: true,
    articles: [],
  };

  componentDidMount() {
    this.getNewsFromApi();
  }

  async getNewsFromApi() {
    const url =
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5eb1dc002c884411a1fec931c5f74be0";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.articles);
    this.setState({ articles: data.articles, loading: false });
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
          {this.state.loading || !this.state.articles ? (
            <div>Loading..</div>
          ) : (
            this.state.articles.map((item, i) => {
              return (
                <PostCard
                  key={i}
                  urlToImage={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  author={
                    !item.author
                      ? console.log(`Author is null. News:  ${item.title}`)
                      : item.author
                  }
                  publishedAt={item.publishedAt}
                  sourceName={item.source.name}
                  url={item.url}
                />
              );
            })
          )}
        </div>
        <p>Powered by NewsApi.org</p>
      </div>
    );
  }
}

export default Business;
