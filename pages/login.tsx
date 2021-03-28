import { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { magic } from "@/lib/magic";
import { UserContext } from "@/lib/UserContext";
import EmailForm from "@/components/Email-Form";
import SocialLogins from "@/components/Social-Logins";

const Login = () => {
    const [disabled, setDisabled] = useState(false);
    const [user, setUser] = useContext(UserContext);

    // Redirec to / if the user is logged in
    useEffect(() => {
        user?.issuer && Router.push("/");
    }, [user]);

    async function handleLoginWithEmail(email) {
        try {
            setDisabled(true); // disable login button to prevent multiple emails from being triggered

            // Trigger Magic link to be sent to user
            const didToken = await magic.auth.loginWithMagicLink({
                email,
                redirectURI: new URL("/callback", window.location.origin).href, // optional redirect back to your app after magic link is clicked
            });

            // Validate didToken with server
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${didToken}`,
                },
            });

            if (res.status === 200) {
                // Set the UserContext to the now logged in user
                const userMetadata = await magic.user.getMetadata();
                await setUser(userMetadata);
                Router.push("/");
            }
        } catch (error) {
            setDisabled(false); // re-enable login button - user may have requested to edit their email
            console.log(error);
        }
    }

    async function handleLoginWithSocial(provider) {
        await magic.oauth.loginWithRedirect({
            provider, // google, apple, etc
            redirectURI: new URL("/callback", window.location.origin).href, // required redirect to finish social login
        });
    }

    return (
        <div className="flex h-screen bg-black">
            <div className="bg-black max-w-xs p-6 text-center border-2 rounded-md box-border border-gray-900 m-auto">
                                    <h3 className="flex flex-col text-center font-hero text-white text-3xl mb-10">
                        Login
                    </h3>
                <EmailForm
                    disabled={disabled}
                    onEmailSubmit={handleLoginWithEmail}
                />
                <SocialLogins onSubmit={handleLoginWithSocial} />
            </div>
        </div>
    );
};

export default Login;
