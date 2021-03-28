import { useState } from "react";

const EmailForm = ({ onEmailSubmit, disabled }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        onEmailSubmit(email);
    };

    return (
        <>
            <div className="flex flex-col text-center">
                <form
                    className="flex flex-col text-center"
                    onSubmit={handleSubmit}
                >
                    <div className="text-white">
                        <input
                            type="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="border border-gray-800 bg-black text-white p-2 my-2 rounded-md focus:outline-none focus:border-green-400 mb-4 font-hero p-2.5"
                        />
                    </div>

                    <a
                        href=""
                        onClick={handleSubmit}
                        className="whitespace-nowrap inline-flex items-center justify-center px-3.5 py-1.5 border border-transparent rounded-md shadow-sm text-m font-hero text-gray-100 bg-gradient-to-r from-green-400 to-green-nice hover:text-black"
                    >
                        Send Magic Link
                    </a>
                </form>
            </div>
        </>
    );
};

export default EmailForm;
