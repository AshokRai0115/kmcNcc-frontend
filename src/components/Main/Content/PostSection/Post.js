import { Component } from "react";

class Post extends Component {
  calPostTimeAgo(post_date) {
    // const postTime = new Date();
    // console.log(postTime)
    // const date = post_date.split("T")[0];
    // const time = post_date.split("T")[1];
    // postTime.setDate(date);
    // postTime.setTime(time.split(".")[0]);
    // console.log(postTime, date, time);
    return post_date;
  }
  render() {
    const { post_date, post_by_username, post_by_fullname, location, title, job_type, pay_rate_per_hr_dollar, description, skills, liked_by, viewed_by, comment } = this.props.post;

    return (
      <div className="postyy post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            <img src={"./images/" + (post_by_username.split(" ")[0]).toLowerCase() + ".jpg"} alt="" />
            <div className="usy-name">
              <h3>{post_by_fullname}</h3>
              <span>{this.calPostTimeAgo(post_date)}</span>
            </div>
          </div>
          <div className="ed-opts">
            <a href="/#" title="" className="ed-opts-open">
              <i className="la la-ellipsis-v"></i>
            </a>
            <ul className="ed-options">
              <li>
                <a href="/#" title="">
                  Edit Post
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Unsaved
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Unbid
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Close
                </a> 
              </li>
              <li>
                <a href="/#" title="">
                  Hide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="epi-sec">
          <ul className="descp">
            {/* <li>
              <img src="./images/icon8.png" alt="" />
              <span>Epic Coder</span>
            </li> */}
            <li>
              <img src="./images/icon9.png" alt="" />
              <span>{location}</span>
            </li>
          </ul>
          <ul className="bk-links" style={{ display: "none" }}>
            <li>
              <a href="/#" title="">
                <i className="la la-bookmark"></i>
              </a>
            </li>
            <li>
              <a href="/#" title="">
                <i className="la la-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="job_descp">
          <h3>{title}</h3>
          <ul className="job-dt">
            <li>
              <a href="/#" title="">
                {job_type}
              </a>
            </li>
            <li>
              <span>
                $<>{pay_rate_per_hr_dollar}</> / hr
              </span>
            </li>
          </ul>
          <p>
            {description.length > 50 ? description.substring(0, 20) + "... " : description}
            {description.length > 50 && (
              <a href="/#" title="">
                view more
              </a>
            )}
          </p>
          <ul className="skill-tags">
            {skills.map((skill, idx) => (
              <li key={idx}>
                <a href="/#" title="">
                  {skill}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="job-status-bar">
          <ul className="like-com">
            <li>
              <a href="/#">
                <i className="fas fa-heart"></i> Like
              </a>
              <img src="./images/liked-img.png" alt="" />
              <span>{liked_by.length}</span>
            </li>
            <li>
              <a href="/#" className="com">
                <i className="fas fa-comment-alt"></i> Comment <>{Comment.length}</>
              </a>
            </li>
          </ul>
          <a href="/#">
            <i className="fas fa-eye"></i>Views <>{viewed_by.length}</>
          </a>
        </div>
      </div>
    );
  }
}

export default Post;
