import React from 'react'

import Nav from './Nav/Nav.js'
import Footer from './Footer/footer.js'

const Layout = props => (
  <div>
    <Nav />

    {props.children}

    <Footer />
  </div>
)

export default Layout
