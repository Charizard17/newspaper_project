import React, { Component } from "react";

class Art extends Component {
  render() {
    return (
      <div className="pt-5">
        <img
          style={{ width: "100%", height: "350px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Da_Vinci_Banner.jpg"
          className="img-fluid"
          alt="Responsive image"
        ></img>
      </div>
    );
  }
}

export default Art;
