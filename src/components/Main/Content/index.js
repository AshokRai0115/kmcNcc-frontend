import { Component } from "react";
import PostSection from "./PostSection";
import PostTop from "./PostTop";
import PostPopup from "./PostPopup";

class Content extends Component {
  render() { 
    return (
      <div className="content col-lg-6 col-md-8 no-pd">
        <div className="main-ws-sec">
          <PostPopup user={this.props.user} /> 
          <PostTop user={this.props.user} />
          <PostSection searchKeyword = {this.props.searchKeyword}/>
          
        </div>
      </div>
    );
  }
}

export default Content;
