import * as React from "react"
import "../styles.css"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ headerData, footerData, children }) => {
  return (
    <>
      <Header data={headerData} />
        {children}
      <Footer data={footerData} />
    </>
  )
}

export default Layout
