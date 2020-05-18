import Header from "../components/Header";
import Welcome from "../components/Welcome";
import NextMeetup from "../components/NextMeetup";
import NextStudio from "../components/NextStudio";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <Header />
    <Welcome />
    <NextStudio />
    <Sponsors />
    <Footer />
  </Layout>
);

export default Index;
