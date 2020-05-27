import React, { Component } from "react";

const KEYWORD = [
  "water",
  "earth",
  "rain",
  "color",
  "technology",
  "people",
  "social",
  "animal",
  "forest",
  "tree",
  "birds",
  "car",
  "farm",
  "telephone",
  "glass",
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      images: [],
    };
  }
  
  getRandomKeyword() {
    let randomNr = Math.floor(Math.random() * KEYWORD.length);
    return KEYWORD[randomNr];
  }

  componentDidMount() {
    // this.getRandomImages();
    this.createImagesArray();
    console.log(this.state.images);
  }

  // async getRandomImages() {
  //   const url = "https://source.unsplash.com/random";
  //   const response = await fetch(url);
  //   const data = await response;
  //   this.setState({ images: data.url, loading: false });
  //   console.log(this.state.images);
  // }

  createImagesArray() {
    for (let i = 0; i < 3; i++) {
      this.state.images.push({
        imageSrc: ` https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()} `,
      });
    }
    return this.state.images;
  }

  render() {
    return (
      <div className="pt-5">
        <div className="container text-center">
          {this.state.images.map((item) => {
            return (
              <div className="col">
              <img
                className="img-thumbnail"
                src={this.state.images.imageSrc}
                alt=""
              />
            </div>
            );
          })}
          <div className="row pt-5">
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />{" "}
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />{" "}
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />{" "}
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />{" "}
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />{" "}
            </div>
            <div className="col">
              <img
                className="img-thumbnail"
                src={`https://source.unsplash.com/featured/?${this.getRandomKeyword()},${this.getRandomKeyword()}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
