import React from "react";
import { Link } from 'gatsby'
import '../styles/blog.scss';
import { graphql } from 'gatsby'

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-wrapper">
      <div id="main">
        <div className="content post">
          <Link to="/blog"><i className="icon-arrow-left"></i> Back</Link>
          <h1>{post.frontmatter.title}</h1>
          <h4>{post.frontmatter.author} - <span>{post.frontmatter.date}</span></h4>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  );
};
export default PostTemplate;

export const query = graphql`
  query PostQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
        html
      frontmatter {
        title
        author
      date
    }
  }
}
`;