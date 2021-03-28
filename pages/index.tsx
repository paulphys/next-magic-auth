import { useContext } from "react";
import { UserContext } from "@/lib/UserContext";
import Loading from '@/components/Loading';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = (): JSX.Element => {
    const [user] = useContext(UserContext);

    return ( <>{user?.loading ? <Loading /> : user?.issuer &&
        <>
        <Header />
         <div className="bg-black text-center text-3xl text-white font-hero p-24">
             You're now logged in!
        </div>
        <Footer />
          </>
            }
        </> );
};

export default Index;
