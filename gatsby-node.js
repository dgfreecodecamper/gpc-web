const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');

  return graphql(`{
    allMarkdownRemark(limit: 25, sort: {fields: [frontmatter___order], order: ASC}, filter: {frontmatter: {published: {eq: true}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            date
            order
            published
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach( ({node})=>{
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    } )
  })
}
