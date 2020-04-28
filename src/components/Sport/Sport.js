import React, { Component } from "react";

class Sport extends Component {
  render() {
    return (
      <div>
        <img
          className="container"
          style={{ width: "100%" }}
          src="http://img.pagecloud.com/rDEfDISCDfmBf3pNfaiyMKQZYss=/1896x0/filters:no_upscale()/mysportworld/images/MSW-CorpPage-Headerbannerbackground_v2-01-ID-b410482a-7a38-41fd-8185-72bd2b8cf4e9.png"
          class="img-fluid"
          alt="Responsive image"
        ></img>
        <div class="container">
          <div class="row row-cols-2">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sport;
