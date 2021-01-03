import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Hero from "../components/homepage/Hero"
import MissionStatement from "../components/homepage/MissionStatement"
import Trends from "../components/homepage/Trends"
import ShopCategories from "../components/homepage/ShopCategories"
import Ad from "../components/homepage/Ad"

const Homepage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <MissionStatement />
      <Ad />
      <Trends />
      <ShopCategories />
    </Layout>
  )
}

export default Homepage
