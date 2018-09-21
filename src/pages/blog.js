import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import './index.css'

const BlogPage = ({data}) => {
  console.log(data)
  return(
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id} className="article-box">
            <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}>
              <h3 className="title">{node.frontmatter.title}</h3>
            </Link>
            <p className="author">{node.frontmatter.author}</p>
            <p className="date">{node.frontmatter.date} {node.timeToRead}min read</p>
            <p className="excerpt">{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export default BlogPage

export const query = graphql`
query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        fields{
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
