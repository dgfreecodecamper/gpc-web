import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import './index.css'
// import './index.scss'



const Header = () =>  {
  const headerStyle = {
    backgroundColor: 'red'
  };
  return (
    <div style={headerStyle}>
      <h1>hel44pt</h1>
    </div>
  )
}



const Footer = () => {
  const footerStyle = {
    backgroundColor: 'blue'
  }
  return (
    <div style={footerStyle}>
      <h1>Footer</h1>
    </div>
  )
}


const Mainsect = () => {
  const mainsectStyle = {
    backgroundColor: 'pink'
  }
  return (
    <div>

    </div>
  )
}





const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
        integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
        crossorigin="anonymous">
      </link>
    </Helmet>

    <div className="container">
      <Header />
      <div>
        {children()}
      </div>
      <Footer/>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
