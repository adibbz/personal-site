import React from "react";
import Link from 'gatsby-link'
import '../styles/blog.scss'

export default ({ data }) => {
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