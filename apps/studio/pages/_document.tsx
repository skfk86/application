import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { BootTimeoutFallback } from '@/components/ui/BootTimeoutFallback/BootTimeoutFallback'
import { inter, manrope, notoArabic, sourceCodePro } from '@/fonts'

const IS_ARABIC = process.env.NEXT_PUBLIC_UI_LOCALE === 'ar'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang={IS_ARABIC ? 'ar' : 'en'} dir={IS_ARABIC ? 'rtl' : 'ltr'}>
        <Head />
        <body
          className={`${inter.variable} ${manrope.variable} ${sourceCodePro.variable} ${notoArabic.variable}`}
        >
          <BootTimeoutFallback />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
