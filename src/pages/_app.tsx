import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoSvg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Container>
      <Header>
        <Image src={logoSvg} alt="ignite shop logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
