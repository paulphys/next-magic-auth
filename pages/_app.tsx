import { AppProps } from "next/dist/next-server/lib/router/router";
import { useState, useEffect } from "react";
import { UserContext } from "@/lib/UserContext";
import { magic } from "@/lib/magic";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

import "@/styles/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser({ loading: true });
        magic.user.isLoggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                magic.user.getMetadata().then((userData) => setUser(userData));
            } else {
                router.push("/login");
                setUser({ user: null });
            }
        });
    }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            <Head>
                <title>Next.js + Magic Auth</title>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UserContext.Provider>
    );
};

export default App;
