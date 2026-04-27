import { Hero } from '../components/home/Hero'
import { InfoGrid } from '../components/home/InfoGrid'
import { Updates } from '../components/home/Updates'
import { Community } from '../components/home/Community'

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <InfoGrid />
      <Updates />
      <Community />
    </div>
  )
}

export default Home
