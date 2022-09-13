import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const Homepage = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default Homepage
