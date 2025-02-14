import HeadContact from "../components/HeadContact";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PackageText from "../components/PackageText";
import DisplayCards from "../components/DisplayCards";
import Destinations from "../components/Destinations";
import WhyUS from '../components/WhyUs';
import Client from '../components/Client';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeadContact />
      <Navbar />
      <div className="container">
        <Hero />
        <SearchBar />
      </div>
      <PackageText 
      title='Select your Best Package for your Travel' 
      text='Choose your Package'
      />
      <DisplayCards />
      <DisplayCards />
      <PackageText 
      title='Select Our Best Popular Destinations' 
      text='Popular Destinations'
      />
      <Destinations />

      <PackageText 
      title='Why Travel with Africa wizzy Safari' 
      text='Why us?'
      />

      <WhyUS />

      <PackageText 
      title='What our clients say about us' 
      text='Our Traveller Say'
      />

      <Client/>

      <div className="colors">
        <div className='color yellow'></div>
        <div className='color green'></div>
        <div className='color green'></div>
      </div>

      <Footer />
    </>
  );
}