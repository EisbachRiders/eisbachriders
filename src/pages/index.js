import * as React from "react"
import Seo from "../components/SearchEngOpt"
import Layout from "../components/Layout"
import Hero from "../components/homepage/Hero"
import Trends from "../components/homepage/Trends"
import SustainableLine from "../components/products/SustainableLine"
import ShopCategories from "../components/homepage/ShopCategories"
import StyledEngineProvider from "@material-ui/core/StyledEngineProvider"

const Homepage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Seo />
        <Hero />
        <SustainableLine />
        <Trends />
        <ShopCategories />
      </Layout>
    </StyledEngineProvider>
  )
}

export default Homepage
