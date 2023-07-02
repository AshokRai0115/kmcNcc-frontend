import { Component } from "react";

class PostTop extends Component {

  handleOpenPostPopup(event) {
    event.preventDefault();
    // debugger
    document.querySelector(".post-popup.job_post").classList.add("active");
    document.querySelector(".wrapper").classList.add("overlay");
    return false;
  }

  render() { 
    return (
      <div className="post-topbar">
        <div className="user-picy">
          <img src={"./images/" + this.props.user?.username.split(" ")[0] + ".jpg"} alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li>
              <a className="post-jb active" href="/#" title="" onClick={this.handleOpenPostPopup}>
                Post a Job
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PostTop;
