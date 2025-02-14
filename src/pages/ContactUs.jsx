import HeadContact from "../components/HeadContact";
import Navbar from "../components/Navbar";
import HeroCommon from "../components/HeroCommon";
import Footer from '../components/Footer';
import ContactData from '../components/ContactData'

export default function ContactUs() {
    return (
        <>
          <HeadContact />
          <Navbar />
          <HeroCommon title='Contatct Us'/>
          <ContactData />
          <Footer />
        </>
      
    )
}