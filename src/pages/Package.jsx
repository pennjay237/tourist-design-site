import HeadContact from "../components/HeadContact";
import Navbar from "../components/Navbar";
import HeroCommon from "../components/HeroCommon";
import PackageText from "../components/PackageText";
import DisplayCards from "../components/DisplayCards";
import Footer from '../components/Footer';

export default function Package() {
    return (
        <>
          <HeadContact/>
          <Navbar/>
          <HeroCommon title='Tour Package'/>
          <PackageText 
          title='Select your Best Package for your Travel' 
          text='Choose your Package'
          />
          <DisplayCards />
          <DisplayCards />
          <DisplayCards />
          <DisplayCards />
          <Footer />
        </>
    )
}