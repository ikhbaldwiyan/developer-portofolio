import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Portofolio Ikhbal</title>
        </head>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </div>
  )
}

export default Layout