import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {Outlet} from "react-router-dom";

// WelcomeLayout Component
const WelcomeLayout = () => {
    return (
        <div className="min-h-screen min-w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
            <div> <Header /> </div>

            <div> <Outlet/> </div>

            <div> <Footer /> </div>
        </div>
    );
};

export default WelcomeLayout;