import React from "react";
import classes from './Home.module.scss'
import BlogPost from "../../components/blogPost";

const Home = () => {
  return (
    <div className={classes.homepage}>
      <BlogPost
        title="Home Blog Post"
        description="This is a blog post on the home page."
        url={"/"}
      />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
