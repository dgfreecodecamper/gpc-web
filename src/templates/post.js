import React from 'react';
// import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  // const post = data.markdownRemark;
  return (
    <div>
      <div dangerouslySetInnerHTML = {{__html: post.html}} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
