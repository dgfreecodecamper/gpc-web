import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
  <div>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <Link to="/page-2/">Go to the second page</Link>
  </div>
)

export default ThirdPage
