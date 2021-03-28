import { useContext } from "react";
import Router from "next/router";
import { magic } from "@/lib/magic";
import { UserContext } from "@/lib/UserContext";

const Header = () => {
    const [user, setUser] = useContext(UserContext);

    const logout = () => {
        magic.user.logout().then(() => {
            setUser({ user: null });
            Router.push("/login");
        });
    };

    return (
        <div className="relative bg-black z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/" className="text-white font-hero">
                            Starter
                        </a>
                    </div>
                   
                    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a
                            onClick={logout}
                            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-md shadow-sm ml-4 text-sm btn-sm font-hero text-white bg-gradient-to-r from-green-400 to-green-nice hover:text-black"
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
