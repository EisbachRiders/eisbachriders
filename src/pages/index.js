import React from "react"
import Seo from "../components/Seo"
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
        <Seo />
        <Hero />
        <MissionStatement />
        <Trends />
        <ShopCategories />
      </Layout>
    </StyledEngineProvider>
  )
}

export default Homepage
