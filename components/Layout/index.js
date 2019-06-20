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
      <link
        rel="shortcut icon"
        type="image/png"
        href="/static/warsawex-logo-transparent-white.png"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        href="http://localhost:3000/favicon.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {props.children}
  </LayoutWrapper>
);

export default Layout;
