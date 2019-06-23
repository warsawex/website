import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import SpeakUpForm from "../components/SpeakUpForm";
import PreviousSpeakers from "../components/PreviousSpeakers";

const SpeakUp = () => (
  <Layout title="Speak Up">
    <Header />
    <SpeakUpForm />
    <PreviousSpeakers />
    <Footer />
  </Layout>
);

export default SpeakUp;
