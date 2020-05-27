import React, { Component } from "react";

class Covid19 extends Component {
  render() {
    return (
      <div className="pt-5">
        {/* <img
          style={{ width: "100%", height: "350px" }}
          src="https://www.orcities.org/application/files/3515/8327/5194/COVID-19-subhead.jpg"
          className="img-fluid"
          alt="Responsive image"
        ></img> */}
        <div style={{marginLeft:"200px"}}>
          <iframe
            width="1420"
            height="887"
            src="https://www.youtube.com/embed/cRy5_KpPxyM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Covid19;
