import Head from "next/head";

const LayoutWrapper = props => props.children;

const Layout = props => (
  <LayoutWrapper>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,900"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>
      {`
        body {
          font-family: "Montserrat", sans-serif;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
    {props.children}
  </LayoutWrapper>
);

export default Layout;
