import { Component } from "react";
import "./style.scss";
import image from "../../images/img7.jpg";

export default class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      dislike: 0,
      dark: false,
    };
  }
  /**
   * method to increment the dislike
   */
  handleDislike = () => {
    const { dislike: oldDislike } = this.state;
    this.setState({ dislike: oldDislike + 1 });
  };

  /**
   * method to increment the like
   */
  handleLike = () => {
    const { like: oldLike } = this.state;
    this.setState({ like: oldLike + 1 });
  };

  handleMode = () => {
    let { dark: oldDark } = this.state;

    this.setState({ dark: !oldDark });
    document.body.classList.toggle("dark");
    // if (oldDark) {
    //   document.body.classList.add("dark");
    // } else {
    //   document.body.classList.remove("dark");
    // }
  };

  render() {
    const { like, dislike, dark } = this.state;
    return (
      <div className="instagram">
        <i
          onClick={this.handleMode}
          className={dark ? "bx bx-sun" : "bx bxs-moon"}
        ></i>
        {/* <i class='bx bxs-moon' ></i> */}
        <img
          onDoubleClick={this.handleLike}
          src={this.props.imageUrl}
          alt="Yassine"
        />
        <div className="icons">
          <div className="icon" onClick={this.handleLike}>
            <i className="bx bxs-heart"></i> <span>{like}</span>
          </div>
          <div className="icon" onClick={this.handleDislike}>
            <i className="bx bx-dislike"></i>
            <span>{dislike}</span>
          </div>
        </div>
      </div>
    );
  }
}
