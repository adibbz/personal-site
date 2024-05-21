import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/blog.scss'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className="about-wrapper">
        <div id="main">
          <div className="content">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id} className="article-box">
                <Link to={node.fields.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className="title">{node.frontmatter.title} <i className="icon-arrow-right-circle"></i></h3>
                </Link>
                <p className="author">{node.frontmatter.author}</p>
                <p className="date">{node.frontmatter.date} <span className="time">{node.timeToRead} min read</span></p>
                <p className="excerpt">{node.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default BlogPage

export const query = graphql`
query HomePageQuery {
  allMarkdownRemark(sort: [{ frontmatter: { date: DESC } }]) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
          author
        }
        excerpt
        timeToRead
      }
    }
  }
}
`
