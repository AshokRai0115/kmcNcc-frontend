import { Component } from "react";
import { userAPI } from "../../../apis";



class PostPopup extends Component{
  constructor(){
    super()
    this.handlePost = this.handlePost.bind(this)
  }
    handlePost(event) {
    event.preventDefault();
    const form = event.target.closest("form#postform");
    const title = form.querySelector("#title").value;
    const skills = form.querySelector("#skills").value.split(" ");
    const location = form.querySelector("#location").value;
    const pay_rate_per_hr_dollar = form.querySelector("#price1").value;
    const job_type = form.querySelector("#job-nature").value;
    // const created_at = form.querySelector("#date").value;
    const description = form.querySelector("#description").value;
  

    
    fetch(userAPI +"/" +this.props.user?.id + "/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        skills,
        location,
        pay_rate_per_hr_dollar,
        job_type,
        // created_at,
        description
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // if (data.id) {
        //   document.querySelector("#err").innerHTML = "";
        //   window.sessionStorage.setItem("loggedInUser", data.id);
          window.location.href = "/";
        // } else if (data.detail) {
        //   document.querySelector("#err").innerHTML = data.detail;
        // }
      })
    }
      
    closePopup(event){
      event.preventDefault();
    document.querySelector(".post-popup.job_post").classList.remove("active");
    document.querySelector(".wrapper").classList.remove("overlay");
    return false;
    }
    render(){
        return(
        <div className="post-popup job_post">
          <button id="close-popup" onClick={this.closePopup}>X</button>
          <div className="post-project">
            <h3>Post a job</h3>
            <div className="post-project-fields">
              <form id="postform">
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" id="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <input type="text" id="location" placeholder="location" />
                  </div>
                  {/* <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-lg-12">
                    <input type="text" id="skills" placeholder="Skills" />
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="price-br">
                      <input type="text" id="price1" placeholder="Price" />
                      <i className="la la-dollar"></i>
                    </div>
                  </div> */}

   
                  <div className="col-lg-6">
                    <div className="inp-field">
                      <select id="job-nature">
                      <option value="">Job type</option>
                        <option value="full time">Full Time</option>
                        <option value="part time">part time</option>
                      </select>
                    </div>
                  </div>
                  <div className="price-br">
                      <input type="text" id="price1" placeholder="Price" />
                      <i className="la la-dollar"></i>
                    </div>
                    
                  {/* <div className="col-lg-6">
                    <div className="inp-field">
                      <input id="date" placeholder="date" type="date"></input>
                    </div>
                  </div> */}

                  <div className="col-lg-12">
                    <textarea id="description" placeholder="Description"></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        <button className="active" type="submit" value="post" onClick={this.handlePost}>
                          Post
                        </button>
                      </li>
                      <li>
                        <a href="/#" title="">
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <a href="/#" title="">
              {/* <i className="la la-times-circle-o"></i> */}

              {/* -==--=--=-===-p=p-=-=oojo=-o=oj=ook-0k-0=0=0kknkl=-k-=-= */}
            </a>
          </div>
        </div>
        
        )
    }
}

export default PostPopup;