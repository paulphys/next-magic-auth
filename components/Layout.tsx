import { useContext } from "react";
import { UserContext } from "@/lib/UserContext";

const Layout = (props) => {
    const [user] = useContext(UserContext);

    return (
    <>
        <main className="bg-black h-screen">
            {props.children}
        </main>
    </>
    )
};

export default Layout;
