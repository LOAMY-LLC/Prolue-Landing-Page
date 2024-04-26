import Header from '../Components/Header';
import Hero from '../Components/Hero';
import About from '../Components/AboutUs';
import Products from '../Components/Products';
import Why from '../Components/WhyUs';
import New from '../Components/New';
import Positions from '../Components/Positions';
import Promise from '../Components/Promise'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Products />
        <Why />
        <New />
        <Positions />
        <Promise />
    </div>
  )
}

export default Home