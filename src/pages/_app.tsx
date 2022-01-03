import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../styles/theme';
import { SidebarDrawerPRovider } from '../context/SIdebarDrawerContext';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerPRovider>
        <Component {...pageProps} />
      </SidebarDrawerPRovider>
    </ChakraProvider>
  )
}

export default MyApp
