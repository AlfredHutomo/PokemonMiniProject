import { Html, Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/react';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='true'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;

                        font-family: 'Roboto', sans-serif;
                    }
                `}
            />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
