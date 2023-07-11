import '@/styles/globals.css'
import '@justeat/pie-design-tokens/dist/jet.css'
import '@justeat/pie-design-tokens/dist/jet-hsl-colors.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
