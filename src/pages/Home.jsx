import Hero from '../components/Hero'
import TechBanner from '../components/TechBanner'
import StorySection from '../components/StorySection'
import HighlightCards from '../components/HighlightCards'
import ValueProps from '../components/ValueProps'
import FeatureList from '../components/FeatureList'
import HomeCTA from '../components/HomeCTA'

const Home = () => {
  return (
    <>
      <Hero />
      <TechBanner />
      <StorySection />
      <HighlightCards />
      <ValueProps />
      <FeatureList />
      <HomeCTA />
    </>
  )
}

export default Home
