import Header from "../components/Header";
import Welcome from "../components/Welcome";
import NextMeetUp from "../components/NextMeetup";
import Sponsors from "../components/Sponsors";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Welcome />
      <NextMeetUp />
      <Sponsors />
      <Footer />
    </Layout>
  );
}
