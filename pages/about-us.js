import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import About from "../components/About";
import Founders from "../components/Founders";
import SeeUs from "../components/SeeUs";

const AboutUs = () => (
  <Layout title="About Us">
    <Header />
    <About />
    <Founders />
    <SeeUs />
    <Footer />
  </Layout>
);

export default AboutUs;
