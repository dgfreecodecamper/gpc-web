import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import './index.css'
import './index.css'

const SideMenu = () => {
  const sideMenuStyle = {
    backgroundColor: 'green'
  };
  return(
    <div style={sideMenuStyle} className="menu">
      <ul>
        <li>the menu</li>
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
    <div style={headerStyle} className="header">
      <h1>Hello this is the header</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid explicabo possimus maiores fugiat officiis magnam veritatis laborum expedita at. Quidem debitis hic nam illo eius explicabo. Laboriosam impedit amet ducimus temporibus dolorum, corrupti corporis veritatis possimus aliquid, minus reprehenderit debitis enim atque sit magni similique obcaecati unde! Officiis, rem.</p>
    </div>
  )
}



const Footer = () => {
  const footerStyle = {
    backgroundColor: 'blue'
  }
  return (
    <div style={footerStyle} className="footer">
      <h1>Hello for the footer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe maxime libero tempore temporibus. Molestias harum placeat, ex est amet dolor cupiditate quidem quos dolores natus similique illum architecto non totam voluptate necessitatibus illo eligendi quis corporis aliquid iusto praesentium suscipit odio fugit. Nesciunt voluptates officiis minus odio praesentium vel, laudantium dolore, tempora voluptatem consequatur illo, nostrum velit porro eum!</p>
    </div>
  )
}


// const Mainsect = ({ children }) => {
//   const mainsectStyle = {
//     backgroundColor: 'pink'
//   }
//   return (
//     <div>
//       {children()}
//     </div>
//   )
// }





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
    <div className="pagewrapper">
      <div className="container">
        <Header />
        {/* <Mainsect /> */}
        <div className="content" style={{ backgroundColor: 'pink' }}>
          {children()}
        </div>
        <SideMenu />
        <Footer />
      </div>
    </div>
  </div>
)

// Mainsect.propTypes = {
//   children: PropTypes.func,
// }

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
