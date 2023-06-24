import { Component } from "react";
import { postAPI } from "../../../../apis";
import Post from "./Post";
 
class PostSection extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  
  componentDidMount() {
    fetch(postAPI, {
      headers: {
        "Content-Type": "application/json",
      },
    })

      .then((resp) => resp.json())
      .then((data) => {
        if (data?.length) {
          this.setState({ posts: data });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  render() {
      var filteredPosts = this.state.posts.filter((post) =>
        post.title.toLowerCase().includes(this.props.searchKeyword.toLowerCase())
      );
    console.log(filteredPosts, this.props.searchKeyword.length)
    if(this.props.searchKeyword.length > 1){
      return (
        <div className="posts-section">
          {filteredPosts.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      );
   
    }

    return (
      <div className="posts-section">
        {this.state.posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
    );
    // return(
    //   <div className="posts-section">
    //     {this.state.posts.map((post, i) => (
    //       <Post key={i} post={post} />
    //     ))}
    //   </div>
    // )
  }
}

export default PostSection;
