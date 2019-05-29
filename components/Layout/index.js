import Head from "next/head";
import "./style.scss";

const LayoutWrapper = props => props.children;

const Layout = props => (
  <LayoutWrapper>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,900"
        rel="stylesheet"
      />
    </Head>
    {props.children}
  </LayoutWrapper>
);

export default Layout;
