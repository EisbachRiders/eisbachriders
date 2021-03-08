import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Hero from "../components/homepage/Hero"
import MissionStatement from "../components/homepage/MissionStatement"
import Trends from "../components/homepage/Trends"
import ShopCategories from "../components/homepage/ShopCategories"
import StyledEngineProvider from "@material-ui/core/StyledEngineProvider"

const Homepage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <SEO />
        <Hero />
        <MissionStatement />
        <Trends />
        <ShopCategories />
      </Layout>
    </StyledEngineProvider>
  )
}

export default Homepage
