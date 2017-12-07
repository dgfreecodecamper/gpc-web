import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import './index.css'
// import './index.scss'

const SideMenu = () => {
  const sideMenuStyle = {
    backgroundColor: 'green'
  };
  return(
    <div>
      <ul>
        <li>chapter 1</li>
        <li>chapter 2</li>
        <li>chapter 3</li>
        <li>chapter 4</li>
        <li>chapter 5</li>
        <li>chapter 6</li>
      </ul>
    </div>
  )
}




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
