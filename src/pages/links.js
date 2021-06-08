import * as React from "react"
import Seo from "../components/SearchEngOpt"
import BottomFooter from "../components/footer/BottomFooter"
import LinkTree from "../components/linkTree/LinkTree"

const Links = () => {
  return (
    <>
      <Seo />
      <LinkTree />
      <BottomFooter />
    </>
  )
}

export default Links
