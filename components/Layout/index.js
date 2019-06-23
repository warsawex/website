import Head from "next/head";
import "./style.scss";

const LayoutWrapper = props => props.children;

const createTitle = title => {
  if (title) {
    return `${title} | warsaw.ex`;
  } else {
    return "warsaw.ex - Warsaw's Elixir meetup group";
  }
}

const Layout = props => (
  <LayoutWrapper>
    <Head>
      <title>{createTitle(props.title)}</title>
      <meta
        name="description"
        content="warsaw.ex is a community dedicated to Elixir, Erlang, OTP
        and functional programming, organizing monthly meetups in Warsaw." />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,900"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        href="/static/favicon.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {props.children}
  </LayoutWrapper>
);

export default Layout;
