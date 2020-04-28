import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col">One of three columns <img className="img-thumbnail" src="https://images.pexels.com/photos/3268257/pexels-photo-3268257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/></div>
            <div className="col">One of three columns <img className="img-thumbnail" src="https://images.pexels.com/photos/2569471/pexels-photo-2569471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/></div>
            <div className="col">One of three columns <img className="img-thumbnail" src="https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
