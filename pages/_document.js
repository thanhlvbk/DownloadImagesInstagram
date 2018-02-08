import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Document, {Head, NextScript} from 'next/document'

class Main extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  static contextTypes = {
    _documentProps: PropTypes.any,
  }

  render() {
    const {html, errorHtml} = this.context._documentProps
    const {className} = this.props
    return [
      <div className={className} id="__next" dangerouslySetInnerHTML={{__html: html}} />,
      <div id="__next-error" dangerouslySetInnerHTML={{__html: errorHtml}} />,
    ]
  }
}

// https://vue-hn.now.sh/top
export default class AppDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
          />
          {/** Disable tap highlight on IE */}
          <meta name="msapplication-tap-highlight" content="no" />

          {/** Add to homescreen for Chrome on Android */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Download Images Instagram" />

          {/** Add to homescreen for Safari on iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Download Images Instagram" />

          {/** Tile icon for Win8 (144x144 + tile color) */}
          <meta name="msapplication-TileColor" content="#5C33AE" />

          {/** Color the status bar on mobile devices */}
          <meta name="theme-color" content="#5C33AE" />

          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://code.getmdl.io" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet prefetch"
            href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.2/dialog-polyfill.min.css"
          />
          <link
            rel="preload"
            as="style"
            href="https://code.getmdl.io/1.3.0/material.deep_purple-green.min.css"
          />
          {/** Page styles */}
          <link
            rel="stylesheet"
            href="https://code.getmdl.io/1.3.0/material.deep_purple-green.min.css"
          />
          {/** Fonts */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            body {
              font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
              background-color: #f9f9f9;
              height: 100%;
              min-height: auto !important;
            }
          `}</style>
        </body>
      </html>
    )
  }
}
