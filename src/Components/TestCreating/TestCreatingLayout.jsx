import {Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";

/**
 * WelcomeLayout for 'Auth' page
 * @returns {JSX.Element} Page
 */
export const TestCreatingLayout = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    return (
        <>
            <button
                className="absolute top-4 right-4 z-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={handleBack}
            >
                Back
            </button>
            <Outlet/>
        </>
    );
};