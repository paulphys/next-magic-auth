import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <link
                    rel="preload"
                    href="../fonts/JetBrainsMono-Medium.woff2"
                    as="font"
                    type="font/woff2"
                />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
