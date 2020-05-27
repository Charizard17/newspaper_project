import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    let images = this.getRandomImages();
    this.setState({ images });
  }

  getRandomImages() {
    let image = [];
    for (let i = 0; i < 15; i++) {
      image.push({
        imageSrc: "https://source.unsplash.com/random"
      });
    }
    return image;
  }
  render() {
    return (
      <div className="pt-5">
        <div className="container text-center">
        {this.state.images.map((item, index) => {
          return (
            <div key={index} className="col"><img className="img-thumbnail" style={{ width: "32%", height: "32%" }} src={item.imageSrc} alt=""/></div>
          );
        })}
          <div className="row pt-5">
            <div className="col"><img className="img-thumbnail" src="https://source.unsplash.com/random" alt=""/></div>
            <div className="col"><img className="img-thumbnail" src="https://source.unsplash.com/random" alt=""/></div>
            <div className="col"><img className="img-thumbnail" src="https://source.unsplash.com/random" alt=""/> </div>
          </div>
          <div className="row pt-5">
            <div className="col"><img className="img-thumbnail" src="https://images.pexels.com/photos/1837168/pexels-photo-1837168.jpeg" alt=""/></div>
            <div className="col"><img className="img-thumbnail" src="https://images.unsplash.com/photo-1588155880617-d58bfa2bb65d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80" alt=""/> </div>
            <div className="col"><img className="img-thumbnail" src="https://images.unsplash.com/photo-1588143971010-4e318e9529f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt=""/></div>
          </div>
          <div className="row pt-5">
            <div className="col"><img className="img-thumbnail" src="https://cdn.pixabay.com/photo/2020/04/23/22/11/clock-5084284_960_720.jpg" alt=""/></div>
            <div className="col"><img className="img-thumbnail" src="https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941_960_720.jpg" alt=""/> </div>
            <div className="col"><img className="img-thumbnail" src="https://images.unsplash.com/photo-1588077699842-b906a1c3ff23?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/></div>
          </div>
          <div className="row pt-5">
            <div className="col"><img className="img-thumbnail" src="https://images.unsplash.com/photo-1588153990953-7c681e89682a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=637&q=80" alt=""/></div>
            <div className="col"><img className="img-thumbnail" src="https://images.unsplash.com/photo-1588098336475-9565092eaaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=594&q=80" alt=""/> </div>
            <div className="col"><img className="img-thumbnail" src="https://images.unsplash.com/photo-1588098558649-0d950ec15f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/></div>
          </div>
          <div className="row pt-5">
            <div className="col"><img className="img-thumbnail" src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/></div>
            <div className="col"><img className="img-thumbnail" src="https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/> </div>
            <div className="col"><img className="img-thumbnail" src="https://images.unsplash.com/photo-1588127038161-59b017a53bc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
