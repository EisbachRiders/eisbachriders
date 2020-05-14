import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Hero from "../components/homepage/Hero"
import MissionStatement from "../components/homepage/MissionStatement"
import Featured from "../components/homepage/Featured"
import ShopCategories from "../components/homepage/ShopCategories"
import BlogWidget from "../components/blog/BlogWidget"

const Homepage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <MissionStatement />
      <Featured />
      <ShopCategories />
      <BlogWidget />
    </Layout>
  )
}

export default Homepage
