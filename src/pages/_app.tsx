import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Roboto } from '@next/font/google'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '@/styles/darkTheme'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </div>
  )
}
