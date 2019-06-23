import React from "react";
import Head from "next/head";
import ReactGA from "react-ga";
import "./style.scss";

const LayoutWrapper = props => props.children;

const createTitle = title => {
  if (title) {
    return `${title} | warsaw.ex`;
  } else {
    return "warsaw.ex - Warsaw's Elixir meetup group";
  }
}

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-142587988-1')
}

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }

  render() {
    return (
      <LayoutWrapper>
        <Head>
          <title>{createTitle(this.props.title)}</title>
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
        {this.props.children}
      </LayoutWrapper>
    );
  }
}

export default Layout;
