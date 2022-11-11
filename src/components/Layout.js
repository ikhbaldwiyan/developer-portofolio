import React from 'react'
import { useDarkMode } from "../helpers/useDarkMode";
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div>
      <html className={`${theme === 'dark' ? "dark" : "light"} `} lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Portofolio Ikhbal</title>
        </head>
        <body className="bg-white dark:bg-gradient-to-r from-bgDark to-slate-800">
          <Navbar isDarkMode={theme === 'dark'} changeTheme={toggleTheme} />
            {children}
          <Footer />
        </body>
      </html>
    </div>
  )
}

export default Layout