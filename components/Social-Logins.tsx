import { useState } from "react";

const SocialLogins = ({ onSubmit }) => {
    const providers = ["github", "google"];
    const [isRedirecting, setIsRedirecting] = useState(false);

    return (
        <>
            <div className="or-login-with font-hero text-sm tracking-wider">Or continue with</div>
            {providers.map((provider) => {
                return (
                    <div key={provider}>
                        <button
                            type="submit"
                            className="social-btn font-hero text-m"
                            onClick={() => {
                                setIsRedirecting(true);
                                onSubmit(provider);
                            }}
                            key={provider}
                            style={{ backgroundImage: `url(${provider}.png)` }}
                        >
                            {provider.replace(/^\w/, (c) => c.toUpperCase())}
                        </button>
                    </div>
                );
            })}
            {isRedirecting && <div className="redirecting font-hero">Redirecting...</div>}
            <style jsx>{`
                .or-login-with {
                    margin: 25px 0;
                    text-align: center;
                    color: gray;
                }
                .social-btn {
                    cursor: pointer;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    border: 1px solid #202020;
                    padding: 9px 24px 9px 35px;
                    width: 80%;
                    color: white;

                    background-color: #000;
                    background-size: 20px;
                    background-repeat: no-repeat;
                    background-position: 23% 50%;
                }
                .social-btn:hover {
                    background-color: #101010;
                    color: white;
                    border: 1px solid #101010;
                }
                .redirecting {
                    color: gray;
                    font-size: 12px;
                    margin-bottom: 5px;
                }
            `}</style>
        </>
    );
};

export default SocialLogins;
